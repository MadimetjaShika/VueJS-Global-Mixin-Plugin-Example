<template>
  <div id="app">
    <h3>VueJS Global Mixins and Plugins Example</h3>
    <p>Tutorial at <a :href="tutorialLink" target="_blank">blog.mjshika.xyz</a></p>
    <img :src="splashImage" :key="splashImage" class="splash-image">
    <router-view></router-view>
  </div>
</template>

<script>
import eventBus from '@/helpers/event-bus';

export default {
  name: 'app',
  data() {
    return {
      defaultSplashImage: '/static/images/splash.jpeg',
      splashImage: '/static/images/splash.jpeg',
      tutorialLink: 'https://blog.mjshika.xyz/blog/post/registering-globally-available-helper-scripts-in-vuejs',
    };
  },
  mounted() {
    eventBus.bus.$on('notify', (text, context) => {
      // eslint-disable-next-line
      Materialize.toast(text, 4000, context);
    });

    eventBus.bus.$on('updateSplash', (splashPath) => {
      this.splashImage = splashPath || this.defaultSplashImage;
    });

    eventBus.bus.$on('destroyEvidence', () => {
      this.splashImage = this.defaultSplashImage;
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
