<template>
  <div>
    <h3>Pistol</h3>
    <div class="row">
      <div class="col s12">
        <button class="btn waves-effect waves-light red" @click="pullTrigger()">Pull Trigger</button>
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
  name: 'pistol',
  data() {
    return {
      destroyEvidenceAcitonText: 'Pistol Evidence Destroyed!',
      triggerActionText: 'Arabellum Fired, Yay!',
      splashPath: 'static/images/pistol.jpeg',
    };
  },
  methods: {
    destroyEvidence() {
      this.doAnotherCoolThing(this.destroyEvidenceAcitonText, 'Pistol');
    },

    pullTrigger() {
      this.$myScriptHelper.doSomethingCool(this.triggerActionText, 'red', 'Pistol', this.splashPath);
    },
  },
};
</script>

<style scoped>
</style>
