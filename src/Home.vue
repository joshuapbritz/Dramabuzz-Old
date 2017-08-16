<template>
    <div id="app">
        <home-head></home-head>
        <home-welcome></home-welcome>
        <home-next></home-next>
        <home-cards></home-cards>
    </div>
</template>

<script>
    import HomeHead from './components/home/Head.vue'
    import HomeWelcome from './components/home/Welcome.vue'
    import HomeNext from './components/home/next.vue'
    // <home-countdown deadline="August 3, 2017"></home-countdown>
    // import HomeCountdown from './components/home/Countdown.vue'
    import HomeCards from './components/home/Cards.vue'
    export default {
        data() {
            return {
                title: 'Hello World'
            }
        },
        components: {HomeHead, HomeWelcome, HomeNext, HomeCards}
    }
</script>

<style>

</style>