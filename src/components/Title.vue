<template>
  <div class="TitleContainer">
    <h1 class="title"> {{ title }} </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    title: {
      type: String,
      defualt: true,
    },
  },
  methods: {
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped >
    .TitleContainer {
        background : #CBD0D8;
       .title {
           margin: 0 auto;
           text-align: center;
            color: #333D51;
            font-size: 50px;
            max-width: 70%;   
            position: relative;        
        }
    }   
</style>
