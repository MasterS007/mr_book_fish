<template>
  <div class="nav">
    <Nav />
    <Header />
    <Container />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Container from "@/components/Container.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Header,
    Container,
  },
};
</script>
