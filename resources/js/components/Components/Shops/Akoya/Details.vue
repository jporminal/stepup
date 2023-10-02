<template>
  <v-dialog
    v-model="$store.state.Akoya.open"
    width="1000"
    @click:outside="close"
    persistent
  >
    <v-card>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-img
              :src="`/img/products/${$store.state.Akoya.product.image.image_name}`"
            >
            </v-img>
            <p class="title text-center mt-2">
              {{ $store.state.Akoya.product.ProductName }}
            </p>
            <v-select
              :items="$store.state.Akoya.product.option_name"
              item-text="item"
              label="Select Option"
              return-object
              solo
              @change="selected_option"
            >
            </v-select>
            <template v-if="Object.keys(option).length > 4">
              <p v-if="!$store.state.Date_ranges.store_setup.springsouk_lesson_ebd.value || in_array(option.product_id, productIdExcludedInEBD)">Price: {{ option.price | currency }}</p>
              <p v-if="$store.state.Date_ranges.store_setup.springsouk_lesson_ebd.value && !in_array(option.product_id, productIdExcludedInEBD)">Price: {{ ebd(option.price) | currency }} <sup style="color: red" v-if="option.price > 0"> <del> {{ option.price | currency }} </del> 10% off EBD</sup></p>
              <!-- <p>Price: {{ option.price | currency }}</p> -->
              <p>Available: {{ option.max_limit > 0 ? option.max_limit : 'FULL' }}</p>
              <p>Number of weeks: {{ option.max_qty }}</p>
            </template>
          </v-col>
          <v-col cols="10">
            <p class="font-weight-bold">Description:</p>
            <div v-html="$store.state.Akoya.product.classnotes"></div>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="text-none primary"
          large
          @click="add_cart"
          :disabled="!is_valid(option)"
        >
          <v-icon> mdi-cart </v-icon>
          Add to cart
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
        productIdExcludedInEBD: [5279,5278, 5277, 5281,5249,5280,5165,5179,5199,5166,5180,5200,5167,5181]
    };
  },

  methods: {
    in_array(value, arr) {
      var status = false;

      for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
          status = true;
          break;
        }
      }

      return status;
    },
    selected_option(e) {
      e.max_qty > 0 ? (e.order_quantity = 1) : (e.order_quantity = 0);
      this.option = e;
    },
    close() {
      this.$store.commit("AKOYA", {});
      this.$store.commit("AKOYA_OPEN", false);
    },
    ebd(price) {
        return price - (price * .1);
    },
    add_cart() {
      var price = this.option.price;
      var quantity = this.option.max_qty;
      var vat = 5;
      var tax = vat / 100;
      var price_excl = price / (tax + 1);
      var total_price_excl = price_excl * quantity;
      var total_price = price * quantity;
      var total_tax = total_price_excl * tax;
      var discount_percent = 0;
      var discount = 0;

      if(this.$store.state.Date_ranges.store_setup.springsouk_lesson_ebd.value && !this.in_array(this.option.product_id, this.productIdExcludedInEBD)) {
          discount = total_price - this.ebd(total_price);
          discount_percent = 10;
          total_price_excl = this.ebd(total_price_excl);
          total_price = this.ebd(total_price);
          total_tax = this.ebd(total_tax);
      }

      var cart = {
        notes: "",
        type: "Akoya",
        product_category: "Service",
        product_id: this.$store.state.Akoya.product.classid,
        product_image: this.$store.state.Akoya.product.image.image_name,
        product_limit: this.option.max_limit,
        product_name: this.$store.state.Akoya.product.classname,
        product_xero: this.$store.state.Akoya.product.xero,
        product_quantity: this.option.max_qty,
        product_option: {
          cid: {
            id: 0,
            name: "",
          },
          selected_id: 0,
          date_end: this.option.date_end,
          date_start: this.option.date_start,
          discount: discount,
          discountPercent: discount_percent,
          id: this.option.product_id,
          option_name: this.option.item,
          price: price,
          price_excl: price_excl,
          quantity: quantity,
          total_excl: total_price_excl,
          total_incl: total_price,
          vat: total_tax,
          week_id: this.option.week_id,
        },
      };

      var exist_item = this.$store.state.Carts.carts.find(
        (product) =>
          product.product_id ==
            this.$store.state.Akoya.product.ProductID &&
          product.product_option.id == this.option.product_id
      );

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
        text: `${this.$store.state.Akoya.product.classname} (${this.option.item}) successfully added to your cart!`,
      };

      this.$store.commit("SNACKBAR", snackbar);

      this.close();
    },
    is_valid(e) {
          var valid = Object.keys(e).length > 4
          if(valid) {
              e.max_limit > 0 ? valid = true : valid = false
          }
          return valid
      }
  },
};
</script>
