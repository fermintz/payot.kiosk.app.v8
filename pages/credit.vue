<template>
  <div class="credit contents">
    <div class="top">
      <h2>페이오티 금정점</h2>
      <p>
        결제하실 방법을<br/>
        선택해주세요
      </p>

      <div class="step">
        <span>로그인</span>
        <span class="active">결제방법</span>
        <span>상품선택</span>
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

      <div class="creditSelector row">
        <div class="creditItem" @click="$router.push('cashChage')">
          <div class="image">
            <img src="~/assets/img/cash.png" />
          </div>
          <div class="point">
            <strong>10%</strong>
            <span>적립혜택</span>
          </div>
          <p>
            <strong>현금으로 결제하기</strong>
            <span class="material-icons">chevron_right</span>
          </p>
        </div>

        <div class="creditItem" @click="$router.push('cardChage')">
          <div class="image">
            <img src="~/assets/img/card.png" />
          </div>
          <div class="point">
            <strong>5%</strong>
            <span>적립혜택</span>
          </div>
          <p>
            <strong>카드로 결제하기</strong>
            <span class="material-icons">chevron_right</span>
          </p>
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

    <bottomProduct v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
const category = ref(0)
const visible = ref(false)
</script>

<style lang="scss" scoped>


.cont{

  .creditSelector{
    gap:40px;
    margin-top:60px;
  }
 .creditItem{
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background:#fff;
    padding:40px;
    border-radius:30px;
    min-height:560px;
    border:3px solid #e2e2e2;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    .image{
      img{
        width:100%;
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
        margin-left:20px;
        color:#0066ff;
        font-size:36px;
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
      background:#f2f2f2;
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
}


</style>