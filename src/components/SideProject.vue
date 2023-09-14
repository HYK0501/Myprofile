<template>
    <div class="root">
        <div class="SideProjectContainer" v-for="(sideProject  , index) in sideProjects">
            <img class="image" :src="sideProject.image" >
            <div class="texts">
                <h1> {{ sideProject.name }} </h1>
                <div class="skillList" >
                    Skills :     
                    <div class="skill" v-for="(skill  , index) in sideProject.skills" >
                    {{ skill }}
                    </div>
                </div>
                <p> {{ sideProject.description }} </p>
            </div>
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
                   name : "E-commerce Analysis system" ,
                   image :  require('@/assets/ecom.png'),
                   skills : [ "Flask" , "Docker", "PostgreSql" , "Neo4j" , "Python"],
                   description : "We have developed a platform for data analysis for an e-commerce business. My team and I have implemented various functionalities, such as identifying the most popular or easily returnable products for a given vendor. Additionally, we can track when and where these products are likely to be purchased and which warehouse they will be delivered to. The location information can also be displayed on a map. In this project, I am responsible for the backend development."
                },
                {   
                   name : "public booker",
                   image : require('@/assets/public booker.png'),
                   skills : [ "React Native" , "JavaScript" ],
                   description : "This app allows you to directly record expenses by scanning the QR code on a uniform invoice. You can log the items you've purchased and their corresponding prices. Furthermore, you can export your recorded expenses as a CSV file and upload it to Google Drive."
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
            justify-content: center;
            display : flex;
            .image{
                width : 30vw;
            }
            .texts{
                margin-left : 3vw;
                display : block;
                text-align:left;
                width : 30vw;
                .skillList {
                    display : flex;
                     flex-wrap: wrap;
                    .skill {
                        border-radius: 10%;
                        padding : 0.1vw; 
                        background : #CBD0D8;
                        margin-right: 0.25vw;
                        margin-left: 0.25vw;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .root{
        background-color: #F4F3EA;
        margin-top : 0;
        margin-bottom: 0;
        .SideProjectContainer {
            text-align:left;
            padding-left :  1.5vw;
            padding-top :  1.5vw;
            padding-bottom :  1.5vw;
            justify-content: center;
            display : flex;
            .image{
                width : 400px;
                
            }
            .texts{
                display : block;
                text-align:left;
                width : 400px;
            }
        }
    }
}
</style>