<template>
  <div class="relative min-h-screen bg-secondary">
    <Header />

    <main>
      <div
        class="
          mx-12
          my-12
          p-8
          rounded-md
          text-center text-white
          bg-secondary-dark
        "
      >
        <img class="mx-auto" src="/finding.png" width="64" />
        <p class="my-4 text-xl">
          I can't seem to find this page. Maybe you went to the wrong place?
        </p>
        <a class="cursor-pointer underline" @click.prevent="handleBack('/')">Go back</a>
      </div>
    </main>

    <div class="footer-anchor">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      fromRoute: null,
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },

  methods: {
    handleBack(fallback) {
      if (!this.fromRoute?.name) {
        this.$router.push(fallback);
      } else {
        this.$router.back();
      }
    },
  },
};
</script>
