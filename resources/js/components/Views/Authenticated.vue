<template>
  <div>
    <v-row>
      <v-col cols="12" md="2">
        <v-card height="400" width="256" class="mx-auto">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  My Account
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <template v-for="item in items">
                <template
                  v-if="
                    in_array($store.state.Users.current_user.Role, item.access)
                  "
                >
                  <v-list-item
                    v-if="!item.isGroups"
                    :key="item.title"
                    :to="item.path"
                  >
                    <v-list-item-action>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-group
                    no-action
                    v-else
                    :key="item.title"
                    :prepend-icon="item.icon"
                  >
                    <template v-slot:activator>
                      <v-list-item>
                        <v-list-item-title>
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item>
                    </template>

                    <template v-for="(group, index) in item.groups">
                      <template
                        v-if="
                          in_array(
                            $store.state.Users.current_user.Role,
                            group.access
                          )
                        "
                      >
                        <v-list-item :key="index" :to="group.path">
                          <!-- <template> -->
                          <v-list-item-title>
                            {{ group.title }}
                          </v-list-item-title>
                          <v-list-item-action>
                            <v-icon>
                              {{ group.icon }}
                            </v-icon>
                          </v-list-item-action>
                          <!-- </template> -->
                        </v-list-item>
                      </template>
                      <v-divider
                        v-if="group.isdivide"
                        :key="group.title"
                      ></v-divider>
                    </template>
                  </v-list-group>
                </template>
              </template>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "authenticaed",
  data() {
    return {
      items: [
        {
          title: "Profile",
          icon: "mdi-account",
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
          isGroups: false,
        },
        {
          title: "Enrollment",
          icon: "mdi-account",
          path: "/my-enrollment",
          access: ["User"],
          isGroups: false,
        },
        {
          title: "Order",
          icon: "mdi-package-variant-closed",
          path: "/my-order",
          access: ["User"],
          isGroups: false,
        },
        {
          title: "Logout",
          icon: "mdi-logout",
          path: "/logout",
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
          isGroups: false,
        },
      ],
      right: null,
    };
  },

  methods: {
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
