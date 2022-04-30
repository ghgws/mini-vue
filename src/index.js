import Vue from 'vue';

var vm = new Vue({
  el: "#app",
  data() {
    return {
      title: "class detail",
      teachers: ["张三", "李四"],
      students: [
        {
          id: 1,
          name: "小红"
        },
        {
          id: 2,
          name: "小明"
        }
      ],
      class: 1,
      info: {
        grade: 3,
        rank: {
          math: 1,
          english: 2,
          computer: 1
        }
      }
    }
  }
})

console.log(vm.title);