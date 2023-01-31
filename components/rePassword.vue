<template>
  <el-dialog
    v-model="show"
    width="980px"
    align-center
    :show-close="false"
  >
    <div class="dialog">
      <div class="head between">
      <h2>임시 비밀번호 입력</h2>
      <el-button @click="show = false">닫기</el-button>
      </div>
      <div class="cont">
        <div class="left">
          <h4>
            발송된 임시비밀번호를 <br/>
            입력해주세요
          </h4>
          <div class="pass_box">
            <span v-for="item in password.length" :key="item"></span>
          </div>
          <p>
            휴대폰번호로 발송된 임시비밀번호(4자리)를<br/> 입력해주세요
          </p>
        </div>
        <div class="right">
          <div class="numberPad">
            <el-button v-for="item in 9" :key="item" @click="password += item">{{item}}</el-button>
            <el-button class="del" @click="password.substring(0, password.length - 1)">
              <span class="material-icons">arrow_back</span>
            </el-button>
            <el-button @click="password += 0">0</el-button>
            <el-button class="reset" @click="password = ''">초기화</el-button>
          </div>
        </div>
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

const password = ref('')

</script>

<style lang="scss" scoped>
.el-overlay-dialog{
  top:unset;
  bottom:15%;
}
.dialog{
  padding:40px 50px 50px 50px;
  background:#292929;
  border:0;
  .head{
    border-bottom:3px solid #e2e2e2;
    margin-bottom:40px;
    padding-bottom:40px;
    h2{
      font-size:36px;
      font-weight:600;
      color:#fff;
    }
    .el-button{
      width:140px;
      background:#fff;
      border:0;
      color:#292929;
      height:70px;
      border-radius:35px;
      font-size:24px;
    }
  }
}
.cont{
  display:flex;
  gap:80px;

  .left{
    position: relative;
    flex:1;

    h4{
      font-size:36px;
      font-weight:500;
      color:#fff;
      strong{
        color:#0066ff;
      }
    }

    .pass_box{
      position: relative;
      display:flex;
      align-items: center;
      margin-top:15px;
      gap:20px;
      justify-content: center;
      background:#f5f5f7;
      padding:20px;
      border-radius:15px;
      
      span{
        position: relative;
        z-index:3;
        width:30px;
        height:30px;
        border-radius:15px;
        background:#0066ff;
        color:#fff;
      }

    }

    p{
      font-size:24px;
      color:#fff;
      margin-top:30px;
    }

    .pass_find{
      display:flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom:10px;
      width:100%;

      .el-button{
        height:60px;
        background:#f2f2f2;
        border-radius:30px;
        padding:0 40px;
        font-size:24px;
      }
    }
  }
  .numberPad{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
    .el-button{
      width:100px;
      height:100px;
      border-radius:20px;
      margin:0;
      border:0;
      box-shadow: 5px 5px 20px rgba(0,0,0,1);
      font-size:30px;
    }

    .del{
      span{
        font-size:40px;
        font-weight:bold;
      }
    }
    .reset{
      font-size:24px;
    }
  }
}
</style>