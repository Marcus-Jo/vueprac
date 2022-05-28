<template>
  <div @click="removeAll">전체삭제</div>
</template>

<script>
export default {
  name: "TodoRemove",
  methods: {
    removeAll() {
      console.log('aaaaa');
      this.$emit('click');
    }
  }
}
</script>

<style scoped>

</style>