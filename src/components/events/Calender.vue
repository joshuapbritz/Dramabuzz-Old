<template>
    <div id="calender">
        <div class="container" style="overflow-x: scroll; ">
            <table class="year-table">

                <tr>

                    <td>Type</td>
                    <td>Cast</td>
                    <td>Date</td>
                    <td>Time</td>

                    <td>Place</td>


                </tr>

                <!--Day Camp-->
                <tr>
                    <td>Day Camp</td>

                    <td>Full Cast</td>

                    <td>5 April</td>

                    <td>09:00 - 13:00</td>

                    <td>Church</td>
                </tr>
                <!--Day Camp End-->

                <!--Auditions-->
                <tr>
                    <td>Auditions</td>

                    <td>Full Cast</td>

                    <td>3 May</td>

                    <td>08:00 - 13:00</td>

                    <td>Church</td>
                </tr>

                <tr>
                    <td>Callback Auditions</td>

                    <td>Cast Will Be Notified</td>

                    <td>4 May</td>

                    <td>09:00 - 12:00</td>

                    <td>Church</td>
                </tr>
                <!--Audtions End-->

                <!--First Day-->
                <tr>
                    <td>First Day</td>

                    <td>Full Cast</td>

                    <td>10 May</td>

                    <td>09:00 - 13:00</td>

                    <td>Church</td>
                </tr>
                <!--First Day End-->

                <!--Workshops-->
                <tr>
                    <td>Workshop (<strong>Matthew Ribnick</strong>)</td>

                    <td>TBA</td>

                    <td>TBA</td>

                    <td>TBA</td>

                    <td>Church</td>
                </tr>

                <tr>
                    <td>Workshop (<strong>Gera Phielix</strong>)</td>

                    <td>TBA</td>

                    <td>TBA</td>

                    <td>TBA</td>

                    <td>Church</td>
                </tr>

                <tr>
                    <td>Workshop (<strong>Gera Phielix</strong>)</td>

                    <td>TBA</td>

                    <td>TBA</td>

                    <td>TBA</td>

                    <td>Church</td>
                </tr>
                <!--Workshops End-->

                <!--Compulsory Practice-->
                <tr>
                    <td>Compulsory Week</td>

                    <td>Full Cast**</td>

                    <td>3 July</td>

                    <td>09:00 - 16:00</td>

                    <td>Church</td>
                </tr>
                <tr>
                    <td>Compulsory Week</td>

                    <td>Full Cast**</td>

                    <td>4 July</td>

                    <td>09:00 - 16:00</td>

                    <td>Church</td>
                </tr>
                <tr>
                    <td>Compulsory Week</td>

                    <td>Full Cast**</td>

                    <td>5 July</td>

                    <td>09:00 - 16:00</td>

                    <td>Church</td>
                </tr>
                <tr>
                    <td>Compulsory Week</td>

                    <td>Full Cast**</td>

                    <td>6 July</td>

                    <td>09:00 - 16:00</td>

                    <td>Church</td>
                </tr>
                <tr>
                    <td>Compulsory Week</td>

                    <td>Full Cast**</td>

                    <td>7 July</td>

                    <td>09:00 - 16:00</td>

                    <td>Church</td>
                </tr>
                <!--Compulsory Practice End-->

                <!--Theatre Practice-->
                <tr>
                    <td>Theatre Practice</td>

                    <td>Full Cast**</td>

                    <td>31 July</td>

                    <td>08:00 - 17:00</td>

                    <td>Theatre</td>
                </tr>
                <tr>
                    <td>Theatre Practice</td>

                    <td>Full Cast**</td>

                    <td>1 August</td>

                    <td>08:00 - 17:00</td>

                    <td>Theatre</td>
                </tr>
                <tr>
                    <td>Theatre Practice</td>

                    <td>Full Cast**</td>

                    <td>2 August</td>

                    <td>08:00 - 17:00</td>

                    <td>Theatre</td>
                </tr>
                <!--Theatre Practice End-->

                <!--Production-->
                <tr>
                    <td>Performance</td>

                    <td>Full Cast</td>

                    <td>3 August</td>

                    <td>All Day</td>

                    <td>Theatre</td>
                </tr>
                <tr>
                    <td>Performance</td>

                    <td>Full Cast</td>

                    <td>4 August</td>

                    <td>All Day</td>

                    <td>Theatre</td>
                </tr>
                <tr>
                    <td>Performance</td>

                    <td>Full Cast</td>

                    <td>5 August</td>

                    <td>All Day</td>

                    <td>Theatre</td>
                </tr>
                <!--Production End-->

                <!--Cast Party-->
                <tr>
                    <td>Cast Party</td>

                    <td>Full Cast</td>

                    <td>9 August</td>

                    <td>09:00 - 13:00</td>

                    <td>(Venue to be confirmed)</td>
                </tr>
                <!--Cast Party End-->
            </table>
            
            <event-foot></event-foot>
        </div>
    </div>
</template>

<script>
    import EventFoot from './Footnote.vue'
    export default {
        components: { EventFoot }
    }
</script>

<style>
.year-table{
    width: 100%;
    overflow-x: scroll;
    box-shadow: 0 0 10px #222;
}

.year-table tr{
    /*border-bottom: solid 1px grey;
    border-top: solid 1px grey;*/
    height: 50px;
    width: 100%;
}

.year-table td{
    padding:15px;
}

.year-table tr:nth-child(odd){
    background-color: lightgrey;
}

.year-table tr:nth-child(1){
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
    background-color: #1a1a1a;
}
</style>