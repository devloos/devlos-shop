<script setup lang="ts">
import * as z from 'zod';

definePageMeta({
  middleware: 'redirect-authenticated',
});

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: '',
  password: '',
});

const supabase = useSupabaseClient();

async function onSubmit() {
  const { error } = await supabase.auth.signUp({
    email: state.email || '',
    password: state.password || '',
  });

  if (error) {
    console.log(error);
    return;
  }

  navigateTo('/confirm');
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="flex flex-col items-center h-svh justify-center gap-y-4"
    :validate-on="['change']"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">Submit</UButton>
  </UForm>
</template>
