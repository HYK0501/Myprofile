<template>
    <div class="root">
        <div class="WorkExperiemcesContainer" v-for="(experience , index) in Experiences">
            <h1>{{ experience.company }}</h1>
            <ul>
              <li> {{ experience.position }} </li>
              <li> {{ experience.time }} </li>
              <li> {{ experience.description }} </li>
            </ul> 
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "WorkExperiences",
  props: {
  },
  data() {
    return { 
        Experiences : [
                {   
                    company : "Trend Micro",
                    position: "Software Engineer Intern",
                    time : "Jul 2022~ Aug 2022",
                    description : "Use stress testing tools like Locust to write scripts for attacking potential API vulnerabilities in the system.",
                },
                {   
                    company : "HSNL",
                    position: "Assist in laboratory-based projects.",
                    time : "Sep 2021~ Aug 2023",
                    description : "Assist in developing an online education platform called QSticker, primarily responsible for backend API development, design, and performance optimization.",
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
        .WorkExperiemcesContainer {
            text-align:left;
            padding-left :  1.5vw;
            padding-top :  1.5vw;
            padding-bottom :  1.5vw;
        }
    }
</style>
