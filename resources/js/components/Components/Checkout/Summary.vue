<template>
  <v-card>
    <v-toolbar color="blue lighten-2" dark flat>
      <v-toolbar-title> Summary </v-toolbar-title>
    </v-toolbar>
    <v-form ref="form" v-model="$store.state.Carts.valid">
        <v-card-text>
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
        </v-card-text>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(item, index) in $store.state.Carts.carts"
            :key="index"
            three-line
          >
            <v-list-item-content>
              <v-list-item-title class="body-1">
                <span v-if="item.type == 'Product'">
                  {{ item.product_name }} -
                </span>
                {{ item.product_option.option_name }}
              </v-list-item-title>
              <v-list-item-title class="body-1 text-right red--text">
                {{ item.product_option.total_incl | currency }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-select
                  v-if="item.type !== 'Product' && item.type !== 'Fitness' "
                  v-model="item.product_option.cid"
                  item-value="cid"
                  item-text="firstname"
                  :items="$store.state.Carts.child"
                  label="select child"
                  return-object
                  @change="selected_child"
                  solo
                  append-outer-icon="*"
                  :rules="[(v) => v.id > 0 || 'Select a child']"
              /></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-form>
    <v-divider></v-divider>
    <v-card-text>
      <v-container>
        <v-row>
          <p class="font-weight-bold body-2">Subtotal</p>
          <v-spacer></v-spacer>
          <p class="font-weight-bold body-2">{{ subtotal | currency }}</p>
        </v-row>
        <v-row>
          <p class="font-weight-bold body-2">Discount</p>
          <v-spacer></v-spacer>
          <p class="font-weight-bold body-2">{{ discount | currency }}</p>
        </v-row>
        <v-row>
          <p class="font-weight-bold body-2">Tax</p>
          <v-spacer></v-spacer>
          <p class="font-weight-bold body-2">{{ tax | currency }}</p>
        </v-row>
        <!-- <v-row>
          <p class="font-weight-bold body-2">Credits</p>
          <v-spacer></v-spacer>
          <v-radio-group
            v-if="$store.state.Carts.parent.credit > 0"
            v-model="$store.state.Orders.is_credit"

          >
            <v-radio
              @change="credit"
              :label="`${$store.state.Carts.parent.credit}`"
              :value="$store.state.Carts.parent.credit"
            ></v-radio>
          </v-radio-group>
        </v-row> -->
        <v-row>
          <p class="font-weight-bold body-2">Total</p>
          <v-spacer></v-spacer>
          <p class="font-weight-bold body-2">{{ total | currency }}</p>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "checkout-summary",

  data() {
      return {
          title: []
      }
  },

  created() {
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
      remove(item) {
      const index = this.$store.state.Carts.carts.indexOf(item);
      this.$store.state.Carts.carts.splice(index, 1);
      localStorage.setItem(
        "traesdhes",
        JSON.stringify(this.$store.state.Carts.carts)
      );
    },

    selected_child(e) {
      localStorage.setItem(
        "traesdhes",
        JSON.stringify(this.$store.state.Carts.carts)
      );
    },

    credit() {
      var discount =
        this.total >= this.$store.state.Carts.parent.credit
          ? this.$store.state.Carts.parent.credit
          : this.total - 1;
      var discount_percentage = (discount / this.total) * 100;

      this.$store.state.Carts.carts.forEach((item) => {

        var original_price = item.product_option.total_incl + item.product_option.discount
        var discount_per_item = item.product_option.total_incl * (discount_percentage / 100);

        var total_discount = item.product_option.discount + discount_per_item
        var total_discount_pctg = (total_discount / original_price) * 100

        var total_price = item.product_option.total_incl - discount_per_item;
        var total_price_excl = total_price / 1.05;
        var total_tax = total_price_excl * 0.05;



        item.product_option.total_incl = total_price;
        item.product_option.total_excl = total_price_excl;
        item.product_option.vat = total_tax;
        item.product_option.discount = total_discount;
        item.product_option.discountPercent = total_discount_pctg;


    //   console.log(total_discount_pctg)
      });

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
  },
};
</script>
<style lang="scss" scoped>
.v-input {
  max-width: 50%;
}
</style>
