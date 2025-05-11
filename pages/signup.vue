<script setup lang="ts">
import * as z from 'zod';
import type { Provider } from '@supabase/auth-js';

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
  const { data } = await supabase.auth.signUp({
    email: state.email || '',
    password: state.password || '',
  });

  console.log(data);
}

async function signInProvider(provider: Provider) {
  const { data } = await supabase.auth.signInWithOAuth({
    provider,
  });

  console.log(data);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <div class="flex flex-col gap-2">
      <UButton type="submit">Submit</UButton>
      <UButton type="button" @click="signInProvider('google')">
        Sign In With Google
      </UButton>
      <UButton type="button" @click="signInProvider('discord')">
        Sign In With Discord
      </UButton>
    </div>
  </UForm>
</template>
