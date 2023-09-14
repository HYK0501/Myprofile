<template>
  <div class="root">
    <div class="educationContainer" v-for="(education , index) in educations">
        <img class="icon" :src="education.image" >
        <div class="texts">
            <h1> {{ education.name }} </h1>
            <ul>
              <li> {{ education.deperment }} </li>
              <li> {{ education.time }} </li>
            </ul> 
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Educations",
  props: {
  },
  data() {
    return { 
        educations : [
                {   
                    name : "National Tsing Hua University",
                    deperment : "Master of Computer Science",
                    time : "Sep 2021~ Aug 2023",
                    image: require('@/assets/nthulogo.png'),
                },
                {   
                    name : "University of Taipei",
                    deperment : "Bachelor of Department of Mathematics",
                    time : "Sep 2016 ~ Jun 2021",
                    image: require('@/assets/UTLOGO.png'),
                },
        ]
    }
  },
  methods: {
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped >   
.root{
 background-color: #F4F3EA;
 margin-top : 0;
 margin-bottom: 0;
 .educationContainer {
    display: flex;
    justify-content: center;
    padding-bottom : 1.5vw;
    padding-top : 1.5vw;
        .icon{
          width : 8vw;
        }
        .texts{
            margin-left : 3vw;
            display : block;
            text-align:left;
            width : 30vw;
        }
  } 
}

  @media screen and (max-width: 1000px) {
    .root{
      background-color: #F4F3EA;
      margin-top : 0;
      margin-bottom: 0;
    .educationContainer {
      display: flex;
      justify-content: center;
      padding-bottom : 20px;
      padding-top : 20px;
        .icon{
          width : 40%;
        }
        .texts{
            margin-left : 3vw;
            display : block;
            text-align:left;
            width : 50%;
        }
  } 
}
  }
</style>
