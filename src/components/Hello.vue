<template>
  <div class="row">
    <div class="col s4">
      <pistol></pistol>
    </div>
    <div class="col s4">
      <rifle></rifle>
    </div>
    <div class="col s4">
      <shotgun></shotgun>
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

    };
  },
};
</script>

<style scoped>
</style>
