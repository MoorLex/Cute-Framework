<template>
	<footer class="footer">
		<div class="container">

			<div class="row py-5 no-select">

				<div class="col"></div>

				<div class="col">
					<ul class="nav nav-pills flex-column">
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
					</ul>
				</div>

				<div class="col">
					<ul class="nav nav-pills flex-column">
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
					</ul>
				</div>

				<div class="col">
					<ul class="nav nav-pills flex-column">
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="row bottom py-4">
				<div class="col"><small>© {{$root.year+' '+$root.author}}. All rights reserved.</small></div>
				<div class="col text-right">Site</div>
			</div>
		</div>
	</footer>
</template>

<script>
  export default {
    name: 'MainFooter',
    components: {}
  }
</script>