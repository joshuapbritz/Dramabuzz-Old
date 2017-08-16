<template>
    <div id="castboxes">
        <div class="container-fluid">
            <div class="castbox" v-for="i in roles" v-bind:class="[i.cast + '-border', {}]">
                <h1>{{ i.name }}</h1>
                <hr>
                <div class="castbox-desc">
                    <h4>{{ i.role }}</h4>
                    <span class="label label-default" v-bind:class="i.cast" style="float: right;">{{i.cast | capitalize}} Cast</span>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                roles: [
                    {name: 'Anna Britz', role: 'Annie', cast: 'red'},
                    {name: 'Ruthie Cantrell', role: 'Annie', cast: 'blue'},
                    {name: 'Cois Venter', role: 'Mr. Warbucks', cast: 'red'},
                    {name: 'Titus Cantrell', role: 'Mr. Warbucks', cast: 'blue'},
                    {name: 'Courtney Cullen', role: 'Grace', cast: 'blue'},
                    {name: 'Rebecca Britz', role: 'Grace', cast: 'red'},
                    {name: 'Dane Visagie', role: 'Miss Hannigan', cast: 'blue'},
                    {name: 'Jessica Beyl', role: 'Miss Hannigan', cast: 'red'},
                    {name: 'Gustav Smit', role: 'Rooster**', cast: 'blue'},
                    {name: 'Jonathan Barlow-Jones', role: 'Rooster**', cast: 'red'},
                    {name: 'Corlia Bekker', role: 'Lilly**', cast: 'blue'},
                    {name: 'Danni Venter', role: 'Lilly**', cast: 'red'},
                    {name: 'Megan Barlow-Jones', role: 'Lilly**', cast: 'red'},
                    {name: 'Tyler Komen', role: 'Lilly**', cast: 'blue'},
                    {name: 'Leandre van den Bergh', role: 'Pepper', cast: 'blue'},
                    {name: 'Sarah Britz', role: 'Pepper', cast: 'red'},
                    {name: 'Imke Hay', role: 'Molly', cast: 'blue'},
                    {name: 'Rachel Britz', role: 'Molly', cast: 'red'},
                    {name: 'LJ Hay', role: 'Duffy', cast: 'blue'},
                    {name: 'Zoe-Luke van Onselen', role: 'Duffy', cast: 'red'},
                    {name: 'Alexa Custers', role: 'July', cast: 'red'},
                    {name: 'Jana Marie Cantrell', role: 'July', cast: 'blue'},
                    {name: 'Brynn Kirby', role: 'Kate', cast: 'red'},
                    {name: 'Megan Barker', role: 'Kate', cast: 'blue'},
                    {name: 'Emily Custers', role: 'Tessie', cast: 'red'},
                    {name: 'Leah Grobler', role: 'Tessie', cast: 'blue'},
                    {name: 'Luiz Hibberd', role: 'Sandy/Street Child', cast: 'both'},
                    {name: 'Reuben Swart', role: 'Sandy/Street Child', cast: 'both'},
                    {name: 'Ethan Greeff', role: 'Sandy/Street Child', cast: 'both'},
                    {name: 'Kristie Dirks', role: 'Speaking Orphan**', cast: 'both'},
                    {name: 'Stephanie Swart', role: 'Speaking Orphan**', cast: 'both'},
                    {name: 'Savannah Hibberd', role: 'Orphan/Big Sister in NYC**', cast: 'both'},
                    {name: 'Abbie Seelhammer', role: 'Orphan', cast: 'both'},
                    {name: 'Amoré Murdoch', role: 'Orphan', cast: 'both'},
                    {name: 'Ellie Murdoch', role: 'Orphan', cast: 'both'},
                    {name: 'Tayla Greeff', role: 'Cecille/Bonnie Boylan**/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Simon Visagie', role: 'Drake/New Yorker/Mansion Staff', cast: 'red'},
                    {name: 'Timothy Barker', role: 'Drake/New Yorker/Mansion Staff', cast: 'blue'},
                    {name: 'Jade Webb', role: 'Mrs Pugh/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Kerryn Greeff', role: 'Mrs Greer/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Kelly Viljoen', role: 'Annette/Connie Boylan**/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Henco Bekker', role: 'Ward/New Yorker/Mansion Staff', cast: 'blue'},
                    {name: 'Joshuwa Holiday', role: 'Ward/New Yorker/Mansion Staff', cast: 'red'},
                    {name: 'Alicia Pan', role: 'Usherette/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Ruan van den Bergh', role: 'Bert Healey/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Kyle Lundie', role: 'Sound Effects Man/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Callan Clausen', role: 'Radio Announcer**(scene 6)/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Carla-Heinli Schmidt', role: 'Star to be/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Daniëlla Swart', role: 'Apple Seller/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Dylon Webb', role: 'President Roosevelt/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Jordan Hibberd', role: 'Bundles/Howe/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Gabi Viljoen', role: 'Lady at the window/New Yorker', cast: 'both'},
                    {name: 'Jean-Pierre Smit', role: 'Policeman/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Jed Murdoch', role: 'Bell Boy/street child', cast: 'both'},
                    {name: 'Johannes Basson', role: 'Bell Boy/street child', cast: 'both'},
                    {name: 'Logan Murdoch', role: 'Bell Boy/street child', cast: 'both'},
                    {name: 'Josh Seelhammer', role: 'Bell Boy/street child', cast: 'both'},
                    {name: 'Linmarie Dirks', role: 'Dog catcher/Ronnie Boylan**/New Yorker/Mansion Staff', cast: 'both'},
                    {name: 'Minkie Basson', role: 'Popcorn Seller/New Yorker/Mansion Staff', cast: 'both'}
                ]
            }
        },
        filters: {
            capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        methods:{
            showBlue: function(){
                var els = document.getElementsByClassName('castbox');
                for(let i in els){
                    if(('' + els[i].className + '').indexOf(' blue-border ')>-1){
                        els[i].style.display = 'none';
                    }
                }
                alert('done')
            },
            showRed: function(){

            },
            showAll: function(){

            }
        }
    }
</script>

<style>
.castbox{
    width: 60%;
    height: auto;
    margin: 70px auto;
    background-color: #fff;
    padding: 30px;
}

@media screen and (max-width: 600px){
    .castbox{
        width: 100%;
    }
}

.castbox h1{
    text-align: center;
}

.castbox hr{
    width: 30%;
    border:none;
    background-color: #1a1a1a;
    height: 1px;
    margin: 0 auto 10px auto;
}

.castbox-desc{
    width: 100%;
    height: auto;
    padding: 10px 30px;
}

.castbox-desc h4{
    text-align: center;
}

.blue{
    background-color: #3399ff;
}

.red{
    background-color: #ff3333;
}

.both{
    background-color: #777777;
}

.blue-border{
    border-left: solid 4px #3399ff;
}

.red-border{
    border-left: solid 4px #ff3333;
}

.both-border{
    border-left: solid 4px #777777;
}

</style>