<template>
  <v-card flat>
    <snackbar />
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-card>
            <v-img
              src="/img/camps/Spring/2021/spring-workshop.jpg"
              alt="Down The River Nile"
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <p class="display-1">Spring Workshop</p>
          <p class="title">8-30AM - 3:30PM</p>
          <p class="title">6yrs - 16yrs</p>
          <v-autocomplete
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
          <v-autocomplete
            label="Select Option"
            v-if="$store.state.winter.winter_workshop_filter.service_id.id > 0"
            :items="options"
            v-model="$store.state.winter.winter_workshop_filter.stat"
            @change="selected_age"
            solo
            disable-lookup
          />
          <template
            v-if="$store.state.winter.winter_workshop_filter.stat == 'Daily'"
          >
            <v-checkbox
              v-for="(item, index) in $store.state.winter.winter_workshop_prices
                .daily"
              :key="index"
              :value="item.id"
              v-model="$store.state.winter.winter_workshop_selected"
              :label="`${item.serviceName} - available ${item.quantity}`"
            >
            </v-checkbox>
          </template>
          <template
            v-if="$store.state.winter.winter_workshop_filter.stat == 'Weekly'"
          >
            <v-checkbox
              v-for="(item, index) in $store.state.winter.winter_workshop_prices
                .weekly"
              :key="index"
              :value="item.id"
              v-model="$store.state.winter.winter_workshop_selected"
              :label="`${item.serviceName} - available ${item.quantity}`"
            >
            </v-checkbox>
          </template>
          <template
            v-if="
              $store.state.winter.winter_workshop_filter.stat == 'Full Term'
            "
          >
            <v-checkbox
              v-for="(item, index) in $store.state.winter.winter_workshop_prices
                .full_term"
              :key="index"
              :value="item.id"
              v-model="$store.state.winter.winter_workshop_selected"
              :label="`${item.serviceName} - available ${item.quantity}`"
            >
            </v-checkbox>
          </template>
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
  name: "winter-workshop",

  data() {
    return {
      qty: 1,
      options: ["Daily", "Weekly", "Full Term"],
      my_product: [],
    };
  },

  components: {
    snackbar: () => import("../../../Snackbar/Global_view"),
  },

  created() {
    this.filter();
  },

  methods: {
    filter() {
      var class_ids = {
        class_ids: "sw",
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

    add_to_cart() {
      this.$store
        .dispatch("WINTER_WORKSHOP_SELECTED", {
          selected: this.$store.state.winter.winter_workshop_selected,
        })
        .then((result) => {
          //   this.add_carts(result.data);
          var prods = result.data;
          prods.forEach((product) => {
            var quantity = this.qty;
            var price = product.price;
            var price_excl = price / 1.05;
            var total_incl = quantity * price;
            var total_excl = total_incl / 1.05;
            var vat = total_excl * 0.05;

            var cart = {
              product_id: this.$store.state.winter.winter_workshop_filter
                .service_id.id,
              product_image: "spring-workshop.jpg",
              product_name: this.$store.state.winter.winter_workshop_filter
                .service_id.product,
              product_category: "Service",
              product_quantity: product.quantity,
              product_xero: this.$store.state.winter.winter_workshop_filter
                .service_id.xero,
              notes: "",
              type: "Camps",
              product_option: {
                selected_id: product.id,

                option_id: product.id,
                option_name: `${this.$store.state.winter.winter_workshop_filter.service_id.product} (${product.serviceName})`,
                // price: product.price,
                // name: product.serviceName,
                id: this.$store.state.winter.winter_workshop_filter.service_id
                  .id,
                price: price,
                quantity,
                discount: 0.0,
                discountPercent: 0.0,
                price_excl: price_excl,
                total_incl: total_incl,
                total_excl: total_excl,
                vat: vat,
                date_start: this.$store.state.winter.winter_workshop_filter
                  .service_id.date_start,
                date_end: this.$store.state.winter.winter_workshop_filter
                  .service_id.date_end,
                week_id: this.$store.state.winter.winter_workshop_filter
                  .service_id.week_id,
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
        })
        .catch((err) => {});
    },
  },

  metaInfo() {
    return {
      title: "Camps",
      titleTemplate: "%s - Spring Workshop",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.v-text-field.v-text-field--enclosed {
  margin: 0;
  padding: 0;
  width: 50%;
}
.v-input--selection-controls {
  margin: 0px;
  padding: 0px;
  margin-top: -15px;
}
</style>
