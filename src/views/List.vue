<template>
  <SideMenuLayout>
    <Spinner :loading="loading" />
    <v-card-title>Article list</v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="articles"
        :items-per-page="10"
        class="elevation-5"
        :search="search"
        isSelectable
      >
        <template v-slot:[`item.action`]="{ item }">
          <v-btn
            class="mx-2"
            fab
            dark
            x-small
            color="red"
            :click="deleting(item)"
          ></v-btn>
          <v-btn
            class="mx-2"
            fab
            dark
            x-small
            color="green"
            :to="editing(item)"
          >
            <v-icon dark>
              mdi-eye-check
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:top>
          <v-container>
            <v-row>
              <v-col md="4">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-data-table>
    </v-card-text>
  </SideMenuLayout>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data: () => {
    return {
      loading: true,
      search: "",
      headers: [
        {
          text: "Barcode",
          align: "start",
          sortable: true,
          value: "barcode",
        },
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "Action",
          align: "start",
          sortable: false,
          value: "action"
        }
      ],
      articles: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
      this.loading = true;
      axios({
        method: "GET",
        url: `${this.$store.getters.getConfiguration.api_uri}api/articles/`,
      }).then((res) => {
        if (res.data.error === 0) {
          this.articles = res.data.details;
        }

        this.loading = false;
      });
    },
  },
  computed: {
    editing() {
      return (item) => `/edit/${item.codebarre}`;
    },
    deleting() {
      (item) => {
        axios({
          method: "DELETE",
          url: `${this.$store.getters.getConfiguration.api_uri}api/articles/${item.codebarre}`,
        }).then((res) => {
          if (res.data.error === 0) {
            this.init();
          }
        });
      }
    }
  }
};
</script>