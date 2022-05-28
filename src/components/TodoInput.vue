<template>
  <div id="todo-input">
    <input type="text" v-model="content" @keypress.enter="submit">
    <span @click="submit">(+ 버튼)</span>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      content: '',
      // test: {
      //   test1: {
      //     test2: ''
      //   }
      // }
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.content);
      this.content = '';
    }
  },
  watch: {
    // 'test.test1.test2': function (content){
    //   console.log(content);
    // }
  }
}
</script>

<style lang="scss" scoped>
  #todo-input {
    display: flex;
    width: 100%;
    input {
      width: 100%;
    }
  }
</style>