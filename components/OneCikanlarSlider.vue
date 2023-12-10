<template>
    <div>
      <h2 class="favori-modeller-baslik">Öne Çıkanlar</h2>
      <vue-horizontal-list :items="items" :options="options">
        <template v-slot:default="{ item }">
          <div>
            <div class="image-container">
              <img :src="item.image" />
            </div>
            <h5>{{ item.subtitle }}</h5>
            <a>{{ item.title }}</a>
            <p>{{ item.price }}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>
  </template>
  
  <script>
  import VueHorizontalList from 'vue-horizontal-list';
  import { ref } from 'vue';
  
  export default {
    name: 'ImageThree',
    components: {
      VueHorizontalList,
    },
    setup() {
      const items = ref([
        {
          subtitle: 'Skechers',
          title: 'Skechers Summits Erkek Siyah Spor Ayakkabı',
          price: '1.449 TL',
          image: 'https://cdn-ss.akinon.net/products/2021/11/17/356491/b65c7973-1020-4268-8160-05bfba31a2a3_size330x495.jpg',
        },
        {
          subtitle: 'adidas',
          title: 'adidas Ozweego Celox Unisex Gri Spor Ayakkabı',
          price: '1.449 TL',
          image: 'https://cdn-ss.akinon.net/products/2022/08/19/435667/095742a4-7954-4011-8f75-480f399dbb41_size330x495.jpg',
        },
       
      ]);
  
      const options = ref({
         visibleItems: 3, 
         scrollSpeed: 500
      });
  
      return {
        items,
        options,
      };
    },
  };
  </script>
  
  <style scoped>
  .favori-modeller-baslik {
    text-align: center;
    font-size: 34px;
  }
  
  a {
    font-size: 14px;
  }
  
  h5 {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    text-align: start;
  }
  
  p {
    margin-top: 4px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 500;
  }
  
  .vue-horizontal-list[data-v-8b923bbc] {
    margin-left: 370px;
    position: relative;
    width: 60%;
    height: 5%;
  }
  
  img {
    display: block;
  }
  
  .vhl-list>*[data-v-8b923bbc] {
    scroll-snap-align: start;
    flex-shrink: 0;
    max-width: 50%;
    max-height: 50%;
  }
  </style>
  