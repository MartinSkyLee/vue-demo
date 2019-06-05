<template>
  <div class="transition-div">
    <button @click="showBox = !showBox" class="btn">切换</button>
    <div class="container">
      <transition name="box">
        <div v-show="showBox" class="box">I AM IRON MAN</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showBox: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transition-div {
  width: 200px;
  margin: 0 auto;
}
.btn {
  background: #20b060;
  color: #ffffff;
  width: 100px;
  height: 34px;
  margin: 20px;
  border: 1px solid #20b060;
  cursor: pointer;
}
.box {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 200px;
  background: #ff8282;
  color: #fff;
  /*以下两个默认值，可不写*/
  /*写上只是为了便于讲解，记住这两个*/
  opacity: 1;
  margin-left: 0;
}
.box-enter-active,.box-leave-active{
    transition: all .8s;
 }
 .box-enter{
    opacity: 0;
    margin-left: 100%;
 }
 .box-leave-active{
    opacity: 0;
    margin-left: 100%;
 }
</style>
