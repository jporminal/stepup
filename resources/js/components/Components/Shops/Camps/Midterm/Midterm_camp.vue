<template>
  <v-card>
    <snackbar />
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-card>
            <v-img
              src="/img/camps/Spring/2023/spring-camp-2023.jpeg"
              alt="Spring Camp 2023"
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <p class="display-1">Spring Camp</p>
          <!-- <p class="title">8:30AM - 2:00PM</p>
          <p class="title">3.5yrs - 5yrs</p>
          <p class="title">6yrs - 10yrs</p> -->
          <v-autocomplete
            label="Select Age"
            :items="$store.state.winter.winter_camps"
            v-model="$store.state.winter.winter_multi_skill_filter.service_id"
            @change="selected_age"
            item-value="id"
            item-text="product"
            solo
            disable-lookup
            return-object
          />
          <v-autocomplete
            label="Select Option"
            v-if="
              $store.state.winter.winter_multi_skill_filter.service_id.id > 0
            "
            :items="$store.state.winter.winter_multi_skill_prices"
            v-model="$store.state.winter.winter_multi_skill_filter.prices"
            @change="selected_option"
            item-value="id"
            item-text="serviceName"
            solo
            disable-lookup
            return-object
          />
          <template
            v-if="$store.state.winter.winter_multi_skill_filter.prices.id > 0"
          >
            <p>
              Price:
              {{
                $store.state.winter.winter_multi_skill_price.service_price.price
              }}
              AED
            </p>
            <p>
              Avaiable:
              {{
                $store.state.winter.winter_multi_skill_price.service_price
                  .quantity > 0
                  ? $store.state.winter.winter_multi_skill_price.service_price
                      .quantity
                  : "Out of Stock"
              }}
            </p>
            <v-select
              v-if="
                $store.state.winter.winter_multi_skill_price.service_price
                  .quantity > 0
              "
              label="Select Quantity"
              v-model="qty"
              :items="quantities"
              solo
            />
          </template>
          <v-btn
            :disabled="
              $store.state.winter.winter_multi_skill_price.service_price
                .quantity > 0
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
    };
  },

  created() {
    this.filter();
  },

  methods: {
    filter() {
      var class_ids = {
        class_ids: "multi_skills",
      };
      this.$store.dispatch("WINTER_CAMPS", class_ids);
    },

    selected_age(e) {
      var filter = {
        service_id: e,
        prices: {
          id: 0,
          serviceName: "",
        },
      };
      this.$store.commit("WINTER_MULTI_SKILL_FILTER", filter);
      this.$store.commit("WINTER_MULTI_SKILL_PRICES", []);
      this.$store.dispatch("WINTER_MULTI_SKILL_FILTER", e);
    },

    selected_option(e) {
      this.$store.commit(
        "WINTER_MULTI_SKILL_FILTER",
        this.$store.state.winter.winter_multi_skill_filter
      );

      this.$store.dispatch(
        "WINTER_MULTI_SKILL_PRICE",
        this.$store.state.winter.winter_multi_skill_filter
      );
    },

    add_to_cart() {
      var quantity = this.qty;
      var price = this.$store.state.winter.winter_multi_skill_price
        .service_price.price;
      var price_excl = price / 1.05;
      var total_incl = quantity * price;
      var total_excl = total_incl / 1.05;
      var vat = total_excl * 0.05;

      const cart = {
        product_id: this.$store.state.winter.winter_multi_skill_filter
          .service_id.id,
        product_image: "spring-camp-2023.jpeg",
        product_name: this.$store.state.winter.winter_multi_skill_filter
          .service_id.product,
        product_category: "Service",
        product_quantity: this.$store.state.winter.winter_multi_skill_price
          .service_price.quantity,
        product_xero: this.$store.state.winter.winter_multi_skill_filter
          .service_id.xero,
        notes: this.$store.state.winter.winter_multi_skill_price.notes,
        type: "Camps",
        product_option: {
          selected_id: this.$store.state.winter.winter_multi_skill_filter.prices
            .id,
          id: this.$store.state.winter.winter_multi_skill_price.product_id,
          option_id: this.$store.state.winter.winter_multi_skill_filter.prices
            .id,
          option_name: `${this.$store.state.winter.winter_multi_skill_price.item} (${this.$store.state.winter.winter_multi_skill_filter.prices.serviceName})`,
          price: price,
          quantity: this.qty,
          discount: 0.0,
          discountPercent: 0.0,
          price_excl: price_excl,
          total_incl: total_incl,
          total_excl: total_excl,
          vat: vat,
          date_start: this.$store.state.winter.winter_multi_skill_price
            .date_start,
          date_end: this.$store.state.winter.winter_multi_skill_price.date_end,
          week_id: this.$store.state.winter.winter_multi_skill_price.week_id,
          cid: {
            id: 0,
            name: "",
          },
        },
      };
      this.$store.commit("CARTS", cart);
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
      titleTemplate: "%s - Mid-term",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.v-input {
  width: 50%;
}
</style>
