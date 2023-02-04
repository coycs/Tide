<script>
import PostCard from "./components/PostCard.vue";
import Base64 from "./lib/webtoolkit.base64";

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
      token: "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",
    };
  },
  methods: {
    getPosts(url, token) {
      fetch(url, {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }).then(async res => {
        const content = (await res.json()).content;
        this.posts = JSON.parse(Base64.decode(content));
      });
    },
    getPreDate(num = 1) {
      const preDate = new Date(new Date().getTime() - num * 24 * 60 * 60 * 1000)
        .toJSON()
        .match(/(\d{4})-(\d{2})-(\d{2})/);
      return preDate[1] + "." + preDate[2] + "." + preDate[3];
    },
  },
  computed: {},
  created() {
    this.getPosts(
      // `https://api.github.com/repos/coycs/read-well/contents/base/${this.getPreDate()}.json`,
      `https://api.github.com/repos/coycs/read-well/contents/base/2023.01.30.json`,
      this.token
    );
  },
};
</script>

<template>
  <PostCard v-for="post in posts" :post="post" />
</template>

<style lang="scss" scoped>
// header {
//   line-height: 1.5;
//   .logo {
//     display: block;
//     margin: 0 auto 2rem;
//   }
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }
// }
</style>
