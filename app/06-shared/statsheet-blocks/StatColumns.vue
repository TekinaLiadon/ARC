<script setup>
const props = withDefaults(defineProps<{ columns?: number }>(), {
  columns: 3,
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
  <div class="stat-columns">
    <div
      class="grid"
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
  gap: 0.5rem;
  grid-template-columns: repeat(var(--col-count), 1fr);
}

@container (width < 500px) {
  .grid {
    grid-template-columns: repeat(var(--col-count-medium), 1fr);
  }
}

@container (width < 200px) {
  .grid {
    grid-template-columns: repeat(var(--col-count-small), 1fr);
  }
}
</style>
