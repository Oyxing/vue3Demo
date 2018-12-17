<template>
  <div class="index">
    <h1>表单</h1>
    <Table 
        :tabledata="tableData"
        :tableColumn="tableColumn" 
        :layout="layout" 
     />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from '@/components/Table.vue'
@Component({
  components: {
    Table,
  },
})
export default class Index extends Vue {
     tableData: Array<any> =  []
     layout:string = "total, sizes, prev, pager, next, jumper"
     tableColumn:Array<any> = [
       {prop:"date", label:"日期",width:""},
       {prop:"name", label:"姓名",width:""},
       {prop:"address", label:"地址",width:""},
       {prop:"operation", label:"操作",width:"",
       operation:[
         {type:"primary",title:" 确定",size:"", icon:"",fun:function(row:any){
           console.log("确定")
           console.log(row)
         }}, 
         {type:"warning",title:" 删除",size:"", icon:"",fun:function(row:any){
           console.log("删除")
           console.log(row)
         }}
         ]
       },
     ]
    created(){
      this.tableData = []
      for (var i = 0 ; i < 50; i++){
          this.tableData.push({
              date: '2016-05-02',
              name: '王小虎'+i,
              address: '上海市普陀区金沙江路 1518 弄'
            })
      }
    }
}
</script>
