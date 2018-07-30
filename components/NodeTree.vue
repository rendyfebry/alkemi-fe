<template>
    <h1 v-if="node.type === 'heading-1'" :class="node.class">
        {{ node.content }}
    </h1>

    <h2 v-else-if="node.type === 'heading-2'" :class="node.class">
        {{ node.content }}
    </h2>

    <h3 v-else-if="node.type === 'heading-3'" :class="node.class">
        {{ node.content }}
    </h3>

    <h4 v-else-if="node.type === 'heading-4'" :class="node.class">
        {{ node.content }}
    </h4>

    <h5 v-else-if="node.type === 'heading-5'" :class="node.class">
        {{ node.content }}
    </h5>

    <h6 v-else-if="node.type === 'heading-6'" :class="node.class">
        {{ node.content }}
    </h6>

    <p
		v-else-if="node.type === 'paragraph'"
		:class="node.class"
	>
        {{ node.content }}
    </p>

	<img
		v-else-if="node.type === 'image'"
		:class="node.class"
		:src="node.src"
        :width="node.width"
        :height="node.height"
	/>

    <a
		v-else-if="node.type === 'link'"
		:class="node.class"
        :href="node.href"
	>
        {{ node.content }}
    </a>

    <button
		v-else-if="node.type === 'button'"
		type="button"
		:class="`btn ${node.class}`"
	>
        {{ node.content }}
    </button>

    <ul v-else-if="node.type === 'ul'" :class="node.class">
        <template v-if="node.children && node.children.length">
            <node v-for="(child, i) in node.children" :node="child" :key="i" />
        </template>
    </ul>

    <li
		v-else-if="node.type === 'li'"
		type="li"
		:class="`${node.class}`"
	>
        <template v-if="node.children && node.children.length">
            <node v-for="(child, i) in node.children" :node="child" :key="i" />
        </template>
		<template v-else>
			{{ node.content }}
		</template>
    </li>


    <nav v-else-if="node.type === 'nav'" :class="node.class">
        <template v-if="node.children && node.children.length">
            <node v-for="(child, i) in node.children" :node="child" :key="i" />
        </template>
    </nav>

    <div v-else :class="node.class">
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
