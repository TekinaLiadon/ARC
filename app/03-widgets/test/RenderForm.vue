<script setup lang="ts">
import { h, toValue, ref } from 'vue';
import { useI18n } from '#i18n';

const props = defineProps({
  schema: {
    type: Array as () => any[],
    required: true,
  },
  formData: {
    type: Object as () => Record<string, any>,
    default: () => ({}),
  },
  dynamicAssets: {
    type: Object as () => {
      _components: Record<string, any>;
      [key: string]: any;
    },
    default: () => ({ _components: {} }),
  },
});

const { t } = useI18n();

function getValueByPath(obj: any, path: string | string[]) {
  const parts = Array.isArray(path) ? path : path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === null || typeof current !== 'object' || !(part in current)) {
      return undefined;
    }
    current = current[part];
  }
  return current;
}

function setValueByPath(obj: any, path: string | string[], value: any) {
  const parts = Array.isArray(path) ? path : path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i === parts.length - 1) {
      current[part] = value;
    } else {
      if (!current[part] || typeof current[part] !== 'object') {
        current[part] = {};
      }
      current = current[part];
    }
  }
  return obj;
}

const renderSlotContent = (slotConfig: any, parentItemId: string | number) => {
  if (!slotConfig) return null;

  if (slotConfig.type === 'text') {
    return t(slotConfig.value);
  }

  const slotItemId = `${parentItemId}-slot-${slotConfig.id || slotConfig.type}`;
  return renderComponent({ ...slotConfig, id: slotItemId }, parentItemId);
};

const renderComponent = (item: any, parentItemId: string | number | null = null): any => {
  if (item.directives && item.directives['v-show']) {
    const dynamicVShowValue = getValueByPath(props.dynamicAssets, `${item.id}.directives.v-show`);
    const vShowValue = dynamicVShowValue !== undefined ? toValue(dynamicVShowValue) : toValue(item.directives['v-show']);

    if (!vShowValue) {
      return null;
    }
  }

  let componentToRender;
  if (item.type === 'text') {
    return t(item.value);
  }

  componentToRender = props.dynamicAssets._components[item.type];

  if (!componentToRender && typeof item.type === 'string' && item.type.toLowerCase() === item.type) {
    componentToRender = item.type;
  }

  if (!componentToRender) {
    console.warn(`[DynamicFormRenderFunction] Компонент с типом "${item.type}" не найден в dynamicAssets._components. Или это не стандартный HTML-тег.`);
    return h('div', { style: 'color: red;' }, `Ошибка: Компонент "${item.type}" не найден.`);
  }

  const componentProps: Record<string, any> = {};

  if (item.props) {
    Object.assign(componentProps, item.props);
  }
  if (item.class) {
    componentProps.class = item.class;
  }

  const assetForThisItem = props.dynamicAssets[item.id];
  if (assetForThisItem && assetForThisItem.props) {
    if (item.dynamicProps && Array.isArray(item.dynamicProps)) {
      item.dynamicProps.forEach((key: string) => {
        const dynamicValue = getValueByPath(assetForThisItem.props, key);
        if (dynamicValue !== undefined) {
          setValueByPath(componentProps, key, toValue(dynamicValue));
        }
      });
    }
  }

  if (assetForThisItem && assetForThisItem.emits) {
    if (item.dynamicEmits && Array.isArray(item.dynamicEmits)) {
      item.dynamicEmits.forEach((eventName: string) => {
        const handler = assetForThisItem.emits[eventName];
        if (typeof handler === 'function') {
          componentProps[`on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`] = handler;
        }
      });
    }
  }

  const childrenNodes: Record<string, any> = {};

  if (item.children) {
    if (Array.isArray(item.children)) {
      childrenNodes.default = () => item.children.map((childItem: any, childIndex: number) =>
          renderComponent(childItem, item.id || `${parentItemId}-${childIndex}`)
      );
    } else if (typeof item.children === 'string') {
      childrenNodes.default = () => t(item.children);
    }
  }

  if (item.slots) {
    for (const slotName in item.slots) {
      childrenNodes[slotName] = () => {
        const slotConfig = item.slots[slotName];
        const slotDynamicAssets = assetForThisItem?.slots?.[slotName];

        const finalSlotConfig = { ...slotConfig };
        if (slotDynamicAssets?.emits) {
          finalSlotConfig.emits = slotDynamicAssets.emits;
        }
        if (finalSlotConfig.emits) {
          for (const eventName in finalSlotConfig.emits) {
            const handler = finalSlotConfig.emits[eventName];
            if (typeof handler === 'function') {
              if (!finalSlotConfig.props) finalSlotConfig.props = {};
              finalSlotConfig.props[`on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`] = handler;
            }
          }
        }
        return renderSlotContent(finalSlotConfig, item.id || null);
      };
    }
  }

  return h(componentToRender, { key: item.id || parentItemId, ...componentProps }, childrenNodes);
};
</script>

<template>
  <div class="dynamic-form-wrapper">
    <template v-for="item in schema" :key="item.id">
      <component :is="renderComponent(item)" />
    </template>
  </div>
</template>


<style scoped>

</style>