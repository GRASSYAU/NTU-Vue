<template>
  <div>
      <label for="">地標</label>
      <input ref="locationInput" type="text" class="form-contrlo" />
    </div>
</template>
<script>
export default {
    name:'GoogleMapInput',
    data() {
        return {
            autoComplete:null
        }
    },
    methods: {
        placeChanged(){
            const place = this.autoComplete.getPlace()
            console.log("[地點]",place);
        }
    },
    mounted() {
        const vm =this;
        console.log("[vm]",vm);
        const input = vm.$refs.locationInput;
        console.log("[input]", input);
        const autoComplete = new google.maps.places.Autocomplete(input); 
        autoComplete.addListener("place_changed", vm.placeChanged);
        // 將GOOGLE提供的autoComplete存到VUE元件內
        vm.autoComplete = autoComplete;
    },
}
</script>