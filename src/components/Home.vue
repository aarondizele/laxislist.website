<template>
  <div>
    <section class="container-fluid text-white" v-if="!isFrench">
      <!-- <div class="container"> -->
        <!-- <div class="row">
          <div class="col-12">
            <div class="d-flex flex-row justify-content-end">
              <router-link to="/contact" class="_btn text-white" tag="a">Contact us</router-link>
            </div>
          </div>
        </div> -->
        <div class="row justify-content-center pt-4">
          <div class="d-flex flex-row align-items-center">
            <i class="icons fa fa-android px-4" aria-label="true"></i>
            <i class="icons fa fa-apple px-4" aria-label="true"></i>
          </div>
        </div>
        <div class="row pt-4 pb-5">
          <div class="col-12 col-md-8 offset-md-2 text-center pb-4">
            <h1>Get an Android &amp; iPhone app and a Website in your name.</h1>
          </div>
          <div class="col-12 col-md-10 offset-md-1 font-weight-light">
            <div class="text-justify font-18">
              Do you want to have your personal <strong>Android</strong> &amp; <strong>iPhone</strong> app and <strong>Website</strong> in your name as your own social network? Well, you will be able to post your photos, videos <i>(even Youtube)</i>, events and notes that can be <strong>liked</strong>, <strong>commented</strong> and <strong>shared</strong> by your followers as on Instagram.
            </div>
            <div class="text-justify font-18 pt-2" v-if="showmore">
              We build for <i>free</i>, if you are satisfied then you pay. Our <i>offer</i> includes website and mobile apps design, domain name, hosting and deployments on AppStore, Playstore and Web.
            </div>
            <div class="my-3 pointer d-flex flex-row align-items-center justify-content-center show" style="font-size: 14px !important" @click="showmore = !showmore"><strong>{{showmore ? 'Show less': 'Show more'}}</strong>
              <div><i class="fa pl-2" :class="{'fa-angle-down': !showmore, 'fa-angle-up': showmore}" aria-label="true" style="font-size: 19px;"></i></div>
            </div>
          </div>
          <div class="col-12 d-flex flex-row justify-content-center pt-2">
            <router-link tag="button" to="/get-started" class="btn _button text-dark pointer d-flex flex-row align-items-center">Book now</router-link>
          </div>
        </div>
      <!-- </div> -->
    </section>
    <section class="container-fluid text-white" v-else>
      <div class="row justify-content-center pt-4">
        <div class="d-flex flex-row align-items-center">
          <i class="icons fa fa-android px-4" aria-label="true"></i>
          <i class="icons fa fa-apple px-4" aria-label="true"></i>
        </div>
      </div>
      <div class="row pt-4 pb-5">
        <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center pb-4">
          <h1>Posséder une application Android &amp; iPhone et un site web à votre nom.</h1>
        </div>
        <div class="col-12 col-md-10 offset-md-1 font-weight-light">
          <div class="text-justify font-18">Voulez-vous avoir une application <strong>Android</strong>, <strong>iPhone</strong> et <strong>Site web</strong> personnel à votre nom comme votre propre réseau social? Bien, vous serez à mesure de publier vos photos, vidéos <i>(même Youtube)</i>, événements et notes qui peuvent être <strong>liker</strong>, <strong>commenter</strong> et <strong>partager</strong> par vos abonnés et amis comme sur Instagram.</div>
          <div class="text-justify font-18 pt-2" v-if="showmore">
          Nous concevons <i>gratuitement</i>, si vous êtes satisfé puis vous payez. Notre <i>offre</i> inclus la conception du <i>site internet</i> et <i>applications mobiles</i>, le nom de domaine, l'hébergement et les déploiements sur AppStore, Playstore et Web.
          </div>
          <div class="my-3 pointer d-flex flex-row align-items-center justify-content-center show" style="font-size: 14px !important" @click="showmore = !showmore"><strong>{{showmore ? 'Voir moins': 'Voir plus'}}</strong>
            <div><i class="fa pl-2" :class="{'fa-angle-down': !showmore, 'fa-angle-up': showmore}" aria-label="true" style="font-size: 19px;"></i></div>
          </div>
        </div>
        <div class="col-12 d-flex flex-row justify-content-center pt-2">
          <router-link tag="button" to="/fr/get-started" class="btn _button text-dark pointer d-flex flex-row align-items-center">Commander</router-link>
        </div>
      </div>
    <!-- </div> -->
  </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: () => ({
    showmore: false
  }),
  computed: {
      ...mapGetters(['isFrench'])
  },
  components: {
  }
}
</script>

<style scoped>
.show {
  transition: all .2s ease
}
.icons {
  font-size: 90px !important
}
._btn {
    padding: 4px 18px !important;
    border: 3px solid rgba(255, 255, 255, .5) !important;
    border-radius: 24px;
    font-weight: 500 !important
}
._button {
    padding: 8px 32px !important;
    background: white !important;
    border-radius: 36px;
    font-size: 26px !important;
    font-weight: 800 !important;
    transition: all .2s ease-in-out
}
._button:hover {
  background: rgba(255, 255, 255, .6) !important
}
a {
  text-decoration: none;
}
</style>
