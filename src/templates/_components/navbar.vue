<template>
	<nav class="navbar page-navbar navbar-expand navbar-light position-absolute w-100 no-select">
		<div class="container">

			<router-link to="/" class="navbar-brand font-weight-bold">Wild Weber</router-link>

			<ul class="nav navbar-nav ml-sm-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Pricing</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
  export default {
    name: 'ComponentNavbar'
  }
</script>
