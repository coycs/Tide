import { defineStore } from 'pinia'
import { useDatedStore } from "./dated";
import { storeToRefs } from "pinia";
import { toRaw } from 'vue';



export const usePostsStore = defineStore('posts', {
  state: () => ({ postSet: {} }),
  getters: {
    postsItem: (state) => {
      const datedStore = useDatedStore();
      const { date } = storeToRefs(datedStore);
      return state.postSet[date];
    }
  },
  actions: {
    async addPostsItem(date) {
      // if (!this.postSet[date]) {
      // const postsItem = (await import(`../posts/files/${date}.json`)).default;
      const postsItem = (await import(`../assets/files/${date}.json`)).default;
      this.postSet[date] = postsItem;
      // }
    },
    async getPostsItem(date) {
      if (!this.postSet[date]) {
        await this.addPostsItem(date);
        // console.log(toRaw(this.postSet))
      }
      return this.postSet[date];
    },
  }
})
