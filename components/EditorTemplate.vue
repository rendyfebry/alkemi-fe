<template>
	<div>
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarsExampleDefault">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">Disabled</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
						<div class="dropdown-menu" aria-labelledby="dropdown01">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>

		<!-- Main jumbotron for a primary marketing message or call to action -->
		<div class="jumbotron">
			<div class="container dropzone">
				<h1 class="display-3">Hello, world!</h1>
				<p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
				<div data-v-25d20844="" data-el="elParagraph" data-elicon="fas fa-paragraph" data-elname="Paragraph" class="mb-3 mr-3 ui-draggable ui-draggable-handle editor-element" style="width: 100%; height: auto;" id="wolfd"><div class="element-body" data-type="elParagrah" data-edit="text-editor" data-fontsize="16" data-linesize="1" data-color="#212121" data-id="wolfd">
					<div class="element-action">
                        <div class="item" data-action="edit">
                            <i class="fas fa-pencil-alt"></i>
                        </div>
                        <div class="item" data-action="delete">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                        <div class="item handle" data-action="move">
                            <i class="fas fa-arrows-alt"></i>
                        </div>
                    </div>
					<div class="element-content">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make
							a type specimen book.
						</p>
					</div>
				</div></div>
			</div>
		</div>

		<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center  dropzone">
			<h1 class="display-4">Pricing</h1>
			<p class="lead">
				Quickly build an effective pricing table for your potential customers with this Bootstrap example.
				It's built with default Bootstrap components and utilities with little customization.
			</p>
		</div>

		<div class="container">
			<div class="card-deck mb-3 text-center">
				<div class="card mb-4 shadow-sm">
					<div class="card-header">
						<h4 class="my-0 font-weight-normal">Free</h4>
					</div>
					<div class="card-body">
						<h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
						<ul class="list-unstyled mt-3 mb-4">
						<li>10 users included</li>
						<li>2 GB of storage</li>
						<li>Email support</li>
						<li>Help center access</li>
						</ul>
						<button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
					</div>
				</div>
				<div class="card mb-4 shadow-sm">
					<div class="card-header">
						<h4 class="my-0 font-weight-normal">Pro</h4>
					</div>
					<div class="card-body">
						<h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
						<ul class="list-unstyled mt-3 mb-4">
						<li>20 users included</li>
						<li>10 GB of storage</li>
						<li>Priority email support</li>
						<li>Help center access</li>
						</ul>
						<button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
					</div>
				</div>
				<div class="card mb-4 shadow-sm">
					<div class="card-header">
						<h4 class="my-0 font-weight-normal">Enterprise</h4>
					</div>
					<div class="card-body">
						<h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
						<ul class="list-unstyled mt-3 mb-4">
						<li>30 users included</li>
						<li>15 GB of storage</li>
						<li>Phone and email support</li>
						<li>Help center access</li>
						</ul>
						<button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
					</div>
				</div>
			</div>

			<footer class="pt-4 my-md-5 pt-md-5 border-top">
				<div class="row">
				<div class="col-12 col-md">
					<img class="mb-2" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
					<small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
				</div>
				<div class="col-6 col-md">
					<h5>Features</h5>
					<ul class="list-unstyled text-small">
					<li><a class="text-muted" href="#">Cool stuff</a></li>
					<li><a class="text-muted" href="#">Random feature</a></li>
					<li><a class="text-muted" href="#">Team feature</a></li>
					<li><a class="text-muted" href="#">Stuff for developers</a></li>
					<li><a class="text-muted" href="#">Another one</a></li>
					<li><a class="text-muted" href="#">Last time</a></li>
					</ul>
				</div>
				<div class="col-6 col-md">
					<h5>Resources</h5>
					<ul class="list-unstyled text-small">
					<li><a class="text-muted" href="#">Resource</a></li>
					<li><a class="text-muted" href="#">Resource name</a></li>
					<li><a class="text-muted" href="#">Another resource</a></li>
					<li><a class="text-muted" href="#">Final resource</a></li>
					</ul>
				</div>
				<div class="col-6 col-md">
					<h5>About</h5>
					<ul class="list-unstyled text-small">
					<li><a class="text-muted" href="#">Team</a></li>
					<li><a class="text-muted" href="#">Locations</a></li>
					<li><a class="text-muted" href="#">Privacy</a></li>
					<li><a class="text-muted" href="#">Terms</a></li>
					</ul>
				</div>
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
	max-width: 960px;
}

.pricing-header {
	max-width: 700px;
}

.card-deck .card {
	min-width: 220px;
}
</style>

