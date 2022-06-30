<template>
  <div>
    <process_data />
    <v-card>
      <v-toolbar color="blue lighten-2" dark>
        <v-toolbar-title class="title"> My Cart</v-toolbar-title>
      </v-toolbar>

      <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
          <v-list v-if="title.length > 0">
              <v-list-item
                v-for="(remove, index) in title"
                :key="index"
              >
                <v-list-item-title class="error white--text">
                    {{ remove }}
                </v-list-item-title>
              </v-list-item>
          </v-list>
        <template v-if="$store.state.Carts.carts.length > 0">
          <v-list shaped>
            <v-list-item
              v-for="(item, index) in $store.state.Carts.carts"
              :key="index"
              three-line
            >
              <v-list-item-avatar horizontal tile size="150">
                <v-img
                  :src="`/img/products/${item.product_image}`"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="title">
                  <span v-if="item.type == 'Product'">
                    {{ item.product_name }} -
                  </span>
                  {{ item.product_option.option_name }}
                  <v-list-item-title class="title text-right">
                    {{ item.product_option.price | currency }}
                  </v-list-item-title>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    label="Quantity"
                    v-model="item.product_option.quantity"
                    :items="quantities(item.product_quantity)"
                    @change="update_quantity(item)"
                    solo
                    :disabled="item.type == 'Product' ? false : true"
                  >
                  </v-select
                  ><v-btn text @click="remove(item)" class="text-none" small>
                    Delete
                  </v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="title text-right font-weight-bold">
                Subtotal:
                <span class="red--text"> {{ subtotal | currency }} </span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </template>
        <template v-else>
          <center>
            <span class="title">
              Your cart is empty
              <v-btn text color="red" class="text-none" href="/shop-uniforms">
                <v-icon>mdi-shopping</v-icon> Go Shopping
              </v-btn>
            </span>
          </center>
        </template>
      </v-card-text>
      <v-card-text v-if="$vuetify.breakpoint.smAndDown">
        <v-card
          v-for="(item, index) in $store.state.Carts.carts"
          :key="index"
          class="mt-2 elevation-0"
        >
          <v-avatar tile size="150">
            <img
              :src="`https://dies.stepup.ae/public/img/products/${item.product_image}`"
            />
          </v-avatar>
          <v-card-title>
            <span class="subtitle-2" v-if="item.type == 'Product'">
              {{ item.product_name }} -
            </span>
            <span class="subtitle-2">
              {{ item.product_option.option_name }}</span
            >
          </v-card-title>
          <v-card-text>
            <v-select
              label="Quantity"
              v-model="item.product_option.quantity"
              :items="quantities(item.product_quantity)"
              @change="update_quantity(item)"
              solo
              :disabled="item.product_category == 'Service' ? true : false"
            >
            </v-select>
            <v-btn text @click="remove(item)" class="text-none" small>
              Delete
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "cart-items",

  components: {
    process_data: () => import("./Process"),
  },

  data() {
      return {
          title: []
      }
  },

  created(){
      var products = this.$store.state.Carts.carts.forEach((element) => {
            // console.log(element)
            const product = this.$store.dispatch('CART_CHECK_QUANTITY', element)
            .then((result) => {
                console.log(result.data)
                var product = result.data
                switch(element.type) {
                    case 'Product' :
                        if(product.quantity >= element.product_option.quantity ){
                            return
                        } else {
                            this.title.push(`item remove - ${element.product_name} out of stock`)
                            this.remove(element)
                        }
                        break;
                    case 'Camps' :
                        if(product.quantity >= element.product_option.quantity ){
                            return
                        } else {
                            this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Others' :
                        if(product.quantity >= element.product_option.quantity ){
                            return
                        } else {
                            this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Urdang' :
                        if(product.quantity >= element.product_option.quantity ){
                            return
                        } else {
                            this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Motor City' :
                        if(product.quantity >= 1 ){
                            return
                        } else {
                            this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Foremarke' :
                        if(product.quantity >= 1 ){
                            return
                        } else {
                            this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Akoya' :
                        if(product.quantity >= 1 ){
                            return
                        } else {
                            this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                }

            })
        });
  },

  methods: {
    update_quantity(e) {
      var price = e.product_option.price;
      var quantity = e.product_option.quantity;
      var vat = 5;
      var tax = vat / 100;
      var price_excl = price / (tax + 1);
      var total_price_excl = price_excl * quantity;
      var total_price = price * quantity;
      var total_tax = total_price_excl * tax;

      e.product_option.quantity = quantity;
      e.product_option.total_excl = total_price_excl;
      e.product_option.total_incl = total_price;
      e.product_option.vat = total_tax;

      localStorage.setItem(
        "traesdhes",
        JSON.stringify(this.$store.state.Carts.carts)
      );
    },
    quantities(e) {
      var qty = [];
      for (var i = 1; i <= e; i++) {
        qty.push(i);
      }
      return qty;
    },

    remove(item) {
      const index = this.$store.state.Carts.carts.indexOf(item);
      this.$store.state.Carts.carts.splice(index, 1);
      localStorage.setItem(
        "traesdhes",
        JSON.stringify(this.$store.state.Carts.carts)
      );
    },
  },

  computed: {
    subtotal() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.total_incl;
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-input {
  max-width: 30%;
}
</style>
