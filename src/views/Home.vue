<template>
  <div class="nav">
    <Nav />
    <Header />
    <Container />
    <Accessories />
    <Collections />
    <Books />
    <Tags />
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
import Tags from "@/components/Tags.vue";
import Books from "@/components/Books.vue";
import Collections from "@/components/Collections.vue";
import Accessories from "@/components/Accessories.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Header,
    Container,
    Footer,
    RequestBook,
    Tags,
    Books,
    Collections,
    Accessories,
  },
};
</script>
