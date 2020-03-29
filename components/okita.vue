<template>
  <div>
    <v-btn @click="okita" color="success">起きた</v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          早起き成功！
        </v-card-title>
        <v-card-text>
          少し大きくなった
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            オッケー
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "okita",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    okita() {
      this.$store.dispatch("now/setNowTime");
      let now = this.$store.state.now.hour * 60 + this.$store.state.now.minute;
      let wakeup =
        this.$store.state.wakeup.hour * 60 + this.$store.state.wakeup.minute;
      let difference = now - wakeup;
      if (difference > -30 && difference < 30) {
        this.$store.dispatch("size/okita");
        this.dialog = true;
      } else {
        console.log("起きてない");
      }
    }
  }
};
</script>

<style scoped></style>
