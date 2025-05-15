<script setup lang="ts">
const supabase = useSupabaseClient();
const toast = useToast();

async function logout() {
  const { error } = await supabase.auth.signOut({ scope: 'local' });

  if (error) {
    toast.add({ description: error.message, color: 'error' });
    return;
  }

  navigateTo('/');
}
</script>

<template>
  <div class="text-center">
    <h3>Account</h3>
    <UButton @click.prevent="logout">Sign Out</UButton>
  </div>
</template>
