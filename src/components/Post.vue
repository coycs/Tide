<script>
import PostCard from "./PostCard.vue";
import { storeToRefs } from "pinia";
import { useDatedStore } from "../stores/dated";
import { usePostsStore } from "../stores/posts";
import { toRaw } from "vue";

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      postsItem: [],
    };
  },
  setup() {
    const datedStore = useDatedStore();
    const { date, getPreDate } = storeToRefs(datedStore);
    const postsStore = usePostsStore();
    // const { postsItem } = storeToRefs(postsStore);

    return {
      date,
      getPreDate,
      postsStore,
    };
  },
  watch: {
    date(newVal, oldVal) {
      // console.log(oldVal);
      // console.log(newVal);
      this.updatePostsItem();
    },
  },
  methods: {
    async updatePostsItem() {
      // console.log(JSON.parse(JSON.stringify(await this.postsStore.getPostsItem(this.date))));
      //console.log(await toRaw(this.postsStore.getPostsItem(this.date)));
      this.postsItem = JSON.parse(JSON.stringify(await this.postsStore.getPostsItem(this.date)));
      // this.postsItem = await toRaw(this.postsStore.getPostsItem(this.date));
    },
  },
  computed: {},
  mounted() {
    this.updatePostsItem();
    // this.postsStore.getPostsItem(this.date);
  },
};
</script>

<template>
  <div id="postContainer">
    <PostCard v-for="postItem in postsItem" :postItem="postItem" key="postItem.post.link" />
  </div>
</template>

<style lang="scss" scoped>
#postContainer {
  &::-webkit-scrollbar{
    display: none;
  }
  flex: 1;
  overflow: auto;
}
</style>
