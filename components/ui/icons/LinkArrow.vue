<template>
  <svg
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMin slice"
    v-bind="$attrs"
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.435 10H30v15.312h-2.011V13.433L11.422 30 10 28.578 26.567 12.01H14.435V10z"
      :fill="fill"
    >
    </path>
  </svg>
</template>

<script>
import icon from './icon'
export default {
  ...icon,
}
</script>