<script setup>
  import { computed} from 'vue'
  import { useStore } from 'vuex'

  const store = useStore();
  const name = computed( () => {
    return store.state.user.name
  });
</script>

<template>
  <div>
    <h1 class="mb-3 text-3xl font-extrabold"> <!-- underline --> 
      What about {{name}} ?
    </h1>
  </div>
</template>

<style scoped></style>