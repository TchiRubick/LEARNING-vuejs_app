<template>
  <SideMenuLayout>
    <Spinner :loading="loading" />
    <v-card-title>Create/Modify an article</v-card-title>
    <v-row>
      <v-col>
        <v-card-text>
          <v-text-field
            outlined
            dark
            clearable
            v-model="barcode"
            label="Codebarre"
            @keyup="typingBarcode"
            hint="Minimum 8 character"
            type="number"
            prepend-inner-icon="mdi-barcode"
            @click:clear="reset"
          ></v-text-field>
          <v-text-field
            outlined
            dark
            clearable
            v-model="nom"
            label="Nom produit"
            prepend-inner-icon="mdi-card-bulleted-settings"
          ></v-text-field>
        </v-card-text>
      </v-col>
      <v-col>
        <v-card-text>
        <v-btn x-large block color="success" @click="generateBarcode"
            >Generate barcode</v-btn
          >
        <v-autocomplete
            v-model="select"
            :items="products"
            item-text="nom"
            item-value="codebarre"
            outlined
            label="Articles list"
            class="mt-8"
            prepend-inner-icon="mdi-shopping-search"
            @change="selectProductChange"
          ></v-autocomplete>
        </v-card-text>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-title>Price/Quantity to add</v-card-title>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-text-field
            outlined
            dark
            clearable
            v-model="qty_per"
            label="Qty per. pack"
            type="number"
            @focus="qty_per = qty_per == 0 ? '' : qty_per"
            @focusout="qty_per = qty_per == '' || !qty_per ? 1 : qty_per"
            @keyup="calculatePackPrice"
            @change="calculatePackPrice"
            prepend-inner-icon="mdi-set-split"
          ></v-text-field>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-text>
          <v-text-field
            outlined
            dark
            clearable
            v-model="qtt_piece"
            label="Piece quantity"
            type="number"
            @focus="qtt_piece = qtt_piece == 0 ? '' : qtt_piece"
            @focusout="qtt_piece = qtt_piece == '' || !qtt_piece ? 0 : qtt_piece"
            prepend-inner-icon="mdi-inbox-multiple"
          ></v-text-field>
          <v-text-field
            outlined
            dark
            clearable
            v-model="qtt_pack"
            label="Pack quantity"
            type="number"
            @focus="qtt_pack = qtt_pack == 0 ? '' : qtt_pack"
            @focusout="qtt_pack = qtt_pack == '' || !qtt_pack ? 0 : qtt_pack"
            prepend-inner-icon="mdi-inbox-outline"
          ></v-text-field>
        </v-card-text>
      </v-col>
      <v-col>
        <v-card-text>
          <v-text-field
            outlined
            dark
            clearable
            v-model="prx_piece"
            label="Piece price"
            type="number"
            @focus="prx_piece = prx_piece == 0 ? '' : prx_piece"
            @focusout="prx_piece = prx_piece == '' || !prx_piece ? 0 : prx_piece"
            @keyup="calculatePackPrice"
            @change="calculatePackPrice"
            prepend-inner-icon="mdi-currency-usd-circle"
          ></v-text-field>
          <v-text-field
            outlined
            dark
            clearable
            v-model="prx_pack"
            label="Pack price"
            type="number"
            @focus="prx_pack = prx_pack == 0 ? '' : prx_pack"
            @focusout="prx_pack = prx_pack == '' || !prx_pack ? 0 : prx_pack"
            prepend-inner-icon="mdi-currency-usd-circle-outline"
          ></v-text-field>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-text>
          <v-btn class="mx-auto" color="green" @click="sendData"
            ><span v-if="isInsert">Insert</span
            ><span v-else>Update</span></v-btn
          >
        </v-card-text>
      </v-col>
    </v-row>
    <Snackbar
      :text="notifText"
      :active="notifActive"
      @close-snackbar="closeSnackBar"
    />
  </SideMenuLayout>
</template>

<script>
import axios from "axios";

export default {
  name: "Add",
  data: () => {
    return {
      barcode: "",
      nom: "",
    };
  },
  methods: {
    generateBarcode() {
      this.barcode = Math.floor(Math.random() * 1000000000);
      this.getProductInfo();
    },
    resetState() {
      this.nom = "";
      this.barcode = "";
    },
    sendData() {
      let data = {
        codebarre: this.barcode,
        nom: this.nom,
      };

      this.loading = true;

      axios({
        method: "PUT",
        url: `${this.$store.getters.getConfiguration.api_uri}api/articles/`,
        data: data,
      })
        .then((res) => {
          if (res.data.success == 1) {
            this.resetState();
            this.notifText = "Success";
            this.notifActive = true;
          } else {
            this.notifText = res.data.response.error;
            this.notifActive = true;
          }

          this.loading = false;
        })
        .catch((err) => {
          this.notifText = err;
          this.notifActive = true;

          this.loading = false;
        });
    },
    closeSnackBar() {
      this.notifText = "";
      this.notifActive = false;
    },
  },
};
</script>