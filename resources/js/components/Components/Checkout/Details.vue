<template>
  <div>
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title> Billing Address </v-toolbar-title>
      </v-toolbar>
      <v-form ref="form" v-model="$store.state.Carts.valid_details">
        <v-card-text>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6">
              <v-text-field
                label="First name"
                v-model="billing.first_name"
                :rules="[(v) => !!v || 'First name is required']"
                append-icon="*"
                @input="bill"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Family name"
                v-model="billing.family_name"
                :rules="[(v) => !!v || 'Family name is required']"
                append-icon="*"
                @input="bill"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Phone"
                v-model.number="billing.phone"
                :rules="[(v) => !!v || 'Phone is required']"
                append-icon="*"
                @input="bill"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Email Address"
                v-model="billing.email"
                :rules="[
                  (v) => !!v || 'Email is Required',
                  (v) => /.+@.+/.test(v) || 'E-mail must be valid',
                ]"
                append-icon="*"
                @input="bill"
              />
            </v-col>
            <v-col cols="12">
              <v-subheader class="title"> Address </v-subheader>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="billing.country"
                :items="countries"
                label="Country"
                @change="bill"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="billing.town"
                :items="towns"
                label="Town"
                @change="bill"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="billing.street"
                label="Street"
                :rules="[(v) => !!v || 'Street is required']"
                append-icon="*"
                @input="bill"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="billing.apartment"
                label="Apartment, suite, unit, etc."
                hint="(optional)"
                persistent-hint
                @input="bill"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="billing.notes"
                label="Notes"
                hint="(Please put your child(s) name here and class he/she will be attending/ Notes)"
                persistent-hint
                @input="bill"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "checkout-details",

  data() {
    return {
      countries: ["United Arab Emirates"],
      towns: [
        "Abu Dhabi",
        "Ajman",
        "Dubai",
        "Fujairah",
        "Ras Al-Khaimah",
        "Sharjah",
        "Umm Al-Quwain",
      ],
    };
  },

  methods: {
    bill() {
      this.$store.commit("CHECKOUT_BILLING", this.$store.state.Carts.billing);
    },
  },

  computed: {
    billing() {
      var billing = {
        mid: this.$store.state.Carts.parent.mid,
        first_name: this.$store.state.Carts.parent.motherfirstname,
        family_name: this.$store.state.Carts.parent.motherlastname,
        phone: this.$store.state.Carts.parent.motherhomenumber,
        email: this.$store.state.Carts.parent.motheremailaddress,
        country: "United Arab Emirates",
        town: "Dubai",
        street: "",
        apartment: "",
        notes: "",
      };
      this.$store.commit("CHECKOUT_BILLING", billing);
      return billing;
    },

    is_product() {
      var camps = this.$store.state.Carts.carts.filter((cart) => {
        return cart.type == "Product";
      });

      return camps.length;
    },
  },
};
</script>
