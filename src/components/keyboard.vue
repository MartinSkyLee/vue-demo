<template>
  <div @click="getKeyboardValue" :data-value="value" class="keyboard">{{value}}</div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    getKeyboardValue(event) {
      let value = event.target.dataset.value;

      this.$store.commit("calculate", value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keyboard{
    cursor: pointer;
    float: left;
    background: #f0f0f0;
    height: 78px;
    width: 78px;
    font-size: 22px;
    vertical-align: text-bottom;
    line-height: 80px;
    margin: 1px;
}
div[data-value="clear"]{
    color:#f04000;
}
div[data-value="="]{
    color: #f0f0f0;
    background: #f04000;
}
</style>
