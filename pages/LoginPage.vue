<template>
    <div>
        <Navbar />
        <loginVue />
        <Footer2Vue />
    </div>
</template> 
<script>
import Navbar from '../components/navbar.vue';
import Footer2Vue from '../components/Footer2.vue'
import loginVue from '../components/login.vue';
export default {
    name: "IndexPage",
    components: { Navbar, Footer2Vue, loginVue }
}
</script>