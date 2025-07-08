<script setup>
import Grid from "../Grid.vue";
import { gymHealthFacts } from "../../utils/index.js";
import { workoutProgram } from "../../utils";
import { changeWorkout, firstIncompleteWorkout } from "../../functions.js";

const randoming = Math.floor(Math.random() * gymHealthFacts.length);
const todayFact = gymHealthFacts[randoming];
</script>

<template>
	<section id="dashboard" class="d-flex flex-column gap-5">
		<div class="d-flex flex-column gap-4 mt-5">
			<div class="d-flex flex-column gap-2 marginleft">
				<h2 class="font2">Welcome GymMan!</h2>
				<h3 class="font1">Todays Fact is:</h3>
			</div>
			<div class="d-flex flex-column gap-4">
				<h5 class="marginleft">{{ todayFact }}</h5>
				<div class="d-flex flex-row justify-content-center">
					<button @click="changeWorkout(firstIncompleteWorkout  < 0 ? 0 : firstIncompleteWorkout )"
						class=" btnbg fs-4 hovering fw-bold rounded-3 p-2"
					>
						Start Workout
					</button>
				</div>
			</div>
		</div>
		<div class="d-flex flex-row justify-content-center">
			<div class="d-flex flex-wrap justify-content-center w-50">
				<Grid/>
			</div>
		</div>

		<div class=""></div>
	</section>
</template>

<style scoped>
.btnbg{
	color: rgb(0, 0, 0);
	border: 2px solid #ffbb00;
}
</style>
