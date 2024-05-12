<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const store = useAuthStore();
const router = useRouter();

const login = () => {
    store.login(email.value, password.value).then(() => {
        router.push({ name: 'dashboard' });
    });
};
</script>

<template>
    <div>
        <form @submit.prevent="login">
            <label for="email"> Email: </label>
            <input v-model="email" type="email" name="email" value />

            <label for="password"> Password: </label>
            <input v-model="password" type="password" name="password" value />

            <button type="submit" name="button">Login</button>

            <router-link :to="{ name: 'register' }">Don't have an account? Register.</router-link>
        </form>
    </div>
</template>
