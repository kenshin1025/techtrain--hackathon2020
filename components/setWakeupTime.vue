<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="red lighten-2" dark v-on="on">
        起きる時間を決める
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">
        明日は何時に起きよう
      </v-card-title>

      <v-row justify="space-around">
        <v-time-picker v-model="time" color="green lighten-1"></v-time-picker>
      </v-row>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="setWakeupTime">
          決定
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "setWakeupTime",
  data() {
    return {
      dialog: false,
      time: "07:00"
    };
  },
  methods: {
    setWakeupTime() {
      this.dialog = false;
      this.$store.dispatch("wakeup/setWakeupTime", this.time);
    },
    setNowTime() {
      this.$store.dispatch("now/setNowTime");
    }
  }
};
</script>

<style scoped></style>
