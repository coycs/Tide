<script>
export default {
  props: ["postItem"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {
    // console.log(JSON.parse(JSON.stringify(this.postItem)));
    // console.log(this.postItem.post);
  },
};
</script>

<template>
  <div class="post">
    <div class="post-config">
      <a class="post-author" :href="postItem.site" target="_blank">
        {{ postItem.author }}
      </a>
      <span class="post-date">
        {{ new Date(postItem.post.date).toJSON().slice(0, 10) }}
      </span>
    </div>
    <div class="post-title">
      <a :href="postItem.post.link" target="_blank">
        {{ postItem.post.title }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 样式参考掘金：juejin.com
.post {
  // background-color: aqua;
  width: 100%;
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
</style>
