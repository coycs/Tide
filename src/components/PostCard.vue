<script>
export default {
  props: ["post"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    postDateHref() {
      return "/post/" + this.post.postDate;
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="post">
    <div class="post-config">
      <a class="post-author" :href="post.authorLink" target="_blank">
        {{ post.author }}
      </a>
      <a class="post-date" :href="postDateHref" target="_blank">
        {{ post.postDate }}
      </a>
    </div>
    <div class="post-title">
      <a :href="post.postLink" target="_blank">
        {{ post.postTitle }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 样式参考掘金：juejin.com
.post {
  max-width: 500px;
  padding: 15px;
  // border: 2px dashed #000;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
  .post-config {
    margin-bottom: 10px;
    .post-author {
      max-width: 162px;
      font-size: 13px;
      line-height: 22px;
      color: #4e5969;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    .post-date {
      padding: 0 10px;
      line-height: 22px;
      font-size: 13px;
      color: #86909c;
    }
  }
  .post-title a {
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
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
