<template>
  <v-card class="mt-2">
    <my_terms />
    <v-card-text>
      <v-checkbox v-model="$store.state.Carts.sua_term" class="my-0">
        <template v-slot:label>
          I've read and accept the
          <v-btn
            @click="terms_condition"
            text
            class="text-none font-weight-bold"
          >
            Terms &amp; Conditions
          </v-btn>
        </template>
      </v-checkbox>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="success text-none"
        block
        :disabled="
          !$store.state.Carts.valid ||
          !$store.state.Carts.valid_details ||
          $store.state.Carts.carts.length == 0 ||
          !$store.state.Carts.sua_term
        "
        @click="go_to_telr"
        :loading="loading"
      >
        Proceed to checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "checkout-button",

  data() {
    return {
      loading: false,
    };
  },

  components: {
    my_terms: () => import("./Terms/tcs_terms_condition"),
  },

  methods: {
    terms_condition() {
      this.$store.commit("CHECKOUT_TERMS_OPEN", true);
    },
    go_to_telr() {
      this.loading = true;
      var total = {
        subtotal: this.subtotal,
        discount: this.discount,
        tax: this.tax,
        total: this.total,
      };
      this.$store
        .dispatch("CHECKOUT", {
          customer: this.$store.state.Carts.billing,
          products: this.$store.state.Carts.carts,
          total,
        })
        .then((result) => {
        //   console.log(result.data);
        localStorage.setItem("traesdhes", JSON.stringify(this.$store.state.Carts.carts));
      localStorage.setItem('is_credit', this.$store.state.Carts.parent.credit)
          localStorage.setItem("last_id", result.data.last_id);
          localStorage.setItem(
            "billing",
            JSON.stringify(this.$store.state.Carts.billing)
          );
          // window.location.href = '/success';
          window.location.href = result.data.telr;
          this.loading = false;
        })
        .catch((err) => {});
    },
  },

  computed: {
    subtotal() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.total_excl;
      }, 0);
    },

    tax() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.vat;
      }, 0);
    },

    discount() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.discount;
      }, 0);
    },

    total() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.total_incl;
      }, 0);
    },
  },
};
</script>
