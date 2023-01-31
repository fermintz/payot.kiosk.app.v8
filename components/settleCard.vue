<template>
  <el-dialog
    v-model="show"
    width="820px"
    align-center
    :show-close="false"
  >
    
    <div class="dialog">
      <div class="head between">
        <h2>카드로 결제하기</h2>
        <div class="time">
          <span>60</span>
        </div>
      </div>
      <div class="cont">
        <div class="image">
          <img src="~/assets/img/card_in.png"/>
          <p>신용카드를<br/> 아래쪽 <b>카드결제기기에 투입</b>해주세요</p>
        </div>
        <dl class="price">
          <dt>결제금액</dt>
          <dd>
            1,000원
          </dd>
        </dl>
        <ul>
          <li>결제금액보다 큼 금액의 지폐를 투입할 경우 잔액은 포인트로 적립됩니다.</li>
        </ul>
      </div>

      <div class="dialog_bottom">
        <div class="el-button" @click="show=false">취소하기</div>
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

const route = useRoute()
const password = ref('')

</script>

<style lang="scss" scoped>
.el-overlay-dialog{
  top:unset;
  bottom:15%;
}
.dialog{
  padding:40px 50px 50px 50px; 
  .head{
    margin-bottom:40px;
    h2{
      font-size:36px;
      font-weight:600;
      color:#000;
    }
    .time{
      display:flex;
      align-items: center;
      justify-content: center;
      width:100px;
      height:100px;
      background:#0066ff;
      color:#fff;
      border-radius:50px;
      span{
        font-size:36px;
        font-weight:500;
      }
    }
  }
}
.cont{
  .image{
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background:#f2f2f2;
    border-radius:20px;
    padding:30px;
    img{
      height:300px;
    }
    p{
      width:100%;
      margin-top:50px;
      font-size:32px;
      font-weight:500;
      b{
        color:#0066ff;
      }
    }
  }

  .price{
    border:3px solid #e2e2e2;
    display:flex;
    flex-direction: column;
    padding:30px;
    border-radius:20px;
    margin-top:40px;
    dt{
      font-size:28px;
      color:#292929;
    }
    dd{
      align-self: flex-end;
      font-size:42px;
      font-weight:600;
      color:#d22828;
    }
  }

  ul{
    margin-top:40px;
    li{
      font-size:28px;
      color:#797979;
    }
    li:before{
      content:'*';
      color:#d22828;
      margin-right:5px;
    }
  }
}

.dialog_bottom{
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top:50px;
  .el-button{
    border:0;
    background:#292929;
    color:#fff;
    height:90px;
    width:240px;
    border-radius:45px;
    font-size:29px;
  }
}

</style>