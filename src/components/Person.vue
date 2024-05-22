<template>
    <div class="Person">
        <h2>Name: {{name}}</h2>
        <h2>Age: {{age}}</h2>
        <button @click="ChangeName">ChangeName</button>
        <button @click="ChangeAge">ChangeAge</button>
        <button @click="ShowTel">Show Telephone</button>
    </div>
</template>

<script lang="ts">
    export default 
    {
        name: 'PersonInfo',

        data(): any
        {
            return { name: 'John', age: 30, tel: '123456789' } // 数据属性
        },

        methods: // 方法属性
        {
            ShowTel(): void // 方法定义
            {
                alert(this.tel); // 方法体
            },

            ChangeName(): void
            {
                this.name = 'Tom';
            },

            ChangeAge(): void
            {
                this.age += 1;
            },
        }
    };
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
</style>