<template>
    <div id="policies">
        <policy-head></policy-head>
        <policy-list></policy-list>
        <policy-price></policy-price>
    </div>
</template>

<script>
    import PolicyHead from './components/policies/Head.vue'
    import PolicyList from './components/policies/List.vue'
    import PolicyPrice from './components/policies/Price.vue'
    export default {
        components: {
            PolicyHead,
            PolicyList,
            PolicyPrice
        }
    }
</script>

<style>

</style>
