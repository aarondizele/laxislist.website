<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark" v-if="!isFrench">
            <router-link tag="div" class="navbar-brand" to="/">
              <div class="d-flex flex-row align-items-center pointer">
                <img src="../assets/myLaxis.png" alt="" class="_image">
                <h3 class="brand pl-3 d-none d-sm-block"><strong>LaxisList.</strong></h3>
              </div>
            </router-link>
            <ul class="navbar-nav d-flex flex-row align-items-center ml-auto">
                <li class="nav-item pr-4">
                    <a class="nav-link pointer text-white d-flex flex-row align-items-center" @click="onFrench"><i class="em em-flag-cp mr-2"></i>FR</a>
                </li>
                <li class="nav-item active">
                    <router-link tag="a" class="nav-link _btn pointer" activeClass="active" to="/get-started">Book now</router-link>
                </li>
            </ul>
        </nav>
        <nav class="navbar navbar-expand-sm navbar-dark" v-else>
            <router-link tag="div" class="navbar-brand" to="/">
              <div class="d-flex flex-row align-items-center pointer">
                <img src="../assets/myLaxis.png" alt="" class="_image">
                <h3 class="brand pl-3 d-none d-sm-block"><strong>LaxisList.</strong></h3>
              </div>
            </router-link>
            <ul class="navbar-nav d-flex flex-row align-items-center ml-auto">
                <li class="nav-item pr-4">
                    <a class="nav-link pointer text-white d-flex flex-row align-items-center" @click="onEnglish"><i class="em em-gb mr-2"></i>EN</a>
                </li>
                <li class="nav-item active">
                    <router-link tag="a" class="nav-link _btn pointer" activeClass="active" to="/fr/get-started">Commander</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
      title: 'TheLaxis'
  }),
  computed: {
      ...mapGetters(['isFrench'])
  },
  methods: {
      onFrench () {
          this.$store.dispatch('setFrench', true)
      },
      onEnglish () {
          this.$store.dispatch('setFrench', false)
      }
  }
}
</script>


<style scoped>
h3 {
  margin: 0;
  padding: 0;
}
.navbar-brand {
    font-weight: 500 !important;
}
._btn {
    padding: 4px 18px !important;
    border: 3px solid #FFF !important;
    border-radius: 24px;
    font-weight: 500 !important
}
.navbar {
    border-bottom: .5px solid rgba(255, 255, 255, .5) !important;
    padding: 15px 25px !important;
}
._image {
    width: 40px;
}
@media (max-width: 767px) {
    ._image {
        width: 40px;
    }
    /*.brand{
      display: none;
    }*/
}
</style>
