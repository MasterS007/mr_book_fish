<template>
  <div class="nav">
    <Nav />
    <Header />
    <Container />
    <RequestBook />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Container from "@/components/Container.vue";
import Footer from "@/components/Footer.vue";
import RequestBook from "@/components/RequestBook.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Header,
    Container,
    Footer,
    RequestBook,
  },
};
</script>
