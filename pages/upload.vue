<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-file-input
        v-model="image"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="育てるものの画像をいれてください"
        prepend-icon="mdi-camera"
      ></v-file-input>
      <v-btn @click="test">test</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  name: "upload",
  data() {
    return {
      image: null
    };
  },
  methods: {
    test() {
      const user = firebase.auth().currentUser;
      console.log(user.getIdToken())
    },
    upload() {
      // アップロード対象は1件のみとする
      const file = this.image;
      const user = firebase.auth().currentUser;
      if (file) {
        return new Promise((resolve, reject) => {
          // firestorage にファイルをアップロード
          const uploadTask = firebase
            .storage()
            .ref("images/" + user.getToken())
            .put(file)
            .then(snapshot => {
              // アップロード完了処理。URLを取得し、呼び出し元へ返す。
              snapshot.ref.getDownloadURL().then(url => {
                resolve(url);
              });
            });
        });
      }
    }
  }
};
</script>

<style scoped></style>
