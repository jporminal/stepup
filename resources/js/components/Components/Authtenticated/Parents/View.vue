<template>
  <div>
    <my_childs v-if="$store.state.Parents.parent_childs_open" />
    <new_child v-if="$store.state.Enrollments.enrollment_child_new" />
    <manage_parent v-if="$store.state.Parents.parent_open" />
    <v-card>
      <v-toolbar color="blue lighten-2 white--text" flat>
        <v-toolbar-title> Parents </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field class="mt-6" label="Filter Parent" @input="filter" solo />
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="$store.state.Parents.parents.data"
        :server-items-length="$store.state.Parents.parents.total"
        :loading="$store.state.Parents.parent_loading"
        :options.sync="options"
        :items-per-page="10"
        :footer-props="{
          'items-per-page-options': [10, 15, 20, -1],
          'items-per-page-text': 'Students per page',
          'show-current-page': true,
        }"
        :mobile-breakpoint="200"
      >
        <template v-slot:item.name="{ item }">
          {{ item.first_name | toUpper }} {{ item.family_name | toUpper }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="edit(item)" v-on="on" v-bind="attrs">
                mdi-pencil
              </v-icon>
            </template>
            <span> Edit </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="students(item)" v-on="on" v-bind="attrs">
                mdi-eye
              </v-icon>
            </template>
            <span> View Child </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="add(item)" v-on="on" v-bind="attrs">
                mdi-plus
              </v-icon>
            </template>
            <span> Add New Child </span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "parent-view",

  components: {
    my_childs: () => import("./Students"),
    new_child: () => import("../Enrollment/Add"),
    manage_parent: () => import("./Manage"),
  },

  data() {
    return {
      options: {},
      headers: [
        {
          text: "Name",
          value: "name",
          align: "center",
          sortable: false,
        },
        {
          text: "Contact",
          value: "contact",
          align: "center",
          sortable: false,
        },
        {
          text: "Email",
          value: "email",
          align: "center",
          sortable: false,
        },
        {
          text: "",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
    };
  },

  mounted() {
    this.pagination();
  },

  watch: {
    options: {
      handler(e) {
        const filter = {
          filter: this.$store.state.Parents.parent_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage,
        };
        this.$store.commit("PARENT_FILTER", filter);
        if (this.$store.state.Parents.parent_filter.filter) {
          this.$store.dispatch(
            "PARENT_FILTER",
            this.$store.state.Parents.parent_filter
          );
        } else {
          this.pagination();
        }
      },
      deep: true,
    },
  },

  methods: {
    edit(e) {
      this.$store
        .dispatch("GET_PARENT_ID", {
          email: e.email,
        })
        .then((result) => {
          this.$store.commit("PARENT_OPEN", true);
        });
    },
    students(e) {
      this.$store
        .dispatch("GET_PARENT_ID", {
          email: e.email,
        })
        .then((result) => {
          this.$store.dispatch("GET_CHILD", result.data.mid);
        });
    },

    add(e) {
      this.$store
        .dispatch("GET_PARENT_ID", {
          email: e.email,
        })
        .then((result) => {
          var form = {
            mid: result.data.mid,
            child: {
              first_name: null,
              family_name: null,
              gender: "Male",
              dob: new Date().toISOString().substr(0, 10),
              nationality: null,
            },
            medical: {
              allergies: false,
              textallergies: null,
              respiratory: false,
              textrespiratory: null,
              physical: false,
              textphysical: null,
              vision: false,
              textvision: null,
              hearing: false,
              texthearing: null,
              otherhealth: false,
              textotherhealth: null,
            },
            prescription: {
              antiseptic: true,
              textantiseptic: null,
              plasters: true,
              textplasters: null,
              insectbite: true,
              textinsectbite: null,
              firstaid: true,
              textfirstaid: null,
              calpol: true,
              textcalpol: null,
              ice: true,
              textice: null,
            },
          };
          this.$store.commit("ENROLLMENT_CHILD", form),
            this.$store.commit("ENROLLMENT_CHILD_NEW", true);
        });
    },
    filter(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: this.$store.state.Parents.parents.current_page,
          per_page: this.$store.state.Parents.parents.per_page,
        };
        this.$store.commit("PARENT_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10,
        };
        this.$store.commit("PARENT_LOADING", true);
        this.$store.dispatch(
          "PARENT_FILTER",
          this.$store.state.Parents.parent_filter
        );
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Parents.parents.current_page,
          per_page: this.$store.state.Parents.parents.per_page,
        };
        this.$store.commit("PARENT_FILTER", filter);
        this.pagination();
      }
    },
    pagination() {
      this.$store.commit("PARENT_LOADING", true);
      this.$store.dispatch("PARENTS", this.$store.state.Parents.parent_filter);
    },
  },
};
</script>
