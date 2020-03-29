<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card max-width="100%" color="light-blue accent-4">
            <v-row align="center" justify="center">
              <pet></pet>
            </v-row>
            <v-col cols="12" align="center" justify="center">
              <set-wakeup-time></set-wakeup-time>
            </v-col>
            <v-col cols="12" align="center" justify="center">
              <okita></okita>
            </v-col>
          </v-card>
        </v-col>
        <v-card max-width="100%">
          <v-card-text>
            毎日起きたい時間に起きてペットを育てよう！
          </v-card-text>
        </v-card>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "~/plugins/firebase.js";
import SetWakeupTime from "../components/setWakeupTime";
import Pet from "../components/pet";
import Okita from "../components/okita";

export default {
  components: { Pet, SetWakeupTime, Okita },
  data() {
    return {
      time: null
    };
  },
  methods: {
    setWakeupTime() {
      this.$store.dispatch("wakeup/setWakeupTime", this.time);
    }
  }
};
</script>
