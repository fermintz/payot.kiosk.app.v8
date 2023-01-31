<template>
  <el-drawer v-model="show" direction="btt" size="auto">
    <div class="bottomSheet">
      <div class="sheetHead between">
        <div class="title">
          <h2>1번세탁기를 선택하셨습니다</h2>
          <p>10개의 상품이 있습니다</p>
        </div>
        <el-button @click="show=false">
          닫기
        </el-button>
      </div>
      <div class="goods_list">
        <div class="goods row" v-for="item in 20" :key="item" @click="$router.push('order')"> 
          <div class="time">{{item}}분</div>
          <div class="info">
            <span>빠르고 시원한 45분 세탁 빠르고 시원한 45분 세탁 빠르고 시원한 45분 세탁 빠르고 시원한 45분 세탁</span>
            <strong>5,000원</strong>
          </div>
        </div>
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

    .el-button{
      width:140px;
      background:#292929;
      color:#fff;
      height:70px;
      border-radius:35px;
      font-size:24px;
    }
  }

  .goods_list{
    padding:10px 60px 60px 60px;
    display:flex;
    flex-direction: column;
    gap:24px;

    
    .goods{
      position: relative;
      border:3px solid #e2e2e2;
      padding:30px;
      border-radius:20px;
      gap:30px;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.05);

      .time{
        display:flex;
        align-items: center;
        justify-content: center;
        background:#0066ff;
        min-width:120px;
        min-height:120px;
        font-size:28px;
        color:#fff;
        border-radius:60px;
        font-weight:500
      }

      .info{
        flex:1;
        span{
          display:block;
          max-width:700px;
          font-size:32px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        strong{
          display:block;
          font-size:36px;
          font-weight:600;
        }
      }
    }
  }
}
</style>