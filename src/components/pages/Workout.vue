<script setup>
import { workoutProgram } from "../../utils";
const workoutTypes = ["Push", "Pull", "Legs"];
const {saveData,isWorkoutComplete,data, selectedWorkout} = defineProps({
        data:Object,
        selectedWorkout: Number,
        isWorkoutComplete: Boolean,
        saveData: Function
});


const { workout, warmup } = workoutProgram[selectedWorkout];

</script>

<template>
	<section id="workout">
		<div class="d-flex flex-column gap-4 mt-5 p-3">
			<div
				class="card d-flex flex-column gap-2 p-2 border-2 border-black bg-warning bg-opacity-50"
			>
				<h2 class="font2 m-2 text-black" style="width: fit-content">
					Day {{ selectedWorkout+1 }}
				</h2>
				<h3 class="font1 marginleft">{{ workoutTypes[selectedWorkout % 3] }} Workout</h3>
			</div>
		</div>
		<div class="d-flex flex-column gap-4 mt-5 p-3 ">
			<div class="d-grid container row-gap-3">
				<div class="row font2">
					<div class="col-6">Warmup</div>
					<div class="col">Sets</div>
					<div class="col">Reps</div>
				</div>
				<div
					class="row font1 row-gap-3"
					v-for="(w, index) in warmup"
					:key="index"
				>
					<div class="col-6">
						{{ w.name }}
					</div>
					<div class="col">
						{{ w.sets }}
					</div>
					<div class="col">
						{{ w.reps }}
					</div>
				</div>
				<div class="row font2">
					<div class="col">Workout</div>
					<div class="col">Sets</div>
					<div class="col">Reps</div>
					<div class="col">Whight</div>
				</div>
				<div
					class="row font1 row-gap-3"
					v-for="(w, index) in workout"
					:key="index"
				>

					<div class="col">
						{{ w.name }}
					</div>
					<div class="col">
						{{ w.sets }}
					</div>
					<div class="col">
						{{ w.reps }}
					</div>
                    <div class="col">
                        <input v-model="data[selectedWorkout][w.name]" type="text" placeholder="whight" style="width: 50px;"/>
                    </div>
				</div>
			</div>
            <div class="d-flex flex-row justify-content-center mt-3 gap-4">
                <button class="bg-warning border-0 p-3 rounded-4 fs-5 font1 buttonhovering" @click="saveData">Save & Exit <img src="../../../public/icons8-save-100.png" width="28" height="28" alt="" class="mb-1"></button>
                <button class="bg-white p-3 rounded-4 fs-5 font1 border-warning border-2 buttonhovering" :disabled="!isWorkoutComplete" @click="saveData">Completed <img src="../../../public/icons8-check-100.png" width="28" height="28" alt="" class="mb-1"></button>
            </div>
		</div>
	</section>
</template>

<style scoped>
    .buttonhovering {
        transition: all 0.3s ease-in-out;
    }

    .buttonhovering:hover {
        scale: 1.05;
    }
</style>
