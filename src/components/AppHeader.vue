<script>

export default {
  name: 'AppHeader',
  data() {
    return {
      navItems: ['Store', 'Mac', 'iPhone', 'Support']
    }
  },
};
</script>

<template>
  <header>
    <nav class="container">
      <img src="/public/assets/images/apple.svg" alt="">
      <div class="nav_links">
        <a v-for="link in navItems" href="#">{{ link }}</a>
      </div>
      <div class="nav_icons">
        <img width="18" src="/public/assets/images/search.svg" alt="search">
        <img width="18" src="/public/assets/images/bag.svg" alt="cart">
      </div>
    </nav>
  </header>
</template>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  .nav_links {
    display: flex;
    gap: 2.5rem;
    font-size: .9rem;

  }

  .nav_icons {
    & img:first-child {
      margin-right: 1.5rem;
    }
  }
}
</style>
