<template>
  <div>
    <h3>Pistol</h3>
    <button class="btn waves-effect waves-light red" @click="pullTrigger()">Pull Trigger</button>
  </div>
</template>

<script>
export default {
  name: 'pistol',
  data() {
    return {
      triggerAction: 'Arabellum Fired, Yay!',
      splashPath: '/static/images/pistol.jpeg',
    };
  },
  methods: {
    pullTrigger() {
      this.$myScriptHelper.doSomethingCool(this.triggerAction, 'red', this.splashPath);
    },
  },
};
</script>

<style scoped>
</style>
