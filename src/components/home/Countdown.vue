<template>
    <div class="timebox">
        <div class="overlay">
            <span id="days">{{ days | twoDigits }}<t>d </t> </span>
            <span id="hours">{{ hours | twoDigits }}<t>h </t> </span>
            <span id="minutes">{{ minutes | twoDigits }}<t>m </t> </span>
            <span id="seconds">{{ seconds | twoDigits }}<t>s </t> </span>
            <hr>
            <h4>Till our first performance of <a href="#/booking"><strong>Annie Jr.</strong></a></h4>
        </div>
    </div>  
</template>

<script>
import Vue from 'vue'

Vue.filter('twoDigits', (value) => {
    if ( value.toString().length <= 1 ) {
        return '0'+value.toString()
    }
    return value.toString()
})

export default {
    props: ['deadline'],

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null
        }
    },

    mounted() {
        this.date = Math.trunc(Date.parse(this.deadline) / 1000)

        setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000)
        }, 1000)
    },

    computed: {
        seconds() {
            return Math.trunc(this.date - this.now) % 60
        },

        minutes() {
            return Math.trunc((this.date - this.now) / 60) % 60
        },

        hours() {
            return Math.trunc((this.date - this.now) / 60 / 60) % 24
        },

        days() {
            return Math.trunc((this.date - this.now) / 60 / 60 / 24)
        }
    }
}
</script>
<style>
.timebox{
    width: 100%;
    height: auto;
    text-align: center;
    background-image: url('../../assets/fun_bg-min.jpg');
    background-position: center center;
    background-size: cover;
    font-weight: 100;
}

.timebox .overlay{
    padding: 150px 70px;
}

.timebox span{
    font-size: 50px;
    color: #ddd;
}

@media screen and (max-width: 600px){
    .timebox span{
        font-size: 30px;
    }
}

.timebox hr{
    width: 15%;
}

.timebox a{
    color: #ccc;
}

.timebox h4{
    color: #fff;
    font-weight: 300;
}

.timebox t{
    opacity: 0.5;
}
</style>
