<script>
import Head from "./components/Head.vue";
import Post from "./components/Post.vue";

export default {
  components: {
    Head,
    Post,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<template>
  <Head />
  <Post id="postContainer" />
</template>

<style lang="scss" scoped>
// #postContainer {
//   // position: absolute;
//   // top: 40px;
//   // background-color: pink;
//   // max-width: 500px;
//   // height: 100%;
// }
</style>
