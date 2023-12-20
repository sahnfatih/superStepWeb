<template>
    <div>
        <Navbar />
        <SliderVue />
        <SezonunTrendleriVue />
        <ContainerVue />
        <KoleksiyonlarVue />
        <FavoriModellerSliderVue />
        <Container2Vue />
        <OneCikanlarSliderVue />
        <Container3Vue />
        <Container4Vue />
        <GiyimKoleksiyonuSliderVue />
        <FooterVue />
        <Footer2Vue />
        <loginVue />
    </div>
</template> 
<script>
import SezonunTrendleriVue from '../components/SezonunTrendleri.vue';
import ContainerVue from '../components/Container.vue';
import KoleksiyonlarVue from '../components/Koleksiyonlar.vue'
import Container2Vue from '../components/Container2.vue';
import FooterVue from '../components/Footer.vue'
import SliderVue from '../components/Slider.vue';
import Container3Vue from '../components/Container3.vue';
import Footer2Vue from '../components/Footer2.vue'
import FavoriModellerSliderVue from '../components/FavoriModellerSlider.vue';
import OneCikanlarSliderVue from '../components/OneCikanlarSlider.vue';
import Container4Vue from '../components/Container4.vue'
import GiyimKoleksiyonuSliderVue from '../components/GiyimKoleksiyonuSlider.vue';
export default {
    name: "IndexPage",
    components: { Navbar, SezonunTrendleriVue, ContainerVue, KoleksiyonlarVue, Container2Vue, FooterVue, SliderVue, Container3Vue, Footer2Vue, FavoriModellerSliderVue, OneCikanlarSliderVue, Container4Vue, GiyimKoleksiyonuSliderVue, loginVue }
}
</script>