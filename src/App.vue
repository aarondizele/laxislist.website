<template>
  <div id="app" class="">
    <Header />
    <router-view class="main" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html
{
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.brand{
  letter-spacing: -1px;
}
h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0
}
#app {
  background: url(../static/feature-card-bg-pro.png) no-repeat;
  background-size: cover;
  min-height: 100vh !important;
  position: relative;
}
.font-18 {
  font-size: 18px !important
}
.main {
  padding: 15px 25px 70px !important;
}
.pointer {
  cursor: pointer;
}
.bg-twitter {
  background: #00ABEC!important
}
@media (max-width: 767px) {
  .main {
    padding: 15px 0px 70px !important;
  }
}
</style>
