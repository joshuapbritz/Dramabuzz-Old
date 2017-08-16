<template>
    <div id="home">
        <div class="overlay">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo text-center">
                            <!-- LOGO -->
                            <img src="src/assets/logo.png" alt="" width="200px">
                            <hr>
                            <h1 class="home_style">DRAMABUZZ</h1>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-sm-8">
                        <div class="home_text">
                            <!-- TITLE AND DESC -->
                            <h1>Welcome</h1>
                            
                            <p>Drama Buzz was created to give home schooled families the opportunity to involve themselves in
                                the performing arts. Our goal is to develop and enhance the talents of the home schooled
                                community through drama.</p>

                            <div class="option-btn">

                                <a class="btn home-btn" href="#/contact">Contact Us</a>
                                <a class="tuor btn" href="#/about">Find out more</a>
                                
                            </div>
                        </div>
                    </div>
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



.logo{
    padding-bottom: 50px;
}
.home_text{
    text-align: left;
}

@media (max-width: 768px){
    .home_text{
        text-align: center;
    }

}
.home_text h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 300;
    line-height: 45px;
    padding-top: 30px
}
.home_text p {
    color: #fff;
    font-size: 17px;
    line-height: 28px;
    margin-top: 0px;
    font-weight: 300;
}
.option-btn {
    margin-top: 90px;
    margin-bottom: 50px
}
.home-btn,
.home-btn:focus,
.home-btn:active,
.home-btn:visited {
    background: transparent;
    border-color: #f39c12;
    color: #f39c12;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 19px;
    text-transform: uppercase;
    border-radius: 3px;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.home-btn:hover {
    background-color: #f39c12;
    color: #fff;
}

.home_style{
    color: #fff;
}
.tuor,
.tuor:focus,
tuor:active,
tuor:visited {
    color: #A9ADB0;
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 19px;
    font-weight: 500;
    background: transparent;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.tuor:hover {
    color: #fff;
}
.tuor i {
    font-size: 20px;
    padding-left: 5px;
    color: #f39c12;
}  
</style>