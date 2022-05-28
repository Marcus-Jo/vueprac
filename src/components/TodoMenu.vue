<template>
  <div>
    <span @click="toggleIsOpen">...</span>
    <div v-if="isOpen">
      <div v-if="!state" @click="changeState">완료</div><div v-else @click="changeState">완료해제</div>
      <div @click="editContent">수정</div>
      <div @click="remove">삭제</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoMenu",
  props: {
    state: Boolean
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    changeState() {
      this.$emit('changeState');
      this.isOpen = false;
    },
    editContent() {
      this.$emit('editContent');
      this.isOpen = false;
    },
    remove() {
      this.$emit('removeItem');
      this.isOpen = false;
    },
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>

</style>