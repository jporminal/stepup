<template>
  <v-card class="mt-2">
    <v-card-text v-for="(gateway, index) in payment_gateways" :key="index">
      <v-radio-group
        v-model="payment"
        :hint="gateway.hints"
        persistent-hint
        column
      >
        <v-radio :value="gateway.id">
          <template v-slot:label>
            <div>
              {{ gateway.text }}
              <v-img
                :src="gateway.image"
                :alt="gateway.alt"
                max-width="200px"
              ></v-img>
            </div>
          </template>
        </v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "payment-gateway",
  data() {
    return {
      payment: "telr",
      payment_gateways: [
        {
          id: "telr",
          text: "Credit/Debit Card",
          hints: "Pay using a credit card via Telr Secure Payments",
          image: "img/gateway/telr.jpg",
          alt: "Telr secured payment gateway uses by StepUp Academy",
        },
      ],
    };
  },
};
</script>
