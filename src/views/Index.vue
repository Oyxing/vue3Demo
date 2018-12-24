<template>
  <div class="index">
    <h1>表单d</h1>
    <Table 
        @table-click="tableClick" 
        :tableData="tableData"
        :tableColumn="tableColumn" 
        :pagination="pagination" 
        :searchField="searchField"
        :border="true"
     >
      <template slot="action" slot-scope="scope">
        <el-button type="primary" @click="funName(scope)">点击</el-button>
      </template>
      <template slot="status" slot-scope="scope">
        <el-tag v-if="scope.status">{{scope.status}}偶数</el-tag>
        <el-tag v-else>{{scope.status}}奇数</el-tag>
      </template>
     </Table>
  </div>
</template>
<script lang="ts">
import { Tag,Button } from 'element-ui'
import { Component, Vue } from 'vue-property-decorator';
Vue.use(Button)
Vue.use(Tag)
import Table from '@/components/Table.vue'
@Component({
  components: {
    Table,
  },
})
export default class Index extends Vue {
     tableData: Array<any> =  []
     tableColumn:Array<any> = [
       {type:"selection",width:"55",fixed:true},
       {prop:"date", label:"日期",width:"",sortable:true},
       {prop:"status",label:"状态"},
       {prop:"name", label:"姓名",width:""},
       {prop:"address",label:"地址",width:""},
       {type:"amend",name:"status",label:"状态"},
       {type:"amend",name:"action",label:"操作"},
     ]
     searchField:Array<any> = [
        {value:"name",label:"姓名"},
        {value:"date",label:"日期"}
     ]
     pagination: any  = {
        layout:"total, sizes, prev, pager, next, jumper",
        pagerCount:5
     }
    created(){
      this.tableData = []
      var q = 33
      for (var i = 0 ; i < 33; i++){
        q--
        if (i%2){
          var name = "王小虎"
        }else{
          var name = "王小红"
        }
          this.tableData.push({
              date: "2016"+q,
              name: name+i,
              status:i%2,
              address: '上海市普陀区金沙江路 1518 弄',
            })
      }
    }
    // 复选框
    tableselectionChange(rowdata:any){
      console.log("rowdata")
      console.log(rowdata)
    }
    // 单元格被点击
    tableClick(row:any, column:any, cell:any, event:any){
      console.log("row")
      console.log(row)
    }
    // 鼠标 移除
    tablemouseleave(row:any, column:any, cell:any, event:any){
      console.log("row")
      console.log(row)
    }
    // 鼠标移入
    tablemouseenter(row:any, column:any, cell:any, event:any){
      console.log("row")
      console.log(row)
    }
    // 单元格 双击
    cellDblclick(row:any, column:any, cell:any, event:any){
        console.log("row")
        console.log(row)
    }  
    // 行点击
    rowClick(row:any, column:any, event:any){
        console.log("row")
        console.log(row)
    } 
    // 当某一行被鼠标右键点击时会触发该事件
    rowContextmenu(row:any,event:any){
        console.log("row")
        console.log(row)
    }
    // 行内 双击
    rowDblclick(row:any,event:any){
        console.log("row")
        console.log(row)
    }
    funName(row:any){
      console.log("row")
      console.log(row)
    }
}
</script>
