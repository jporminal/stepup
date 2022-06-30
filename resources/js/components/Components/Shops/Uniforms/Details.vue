<template>
  <v-dialog
    v-model="$store.state.Products.open"
    width="1000"
    @click:outside="close"
    persistent
  >
    <v-card>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-img
              :src="$store.state.Products.product.image  != null
              ? `/img/products/${$store.state.Products.product.image.image_name}`
              : ''"
            >
            </v-img>
            <p class="title text-center mt-2">
              {{ $store.state.Products.product.ProductName }}
            </p>
            <v-select
              :items="$store.state.Products.product.option_name"
              item-text="item"
              label="Select Option"
              return-object
              solo
              @change="selected_option"
            >
            </v-select>
            <template>
              <p>Price: {{ option.price | currency }}</p>
              <p>Available Stocks: {{ option.max_qty }}</p>
              <v-select
                label="Select Quantity"
                :items="quantities(option.max_qty)"
                v-model="option.order_quantity"
                solo
              >
              </v-select>
            </template>
          </v-col>
          <v-col cols="10">
            <p class="font-weight-bold">Description:</p>
            <div v-html="$store.state.Products.product.Description"></div>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="text-none primary"
          large
          @click="add_cart"
          :disabled="Object.keys(option).length > 4 ? false : true"
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
    };
  },

  methods: {
    selected_option(e) {
      e.max_qty > 0 ? (e.order_quantity = 1) : (e.order_quantity = 0);
      this.option = e;
    },
    close() {
      this.$store.commit("PRODUCT", {});
      this.$store.commit("PRODUCT_OPEN", false);
    },
    add_cart() {
      var price = this.option.price;
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
        type: "Product",
        product_category: "Product",
        product_id: this.$store.state.Products.product.ProductID,
        product_image: this.$store.state.Products.product.image.image_name,
        product_limit: this.option.max_qty,
        product_name: this.$store.state.Products.product.ProductName,
        product_xero: this.$store.state.Products.product.Xero,
        product_quantity: this.option.max_qty,
        product_option: {
          cid: {
            id: 0,
            name: "",
          },
          selected_id: 0,
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
        },
      };

      var exist_item = this.$store.state.Carts.carts.find(
        (product) =>
          product.product_id == this.$store.state.Products.product.ProductID &&
          product.product_option.id == this.option.product_id
      );

      if (!exist_item) {
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
          text: `${this.$store.state.Products.product.ProductName} (${this.option.item}) successfully added to your cart!`,
        };
      } else {
        exist_item.product_option.price_excl = price_excl;
        exist_item.product_option.quantity = quantity;
        exist_item.product_option.total_excl = total_price_excl;
        exist_item.product_option.total_incl = total_price;
        exist_item.product_option.vat = total_tax;

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
          text: `${this.$store.state.Products.product.ProductName} (${this.option.item}) successfully updated your cart!`,
        };
      }

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
