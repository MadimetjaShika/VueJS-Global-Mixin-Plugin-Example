<template>
  <div>
    <div class="row">
      <div class="col s12">
        <h5>{{ actionText }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m4">
        <pistol></pistol>
      </div>
      <div class="col s12 m4">
        <rifle></rifle>
      </div>
      <div class="col s12 m4">
        <shotgun></shotgun>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <h6 v-if="evidence.length === 0">{{ evidenceText }}</h6>
        <div v-else v-for="(item,key) in evidence" :key="key" class="chip">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Pistol from '@/components/Pistol/Pistol';
import Rifle from '@/components/Rifle/Rifle';
import Shotgun from '@/components/Shotgun/Shotgun';
import eventBus from '@/helpers/event-bus';

export default {
  name: 'hello',
  components: {
    Pistol,
    Rifle,
    Shotgun,
  },
  data() {
    return {
      actionText: 'Pull any one of the triggers to shoot...',
      evidenceText: 'You have not yet fired any shots...',
      evidence: [],
    };
  },
  mounted() {
    eventBus.bus.$on('populateEvidence', (text, component) => {
      this.evidenceText = 'Nothing to see here :)';
      this.evidence.push({
        gunType: component,
        text,
      });
    });

    eventBus.bus.$on('destroyEvidence', (component) => {
      // eslint-disable-next-line
      const tempArr = this.evidence.filter((a) => { return a.gunType !== component; });
      this.evidence = tempArr;
    });
  },
};
</script>

<style scoped>
</style>
