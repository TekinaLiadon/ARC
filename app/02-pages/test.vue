<script setup lang="ts">
import { ref, computed, toValue } from 'vue';
import RenderForm from "../03-widgets/test/RenderForm.vue";
const { t } = useI18n();
const resolvedComponents = {
  UPageCard: resolveComponent('UPageCard'),
  UAuthForm: resolveComponent('UAuthForm'),
  ULink: resolveComponent('ULink'),
  div: 'div',
  text: null,
};

const step = ref('cred');

const createDynamicAssets = (t: Function, stepRef: any, components: Record<string, any>) => {
  const step = stepRef;

  const credSchema = {
    email: {
      validate: (value: string) => {
        if (!value) return t('validation.required');
        if (!/\S+@\S+\.\S+/.test(value)) return t('validation.email');
        return null;
      }
    },
    password: {
      validate: (value: string) => {
        if (!value) return t('validation.required');
        if (value.length < 8) return t('validation.passwordMin');
        return null;
      }
    }
  };

  const credSubmitting = ref(false);
  const codeSubmitting = ref(false);

  const credOnSubmit = async (data: any) => {
    credSubmitting.value = true;
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Cred Form Submit:', data);
    step.value = 'code';
    credSubmitting.value = false;
  };

  const codeOnSubmit = async (data: { code: string }) => {
    codeSubmitting.value = true;
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Code Form Submit:', data);
    codeSubmitting.value = false;
  };

  return {
    authFormCred: {
      props: {
        schema: credSchema,
        title: computed(() => t('login.newAccount')),
        fields: computed(() =>[
          { name: 'email', type: 'text', label: t('form.email'), placeholder: t('form.emailPlaceholder') },
          { name: 'password', type: 'password', label: t('form.password'), placeholder: t('form.passwordPlaceholder') }
        ]),
        submit: {
          loading: computed(() => credSubmitting.value)
        }
      },
      emits: {
        submit: credOnSubmit,
      },
      directives: {
        'v-show': computed(() => step.value === 'cred')
      },
      slots: {
        footer: {}
      }
    },
    authFormCode: {
      props: {
        fields: computed(() =>[
          { name: 'code', type: 'text', label: t('form.code'), placeholder: t('form.codePlaceholder') }
        ]),
        title: computed(() => t('login.codeSent')),
        submit: {
          loading: computed(() => codeSubmitting.value)
        }
      },
      emits: {
        submit: codeOnSubmit,
      },
      directives: {
        'v-show': computed(() => step.value === 'code')
      },
      slots: {
        footer: {
          emits: {
            click: () => step.value = 'cred'
          }
        }
      }
    },
    _components: components,
  };
};

const dynamicAssets = createDynamicAssets(t, step, resolvedComponents);

 const scheme = [
   {
     "id": "pageCard",
     "type": "UPageCard",
     "class": "w-full max-w-md",
     "children": [
       {
         "id": "authFormCred",
         "type": "UAuthForm",
         "props": {
           "icon": "i-lucide-party-popper",
           "separator": "login.or"
         },
         "dynamicProps": ["schema", "title", "fields", "submit.loading"],
         "dynamicEmits": ["submit"],
         "directives": {
           "v-show": "step === 'cred'"
         },
         "slots": {
           "footer": {
             "type": "div",
             "children": [
               {
                 "type": "text",
                 "value": "login.haveAccount"
               },
               {
                 "type": "ULink",
                 "props": {
                   "to": "sign-in",
                   "class": "text-primary font-medium"
                 },
                 "children": [
                   {
                     "type": "text",
                     "value": "login.signIn"
                   }
                 ]
               }
             ]
           }
         }
       },
       {
         "id": "authFormCode",
         "type": "UAuthForm",
         "props": {
           "icon": "i-lucide-rectangle-ellipsis"
         },
         "dynamicProps": ["fields", "title", "submit.loading"],
         "dynamicEmits": ["submit"],
         "directives": {
           "v-show": "step === 'code'"
         },
         "slots": {
           "footer": {
             "type": "ULink",
             "dynamicEmits": ["click"],
             "children": [
               {
                 "type": "text",
                 "value": "login.wrongEmail"
               }
             ]
           }
         }
       }
     ]
   }
 ];


</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 pt-6">
    <RenderForm
        :schema="scheme"
        :dynamic-assets="dynamicAssets"
    />
  </div>
</template>


<style>

</style>