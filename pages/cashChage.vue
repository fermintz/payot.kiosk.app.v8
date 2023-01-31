<template>
  <div class="chage_card contents">
    <div class="top">
      <h2>페이오티 금정점</h2>
      <p>
        충전하실 금액만큼 현금을<br/>
        투입해주세요
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

      <div class="cashPush">
        <h2>투입된 금액만큼 포인트가 충전됩니다.</h2>

        <div class="row">
          <div class="image">
            <img src="~/assets/img/cash_in.gif"/>
          </div>
          <div class="viewer">
            <h4>투입된 금액</h4>
            <div class="cash">
              <span>0</span>
            </div>
            <p>한번에 최대 50,000원까지 충전할 수 있습니다.</p>
            <el-button @click="visible1 = true">투입완료</el-button>
          </div>
        </div>
      </div>

      <div class="bonusInfo">
        <h2>구간별 적립보너스</h2>
        <div class="list">
          <div class="bonus" v-for="item in 6" :key="item">
            <span>1만원미만 결제시</span>
            <strong>1% 적립</strong>
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
    <message v-model="visible1"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
const visible1 = ref(false)

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

.cashPush{
  background:#f2f2f2;
  border-radius:30px;
  margin-top:40px;
  padding:40px 40px 60px 40px;
  
  h2{
    font-size:36px;
    margin-bottom:60px;
    font-weight:500;
  }

  .row{
    gap:40px;
    align-items: flex-start;
    .image{
      display:flex;
      align-items: center;
      justify-content: center;
      flex:1;
      img{
        width:80%;
      }
    }

    .viewer{
      flex:1;
      h4{
        font-size:30px;
      }
      .cash{
        display:flex;
        align-items: center;
        justify-content: flex-end;
        height:100px;
        border-bottom:6px solid #0066ff;

        span{
          font-size:60px;
          font-weight:600;
          color:#0066ff;

          &:after{
            content:'원';
            font-size:30px;
            margin-left:20px;
          }
        }
      }
      p{
        font-size:28px;
        color:#797979;
        margin-top:30px;
      }

      .el-button{
        position: relative;
        height:90px;
        width:100%;
        border-radius:20px;
        background:#0066ff;
        color:#fff;
        font-size:30px;
        margin-top:30px;

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
}

.bonusInfo{
  border-radius:30px;
  margin-top:50px;
  h2{
    font-size:36px;
    margin-bottom:20px;
    font-weight:500;
  }
  .list{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
    .bonus{
      display:flex;
      flex-direction: column;
      border:3px solid #e2e2e2;
      border-radius:20px;
      padding:20px;
      span{
        font-size:28px;
        color:#797979;
      }
      strong{
        font-size:32px;
        font-weight:500;
        color:#0066ff;
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