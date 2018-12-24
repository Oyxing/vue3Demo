<template>
  <div class="home">
   
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue App">
      <template slot="hello" slot-scope="scope" >
        <div>
          {{scope}}
          <el-button>{{scope.text}}</el-button>
        </div>
      </template>
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
