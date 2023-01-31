<template>
  <div class="order contents">
    <div class="top">
      <h2>페이오티 금정점</h2>
      <p>
        주문하신 내역을 확인 후 결제를<br/>
        진행해주세요
      </p>

      <div class="step">
        <span>로그인</span>
        <span>장비선택</span>
        <span class="active">주문확인</span>
      </div>

      <div class="timer">
        <span>60</span>
      </div>
    </div>

    <div class="cont">
      <div class="orderInfo">
        <div class="usePoint">
          <h4>나의포인트</h4>
          <div class="userPoint">
            0P
          </div>
          <div class="between">
            <p>포인트를 사용하시면 결제금액만큼<br/>모든 포인트를 먼저 사용합니다.</p>
            <el-button>
              포인트 사용하기
            </el-button>
          </div>
        </div>
        <div class="detail">
          <dl>
            <dt>사용자</dt>
            <dd>010-8525-4561</dd>
          </dl>
          <dl>
            <dt>장비명</dt>
            <dd>세탁기 1번</dd>
          </dl>
          <dl>
            <dt>상품명</dt>
            <dd>일반세탁 30분</dd>
          </dl>
          <div class="divider"></div>
          <dl>
            <dt>상품금액</dt>
            <dd>
              5,000원
            </dd>
          </dl>
          <dl class="point">
            <dt>포인트사용</dt>
            <dd>
              0P
            </dd>
          </dl>
          <div class="divider"></div>
          <dl class="last">
            <dt>최종결제금액</dt>
            <dd>
              5,000원
            </dd>
          </dl>
        </div>
      </div>
      <div class="next">
        <el-button @click="visible = true" >
          <strong>5,000원 결제하기</strong>
          <span class="material-icons">arrow_forward</span>
        </el-button>
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

    <creditSelector v-model="visible"/>
    <settleCard v-model="visible1"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
const visible1 = ref(false)
</script>

<style lang="scss" scoped>
.cont{
  .orderInfo{
    border:3px solid #e2e2e2;
    border-radius:30px;
    overflow:hidden;
    box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
  
    .usePoint{
      padding:60px 40px;
      background:#f5f5f7;

      h4{
        font-size:30px;
        font-weight:500;
      }

      .userPoint{
        font-size:60px;
        font-weight:600;
        color:#0066ff;
        border-bottom:6px solid #0066ff;
        padding:0 15px;
        margin:40px 0;
        
      }
      

      p{
        font-size:28px;
        color:#797979;
        b{
          color:#FF0033;
        }
      }

      .el-button{
        height:80px;
        font-size:28px;
        border-radius:50px;
        padding:0 40px;
        background:#f5f5f7;
        color:#0066ff;
        border:6px solid #0066ff;
      }
    }  
    .detail{
      display:flex;
      flex-direction: column;
      gap:20px;
      padding:40px;

      .divider{
        height:3px;
        background:#e2e2e2;
        margin:20px 0;
      }
      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        dt{
          font-size:30px;
          color:#797979;
        }
        dd{
          font-size:30px;
          font-weight:500;
        }
      }

      dl.point{
        dd{
          color:#0066ff;
        }
      }

      dl.last{
        dt{
          color:#292929;
          font-weight:500;
        }
        dd{
          font-size:40px;
          font-weight:600;
          color:#FF0033;
        }
      }
    }
  }

  .next{
    margin-top:30px;
    position: relative;
  
    .el-button{
      position: relative;
      background:#FF0033;
      width:100%;
      margin:0;
      border-radius:30px;
      height:120px;
      border:0;
      color:#fff;
      transition: all 0.3s ease-in-out 0s;
      span{
        font-size:40px;
      }
      strong{
        font-size:40px;
        margin-right:15px;
        font-weight:600;
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
  }
}


@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 0.8;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
</style>