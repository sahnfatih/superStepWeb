<template>
    <div>
      <h2 class="favori-modeller-baslik">Favori Modeller</h2>
      <div class="horizontal-list">
        <div v-for="(item, index) in items" :key="index" class="list-item">
          <div class="image-container">
            <img :src="item.image" />
          </div>
          <h5>{{ item.subtitle }}</h5>
          <a>{{ item.title }}</a>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageThree",
    data() {
      return {
        items: [
            {
                    subtitle: "Vans",
                    title: "Vans Old Skool Erkek Siyah Sneaker",
                    price:
                        "1.449 TL",
                    image: "https://cdn-ss.akinon.net/products/2021/02/27/321454/7efd4be2-873e-405f-af22-695b35a0c6be_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "The North Face",
                    title: "The North Face Nuptse Kadın Pembe Mont",
                    price:
                        "3.449 TL",
                    image: "https://cdn-ss.akinon.net/products/2022/10/25/501233/d26cade8-f97a-42fd-9710-4d5372c876fa_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Blazer Low'77 Premium Erkek Krem Sneaker",
                    price:
                        "2.459 TL",
                    image: "https://cdn-ss.akinon.net/products/2022/11/28/560637/d801bf6b-c150-448d-9997-25d72158e6e1_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "Converse",
                    title: "Converse Standart Fit Weares Unisex Siyah Pantalon",
                    price:
                        "1.049 TL",
                    image: "https://cdn-ss.akinon.net/products/2022/11/16/426293/c1adc423-cd6d-4ffb-97c3-2cb47a33d371_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Sportswear Repeat Fermuarlı Erkek Siyah Eşofman Üstü",
                    price:
                        "1.649 TL",
                    image: "https://cdn-ss.akinon.net/products/2022/11/28/560729/a4c36edf-7874-4e35-b59f-edff9830e706_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "Converse",
                    title: "Converse Run Star Legacy Cx Unisex Sarı Sneaker",
                    price:
                        "1.849 TL",
                    image: "https://cdn-ss.akinon.net/products/2022/08/01/426739/8af8f447-5534-48b6-bed5-9970f1f2ff0b_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "Lacoste",
                    title: "Lacoste L002 Kadın Beyaz Sneaker",
                    price:
                        "1.149 TL",
                    image: "https://cdn-ss.akinon.net/products/2022/10/25/473001/7bb4d20a-d237-4401-90ca-31275c36e258_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "Skechers",
                    title: "Skechers Capsule Coll Erkek Siyah Hoodie",
                    price:
                        "1.449 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/11/29/549964/1585d898-6fa0-43d1-adc9-9fef043991af_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Essensials Pearlcream Kadın Bordo Ceket",
                    price:
                        "2.449 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/11/28/560638/cce018b6-5b87-4909-8b29-5e8d6449cff2_size600x600_quality100_cropCenter.jpg",
                },
                {
                    subtitle: "adidas",
                    title: "adidas Kadın Kırmızı Sweatshirt",
                    price:
                        "1.579 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/08/19/436267/ef1556ea-5147-4c14-a3e5-1c0d0ad91f35_size600x600_quality100_cropCenter.jpg",
                }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .favori-modeller-baslik {
    text-align: center;
    font-size: 34px;
  }
  
  .horizontal-list {
    display: flex;
    overflow-x: auto;
    margin-left: 370px; 
  }
  
  .list-item {
    flex: 0 0 auto;
    margin-right: 16px; 
  }
  
  img {
    display: block;
    max-width: 100%;
  }
  
  h5 {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    text-align: start;
  }
  
  a {
    font-size: 14px;
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
  </style>
  