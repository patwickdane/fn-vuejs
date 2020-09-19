<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <span class="homeIcon">
          <i class="fas fa-home fa-large" />
        </span>
      </router-link>
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
}

.homeIcon {
  font-size: 1.8em;
  color: var(--color-main);
  transition: 200ms;
}

.homeIcon:hover {
  color: #fff;
}
</style>
