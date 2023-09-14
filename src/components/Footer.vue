<template>
  <div class="Footer">
    <div class="welcome"> Welcome to contact : codpropm@gmail </div>
    <div class="icons">
        <img class="icon" src="@/assets/facebook.png" @click="jump('https://www.facebook.com/profile.php?id=100000541754710')">
        <img class="icon" src="@/assets/github.png" @click="jump('https://github.com/HYK0501')">
        <img class="icon" src="@/assets/1384014.png" @click="jump('https://www.linkedin.com/in/%E8%98%85-%E4%BD%91-%E9%AB%98-28b493235/')">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Footer",
  props: {
  },
  methods: {
    jump( link: string) {
      //console.log(link)
      window.open( link,'_blank' );
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped >
    .Footer{
        font-size: 20%;
        background : #CBD0D8;
        display : flex;
        justify-content: center;
        align-items: center; 
        .welcome{
          width: 800px;
          margin : 1%; 
        }
        .icons {
            .icon{
              margin-top : 1vw;
              margin-right : 5%;
              width : 10%;
            }
        }
    }
   
</style>
