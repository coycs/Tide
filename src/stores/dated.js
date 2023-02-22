import { defineStore } from 'pinia'

export const useDatedStore = defineStore('dated', {
  state: () => ({
    date: "",
    todayDate: new Date().toJSON().slice(0, 10)
  }),
  // state: () => ({ date: "2022-01-11" }),
  getters: {
    preDate: (state) => {
      return new Date(new Date(state.todayDate).getTime() - 1 * 24 * 60 * 60 * 1000)
        .toJSON()
        .slice(0, 10);
    },
    // getPreDate: (state) => {
    //   const preDate = new Date(new Date(state.date).getTime() - 1 * 24 * 60 * 60 * 1000)
    //     .toJSON()
    //     .match(/(\d{4})-(\d{2})-(\d{2})/);
    //   return preDate[1] + "-" + preDate[2] + "-" + preDate[3];
    // },
    // double: (state) => state.count * 2,
  },
  actions: {
    async increment() {
      // this.date = "2018-10-11";
      console.log("New Count:", this.date);
    },
  },
})
