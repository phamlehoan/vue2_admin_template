import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/layout/IndexContainer.vue"),
    name: "Trang chủ",
    children: [
      {
        path: "/home",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "manage",
        name: "Manage 1",
        component: {
          render(c: any) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "one",
          },
          {
            path: "group/groupAdd",
            name: "Manage 1 New",
          },
          {
            path: "group/groupEdit",
            name: "Manage 1 Edit",
            props: true,
          },
        ],
      },
      {
        path: "manage",
        component: {
          render(c: any) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "two",
            name: "Manage 2",
          },
        ],
      },
      {
        path: "manage",
        component: {
          render(c: any) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "three",
            name: "Manage 3",
          },
        ],
      },
      {
        path: "manage",
        name: "Manage 4",
        component: {
          render(c: any) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "four-one",
            name: "Manage 4.1",
          },
          {
            path: "four-two",
            name: "Manage 4.2",
          },
          {
            path: "four-three",
            name: "Manage 4.3",
          },
          {
            path: "four-four",
            name: "Manage 4.4",
            component: {
              render(c: any) {
                return c("router-view");
              },
            },
            children: [
              {
                path: "four-four-one",
                name: "Manage 4.4.1",
              },
              {
                path: "four-four-two",
                name: "Manage 4.4.2",
              },
              {
                path: "four-four-three",
                name: "Manage 4.4.3",
              },
            ],
          },
        ],
      },
      {
        path: "manage",
        name: "Manage 5",
        component: {
          render(c: any) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "five-one",
            name: "Manage 5.1",
          },
          {
            path: "five-two",
            name: "Manage 5.2",
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
  routes,
});

export default router;
