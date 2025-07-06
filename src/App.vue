<script setup>
import Welcome from "./components/pages/Welcome.vue";
import Layout from "./components/layout/Layout.vue";
import Workout from "./components/pages/Workout.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import { computed, onMounted, ref } from "vue";
import { workoutProgram } from "./utils";

const defaultData = {};
for (let i in workoutProgram) {
	const workoutData = workoutProgram[i];
	defaultData[i] = {};
	for (let j of workoutData.workout) {
		defaultData[i][j.name] = "";
	}
}
const selectedDisplay = ref(1);
const data = ref(defaultData);
const selectedWorkout = ref(-1);

const isWorkoutComplete = computed(() => {
	const currWorkout = data.value?.[selectedWorkout.value];
	if (!currWorkout) {
		return false;
	}

	const isCompleteCheck = Object.values(currWorkout).every((ex) => !!ex);
	return isCompleteCheck;
});

const firstIncompleteWorkout = computed(() => {
	const allWorkouts = data.value;
	if (!allWorkouts) {

		return -1;
		
	}
	for (const [index, workout] of Object.entries(allWorkouts)) {
		const isComplete = Object.values(workout).every((ex) => !!ex);
		if (!isComplete) {

			return parseInt(index);
		}
	}

	return -1;

});

function changeDisplay(display) {
	selectedDisplay.value = display;
}
function changeWorkout(workout) {
	selectedDisplay.value = 3;
	selectedWorkout.value = workout;
}
function saveData() {
	localStorage.setItem("workouts", JSON.stringify(data.value));
	selectedDisplay.value = 2;
	selectedWorkout.value = -1;
}

function reseting(){
	selectedDisplay.value = 2;
	selectedWorkout.value = -1;
	data.value = defaultData;
	localStorage.setItem("workouts", JSON.stringify(data.value));
}

onMounted(() =>{
	if(localStorage.getItem("workouts")){
		data.value = JSON.parse(localStorage.getItem("workouts"));
		selectedDisplay.value = 2;
	}
})
</script>

<template>
	<Layout>
		<!-- Page 1 -->
		<Welcome :changeDisplay="changeDisplay" v-if="selectedDisplay === 1" />
		<!-- Page 2 -->
		<Dashboard :reseting="reseting"
			:firstIncompleteWorkout="firstIncompleteWorkout"
			:changeWorkout="changeWorkout"
			v-if="selectedDisplay === 2"
		/>
		<!-- Page 3  -->
		<Workout
			:isWorkoutComplete="isWorkoutComplete"
			:saveData="saveData"
			:data="data"
			:selectedWorkout="selectedWorkout"
			v-if="workoutProgram?.[selectedWorkout]"
		/>
	</Layout>
</template>

<style scoped></style>
