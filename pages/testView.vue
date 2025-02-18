<template>
  <v-col>
    <div class="h-[480px] md:h-[640px]">
      <LMap ref="map" :zoom="zoom" :center="center" :use-global-leaflet="false">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker
          v-for="item in res?.data"
          :lat-lng="item.station.geo"
          :key="item.uuid"
          @click="zoomLocation(item.station.geo)"
        >
          <LIcon class-name="">
            <span
              class="text-white rounded-full px-2 py-1 hover:opacity-75"
              :class="changeColor(Number(item.aqi))"
            >
              {{ item.aqi }}
            </span>
          </LIcon>
        </LMarker>
      </LMap>
    </div>
  </v-col>
</template>

<script setup lang="ts">
// import AirQualityResponse Type
import type { AirQualityResponse } from "../types/responseInterface";

// create all variables
const zoom = ref<number>(6);
const center = ref<[number, number]>([13.7563309, 100.5017651]);

// call api from airQuality class
const airQuality = new AirQuality();
const res = ref<AirQualityResponse>();

// create function to change color
const changeColor = (aqi: number) => {
  if (aqi < 50) {
    return "bg-green-500";
  } else if (aqi < 85) {
    return "bg-yellow-500";
  } else {
    return "bg-red-500";
  }
};

// create function to zoom location
const zoomLocation = (location: [number, number]) => {
  if (zoom.value === 10) {
    zoom.value = 6;
  }
  setTimeout(() => {
    center.value = location;
  }, 300);

  setTimeout(() => {
    zoom.value = 10;
  }, 500);
};

// call api when component mounted
onMounted(async () => {
  await airQuality.getAirQuality().then((response: AirQualityResponse) => {
    if (response) {
      res.value = response;
    }
  });
});
</script>
