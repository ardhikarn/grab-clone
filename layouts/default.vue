<template>
  <v-app>
    <transition name="fade">
      <div
        id="main-wrap"
        :class="{
          'page-fadeUp-transition-enter': !show,
          'page-fadeUp-transition-enter-active': show && play,
          'page-fadeUp-transition-exit': !play,
          'transition-enter-done': show,
        }"
      >
        <v-main>
          <nuxt />
        </v-main>
      </div>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  // loading: false,
  data() {
    return {
      show: false,
      play: false,
    }
  },
  mounted() {
    // Preloader and Progress bar setup
    this.show = true
    this.play = true
    this.$nextTick(() => {
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        this.play = false
      }, 3000)
      this.$nuxt.$loading.start()
    })
    const preloader = document.getElementById('preloader')
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove()
      }, 3000)
    }
  },
}
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

/* Handle */
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
