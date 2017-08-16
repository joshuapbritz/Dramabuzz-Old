<template>
    <div class="timebox">
        <div class="overlay">
            <span>Stay tuned for the dates of our next performance</span>
        </div>
    </div>  
</template>

<script>
export default {

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
