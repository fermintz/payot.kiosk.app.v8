<template>
  <el-dialog
    v-model="show"
    width="680px"
    align-center
    :show-close="false"
  >
    <div class="dialog message">
      <div class="text">
        <strong>충전완료</strong>
        <span>현금투입을 완료하시겠습니까?</span>
      </div>
      <div class="divider"></div>
      <div class="dialog-btns">
        <el-button class="cancle">취소</el-button>
        <el-button class="yes" @click="$router.push('finish')">확인</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()
const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})


</script>

<style lang="scss" scoped>
.el-overlay-dialog{
  top:unset;
  bottom:15%;
}
.message{
  .text{
    padding:50px 50px;
    strong,span{
      display:block;
    }
    strong{
      font-size:32px;
      font-weight:400;
      // box-shadow: inset 0 -15px 0 #D5FFE8;
      color:#0066ff;
    }
    span{
      font-size:40px;
      margin-top:10px;
      color:#292929;
    }
  }

  .divider{
    height:3px;
    background:#e2e2e2;
  }

  .dialog-btns{
    padding:30px 0;
    display:flex;
    align-items: center;
    justify-content: center;
    background:#f5f5f7;
    gap:15px;
    .el-button{
      border:3px solid #e2e2e2;
      height:80px;
      color:#292929;
      width:160px;
      border-radius:20px;
      font-size:28px;
      margin:0;
    }
    .yes{
      background:#0066ff;
      border:0;
      color:#fff
    }
  }  
}


</style>