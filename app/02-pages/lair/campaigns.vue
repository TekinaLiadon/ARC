<script setup lang="ts">
const { t } = useI18n();

const links = ref([
  {
    label: t("general.create"),
    icon: "i-lucide-wand-sparkles",
    color: "secondary",
  },
  {
    label: t("general.join"),
    icon: "i-lucide-circle-plus",
    color: "primary",
  },
]);
</script>

<template>
  <UPageHeader
    :title="$t('lair.campaigns.title')"
    :description="$t('lair.campaigns.description')"
    :links="links"
  />
  <UPageBody>
    <UPageCTA :description="$t('lair.campaigns.none')" variant="soft" />
    <UPageCard
      orientation="horizontal"
      spotlight
      spotlight-color="primary"
      :ui="{
        wrapper: 'flex flex-col flex-1 justify-between h-full',
        body: 'flex-0',
        footer: 'mt-0',
      }"
    >
      <template #leading>
        <div class="flex gap-2">
          <UBadge class="rounded-full" color="secondary" variant="soft">
            {{ $t("lair.campaigns.creatorBadge") }}
          </UBadge>
          <UBadge class="rounded-full" color="secondary" variant="soft">
            {{ $t("lair.campaigns.gmBadge") }}
          </UBadge>
        </div>
      </template>
      <template #body>
        <div class="font-bold text-xl">Украденные земли</div>
        <div class="mt-3 flex items-center gap-2">
          <UButton
            class="font-bold rounded-full"
            icon="i-lucide-swords"
            size="lg"
          >
            {{ $t("lair.campaigns.enter") }}
          </UButton>
          <UButton
            class="font-bold rounded-full"
            icon="i-lucide-trash-2"
            size="sm"
            color="error"
            variant="ghost"
          />
        </div>
      </template>
      <template #footer>
        <UAvatarGroup size="lg">
          <UTooltip text="benjamincanac">
            <UAvatar
              src="https://github.com/benjamincanac.png"
              alt="Benjamin Canac"
            />
          </UTooltip>
          <UTooltip text="hi">
            <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          </UTooltip>
          <UTooltip text="gb">
            <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          </UTooltip>
        </UAvatarGroup>
      </template>
      <template #default>
        <img
          src="https://files.d20.io/images/81973599/lkbnS8Jc4mnevhAOrXMIMA/max.jpg"
          class="w-full rounded-lg"
        />
      </template>
    </UPageCard>
  </UPageBody>
</template>

<style scoped></style>
