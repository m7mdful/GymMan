<script setup>
import { workoutProgram } from "../utils";
const workoutTypes = ["Push", "Pull", "Legs"];
</script>

<template>
	<section class="align-items-center d-flex flex-column">
		<div
			class="d-flex flex-wrap justify-content-between gap-2 mx-2 container p-3"
		>
			<button
				:key="Index"
				v-for="(workout, Index) in Object.keys(workoutProgram)"
				class="border-0 bg-transparent"
			>
				<div
					class="card align-items-center cardwidth d-flex flex-column gap-2 p-1 rounded-3 hovering"
				>
					<img
						src="../../public/icons8-triceps-100.png"
						alt="triceps"
						class=""
						width="50"
						height="50"
                        v-if ="Index %3 === 0"
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
		</div>
	</section>
</template>

<style scoped>
.cardwidth {
	width: 100px;
	height: 122px;
	
}

</style>
