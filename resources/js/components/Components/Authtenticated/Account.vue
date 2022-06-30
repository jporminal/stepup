<template>
  <v-container>
    <snackbar />
    <v-row align="center" justify="center">
      <v-col cols="10">
        <basic_information />
      </v-col>
      <v-col cols="10">
        <address_information />
      </v-col>
      <v-col cols="10">
        <about_information />
      </v-col>
      <v-col cols="10">
        <password_profile_information />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "my-account",

  components: {
    basic_information: () => import("./Accounts/Basic_Information"),
    address_information: () => import("./Accounts/Address_Information"),
    about_information: () => import("./Accounts/About_Information"),
    password_profile_information: () =>
      import("./Accounts/Password_Profile_Information"),
    snackbar: () => import("../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Profiles",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
