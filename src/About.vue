<template>
    <div id="app">
        <about-head></about-head>
        <about-description></about-description>
        <about-faq></about-faq>
        <about-productions></about-productions>

    </div>
</template>

<script>
    import AboutHead from './components/about/Head.vue'
    import AboutDescription from './components/about/Description.vue'
    import AboutFaq from './components/about/FAQ.vue'
    import AboutProductions from './components/about/Productions.vue'
    export default {
        components: {AboutHead, AboutDescription, AboutFaq, AboutProductions}
    }
</script>