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
          math: {
            num: 99,
            rank: 1
          },
          english: {
            num: 90,
            rank: 3
          },
          computer: {
            num: 96,
            rank: 1
          },
        },
      }
    }
  }
})
console.log(vm);
console.log(vm.title);
console.log(vm.teachers);
vm.teachers.push("wangwu")