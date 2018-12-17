<template>
  <div class="table">
    <el-table
      :data="chunk"
      style="width: 100%">
      <el-table-column
        v-for="(item,index) in tableColumn" :key="index"
        :prop="item.prop" 
        :label="item.label"
        :width="item.width"
       >
        <template slot-scope="scope">
          <div v-if="item.operation"> 
            <el-button v-for="(item,index) in item.operation" 
              :key="index" 
              :size="item.size" 
              :icon="item.icon"
              @click="item.fun(scope.row)" 
              :type="item.type" 
              >
              {{item.title}}
            </el-button>
          </div>
          <div v-else>
              {{scope.row[item.prop]}}
          </div>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="pageSizes"
      :page-size.sync="pagesize"
      :layout="layout"
      :total="total">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component 
export default class TableView extends Vue {
    @Prop() tabledata!: Array<any> ;
    @Prop() tableColumn!: Array<any> ;
    @Prop() layout!: string ;
    pagesize:number = 10
    currentPage: number = 1 ;
    currentid:number = 0;
    pagesizenum:number = 10;
    newData!:Array<any>;
    chunk!:Array<any>;
    pageSizes:Array<any> = [
      this.tabledata.length < 10?0:10,this.tabledata.length>10?15:0,this.tabledata.length>15?20:0,this.tabledata.length>20?30:0,this.tabledata.length>30?this.tabledata.length:0
    ];
    total:number = this.tabledata.length;
    created() {
        this.newData = this.disposechunk(this.tabledata,10)
        this.chunk =  this.newData[0]
    }
    handleSizeChange(val:any){
        this.pagesizenum = val
        this.pagesize = val
        this.newData = this.disposechunk(this.tabledata,val)
        this.chunk =  this.newData[this.currentid]
    }
    handleCurrentChange(val:any){
        this.currentPage = val
        this.currentid = val-1
        this.newData = this.disposechunk(this.tabledata,this.pagesizenum)
        this.chunk = this.newData[this.currentid]
    }
    disposechunk(arr:Array<any>,size:number) {
      var newarr=[];
      for(var i=0;i<arr.length;i=i+size){
          newarr.push(arr.slice(i,i+size));
      }
      return newarr;
    }
} 
</script>
