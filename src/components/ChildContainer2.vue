<template>
  <div class="container mb-6">
    <div class="columns">
      <div class="column">
        <figure>
          <img src="../assets/images/fiction.png" width="70" s height="50" />
        </figure>
        <label class="label has-text-grey-dark" for="fiction">fiction</label>
      </div>

      <div class="column">
        <figure>
          <img src="../assets/images/mystry.png" width="70" height="50" />
        </figure>
        <label class="label has-text-grey-dark" for="mystry">mystry</label>
      </div>

      <div class="column">
        <figure>
          <img src="../assets/images/sci-fi.png" width="70" height="50" />
        </figure>
        <label class="label has-text-grey-dark" for="sci-fi">sci-fi</label>
      </div>

      <div class="column">
        <figure>
          <img src="../assets/images/history.png" width="70" height="50" />
        </figure>
        <label class="label has-text-grey-dark" for="history">history</label>
      </div>

      <div class="column">
        <figure>
          <img src="../assets/images/children.png" width="70" height="50" />
        </figure>
        <label class="label has-text-grey-dark" for="children">children</label>
      </div>

      <div class="column">
        <figure>
          <img src="../assets/images/politics.png" width="70" height="50" />
        </figure>
        <label class="label has-text-grey-dark" for="politics">politics</label>
      </div>
    </div>

    <div class="books_container container-max-width is-fluid">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <ul class="book-list is-flex is-justify-content-left" v-if="show">
          <li>
            <img src="../assets/images/book1.png" />
          </li>
          <li>
            <img src="../assets/images/book3.png" />
          </li>
          <li>
            <img src="../assets/images/book2.png" />
          </li>
          <li>
            <img src="../assets/images/book4.png" />
          </li>
          <li>
            <img src="../assets/images/book5.png" />
          </li>
          <li>
            <img src="../assets/images/book2.png" />
          </li>
          <li>
            <img src="../assets/images/book2.png" />
          </li>
          <li>
            <img src="../assets/images/book2.png" />
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  el: ".books_container",
  data: function () {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.books_container {
  background-color: lightgrey;
  margin: 0px;
  margin-left: -400px;
  padding: 0px 3px 0px 3px;
  width: 250rem;
}
.book-list {
  margin-right: 45px;
}
.book-list li {
  display: inline-block;
  margin-left: 55px;
  padding: 15px 3px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
