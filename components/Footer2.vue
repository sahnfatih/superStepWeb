<template>
    <footer class="footer">
        <div class="subscribe">
            <div class="subscribe-form">
                <h5 class="subscribe-title"> ÜYE OL FIRSATLARI KAÇIRMA!</h5>
                <p> SuperStep haberlerinden ve etkinliklerinden haberdar olmak için üye ol.</p>
                <div class="input-wrapper">
                    <input type="email" class="subscribe-input">
                    <button type="button" class="subscribe-button" style="color:aliceblue"> ÜYE OL</button>
                </div>
            </div>
        </div>
        <div class="footer-inner" style="background-color:black">
            <div class="container">
                <div class="footer-inner-item">
                    <div class="item-left">
                        <div class="footer-menu" style="margin: 20px;">
                            <div class="footer-menu-title">MÜŞTERİ HİZMETLERİ</div>
                            <a href="" class="footer-menu-item"> Bize Ulaşın </a>
                            <a href="" class="footer-menu-item"> Sıkça Sorulan Sorular</a>
                            <a href="" class="footer-menu-item">İade & İptal</a>
                            <a href="" class="footer-menu-item">Kullanım Şartları</a>
                            <a href="" class="footer-menu-item">Gizlilik ve Güvenlik</a>
                            <a href="" class="footer-menu-item">Site Haritası</a>
                            <a href="" class="footer-menu-item">Kampanyalar</a>
                            <a href="" class="footer-menu-item"
                                style="border:1px solid #fff; max-width: 70%; text-align: center; ">Sipariş Takibi</a>
                        </div>

                        <div class="footer-menu">
                            <div class="footer-menu-title">MARKALAR</div>
                            <a href="" class="footer-menu-item"> Converse</a>
                            <a href="" class="footer-menu-item"> Adidas</a>
                            <a href="" class="footer-menu-item">Nike</a>
                            <a href="" class="footer-menu-item">New Balance</a>
                            <a href="" class="footer-menu-item">Lacoste</a>
                            <a href="" class="footer-menu-item">Skechers</a>
                            <a href="" class="footer-menu-item">Puma</a>
                            <a href="" class="footer-menu-item"> Tüm Markalar</a>
                        </div>

                        <div class="footer-menu">
                            <div class="footer-menu-title">KURUMSAL</div>
                            <a href="" class="footer-menu-item"> Hakkımızda </a>
                            <a href="" class="footer-menu-item"> Mağazalar</a>
                            <a href="" class="footer-menu-item"> Bilgi Toplum Hizmetleri</a>
                            <div class="etbis">
                                <a href="">
                                    <img src="data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAIIAAACWCAYAAAASRFBwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAEWLSURBVHhe7Z0HmF5F9cYl1FASioB0EARBQOkgXVAQQZAW6S0oCiJNegcpgoICoQkRQlM6oRmQnrbZmt0USCC9915h/ud3v++9e76785XdhGD5v8/zEnbavd+9Z2bOOXNm7tcMYWnwr3/9a8ji8ccfj5aNsampKanz/vvvt8jr0KFDmDRpUpJfDrfcckuL+vvss08+N4Rf/vKXSdoaa6wRJkyYkKQ988wzadnXXnstSfO47bbb0vz6+vokrWfPnmnavffem6QVw+GHH56U22yzzcLChQvzqc343ve+l+Tvscce+ZRmzJkzJ2y44YZJ/rHHHptPDeGnP/1pev0l5PPGBLHMVnNJBWHEiBFJnX79+kXzFy1alOSXw6233tqi7s4775zPDeGss85K08eNG5eklROEv/zlL2n+kgjCFltskU8pxFZbbZXkb7/99vmUQmy88cZJ/jIRhC233DKccsopreIPf/jDtMG2CMKOO+6YttWlS5ek/J///OeCa8AzzjgjPPLII0l+Od5www0t6v/mN79J86+44ook7eyzzw4zZsxI7jMmCLNmzQrdunVL6hx//PFp/pIIwte//vXQtWvX9F7EX//618k9nXfeeS3yeK5rrbVWUj8mCKuttlo46aSTCn5vOZ544olh1VVX1f0XCsIvfvGL/CUqR3V1tRprkyDQewWGTdJ22223fEohVlhhhRb1Y7z88svzNZpRW1ub5sfuMyYIQ4cOTdM8GxoakvxevXqlaZUKQjEOGTIkKdfY2BjNF2OCsPnmm+dTWodNNtlE7RYKwmmnnZYvUjneeecdNRZ9wE899VSaH+PNN9+cLxnCDjvskKQdeOCB+ZRm0HPpTdn6MV533XX5Ws3wgvDAAw/kU5tBz1f+W2+9laSNHz8+TfP8+OOPk3xGBqXFfrvHUUcdVdBGloMHD07K+TZjjAnCpptuGhYsWJBPrQzz5s0LG220kdotLgiXXXZZOOSQQ4py5MiRSbmYIMyePTu5YcpdcMEF4c0330zIPK2yItOR2lx99dWTNIZBpb3++utJm8UE4fe//33S9t/+9rfQrl27JO2b3/xmWl/cfffd0zoxQUBX0H2ec845SZ3jjjsuvPHGG2m6ePLJJyf5KHZqc9ttty24XpbrrrtuUm699dZLRpxibfIOlHbkkUem7YvlBOH5559vcW3PF198MSlXsSD4HxmjNPyYIEybNi0dxk844YQkDfz4xz9Oy1bKu+++O6k7ffr0ZC7M5qNYAoRv+eWXb5Ef46OPPprUKQYsDMohmDFoCmsL0f5j+Pa3v53kozMJl1xySYv6RxxxRD43LggxRdnz9ttvT8pVLAgHHXRQWjnGQYMGJeVigsBLW2eddZI0FBPBK5bimmuumWjSxfj0008ndVHcGFFIU++CjASfffZZYnJWKghMR9QZPnx4WLx4cdK+B4op19lvv/3SfH4TdeDBBx9ccI+eCInuA8HN5u+5557hk08+SdsSt9tuu6SONx9RcElbbrnlkvmc+iiVQkwQ/vSnPyVpxaiO9W8nCFdddVViFhbj559/nq8d0rTHHnssrc9DZ/SpVJGEqsMUJD+CBy9f1xL+8Ic/pNepqalJ87Pkt3/jG99IrsMwns3/9NNPQ/v27dO2RF42dWKCgHaPaU19L7j/9oLA1KA0lCTBz9NiTLErB8yvbDttIQ84NiLEgEmremj2pSDnDyZnFqNGjUpfeoxeEBiZlC5/h8e/vSBwEV7w7373u3RoBw899FCS1rlz57TONddck88NydxNz/N1YsACoB2I6aS2WsuVV145uU+uWY6HHXZYWk9+BA8sDcox7eCxpBzKZhZMRyuuuGLaVpZeEF566aXkN1555ZWpv8NjmQgCJpzSYywlCOUwefLktI4XBA2pmJGVAuVJbS0rxgTh1FNPbVHOa/gCglBKl2HUrBQxQfjjH//Yok3Pu+66KylXsSCgKCk9xoEDBybl2iII2OGq4wVhm222SdL22muvfEp5YBKprWXFurq6/NWbofULz2OOOSaf24xhw4a1KOe5yy675EuWR0wQ7rjjjhZteiIooGJB4GVhmhUjDYG2CML8+fMTjyTt4A7eddddE77yyitJmpwrgKGWvP333z/RPbKQIPCj+vbtW3CPUD58T1zM2XKee++9d4s6PBvlswiUBcqcbwM++OCD6W/74IMPknK8MP32888/P23/ySefTNKeffbZtA7ezlKICQJOMH8PWUo5LikInW3ubi369OmjxioWBI8bb7wxrY9GnQU+ceXHXoAE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" style="width:100px"
                                        height="120px" alt="">
                                </a>
                            </div>
                        </div>

                        <div class="footer-menu">
                            <div class="footer-menu-title">KOLEKSİYONLAR</div>
                            <a href="" class="footer-menu-item"> Nike Blazer</a>
                            <a href="" class="footer-menu-item"> adidas Stan Smith</a>
                            <a href="" class="footer-menu-item">Puma Mayze</a>
                            <a href="" class="footer-menu-item">adidas Superstar</a>
                            <a href="" class="footer-menu-item">Vans Old Skool</a>
                            <a href="" class="footer-menu-item">Skechers D'Lites</a>
                            <a href="" class="footer-menu-item">Converse Chuck 70</a>
                            <a href="" class="footer-menu-item">New Balance 5740</a>
                        </div>
                        <div class="footer-menu">
                            <div class="footer-menu-title">GRUP MARKALARI</div>
                            <a href="" class="footer-menu-item">House Of SuperStep</a>
                            <a href="" class="footer-menu-item"> Converse</a>
                            <a href="" class="footer-menu-item">FashFed</a>
                            <a href="" class="footer-menu-item">The Kooples</a>
                            <a href="" class="footer-menu-item">Lacoste</a>
                            <a href="" class="footer-menu-item">Gant</a>
                            <a href="" class="footer-menu-item">Nautica</a>
                            <a href="" class="footer-menu-item">Occasion</a>
                        </div>
                    </div>
                </div>

                <!-- <div class="menu-bottom">
              <div class="footer-inner-country">
                 Alışveriş yaptığınız ülke: 
                 <img src="https://cdn-ss.akinon.net/static_omnishop/super501/assets/img/turkey-flag.png" style="display: inline-block;" height="11px" width="16px" alt="">
                 <a href="" style="display: inline-block; position: relative;" > Değiştir</a>

              </div>
         </div>   -->

                <div class="item-right">
                    <div class="app-download">
                        <div style="margin-bottom: 5px; font-size: 14px; font-weight: 300; "> UYGULAMANIZI İNDİRİN
                        </div>
                        <div class="app-download-box">
                            <a href="" style="margin-right: 20px; display: block;">
                                <img src="https://cdn-ss.akinon.net/cms/2021/04/06/8ab7de4c-18ab-4c1b-ad32-8a3753fe01b4.png"
                                    class="app-download-img" alt="UYGULAMANIZI İNDİRİN">
                            </a>
                            <a href="" style="margin-right: 20px;display: block; ">
                                <img src="https://cdn-ss.akinon.net/cms/2021/04/06/6e9d2638-e055-47ba-b28a-6d4bd21d2de0.png"
                                    class="app-download-img" alt="UYGULAMANIZI İNDİRİN">
                            </a>
                        </div>
                    </div>
                    <div class="social-box">
                        <div style="margin-bottom: 5px; font-size: 14px; font-weight: 300; "> BİZİ TAKİP EDİN </div>
                        <div style="display:flex ;">
                            <a href="" class="social-box-target" style="color: inherit; ">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="" class="social-box-target" style="color: inherit;">
                                <i class="fa-brands fa-twitter"></i>

                            </a>
                            <a href="" class="social-box-target" style="color: inherit;">
                                <i class="fa-brands fa-facebook"></i>

                            </a>
                        </div>
                    </div>
                    <div class="musteri-hizmetleri">
                        MÜŞTERİ HİZMETLERİ
                        <br>
                        444 3736
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
}

ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    text-decoration: none;
    color: rgb(255, 255, 255);
}

h1, h2, h4, h5, h6, p {
    margin: 0;
}

.container {
    max-width: 1400px;
    width: 100%;
    margin: 0;
}

/* header */
.global-notification {
    background-color: #000;
    padding: 3px;
    height: 34px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    padding-top: 5px;
}

.header-wrapper {
    display: flex;
    align-items: center;
}

.header-left {
    float: left;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 21px;
    vertical-align: baseline;
    margin: 0;
    height: 40px;
    width: 455px;
}

.header-left .logo {
    margin: 0;
    padding: 0;
    border: 0;
}

.header-row {
    height: 90px;
    align-items: center;
}

.header-center-menu {
    width: 931px;
}

.header-center {
    width: 411px;
    height: 50px;
}

.header-center .navigation .menu-list {
    padding-top: 35px;
    text-transform: uppercase;
    column-gap: 8px;
}

/* header center */
.menu-list-item {
    text-align: center;
    float: left;
}

.menu-list .menu-list-item .menu-link {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: #000;
    position: relative;
    font-weight: 400;
}

li {
    display: list-item;
    padding-left: 15px;
}

ul {
    list-style: none;
}

/* SezonunTrendleri */
.imgcontainer {
    width: 16.66666667%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0;
    padding: 0;
    border: 0;
    float: left;
    padding-top: 20px;
    padding-bottom: 40px;
}

.img::after {
    content: "";
    clear: both;
    display: table;
}

img {
    display: block;
    max-width: 100%;
}

h3 {
    padding-top: 15px;
    font-size: 34px;
    text-align: center;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

span {
    font: inherit;
    vertical-align: auto;
    font-family: serif;
    font-size: 19px;
    text-align: center;
    text-decoration: none;
   
    margin: 5px 42px;
    padding-left: 35px;
}

a {
    color: #000;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Koleksiyonlar */
* {
    box-sizing: border-box;
}

.collection {
    width: 16.66666667%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    margin: auto;
    padding: 0;
    border: 0;
    float: left;
}

.container-fluid .home-quadr {
    content: "";
    clear: both;
    display: flex;
    margin: 35px 30px;
    box-sizing: border-box;
    column-gap: 20px;
}

.footer-badges {
    margin: 54px 0;
    width: 1160px;
    height: 169px;
}

.badges {
    margin-left: -5px;
    margin-right: -55px;
    display: flex;
    width: 1170px;
    height: 169px;
    padding-left: 590px;
    padding-bottom: 220px;
}

.passing {
    width: 25%;
    width: 292px;
    height: 169px;
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

.home-quadr h4 {
    font-size: 24px;
    text-align: center;
    padding: 7px 0 2px 0;
}

.home-quadr p {
    font-size: 18px;
    height: 42px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.home-quadr .medium-button:hover {
    text-decoration: none;
    background: #000;
    color: #fff;
    transition: .3s ease all;
}

.home-quadr .medium-button {
    border: 1px solid #000;
    padding: 8px 16px;
    display: table;
    margin: 7px auto;
    min-width: 180px;
    text-align: center;
    transition: .3s ease all;
    position: relative;
}

.right-icon {
    transform: rotate(90deg);
    display: block;
    float: right;
    font-size: 14px;
    color: #000;
    font-weight: bold;
    margin-top: 3px;
    margin-left: 15px;
    transition: .3s ease all;
    position: absolute;
    right: 7px;
    top: 50%;
    margin-top: -7px;
    font-family: 'icomoon' !important;
}

.slider-home {
    padding-bottom: 50px;
}

/* footer */
.footer {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
}

.subscribe {
    background-color: #636363;
    padding: 35px 0;
    text-align: center;
    color: #FFFFFF;
    margin: 0;
    border: 0;
}

.subscribe-form {
    max-width: 450px;
    margin: 0 auto;
    padding: 0;
    border: 0;
}

.input-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: auto;
}

.subscribe-title {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 5px;
    margin: 0;
    padding: 0;
    border: 0;
}

.subscribe p {
    font-size: 12px;
    font-weight: 200;
    margin-bottom: 10px;
}

.input-wrapper .subscribe-input {
    flex: 2 1;
    line-height: 35px;
    background-color: #FFFFFF;
    border: solid 1px #e5e5e5;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    color: black;
}

.input-wrapper .subscribe-button {
    flex: 1 1;
    line-height: 36px;
    background-color: #000;
    display: inline-block;
    vertical-align: middle;
    font-size: 15px;
    letter-spacing: 2px;
    font-weight: 200;
    text-align: center;
    margin-left: 1px;
    border: 0;
}

/* Footer Inner */
.footer-inner {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
}

.footer-inner-item {
    display: flex;
    padding-top: 22px;
    padding-bottom: 24px;
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
}

.item-left {
    margin-left: -5px;
    margin-right: -5px;
    margin: 0;
    padding: 0;
    border: 0;
}

.footer-menu {
    width: 151px;
    height: 201px;
    display: inline-table;
}

.footer-menu-title {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;
}

a:hover {
    text-decoration: underline;
}

.footer-menu-item {
    display: block;
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    color: inherit;
    text-decoration: none;
}

.menu-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 859px;
    height: 95px;
}

.footer-inner-country {
    padding-top: 32px;
    padding-bottom: 24px;
}

.item-right {
    padding-top: 52px;
    padding-bottom: 24px;
    width: 25%;
}

.app-download {
    display: block;
    margin: 0 0 45px 20px;
}

.app-download-box {
    display: flex;
}

.app-download-img {
    max-width: 100%;
    height: 37px;
    display: block;
}

.social-box {
    display: block;
    margin: 0 0 30px 20px;
}

.musteri-hizmetleri {
    font-size: 18px;
    color: #ffffff;
    margin: 45px 0 0 20px;
}

.social-box-target {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    transition: all .2s;
    text-decoration: none !important;
}

.social-box-target i {
    font-size: 1.538em;
}

.icon-instagram:before {
    content: "\E906";
}

</style>