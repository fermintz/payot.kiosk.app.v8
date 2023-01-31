<template>
  <el-drawer v-model="show" direction="btt" size="auto">
    <div class="bottomSheet">
      <div class="sheetHead between">
        <div class="title">
          <h2>결제방법 선택</h2>
          <p>희망하시는 결제방법을 선택해주세요</p>
        </div>
        <div class="time">
          <span>60</span>
        </div>
      </div>
      <div class="credit_list row">
        <div class="credit cash" @click="$router.push('finish')">
          <div class="image">
            <img src="~/assets/img/cash.png"/>
          </div>
          <p>
            <strong>현금으로 결제하기</strong>
            <span class="material-icons">chevron_right</span>
          </p>
          <div class="point">
            <strong>10%</strong>
            <span>적립혜택</span>
          </div>
        </div>
        <div class="credit card" @click="$router.push('finish')">
          <div class="image">
            <img src="~/assets/img/card.png"/>
          </div>
          <p>
            <strong>카드로 결제하기</strong>
            <span class="material-icons">chevron_right</span>
          </p>
          <div class="point">
            <strong>5%</strong>
            <span>적립혜택</span>
          </div>
        </div>
      </div>
      <div class="sheetBottom">
        <el-button @click="show=false">취소하기</el-button>
      </div>
    </div>
  </el-drawer>
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
.bottomSheet{
  max-height:1500px;
  overflow-y:auto;

  &::-webkit-scrollbar{ //스크롤바 전체
    width:12px;
  }
  &::-webkit-scrollbar-thumb{
    background:#0066ff;
    width:12px;
    border-radius:6px;
  } // 스크롤 막대
  &::-webkit-scrollbar-track{
    background:#e2e2e2;
  } // 스크롤 막대외부

  .sheetHead{
    background:#fff;
    position: sticky;
    top:0;
    z-index:2;
    padding:60px;
    .title{
      h2{
        font-size:42px;
        font-weight:600;
      }
      p{
        font-size:28px;
        font-weight:400;
        margin-top:10px;
        color:#797979;
      }
    }

    .time{
      display:flex;
      align-items: center;
      justify-content: center;
      width:100px;
      height:100px;
      border-radius:50px;
      font-size:36px;
      font-weight:500;
      background:#0066ff;
      span{
        color:#fff;
      }
    }
  }

  .credit_list{
    padding:10px 50px 50px 50px;
    gap:50px;
    .credit{
      display:flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background:#f5f5f7;
      padding:30px;
      border-radius:30px;
      min-height:500px;


      .image{
        display:flex;
        align-items: center;
        justify-content: center;
        img{
          width:90%;
        }
      }
      p{
        display:flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width:100%;
        left:0px;
        text-align:center;
        bottom:30px;
        strong{
          font-size:30px;
          font-weight:500;
        }
        span{
          font-size:36px;
          margin-left:10px;
          color:#0066ff;
        }
      }
      .point{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        width:120px;
        height:120px;
        background:#fff;
        top:20px;
        right:20px;
        display:flex;
        flex-direction: column;
        border-radius:20px;
        strong{
          font-size:40px;
          font-weight:600;
          color:#0066ff;
        }
        span{
          font-size:24px;
        }
      }
    }
    .cash{
      flex:1;
    }
    .card{
      flex:1;
    }
  }

  .sheetBottom{
    display:flex;
    align-items: center;
    justify-content: center;
    padding:50px;

    .el-button{
      height:90px;
      width:300px;
      border-radius:45px;
      font-size:28px;
      border:0;
      background:#292929;
      color:#fff;
    }
  }
}
</style>