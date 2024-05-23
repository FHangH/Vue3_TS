<template>
    <div class="Person">
        First: <input type="text" v-model="firstname"> <br>
        Last: <input type="text" v-model="lastname"> <br>
        Full: <span>{{fullname}}</span> <br>
        <button @click="ChangeName">ChangeName</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref, computed } from 'vue';

    let firstname = ref('zhang');
    let lastname = ref('san');
    let fullname = computed
    ({
        get()
        {
            return  firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + ' ' + 
                    lastname.value.slice(0, 1).toUpperCase() + lastname.value.slice(1);
        },

        set(val)
        {
            let names = val.split('-');
            firstname.value = names[0];
            lastname.value = names[1];
        }
    });

    function ChangeName()
    {
        fullname.value = 'li-si';
    }
</script>

<style scoped>
    .Person
    {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button
    {
        margin-right: 5px;
    }

    li
    {
        font-size: 20px;
    }
</style>