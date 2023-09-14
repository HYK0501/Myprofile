<template>
<div class="SkillsContainer">    
    <ul class="SkillTable">
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
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Skills",
  props: {
  },
  methods: {
   
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SkillsContainer {
    text-align:left;
    background-color: #F4F3EA;
    width : 30vw;
    margin-left:3vw;
}

@media screen and (max-width: 1000px) {
    .SkillsContainer {
        margin : 0;
        padding-top : 10px;
        padding-bottom : 10px;
        width : 100%;
        .SkillTable {
            margin : 0;
             
        }
    }
}
</style>
