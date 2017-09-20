<template>
  <div>
    <h3>Rifle</h3>
    <div class="row">
      <div class="col s12">
        <button class="btn waves-effect waves-light blue" @click="pullTrigger()">Pull Trigger</button>
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
  name: 'rifle',
  data() {
    return {
      destroyEvidenceAcitonText: 'Rifle Evidence Destroyed!',
      triggerActionText: 'Long Rifle Fired, Whopdie Doo!',
      splashPath: 'static/images/rifle.jpeg',
    };
  },
  methods: {
    destroyEvidence() {
      this.doAnotherCoolThing(this.destroyEvidenceAcitonText, 'Rifle');
    },

    pullTrigger() {
      this.$myScriptHelper.doSomethingCool(this.triggerActionText, 'blue', 'Rifle', this.splashPath);
    },
  },
};
</script>

<style scoped>
</style>
