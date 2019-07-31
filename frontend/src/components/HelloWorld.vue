<style lang="scss">
  @import '../assets/css/timeline.css';  
</style>

<template>
  <div class="timeline-frame">
    <v-toolbar>
      <v-toolbar-title>dev story</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text @click="info">info</v-btn>
        <v-btn text @click="viewProj1">project1</v-btn>
        <v-btn text @click="viewProj2">project2</v-btn>
      </v-toolbar-items>

      <!-- <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template> -->
    </v-toolbar>
    <div id="skill-info">
      <v-card
    
    class="mx-auto"
  >   

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">name</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>이재훈</v-list-item-title>
          <v-list-item-subtitle>LEE JAE HOON</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      
      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>010-2245-5126</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      
      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mail</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>dlwognscap@gmail.com</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    
    <v-list two-line id="info-frame2">
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">보유기술</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>programming language / methodology</v-list-item-title>
          <v-list-item-subtitle>PHP , Javascript, HTML5, CSS3</v-list-item-subtitle>
          <v-list-item-title>Framework / Library</v-list-item-title>
          <v-list-item-subtitle>Codeigniter ,Xdebug, Bootstrap, Jquery, Vuejs</v-list-item-subtitle>
          <v-list-item-title>Server</v-list-item-title>
          <v-list-item-subtitle>Mysql , MongoDB, Apache</v-list-item-subtitle>
          <v-list-item-title>Environment</v-list-item-title>
          <v-list-item-subtitle>AWS, Linux, Windows, Wsl</v-list-item-subtitle>
          <v-list-item-title>Etc</v-list-item-title>
          <v-list-item-subtitle>Github, Jira</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">현재 사용된기술</v-icon>
          <v-list-item-title>vue,vuetify,webpack / nodejs,express</v-list-item-title>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  
  </v-card>
    </div>
    <div id="proj1">
        <proj1></proj1>
    </div>
    
    <div id="proj2">
      <proj2></proj2>
    </div>      
  </div>
  
</template>

<script>

import proj1 from './Proj1.vue'
import proj2 from './Proj2.vue'



export default {
  data: () => ({
    
  }),
  components : {
    proj1,
    proj2
  },
  methods : {
    info() {
      $('#proj1').css('display','none');
      $('#proj2').css('display','none');
      $('#skill-info').css('display','block');
    },
    viewProj1() {
      $('#proj1').css('display','block');
      $('#proj2').css('display','none');
      $('#skill-info').css('display','none');
    },
    viewProj2() {
      $('#proj1').css('display','none');
      $('#proj2').css('display','block');
      $('#skill-info').css('display','none');
    }
  }
}
</script>
