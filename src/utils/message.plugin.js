export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      window.M.toast({ html: html })
    }

    Vue.prototype.$error = function(html) {
      window.M.toast({ html: `[Error]: ${html}` })
    }
  }
}
