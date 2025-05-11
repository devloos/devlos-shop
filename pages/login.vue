<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref('');

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    },
  });
  if (error) console.log(error);
};

const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      // Redirect to the saved path, or fallback to home
      return navigateTo('/');
    }
  },
  { immediate: true }
);
</script>
<template>
  <div>
    <button @click="signInWithOtp">Sign In with E-Mail</button>
    <input v-model="email" type="email" />
  </div>
</template>
