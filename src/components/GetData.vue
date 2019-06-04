<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetData",
  data() {
    return {
      msg: null
    };
  },
  mounted() {
      axios
      .get("http://10.9.53.103:5200/api/CompanyManager/GetCompanyList?Sidx=name")
      .then(response => {
        this.msg = response.data.data[1];//用ES6箭头函数，箭头方法可以和父方法共享变量
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
