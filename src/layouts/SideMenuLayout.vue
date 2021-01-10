<template>
  <v-row style=" overflow-y:auto;">
    <v-col md="1" style="z-index: 2">
      <v-container>
        <v-card style="position: fixed;">
          <v-navigation-drawer permanent expand-on-hover color="#0b2b51">
            <div v-for="item in items" :key="item.title">
              <v-divider></v-divider>

              <v-list dense nav>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle class="title">
                      {{ item.title }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  v-for="(menu, i) in item.submenu"
                  :key="menu.libelle + i"
                  link
                  :to="menu.to"
                >
                  <v-list-item-icon>
                    <v-icon>{{ menu.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ menu.libelle }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-navigation-drawer>
        </v-card>
      </v-container>
    </v-col>
    <v-col>
      <v-container>
        <v-card color="#0b2b51" class="mx-auto">
          <slot></slot>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SideMenuLayout",
  data() {
    return {
      items: [
        {
          title: "Products",
          submenu: [
            {
              libelle: "List",
              icon: "mdi-book-open",
              to: "/",
            },
            {
              libelle: "Add",
              icon: "mdi-ticket-confirmation",
              to: "/add",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>