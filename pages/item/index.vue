<template>
  <div>
    <nuxt-link to="/">首页</nuxt-link>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () { return this.$store.state.item.list }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('item/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'item/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
