<script setup></script>

<template>
	<section id="Welcome">
		<div class="d-flex flex-column gap-5 ps-sm-5 pt-sm-4 ps-4 pt-3 hightt ">
			<div class="d-flex flex-column">
				<h1 class="font2">GymMan</h1>
				<h3 class="font1 ms-3">
					is an app for Tracking and use a training plans...
				</h3>
			</div>
			<div class="d-flex flex-column ps-sm-5 mt-sm-4 ps-5 pt-3">
				<h2 class="font1 fw-bold">The Training plan</h2>
				<h4 class="font1 fw-light ms-3">
					follows Structure of
					<span class="fw-bold">"Bro Split"</span>
				</h4>
			</div>
			<div class="d-flex flex-wrap justify-content-center mt-5 gap-2">
				<h4 class="badge bg-grey fs-5"> Push </h4>
				<img src="../../../public/arrow_right_alt_100dp_000000_FILL0_wght400_GRAD0_opsz48.png" width="30" height="30" />
				<h4 class="badge bg-grey fs-5">Pull</h4>
				<img src="../../../public/arrow_right_alt_100dp_000000_FILL0_wght400_GRAD0_opsz48.png" width="30" height="30" />
				<h4 class="badge bg-grey fs-5">Legs</h4>
				<img src="../../../public/arrow_right_alt_100dp_000000_FILL0_wght400_GRAD0_opsz48.png" width="30" height="30" />
				<h4 class="badge bg-grey fs-5 ">Repeat</h4>
			</div>	
			<div class="d-flex flex-column align-items-center mt-5 gap-4">
				<h2 class="font2 fs-1">Can you do it!?</h2>
				<button class="btn btn-dark fs-4  fw-bold">Begin</button>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.bg-grey {
		background-color: #494949;
	}
	.btn-grey{
		background-color: #2d2d2d;
	}
	.hightt{
		height: 100dvh;
	}
</style>
