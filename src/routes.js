import VueRouter from 'vue-router';
import App from './App';
import Foo from './components/Foo';
import Bar from './components/Bar';


export default new VueRouter({
  // routes选项配置路由表
  routes: [
    {
      path: "/foo",
      component: Foo
    }, {
      path: "/bar",
      component: Bar
    }]
})