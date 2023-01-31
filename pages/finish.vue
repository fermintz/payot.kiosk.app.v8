<template>
  <div class="finish">
    <div class="title">
      <div class="check">
        <span class="material-icons">check</span>
      </div>
      <h2>결제가 완료되었습니다</h2>
      <p>결제하신 장비로 돌아가 세탁을 이용해주세요</p>
    </div>

    <div class="orderInfo">
      <dl>
        <dt>사용자번호</dt>
        <dd>010-8525-4561</dd>
      </dl>
      <dl>
        <dt>장비명</dt>
        <dd>1번세탁기</dd>
      </dl>
      <dl>
        <dt>상품명</dt>
        <dd>45분 꺠끗한 세탁</dd>
      </dl>
      <div class="divider"></div>
      <dl>
        <dt>최종결제금액</dt>
        <dd>5,000원</dd>
      </dl>
      <dl>
        <dt>결제방법</dt>
        <dd>카드</dd>
      </dl>
      <div class="divider"></div>
      <dl class="point">
        <dt>추가 적립포인트</dt>
        <dd>250P</dd>
      </dl>
      <dl class="point">
        <dt>현금결제 초과 적립포인트</dt>
        <dd>0P</dd>
      </dl>
      <dl class="point">
        <dt>최종 보유포인트</dt>
        <dd>250P</dd>
      </dl>
    </div>

    <div class="btns">
      <el-button @click="$router.push('product')">장비추가이용</el-button>
      <el-button @click="$router.push('/')">메인으로</el-button>
    </div>

    <div class="guide">
      <b>15</b>초후 자동 로그아웃되며, 메인화면으로 이동합니다.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.finish{
  display:flex;
  flex-direction: column;
  justify-content: center;
  height:100%;
}

.title{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:80px;
  .check{
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    width:180px;
    height:180px;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    
    span{
      font-size:100px;
      font-weight:bold;
      color:#0066ff;
    }

    ::before{
      content:'';
      display:block;
      box-sizing: border-box;
      position: absolute;
      left:0;
      top:0;
      width:180px;
      height:180px;
      border-radius:90px;
      border:9px solid rgba(0, 102, 255,0.2);
      background:rgba(0, 102, 255,0);
      transform: rotate(180deg);
    }
  }
  h2{
    font-size:60px;
    font-weight:600;
    margin-top:40px;
  }
  p{
    font-size:34px;
    color:#797979;
    margin-top:15px;
  }
}
.orderInfo{
  display:flex;
  flex-direction: column;
  gap:20px;
  background:#f5f5f7;
  border-radius:30px;
  padding:40px;

  .divider{
    height:3px;
    background:#e2e2e2;
    margin:20px 0;
  }
  dl{
    display:flex;
    align-items: center;
    justify-content: space-between;

    dt{
      font-size:30px;
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
}

.btns{
  display:flex;
  justify-content: center;
  margin:80px 0;
  gap:30px;

  .el-button{
    width:280px;
    height:100px;
    font-size:30px;
    border-radius:50px;
    border:0;
    background:#fff;
    color:#0066ff;
    border:6px solid #0066ff;
    margin:0;
  }
  .el-button:last-child{
    background:#292929;
    color:#fff;
    border:0;
  }
}

.guide{
  text-align:center;
  font-size:30px;
  color:#797979;
  b{
    color:#292929;
    font-weight:600;
  }
}


@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
</style>