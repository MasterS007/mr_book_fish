<template>
  <div class="panel">
    <p class="panel-heading">Request New Book</p>

    <div class="panel-block">
      <div class="columns is-desktop">
        <div class="column is-7 mt-3 ml-4">
          <img src="../assets/images/upperfooter.png" alt="" class="mr-6" />
        </div>

        <div class="column is-8 mt-6 request-box">
          <div class="field is-grouped">
            <div class="control mr-5">
              <label class="label is-size-4 mr-5 has-text-left"
                >Book Title</label
              >
            </div>
            <div class="control ml-6">
              <input
                class="input is-normal ml-6 is-size-5"
                type="text"
                placeholder="Harry Potter and the Prisoner of Azkaban"
                size="50"
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control mr-6 mt-3">
              <label class="label is-size-4 mr-5 has-align-left"
                >Author &nbsp;</label
              >
            </div>
            <div class="control ml-6 mt-3">
              <input
                class="input is-normal ml-6 is-size-5"
                type="text"
                placeholder="J. K. Rowling"
                size="50"
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control mr-6 mt-3">
              <label class="label is-size-4 mr-6 has-align-left"
                >Type &nbsp;
              </label>
            </div>
            <div class="control ml-6 mt-3">
              <input
                class="input is-normal ml-6 is-size-5"
                type="text"
                placeholder="Paperback"
                size="50"
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control mt-3">
              <label class="label is-size-4 has-align-left"
                >PDF Link (Optional)</label
              >
            </div>
            <div class="control ml-4 mt-3">
              <input
                class="input is-normal ml-2 is-size-5"
                type="text"
                placeholder="Harry Potter and the Prisoner of Azkaban"
                size="55"
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control mt-3">
              <label class="label is-size-4 has-align-left"
                >Cover Link (Optional)</label
              >
            </div>
            <div class="control ml-2 mt-3">
              <input
                class="input is-normal is-size-5"
                type="text"
                placeholder="Harry Potter and the Prisoner of Azkaban"
                size="56"
              />
            </div>
          </div>

          <div
            class="
              submit-button
              control
              is-flex is-justify-content-right
              mr-6
              mt-5
            "
          >
            <button class="button mr-6">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestBook",
};
</script>

<style scoped>
.panel-block {
  background-color: #3c36361a;
}
.panel-heading {
  background-color: #000000c4;
  color: snow;
  font-weight: lighter;
}
.request-box {
  position: relative;
  left: 12rem;
}
.submit-button button {
  position: relative;
  left: -2.8rem;
  background-color: rgb(42, 179, 42);
  color: white;
}
</style>
