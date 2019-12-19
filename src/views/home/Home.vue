<template>
  <div>
    home
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
      console.log("home")
  }
};
</script>

<style>
</style>