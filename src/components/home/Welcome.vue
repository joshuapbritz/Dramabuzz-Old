<template>
    <div id="welcome">

        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <!-- ABOUT US SECTION TITLE-->
                    <div class="section_title">
                        <h2>Welcome To DramaBuzz</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                
                    <img src="src/assets/about_db.png" alt="about_dramabuzz" height="500px">

                </div>

                <div class="col-md-6">

                    <div class="inner_about_title">
                        <p> Dramabuzz was created as a means of helping children and teens develop their acting and singing
                            skills in a group setting. While we do not coach our students individually, we have a wonderful
                            team of volunteering choreographers and directors who teach them the fundamentals of drama.
                            We hope to create a Broadway like environment that promotes teamwork, learning, and of course,
                            fun.
                        </p>
                    </div>
                    <a class="btn home-btn" href="#/about">Learn More</a>
                    <br><br>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.section_title {
    padding-top: 90px;
    padding-bottom: 50px;
}
.section_title h2 {
    text-transform: uppercase;
    text-align: center;
    position: relative;
    color: #333;
    font-size: 30px;
    font-weight: 400;
}
.section_title h2:after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 60px;
    height: 1px;
    background-color: #f39c12;
    left: 50%;
    margin-left: -30px;
}
.section_title p {
    text-align: left;
    margin-top: 45px;
    color: #333;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
}

.inner_about_title {
    padding-bottom: 50px;
}
.inner_about_title h2 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 30px;
    line-height: 37px;
    position: relative;
}
.inner_about_title h2:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 70px;
    background: #f39c12;
    height: 1px;
}
.inner_about_title p {
    font-size: 19px;
    line-height: 24px;
    margin-top: 40px;
}
</style>