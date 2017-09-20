<template>
  <div>
    <h3>Shotgun</h3>
    <div class="row">
      <div class="col s12">
        <button class="btn waves-effect waves-light green" @click="pullTrigger()">Pull Trigger</button>
      </div>
      <br><br>
      <div class="col s12">
        <button class="btn waves-effect waves-light blue-grey" @click="destroyEvidence()">Destroy Evidence</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shotgun',
  data() {
    return {
      destroyEvidenceAcitonText: 'Shotgun Evidence Destroyed!',
      triggerActionText: '12 Gauge Shotshell Fired, BAM!',
      splashPath: '/static/images/shotgun.jpeg',
    };
  },
  methods: {
    destroyEvidence() {
      this.doAnotherCoolThing(this.destroyEvidenceAcitonText, 'Shotgun');
    },

    pullTrigger() {
      this.$myScriptHelper.doSomethingCool(this.triggerActionText, 'green', 'Shotgun', this.splashPath);
    },
  },
};
</script>

<style scoped>
</style>
