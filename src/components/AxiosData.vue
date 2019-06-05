<template>
  <div>
    <!-- <div v-for="item in msg" v-bind:key="item">{{item}}</div> -->
    <WorkerComponent v-for="(item,index) in msg" :key="index" :detail="item"></WorkerComponent>
    <!-- 不要用对象或是数组作为key，用string或value作为key。:key相当于是索引的作用，提高循环性能，如果循环量较小，不写也可以的。 -->
  </div>
</template>

<script>
import axios from "axios";
import WorkerComponent from "@/components/WorkerComponent";

export default {
  name: "AxiosData",
  data() {
    return {
      msg: null
    };
  },
  mounted() {
    axios
      .get("http://10.9.53.103:5200/api/WorkerManager/GetAllWorkers?Sidx=code")
      .then(response => {
        this.msg = response.data.data; //用ES6箭头函数，箭头方法可以和父方法共享变量
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  components: { WorkerComponent }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
