<template>
  <div class="container text-white mt-4">
      <div class="row mb-5">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div v-if="!formSubmitted">
              <h1 class="text-center mb-2">Veuillez passer votre commande.</h1>
              <p class="mb-5 text-center"><span class="h5">Site web, applications Android et iPhone pour seulement <strong>$350</strong> </span><br><br>
              <span class="font-weight-light">Nous concevons <i>gratuitement</i>, si vous êtes satisfé puis vous payez. Notre <i>offre</i> inclus la conception du <i>site web</i> et <i>applications mobiles</i>, le nom de domaine, l'hébergement et les déploiements sur AppStore, Playstore et Web.</span>
              </p>
              <form @submit.prevent="onForm">
                  <div class="form-group">
                      <input type="text" id="username" class="form-control" placeholder="Votre nom" v-model.trim="username" require>
                  </div>
                  <div class="form-group">
                      <input type="text" id="email" class="form-control" placeholder="Votre adresse email" v-model.trim="email" require>
                  </div>
                  <div class="form-group">
                      <input type="text" id="phone" class="form-control" placeholder="Votre téléphone (Facultatif)" v-model.trim="phone">
                  </div>
                  <div class="form-group">
                      <textarea name="" id="message" cols="4" rows="2" style="resize: none;" class="form-control" placeholder="Message (Facultatif)" v-model.trim="message"></textarea>
                  </div>
                  <button type="submit" class="mt-3 _button btn text-dark pointer d-flex flex-row align-items-center" :disabled="loading">
                    <i class="fa fa-circle-o-notch fa-pulse fa-3x fa-fw mr-2" aria-hidden="true" v-if="loading" style="font-size: 18px;"></i>
                    Continue
                  </button>
              </form>
            </div>
            <div v-else class="text-center">
              <h2 class="mb-4">Merci pour votre commande.</h2>
              <h4 class="font-weight-light">Nous vous contacterons le plus tôt possible.</h4>
              <router-link tag="button" to="/fr" class="_button mx-auto mt-5 btn pointer text-dark">Accueil</router-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { db } from '../main'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    username: '',
    email: '',
    phone: '',
    message: '',
    formSubmitted: false,
    loading: false
  }),
  computed: {
      ...mapGetters(['isFrench'])
  },
  watch: {
      isFrench (value) {
          if (value !== true) {
              return this.$router.push('/get-started')
          }
      }
  },
  methods: {
    async onForm () {
      try {
        if (!this.username.length || !this.email.length) return
        this.loading = true
        const data = {
            username: this.username,
            email: this.email,
            phone: this.phone,
            message: this.message
        }
        const result = await db.collection('message').add(data)
            .then(() => {
                this.username = ''
                this.email = ''
                this.phone = ''
                this.message = ''
                this.formSubmitted = true
                this.loading = false
            })
      } catch (error) {
          this.loading = false
          console.log(error);
      }
    }
  },
}
</script>

<style scoped>
._button {
    padding: 8px 26px !important;
    background: white !important;
    border-radius: 32px;
    font-size: 21px !important;
    font-weight: 600 !important;
    transition: all .2s ease-in-out
}
.h5 {
  font-weight: 400 !important
}
._button:hover {
  background: rgba(255, 255, 255, .6) !important
}
.form-control {
    border: 2px solid rgba(255, 255, 255, .1) !important;
    border-radius: 2px !important;
    outline: 0 !important;
    background: transparent !important;
    color: white !important
}
::-moz-placeholder {
    color: white
}
::placeholder {
    color: white
}
</style>
