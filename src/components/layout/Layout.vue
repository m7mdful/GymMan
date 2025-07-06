<script setup></script>

<template>
	<div class="d-flex flex-column min-vh-100">
		<header>
			<nav class="navbar bg-warning">
				<div class="container-fluid">
					<a class="navbar-brand font1 fs-1" href="#">
						<img
							src="../../assets/icons8-dumbbell-100.png"
							width="40"
							height="40"
						/>
						GymMan
					</a>
				</div>
			</nav>
		</header>
		<main class="flex-grow-1">
			<slot />
		</main>
		<footer
			class="d-flex flex-wrap justify-content-center p-2 bg-warning font1 fw-light"
		>
			<small class="font12"
				>Created By <a href="https://github.com/M7mdful">MD</a></small
			>
		</footer>
	</div>
</template>

<style scoped></style>
