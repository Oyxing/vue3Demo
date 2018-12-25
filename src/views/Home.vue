<template>
  <div class="home">
   
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg">
      <div slot="hellos" slot-scope="scope">
        <el-input v-model="msg"></el-input>
      </div>
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import { Input,Button } from 'element-ui'
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  data(){
    return {
      msg:"Welcome to Your Vue App"
    }
  }
}
</script>
