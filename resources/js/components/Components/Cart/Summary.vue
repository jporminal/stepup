<template>
  <div>
    <v-card>
      <my_camps v-if="$store.state.Carts.camps" />
      <v-toolbar color="blue lighten-2" dark>
        <v-toolbar-title class="title">Summary</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-list flat>
          <v-list-item>
            <v-list-item-title class="cart_summary">
              Taxable
            </v-list-item-title>
            <v-list-item-title>
              {{ subtotal | currency }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="discount > 0">
            <v-list-item-title class="cart_summary">
              Discount
            </v-list-item-title>
            <v-list-item-title>
              {{ discount | currency }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="cart_summary"> Tax </v-list-item-title>
            <v-list-item-title>
              {{ tax | currency }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="cart_summary"> Total </v-list-item-title>
            <v-list-item-title>
              {{ total | currency }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-none success"
          :disabled="this.$store.state.Carts.carts.length > 0 ? false : true"
          @click="proceed_checkout"
          block
          large
        >
          Proceed to checkout
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "cart-summary",

  components: {
    my_camps: () => import("./Forms/Camps"),
  },

  methods: {
    proceed_checkout() {
      if (this.is_camps > 0) {
          this.check_quantity()
        this.$store.commit("CART_CAMP_FORM", true);
      } else {
          this.check_quantity()
        this.$store.commit("CART_PROCESS", true);
      }
    },

    check_quantity() {
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
                            // this.title.push(`item remove - ${element.product_name} out of stock`)
                            this.remove(element)
                        }
                        break;
                    case 'Camps' :
                        if(product.quantity >= element.product_option.quantity ){
                            return
                        } else {
                            // this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Others' :
                        if(product.quantity >= element.product_option.quantity ){
                            return
                        } else {
                            // this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Urdang' :
                        if(product.quantity >= element.product_option.quantity ){
                            return
                        } else {
                            // this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Motor City' :
                        if(product.quantity >= 1 ){
                            return
                        } else {
                            // this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Foremarke' :
                        if(product.quantity >= 1 ){
                            return
                        } else {
                            // this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                    case 'Akoya' :
                        if(product.quantity >= 1 ){
                            return
                        } else {
                            // this.title.push(`item remove - ${element.product_name} out of space`)
                            this.remove(element)
                        }
                        break;
                }

            })
        });
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
        return total + item.product_option.total_excl;
      }, 0);
    },

    tax() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.vat;
      }, 0);
    },

    total() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.total_incl;
      }, 0);
    },

    discount() {
      return this.$store.state.Carts.carts.reduce((total, item) => {
        return total + item.product_option.discount;
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
