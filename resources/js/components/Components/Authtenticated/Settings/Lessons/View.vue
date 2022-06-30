<template>
  <div>
    <manage_lessons v-if="$store.state.Lessons.lesson_open" />
    <manage_images v-if="$store.state.Lessons.lesson_upload_image" />
    <manage_prices v-if="$store.state.Lessons.lesson_price_open" />
    <manage_parameters v-if="$store.state.Lessons.lesson_parameter_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Lessons </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          @input="filter"
          label="Filter Lesson"
          class="mt-6"
          solo
          v-model="$store.state.Lessons.lesson_filter.filter"
        />
      </v-toolbar>

      <v-card
        :loading="$store.state.Lessons.loading"
        flat
      >
          <v-list two-line>
            <v-list-item>
            <v-list-item-avatar width="25%" class="font-weight-bold"
                ><p>Name</p></v-list-item-avatar
            >
            <v-list-item-avatar width="50%" class="font-weight-bold"
                >Description</v-list-item-avatar
            >
            <v-list-item-avatar width="5%" class="font-weight-bold"
                >Visible</v-list-item-avatar
            >
            <v-list-item-avatar width="20%"></v-list-item-avatar>
            </v-list-item>
            <v-divider></v-divider>
            <template v-for="(item, index) in $store.state.Lessons.lessons.data">
            <div :key="index">
                <v-list-item>
                <v-list-item-avatar tile height="80" width="25%">
                    <p>{{ item.classname }}</p>
                </v-list-item-avatar>
                <v-list-item-avatar
                    tile
                    height="80"
                    width="50%"
                    class="overflow-y-auto"
                >
                    <div v-html="item.classnotes"></div>
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="5%">
                    <p>{{ item.isVisible ? "Yes" : "No" }}</p>
                </v-list-item-avatar>

                <v-list-item-avatar tile height="80" width="20%">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        @click="edit(item.classid)"
                        v-on="on"
                        v-bind="attrs"
                        >
                        mdi-pencil
                        </v-icon>
                    </template>
                    <span> Edit {{ item.classname }} </span>
                    </v-tooltip>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        @click="upload_image(item.classid)"
                        v-on="on"
                        v-bind="attrs"
                        >
                        mdi-camera
                        </v-icon>
                    </template>
                    <span>
                        Manage image of
                        {{ item.classname | toUpper }}
                    </span>
                    </v-tooltip>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        @click="manage_prices(item.classid)"
                        v-on="on"
                        v-bind="attrs"
                        >
                        mdi-cart
                        </v-icon>
                    </template>
                    <span>
                        Manage prices of
                        {{ item.classname | toUpper }}
                    </span>
                    </v-tooltip>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        @click="manage_parameter(item.classid)"
                        v-on="on"
                        v-bind="attrs"
                        >
                        mdi-alpha-p-box-outline
                        </v-icon>
                    </template>
                    <span>
                        Set parameters of
                        {{ item.classname | toUpper }}
                    </span>
                    </v-tooltip>
                </v-list-item-avatar>
                </v-list-item>
                <v-divider></v-divider>
            </div>
            </template>
        </v-list>
      </v-card>
      <v-card-actions>
        <v-btn icon outlined class="error" dark x-large @click="add">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-pagination
          @input="channel"
          v-model="$store.state.Lessons.lessons.current_page"
          :length="$store.state.Lessons.lessons.last_page"
          :total-visible="$vuetify.breakpoint.mdAndUp ? 10 : 5"
        ></v-pagination>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "attendance-view",

  components: {
    manage_lessons: () => import("./Manage"),
    manage_images: () => import("./Images"),
    manage_prices: () => import("./Prices"),
    manage_parameters: () => import("./Parameters"),
  },

  created() {
    this.pagination();
  },

  methods: {
    pagination() {
        this.$store.commit('LESSON_LOADING', true)
      this.$store.dispatch("LESSONS", this.$store.state.Lessons.lesson_filter);
    },
    manage_parameter(e) {
      this.$store.dispatch("LESSON", e).then((result) => {
        this.$store.dispatch("LESSON_PARAMETERS", e);
        this.$store.commit("LESSON_PARAMETER_OPEN", true);
      });
    },

    manage_prices(e) {
      this.$store.dispatch("LESSON", e).then((result) => {
        this.$store.dispatch("LESSON_PRICES", e);
        this.$store.commit("LESSON_PRICE_OPEN", true);
      });
    },

    upload_image(e) {
      this.$store.dispatch("LESSON", e).then((result) => {
        this.$store.dispatch("LESSON_IMAGES", e);
        this.$store.commit("LESSON_UPLOAD_IMAGE", true);
      });
    },
    add() {
      var schedule = {
        categories: [],
        classTypes: "Child",
        classid: 0,
        classname: "",
        classnotes: "",
        color: "#000000",
        isVisible: 1,
        price: 0,
        xero: 230,
      };
      this.$store.dispatch("LESSON_CATEGORIES");
      this.$store.commit("LESSON", schedule);
      this.$store.commit("LESSON_OPEN", true);
    },

    edit(e) {
      this.$store.dispatch("LESSON", e).then((result) => {
        this.$store.dispatch("LESSON_CATEGORIES");
        this.$store.commit("LESSON_OPEN", true);
      });
    },

    filter(e) {
      if (e.length > 2) {
        var my_filter = {
          filter: e,
          page: 1,
          per_page: 10,
        };
        this.$store.commit("LESSON_FILTER", my_filter);
        this.$store.dispatch(
          "LESSON_FILTER",
          this.$store.state.Lessons.lesson_filter
        );
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Lessons.lessons.current_page,
          per_page: this.$store.state.Lessons.lessons.per_page,
        };
        this.$store.commit("LESSON_FILTER", filter);
        this.$store.dispatch(
          "LESSONS",
          this.$store.state.Lessons.lesson_filter
        );
      }
    },

    channel(e) {
        this.$store.commit('LESSON_LOADING', true)
      var filter = {
        filter: this.$store.state.Lessons.lesson_filter.filter,
        page: e,
        per_page: 10,
      };
      this.$store.commit("LESSON_FILTER", filter);
      if (this.$store.state.Lessons.lesson_filter.filter) {
        this.$store.dispatch(
          "LESSON_FILTER",
          this.$store.state.Lessons.lesson_filter
        );
      } else {
        this.$store.dispatch(
          "LESSONS",
          this.$store.state.Lessons.lesson_filter
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.v-list-item__subtitle,
.v-list-item__title {
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
}
</style>
