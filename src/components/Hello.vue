<template>
  <div>
    <div class="row">
      <div class="col s12">
        <h4>{{ actionText }}</h4>
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
  </div>
</template>

<script>
import Pistol from '@/components/Pistol/Pistol';
import Rifle from '@/components/Rifle/Rifle';
import Shotgun from '@/components/Shotgun/Shotgun';

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
    };
  },
};
</script>

<style scoped>
</style>
