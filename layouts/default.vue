<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn v-if='this.$store.state.user.isLogin' outlined @click="logout">ログアウト</v-btn>
      <v-btn v-else outlined @click="googleLogin"
      >Googleでログイン</v-btn
      >
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "~/plugins/firebase.js";
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        },
        {
          icon: "mdi-chart-bubble",
          title: "画像",
          to: "/upload"
        },
      ],
      title: "Okitime"
    };
  },
  created() {
    this.$store.dispatch("user/loginCheck");
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    logout() {
      firebase.auth().signOut().then(()=>{
        this.$store.dispatch("user/loginCheck");
      })
    }
  }
};
</script>
