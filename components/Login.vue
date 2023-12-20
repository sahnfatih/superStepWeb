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
