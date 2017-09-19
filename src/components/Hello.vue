<template>
  <div class="row">
    <div class="col s4">
      <pistol></pistol>
    </div>
    <div class="col s4">
      <rifle></rifle>
    </div>
    <div class="col s4">
    </div>
  </div>
</template>

<script>
import Pistol from '@/components/Pistol/Pistol';
import Rifle from '@/components/Rifle/Rifle';

export default {
  name: 'hello',
  components: {
    Pistol,
    Rifle,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
</style>
