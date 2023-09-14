<template>
   <div class="nav">
      <div class="name">
        KaoBarry
      </div>
      <div class="text" @click="jumpToId(id)" v-for="(id , index) in Ids">
        {{ id }}
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Nav",
  props: {
  },
  data() {
    return { 
        Ids : [ "Home" , "Educations" , "WorkExperience" , "Projects"]
    }
  },
  methods: {
   jumpToId( id : string ){
      const container = document.getElementById(id);
      if( container != null){
        container.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.nav{
    background-color: #D3AC2B;
    height : 3vw;
    display: flex;
    align-items: center; 
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0;
    margin-top: 0;
    z-index:10;

    .name{
      font-size : 1.5vw;
      margin-left : 1vw;
      margin-right : 3vw;
      color: #333D51;
    }
    .text{
      margin-right : 3vw;
      font-size : 1vw;
      font-weight : 10%;
      color: #333D51;
    }
  }
</style>
