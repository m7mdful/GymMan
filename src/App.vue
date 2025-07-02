<script setup>
import Welcome from "./components/pages/Welcome.vue";
import Layout from "./components/layout/Layout.vue";
import Workout from "./components/pages/Workout.vue";
import Dashboard from "./components/pages/Dashboard.vue";


const selectedDisplay= 2
</script>

<template>
	<Layout>
		<!-- Page 1 -->
		<Welcome v-if="selectedDisplay === 1"/>
		<!-- Page 2 -->
		<Dashboard v-if="selectedDisplay === 2"/>
		<!-- Page 3  -->
		<Workout v-if="selectedDisplay === 3"/>
	</Layout>
</template>

<style scoped></style>
