<template>
    <div id="app">
        <cast-head></cast-head>
        <cast-box></cast-box>
        <cast-note text="Denotes a role that will need further explanation"></cast-note>
    </div>
</template>

<script>
    import CastHead from './components/cast/Head.vue'
    import CastBox from './components/cast/Castbox.vue'
    import CastNote from './components/Notes.vue'
    export default {
        components: { CastHead, CastBox, CastNote }
    }
</script>

<style>
    
</style>