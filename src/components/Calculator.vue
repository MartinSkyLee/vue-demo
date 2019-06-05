<template>
  <div class="cal">
    <div class="result">{{result}}&nbsp;</div>
    <div class="enter">{{enter===""?0:enter}}&nbsp;</div>
    <div class="keys">
      <div class="list">
        <!-- 键盘区域 -->
        <keyboard v-for="(item,index) in keys" :key="index" :value="item"></keyboard>
      </div>
    </div>
  </div>
</template>

<script>
import keyboard from "@/components/keyboard";

export default {
  components: { keyboard },
  data() {
    return {
      keys: [
        "clear",
        "+",
        "-",
        "*",
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "0",
        "1",
        "2",
        "3",
        "="
      ]
    };
  },
  computed: {
    result() {
      return this.$store.state.result;
    },
    enter() {
      return this.$store.state.enter;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin: 0 auto;
  width: 320px;
  height: 320px;
  background: #e0e0e0;
}
.result {
  margin: 0 auto;
  width: 320px;
  height: 100px;
  background: #e0e0e0;
  text-align: right;
  font-size: 45px;
  line-height: 160px;
}
.enter {
  margin: 0 auto;
  width: 320px;
  height: 40px;
  background: #e0e0e0;
  font-size: 22px;
  line-height: 40px;
  text-align: right;
  letter-spacing: 5px;
}
.cal {
  margin: 0 auto;
  width: 320px;
}
</style>
