<template>
  <div class="user-login">
    <div class="top">
      <h2>페이오티 금정점</h2>
      <p>
        휴대전화 번호를 입력 후<br/>
        완료 버튼을 터치해주세요
      </p>

      <div class="step">
        <span class="active">로그인</span>
        <span>장비선택</span>
        <span>주문확인</span>
        <span>결제완료</span>
      </div>

      <div class="timer">
        <span>60</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.user-login{
  .top{
    position: relative;
    padding:60px 0;

    h2{
      font-size:30px;
    }

    p{
      font-size:46px;
      font-weight:600;
      line-height:1.3;
      margin:40px 0;
    }

    .timer{
      display:flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top:40px;
      right:0px;
      width:100px;
      height:100px;
      background:#ff0033;
      border-radius:30px;
      color:#fff;

      span{
        font-size:36px;
        font-weight:600;
      }
    }

    .step{
      display:flex;
      background:#f2f2f2;
      height:60px;
      border-radius:30px;

      span{
        display:flex;
        align-items: center;
        justify-content: center;
        flex:1;
        height:60px;
        font-size:24px;
        text-align:center;
      }

      span.active{
        background:#292929;
        border-radius:30px;
        color:#fff;
      }
    }

  }
}
</style>