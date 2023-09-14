<template>
  <div class="Footer">
    <div class="welcome"> Welcome to contact : codpropm@gmail.com </div>
    <div class="icons">
        <img class="icon" src="@/assets/facebook.png" @click="jump('https://www.facebook.com/profile.php?id=100000541754710')">
        <img class="icon" src="@/assets/github.png" @click="jump('https://github.com/HYK0501')">
        <img class="icon" src="@/assets/1384014.png" @click="jump('https://www.linkedin.com/in/%E8%98%85-%E4%BD%91-%E9%AB%98-28b493235/')">
    </div>
    <div class="author"> © by Heng-Yu Kao </div>
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
        font-size: 30px;
        display : block;
        background : #CBD0D8;
         
        .welcome{
          text-align: center;
        }
        .icons {
          margin : 1vw auto;
          justify-content: center;
          display : flex;
            .icon{
              margin-right : 2vw;
              width : 3vw;
            }
        }
        .author{
          text-align: center;
        }
    }
@media screen and (max-width: 1000px) {
  .Footer{
        font-size: 20%;
        display : block;
        background : #CBD0D8;
         
        .welcome{
          text-align: center;
        }
        .icons {
          margin : 1vw auto;
          justify-content: center;
          display : flex;
            .icon{
              margin-right : 5%;
              width : 5%;
            }
        }
        .author{
          text-align: center;
        }
    }
}
</style>
