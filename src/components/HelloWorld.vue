<template>
  <div class="hello">
      <!-- <h1 >{{msgdata}}</h1>
        <input type="checkbox"  :checked=checked @change="changed"/> 
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <span :style="{'color':index%2?'red':'#00abff','font-size':'20px'}">{{item}}</span>
          </li>
        </ul>
      <br/>
       <br/>
       <h1>{{label}}</h1>
        <el-button type="primary" @click="funName(list)">点击</el-button>
        <el-button type="primary" @click="identity(1)">泛型</el-button>
        <el-button type="primary" @click="test()">测试</el-button>
        <slot name="hello" text="我是helloddd" text1="组件的数据"></slot>
        -->
        <slot name="hellos" data="{name:'你好',age:2}" msg="msg"></slot>
        <h1>{{ msg }}</h1>
        <h1>{{ msgjson }}</h1>
         <span v-for="(item,index) in msgjson" :key="index">
          {{item}}
        </span>
        <el-table
            :data="msg"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        <br>
        <br>
        <span v-for="(item,index) in msgarr" :key="index">
          {{item}}
        </span>
  </div>
</template>

<script lang="ts">
import { Tag,Button,Table,TableColumn, } from 'element-ui'
import { Component, Prop,Model,Inject, Vue } from 'vue-property-decorator';
Vue.use(Button)
Vue.use(Tag)
Vue.use(Table)
Vue.use(TableColumn)

// 枚举
enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}
interface Named {
    name: string;
    location: string;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: Array<any> ; 
  @Prop() private msgjson!: Object ; 
  @Prop() private msgarr!: Array<any> ; 
  label: Boolean = true
  msgdata:String = "你好"
  @Model('change') checked!: boolean
  created(){
    console.log("this.msg")
    console.log(this.msg)
    console.log(this.msgjson)
    console.log(typeof(this.msg))
    console.log(typeof(this.msgjson))
    console.log("this.msg")
    // this.$root.newvue.str = "你好"
    this.asyncfun()
  }
  changed(ev:any) {
      this.label = ev.target.checked
  };
  //  定义数组
  list: Array<number> = [1,2,3,4,5];
  // 函数
  funName = function(arr:Array<number>){
    console.log("arr")
    console.log(arr)
  }
  // 泛型  
  identity = function <T>(arg: T): T {
      let arr = [1,2,3,4];
      return arg;
  }
  test = function(){
      console.log(Direction.Right)
      let x: Named;
      let y = { name: 'Alice', location: 'Seattle' };
      x = y;
      console.log("x",x)
  }

  asyncfun = function(){
      Promise.all([
          new Promise(function(resolve, reject) {
            resolve(1)
          }),
          new Promise(function(resolve, reject) {
            resolve(2)
          }),
          new Promise(function(resolve, reject) {
            resolve(3)
          })
        ]).then(arr => {
          console.log(arr) // [1, 2, 3]
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "../assets/css/lib/theme-chalk/index.css";
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
