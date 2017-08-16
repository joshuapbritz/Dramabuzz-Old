<template>
    <div id="cards">
        <div class="card" style="background-image: url('src/assets/cardone.jpg')">
            <a href="#/castlist"><div class="overlay" style="">
                <h3>Cast List 2017</h3>
            </div></a>
        </div>

        <div class="card" style="background-image: url('src/assets/cardtwo.jpg')">
            <a href="#/booking"><div class="overlay" style="">
                <h3>Book For The Show</h3>
            </div></a>
        </div>

        <div class="card" style="background-image: url('src/assets/cardthree.jpg')">
            <a href="#/contact"><div class="overlay" style="">
                <h3>Contact Us</h3>
            </div></a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style >

.card{
    width: 30%;
    height: auto;
    border-radius: 10px;
    background-size: cover;
    background-position: center center;
}

@media screen and (max-width: 900px){
    .card{
        width: 100%;
        margin: 20px auto;
    }
}

.card h3{
    color: #fff;
}

.card .overlay{
    padding: 100px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card:hover{
    box-shadow: 0 0 10px #666;
}
</style>