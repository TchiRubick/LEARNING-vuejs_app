import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#0069D9',
        success: '#138496',
        secondary: '#0b2b51',
      }
    }
  },
});
