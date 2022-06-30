<template>
  <v-card flat>
    <snackbar />
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-card flat>
            <v-img
              src="/img/camps/winter/2021/sports-winter-camps.jpg"
              alt="Sports Winter camps"
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="7" lg="5">
          <p class="display-1">Sports Winter Camp</p>
          <p class="title">7yrs - 15yrs</p>
          <v-select
            label="Select Age"
            :items="$store.state.winter.winter_camps"
            v-model="$store.state.winter.winter_workshop_filter.service_id"
            @change="selected_age"
            item-value="id"
            item-text="product"
            solo
            disable-lookup
            return-object
          />
          <v-select
            label="Select Option"
            v-if="$store.state.winter.winter_workshop_filter.service_id.id > 0"
            :items="options"
            v-model="$store.state.winter.winter_workshop_filter.stat"
            @change="selected_age"
            solo
            disable-lookup
            return-object
          />
            <div :class="$vuetify.breakpoint.mdAndUp ? 'd-flex flex-row justify-md-space-between flex-wrap' : ''">

                <v-checkbox
                v-for="(item, index) in $store.state.winter.winter_workshop_prices"
                :key="index"
                :value="item"
                v-model="$store.state.winter.winter_workshop_selected"
                hide-details
                multiple
                >
                  <template v-slot:label>
                      <table width="100%">
                        <tr>
                          <td width="60%">
                            {{ item.serviceName }}
                          </td>
                          <td width="40%">
                            <v-combobox
                              class="quantity"
                                :items="getQty(item.quantity)"
                                v-model="item.qty"
                                label="Quantity"
                                hide-details
                            ></v-combobox>
                          </td>
                        </tr>
                      </table>
                  </template>
                </v-checkbox>

            </div>
          <v-btn
            :disabled="
              $store.state.winter.winter_workshop_selected.length > 0
                ? false
                : true
            "
            class="text-none primary"
            large
            @click="add_to_cart"
          >
            Add to Cart
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "winter-multi-skills",

  components: {
    snackbar: () => import("../../../Snackbar/Global_view"),
  },

  data() {
    return {
      qty: 1,
      options: ["Daily", "Weekly", "Full Term"],
    };
  },

  created() {
    this.filter();
  },

  methods: {
    filter() {
      var class_ids = {
        class_ids: "sports",
      };
      this.$store.dispatch("WINTER_CAMPS", class_ids);
    },

    selected_age(e) {
      this.$store.commit(
        "WINTER_WORKSHOP_FILTER",
        this.$store.state.winter.winter_workshop_filter
      );

      this.$store.commit("WINTER_WORKSHOP_PRICES", {});
      this.$store.commit("WINTER_WORKSHOP_SELECTED", []);
      this.$store.dispatch(
        "WINTER_WORKSHOP_FILTER",
        this.$store.state.winter.winter_workshop_filter
      );
    },

    getQty(e) {
        var qty = []
        for(var i = 0; i < e; i++) {
            qty.push(i + 1)
        }
        return qty;
    },

    add_to_cart() {
      this.$store.state.winter.winter_workshop_selected.forEach((product) => {

            var quantity = product.qty;
            var price = product.price;
            var price_excl = price / 1.05;
            var total_incl = quantity * price;
            var total_excl = total_incl / 1.05;
            var vat = total_excl * 0.05;

            var cart = {
              product_id: this.$store.state.winter.winter_workshop_filter
                .service_id.id,
              product_image: "sports-winter-camp.jpg",
              product_name: this.$store.state.winter.winter_workshop_filter
                .service_id.product,
              product_category: "Service",
              product_quantity: product.quantity,
              product_xero: this.$store.state.winter.winter_workshop_filter
                .service_id.xero,
              notes: this.$store.state.winter.winter_multi_skill_price.notes,
              type: "Camps",
              product_option: {
                selected_id: product.id,

                option_id: product.id,
                option_name: `${this.$store.state.winter.winter_workshop_filter.service_id.product} (${product.serviceName})`,
                // price: product.price,
                // name: product.serviceName,
                id: 3408,
                price: price,
                quantity,
                discount: 0.0,
                discountPercent: 0.0,
                price_excl: price_excl,
                total_incl: total_incl,
                total_excl: total_excl,
                vat: vat,
                date_start: '2021-11-12',
                date_end: '2021-11-12',
                week_id: 7,
                cid: {
                  id: 0,
                  name: "",
                },
              },
            };
            this.$store.commit("CARTS", cart);
          });
      
      localStorage.setItem(
        "traesdhes",
        JSON.stringify(this.$store.state.Carts.carts)
      );
      var snackbar = {
        snackbar: true,
        vertical: true,
        timeout: 2000,
        color: "blue lighten-2",
        dark: true,
        top: true,
        bottom: false,
        centered: true,
        left: false,
        right: false,
        text: `Item successfully added to your cart!`,
      };

      this.$store.commit("SNACKBAR", snackbar);
    },
  },

  computed: {
    quantities() {
      var qty = [];
      for (
        var i = 0;
        i <
        this.$store.state.winter.winter_multi_skill_price.service_price
          .quantity;
        i++
      ) {
        qty.push(i + 1);
      }
      return this.$store.state.winter.winter_multi_skill_price.service_price
        .quantity > 0
        ? qty
        : 0;
    },
  },

  metaInfo() {
    return {
      title: "Camps",
      titleTemplate: "%s - Winter Multi Skills",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
<style lang="scss" scoped>

@media (min-width: 960px) {
    .v-input {
      width: 50%;
    }
}

.v-input--selection-controls {
    margin-top: 0px;
    padding-top: 0;
}
</style>
