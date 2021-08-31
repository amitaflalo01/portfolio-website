import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import MainLayout from "@/views/MainLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    meta: {
      title: "MainLayout",
    },
    component: MainLayout,
  },
  {
    path: "*",
    name: NotFound,
    meta: {
      title: "404",
    },
    component: NotFound,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = "Amit Aflalo | Personal Portfolio";
  }
});

export default router;
