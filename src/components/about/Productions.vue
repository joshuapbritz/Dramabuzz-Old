<template>
    <div id="productions">
        <h2 class="text-center">Our Previous Productions</h2>
        <hr>
        <br>
        <carousel-3d :display="7" :width="400" :height="560" :controlsVisible="true">
            <slide v-for="(a,i) in slides" :index="i">
                <img v-bind:src="a.image">
            </slide>
        </carousel-3d>
        <br>
        <hr>
    </div>
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
                slides:[
                    {image: 'src/assets/2009.jpg', title: 'The King and I', year: 2009},
                    {image: 'src/assets/2010.jpg', title: 'Fiddler on the Roof', year: 2010},
                    {image: 'src/assets/2011.jpg', title: 'Alice in Wonderland', year: 2011},
                    {image: 'src/assets/2012.jpg', title: 'The Rockin\' Tale of Snow White', year: 2012},
                    {image: 'src/assets/2013.jpg', title: 'Arabian Nights', year: 2013},
                    {image: 'src/assets/2014.jpg', title: 'Around the World in Eighty Days', year: 2014},
                    {image: 'src/assets/2015.jpg', title: 'Beauty and the Beast', year: 2015},
                    {image: 'src/assets/2016.jpg', title: 'Peter Pan', year: 2016},
                    {image: 'src/assets/2017.jpg', title: 'Annie', year: 2017}
                ]
            }
        }
    }
</script>

<style>
#productions{
    margin: 100px 0;
}
</style>
