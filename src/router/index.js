import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/views/HelloWorld.vue";
import TaskList from "@/views/TaskList.vue";
import TaskLog from "@/views/TaskLog.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/list", component: TaskList },
    { path: "/log", component: TaskLog },
  ],
});
