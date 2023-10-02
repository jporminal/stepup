<template>
  <v-dialog width="800px" v-model="$store.state.Carts.terms_open" persistent>
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-row>
          <v-col class="d-flex justify-space-around">
            <v-toolbar-title>
              <p class="title">SUA Terms &amp; Conditions</p>
            </v-toolbar-title>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-card-text>
        <div v-html="tcs_camps"></div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="success text-none" @click="close"> I Agree </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "terms-and-conditions-products",

  data() {
    return {
      tcs_camps: `<br><br>
             <h3><u>Payment and Registration Policy</u></h3>
              <ol>
                <li>A one-time registration fee of 150dhs is due at the time of registration for any class at StepUp Academy (SUA). The registration fee will become invalid if you are absent for more than 3 terms or longer.</li>
                <li>A maximum of 2 trial classes are allowed for all SUA classes, once 2 classes have been attended, registration for the remainder of the term is required. The price of trial class shall depend on the class. Classes are not on a pay-as-you go basis.</li>
                <li>Methods of payment accepted in our Motor City and Springs Souk branch are cash, card or cheques made payable to StepUp Academy. Bank transfer is available upon request. It is your responsibility to provide a copy of the transfer advice slip as we cannot trace payments. Payment methods accepted vary for external venues, please check with the centre accordingly.</li>
                <li>If fees are not settled before the class, then SUA reserves the right to exclude that student from the class. Fees are required before or on the first day of class. Any unpaid fees will result in non-participation until the fees are settled.</li>
                <li>In case of a dishonoured cheque, a bank fee of 100 AED for each returned cheque may apply after being assessed.</li>
                <li>Class space can only be guaranteed once the full fees and documentation have been completed and received.</li>
                <li>SUA management reserves the right to refuse re-admission into the school if there are any outstanding balances.</li>
                <li>It is the responsibility of the person filling out the registration form to provide a spell checked, current email address, correct contact numbers, and that they are updated with us if need be. Important information on classes, examinations and shows will be sent to this email account.</li>
                <li>SUA reserves the right to make changes and exceptions to the fees policy, at our discretion, at any time.</li>
            </ol>
            <br>
            <h3><u>Refund Policy</u></h3>
            <ol>
                  <li>Class fees are non-refundable. Exceptions may be made if there is proof there is a valid medical reason as to why the student cannot attend the class. In this situation we can make an exception to freeze the account and have it transferred to the following term only. If this is the case, then the fees must be used by the end of the following term and cannot be carried over.</li>
                  <li>Missed classes are non-refundable and cannot be carried over to a new term. If you inform us in advance that you are not able to make the class, we can allow a make up class to be taken. We will advise you which classes, days and times your child can attend for a make-up class, this may be in an alternate dance style. Make up lessons must be booked in advance through our reception team, for safety reasons you cannot just show up on the day. A maximum of 2 make up classes can be redeemed during a term. After 2 make-up classes, you forfeit your space in your chosen class and it will be offered to other students on the waiting list.</li>
                  <li>Should classes be required to be cancelled for reasons beyond our control (for example a short notice private holiday announcement, changing of private holiday dates, closure of any of our locations, global pandemics, notification from any of the governments/ministry’s etc… and more) then students will be eligible to attend a make up lessons, our reception team will be in touch via email should this be the case. These classes will not be refunded.</li>
                  <li>Any payments made towards school trips, annual shows, examinations, uniforms, events etc… are all non-refundable and un transferable.</li>
                  <li>Any refunds which take place, will be after any VAT, Credit Charges have been deducted.</li>
                  <li>Any fees paid for any examinations, end of year shows, events etc… are all non-refundable.</li>
              </ol>
<br>
            <h3><u>Photos, videos and CCTV</u></h3>
            <ol>
                <li>On occasion, photos and videos may be taken within classes, performances or preparation for examinations of students. I consent that these photos or videos may be taken and used for social media, advertising or promotional purposes without prior notification or compensation to myself or my child. If you do not agree to the use of photography of your child or yourself, kindly email us to inform us on salesandmarketing@stepup.ae</li>
                <li>I am aware that there are CCTV cameras in all the studios, reception and waiting areas of SUA Motor City and Springs Souk branch. By signing this agreement, I acknowledge and consent to the use of CCTV within SUA of myself and my child.</li>
                <li>I understand that I am not able to and cannot request to see any CCTV footage. If there is a specific reason in which I want to view something, then I know I must go through the correct authorities and let them handle it.</li>
                <li>I am aware that for any annual showcases, photos and videos will be taken and available for option to purchase by parents.</li>
            </ol>
<br>
            <h3><u>Classes and Examinations</u></h3>
            <ol>
                <li>I understand that I am not permitted to sit in and watch my child’s class, and that all parents must remain outside the studio/room until the class is finished and students are brought out. SUA will hold “Open Day” classes where parents can sit in and watch the duration of the class. Parents will be informed when these are taking place.</li>
                <li>I am aware that the correct uniform and footwear must be worn to attend the classes. Uniforms must be purchased and worn by the third class my child attends.</li>
                <li>I understand that I do not have the right to stipulate which level class I/my child should be in. All classes have either an age limit or they state that they are arranged by ability. This means the teacher decides which class you/your child is eligible for. The teacher’s decision is the final decision and management will support this.</li>
                <li>I am aware that to take part in any annual exams, recitals or shows throughout the year that I/my child must purchase the correct attire, otherwise I/my child shall not be able to take part under any circumstances. I also understand that I need to do the required sign up procedure within the time frames given by SUA and that such events will have additional costs involved.</li>
                <li>When examination decisions start to take place, I am aware that the only request I can make is that my child’s does not take part in it. The final decision is down to the teacher in charge and based on an assessment, if your child is not chosen to take the examination then there will be a valid reason which you can discuss with the teacher. However, the final choice is down to the teacher and management will support this.</li>
                <li>I am aware that sometimes teachers may arrive late due to un-foreseen situations. However, if a class needs to be cancelled due to this, StepUp Academy shall make sure all customers are compensated accordingly if need be.</li>
                <li>Classes are scheduled at a usual 30, 45 or 60 minute time slot. This timing also allows for a short period at the start and end of each class for registration to take place and for class handover management.</li>
                <li>Students must be picked up at the class end time, teachers are only responsible for students during the designated time slot of the class. Please call our reception team if you will be running late.</li>
                <li>I am aware that all the programmes come with a risk of injury due to the nature of the classes and waive all claims against StepUp Academy, Owners, Management, Teachers & Staff members.</li>
                <li>All fees for classes, events, shows, exams, stock items are non-refundable – please check the “Refund Policy”.</li>
            </ol>
<br>
            <h3><u>General</u></h3>
            <ol>
                <li>StepUp Academy management reserves the right to add, modify and/or amend the terms & conditions from time to time at its absolute discretion.</li>
                <li>StepUp Academy follows a zero tolerance against abusive behaviour aimed at any of their staff members or customers. In such cases, StepUp Academy management shall hold the rights to decide if they stay members or are asked kindly to leave the centre.</li>
                <li>I am aware that the SUA reception staff are not responsible if my child leaves the SUA premises before or after class.</li>
                <li>I have read and accepted the terms & conditions laid down.</li>
            </ol>`,
    };
  },

  methods: {
    close() {
      this.$store.commit("TERMS_OPEN", false);
      this.$store.commit("SUA_TEMRS", true);
    },
  },
};
</script>
