<template>
    <div>
        <OpenDialog @clickDialog="clickDialog" />
    </div>
</template>
<script lang="ts">
import { Component,Vue } from 'vue-property-decorator'
import OpenDialog from '@/components/OpenDialog.vue'
@Component({
    components: {
        OpenDialog
    },
})
export default class openDialog extends Vue {
    clickDialog(val:any){
        console.log("val")
        console.log(val)
    }
}
</script>
