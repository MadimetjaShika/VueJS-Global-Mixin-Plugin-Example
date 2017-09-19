<template>
  <div class="row">
    <div class="col s4">
      <pistol></pistol>
    </div>
    <div class="col s4">
    </div>
    <div class="col s4">
    </div>
  </div>
</template>

<script>
import Pistol from '@/components/Pistol/Pistol';

export default {
  name: 'hello',
  components: {
    Pistol,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
</style>
