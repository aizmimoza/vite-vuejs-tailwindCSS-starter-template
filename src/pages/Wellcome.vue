<script setup>
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  const router = useRouter();
  const store = useStore();
  const name = computed( () => {
    return store.state.user.name
  });
  // variable reactive
  const newName = ref();

  function saveName() {
    store.dispatch('save', newName.value);
    newName.value = '';
    router.push( '/about' )
  }
</script>

<template>
  <div>
    <h1 class="mb-3 text-3xl font-extrabold"> <!-- underline --> 
      WELLCOME TO HOME PAGE !
    </h1>

    <div class="p-2">
      <p class="mb-2 text-lg">Vous avez inscrit: <span class="font-bold">{{name}}</span></p>
      <input v-model="newName" class="p-2 mr-4 rounded border border-indigo-700" type="text" name="name" placeholder="Entrer le nom" >
      <button @click="saveName" type="button" class="p-2 rounded border bg-indigo-700 text-white">Valider</button>
    </div>

  </div>
</template>

<style scoped></style>