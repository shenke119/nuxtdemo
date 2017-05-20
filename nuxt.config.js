module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: ['plugins/element-ui.js'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00f' },
  modules: ['nuxt-api'],
  /*
  ** Build configuration
  */
  build: {
    //publicPath: '/dist/_nuxt/',
    vendor: ['~plugins/element-ui.js'],
    babel: {
      "plugins": [["component", [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        }
      ]]]
    },
    extend (config, { dev , isServer}) {
      if (!isServer) {
        //config.entry.push('webpack/hot/dev-server');
        config.devServer= {
            hot: true, //开启HMR 热模块替换
            inline: true, //代码改动后刷新浏览器
            progress: true, //进度展示
            historyApiFallback: true,
            port: 3000,
            proxy: {
                '/*.json': {
                    target: 'http://localhost:8080',
                    secure: false
                },
                '/report/api/*.json': {
                    target: 'http://localhost:8080',
                    secure: false
                }
            }
        }
      } 
    }
  }
}
