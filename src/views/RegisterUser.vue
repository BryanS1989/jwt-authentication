<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const errors = ref([]);

const store = useAuthStore();
const router = useRouter();

const register = () => {
    store
        .register(name.value, email.value, password.value)
        .then(() => {
            router.push({ name: 'dashboard' });
        })
        .catch((err) => {
            console.log(err.response);
            errors.value = err.response.data.error;
        });
};
</script>

<template>
    <div>
        <form @submit.prevent="register">
            <label for="name"> Name: </label>
            <input v-model="name" type="text" name="name" value />

            <label for="email"> Email: </label>
            <input v-model="email" type="email" name="email" value />

            <label for="password"> Password: </label>
            <input v-model="password" type="password" name value />

            <button type="submit" name="button">Register</button>

            <ul>
                <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
            <router-link :to="{ name: 'login' }">Already have an account? Login.</router-link>
        </form>
    </div>
</template>

<style scoped></style>
