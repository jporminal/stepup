<template>
  <div>
    <my_edit v-if="$store.state.Enrollments.enrollment_child_edit" />
    <my_new v-if="$store.state.Enrollments.enrollment_child_new" />
    <my_enroll v-if="$store.state.Enrollments.get_enrollment_open" />
    <v-card flat>
      <v-card-title>
        <v-subheader class="title"> Mom's Information </v-subheader>
      </v-card-title>
      <v-card-text class="ml-4">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <p>
                First Name:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.mom.motherfirstname
                      | toUpper
                  }}
                </span>
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Family Name:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.mom.motherlastname | toUpper
                  }}
                </span>
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Email Address:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.mom.motheremailaddress
                      | toUpper
                  }}
                </span>
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Contact Number:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.mom.motherhomenumber
                      | toUpper
                  }}
                </span>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-title>
        <v-subheader class="title"> Dad's Information </v-subheader>
      </v-card-title>
      <v-card-text class="ml-4">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <p>
                First Name:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.dad.fatherfirstname
                      | toUpper
                  }}
                </span>
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Family Name:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.dad.fatherlastname | toUpper
                  }}
                </span>
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Email Address:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.dad.fatheremailaddress
                      | toUpper
                  }}
                </span>
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Contact Number:
                <span class="font-weight-bold">
                  {{
                    $store.state.Enrollments.parent.dad.fatherhomenumber
                      | toUpper
                  }}
                </span>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="$store.state.Enrollments.parent.children.data"
          :server-items-length="$store.state.Enrollments.parent.children.total"
          :items-per-page="15"
          :options.sync="options"
          :footer-props="{
            'items-per-page-options': [15, 20, 25],
            'items-per-page-text': 'Categories per page',
            'show-current-page': true,
            'show-first-last-page': true,
          }"
          :mobile-breakpoint="200"
          class="elevation-1"
        >
          <template v-slot:item.name="{ item }">
            {{ item.firstname | toUpper }}
            {{ item.lastname | toUpper }}
          </template>

          <template v-slot:item.dob="{ item }">
            {{ item.dateofbirth | date }}
          </template>

          <template v-slot:item.actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="yellow"
                  @click="edit(item.cid)"
                  v-on="on"
                  v-bind="attrs"
                >
                  mdi-pencil
                </v-icon>
              </template>
              <span> Edit {{ item.firstname | toUpper }} </span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="blue"
                  @click="sendform(item.cid)"
                  v-on="on"
                  v-bind="attrs"
                >
                  mdi-form-select
                </v-icon>
              </template>
              <span>
                Send enrollment form of {{ item.firstname | toUpper }}
              </span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="green"
                  @click="view_enrollment(item.cid)"
                  v-on="on"
                  v-bind="attrs"
                >
                  mdi-notebook-check
                </v-icon>
              </template>
              <span> View schedule of {{ item.firstname | toUpper }} </span>
            </v-tooltip>
          </template>

          <template v-slot:top>
            <v-toolbar color="blue lighten-2" dark flat>
              <v-toolbar-title> My Child </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn class="indigo text-none" dark @click="add">
                <v-icon> mdi-plus </v-icon> Add child
              </v-btn>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "enrollment-view",

  components: {
    my_edit: () => import("./Edit"),
    my_new: () => import("./Add"),
    my_enroll: () => import("./Enrolled"),
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
          text: "Gender",
          value: "gender",
          align: "center",
          sortable: false,
        },
        {
          text: "Date of Birth",
          value: "dob",
          align: "center",
          sortable: false,
        },
        {
          text: "Nationality",
          value: "nationality",
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

  watch: {
    options: {
      handler(e) {
        const filter = {
          page: e.page,
          per_page: e.itemsPerPage,
        };
        this.$store.commit("ENROLLMENT_PAGINATE", filter);
        this.pagination();
      },
      deep: true,
    },
  },

  methods: {
    pagination() {
      this.$store.dispatch("PARENT", this.$store.state.Enrollments.paginate);
    },

    edit(e) {
      this.$store
        .dispatch("ENROLLMENT_CHILD", e)
        .then((result) => {
          this.$store.commit("ENROLLMENT_CHILD_EDIT", true);
        })
        .catch((err) => {});
    },

    add() {
      var form = {
        mid: this.$store.state.Enrollments.parent.mom.mid,
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
    },

    view_enrollment(e) {
      this.$store.dispatch("GET_ENROLLMENT", e);
    },

    sendform(e) {
      this.$store
        .dispatch("ENROLLMENT_CHILD", e)
        .then((result) => {
          this.send_mail_to_reception();
        })
        .catch((err) => {});
    },

    send_mail_to_reception() {
      Email.send({
        SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
        To: "info@stepup.ae",
        From: this.$store.state.Enrollments.parent.mom.motheremailaddress,
        Subject: `Enrollment Form - ${this.$store.state.Enrollments.enrollment_child.child.firstname} ${this.$store.state.Enrollments.enrollment_child.child.lastname}`,
        Body: `
            <div style="margin: 0; padding: 0;">
                <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                            <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                            <h1 style="color:#000">StepUp Academy</h1>
                            <h3>Enrollment Form</h3>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                            <h4 align="center"> Children Information</h4>
                            <table border="1" cellpadding="0" cellspacing="0" width="100%" >
                                <tr>
                                    <td width="20%">Name</td>
                                    <td> ${this.$store.state.Enrollments.enrollment_child.child.firstname} ${this.$store.state.Enrollments.enrollment_child.child.lastname} </td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td> ${this.$store.state.Enrollments.enrollment_child.child.dateofbirth} </td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td> ${this.$store.state.Enrollments.enrollment_child.child.gender} </td>
                                </tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td> ${this.$store.state.Enrollments.enrollment_child.child.nationality} </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">
                            <h4 align="center"> Parent Information</h4>
                            <h5>Mother Info</h5>
                            <table border="1" cellpadding="0" cellspacing="0" width="100%" >
                                <tr>
                                    <td width="20%">Name</td>
                                    <td> ${this.$store.state.Enrollments.parent.mom.motherfirstname} ${this.$store.state.Enrollments.parent.mom.motherlastname} </td>
                                </tr>
                                <tr>
                                    <td>Email Address</td>
                                    <td> ${this.$store.state.Enrollments.parent.mom.motheremailaddress} </td>
                                    <td>Home Number</td>
                                    <td> ${this.$store.state.Enrollments.parent.mom.motherhomenumber} </td>
                                </tr>
                                <tr>
                                    <td>Mobile Number</td>
                                    <td> ${this.$store.state.Enrollments.parent.mom.mothermobilenumber} </td>
                                    <td>Work Number</td>
                                    <td> ${this.$store.state.Enrollments.parent.mom.motherworknumber} </td>
                                </tr>
                                <tr>
                                    <td>Company</td>
                                    <td> ${this.$store.state.Enrollments.parent.mom.mothercompany} </td>
                                    <td>Nationality</td>
                                    <td> ${this.$store.state.Enrollments.parent.mom.mothernationality} </td>
                                </tr>
                            </table>
                            <h5>Father Info</h5>
                            <table border="1" cellpadding="0" cellspacing="0" width="100%" >
                                <tr>
                                    <td width="20%">Name</td>
                                    <td> ${this.$store.state.Enrollments.parent.dad.fatherfirstname} ${this.$store.state.Enrollments.parent.dad.fatherlastname} </td>
                                </tr>
                                <tr>
                                    <td>Email Address</td>
                                    <td> ${this.$store.state.Enrollments.parent.dad.fatheremailaddress} </td>
                                    <td>Home Number</td>
                                    <td> ${this.$store.state.Enrollments.parent.dad.fatherhomenumber} </td>
                                </tr>
                                <tr>
                                    <td>Mobile Number</td>
                                    <td> ${this.$store.state.Enrollments.parent.dad.fathermobilenumber} </td>
                                    <td>Work Number</td>
                                    <td> ${this.$store.state.Enrollments.parent.dad.fatherworknumber} </td>
                                </tr>
                                <tr>
                                    <td>Company</td>
                                    <td> ${this.$store.state.Enrollments.parent.dad.fathercompany} </td>
                                    <td>Nationality</td>
                                    <td> ${this.$store.state.Enrollments.parent.dad.fathernationality} </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">
                                        &copy; StepUp Academy<br/>
                                        <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;">
                                        <font color="#000">info@stepup.ae</font></a>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <a href="https://www.instagram.com/step_up_academy/" target="_blank">
                                                        <img src="https://stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank">
                                                        <img src="https://stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            `,
      }).then((result) => {
        var snackbar = {
          snackbar: true,
          vertical: false,
          timeout: 2000,
          color: "blue lighten-2",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Enrollment form successfully send",
        };
        this.$store.commit("SNACKBAR", snackbar);
        this.$store.commit("ENROLLMENT_CHILD", {});
      });
    },
  },
};
</script>
