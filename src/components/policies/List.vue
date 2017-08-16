<template>
    <div id="list">
        <div class="container">
            <h4>Size of Group</h4>
                <ul>
                    <li>-The size of the group will be limited to
                        <!--VAR--><kbd>{{size}}</kbd><!--VAR-->
                    </li>
                </ul>
            <h4>Age and other criteria for participation</h4>
                <ul>
                    <li>-Drama Buzz is open to home school students between the ages of <mark>10 and 18.</mark></li>
                    <li>-<mark>The age of the eldest sibling may not be below 10.</mark></li>
                    <li>-All new members of drama buzz are expected to serve their first year in the chorus. The directors reserve the right to make exception to this rule.</li>
                    <li>-All members must attend day camp and participate in full</li>
                    <li>-Everyone who auditions for a role must be willing to accept any role including the chorus. Refusal to take a given role will jeopardize a member’s chance of being accepted into Drama Buzz in future seasons.</li>
                    <li>-No non-Drama buzz members (whether related to members, or friends of members) will be permitted to attend drama practices without prior permission.</li>
                </ul>
            <h4>Discipline and Code of Conduct</h4>
                <ul>
                    <li>-Nobody is allowed to leave the property during any rehearsal time</li>
                    <li>-No food allowed during rehearsals</li>
                    <li>-No gadgets/cell phones etc allowed on stage</li>
                    <li>-If someone chooses to listen to music when they are off stage (i.e. not involved AT ALL in the current rehearsal slot) they must use earphones.</li>
                    <li>-Cast members are to submit to the costume ladies on all matters pertaining to costumes and wear their costumes in the way they are intended,</li>
                    <li>-Cast members do not have a right to choose their own costume and any input that is allowed from the cast is at the sole discretion of the Costume Committee.</li>
                    <li>-Bullying (emotional or physical), teasing, taunting and other mean spirited behaviour will not be tolerated. Directors will expel cast members who are unable to abide by these basic rules of social conduct. </li>
                    <li>-Older cast members need to take into consideration that they are socializing with many younger children and need to avoid mature / controversial and taboo topics whether they are directing their conversation to the younger children or not.</li>
                </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                size: 50
            }
        }
    }
</script>

<style>
#list ul{
    list-style-type: none;
}

#list mark{
    background-color: #777;
}
</style>