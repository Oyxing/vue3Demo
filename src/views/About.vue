<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="ajax">点击</el-button> 
    <el-button @click="jsonp('http://localhost:8033/API/Get/?')">点击jsonp</el-button>
    <el-button @click="jsonp('http://localhost:8033/API/GetUser?id=2&')">点击jsonp</el-button>

  <br>
  <span>
  {{msgdata}}

  </span>
  <br>
    <el-radio-group v-model="radio" @change="change">
      <el-radio :label="1">备选项</el-radio>
      <el-radio :label="2">备选项</el-radio>
      <el-radio :label="3">备选项</el-radio>
    </el-radio-group>
  
  </div>
</template>
<script lang="ts">
import { Button,Radio,RadioGroup, } from 'element-ui'
import { Component, Vue } from 'vue-property-decorator';
Vue.use(Button)
Vue.use(Radio)
Vue.use(RadioGroup)
@Component
export default class About extends Vue{
    radio:number = 3
    ws!:any
    msg!:string
    msgdata!:any
    created(){
      console.log(this)
          var ws = new WebSocket('ws://10.1.1.143:8001');
          ws.onopen = (e)=>{
              this.msg = "连接服务器成功"
              ws.send("连接服务器成功");
          }
          ws.onclose = (e)=>{
              console.log("服务器关闭");
              console.log(e);
          }
          ws.onmessage = (e)=>{
              console.log("onmessage");
              console.log(e.data);
              this.msgdata = e.data
          }
          ws.onerror = (e)=>{
              console.log("连接出错");
              console.log(e);
          }
          this.ws = ws
    }
    change(val:string){
      console.log("val")
      console.log(val)
      console.log(this.ws)
      this.ws.send("game"+val)
     
    }
    ajax(){
          //   var ajaxHdFn = function(uri:any, data:any, cb:any) {
          //         var getXmlHttpRequest = function() {
          //             if (window.XMLHttpRequest) {
          //                 //主流浏览器提供了XMLHttpRequest对象
          //                 return new XMLHttpRequest();
          //               } else if (window.ActiveXObject) {
          //               //低版本的IE浏览器没有提供XMLHttpRequest对象
          //               //所以必须使用IE浏览器的特定实现ActiveXObject
          //                 return new ActiveXObject("Microsoft.XMLHttpRequest");
          //             }
          //         };
          //       var xhr = getXmlHttpRequest();
          //       xhr.onreadystatechange = function() {
          //         console.log(xhr.readyState);
          //         if (xhr.readyState === 4 && xhr.status === 200) {      //获取成功后执行操作
          //           //数据在xhr.responseText
          //           var resJson = JSON.parse(xhr.responseText)
          //           cb(resJson);
          //         }
          //       };
          //       xhr.open("post", uri, true);
          //       xhr.setRequestHeader("DeviceCode", "56");
          //       xhr.setRequestHeader("Source", "API");
          //       // xhr.setRequestHeader("Authentication", "72b32a1f754ba1c09b3695e0cb6cde7f");
          //       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
          //       var dataStr = '';
          //       for (var i in data) {
          //         if (dataStr) {
          //           dataStr += '&';
          //         }
          //         dataStr += i + '=' + data[i];
          //       }
          //       xhr.send(dataStr);
          // };

          //  ajaxHdFn("callback=process",{},(res)=>{
          //     console.log("res")
          //     console.log(res)
          //   })
    }
    jsonp(url:any,data:any){
          console.log("jsonp")
          data = {
            name:"a",
            day:"b",
            age:"c",
          }

      // 及时删除，防止加载过多的JS
        // window.callback_jsonp = function (flag:any) {
        //       clearTimeout(window.jsonp_timer);
        //       console.log('请求成功');
        //       console.log("flag")
        //       console.log(flag)
        //   };
        //   // 3s超时处理,避免服务器端出错
        //   window.jsonp_timer = setTimeout(function () {
        //       window.callback_jsonp = function () {
        //           console.log('jsonp请求超时后返回数据');
        //       };
        //       console.log('jsonp请求超时');
        //   }, 3000);
        //   var new_script = document.createElement('script');
        //   new_script.src = url+"callback=window.callback_jsonp";
        //   document.body.appendChild(new_script);

        //   document.body.removeChild(new_script);
        //   console.log('jsonp请求');
    }
}
</script>
