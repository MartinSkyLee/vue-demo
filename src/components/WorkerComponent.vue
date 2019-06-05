<template>
  <div>
    <div>
      <h1>{{detail.code}} {{detail.name}}</h1>
    </div>
    <div>
      <h2>培训到期时间：{{detail.maturityTime | formatDate}}</h2>
    </div>
    <div>
      <h2>工种：{{detail.professionName}}</h2>
    </div>
  </div>
</template>

<script>
var padDate = function(va) {
  va = va < 10 ? "0" + va : va;
  return va;
};

export default {
  props: ["detail"],
  filters: {
    formatDate(val) {
      var value = new Date(val);
      var year = value.getFullYear();
      var month = padDate(value.getMonth() + 1);
      var day = padDate(value.getDate());
      var hour = padDate(value.getHours());
      var minutes = padDate(value.getMinutes());
      var seconds = padDate(value.getSeconds());
      return (
        year + "-" + month +"-" + day + " " + hour + ":" + minutes + ":" + seconds
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
