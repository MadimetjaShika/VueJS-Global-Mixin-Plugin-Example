<template>
  <div>
    <h3>Shotgun</h3>
    <button class="btn waves-effect waves-light green" @click="pullTrigger()">Pull Trigger</button>
  </div>
</template>

<script>
export default {
  name: 'shotgun',
  data() {
    return {
      triggerAction: '12 Gauge Shotshell Fired, BAM!',
      splashPath: '/static/images/shotgun.jpeg',
    };
  },
  methods: {
    pullTrigger() {
      this.$myScriptHelper.doSomethingCool(this.triggerAction, 'green', this.splashPath);
    },
  },
};
</script>

<style scoped>
</style>
