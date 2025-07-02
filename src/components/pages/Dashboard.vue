<script setup>
import Grid from '../Grid.vue'
import {gymHealthFacts} from '../../utils/index.js';
const randoming = Math.floor(Math.random() * gymHealthFacts.length)
const todayFact = gymHealthFacts[randoming]
</script>

<template>
    <section id="dashboard">
        <div class="">{{ todayFact }}</div>
        <Grid />
    </section>
</template>

<style scoped>

</style>
