<template>
  <div>
      <Navbar />
      <SezonunTrendleriVue />
      <ContainerVue />
      <KoleksiyonlarVue />
      <FavoriModellerSliderVue />
      <Container2Vue />
      <Container3Vue />
      <Container4Vue />
      <GiyimKoleksiyonuSliderVue />
      <FooterVue />
      <Footer2Vue />
      
  </div>
</template> 
<script>
import Navbar from '../components/navbar.vue';
import SezonunTrendleriVue from '../components/SezonunTrendleri.vue';
import ContainerVue from '../components/Container.vue';
import KoleksiyonlarVue from '../components/Koleksiyonlar.vue'
import Container2Vue from '../components/Container2.vue';
import FooterVue from '../components/Footer.vue'
import Container3Vue from '../components/Container3.vue';
import Footer2Vue from '../components/Footer2.vue'
import FavoriModellerSliderVue from '../components/FavoriModellerSlider.vue';
import Container4Vue from '../components/Container4.vue'
import GiyimKoleksiyonuSliderVue from '../components/GiyimKoleksiyonuSlider.vue';
export default {
  name: "IndexPage",
  components: { Navbar, SezonunTrendleriVue, ContainerVue, KoleksiyonlarVue, Container2Vue, FooterVue, Container3Vue, Footer2Vue, FavoriModellerSliderVue, Container4Vue, GiyimKoleksiyonuSliderVue }
}
</script>