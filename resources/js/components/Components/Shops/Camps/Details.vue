<template>
  <v-dialog
    v-model="$store.state.Camps.open"
    width="1000"
    @click:outside="close"
    persistent
  >
    <v-card>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-img
              :src="`https://dies.stepup.ae/public/img/products/${$store.state.Camps.product.image.image_name}`"
            >
            </v-img>
            <p class="title text-center mt-2">
              {{ $store.state.Camps.product.ProductName }}
            </p>
            <v-select
              :items="$store.state.Camps.product.option_name"
              item-text="item"
              label="Select Option"
              return-object
              solo
              @change="selected_option"
            >
            </v-select>
            <v-select
              :items="$store.state.Camps.product.service_price"
              item-text="serviceName"
              label="Select Option"
              return-object
              solo
              @change="selected_price"
              v-if="Object.keys(option).length > 4 ? true : false"
            >
            </v-select>
            <p>Price: {{ price.price | currency }}</p>
            <p>Available: {{ price.quantity }}</p>
            <!-- <v-select
              label="Select Quantity"
              :items="quantities(price.quantity)"
              v-model="option.order_quantity"
              solo
              v-if="Object.keys(price).length > 2 ? true : false"
            >
            </v-select> -->
          </v-col>
          <v-col cols="10">
            <p class="font-weight-bold">Description:</p>
            <div v-html="$store.state.Camps.product.classnotes"></div>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions v-if="Object.keys(option).length > 4 ? true : false">
        <v-spacer></v-spacer>
        <v-btn
          class="text-none primary"
          large
          @click="add_cart"
          :disabled="Object.keys(price).length > 2 ? false : true"
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

      price: {
        price: 0.0,
        quantity: 0,
      },
    };
  },

  methods: {
    selected_option(e) {
      this.option = e;
    },
    selected_price(e) {
      e.quantity > 0
        ? (this.option.order_quantity = 1)
        : (this.option.order_quantity = 0);
      this.price = e;
    },
    close() {
      this.$store.commit("CAMP", {});
      this.$store.commit("CAMP_OPEN", false);
    },
    add_cart() {
      var price = this.price.price;
      var quantity = this.option.order_quantity;
      var vat = 5;
      var tax = vat / 100;
      var price_excl = price / (tax + 1);
      var total_price_excl = price_excl * quantity;
      var total_price = price * quantity;
      var total_tax = total_price_excl * tax;
      var discount_percent = 0;
      var discount = 0;

      var cart = {
        notes: "",
        type: "Camps",
        product_category: "Service",
        product_id: this.$store.state.Camps.product.classid,
        product_image: this.$store.state.Camps.product.image.image_name,
        product_limit: this.option.max_limit,
        product_name: this.$store.state.Camps.product.classname,
        product_xero: this.$store.state.Camps.product.xero,
        product_quantity: this.price.quantity,
        product_option: {
          cid: {
            id: 0,
            name: "",
          },
          date_end: this.option.date_end,
          date_start: this.option.date_start,
          discount: discount,
          discountPercent: discount_percent,
          id: this.option.product_id,
          option_id: this.price.id,
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
          product.product_id == this.$store.state.Camps.product.ProductID &&
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
        text: `${this.$store.state.Camps.product.ProductName} (${this.option.item}) successfully added to your cart!`,
      };

      this.$store.commit("SNACKBAR", snackbar);

      this.close();
    },
    quantities(e) {
      var qty = [];
      for (var i = 1; i <= e; i++) {
        qty.push(i);
      }
      return qty;
    },
  },
};
</script>
