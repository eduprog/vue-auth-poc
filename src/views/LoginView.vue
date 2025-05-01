<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="onSubmit">
        <input v-model="email" placeholder="Email" />
        <input v-model="senha" type="password" placeholder="Senha" />
        <input v-model="tenantId" placeholder="Tenant ID" />
        <button type="submit">Entrar</button>
      </form>
      <!-- <div v-if="people.value.items.length > 0">
        <h3>Pessoas:</h3>
        <ul>
          <li v-for="person in people" :key="person.id">{{ person.name }}</li>
        </ul>
        <button @click="goToPeople">Ir para página de pessoas</button>
      </div> -->
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuth } from '../composables/useAuth';
  
  const email = ref('');
  const senha = ref('');
  const tenantId = ref('');
  
  const { authenticate } = useAuth();
  
  function onSubmit() {
    senha.value = "123Pa$$word!";
    email.value = "admin@root.com";
    tenantId.value = "0195c887-fcda-7153-8dc3-f0a66c730c7e";
    authenticate({ email: email.value, senha: senha.value, tenantId: tenantId.value });
    console.log("Login realizado com sucesso!");
  }
  </script>
  