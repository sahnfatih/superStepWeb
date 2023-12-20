<template>
    <div>
      <header>
        <div class="global-notification">
          <p>
            Siparişin 2-4 iş günü içerisinde kargoya verilecektir.
          </p>
        </div>
        <div class="header-row">
          <div class="header-wrapper">
            <div class="header-left">
              <router-link to="/" class="logo">
                <img
                  loading="lazy"
                  src="https://akn-ss.b-cdn.net/static_omnishop/super522/assets/img/logo-black.svg"
                  alt="Super Step"
                  width="200"
                />
              </router-link>
            </div>
            <div class="header-center-menu">
              <div class="header-center">
                <nav class="navigation">
                  <ul class="menu-list">
                    <li class="menu-list-item">
                      <router-link to="/markalar" class="menu-link">Markalar</router-link>
                    </li>
                    <li class="menu-list-item">
                      <router-link to="/erkek" class="menu-link">Erkek</router-link>
                    </li>
                    <li class="menu-list-item">
                      <router-link to="/kadın" class="menu-link">Kadın</router-link>
                    </li>
                    <li class="menu-list-item">
                      <router-link to="/cocuk" class="menu-link">Çocuk</router-link>
                    </li>
                    <li class="menu-list-item">
                      <router-link to="/giyim" class="menu-link">Giyim</router-link>
                    </li>
                    <li class="menu-list-item">
                      <router-link to="/indirim" class="menu-link">İndirim</router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header-right">
              <ul class="menu-list">
                <li class="menu-list-item">
                  <router-link to="/search" class="menu-link">
                    <img
                      loading="lazy"
                      class="icon-favorite-svg"
                      src="https://akn-ss.b-cdn.net/static_omnishop/super522/assets/img/header-icons/search.svg"
                      height="24px"
                    />
                  </router-link>
                </li>
                <router-link to="/login">
                  <li class="menu-list-item">
                    <router-link to="/login" class="menu-link">
                      <img
                        loading="lazy"
                        class="icon-favorite-svg"
                        src="https://akn-ss.b-cdn.net/static_omnishop/super522/assets/img/header-icons/user.svg"
                        height="24px"
                      />
                    </router-link>
                  </li>
                </router-link>
                <li class="menu-list-item">
                  <router-link to="/favorites" class="menu-link">
                    <img
                      loading="lazy"
                      class="icon-favorite-svg"
                      src="https://akn-ss.b-cdn.net/static_omnishop/super522/assets/img/header-icons/heart.svg"
                      height="24px"
                    />
                  </router-link>
                </li>
                <li class="menu-list-item">
                  <router-link to="/cart" class="menu-link">
                    <img
                      loading="lazy"
                      class="icon-favorite-svg"
                      src="https://akn-ss.b-cdn.net/static_omnishop/super522/assets/img/header-icons/bag.svg"
                      height="24px"
                    />
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  