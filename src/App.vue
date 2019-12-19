<template>
  <div id="app">
    <keep-alive>
       <router-view v-if="$route.meta.requireKeep===true" />
    </keep-alive>
    <router-view v-if="$route.meta.requireKeep===false" />
  </div>
</template>

<style lang="scss">
</style>