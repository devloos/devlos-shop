<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';

defineProps<{
  color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral';
}>();

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success',
  });
  console.log(event.data);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" :color="color" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" :color="color" />
    </UFormField>

    <UButton type="submit" :color="color">Submit</UButton>
  </UForm>
</template>
