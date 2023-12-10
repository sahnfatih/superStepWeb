<template>
    <div style="padding-top: 50px;">
      <h2 class="favori-modeller-baslik">Giyim Koleksiyonu</h2>
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
                    subtitle: "Nike",
                    title: "Nike Air Kadın Sarı Eşofman Altı",
                    price:
                        "549 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/06/09/413676/2713e1e4-6c14-4980-ae90-48f757bf2768_size330x495.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Siyah Kadın Mont",
                    price:
                        "2.449 TL",
                    image: "https://akn-ss.b-cdn.net/products/2021/08/23/348041/95d6d4b2-3d07-4344-b5a8-e4f85a492e3a_size330x495.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Siyah Erkek Eşofman Altı",
                    price:
                        "1.999 TL",
                    image: "https://akn-ss.b-cdn.net/products/2021/03/19/263274/30fb613b-a7a9-4c0d-8138-4b77cc4834cd_size330x495.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Siyah Kadın Eşofman Altı",
                    price:
                        "449 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/01/20/300562/413efdda-dc5f-4355-aad8-bf31e67816ff_size330x495.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Sarı Kadın T-shirt",
                    price:
                        "376 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/06/09/413655/4470e88c-24fb-4404-bffc-caf338b8c185_size330x495.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Sportswear Erkek Gri T-shirt",
                    price:
                        "379 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/06/28/420226/31e35f20-fcbe-4794-93c0-cf4ad67d2726_size330x495.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Siyah Kadın Hoodie",
                    price:
                        "1.449 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/11/09/542580/8d2477c2-9db1-41e0-9b9b-73f0f0e7aca1_size330x495.jpg",
                },
                {
                    subtitle: "adidas",
                    title: "adidas Kadın Kırmızı Eşofman Altı",
                    price:
                        "1.749 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/08/19/436507/62380768-30e8-4719-9aad-c87c35a3c3ab_size330x495.jpg",
                },
                {
                    subtitle: "Nike",
                    title: "Nike Blazer Low Platform Kadın Beyaz Spor Ayakkabı",
                    price:
                        "1.449 TL",
                    image: "https://cdn-ss.akinon.net/products/2022/11/03/384116/22b4136f-bd54-4df2-b4e0-e5a2dd89b8e8_size330x495.jpg",
                },
                {
                    subtitle: "Vans",
                    title: "Vans Old Skool Platform Siyah Kadın Sneaker",
                    price:
                        "1.619 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/08/12/437170/a903624f-cb0e-4901-ba04-60dfe4784e85_size330x495.jpg",
                },
                {
                    subtitle: "Skechers",
                    title: "Skechers Summits Erkek Siyah Spor Ayakkabı",
                    price:
                        "1.049 TL",
                    image: "https://akn-ss.b-cdn.net/products/2022/01/20/384361/4cb84b76-24f2-4929-a7a7-41559d87503f_size330x495.jpg",
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
  