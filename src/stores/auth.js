import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {
    const user = ref({});
    const isLoggedIn = computed(() => (user.value?.email ? true : false));

    function register(name, email, password) {
        return axios
            .post('http://localhost:3000/register', {
                name,
                email,
                password
            })
            .then(({ data }) => {
                console.log(data);
                user.value = data;
                localStorage.setItem('user', JSON.stringify(data));

                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            });
    }

    function login(email, password) {
        return axios
            .post('http://localhost:3000/login', {
                email,
                password
            })
            .then(({ data }) => {
                console.log(data);
                user.value = data;
                localStorage.setItem('user', JSON.stringify(data));

                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            });
    }

    function logout() {
        localStorage.removeItem('user');
        location.reload();
    }

    return { user, isLoggedIn, register, login, logout };
});
