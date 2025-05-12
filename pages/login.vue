<script setup lang="ts">
import * as z from 'zod';
import type { Provider } from '@supabase/auth-js';

definePageMeta({
  middleware: 'redirect-authenticated',
});

const runtimeConfig = useRuntimeConfig();

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

async function signInWithPassword() {
  const { error } = await supabase.auth.signInWithPassword({
    email: state.email || '',
    password: state.password || '',
  });

  if (error) {
    console.log(error);
    return;
  }

  navigateTo('/confirm');
}

async function signInProvider(provider: Provider) {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${runtimeConfig.public.baseUrl}/confirm`,
    },
  });

  if (error) {
    console.log(error);
  }
}
</script>
<template>
  <div>
    <UForm
      :schema="schema"
      :state="state"
      class="flex flex-col items-center justify-center h-svh space-y-4"
      :validate-on="['change']"
      @submit="signInWithPassword"
    >
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <div class="flex flex-col items-start gap-2">
        <UButton type="submit">Submit</UButton>
        <UButton type="button" @click="signInProvider('google')">
          Sign In With Google
        </UButton>
        <UButton type="button" @click="signInProvider('discord')">
          Sign In With Discord
        </UButton>
      </div>
    </UForm>
  </div>
</template>
