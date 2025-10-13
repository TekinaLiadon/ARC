<script setup lang="ts">
const props = defineProps({
  columns: {
    type: Number,
    default: 3,
  },
});

const adaptiveColumns = computed(() => {
  let mediumCalc = Math.ceil(props.columns / 2);
  if (props.columns % 2 !== mediumCalc % 2) mediumCalc += 1;

  return {
    medium: mediumCalc,
    small: 1,
  };
});
</script>

<template>
  <div class="stat-columns mb-4">
    <div
      class="grid gap-2"
      :style="{
        '--col-count': props.columns,
        '--col-count-medium': adaptiveColumns.medium,
        '--col-count-small': adaptiveColumns.small,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.stat-columns {
  container-type: inline-size;
}
.grid {
  display: grid;
  grid-template-columns: repeat(var(--col-count), 1fr);

  & > * {
    min-width: 0;
  }

  @container (width < 500px) {
    grid-template-columns: repeat(var(--col-count-medium), 1fr);
  }

  @container (width < 350px) {
    grid-template-columns: repeat(var(--col-count-small), 1fr);
  }
}
</style>
