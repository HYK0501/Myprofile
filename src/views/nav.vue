<template>
  <div>
    <div class="nav">
      <div class="name">
        KaoBarry
      </div>
      <div class="text" @click="jumpToId(id)" v-for="(id , index) in Ids">
        {{ id }}
      </div>
    </div>
    <div class="navRWD">
      <div class="navicon"  @click="clickSideNav()">
         <div class="icon"><i class="fas fa-bars" style="font-size:25px" /></div>
      </div>

      <div v-if="showSideNav" class="navDown" >
        <b-dropdown-item class="item" @click="jumpToId(id)" v-for="(id , index) in Ids">
          {{ id }}
        </b-dropdown-item>
      </div>
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
        Ids : [ "Home" , "Educations" , "WorkExperience" , "Projects"],
        showSideNav: false,
    }
  },
  methods: {
   jumpToId( id : string ){
      const container = document.getElementById(id);
      if( container != null){
        container.scrollIntoView({ behavior: 'smooth' });
      }
    },
    clickSideNav(){
      this.showSideNav = !this.showSideNav ;
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
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
  .navRWD{
    display : None;
  }
  @media screen and (max-width: 1000px) {
    .nav{
      display : None;
    }
    .navRWD{
      display : block;
      background-color: #D3AC2B;
      position: fixed;
      top: 0;
      height : 5%;
      width: 100%;
      z-index:10;
      .navicon {
        height:100%;
        .icon {
          margin-left: auto;
          width:40px;
          i {
            text-align: center;
            width: 30px;
            height: 100%;
          }
        }
      }
    }
    .navDown{
      width: 100%;
      font-size : 20px;
      background-color: #D3AC2B;
      text-align: center;
      .item{
        margin-bottom: 3px;
      }
    }
  }
</style>
