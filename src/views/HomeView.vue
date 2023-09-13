<template>
  <div class="root">
    <div class="space" id="Home">
    </div>
    <div class="aboutMeContainer">
      <img class="avatar"  src="@/assets/ava.jpg">
      <div class="aboutMeText">
        <h1>About Me</h1>
        <p>My name is Heng-Yu Kao ,you can call me Barry. I recently graduate with a Master's degree in Computer Science from Nationl Tsinghua University. More interested in software development, mainly good at back-end development, 
        and also has some knowledge of front-end skills.   </p>
        <p> email : codpropm@gmail.com </p>
        <div class="icons">
          <img class="icon" src="@/assets/facebook.png" @click="jump('https://www.facebook.com/profile.php?id=100000541754710')">
          <img class="icon" src="@/assets/github.png" @click="jump('https://github.com/HYK0501')">
          <img class="icon" src="@/assets/1384014.png" @click="jump('https://www.linkedin.com/in/%E8%98%85-%E4%BD%91-%E9%AB%98-28b493235/')">
        </div>
      </div>

      <div class="SkillsContainer">
        <h1> Skills </h1>
        <ul>
          <li >Programming Language : 
            <ul>
              <li> Java </li>
              <li> JavaScript </li>
              <li> Python </li>
              <li> C++ </li>
            </ul> 
          </li>
          <li >Other Develope Tool : 
            <ul>
              <li> GCP : Cloud Engine , Cloud Runs , Cloud Tasks , Cloud Functions </li>
              <li> AWS : EC2 , S3 , Lambda , ECR , ECS , Cognito   </li>
              <li> Backend framwork : JavaEE , Flask </li>
              <li> Frontend framwork : React Native , Vue</li>
            </ul> 
          </li>
          <li >Language :
            <ul>
              <li>Chinese (native) </li>
              <li>English  </li>
            </ul> 
          </li>
        </ul>
      </div>
    </div>
    <Title title="Educations" id="Educations"/>
    <Educations />
    <Title title="Work Experience" id="WorkExperience" />
    <WorkExperiences />
    <Title title="Side Projects" id="SideProject"/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import  Title  from "@/components/Title.vue";
import  Educations from "@/components/Educations.vue";
import  WorkExperiences from "@/components/WorkExperiences.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Title,
    Educations,
    WorkExperiences,
  },
  
  methods: {
    jump( link: string) {
      //console.log(link)
      window.open( link,'_blank' );
    },
    
  },
})

</script>


<style>
  .root{
    margin: 0;
  }
  .space{
    margin: 0;
    background-color: #F4F3EA;
    height : 3vw;
  }
  .aboutMeContainer {
    display: flex;
    background-color: #F4F3EA;
    justify-content: center;
    margin : 0;
    .avatar {
      width : 250px; 
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
    .SkillsContainer {
      text-align:left;
      width : 30vw;
      margin-left:3vw;
      .icon{
          width : 1.5vw;
        }
    }
  }

  @media screen and (max-width: 1000px) {
    .aboutMeContainer {
    background-color: #F4F3EA;
    justify-content: center;
    margin : 0;
    .avatar {
      width : 210px; 
      height: 300px;
      margin-right : 5vw;
      margin-top : 1vw;
      margin-bottom : 1vw;
      border-radius: 10%;
    }
    .aboutMeText {
      display : block;
      text-align:left;
      width : 50vw;
      .icons {
        display: flex;
        
        .icon{
          margin-top : 2px;
          margin-bottom : 5px;
          margin-right : 10px;
          width : 50px;
        }
      }
    }
    .SkillsContainer {
      display : None;
    }
  }

  }
  
</style>
