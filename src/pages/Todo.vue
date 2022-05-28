<template>
  <div id="todo">
    <TodoInput @submit="addTodo" />
    <TodoContent v-for="item in todoList" :key="item.id" :todoItem="item" @remove="removeTodo" @modify="modifyTodo" />
    <TodoRemove @click="removeAll"/>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoContent from "@/components/TodoContent";
import TodoRemove from "@/components/TodoRemove";
import {Todo} from "@/data/todo";

export default {
  name: `Todo`,
  data() {
    return {
      todoList: []
    }
  },
  components: {
    TodoInput,
    TodoContent,
    TodoRemove
  },
  methods: {
    addTodo( content ) {
      this.todoList.push( new Todo(content) );
      console.log(this.todoList);
    },
    removeAll() {
      this.todoList = [];
    },
    removeTodo( item ) {
      this.todoList.splice( this.todoList.findIndex( x => x.id === item.id), 1);
    },
    modifyTodo( { id, content, state } ) {
      const filteredItems = this.todoList.filter( x => x.id === id );
      if(filteredItems.length > 0) {
        filteredItems[0].content = content;
        filteredItems[0].state = state;
      }
    }
  },
  watch: {
    'todoList': function (todoList) {
      console.log('in watch', todoList);
    }
  }
}
</script>

<style lang="scss" scoped>
  #todo {
    width:100%;
  }
</style>