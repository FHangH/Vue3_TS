// template: 结构(html) script: 逻辑(js/ts) style: 样式

<template>
    <div class="app">
        <h2>Vue3 Router</h2>

        <div class="nav">
            <RouterLink to="/aaa" active-class="active">AAA</RouterLink>
            <RouterLink to="/bbb" active-class="active">BBB</RouterLink>
            <RouterLink to="/ccc" active-class="active">CCC</RouterLink>
        </div>

        <div class="content">
          <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
  import { RouterView, RouterLink } from 'vue-router';
</script>

<style>
.active
{
  background-color: #4CAF50; /* Green */
  color: white;
}

/* 更新后的样式 */
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
}

h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #4CAF50;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  /* 新增样式 */
  height: 50px;
  line-height: 50px;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 0 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  /* 新增样式 */
  font-size: 16px;
  letter-spacing: 1px;
}

.nav a:hover,
.nav a.active {
  background-color: #4CAF50;
  color: white;
}

.content {
  min-height: 300px;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* 新增样式 */
  margin-top: 20px;
}
</style>