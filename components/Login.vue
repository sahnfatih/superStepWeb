<template>
    <div class="auth auth-register">
        <div>
            <div class="container">
                <div class="row">
                    <div class="auth-tabs visible-xs">
                        <span class="auth-tab-item js-auth-tab active" data-class=".js-login-content">Üye Girişi</span>
                        <span class="auth-tab-item js-auth-tab" data-class=".js-signup-content">Üye Ol</span>
                    </div>
                    <div class="auth-contents">
                        <div class="col-sm-6 auth-tab-content js-auth-content js-login-content active">
                            <div class="login-container">
                                <div class="form-container">
                                    <h1 class="login-header hidden-xs"> Üye Girişi</h1>
                                    <form class="js-account-form" method="post">
                                        <input type="hidden" name="csrfmiddlewaretoken"
                                            value="V9vQSjfof75B2o2HMoeV0WLReBmGhi3TeUU1flqb5zBlNc1h7dy2SsYm9Otgrxp0">
                                        <div class="auth__form__input-box auth__form__input-box--register">
                                            <label class="form-label">Eposta adresiniz</label>
                                            <input type="text" name="email"
                                                class="auth__form__input auth__form__input--register" placeholder="">
                                        </div>
                                        <div class="error auth__form__error js-error-email" style="display: none;">
                                        </div>
                                        <div class="auth__form__input-box auth__form__input-box--register">
                                            <label class="form-label">Şifreniz</label>
                                            <input type="password" name="password"
                                                class="auth__form__input auth__form__input--register" placeholder="">
                                        </div>
                                        <div class="error auth__form__error js-error-password" style="display: none;">
                                        </div>
                                        <div class="error auth__form__error js-error-non_field_errors"
                                            style="display: none;"></div>
                                        <input type="hidden" name="next" value="/">
                                        <div class="clear"></div>

                                        <div
                                            class="auth__form__input-box auth__form__input-box--text button_line_style hidden-xs">
                                            <a href="/forgot-password/" class="auth__form__forget">
                                                Şifremi unuttum
                                            </a>
                                        </div>

                                        <div
                                            class="auth__form__input-box auth__form__input-box--register auth__form__input-box--register-button">
                                            <button type="submit" class="auth__form__submit button">
                                                Giriş Yap
                                            </button>
                                        </div>
                                        <div
                                            class="auth__form__input-box auth__form__input-box--text button_line_style visible-xs">
                                            <a href="/forgot-password/" class="auth__form__forget">
                                                Şifremi unuttum
                                            </a>
                                        </div>
                                    </form>

                                    <div class="auth__form__bottom bottom-auth-container hidden-xs">
                                        <div class="auth-inline-text">
                                            <span>- ya da -</span>
                                        </div>

                                        <div class="column hidden-xs">
                                            <a class="inline btn social-btn" href="/facebook/login/">
                                                <div class="social-btns" data-width="" data-size="large"
                                                    data-button-type="login_with" data-auto-logout-link="false"
                                                    data-use-continue-as="false">
                                                    <i class="fa fa-facebook fb-icon" aria-hidden="true"></i>
                                                    <span class="btn-content-fb">FACEBOOK İLE BAĞLAN</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 auth-tab-content js-auth-content js-signup-content">
                            <div class="form-container register-container">
                                <div class="clear"></div>
                                <div class="regiser-form-area">
                                    <h1 class="login-header hidden-xs"> Yeni Üye</h1>

                                    <form class="js-register-form" autocomplete="off" method="post">
                                        <div class="auth__form__input-box auth__form__input-box--register cf">
                                            <div class="auth__form__input--name">
                                                <label class="form-label">Adınız</label>
                                                <input type="text" name="first_name"
                                                    class="auth__form__input regex-control" placeholder="">
                                                <div class="error auth__form__error js-error-register-first_name"
                                                    style="display: none;"></div>
                                            </div>
                                            <div class="auth__form__input--name">
                                                <label class="form-label">Soyadınız</label>
                                                <input type="text" name="last_name"
                                                    class="auth__form__input regex-control" placeholder="">
                                                <div class="error auth__form__error js-error-register-last_name"
                                                    style="display: none;"></div>
                                            </div>
                                        </div>
                                        <div class="auth__form__input-box auth__form__input-box--register">
                                            <label class="form-label">Eposta adresiniz</label>
                                            <input type="text" name="email" class="auth__form__input" placeholder="">
                                            <div class="error auth__form__error js-error-register-email"
                                                style="display: none;"></div>
                                        </div>
                                        <div
                                            class="auth__form__input-box auth__form__input-box--register js-account-profile-datepicker">
                                            <label class="form-label">Doğum Tarihiniz</label>
                                            <div class="date-of-birth-register dateofbirth">
                                                <div class="profile_select_wrapper">
                                                    <select
                                                        class="date-of-birth-register__select js-dob-change js-dob-days">
                                                        <option value="">Gün</option>

                                                        <option value="01">
                                                            01
                                                        </option>

                                                        <option value="02">
                                                            02
                                                        </option>

                                                        <option value="03">
                                                            03
                                                        </option>

                                                        <option value="04">
                                                            04
                                                        </option>

                                                        <option value="05">
                                                            05
                                                        </option>

                                                        <option value="06">
                                                            06
                                                        </option>

                                                        <option value="07">
                                                            07
                                                        </option>

                                                        <option value="08">
                                                            08
                                                        </option>

                                                        <option value="09">
                                                            09
                                                        </option>

                                                        <option value="10">
                                                            10
                                                        </option>

                                                        <option value="11">
                                                            11
                                                        </option>

                                                        <option value="12">
                                                            12
                                                        </option>

                                                        <option value="13">
                                                            13
                                                        </option>

                                                        <option value="14">
                                                            14
                                                        </option>

                                                        <option value="15">
                                                            15
                                                        </option>

                                                        <option value="16">
                                                            16
                                                        </option>

                                                        <option value="17">
                                                            17
                                                        </option>

                                                        <option value="18">
                                                            18
                                                        </option>

                                                        <option value="19">
                                                            19
                                                        </option>

                                                        <option value="20">
                                                            20
                                                        </option>

                                                        <option value="21">
                                                            21
                                                        </option>

                                                        <option value="22">
                                                            22
                                                        </option>

                                                        <option value="23">
                                                            23
                                                        </option>

                                                        <option value="24">
                                                            24
                                                        </option>

                                                        <option value="25">
                                                            25
                                                        </option>

                                                        <option value="26">
                                                            26
                                                        </option>

                                                        <option value="27">
                                                            27
                                                        </option>

                                                        <option value="28">
                                                            28
                                                        </option>

                                                        <option value="29">
                                                            29
                                                        </option>

                                                        <option value="30">
                                                            30
                                                        </option>

                                                        <option value="31">
                                                            31
                                                        </option>

                                                    </select>
                                                </div>

                                                <div class="profile_select_wrapper">
                                                    <select
                                                        class="date-of-birth-register__select months js-dob-change js-dob-months">
                                                        <option value="">Ay</option>
                                                        <option value="01">Ocak</option>
                                                        <option value="02">Şubat</option>
                                                        <option value="03">Mart</option>
                                                        <option value="04">Nisan</option>
                                                        <option value="05">Mayıs</option>
                                                        <option value="06">Haziran</option>
                                                        <option value="07">Temmuz</option>
                                                        <option value="08">Ağustos</option>
                                                        <option value="09">Eylül</option>
                                                        <option value="10">Ekim</option>
                                                        <option value="11">Kasım</option>
                                                        <option value="12">Aralık</option>
                                                    </select>
                                                </div>

                                                <div class="profile_select_wrapper">
                                                    <select
                                                        class="date-of-birth-register__select years js-dob-change js-dob-years">
                                                        <option value="">Yıl</option>


                                                        <option value="2005">
                                                            2005
                                                        </option>

                                                        <option value="2004">
                                                            2004
                                                        </option>

                                                        <option value="2003">
                                                            2003
                                                        </option>

                                                        <option value="2002">
                                                            2002
                                                        </option>

                                                        <option value="2001">
                                                            2001
                                                        </option>

                                                        <option value="2000">
                                                            2000
                                                        </option>

                                                        <option value="1999">
                                                            1999
                                                        </option>

                                                        <option value="1998">
                                                            1998
                                                        </option>

                                                        <option value="1997">
                                                            1997
                                                        </option>

                                                        <option value="1996">
                                                            1996
                                                        </option>

                                                        <option value="1995">
                                                            1995
                                                        </option>

                                                        <option value="1994">
                                                            1994
                                                        </option>

                                                        <option value="1993">
                                                            1993
                                                        </option>

                                                        <option value="1992">
                                                            1992
                                                        </option>

                                                        <option value="1991">
                                                            1991
                                                        </option>

                                                        <option value="1990">
                                                            1990
                                                        </option>

                                                        <option value="1989">
                                                            1989
                                                        </option>

                                                        <option value="1988">
                                                            1988
                                                        </option>

                                                        <option value="1987">
                                                            1987
                                                        </option>

                                                        <option value="1986">
                                                            1986
                                                        </option>

                                                        <option value="1985">
                                                            1985
                                                        </option>

                                                        <option value="1984">
                                                            1984
                                                        </option>

                                                        <option value="1983">
                                                            1983
                                                        </option>

                                                        <option value="1982">
                                                            1982
                                                        </option>

                                                        <option value="1981">
                                                            1981
                                                        </option>

                                                        <option value="1980">
                                                            1980
                                                        </option>

                                                        <option value="1979">
                                                            1979
                                                        </option>

                                                        <option value="1978">
                                                            1978
                                                        </option>

                                                        <option value="1977">
                                                            1977
                                                        </option>

                                                        <option value="1976">
                                                            1976
                                                        </option>

                                                        <option value="1975">
                                                            1975
                                                        </option>

                                                        <option value="1974">
                                                            1974
                                                        </option>

                                                        <option value="1973">
                                                            1973
                                                        </option>

                                                        <option value="1972">
                                                            1972
                                                        </option>

                                                        <option value="1971">
                                                            1971
                                                        </option>

                                                        <option value="1970">
                                                            1970
                                                        </option>

                                                        <option value="1969">
                                                            1969
                                                        </option>

                                                        <option value="1968">
                                                            1968
                                                        </option>

                                                        <option value="1967">
                                                            1967
                                                        </option>

                                                        <option value="1966">
                                                            1966
                                                        </option>

                                                        <option value="1965">
                                                            1965
                                                        </option>

                                                        <option value="1964">
                                                            1964
                                                        </option>

                                                        <option value="1963">
                                                            1963
                                                        </option>

                                                        <option value="1962">
                                                            1962
                                                        </option>

                                                        <option value="1961">
                                                            1961
                                                        </option>

                                                        <option value="1960">
                                                            1960
                                                        </option>

                                                        <option value="1959">
                                                            1959
                                                        </option>

                                                        <option value="1958">
                                                            1958
                                                        </option>

                                                        <option value="1957">
                                                            1957
                                                        </option>

                                                        <option value="1956">
                                                            1956
                                                        </option>

                                                        <option value="1955">
                                                            1955
                                                        </option>

                                                        <option value="1954">
                                                            1954
                                                        </option>

                                                        <option value="1953">
                                                            1953
                                                        </option>

                                                        <option value="1952">
                                                            1952
                                                        </option>

                                                        <option value="1951">
                                                            1951
                                                        </option>

                                                        <option value="1950">
                                                            1950
                                                        </option>

                                                        <option value="1949">
                                                            1949
                                                        </option>

                                                        <option value="1948">
                                                            1948
                                                        </option>

                                                        <option value="1947">
                                                            1947
                                                        </option>

                                                        <option value="1946">
                                                            1946
                                                        </option>

                                                        <option value="1945">
                                                            1945
                                                        </option>

                                                        <option value="1944">
                                                            1944
                                                        </option>

                                                        <option value="1943">
                                                            1943
                                                        </option>

                                                        <option value="1942">
                                                            1942
                                                        </option>

                                                        <option value="1941">
                                                            1941
                                                        </option>

                                                        <option value="1940">
                                                            1940
                                                        </option>

                                                        <option value="1939">
                                                            1939
                                                        </option>

                                                        <option value="1938">
                                                            1938
                                                        </option>

                                                        <option value="1937">
                                                            1937
                                                        </option>

                                                        <option value="1936">
                                                            1936
                                                        </option>

                                                        <option value="1935">
                                                            1935
                                                        </option>

                                                        <option value="1934">
                                                            1934
                                                        </option>

                                                        <option value="1933">
                                                            1933
                                                        </option>

                                                        <option value="1932">
                                                            1932
                                                        </option>

                                                        <option value="1931">
                                                            1931
                                                        </option>

                                                        <option value="1930">
                                                            1930
                                                        </option>

                                                        <option value="1929">
                                                            1929
                                                        </option>

                                                        <option value="1928">
                                                            1928
                                                        </option>

                                                        <option value="1927">
                                                            1927
                                                        </option>

                                                        <option value="1926">
                                                            1926
                                                        </option>

                                                        <option value="1925">
                                                            1925
                                                        </option>

                                                        <option value="1924">
                                                            1924
                                                        </option>

                                                        <option value="1923">
                                                            1923
                                                        </option>

                                                        <option value="1922">
                                                            1922
                                                        </option>

                                                        <option value="1921">
                                                            1921
                                                        </option>

                                                        <option value="1920">
                                                            1920
                                                        </option>

                                                    </select>
                                                </div>

                                            </div>
                                            <input type="hidden" name="date_of_birth" class="js-date-of-birth">
                                            <div class="error js-error-register-date_of_birth" style="display: none;">
                                            </div>
                                        </div>
                                        <div
                                            class="auth__form__input-box auth__form__input-box--register gender__input__style">
                                            <label class="auth__form__gender">
                                                <input type="radio" name="gender" class="radiobutton" value="female">
                                                <span class="auth__form__gender__name">Kadın</span>
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="auth__form__gender">
                                                <input type="radio" name="gender" class="radiobutton" value="male">
                                                <span class="auth__form__gender__name">Erkek</span>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="auth__form__input-box auth__form__input-box--register">
                                            <label class="form-label">Cep Telefonunuz</label>
                                            <input type="text" name="phone"
                                                class="auth__form__input input_phone_size js-phone-control"
                                                placeholder="" autocomplete="tel">
                                            <div class="error auth__form__error js-error-register-phone"
                                                style="display: none;"></div>
                                        </div>


                                        <div class="auth__form__input-box auth__form__input-box--register">
                                            <label class="form-label">Şifreniz</label>
                                            <input type="password" name="password" class="auth__form__input"
                                                placeholder="">
                                            <div class="error auth__form__error js-error-register-password"
                                                style="display: none;"></div>
                                        </div>
                                        <div class="auth-form__checklist">
                                            <div>
                                                <input type="checkbox" name="email_allowed" value="false"
                                                    class="not-visible js-email_allowed">
                                                <input type="checkbox" name="sms_allowed" value="false"
                                                    class="not-visible js-sms_allowed">
                                                <label class="auth-form__check">
                                                    <input type="checkbox" name="is_allowed" value="true"
                                                        class="js-allowed js-register-permission-1" required="false">

                                                    Üyelik Formu <a
                                                        href="https://akn-ss.b-cdn.net/cms/2022/01/31/5d68b55d-5229-4550-9dc1-d1cd3d22d53e.pdf"
                                                        class="underline js-pdf-view">Aydınlatma Metni</a>’ni okudum

                                                </label>
                                            </div>
                                            <div>
                                                <label class="auth-form__check">
                                                    <input type="checkbox" name="confirm" value="true" required="false">
                                                    <a href="https://akn-ss.b-cdn.net/cms/2022/07/26/18c6c4d6-f804-4d5c-9a14-f359b907c450.pdf"
                                                        class="underline js-pdf-view">Kullanıcı Sözleşmesi'ni</a>
                                                    okudum, kabul ediyorum
                                                </label>
                                            </div>
                                            <div>
                                                <label class="auth-form__check">
                                                    <input type="checkbox" name="permissions"
                                                        class="js-register-permission-2">
                                                    Tarafıma ticari elektronik ileti gönderilmesine ve bu kapsamda
                                                    verilerimin işlenmesine <a
                                                        href="https://akn-ss.b-cdn.net/cms/2022/01/31/bec7ef95-95ce-4335-8442-a7b708cbcd8d.pdf"
                                                        class="underline js-pdf-view">açık rıza</a> veriyorum.
                                                </label>
                                            </div>
                                            <div class="error auth-form__error js-error-register-confirm"
                                                style="display: none;"></div>
                                            <div
                                                class="error auth-form__error auth-form-permissions-error js-registerform-error-permissions">
                                                Lütfen Aydınlatma Metni'ni kabul ediniz.</div>
                                        </div>
                                        <div class="auth__form__input-box auth__form__input-box--register right-align">
                                            <button type="submit" class="auth__form__submit button">
                                                <i class="icon-mobil_profil"></i> Üye ol
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="auth__form__bottom bottom-auth-container visible-xs">
                        <div class="auth-inline-text line-bg">
                            <span class="text">ya da</span>
                        </div>

                        <div class="column">
                            <a class="inline btn social-btn" href="/facebook/login/">
                                <div class="social-btns" data-width="" data-size="large" data-button-type="login_with"
                                    data-auto-logout-link="false" data-use-continue-as="false">
                                    <i class="fa fa-facebook fb-icon" aria-hidden="true"></i>
                                    <span class="btn-content-fb">FACEBOOK İLE BAĞLAN</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> <!--.row -->
            </div>
        </div>
    </div>
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
