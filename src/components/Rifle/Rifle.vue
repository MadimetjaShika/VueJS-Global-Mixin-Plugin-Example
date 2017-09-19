<template>
  <div>
    <h3>Rifle</h3>
    <button class="btn waves-effect waves-light blue" @click="pullTrigger()">Pull Trigger</button>
  </div>
</template>

<script>
export default {
  name: 'rifle',
  data() {
    return {
      triggerAction: 'Long Rifle Fired, Whopdie Doo!',
      splashPath: '/static/images/rifle.jpeg',
    };
  },
  methods: {
    pullTrigger() {
      this.$myScriptHelper.doSomethingCool(this.triggerAction, 'blue', this.splashPath);
    },
  },
};
</script>

<style scoped>
</style>
