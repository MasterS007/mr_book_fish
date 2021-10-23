<template>
  <div class="container mb-6">
    <div class="books_container container-max-width is-fluid">
      <!-- <transition-group name="fade"> -->
      <ul class="book-list is-flex is-justify-content-left">
        <li v-for="image in images" :key="image.id">
          <img v-bind:src="image.url" alt="picture text" class="books-flow" />
        </li>
      </ul>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script>
export default {
  // name: "ChildContainer2",
  data() {
    return {
      images: [
        {
          url: "https://images.pexels.com/photos/3757136/pexels-photo-3757136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 1,
        },
        { url: "@/assets/images/book2.png", id: 2 },
        // { url: "../assets/images/book3.png", id: 3 },
        // { url: "../assets/images/book4.png", id: 4 },
        // { url: "../assets/images/book5.png", id: 5 },
        // { url: "../assets/images/book6.png", id: 6 },
        // { url: "../assets/images/book3.png", id: 7 },
      ],
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

.books-flow {
  width: 25%;
  /* position: relative; */
  /* height: 150px; */
  /* padding-left: 15px; */
}
</style>
