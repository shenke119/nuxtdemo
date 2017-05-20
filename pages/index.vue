<template>
  <section class="container">
    <div>
      <el-button @click="getdata">Default Button</el-button>
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :current-page="currentPage"
          :total="50"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
      <nuxt-link to="/item">关于</nuxt-link>
      <logo/>
      Stars: {{ $store.state.name }}
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      <h1 class="title">
        NUXT-{{name}}
      </h1>
      <h2 class="subtitle">
        Universal Vue.js Application
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">Github</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios.js'
export default {
  data: () => {
    return {
      'name': 'shenke',
      'currentPage': 2
    }
  },
  created(){
    if (process.BROWSER_BUILD) {
      alert(123)
    }
  },
  asyncData ({ query }, callback) {
    callback(null, { 'name': query.a })
  },
  components: {
    Logo
  },
  methods: {
    getdata ({ store, params }) {
      return axios.get('/report/api/UserList.json')
      .then((res) => {
        console.log(res)
        //store.commit('increment', res.data)
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
