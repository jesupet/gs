<template>
  <div class="home">
    <section id="hero">
      <div class="container text-center">
        <p class="pre-title">seguimos evolucionando</p>
        <h1>Fuimos pioneros en sostenibilidad. <br>Hoy abrimos un <span class="h1-bold">nuevo capítulo.</span></h1>
        <div class="d-flex justify-content-center"><hr></div>
      </div>
      <div class="container">
        <div class="hero-video">
          <div v-if="!playing" class="hero-video__poster">
            <img
              class="hero-video__placeholder"
              :src="videoPlaceholder"
              alt=""
              width="1280"
              height="720"
            />
            <div class="hero-video__text">
              <p class="p-20 semi-bold white">Video Lanzamiento</p>
              <p class="p-20 light white">GS 2026</p>
            </div>
            <button
              type="button"
              class="hero-video__play"
              aria-label="Reproducir video"
              @click="playing = true"
            >
              <img :src="playImg" alt="" width="96" height="96" />
            </button>
          </div>
          <iframe
            v-else
            class="hero-video__iframe"
            :src="embedUrl"
            title="Video de YouTube"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </section>
    <div class="container">
      <hr>
    </div>
    <section id="servicios">
      <div class="container">
        <div class="row servicios-layout">
          <div class="col-12 col-lg-4 servicios-layout__title">
            <h2>Nuestros <span class="h2-bold">servicios</span></h2>
          </div>
          <div class="col-12 col-lg-8 servicios-layout__grid-wrap">
            <div class="servicios-grid">
              <div v-for="service in services" :key="service.name" class="service-card">
                <div>
                  <img src="@/assets/icons/flag.svg" alt="bandera" class="service-icon">
                  <h3>{{ service.name }}</h3>
                  <p class="p-16">{{ service.description }}</p>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import videoPlaceholder from '@/assets/img/placeholder_video.png'
import playImg from '@/assets/icons/play.png'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      playing: false,
      /** ID del video (parte de youtube.com/watch?v=...) */
      youtubeVideoId: 'M7lc1UVf-VE',
      videoPlaceholder,
      playImg,
    }
  },
  computed: {
    ...mapState(['services']),
    embedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeVideoId}?autoplay=1&rel=0`
    },
  },
}
</script>
