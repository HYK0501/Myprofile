<template>
  <div class="aboutMeContainer">
    <img class="avatar"  src="@/assets/ava.jpg">
    <div class="aboutMeText">
      <h1>About Me</h1>
      <p>My name is Heng-Yu Kao ,you can call me Barry. I'm a recent graduate with a Master's degree in Computer Science from Nationl Tsinghua University. More interested in software development, mainly good at back-end development, 
      and also has some knowledge of front-end skills.   </p>
      <div class="icons">
        <img class="icon" src="@/assets/facebook.png" @click="jump('https://www.facebook.com/profile.php?id=100000541754710')">
        <img class="icon" src="@/assets/github.png" @click="jump('https://github.com/HYK0501')">
        <img class="icon" src="@/assets/1384014.png" @click="jump('https://www.linkedin.com/in/%E8%98%85-%E4%BD%91-%E9%AB%98-28b493235/')">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HomeView",
  methods: {
    jump( link: string) {
      //console.log(link)
      window.open( link,'_blank' );
    },
  },
})

</script>


<style>
  .aboutMeContainer {
    display: flex;
    background-color: #F4F3EA;
    justify-content: center;
    
    .avatar {
      width : 10vw; 
      margin-right : 5vw;
      margin-top : 1vw;
      margin-bottom : 1vw;
      border-radius: 10%;
    
    }
    .aboutMeText {
      display : block;
      text-align:left;
      width : 30vw;
      .icons {
        display: flex;
        
        .icon{
          margin-top : 1vw;
          margin-right : 2vw;
          width : 3vw;
        }
      }
    }
    
  }
  
</style>
