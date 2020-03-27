<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card max-width="100%" max-height="500">
        <v-row align="center" justify="center">
          <pet></pet>
        </v-row>
      </v-card>
      <set-wakeup-time></set-wakeup-time>
      <v-btn @click="okita">起きた</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "~/plugins/firebase.js";
import SetWakeupTime from "../components/setWakeupTime";
import Pet from "../components/pet";

export default {
  components: { Pet, SetWakeupTime },
  data() {
    return {
      time: null
    };
  },
  methods: {
    setWakeupTime() {
      this.$store.dispatch("wakeup/setWakeupTime", this.time);
    },
    okita() {
      this.$store.dispatch("now/setNowTime");
      let now = this.$store.state.now.hour * 60 + this.$store.state.now.minute;
      let wakeup =
        this.$store.state.wakeup.hour * 60 + this.$store.state.wakeup.minute;
      let difference = now - wakeup
    }
  }
};
</script>
