<template>
  <div class="main-wrap">
    <Header/>
    <Carousel/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
