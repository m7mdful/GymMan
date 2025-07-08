import { ref, computed } from "vue";
import { workoutProgram } from "./utils";

const defaultData = {};
for (let i in workoutProgram) {
	const workoutData = workoutProgram[i];
	defaultData[i] = {};
	for (let j of workoutData.workout) {
		defaultData[i][j.name] = "";
	}
}

export const selectedDisplay = ref(1);
export const data = ref(defaultData);
export const selectedWorkout = ref(-1);

export const isWorkoutComplete = computed(() => {
	const currWorkout = data.value?.[selectedWorkout.value];
	if (!currWorkout) {
		return false;
	}

	const isCompleteCheck = Object.values(currWorkout).every((ex) => !!ex);
	return isCompleteCheck;
});

export const firstIncompleteWorkout = computed(() => {
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

export function changeDisplay(display) {
	selectedDisplay.value = display;
}
export function changeWorkout(workout) {
	selectedDisplay.value = 3;
	selectedWorkout.value = workout;
}
export function saveData() {
	localStorage.setItem("workouts", JSON.stringify(data.value));
	selectedDisplay.value = 2;
	selectedWorkout.value = -1;
}

export function reseting(){
	selectedDisplay.value = 2;
	selectedWorkout.value = -1;
	data.value = defaultData;
	localStorage.setItem("workouts", JSON.stringify(data.value));
}

export function initialize(){
	if(localStorage.getItem("workouts")){
		data.value = JSON.parse(localStorage.getItem("workouts"));
		selectedDisplay.value = 2;
	}
}