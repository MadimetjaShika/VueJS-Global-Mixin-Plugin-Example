<template>
  <div id="app">
    <img class="splash-image" :src="splashImage">
    <router-view></router-view>
  </div>
</template>

<script>
import eventBus from '@/helpers/event-bus';

export default {
  name: 'app',
  data() {
    return {
      splashImage: '/static/images/splash.jpeg',
    };
  },
  mounted() {
    eventBus.bus.$on('notify', (text, context) => {
      // eslint-disable-next-line
      Materialize.toast(text, 4000, context);
    });

    eventBus.bus.$on('updateSplash', (splashPath) => {
      this.splashImage = splashPath || '/static/images/splash.jpeg';
    });
  },
};
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

.splash-image{
  height: 250px;
}
</style>
