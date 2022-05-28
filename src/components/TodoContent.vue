<template>
  <div>
    <input :checked="this.todoItem.state" type="checkbox" @click="changeState">
    <span v-if="!edit">{{todoItem.content}}</span>
    <input v-else type="text" v-model="content" @focusout="modifyContent" @keypress.enter="modifyContent">
    <TodoMenu :state="this.todoItem.state" @changeState="changeState" @editContent="editContent" @removeItem="removeItem"  />
  </div>
</template>

<script>
import TodoMenu from "@/components/TodoMenu";
import {Todo} from "@/data/todo";
export default {
  props: {
    todoItem: Todo
  },
  data() {
    return {
      content: this.todoItem.content,
      edit: false
    }
  },
  methods: {
    modifyContent() {
      this.edit = false;
      this.$emit('modify', { id: this.todoItem.id, content: this.content, state: this.todoItem.state } );
    },
    changeState() {
      this.$emit('modify', {id: this.todoItem.id, content: this.todoItem.content, state: !this.todoItem.state })
    },
    editContent() {
      this.edit = true;
    },
    removeItem() {
      this.$emit('remove', this.todoItem );
    }
  },
  name: "TodoContent",
  components: {TodoMenu}
}
</script>

<style scoped>

</style>