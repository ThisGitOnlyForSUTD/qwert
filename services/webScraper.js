// services/webScraper.js
const puppeteer = require('puppeteer-core');

async function scrapeData(searchQuery) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'], // Добавляем аргумент для работы в headless-режиме без sandbox
  });
  const page = await browser.newPage();

  const url = `https://global.wildberries.ru/catalog?search=${encodeURI(searchQuery)}`;
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Функция для автопрокрутки страницы
  const autoScroll = async () => {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        let distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
  };

  // Прокручиваем страницу до конца
  await autoScroll();

  // Ищем кнопку "Показать еще"
  let loadMoreButton = await page.$('.pagination-next');
  // Кликаем на кнопку, пока она существует
  while (loadMoreButton) {
    await loadMoreButton.click();
    await page.waitForTimeout(2000);
    await autoScroll();
    await page.waitForTimeout(10000);
    loadMoreButton = await page.$('.pagination-next');
  }

  // Собираем данные о продуктах со страницы
  const products = await page.evaluate(() => {
    let products = [];
    let productCards = document.querySelectorAll('[data-tag="card"]');
    for (let productCard of productCards) {
      const product = {};

      let linkElement = productCard.querySelector('[data-tag="cardLink"]');
      if (linkElement) {
        const href = linkElement.getAttribute('href');
        const id = href.substring(href.indexOf('=') + 1);
        product.id = id;
      }
      let imgElement = productCard.querySelector('.card-img picture img');
      let priceElement = productCard.querySelector('[data-tag="salePrice"]');
      let oldPriceElement = productCard.querySelector('.price__old del');
      let discountElement = productCard.querySelector('.price__discount');
      let brandElement = productCard.querySelector('.b-card__brand');
      let nameElement = productCard.querySelector('.b-card__name');
      let ratingElement = productCard.querySelector('.b-card__rating span:last-child');
      let deliveryElement = productCard.querySelector('[data-tag="delivery"] span');

      if (linkElement) product.link = linkElement.getAttribute('href');
      if (imgElement) product.imgSrc = imgElement.getAttribute('src');
      if (priceElement && priceElement.textContent) product.price = priceElement.textContent.trim();
      if (oldPriceElement && oldPriceElement.textContent) product.oldPrice = oldPriceElement.textContent.trim();
      if (discountElement && discountElement.textContent) product.discount = discountElement.textContent.trim();
      if (brandElement && brandElement.textContent) product.brand = brandElement.textContent.trim();
      if (nameElement && nameElement.textContent) product.name = nameElement.textContent.trim();
      if (ratingElement && ratingElement.textContent) product.rating = ratingElement.textContent.trim();
      if (deliveryElement && deliveryElement.textContent) product.delivery = deliveryElement.textContent.trim();

      products.push(product);
    }

    return products;
  });

  await browser.close();
  return products;
}

module.exports = { scrapeData };
