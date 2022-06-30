import Vue from "vue";
import Vuetify from "vuetify";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";



const vuetify = new Vuetify();

Vue.use(Vuetify);

Vue.use(TiptapVuetifyPlugin, {
    // the next line is important! You need to provide the Vuetify Object to this place.
    vuetify, // same as "vuetify: vuetify"
    // optional, default to 'md' (default vuetify icons before v2.0.0)
    iconsGroup: "md" || "mdi"
});

const opts = {
    icons: {
        iconfont: "mdi" || "md" // default - only for display purposes
    }
};

export default new Vuetify(opts);
