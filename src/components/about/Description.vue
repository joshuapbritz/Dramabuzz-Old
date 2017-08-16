<template>
    <div id="desc">
        <div class="about_desc">
            <div class="description_area">
                <h1 class="text-left">WHAT WE DO</h1>
                <hr align="left">
                <p>
                    From our start in 2009 with our début production, The King and I, Drama Buzz has continued to entertain audiences with wholesome family entertainment. We envision a community where home schooled children can develop and perform in an ethical, healthy and fun environment.
                </p>
            </div>
            <br><br>
            <div class="description_area">
                <h1 class="text-right">GENERAL INFO</h1>
                <hr align="right">
                <p class="text-right">
                    One of the first things you should know about DramaBuzz, is that all of our performances are put together by volunteering parents. Although we occasionally outsource some of our prop building and costume making, the bulk of the work is done by the parents of our students. Likewise, our directors and choreographers are volunteering moms.
                    We have put on eight plays in total, and each year we have seen exponential growth in the skills of our cast members. Our goal is to entertain audiences with clean, wholesome family entertainment.    
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

.description_area{
    padding: 40px 0;
}

@media screen and (max-width: 900px){
    .description_area{
        padding: 10px 0;
    }
    .description_area p{
        text-align: left !important;
    }
}

.description_area hr{
    border: none;
    background-color: #222;
    width: 10%;
    height: 1px;
}
</style>