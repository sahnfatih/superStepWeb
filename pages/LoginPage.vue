<template>
    <div>
        <NavBar/>
        <loginVue />
        <Footer2Vue />
    </div>
</template> 
<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';
import Login from '~/components/Login.vue';
export default {
    name: "IndexPage",
    components: { NavBar, Footer2Vue, Login }
}
</script>