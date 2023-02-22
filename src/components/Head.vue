<script>
import Home from "./Home.vue";
import DatePicker from "./DatePicker.vue";
import Theme from "./Theme.vue";

export default {
  components: {
    Home,
    DatePicker,
    Theme,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<template>
  <header id="header">
    <Home />
    <Theme />
    <DatePicker />
  </header>
</template>

<style lang="scss" scoped>
#header {
  // max-width: 560px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // width: 100%;
  // position: fixed;
  background-color: #fff;
  padding: 0 15px;
  // z-index: 1;
}
</style>
