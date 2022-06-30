<template>
  <v-dialog
    v-model="$store.state.Motor_city.adult_open"
    width="1000"
    @click:outside="close"
    persistent
  >
    <v-card>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-img
              :src="`/img/products/adult-classes.jpg`"
            >
            </v-img>
            
          </v-col>
          <v-col cols="10">
            <v-row>
              <v-col
                cols="12"
                md="6"
                  v-for="(item, index) in $store.state.Motor_city.adults"
                  :key="index"
              >
                  <v-checkbox
                    :value="item.schedule_id"
                    v-model="$store.state.Motor_city.adult_selected"
                    :label="`${item.product}`"
                    @change="selected_option"
                  >
                  </v-checkbox>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions >
        <v-spacer></v-spacer>
          <v-btn
              :disabled="
                $store.state.Motor_city.adult_selected.length > 0
                  ? false
                  : true
              "
              class="text-none primary"
              large
              @click="add_to_cart"
            >
              Add to Cart
            </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "product-details",

  data() {
    return {
      option: {
        price: 0.0,
        available: 0,
        quantities: [],
        order_quantity: 0,
      },

      price: {
        price: 0.0,
        quantity: 0,
      },
    };
  },

  methods: {
    selected_option(e) {
      this.$store.commit('MOTOR_CITY_ADULT_CLASSES_SELECTED', e)
    },
    
    close() {
      this.$store.commit("MOTOR_CITY_ADULT_CLASSES", []);
      this.$store.commit("MOTOR_CITY_ADULT_CLASSES_OPEN", false);
      this.$store.commit('MOTOR_CITIES_ADULT_CLASSES', false)
    },
    add_to_cart() {
      // console.log(this.$store.state.Motor_city.adult_selected)

      this.$store.dispatch('MOTOR_CITIES_ADULT', {
        class_ids: this.$store.state.Motor_city.adult_selected,
        is_unli: this.$store.state.Motor_city.adult_unli
      })
      .then((result) => {
        // console.log(result.data)
        var prods = result.data;

        prods.forEach((product) => {
            var quantity = 1;
            var price = Number(product.price);
            var price_excl = price / 1.05;
            var total_incl = quantity * price;
            var total_excl = total_incl / 1.05;
            var vat = total_excl * 0.05;

            var cart = {
              notes: "",
              type: "Motor City",
              product_category: "Service",
              product_id: product.classid,
              product_image: "adult-classes.jpg",
              product_limit: 1,
              product_name: product.item,
              product_xero: 230,
              product_quantity: quantity,
              product_option: {
                 cid: {
                  id: 0,
                  name: "",
                },
                selected_id: 0,
                date_end: product.date_end,
                date_start: product.date_start,
                discount: 0.0,
                discountPercent: 0.0,
                id: product.product_id,
                option_name: product.item,
                price: price,
                price_excl: price_excl,
                quantity,
                total_excl: total_excl,
                total_incl: total_incl,
                vat: vat,
                week_id: product.week_id,
               
              },
            };

            this.$store.commit("CARTS", cart);
        })

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
          text: `Adult class(es) successfully added to your cart!`,
        };

        this.$store.commit("SNACKBAR", snackbar);

        this.close();
      })
      .catch((err) => {
        console.log(err)
      })

      // var cart = {
      //   notes: "",
      //   type: "Motor City",
      //   product_category: "Service",
      //   product_id: this.$store.state.Motor_city.product.classid,
      //   product_image: this.$store.state.Motor_city.product.image !== null ? this.$store.state.Motor_city.product.image.image_name : '',
      //   product_limit: this.option.max_limit,
      //   product_name: this.$store.state.Motor_city.product.classname,
      //   product_xero: this.$store.state.Motor_city.product.xero,
      //   product_quantity: this.option.max_qty,
      //   product_option: {
      //     cid: {
      //       id: 0,
      //       name: "",
      //     },
      //     selected_id: 0,
      //     date_end: this.option.date_end,
      //     date_start: this.option.date_start,
      //     discount: discount,
      //     discountPercent: discount_percent,
      //     id: this.option.product_id,
      //     option_name: this.option.item,
      //     price: price,
      //     price_excl: price_excl,
      //     quantity: quantity,
      //     total_excl: total_price_excl,
      //     total_incl: total_price,
      //     vat: total_tax,
      //     week_id: this.option.week_id,
      //   },
      // };

    },
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
  margin-bottom: -20px;
}
</style>
