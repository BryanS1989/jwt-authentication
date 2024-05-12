<script setup>
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();
</script>

<template>
    <div class="home">
        <h1>Welcome to the App!</h1>

        <div v-if="!store.isLoggedIn">
            To use this app you'll need to
            <router-link :to="{ name: 'login' }">Login</router-link>
            or
            <router-link :to="{ name: 'register' }">Register</router-link>
        </div>
    </div>
</template>
