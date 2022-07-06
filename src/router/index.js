import Vue from "vue";
import Router from "vue-router";
import TaskList from "@/views/TaskList.vue";
import TaskLog from "@/views/TaskLog.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: TaskList },
    { path: "/log", component: TaskLog },
  ],
});
