<script setup>
import Grid from '../Grid.vue'
import {gymHealthFacts} from '../../utils/index.js';
const randoming = Math.floor(Math.random() * gymHealthFacts.length)
const todayFact = gymHealthFacts[randoming]
</script>

<template>
    <section id="dashboard" class="d-flex flex-column gap-5">
        <div class="d-flex flex-wrap justify-content-center">
            <div class="d-flex flex-column gap-2 align-items-center">
                <h2 class="font2">Welcome GymMan!</h2>
                <h3 class="font1">Todays Fact is:</h3
            </div
            <div class="d-flex flex-column align-items-center">    
                <h5 class="">{{ todayFact }}</h5>
                <div class="d-flex flex-row justify-content-center">
                    <button class="btn btn-dark fs-4 hovering fw-bold">Start Workout</button>
                </div>
            </div> 
        </div>
        <Grid />
    </section>
</template>

<style scoped>

</style>
