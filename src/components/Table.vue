<template>
  <div class="table">
            <slot name="searchview"></slot>
            <el-table
              :border="border?border:false"
              :data="layout?chagedata(tableData):tableData"
              @selection-change="handleSelectionChange"
              @cell-mouse-leave="cellMouseLeave"
              @cell-mouse-enter="cellMouseEnter"
              @cell-click="cellClick"
              @cell-dblclick="cellDblclick" 
              @row-click="rowClick"
              @row-contextmenu="rowContextmenu" 
              @row-dblclick="rowDblclick"
              :height="height"
              style="width: 100%;margin-top:20px;">
               <el-table-column
                 v-if="selection"
                :type="selection.type"
                :fixed="selection.fixed?selection.fixed:false"
                :width="selection.width"
                :align="selection.align"
                :header-align="selection.headerAlign"
              >
              </el-table-column>
              <el-table-column
                v-for="(item,index) in tableColumn" :key="index"
                :prop="item.prop" 
                :fixed="item.fixed?item.fixed:false"
                :sortable="item.sortable"
                :label="item.label"
                :width="item.width"
                :align="item.align"
                :header-align="item.headerAlign"
              >
                <template slot-scope="scope">
                    <slot :name="item.name" :row="scope.row"></slot>
                      {{scope.row[item.prop]}}
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              v-if="pagination"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-sizes="[5,10,15,20,30]"
              :style="pagination.style"
              :page-size.sync="pagesize"
              prev-text="上一页"
              next-text="下一页"
              :pager-count="pagerCount"
              :layout="layout"
              :total="total">
            </el-pagination>
  </div>
</template>
<script lang="ts">
import { Table,TableColumn,Row,Pagination,Col,Input,Select,Option } from 'element-ui'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Pagination)

interface searchContent {
    searchindexes: string;
    searchvalue: string;
}
    
@Component   
export default class TableView extends Vue { 
    @Prop({default:false}) private searchContent!: searchContent;
    @Prop() private tableData!: Array<any> ;
    @Prop() private tableColumn!: Array<any> ;
    @Prop() private pagination!: any ; 
    @Prop() private border!: boolean ;
    @Prop() private height!: string;
    @Prop() private selection!: any;
    pagesize:number = 5
    total!:number
    currentPage: number = 1 ;
    pagerCount:number = this.pagination?this.pagination.pagerCount?this.pagination.pagerCount:5:5;
    layout:string = this.pagination?this.pagination.layout?this.pagination.layout:"total, sizes, prev, pager, next, jumper":"";
    created() {
        console.log(this.tableData)
    }
    //  一页多少个 
    handleSizeChange(val:any){
        this.pagesize= val
        this.currentPage = 1
    }
    // 第几页
    handleCurrentChange(val:any){
        this.currentPage = val
    }
    // 在经过 分页  和 搜索 时   数据改变
    chagedata(tableData:Array<any>){
        // 索引
        const searchindexes = this.searchContent.searchindexes ||  "name"
        // 搜索的值
        const searchvalue = this.searchContent.searchvalue
        var newtableData =  tableData.filter(data => (!searchvalue || data[searchindexes].toLowerCase().includes(searchvalue.toLowerCase())))
        this.total = newtableData.length
        return newtableData.length > 10?newtableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize):newtableData
    }
    // 当选择项发生变化时会触发该事件
    handleSelectionChange(rowdata:any){
        this.$emit("table-selection-change",rowdata)
    }
    // 当某个单元格被点击时会触发该事件
    cellClick(row:any, column:any, cell:any, event:any){
        this.handleEvent(event,row,"click",column,cell)
    }
    // 当某个单元格被双击击时会触发该事件
    cellDblclick(row:any, column:any, cell:any, event:any){
        this.handleEvent(event,row,"cell-dblclick",column,cell)
    }  
    // 当单元格 hover 进入时会触发该事件
    cellMouseEnter(row:any, column:any, cell:any, event:any){
        this.handleEvent(event,row,"mouse-enter",column,cell)

    }
    // 当单元格 hover 退出时会触发该事件
    cellMouseLeave(row:any, column:any, cell:any, event:any){
        this.handleEvent(event,row,"mouse-leave",column,cell)
    }
    // 当某一行被点击时会触发该事件
    rowClick(row:any, column:any, event:any){
        this.handleEvent(event,row,"row-click",column,"")
    } 
    // 当某一行被鼠标右键点击时会触发该事件
    rowContextmenu(row:any,event:any){
        this.handleEvent(event,row,"row-contextmenu","","")
    }
    // 当某一行被双击时会触发该事件
    rowDblclick(row:any,event:any){
        this.handleEvent(event,row,"row-dblclick","","")
    }
    // 时间添加
    handleEvent(event:any,row:any,name:string,column:any,cell:any){
     if(cell){
        if(column){
          this.$emit(`table-${name}`, row, event, column,cell);
        }
      }
      this.$emit(`table-${name}`, row, event, column);
    }
} 
</script>
<style scoped lang="stylus">
@import "../assets/css/lib/theme-chalk/index.css";
</style>