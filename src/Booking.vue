<template>
    <div id="app">
        <booking-head></booking-head>
    </div>
</template>

<script>
    
    import BookingHead from './components/booking/Head.vue'
    export default {
        data() {
            return {
                title: 'Hello World'
            }
        },
        components: { BookingHead }
    }
</script>
