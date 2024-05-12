<template>
    <div>
        <h1>Dashboard</h1>
        <template v-if="!isLoading">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
        </template>
        <p v-else>Loading events</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import EventCard from '@/components/EventCard.vue';

const isLoading = ref(true);
const events = ref([]);

onMounted(() => {
    axios.get('//localhost:3000/dashboard').then(({ data }) => {
        events.value = data.events.events;
        isLoading.value = false;
    });
});
</script>
