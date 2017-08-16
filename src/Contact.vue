<template>
    <div id="contact">
        <contact-head></contact-head>
        <contact-info></contact-info>
    </div>
</template>

<script>
    import ContactHead from './components/contact/Head.vue'
    import ContactInfo from './components/contact/Message.vue'
    export default {
        components:{
            ContactHead,
            ContactInfo
        }
    }
</script>

<style>

</style>
