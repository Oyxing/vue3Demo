<template>
    <div>
        <el-button @click="createlectron">点击生成</el-button>
    </div>
</template>
<script lang="ts">
import { Button } from 'element-ui'
import { Component,Vue } from 'vue-property-decorator'
Vue.use(Button)
@Component
export default class Dialog extends Vue{
    createlectron(){
        this.$emit("clickDialog","你好")
        // 在主进程中.
    }
}
</script>
