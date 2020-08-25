<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/indent">订单</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
