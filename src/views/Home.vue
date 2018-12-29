<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" :msgjson="msgjson" :msgarr="[1,2,3,3,4,2]">
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import { Input,Button } from 'element-ui'
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
Vue.use(Input)
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
    data(){
      return {
        msg:[{"date":"201632","name":"王小红0","status":0,"address":"上海市普陀区金沙江路 1518 弄"}],
        msgjson:{"date":"201632","name":"王小红0","status":0,"address":"上海市普陀区金沙江路 1518 弄"}
      }
    }
    created(){
        this.getjsonps()
    }
    getjsonps(){
       console.log(this)
    }
}
</script>
