<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="3" class="d-print-none">
        <v-card height="100%" class="mx-auto" flat>
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
      <v-col cols="12" md="8">
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
          title: "Schedules",
          icon: "mdi-calendar",
          path: "/sams-schedule",
          access: [
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
          title: "Customer",
          icon: "mdi-account-group",
          path: "#",
          access: ["Admin", "Reception", "Manager", "PA"],
          isGroups: true,
          groups: [
            {
              title: "Students",
              icon: "",
              path: "/sams-students",
              access: ["Admin", "Manager", "Reception", "PA"],
              isdivide: false,
            },
            {
              title: "Parents",
              icon: "",
              path: "/sams-parents",
              access: ["Admin", "Manager", "Reception", "PA"],
              isdivide: false,
            },
          ],
        },

        {
          title: "Staffs",
          icon: "mdi-account-network",
          path: "/sams-staff",
          access: ["Admin", "Reception", "Manager"],
          isGroups: false,
        },
        {
          title: "Attendance",
          icon: "mdi-notebook-multiple",
          path: "/sams-attendance",
          access: ["Admin", "Reception", "Manager", "Teacher", "PA"],
          isGroups: false,
        },
        {
          title: "Download Attendance",
          icon: "mdi-notebook-outline",
          path: "/sams-attendance-download",
          access: ["Admin", "Reception", "Manager", "PA"],
          isGroups: false,
        },
        {
          title: "Email Parents",
          icon: "mdi-email",
          path: "/sams-send-email",
          access: ["Admin", "Reception", "Manager"],
          isGroups: false,
        },

        {
          title: "Reports",
          icon: "mdi-file-eye",
          path: "#",
          access: ["Admin", "Manager", "Kups", "Teacher", "PA", "Reception"],
          isGroups: true,
          groups: [
            {
              title: "Class Information",
              icon: "",
              path: "/sams-reports-class-infomation",
              access: ["Admin", "Manager", "Kups", "Teacher", "PA", "Reception"],
              isdivide: false,
            },
            {
              title: "Number of Students",
              icon: "",
              path: "/sams-reports-number-of-students",
              access: ["Admin", "Manager", "Kups", "PA", "Reception"],
              isdivide: false,
            },
            {
              title: "Payment by Schedules",
              icon: "",
              path: "/sams-reports-payment-by-schedules",
              access: ["Admin", "Manager", "Kups", "PA", "Reception"],
              isdivide: false,
            },
            {
              title: "Payment by Lesson",
              icon: "",
              path: "/sams-reports-payment-by-lesson",
              access: ["Admin", "Manager", "Kups", "PA"],
              isdivide: false,
            },
            {
              title: "Product Sales",
              icon: "",
              path: "/sams-reports-payment-by-product-sales",
              access: ["Admin", "Manager", "Kups", "PA"],
              isdivide: false,
            },
            {
              title: "Sales By Teacher",
              icon: "",
              path: "/sams-teacher-reports",
              access: ["Admin", "Manager", "Kups", "PA"],
              isdivide: false,
            },
            {
              title: "Product Reports",
              icon: "",
              path: "/sams-product-reports",
              access: ["Admin", "Manager", "Kups", "PA"],
              isdivide: false,
            },
            {
              title: "Service Reports",
              icon: "",
              path: "/sams-service-reports",
              access: ["Admin", "Manager", "Kups", "PA"],
              isdivide: false,
            },
            {
              title: "Location Reports",
              icon: "",
              path: "/sams-location-reports",
              access: ["Admin", "Manager", "Kups", "PA"],
              isdivide: false,
            },
            {
              title: "Other Services Reports",
              icon: "",
              path: "/sams-other-services-reports",
              access: ["Admin", "Manager", "Kups", "PA"],
              isdivide: false,
            },
          ],
        },
        {
          title: "Receipts",
          icon: "mdi-receipt",
          path: "/sams-receipts",
          access: ["Admin", "Reception", "Manager"],
          isGroups: false,
        },
        {
          title: "Settings",
          icon: "mdi-cog",
          path: "#",
          access: ["Admin", "Reception", "Manager", "PA"],
          isGroups: true,
          groups: [
            {
              title: "Schedules",
              icon: "",
              path: "/sams-schedules",
              access: ["Admin", "Manager", "Reception", "PA"],
              isdivide: false,
            },
            {
              title: "Lessons",
              icon: "",
              path: "/sams-lessons",
              access: ["Admin", "Manager", "Reception", "PA"],
              isdivide: false,
            },
            {
              title: "Locations",
              icon: "",
              path: "/sams-locations",
              access: ["Admin", "Manager", "Reception", "PA"],
              isdivide: false,
            },
            {
              title: "Date Ranges",
              icon: "",
              path: "/sams-date-ranges",
              access: ["Admin", "Manager", "Reception", "PA"],
              isdivide: false,
            },
            {
              title: "Weekdays",
              icon: "",
              path: "/sams-week-days",
              access: ["Admin", "Manager", "Reception", "PA"],
              isdivide: false,
            },
            {
              title: "Store Setup",
              icon: "",
              path: "/sams-store-setup",
              access: ["Admin"],
              isdivide: false,
            },
            {
              title: "Xero",
              icon: "",
              path: "/sams-xero",
              access: ["Admin"],
              isdivide: false,
            },
          ],
        },

        {
          title: "Logout",
          icon: "mdi-logout",
          path: "/logout",
          access: [
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
