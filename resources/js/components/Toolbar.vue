<template>
  <div>
    <v-app-bar
      v-scroll="onScroll"
      app
      extended
      extension-height="15"
      :dark="$route.name == 'Home' && !is_scrolling"
      :prominent="$route.name == 'Home' && !is_scrolling"
      elevate-on-scroll
      :color="
        !is_scrolling && $route.name == 'Home'
          ? 'transparent'
          : 'grey lighten-4'
      "
    >
      <template>
        <!-- logo  -->
        <v-img
          v-if="$vuetify.breakpoint.mdAndUp"
          class="shrink ml-12 mt-5"
          :max-width="$route.name == 'Home' && !is_scrolling ? '10%' : '5%'"
          style="cursor: pointer"
          src="img/logoStepUp.png"
          @click="go_back_home"
        />

        <v-avatar
          v-else
          color="grey lighten-4"
          class="ml-5"
          size="80"
          @click="go_back_home"
        >
          <img class="shrink" src="img/logoStepUp.png" alt="Stepup Academy" />
        </v-avatar>
      </template>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <!-- global menus -->
        <template v-for="(item, index) in items">
          <div :key="index">
            <v-btn
              v-if="!item.isDropdown"
              class="text-capitalize subtitle-1 mx-1"
              :dark="$route.name == 'Home' && !is_scrolling"
              text
              :to="item.to"
            >
              {{ item.text }}
            </v-btn>

            <v-menu v-else open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  class="text-capitalize subtitle-1 mx-1"
                  :dark="$route.name == 'Home' && !is_scrolling"
                  text
                  v-on="on"
                >
                  {{ item.text }}
                </v-btn>
              </template>

              <v-list>
                <template v-for="(submenu, i) in item.submenus">
                  <div :key="i">
                    <v-list-item v-if="!submenu.tohref" :to="submenu.to">
                      <v-list-item-title>
                        {{ submenu.text }}
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="submenu.tohref" :href="submenu.to">
                      <v-list-item-title>
                        {{ submenu.text }}
                      </v-list-item-title>
                    </v-list-item>
                  </div>
                </template>
              </v-list>
            </v-menu>
          </div>
        </template>
        <!-- unauthenticated menu -->
        <getting_started
          :scroller="is_scrolling"
          v-if="!$store.state.Users.token"
        />
        <!-- authenticated menu -->
        <template v-if="$store.state.Users.token">
          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                class="text-none"
                :dark="$route.name == 'Home' && !is_scrolling"
                v-on="on"
                text
              >
                Welcome back
                {{ $store.state.Users.current_user.first_name }}!
              </v-btn>
            </template>

            <v-list>
              <template v-for="auth in authenticateds">
                <div :key="auth.title">
                  <v-list-item
                    :to="auth.path"
                    v-if="
                      in_array(
                        $store.state.Users.current_user.Role,
                        auth.access
                      )
                    "
                  >
                    <v-list-item-title>
                      {{ auth.title }}
                    </v-list-item-title>
                  </v-list-item>
                </div>
              </template>
            </v-list>
          </v-menu>
        </template>
        <v-btn text to="/cart" class="mt-4">
          <v-badge left overlap :value="$store.state.Carts.carts.length">
            <template v-slot:badge>
              <span v-if="$store.state.Carts.carts.length > 0">
                {{ $store.state.Carts.carts.length }}
              </span>
            </template>
            Cart
            <v-icon large color="grey lighten-1"> mdi-cart </v-icon>
          </v-badge>
        </v-btn>
      </template>
      <template v-else>
        <v-btn to="/cart" icon>
          Cart
          <v-badge left overlap :value="$store.state.Carts.carts.length">
            <template v-slot:badge>
              <span v-if="$store.state.Carts.carts.length > 0">
                {{ $store.state.Carts.carts.length }}
              </span>
            </template>
            <v-icon large color="grey lighten-1"> mdi-cart </v-icon>
          </v-badge>
        </v-btn>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndDown"
      v-model="drawer"
      app
      clipped
    >
      <template v-if="$store.state.Users.token">
        <v-list class="pa-1" dense>
          <v-list-item>
            <v-list-item-avatar>
              <img
                :src="`/${$store.state.Users.current_user.thumbnail.meta_value}`"
              />
            </v-list-item-avatar>
            <v-list-item-title>
              Welcome
              {{ $store.state.Users.current_user.first_name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
      <v-list color="transparent" dense>
        <template v-for="(item, i) in items">
          <div :key="i">
            <v-list-item v-if="!item.isDropdown" @click="goHome(item.to)">
              <v-list-item-title v-text="item.text" />
            </v-list-item>
            <v-list-group v-else>
              <template v-slot:activator>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </template>
              <template v-for="(submenu, index) in item.submenus">
                <div :key="index">
                  <v-list-item v-if="!submenu.tohref" :to="submenu.to">
                    <v-list-item-title>{{ submenu.text }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="submenu.tohref" :href="submenu.to">
                    <v-list-item-title>{{ submenu.text }}</v-list-item-title>
                  </v-list-item>
                </div>
              </template>
            </v-list-group>
          </div>
        </template>
      </v-list>
      <template v-if="!$store.state.Users.token">
        <getting_started />
        <!-- <v-list dense>
                    <template v-for="unauthenticated in unauthenticateds">
                        <div :key="unauthenticated.title">
                            <v-list-item :to="unauthenticated.path">
                                <v-list-item-title>{{
                                    unauthenticated.title
                                }}</v-list-item-title>
                            </v-list-item>
                        </div>
                    </template>
                </v-list> -->
      </template>
      <template v-if="$store.state.Users.token">
        <v-list dense>
          <template v-for="authenticated in authenticateds">
            <div :key="authenticated.title">
              <v-list-item
                :to="authenticated.path"
                v-if="
                  in_array(
                    $store.state.Users.current_user.Role,
                    authenticated.access
                  )
                "
              >
                <v-list-item-title>{{ authenticated.title }}</v-list-item-title>
              </v-list-item>
            </div>
          </template>
        </v-list>
      </template>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "tool-bar",

  components: {
    getting_started: () => import("./startup/New"),
  },

  data() {
    return {
      drawer: null,
      is_scrolling: false,
      count: 0,
      items: [
        {
          to: { path: "/", hash: "#contactus" },
          text: "Contact Us",
          isDropdown: false,
        },
        {
          to: "/meet-the-team",
          text: "Meet The Team",
          isDropdown: false,
        },
        {
          to: "/camps",
          text: "Camps",
          isDropdown: false,
        },
        {
          to: "/#",
          text: "Schedules & Info",
          isDropdown: true,
          submenus: [
            {
              to: "/schedules-locations",
              text: "Schedules",
              tohref: false,
            },
            {
              to: "/class-information",
              text: "Class Information",
              tohref: false,
            },
          ],
        },
        {
          to: "#",
          text: "Forms",
          isDropdown: true,
          submenus: [
            {
              to: "enrollment-form",
              text: "Enrollment Form",
              tohref: true,
            },
            {
              to: "trial-form",
              text: "Trial Form",
              tohref: true,
            },
          ],
        },
        {
          to: "#",
          text: "Shop",
          isDropdown: true,
          submenus: [
            {
              to: "/shop-uniforms",
              text: "Uniforms",
              tohref: true,
            },
            {
              to: "/shop-studio",
              text: "Motor City",
              tohref: true,
            },
            {
              to: "/shop-repton-al-barsha",
              text: "Repton Al Barsha",
              tohref: true,
            },
            {
              to: "/shop-spring-souq",
              text: "Springs Souk",
              tohref: true,
            },
            {
              to: "/shop-victory-heights-primary-school",
              text: "Victory Heights",
              tohref: true,
            },
            {
              to: "/shop-camps",
              text: "Midterm Camps",
              tohref: true,
            },
          ],
        },
      ],
      authenticateds: [
        {
          title: "My Account",
          icon: "",
          path: "/my-account",
          access: [
            "User",
            "Admin",
            "Reception",
            "Manager",
            "Accounts",
            "Teacher",
            "Kups",
            "PA",
          ],
        },
        {
          title: "SAMS",
          icon: "",
          path: "/sams-schedule",
          access: ["Admin", "Reception", "Manager", "Teacher", "Kups", "PA"],
        },
        {
          title: "Logout",
          icon: "fa-sign-in-alt",
          path: "/logout",
          access: [
            "User",
            "Admin",
            "Reception",
            "Manager",
            "Accounts",
            "Kups",
            "Teacher",
            "PA",
          ],
        },
      ],
      unauthenticateds: [
        { title: "Login", icon: "", path: "/login" },
        { title: "Register", icon: "", path: "/register" },
      ],
    };
  },

  methods: {
    onScroll() {
      this.is_scrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 20;
    },

    go_back_home() {
      this.$router.push("/");
    },

    in_array(value, arr) {
      var status = false;

      for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
          status = true;
          break;
        }
      }

      return status;
    },
  },
};
</script>
