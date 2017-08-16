<template>
    <div id="app">
        <event-head></event-head>
        <event-table></event-table>
        <event-note text="Marks a field that is compulsory"></event-note>

    </div>
</template>

<script>
    import EventHead from './components/events/Head.vue'
    import EventTable from './components/events/Calender.vue'
    import EventNote from './components/Notes.vue'
    export default {
        components: { EventHead, EventTable, EventNote }
    }
</script>