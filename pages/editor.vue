<template>
	<div class="wrapper pt-4">
		<div class="main">
            <EditorTemplate />
		</div>

		<div class="sidebar p-4">
            <h3 class="section-title">Section 1</h3>
            <div class="row no-gutters">
                <div class="col col-12 col-lg-6">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-paragraph" />
                    </div>
                </div>
                <div class="col col-12 col-lg-6">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-heading" />
                    </div>
                </div>
                <div class="col col-12 col-lg-6">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-image" />
                    </div>
                </div>
                <div class="col col-12 col-lg-6">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-quote-right" />
                    </div>
                </div>
                <div class="col col-12 col-lg-6">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-newspaper" />
                    </div>
                </div>
            </div>
            <h3 class="section-title">Section 2</h3>
            <div class="row">
                <div class="col col-12 col-lg-6">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-paragraph" />
                    </div>
                </div>
                <div class="col col-12 col-lg-6">
                    <div class="element-box mb-3 mr-3">
                        <i class="fas fa-heading" />
                    </div>
                </div>
                <div class="col col-12 col-lg-6">
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
	flex: 0 0 20rem;
}

.element-box {
	border: 1px solid #f0f0f0;
	height: 110px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 2rem;
}

.element-box:hover {
	cursor: pointer;
	background-color: #f0f0f0;
}

.main {
	flex: 1;
	background-color: #ffffff;
	box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
	overflow-y: auto;
}
</style>
