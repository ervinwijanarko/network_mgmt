<template>
  <div class="dashboard"> 
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container  class="my-5">
      
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex> 
          <v-flex xs6 sm4 md2>
            <div class="caption grey-text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey-text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey-text">Status</div>
            <div>{{project.status}}</div> 
          </v-flex> 
        </v-layout> 
        <v-divider></v-divider> 
      </v-card>

    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
 data(){
   return {
     projects : [
       { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status : 'ongoing', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis voluptates numquam laborum at mollitia minus rem quas accusamus, quod, modi saepe distinctio in totam sapiente nobis perspiciatis. Odio, doloremque.' },
       { title: 'Code up the Homepage', person: 'Chunli', due: '10st Jan 2019', status : 'complete', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis voluptates numquam laborum at mollitia minus rem quas accusamus, quod, modi saepe distinctio in totam sapiente nobis perspiciatis. Odio, doloremque.'},
       { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2019', status : 'complete', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis voluptates numquam laborum at mollitia minus rem quas accusamus, quod, modi saepe distinctio in totam sapiente nobis perspiciatis. Odio, doloremque.'},
       { title: 'Create a comunity forum', person: 'Gouken', due: '20th Jan 2019', status : 'overdue', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis voluptates numquam laborum at mollitia minus rem quas accusamus, quod, modi saepe distinctio in totam sapiente nobis perspiciatis. Odio, doloremque.'}
     ]
   }
 }
}
</script>

<style>
.complete{
  border-left: 6px solid #3cd1c2;
}
.ongoing{
  border-left: 6px solid orange;
}
.overdue{
  border-left: 6px solid tomato;
} 
 
</style>
