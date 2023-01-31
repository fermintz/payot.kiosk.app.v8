<template>
  <div class="chage_card contents">
    <div class="top">
      <h2>페이오티 금정점</h2>
      <p>
        충전하실 금액을<br/>
        선택해주세요
      </p>

      <div class="step">
        <span>로그인</span>
        <span>결제방법</span>
        <span class="active">상품선택</span>
        <span>주문확인</span>
      </div>

      <div class="timer">
        <span>60</span>
      </div>
    </div>

    <div class="cont">
      <div class="mypoint between">
        <div class="label">
          <h4>나의포인트</h4>
          <p>010-8525-4561</p>
        </div>
        <strong>
          2,700P
        </strong>
      </div>

      <div class="pointList">
        <div class="pointItem" v-for="item in 16" :key="item" @click="creditOpen">
          <div class="info">
            <strong>{{item}},000P 충전</strong>
            <span>적립보너스 <b>100P</b></span>
          </div>
          <div class="price">
            1,000원
            <span class="material-icons">chevron_right</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom between">
      <el-button text @click="$router.go(-1)">
        <span class="material-icons">arrow_back</span>
        <strong>뒤로가기</strong>
      </el-button>
      <el-button text @click="$router.push('/')">
        <span class="material-icons">home</span>
        <strong>처음으로</strong>
      </el-button>
    </div>

    <settleCard v-model="visible" />
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
const router = useRouter()
const creditOpen = () =>{
  visible.value = true
  setTimeout(()=>{
    router.push({path:'/finish'})
  },5000)
}
</script>

<style lang="scss" scoped>
.pointList{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:30px;
  padding:40px;
  background:#292929;
  border:3px solid #000;
  border-radius:30px;
  margin-top:30px;
  height:1000px;
  overflow-y:auto;

  &::-webkit-scrollbar{
    display:none;
  }
  .pointItem{
    display:flex;
    flex-direction: column;
    background:#fff;
    border-radius:20px;
    overflow:hidden;
    height:230px;

    .info{
      display:flex;
      flex-direction: column;
      justify-content: center;
      flex:1;
      padding:20px;
      
      strong,span{display:block;}
      strong{
        font-size:36px;
        font-weight:600;
      }
      span{
        margin-top:10px;
        font-size:26px;
        b{
          color:#0066ff;
          font-weight:600;
        }
      }
    }
    .price{
      display:flex;
      align-items: center;
      justify-content: flex-end;
      background:#f8f8f8;
      height:84px;
      padding:0 20px;
      font-size:32px;
      font-weight:600;

      span{
        margin-left:20px;
        font-size:40px;
        color:#c2c2c2;
      }
    }
  }
}
</style>