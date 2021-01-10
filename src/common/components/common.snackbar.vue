<template>
  <div class="text-center ma-2">
    <v-snackbar :value="active" timeout="-1" light>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="closeSnackBar">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    text: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeSnackBar: function() {
      this.$emit("close-snackbar");
    }
  },
}
</script>