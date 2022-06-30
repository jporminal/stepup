<template>
  <div>
    <snackbar />
    <v-card>
      <video  width="100%" height="100%" loop preload="false" autoplay muted playsinline>
          <source src="//stepup.ae/video/sports-day.mp4" type="video/mp4">
          <source type="video/webm" src="/video/sports-day.webm" />
      </video>
    </v-card>
    
    <v-card flat >
      <v-card-text>
        <v-row justify="center">
          
          <v-col cols="12" md="5">
            <v-card>
              <v-img
                src="/img/family-fitness/sport-day.jpg"
                alt="Sports Day"
                name="Stepup Sports Day"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card
      flat
      color="#f1f1f1"
    >
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="4"
            class="d-flex flex-row-reverse"
          >
            <div >
              <v-card-text>
                <v-checkbox
                  v-for="(item, index) in $store.state.winter.winter_workshop_prices"
                  :key="index"
                  :value="item"
                  v-model="$store.state.winter.winter_workshop_selected"
                  :label="`${item.serviceName} - available ${item.quantity}`"
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
                              ></v-combobox>
                            </td>
                          </tr>
                        </table>
                    </template>
                </v-checkbox>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                
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
              </v-card-actions>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-row
              align="center"
              justify="space-around"
            >
              <v-col
                cols="12"
                md="5"
              >
                <a href="https://www.thewifiguys.ae/" target="_blank" rel="nofollow">
                  <v-img
                    src="/img/family-fitness/wifi-guys.png"
                    name="the wifi guys"
                    alt="the wifi guys - stepup academy"
                  ></v-img>
                </a>
                <br>
                <p class="text-center font-weight-bold">Sponsored by The Wifi Guys</p>
              </v-col>
              <v-col
                cols="12"
                md="5"
              >
                <div class="font-weight-bold text-center">
                  WIFI and networking problems? <br>
                  We are the only ones in UAE who can <br>
                  fix all your issues in real-time! <br>
                  Build #YourSmartNetwork with us!
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "rad-classes",

  created() {
      this.selected_age()
  },

  data() {
    return {
      qty: 1,
      options: ["3-6yrs old", "7-11yrs old"],
      my_product: [],
    };
  },

  components: {
    snackbar: () => import("../../../Snackbar/Global_view"),
  },

  methods: {
    
    selected_age() {
        var data = {
            stat: 'Fitness',
            service_id: {
                id: 585,
                product: ""
            },
            selected: []
        }
      this.$store.commit(
        "WINTER_WORKSHOP_FILTER",
        data
      );

      this.$store.commit("WINTER_WORKSHOP_PRICES", {});
      this.$store.commit("WINTER_WORKSHOP_SELECTED", []);
      this.$store.dispatch(
        "WINTER_WORKSHOP_FILTER", 
        data
      );
    },

    add_to_cart() {
        console.log(this.$store.state.winter.winter_workshop_selected)
    //   this.$store
    //     .dispatch("WINTER_WORKSHOP_SELECTED", {
    //       selected: this.$store.state.winter.winter_workshop_selected,
    //     })
    //     .then((result) => {
    //       //   this.add_carts(result.data);
    //       var prods = result.data;
          this.$store.state.winter.winter_workshop_selected.forEach((product) => {

            var quantity = product.qty;
            var price = product.price;
            var price_excl = price / 1.05;
            var total_incl = quantity * price;
            var total_excl = total_incl / 1.05;
            var vat = total_excl * 0.05;

            var cart = {
              product_id: product.classid,
              product_image: "sports-day.jpg",
              product_name: 'Sports Day',
              product_category: "Service",
              product_quantity: product.quantity,
              product_xero: 230,
              notes: "",
              type: "Fitness",
              product_option: {
                selected_id: product.id,

                option_id: product.id,
                option_name: `Sports Day (${product.serviceName})`,
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
    //     })
    //     .catch((err) => {});
    },

    getQty(e) {
        var qty = []
        for(var i = 0; i < e; i++) {
            qty.push(i + 1)
        }
        return qty;
    }
  },

  metaInfo() {
    return {
      title: "Sports Day",
      titleTemplate: "%s - StepUp Academy",
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
  width: 100%;
}
.v-input--selection-controls {
  margin: 0px;
  padding: 0px;
  margin-top: -15px;
}

</style>
