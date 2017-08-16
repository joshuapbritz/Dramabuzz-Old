<template>
    <div id="snackbar">
        <h5><strong>**</strong> {{note}}</h5>
    </div>
</template>

<script>
    export default {
        props: ['text'],
        data() {
            return{
                note: this.text
            }
        }
    }
</script>

<style>
    
#snackbar {
    visibility: visible; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #1a1a1a; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 5px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    right: 20px; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
}

@media screen and (max-width: 1000px){
    #snackbar{
        border-radius: 0;
        right: 0;
        bottom: 0;
    }
}
</style>