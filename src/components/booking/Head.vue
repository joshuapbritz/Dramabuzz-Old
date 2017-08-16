<template>
    <div id="booking">
        <h1>Stay tuned for the dates of our next performance</h1>          
    </div>
</template>

<script>
//<div class="iframeParent"><iframe src="https://www.webtickets.co.za/embed.event.aspx?itemid=1471984057" class="myIframe" frameborder="0"></iframe></div>
    export default {

    }
</script>

<style>
#booking h1{
    color: #0d826c;
    font-size: 50px;
    text-align: center;
}

#booking h4{
    color: #222;
    text-align: center;
}

#booking{
    display: flex;
    align-items: center;
    justify-content: center;
}

#booking .iframeParent{
    width: 900px;
    height: 80%;
}

@media screen and (max-width: 900px){
    #booking .iframeParent{
        width: 100%;
    }
}

#booking .iframeParent .myIframe{
    width: 100%;
    height: 100%;
}
</style>