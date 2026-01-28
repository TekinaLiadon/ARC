<script setup lang="ts">
import StatColumns from "~/06-shared/statsheet-blocks/StatColumns.vue";
import StatColumn from "~/06-shared/statsheet-blocks/StatColumn.vue";
import StatField from "~/06-shared/statsheet-blocks/StatField.vue";
import StatInput from "~/06-shared/statsheet-blocks/StatInput.vue";
import StatImage from "~/06-shared/statsheet-blocks/StatImage.vue";
import StatTextarea from "~/06-shared/statsheet-blocks/StatTextarea.vue";
import StatInputNumber from "~/06-shared/statsheet-blocks/StatInputNumber.vue";
import StatCheckCounter from "~/06-shared/statsheet-blocks/StatCheckCounter.vue";
import StatRow from "~/06-shared/statsheet-blocks/StatRow.vue";
import type { AccordionItem } from "@nuxt/ui";
import StatAccordion from "~/06-shared/statsheet-blocks/StatAccordion.vue";
import StatPopoverButton from "~/06-shared/statsheet-blocks/StatPopoverButton.vue";
import StatCard from "~/06-shared/statsheet-blocks/StatCard.vue";

const accordionItems: AccordionItem[] = [
  {
    label: "Bio",
    icon: "i-rpg-character",
  },
  {
    label: "Stats",
    icon: "i-rpg-skills",
  },
  {
    label: "Defences",
    icon: "i-rpg-bell-shield",
  },
];
</script>

<template>
  <div>
    <StatRow class="justify-between">
      <StatField label="Hero points">
        <StatCheckCounter :max-count="3" />
      </StatField>
      <StatField label="Hit points">
        <UFieldGroup>
          <StatInputNumber class="w-min min-w-[6em]" color="error" />
          <UTooltip text="Maximum = ancestry + (class + con) * level">
            <UBadge variant="subtle" color="secondary" size="lg">20</UBadge>
          </UTooltip>
          <StatPopoverButton>
            <StatField label="From class">
              <StatInputNumber size="md" orientation="horizontal" />
            </StatField>
            <StatField label="From ancestry">
              <StatInputNumber size="md" orientation="horizontal" />
            </StatField>
            <StatField label="From whatever">
              <StatInputNumber size="md" orientation="horizontal" />
            </StatField>
          </StatPopoverButton>
        </UFieldGroup>
      </StatField>
      <StatField label="Dying/Wounded">
        <UFieldGroup>
          <StatInputNumber class="w-min min-w-[6em]" :min="0" />
          <StatInputNumber class="w-min min-w-[6em]" :min="0" />
        </UFieldGroup>
      </StatField>
    </StatRow>
    <StatAccordion :items="accordionItems" :default-value="['0', '1', '2']">
      <template #content="{ item }">
        <template v-if="item.label === 'Bio'">
          <StatColumns :columns="3">
            <StatImage label="Character art" />
            <StatColumn class="col-span-2">
              <StatField label="Name" class="mb-2">
                <StatInput :ui="{ root: '' }" />
              </StatField>
              <StatField label="About">
                <StatTextarea :rows="9" />
              </StatField>
            </StatColumn>
          </StatColumns>
          <StatColumns :columns="4">
            <StatField label="Ancestry">
              <StatInput />
            </StatField>
            <StatField label="Heritage">
              <StatInput />
            </StatField>
            <StatField label="Background">
              <StatInput />
            </StatField>
            <StatField label="Alignment">
              <StatInput />
            </StatField>
            <StatField label="Class">
              <StatInput />
            </StatField>
            <StatField label="Deity">
              <StatInput />
            </StatField>
            <StatField label="Size">
              <StatInput />
            </StatField>
            <StatField label="Level">
              <UFieldGroup>
                <StatInput type="number" disabled />
                <StatInput>
                  <template #trailing>XP</template>
                </StatInput>
              </UFieldGroup>
            </StatField>
          </StatColumns>
        </template>
        <template v-if="item.label === 'Stats'">
          <StatRow class="justify-between">
            <StatField label="Strength">
              <UFieldGroup orientation="vertical">
                <StatInput type="number" disabled>
                  <template #trailing> Mod </template>
                </StatInput>
                <StatInput type="number" highlight>
                  <template #trailing> Score </template>
                </StatInput>
              </UFieldGroup>
            </StatField>
            <StatField label="Dexterity">
              <UFieldGroup orientation="vertical">
                <StatInput type="number" disabled>
                  <template #trailing> Mod </template>
                </StatInput>
                <StatInput type="number" highlight>
                  <template #trailing> Score </template>
                </StatInput>
              </UFieldGroup>
            </StatField>
            <StatField label="Constitution">
              <UFieldGroup orientation="vertical">
                <StatInput type="number" disabled>
                  <template #trailing> Mod </template>
                </StatInput>
                <StatInput type="number" highlight>
                  <template #trailing> Score </template>
                </StatInput>
              </UFieldGroup>
            </StatField>
            <StatField label="Intelligence">
              <UFieldGroup orientation="vertical">
                <StatInput type="number" disabled>
                  <template #trailing> Mod </template>
                </StatInput>
                <StatInput type="number" highlight>
                  <template #trailing> Score </template>
                </StatInput>
              </UFieldGroup>
            </StatField>
            <StatField label="Wisdom">
              <UFieldGroup orientation="vertical">
                <StatInput type="number" disabled>
                  <template #trailing> Mod </template>
                </StatInput>
                <StatInput type="number" highlight>
                  <template #trailing> Score </template>
                </StatInput>
              </UFieldGroup>
            </StatField>
            <StatField label="Charisma">
              <UFieldGroup orientation="vertical">
                <StatInput type="number" disabled>
                  <template #trailing> Mod </template>
                </StatInput>
                <StatInput type="number" highlight>
                  <template #trailing> Score </template>
                </StatInput>
              </UFieldGroup>
            </StatField>
          </StatRow>
        </template>
        <template v-if="item.label === 'Defences'">
          <StatColumns :columns="3">
            <StatCard title="Armor Class">
              <UFieldGroup>
                <UTooltip text="AC = dexterity bonus + proficiency + item">
                  <UBadge variant="subtle" color="secondary" size="lg">
                    20
                  </UBadge>
                </UTooltip>
                <StatPopoverButton>
                  <StatField label="From whatever">
                    <StatInputNumber size="md" orientation="horizontal" />
                  </StatField>
                </StatPopoverButton>
              </UFieldGroup>
              <StatField label="Proficiency">
                <StatPopoverButton>
                  <StatField label="Unarmored">
                    <USelect
                      class="w-full"
                      :items="['None', 'Trained', 'Expert', 'Master', 'Legend']"
                    />
                  </StatField>
                  <StatField label="Light">
                    <USelect
                      class="w-full"
                      :items="['None', 'Trained', 'Expert', 'Master', 'Legend']"
                    />
                  </StatField>
                  <StatField label="Medium">
                    <USelect
                      class="w-full"
                      :items="['None', 'Trained', 'Expert', 'Master', 'Legend']"
                    />
                  </StatField>
                  <StatField label="Heavy">
                    <USelect
                      class="w-full"
                      :items="['None', 'Trained', 'Expert', 'Master', 'Legend']"
                    />
                  </StatField>
                </StatPopoverButton>
              </StatField>
              <StatField label="Item">
                <UFieldGroup>
                  <StatInput size="md" />
                  <USelect
                    class="w-full"
                    :items="[
                      'Unarmored',
                      'Light Armor',
                      'Medium Armor',
                      'Heavy Armor',
                    ]"
                  />
                  <StatPopoverButton>
                    <StatField label="AC Bonus">
                      <StatInput type="number" size="md" />
                    </StatField>
                    <StatField label="STR requirements">
                      <StatInput type="number" size="md" />
                    </StatField>
                    <StatField label="DEX cap">
                      <StatInput type="number" size="md" />
                    </StatField>
                    <StatField label="Check penalties">
                      <StatInput type="number" size="md" />
                    </StatField>
                    <StatField label="Speed penalty">
                      <StatInput type="number" size="md" />
                    </StatField>
                  </StatPopoverButton>
                </UFieldGroup>
              </StatField>
            </StatCard>
            <StatCard title="Shield">
              <UBadge variant="subtle" color="secondary" size="lg"> +2 </UBadge>
              <StatField label="HP">
                <UFieldGroup>
                  <StatInputNumber
                    orientation="vertical"
                    class="w-min min-w-[6em]"
                    color="error"
                    size="md"
                  />
                  <UBadge variant="subtle" color="secondary" size="lg">
                    / 10
                  </UBadge>
                </UFieldGroup>
              </StatField>
              <StatField label="Hardness">
                <UBadge variant="subtle" color="secondary" size="lg">
                  3
                </UBadge>
              </StatField>
              <StatField label="Item">
                <UBadge variant="subtle" color="secondary" size="lg">
                  3
                </UBadge>
              </StatField>
            </StatCard>
          </StatColumns>
        </template>
      </template>
    </StatAccordion>
  </div>
</template>

<style scoped></style>
