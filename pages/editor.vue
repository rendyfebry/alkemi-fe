<template>
	<div class="wrapper pt-4">
		<div class="main">
            <EditorTemplate />
		</div>

		<div class="sidebar pl-5 pr-4">
			<div class="logo-area text-center p-2 mb-2">
				<nuxt-link
					to="/pages"
					exact
					class=""
				>
					<i class="fa fa-hourglass-half" /> ALKEMI.IO
				</nuxt-link>
			</div>

            <h3 class="section-title">Section 1</h3>
            <div class="row no-gutters">
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-paragraph" />
                    </div>
                </div>
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-heading" />
                    </div>
                </div>
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-image" />
                    </div>
                </div>
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-quote-right" />
                    </div>
                </div>
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-newspaper" />
                    </div>
                </div>
            </div>
            <h3 class="section-title">Section 2</h3>
            <div class="row no-gutters">
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-paragraph" />
                    </div>
                </div>
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-heading" />
                    </div>
                </div>
                <div class="col col-12 col-lg-4">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-image" />
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
import EditorTemplate from '~/components/EditorTemplate.vue'

export default {
	layout: 'editor',
	components: {
		EditorTemplate,
	},
}
</script>

<style scoped>
.wrapper {
	display: flex;
	height: 100vh;
}

.sidebar {
	flex: 1;
	max-width: 20rem;
}

.logo-area a {
	color: #fff;
	font-size: 1.25rem;
	font-weight: 300;
}

.element-box {
	background-color: #ffffff;
	border-radius: 0.25rem;
	height: 4.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 1.5rem;
}

.element-box:hover {
	cursor: pointer;
	background-color: #f0f0f0;
}

.main {
	flex: 4;
	background-color: #ffffff;
	box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
	overflow-y: auto;
}
</style>
