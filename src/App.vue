<template>
  <div id="app">
    <div class="header">
      <router-link to="/" class="headerLink">
        <span class="homeIcon">
          <i class="fas fa-home fa-large" />
        </span>
      </router-link>
      <div>
        <router-link to="/about" class="headerLink navLink">
          <span>about</span>
        </router-link>
        <router-link to="contact" class="headerLink navLink">
          <span>contact</span>
        </router-link>
        <router-link to="lorem" class="headerLink navLink">
          <span>lorem</span>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --color-main: #cc9966;
  --color-darker: #926f4c;
}

#app {
  font-family: Lora, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  height: 50px;
  width: 100%;
  background-color: var(--color-darker);
  box-shadow: 0px 1px 4px #00000088;
  color: #fff;
  padding: 8px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerLink {
  font-size: 1.8em;
  color: var(--color-main);
  transition: 200ms;
  text-decoration: none;
}

.navLink {
  font-size: 1.2em;
  margin-left: 24px;
  margin-right: 24px;
}

.headerLink:hover {
  color: #fff;
}
</style>
