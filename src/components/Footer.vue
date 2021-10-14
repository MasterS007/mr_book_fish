<template>
  <footer class="footer is-max-desktop">
    <div class="container is-max-desktop">
      <div class="columns is-variable is-12 is-desktop">
        <div class="column is-12 first_column">
          <div class="columns is-desktop">
            <div
              class="
                column
                is-3 is-flex is-justify-content-start
                user-pic-div
                mr-5
              "
            >
              <ul>
                <li>
                  <img
                    id="user_pic"
                    alt="user pic"
                    src="../assets/images/random.jpg"
                  />
                </li>
                <li>
                  <span class="is-size-4 feedback">Lorem Martine</span>
                </li>
                <li>
                  <span class="feedback">Astrophysicist at Caltech</span>
                </li>
              </ul>
            </div>
            <div class="column is-10 mt-6 feedback">
              <p class="has-text-centered mt-6 is-size-5">
                “So this bookstore is the best of both worlds.
              </p>
              <p class="has-text-centered is-size-5">
                I get that experience of browsing the shelves, which, as a
                card-carrying nerd, I love a lot. But I also know I’m getting
                what is almost definitely the best price possible, thanks to
                this bookstore.”
              </p>
            </div>
            <div class="column is-8 mt-6">
              <img
                src="../assets/images/footer-image2.png"
                alt=""
                class="upper-right-img"
              />
            </div>
          </div>
        </div>
        <div
          class="
            column
            is-8 is-flex is-justify-content-start
            mt-6
            second_column
          "
        >
          <div class="columns is-desktop">
            <div class="contact column is-6 is-flex is-justify-content-start">
              <ul>
                <li class="social-contact">
                  <a href="https://www.facebook.com/" class="mr-3">
                    <img src="../assets/images/facebook.png" alt="facebook" />
                  </a>

                  <a href="https://www.twitter.com/" class="mr-3">
                    <img src="../assets/images/twitter.png" alt="twitter" />
                  </a>

                  <a href="https://www.instagram.com/" class="mr-3">
                    <img src="../assets/images/instagram.png" alt="instagram" />
                  </a>

                  <a href="https://www.youtube.com/">
                    <img src="../assets/images/youtube.png" alt="youtube" />
                  </a>
                </li>

                <li>
                  <h2 class="contact_us is-flex is-justify-content-start mt-5">
                    Contact us
                  </h2>
                </li>

                <li>
                  <p
                    class="
                      address address-contact
                      is-flex is-justify-content-start
                      mt-1
                    "
                  >
                    House 100, Road 15,<br />
                    Block C,<br />Mirpur, <br />Dhaka
                  </p>
                </li>

                <li class="address-contact is-flex is-justify-start mt-2">
                  <font-awesome-icon :icon="['fas', 'phone']" class="mr-2" />
                  <p class="address">++88 017 01 111 222</p>
                </li>

                <li class="address-contact is-flex is-justify-start">
                  <font-awesome-icon
                    :icon="['far', 'envelope']"
                    class="mr-2"
                    size="lg"
                  />
                  <p class="address">info@mrbookish.com</p>
                </li>

                <li class="terms mt-2">
                  <span class="has-text-left mr-3">
                    <router-link class="address" to="/"
                      >Privacy Policy</router-link
                    >
                  </span>
                  <span>
                    <router-link class="address" to="/"
                      >Terms and Conditions</router-link
                    >
                  </span>
                </li>
              </ul>
            </div>
            <div class="pay column">
              <img src="../assets/images/pay.png" alt="" />
            </div>
            <div class="bottom-right-img column">
              <img src="../assets/images/footer-image1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Footer",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss">
.footer {
  background-color: white !important;
}
.container {
  margin: 0rem;
}

.second_column {
  margin-left: -330px;
}
.contact {
  margin-top: 22rem;
  margin-left: -68rem;
  position: relative;
  top: 85px;
}

.social-contact {
  margin-left: -1.5rem;
}
.contact_us {
  color: rgba(62, 120, 208, 0.955);
  font-size: 19px;
  margin-left: -18px;
}

.address-contact {
  margin-left: -18px;
}

.address {
  text-align: left;
  font-size: 17px;
  color: #868e96;
}

.feedback {
  color: #868e96;
}
.bottom-right-img {
  margin-top: 430px;
  position: relative;
  left: 35rem;
  top: 50px;
}
.upper-right-img {
  margin-top: 100px;
  margin-left: -65px;
}
.user-pic-div {
  margin-top: 10rem;
  margin-left: -215px;
}
#user_pic {
  border-radius: 50%;
  width: 100px;
  max-height: 105px;
  height: auto;
}

.terms {
  margin-left: -1.5rem;
}
.pay {
  margin-top: 550px;
  position: relative;
  left: 23rem;
  top: 100px;
}
</style>
