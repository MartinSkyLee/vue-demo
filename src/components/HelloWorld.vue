<template>
  <div class="hello">
    <input v-model="number">
    <p>数字：{{ number }}</p>
    <p>数字1：{{ number1 | toInt }}</p>
    <p>数字2：{{ number2 }}</p>
    <p>总和：{{ sum }}</p>
    <p>{{ number }}</p>
    <button v-on:click="plus">加1</button>
    <div v-for="(item,index) in msg" v-bind:key="item">{{index}}.编号：{{item.id}} 工号：{{item.code}} 船舶名称：{{item.name}}</div>
    <!-- Vue 2.2.0+的版本里，当在组件中使用v-for时，v-bind:key是必须的。 -->
    <p v-html="name"></p>
    <a v-bind:href="link" target="_blank">百度地图</a>
    <p v-show="show1">我是true</p>
    <p v-show="show2">我是false</p>
    <p v-if="show1">我是true</p>
    <p v-if="show2">我是false</p>
    <!-- 记住一点：如果需要频繁切换显示/隐藏的，就用 v-show ；如果运行后不太可能切换显示/隐藏的，就用 v-if 。 -->
    <p v-else-if="show1">我是else-if</p>
    <p v-else>我是else</p>
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
      link: "https://map.baidu.com",
      show1: true,
      show2: false
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
        this.msg = response.data.data; //用ES6箭头函数，箭头方法可以和父方法共享变量
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
