<template>
    <div class="footer-badges">
        <div class="badges">
            <div class="passing">
                <img src="https://cdn-ss.akinon.net/cms/2020/02/17/2d1641e7-02e1-4b23-a5fc-9f857cec2f0b.png"
                    class="badges-img" alt="">
                <div class="badges-title">KOLAY İADE</div>
                <div class="badges-text">Yurtiçi Kargo ile ücretsiz iade.</div>
            </div>
            <div class="passing">
                <img src="https://cdn-ss.akinon.net/cms/2020/02/17/51fdd119-4dc0-452b-93fe-5bd7e1a03d5f.png"
                    class="badges-img" alt="">
                <div class="badges-title">KARGO BİZDEN</div>
                <div class="badges-text">750 TL ve üzeri siparişlerde ücretsiz kargo.</div>
            </div>
            <div class="passing">
                <img src="https://cdn-ss.akinon.net/cms/2020/03/30/f666429a-292c-456f-8dc8-17f399e1d9a7.png"
                    class="badges-img" alt="">
                <div class="badges-title">TESLİMAT</div>
                <div class="badges-text">Siparişin 2-4 iş günü içerisinde kargoya verilecektir.</div>
            </div>
            <div class="passing">
                <img src="https://cdn-ss.akinon.net/cms/2021/07/08/e22828d7-7157-4d24-b4b1-efd1f795d20e.png"
                    class="badges-img" alt="">
                <div class="badges-title">GÜVENLİ ÖDEME</div>
                <div class="badges-text">SSL-Tabanlı 256-Bit kodlama ile güvenli alışveriş. </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .footer-badges {
    margin: 54px 0;

    text-align: center;
   
    
  }

  .badges {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .passing {
    flex: 1;
    margin: 10px;
   
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .badges-img {
    width: 50px;
    margin: 6px auto 12px;
    display: block;
  }

  .badges-title {
    font-size: 17px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    width: 150px;
    min-height: 46px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .badges-text {
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    padding: 8px 0;
  }
</style>
