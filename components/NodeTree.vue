<template>
	<div
		class="builder-element"
		v-if="node.type === 'heading'"
		:id="node.id"
		:data-type="node.type"
		:data-icon="node.icon"
	>
		<div class="element-action">
			<div class="item handle" data-action="move">
				<i class="fas fa-arrows-alt"></i>
			</div>
			<div
				class="item"
				data-action="edit"
				@click="handleEdit(node.id, node.type)"
			>
				<i class="fas fa-pencil-alt"></i>
			</div>
			<div
				class="item"
				data-action="delete"
				@click="handleDelete(node.id)"
			>
				<i class="fas fa-trash-alt"></i>
			</div>
		</div>

		<h1 v-if="node.options && node.options.level === 1" :class="node.class">
			{{ node.content }}
		</h1>
		<h2 v-else-if="node.options && node.options.level === 2" :class="node.class">
			{{ node.content }}
		</h2>

		<h3 v-else-if="node.options && node.options.level === 3" :class="node.class">
			{{ node.content }}
		</h3>

		<h4 v-else-if="node.options && node.options.level === 4" :class="node.class">
			{{ node.content }}
		</h4>

		<h5 v-else-if="node.options && node.options.level === 5" :class="node.class">
			{{ node.content }}
		</h5>

		<h6 v-else-if="node.options && node.options.level === 6" :class="node.class">
			{{ node.content }}
		</h6>

	</div>


	<div
		class="builder-element"
		v-else-if="node.type === 'paragraph'"
		:id="node.id"
		:data-type="node.type"
		:data-icon="node.icon"
	>
		<div class="element-action">
			<div class="item handle" data-action="move">
				<i class="fas fa-arrows-alt"></i>
			</div>
			<div
				class="item"
				data-action="edit"
				@click="handleEdit(node.id, node.type)"
			>
				<i class="fas fa-pencil-alt"></i>
			</div>
			<div
				class="item"
				data-action="delete"
				@click="handleDelete(node.id)"
			>
				<i class="fas fa-trash-alt"></i>
			</div>
		</div>
		<p :class="node.class">
			{{ node.content }}
		</p>
	</div>

	<div
		class="builder-element"
		v-else-if="node.type === 'image'"
		:id="node.id"
		:data-type="node.type"
		:data-icon="node.icon"
	>
		<div class="element-action">
			<div class="item handle" data-action="move">
				<i class="fas fa-arrows-alt"></i>
			</div>
			<div
				class="item"
				data-action="edit"
				@click="handleEdit(node.id, node.type)"
			>
				<i class="fas fa-pencil-alt"></i>
			</div>
			<div
				class="item"
				data-action="delete"
				@click="handleDelete(node.id)"
			>
				<i class="fas fa-trash-alt"></i>
			</div>
		</div>
		<img
			:class="`img img-fluid ${node.class}`"
			:src="node.options ? node.options.src : ''"
			:width="node.options ? node.options.width : ''"
			:height="node.options ? node.options.height : ''"
		/>
	</div>

	<div
		class="builder-element"
		v-else-if="node.type === 'link'"
		:id="node.id"
		:data-type="node.type"
		:data-icon="node.icon"
	>
		<div class="element-action">
			<div class="item handle" data-action="move">
				<i class="fas fa-arrows-alt"></i>
			</div>
			<div
				class="item"
				data-action="edit"
				@click="handleEdit(node.id, node.type)"
			>
				<i class="fas fa-pencil-alt"></i>
			</div>
			<div
				class="item"
				data-action="delete"
				@click="handleDelete(node.id)"
			>
				<i class="fas fa-trash-alt"></i>
			</div>
		</div>
		<a
			:class="node.class"
			:href="node.href"
		>
			{{ node.content }}
		</a>
	</div>

	<div
		class="builder-element"
		v-else-if="node.type === 'button'"
		:id="node.id"
		:data-type="node.type"
		:data-icon="node.icon"
	>
		<div class="element-action">
			<div class="item handle" data-action="move">
				<i class="fas fa-arrows-alt"></i>
			</div>
			<div
				class="item"
				data-action="edit"
				@click="handleEdit(node.id, node.type)"
			>
				<i class="fas fa-pencil-alt"></i>
			</div>
			<div
				class="item"
				data-action="delete"
				@click="handleDelete(node.id)"
			>
				<i class="fas fa-trash-alt"></i>
			</div>
		</div>
		<button
			type="button"
			:class="`btn ${node.class}`"
		>
			{{ node.content }}
		</button>
	</div>

	<ul v-else-if="node.type === 'ul'" :class="node.class" :id="node.id">
		<template v-if="node.children && node.children.length">
			<node v-for="(child, i) in node.children" :node="child" :key="i" />
		</template>
	</ul>

	<li
		v-else-if="node.type === 'li'"
		type="li"
		:class="`${node.class}`"
		:id="node.id"
	>
		<template v-if="node.children && node.children.length">
			<node v-for="(child, i) in node.children" :node="child" :key="i" />
		</template>
		<template v-else>
			{{ node.content }}
		</template>
	</li>


	<nav v-else-if="node.type === 'nav'" :class="node.class" :id="node.id">
		<template v-if="node.children && node.children.length">
			<node v-for="(child, i) in node.children" :node="child" :key="i" />
		</template>
	</nav>

	<div v-else :class="node.class" :id="node.id">
		<template v-if="node.children && node.children.length">
			<node v-for="(child, i) in node.children" :node="child" :key="i" />
		</template>
		<template v-else>
			{{ node.content }}
		</template>
	</div>
</template>

<script>
export default {
	name: 'node',
	props: {
		node: Object,
	},
	methods: {
		handleEdit(id, type) {
			this.$bus.$emit('edit-element', id, type)
		},
		handleDelete(id) {
			this.$bus.$emit('delete-element', id)
		},
	}
}
</script>

<style scoped>
.container-small {
	max-width: 960px !important;
}

.pricing-header {
	max-width: 700px;
}

.card-deck .card {
	min-width: 220px;
}
</style>
