<template>
  <NavBar />
  <router-view/>
  <FooterComp />
</template>

<script>
import NavBar from '@/layout/NavBar.vue';
import FooterComp from '@/layout/FooterComp.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp
  }
}
</script>