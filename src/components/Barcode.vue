<template>
  <div class="hello">
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
    ></StreamBarcodeReader>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  name: "Barcode",
  components: { StreamBarcodeReader },
  methods: {
    onDecode: function (a) {
      console.log(a);
    },
    onLoaded: function (a) {
      console.log(a);
    },
  },
};
</script>
