<template>
    <div>
      <h1>Pessoas</h1>
      <ul>
        <li v-for="person in people" :key="person.id">{{ person.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getPeople } from '../api/peopleApi';
  
  const people = ref([]);
  console.log('Entrei em pessoas');
  onMounted(async () => {
    people.value = await getPeople();
  });
  </script>
  