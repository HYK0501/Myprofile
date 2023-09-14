<template>
    <div class="root">
        <div class="SideProjectContainer" v-for="(sideProject  , index) in sideProjects">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SideProject",
  props: {
  },
  data() {
    return { 
        sideProjects : [
                {   
                   name : "GEC Masker" ,
                   image :  require('@/assets/GEC.png'),
                   skills : [ "PyTorch" , "Python"],
                   description : "I have optimized and modified the open-source project 'gector' based on Grammarly. After identifying the parts of a text with grammar errors, it may be possible to make corrections using models such as MLM (Masked Language Model)."
                },
                {   
                   name : "public booker",
                   image : require('@/assets/public booker.png'),
                   skills : [ "React Native"],
                   
                },
        ]
    }
  },
  methods: {
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .root{
        background-color: #F4F3EA;
        margin-top : 0;
        margin-bottom: 0;
        .SideProjectContainer {
            text-align:left;
            padding-left :  1.5vw;
            padding-top :  1.5vw;
            padding-bottom :  1.5vw;
        }
    }
</style>