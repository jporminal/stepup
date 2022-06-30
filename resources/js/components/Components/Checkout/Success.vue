<template>
  <div>
    <v-card flat>
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="display-2 text-center">Successful Payment</div>
          </v-col>
          <v-col cols="12">
            <div class="body-2 text-center">
              {{ message }}
              <v-progress-circular
                indeterminate
                v-if="!is_finish"
                color="primary"
              ></v-progress-circular>
              <v-icon v-if="is_finish" color="green" large
                >mdi-check-bold</v-icon
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "checkout-success",

  created() {
    this.init();
  },

  data() {
    return {
      is_finish: false,
      message: "Please wait. You will receive you e-receipt in a few moment.",
      student: [],
    };
  },

  methods: {
    init() {
      var last_id = localStorage.getItem("last_id");
      var camps_form = JSON.parse(localStorage.getItem("camp_form"));
      var cart_id = this.$route.query.cart_id;
      var total = {
        subtotal: this.subtotal,
        tax: this.tax,
        discount: this.discount,
        total: this.total,
      };
      var student = this.sua_receipt(
        last_id,
        this.$store.state.Carts.carts,
        this.$store.state.Carts.billing,
        total
      );
    },

    update_checkout(student) {
      var last_id = localStorage.getItem("last_id");
      var camps_form = JSON.parse(localStorage.getItem("camp_form"));
      var cart_id = this.$route.query.cart_id;
      var total = {
        subtotal: this.subtotal,
        tax: this.tax,
        discount: this.discount,
        total: this.total,
      };
      this.$store
        .dispatch("UPDATE_CHECKOUT", {
          last_id,
          total,
          cart_id,
          customer: this.$store.state.Carts.billing,
          products: this.$store.state.Carts.carts,
        })
        .then((result) => {
          this.message = "Thank you for your transaction.";
          this.is_finish = true;
          this.$store.commit("CART_APPEND", []);
          localStorage.removeItem("children");
          localStorage.removeItem("traesdhes");
          localStorage.removeItem("billing");
          localStorage.removeItem("last_id");
          localStorage.removeItem("parent");
          localStorage.removeItem("camp_form");
          // localStorage.removeItem("is_credit");
        });
    },
    sua_receipt(lastid, products, customer, total) {
        this.update_checkout(this.student);
        return this.student;
    },

    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
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

    is_camps() {
      var camps = this.$store.state.Carts.carts.filter((cart) => {
        return cart.type == "Camps";
      });

      return camps.length;
    },
  },
};
</script>
