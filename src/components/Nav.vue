<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/">
        <img alt="logo" src="../assets/brand.png" />
      </router-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-item" to="/">Books</router-link>

          <div class="navbar-dropdown">
            <a class="navbar-item"
              ><img alt="new sale" src="../assets/images/new.png" /> New
              Arrivals
            </a>
            <a class="navbar-item"> Book Series </a>
            <a class="navbar-item"> Book Marks </a>
            <a class="navbar-item"> Custom Products</a>
            <!-- <hr class="navbar-divider" /> 
            <a class="navbar-item"> Report an issue </a> -->
          </div>
        </div>
        <router-link class="navbar-item" to="/">Recommendation</router-link>
        <div class="navbar-item columns ml-4 mt-3">
          <router-link class="navbar-item" to="/">Blog</router-link>
          <router-link class="navbar-item" to="/">Request Books</router-link>
          <router-link class="navbar-item" to="/">Sale!</router-link>
        </div>

        <div class="navbar-item columns ml-6">
          <div class="column">
            <p class="control has-icons-right">
              <input
                class="input is-fullwidth"
                type="search"
                placeholder="Search Book or Author or Genre"
              />
              <span class="icon is-small is-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ddd"
                    d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <Cart />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Cart from "@/components/Cart.vue";
export default {
  name: "Nav",
  components: {
    Cart,
  },
};
</script>

<style scoped>
.navbar-item {
  font-weight: 600;
}
</style>
