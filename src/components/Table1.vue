<template>
  <div class="table">
      <!-- searchField -->
       <el-row >
          <el-col :span="7" style="float:right">
             <el-input  placeholder="请输入内容" v-model="searchvalue" class="input-with-select" @change="onsearchvalue">
                <el-select v-model="searchname" slot="prepend" placeholder="请选择" style="width:100px">
                  <el-option
                        v-for="item in searchField"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                </el-select>
            </el-input>
          </el-col> 
        </el-row >
            <el-table
              :data="newtable.length > 10?newtable.slice((currentPage-1)*pagesize,currentPage*pagesize):newtable"
              style="width: 100%;margin-top:20px;">
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
              v-if="newtable.length > 10"
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
    @Prop() tableData!: Array<any> ;
    @Prop() tableColumn!: Array<any> ;
    @Prop() searchField!: Array<any> ;
    @Prop() layout!: string ;
    searchshow:boolean = false
    searchname:string = this.searchField[0].value;
    searchvalue:string = "";
    searchData:boolean = false
    newtable!:Array<any>
    pagesize:number = 10
    currentPage: number = 1 ;
    currentid:number = 0;
    pageSizes!:Array<any>;
    total!:number;
    created() {
        this.setTableData(this.tableData)
    }
    setTableData(tableData:any){
        this.newtable = tableData
        this.pageSizes = [
        this.newtable.length < 10?0:10,this.newtable.length>10?15:0,this.newtable.length>15?20:0,this.newtable.length>20?30:0,this.newtable.length>30?this.newtable.length:0];
        this.total = this.newtable.length;
    }
    //  一页多少个 
    handleSizeChange(val:any){
        this.pagesize= val
    }
    // 第几页
    handleCurrentChange(val:any){
        this.currentPage = val
    }
    onsearchvalue(val:string){
        var searchdata = []
        console.log("你好")
        console.log("val")
        console.log(typeof(val))
        if(typeof(val) == "string"){
            if(val.length >= 2){
              if(val && this.searchname){
                searchdata = []
                for(var key in this.tableData){
                    var searchdatavalue = this.tableData[key][this.searchname]
                    if(!searchdatavalue.indexOf(val)){
                        searchdata.push(this.tableData[key])
                    }
                }
                this.searchshow = true
                this.setTableData(searchdata)
              }
          }else{
            searchdata = this.tableData
            this.searchshow = false
            this.setTableData(searchdata)
          }
        }else{
          searchdata = this.tableData
          this.searchshow = false
         this.setTableData(searchdata)
        }
        
    }
} 
</script>
