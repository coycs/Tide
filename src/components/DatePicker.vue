<script>
import { useDatedStore } from "../stores/dated";
import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      // date: "",
    };
  },
  setup() {
    const datedStore = useDatedStore();
    const { date, preDate } = storeToRefs(datedStore);

    return {
      datedStore,
      date,
      preDate,
    };
  },
  // props: {
  //   nowTimeStamp,
  // },
  methods: {
    // incrementAndPrint() {
    //   this.datedStore.increment();
    //   // console.log("New Count:", this.datedStore.date);
    // },
  },
  computed: {},
  mounted() {
    this.date = this.preDate;
  },
};
</script>

<template>
  <div id="datePicker">
    <label id="dateInputLabel" for="dateInput">{{ date }}</label>
    <input type="date" id="dateInput" v-model="date" min="2023-02-03" :max="preDate" step="1" />
  </div>
  <!-- <button @click="incrementAndPrint">click</button> -->
</template>

<style lang="scss" scoped>
#datePicker {
  position: relative;
  #dateInputLabel {
    position: absolute;
    right: 0;
    height: 20px;
    width: 100px;
  }
  #dateInput {
    opacity: 0;
    height: 20px;
    width: 100px;
    position: relative;
    &::-webkit-calendar-picker-indicator {
      width: 100%;
      position: absolute;
      padding-left: calc(50% - 10px);
    }
  }
}
</style>
