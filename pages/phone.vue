<template>
  <div class="user-login contents">
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
      </div>

      <div class="timer">
        <span>60</span>
      </div>
    </div>

    <div class="cont">
      <div class="banner">
        베너입니다.
      </div>

      <div class="divider">

      </div>

      <div class="numberPad row">
        <div class="left">
          <h4>전화번호 로그인</h4>
          <div class="numberViewer">
            <span>010</span>
            <span class="bar">-</span>
            <span></span>
            <span class="bar">-</span>
            <span></span>             
          </div>
          <el-button @click="visible = true">
            <strong>전화번호 입력완료 </strong>
            <span class="material-icons">arrow_forward</span>
          </el-button>
          <ul>
            <li>이용약관과 개인정보 취급방침에 동의하시면 
전화번호를 입력해주세요</li>
            <li>
              017, 011 번호는 가입이 불가합니다
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="pad">
            <el-button>1</el-button>
            <el-button>2</el-button>
            <el-button>3</el-button>
            <el-button>4</el-button>
            <el-button>5</el-button>
            <el-button>6</el-button>
            <el-button>7</el-button>
            <el-button>8</el-button>
            <el-button>9</el-button>
            <el-button class="del">
              <span class="material-icons">arrow_back</span>
            </el-button>
            <el-button>0</el-button>
            <el-button class="reset">초기화</el-button>
          </div>
          
        </div>
      </div>
    </div>

    <div class="bottom between">
      <el-button text @click="$router.go(-1)">
        <span class="material-icons">arrow_back</span>
        <strong>뒤로가기</strong>
      </el-button>
    </div>

    <rePassword v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
</script>

<style lang="scss" scoped>

.cont{
  .divider{
    height:3px;
    background:#e2e2e2;
    margin:60px 0;
  }
  .banner{
    height:450px;
    background:#f2f2f2;
    border-radius:40px;
  }

  .numberPad{
    align-items: flex-start;
    gap:40px;
    .left{
      flex:1;
      h4{
        font-size:36px;
        font-weight:600;
        margin-bottom:20px;
      }

      .numberViewer{
        display:flex;
        align-items: center;
        height:100px;
        border-bottom:6px solid #0066ff;
        font-size:48px;
        font-weight:600;
        padding:0 15px;

        span{
          flex:1;
          text-align:center;
        }
        span.bar{
          flex:none;
          width:60px;
          text-align:center;
        }
      }
      .el-button{
        position: relative;
        width:100%;
        height:100px;
        border-radius:20px;
        margin-top:30px;
        background:#0066ff;
        color:#fff;

        span{
          font-size:36px;
          
        }
        strong{
          font-size:28px;
          margin-right:15px;
        }

        &:after{
          content: '';
          width: 30px; 
          height: 30px;
          border-radius: 100%;
          background:#ff6f00cc;
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;
          z-index:99;
          transform: translate(-50%, -50%);
          animation: ring 1.5s infinite;
          animation-delay: .1s;
        }
      }

      ul{
        margin-top:30px;
        display:flex;
        flex-direction: column;
        gap:20px;
        li{
          font-size:24px;
          color:#797979;
        }
      }
      
    }
    .right{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      flex:1;
      .pad{
        background:#292929;
        border-radius:40px;
        padding:40px;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        flex:1;
        gap:15px;
      }
      .el-button{
        margin:0;
        width:110px;
        height:110px;
        font-size:40px;
        font-weight:600;
        border-radius:20px;
      }
      .el-button.del{
        span{font-size:40px;}
      }
      .el-button.reset{
        font-size:26px;
      }
    }
  }
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 0.8;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}


</style>