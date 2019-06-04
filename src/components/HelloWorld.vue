<template>
  <div class="hello">
    <input v-model="number">
    <p>数字：{{ number }}</p>
    <p>数字1：{{ number1 | toInt }}</p>
    <p>数字2：{{ number2 }}</p>
    <p>总和：{{ sum }}</p>
    <p>{{ number }}</p>
    <button v-on:click="plus">加1</button>
    <h1>{{ msg }}</h1>
    <p v-html="name"></p>
    <a v-bind:href="link" target="_blank">百度地图</a>
  </div>
</template>

<script>
import axios from "axios";

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: null,
      name: "<strong>Martin</strong>",
      number: 0,
      number1: 25.36,
      number2: 10.24,
      link: "https://map.baidu.com"
    };
  },
  filters: {
    toInt(value) {
      return parseInt(value);
    }
  },
  computed: {
    sum() {
      return this.number1 + this.number2;
    }
  },
  methods: {
    plus() {
      return this.number++;
    }
  },
  watch: {
    number() {
      console.log("有变化，最新值：");
      console.log(this.number);
    }
  },
  mounted() {
    // var that = this //在then的内部不能使用Vue的实例化的this,因为在内部this没有被绑定。
    axios
      .get(
        "http://10.9.53.103:5200/api/CompanyManager/GetCompanyList?Sidx=name"
      )
      // .then(function(response) {
      //   // console.log(response.data);
      //   that.msg = response.data
      // })
      .then(response => {
        this.msg = response.data.data[0]; //用ES6箭头函数，箭头方法可以和父方法共享变量
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
