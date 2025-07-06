<script setup>
import { workoutProgram } from "../utils";
const workoutTypes = ["Push", "Pull", "Legs"];
const { changeWorkout } = defineProps({
	changeWorkout: Function,
	firstIncompleteWorkout: Number,
	reseting:Function
});
</script>

<template>
	<section class="d-flex">
		<div class="d-flex flex-wrap justify-content-start gap-2 mx-2 p-3">
			<button
				:disabled="Index > 0 && Index > firstIncompleteWorkout"
				:key="Index"
				@click="changeWorkout(Index)"
				v-for="(workout, Index) in Object.keys(workoutProgram)"
				class="workoutbtn border-0 bg-transparent"
			>
				<div
					class="border border-black align-items-center cardwidth d-flex flex-column gap-2 p-1 rounded-3 workoutbtn"
					onclick=""
				>
					<img
						src="../../public/icons8-triceps-100.png"
						alt="triceps"
						class=""
						width="50"
						height="50"
						v-if="Index % 3 === 0"
					/>
					<img
						src="../../public/icons8-biceps-100.png"
						alt="triceps"
						class=""
						width="50"
						height="50"
						v-if="Index % 3 === 1"
					/>
					<img
						src="../../public/icons8-leg-100.png"
						alt="triceps"
						class=""
						width="50"
						height="50"
						v-if="Index % 3 === 2"
					/>
					<div>
						<h4 class="font1">Day {{ Index + 1 }}</h4>
						<p class="font2">{{ workoutTypes[Index % 3] }}</p>
					</div>
				</div>
			</button>
			<button @click="reseting" :disabled="firstIncompleteWorkout!=-1" class="workoutbtn border-0 bg-transparent">
				<div
					class="font2 d-flex flex-column justify-content-center border border-black align-items-center cardwidth d-flex flex-column gap-2 p-1 rounded-3 workoutbtn"
				>
				<img src="../../../public/icons8-reload-100.png" width="50" height="50" alt="" class="">
				reset
			</div>
			</button>
		</div>
	</section>
</template>

<style scoped>
.cardwidth {
	width: 100px;
	height: 122px;
}
.workoutbtn {
	transition: all 0.5s ease-in-out;
}
.workoutbtn:disabled {
	box-shadow: none;
	cursor: not-allowed;
	background-color: grey;
}
.workoutbtn:hover:enabled {
	scale: 1.05;
	box-shadow: none 10px;
}
</style>
