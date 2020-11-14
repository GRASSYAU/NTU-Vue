<template>
  <div>
    <label for="">地標</label>
    <input
      v-if="editable"
      ref="locationInput"
      type="text"
      class="form-control"
    />
    <!-- 地圖 -->
    <div ref="map" class="map"></div>
  </div>
</template>
<script>
import { vintageGold, becomeADinosaur } from "@/shared/mapStyles";
export default {
  name: "GoogleMapInput",
  // props: ["value", "editable"],
  props: {
    value: {},
    editable: {
      // 如果上層未提供editable預設為true
      default: true,
    },
  },
  data() {
    return {
      autoComplete: null,
      map: null,
      lat: 25.0182079,
      lng: 121.5439413,
      marker: null,
    };
  },
  methods: {
    placeChanged() {
      const vm = this;
      const place = vm.autoComplete.getPlace();
      // console.log("[地點]", place);
      const location = place.geometry.location;
      // 取得緯度 經度
      const lat = location.lat(),
        lng = location.lng();
      // 移動地圖至指定坐標
      vm.map.panTo({
        lat,
        lng,
      });
      // 如果地標已存在
      if (vm.marker) {
        // 讓現有地標消失
        vm.marker.setMap(null);
      }
      // 設定地圖縮放率
      vm.map.setZoom(15);
      vm.lat = lat;
      vm.lng = lng;
      // 渲染地標
      vm.renderMarker();
      // 通知上層元件
      // @locationChanged="(val) => ()"
      vm.$emit("locationChanged", {
        lat: vm.lat,
        lng: vm.lng,
      });
    },
    renderMarker() {
      const vm = this;
      // 地標圖示
      const marker = new google.maps.Marker({
        position: { lat: vm.lat, lng: vm.lng },
        map: vm.map,
      });
      console.log("[地標]", marker);
      // 將地標圖示存到Vue元件
      vm.marker = marker;
    },
  },
  mounted() {
    const vm = this;
    console.log("[vm.value]", vm.value);
    // 取得DOM
    const input = vm.$refs.locationInput;
    const autoComplete = new google.maps.places.Autocomplete(input);
    autoComplete.addListener("place_changed", vm.placeChanged);
    // 將autoComplete存放到Vue元件內
    vm.autoComplete = autoComplete;
    // 如果value存在
    if (vm.value) {
      vm.lat = vm.value.lat;
      vm.lng = vm.value.lng;
    }
    // 取得畫面上ref是map的元素
    const mapDiv = vm.$refs.map;
    // 初始地圖
    const map = new google.maps.Map(mapDiv, {
      center: {
        lat: vm.lat,
        lng: vm.lng,
      },
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      styles: becomeADinosaur,
    });
    // console.log("[map]", map);
    vm.map = map;
    vm.renderMarker();
  },
};
</script>
<style>
.map {
  width: 100%;
  height: 300px;
}
</style>