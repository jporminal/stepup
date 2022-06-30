<template>
  <v-card flat :loading="$store.state.Camps.loading">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <template v-if="products.data.length > 0">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            lg="3"
            md="4"
            v-for="(product, index) in products.data"
            :key="index"
          >
            <v-card height="400">
              <v-img
                height="250"
                :src="
                  product.images != null
                    ? `/img/products/${product.images.image_name}`
                    : ''
                "
                @click="add_cart(product.id)"
                style="cursor: pointer"
              >
              </v-img>
              <v-card-text>
                <p class="title">{{ product.product }}</p>
                <v-btn
                  @click="add_cart(product.id)"
                  color="green"
                  class="text-none"
                  text
                  absolute
                  right
                >
                  Add to cart
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-right">
        <v-pagination
          @input="channel"
          v-model="products.current_page"
          :length="products.last_page"
          :total-visible="$vuetify.breakpoint.mdAndUp ? 10 : 5"
        ></v-pagination>
      </div>
    </template>
    <v-container v-else>
      <p class="text-center">No available schedule at this moment</p>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "camps-main-view",

  methods: {
    channel(e) {
      var filter = {
        page: e,
        per_page: 12,
      };
      this.$store.commit("CAMP_FILTER", filter);
      this.$store.dispatch("CAMPS", this.$store.state.Camps.product_filter);
    },

    add_cart(e) {
      this.$store.dispatch("CAMP_VIEW_ITEM", e);
    },
  },

  computed: {
    products() {
      return this.$store.state.Camps.products;
    },
  },
};
</script>
