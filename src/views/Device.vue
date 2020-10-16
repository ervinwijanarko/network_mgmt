<template>
  <div class="project"> 
    <h1 class="subheading grey--text">Daftar Device</h1>
    <v-container class="my-5">
      <Device></Device>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Device from '@/components/Device.vue'

export default {
  name: 'Device',
  components: {
    Device 
    
  }
}
</script>
