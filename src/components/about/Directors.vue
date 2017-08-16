<template>
    <carousel-3d :perspective="180" :controls-visible="true" :width="600" :display="1">
        <slide v-for="(a, i) in persons" :index="i">
            <div class="overlay">
                <div>
                    <span class="title">{{a.name}}</span>
                    <p>{{a.desc}}</p>
                </div>
            </div>
        </slide>
    </carousel-3d>
</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    export default {
        components: {
            Carousel3d,
            Slide
        },
        data() {
            return{
                persons:[
                    {name: 'Felicity Britz', desc: 'Head Director, <strong>Blocking<strong>'},
                    {name: 'Sharon Venter', desc: 'Musical Director, <strong>Singing<strong>'}
                ]
            }
        }
    }
</script>

<style>
.carousel-3d-container .carousel-3d-slide .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-3d-container .carousel-3d-slide p {
    color: #fff;
}
.carousel-3d-container .carousel-3d-slide .title {
    font-size: 22px;
    color: #fff;
}
   
</style>