<template>
  <div id="app">
    <i-switch size="large" v-model="isZh">
        <span slot="open">中文</span>
        <span slot="close">English</span>
    </i-switch>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
@Component
export default class App extends Vue {
    private isZh: boolean = false;
    @Watch('isZh')
    protected watchLang(val: boolean): void {
        this.$i18n.locale = val ? 'zh' : 'en';
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
