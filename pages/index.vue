<template>
  <div class="main">
    <div class="header between">
      <div class="logo row">
        <img src="~/assets/img/logo_b.png">
        <span>워시프랜즈 금정점</span>
      </div>
      <div class="btns">
        <el-button>ENG</el-button>
      </div>
    </div>

    <div class="main-slide-wrap">
      <div class="main-slide">
        <img src="~/assets/img/slide01.jpg"/>
      </div>
      <div class="notice row">
        <strong>공지사항</strong>
        <span>안녕하세요 공지사항이에요!! 테스트!!</span>
      </div>
    </div>

    <div class="main-btns">
      <dl class="btn" @click="$router.push('phone')">
        <dt>충전하기</dt>
        <dd>키오스크에 금액을<br>충전합니다</dd>
        <dd class="icon">
          <span class="material-icons">navigate_next</span>
        </dd>
      </dl>
      <dl class="btn" @click="$router.push('credit')">
        <dt>이용하기</dt>
        <dd>충전없이 장비를<br>이용합니다</dd>
        <dd class="icon">
          <span class="material-icons">navigate_next</span>
        </dd>
      </dl>
      <dl class="btn" @click="$router.push('user')">
        <dt>조회하기</dt>
        <dd>나의 이용내역을<br />조회합니다</dd>
        <dd class="icon">
          <span class="material-icons">navigate_next</span>
        </dd>
      </dl>
    </div>
    <div class="bg-blue"></div>
    <div class="bg-red"></div>
  </div>
</template>

<style lang="scss" scoped>
.header{
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:150px;
  padding:0 20px;

  .logo{
    img{
      height:60px;
    }
    span{
      margin-left:30px;
      font-size:32px;
      font-weight:600;
    }
  }
  .btns{
    .el-button{
      height:50px;
      border:3px solid #292929;
      border-radius:30px;
      font-size:28px;
      padding:0 30px;
      color:#292929;
    }
  }
}
.main-slide-wrap{
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .main-slide{
    width:960px;
    height:1150px;
    border-radius:30px;
    overflow:hidden;
  }
  .notice{
    position: absolute;
    width:880px;
    height:100px;
    bottom:40px;
    left:40px;
    padding:0 30px;
    background:#fff;
    border-radius:20px;
    border:3px solid #292929;
    box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.2);
    strong{
      font-size:28px;
      font-weight:600;
      margin-right:30px;
    }
    span{
      flex:1;
      font-size:28px;
      color:#797979;
    }
  }
}

.main-btns{
  overflow:hidden;
  position: absolute;
  left:0px;
  z-index:3;
  bottom:0px;
  width:100%;
  height:450px;
  background:rgba(255,255,255,0.80);
  border-radius:30px;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display:flex;

  .btn{
    position: relative;
    flex:1;
    border-right:3px solid rgba(0,0,0,0.05);
    height:100%;
    padding:40px;
    cursor: pointer;
    &:active{
      background:#fff;
    }
    
    &:last-child{
      border-right:0;
    }
      
    dt{
      font-size:36px;
      font-weight:600;
      margin-bottom:15px;
    }
    dd{
      font-size:24px;
      color:#797979;
    }
    dd.icon{
      position: absolute;
      bottom:40px;
      right:40px;

      .material-icons{
        font-size:34px;
        color:#fff;
        padding:10px;
        border-radius:50px;
      }
    }

  }

  .btn:nth-child(1){
    dt{
      color:#0066ff;
    }
    span.material-icons{
      background:#0066ff;
    }
  }
  .btn:nth-child(2){
    dt{
      color:#ff0066;
    }
    span.material-icons{
      background:#ff0066;
    }
  }
  .btn:nth-child(3){
    dt{
      color:#292929;
    }
    span.material-icons{
      background:#292929;
    }
  }
}


.main{
  position: relative;
  height:100%;
  border-radius:50px;
  background:transparent;
  .bg-blue{
    position: absolute;
    width: 1080px;
    height: 1830px;
    left:-60px;
    bottom:-40px;
    z-index:2;
    background: linear-gradient(160deg, rgba(255,255,255,0) 80%, rgba(0, 71, 255,1) 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    animation: bgblue 5s infinite ;
    
  }

  .bg-red{
    position: absolute;
    width: 1080px;
    height: 1830px;
    left:-60px;
    bottom:-40px;
    z-index:1;
    background: linear-gradient(190deg, rgba(255, 255, 255, 0) 80%, #FF003D 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    animation: bgred 5s infinite ;
    animation-delay: 2.5s;
  }
}


@keyframes bgblue{
  0%{opacity: 1;}
  50%{opacity: 0.4;}
}

@keyframes bgred{
  0%{opacity: 1;}
  50%{opacity: 0.2;}
}

</style>