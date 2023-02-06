<template>
  <div class="login_wrap">
    <div class="logo">
      <img src="~/assets/img/payot_logo.png"/>
      <span>PAYOT KIOSK</span>
    </div>
    <div class="login">
      <dl>
        <dt>아이디</dt>
        <dd>
          <input type="text" placeholder="아이디를 입력해주세요">
        </dd>
      </dl>
      <dl>
        <dt>비밀번호</dt>
        <dd>
          <input type="text" placeholder="비밀번호를 입력해주세요">
        </dd>
      </dl>

      <div class="btns">
        <el-button class="coces" @click="$router.push('/')">KOCES 로그인(64bit)</el-button>
        <el-button class="kicc" @click="visible = true">KICC 로그인</el-button>

        <div class="divider">
          <span class="black"></span>
          <span class="white"></span>
        </div>

        <el-button class="setup" @click="$router.push('setting')">
          <span class="material-icons">settings</span>
          <strong>환경설정</strong>
        </el-button>
      </div>
      
    </div>

    <loading v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout:'empty'
})

const visible = ref(false)

</script>

<style lang="scss" scoped>
.login_wrap{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom:60px;
    img{
      height:200px;
    }
    span{
      color:#fff;
      font-size:32px;
      font-weight:600;
      margin-top:30px;
    }
  }

  .divider{
    display:flex;
    flex-direction: column;
    margin:40px 0;
    
    span{
      height:3px;
    }
    span.black{
      background:rgba(0,0,0,0.3)
    }
    span.white{
      background:rgba(255,255,255,0.07)
    }
  }
  .login{
    width:720px;
    background:rgba(255,255,255,0.05);
    border-radius:40px;
    padding:60px;
    border-right:6px solid rgba(255,255,255,0.05);
    border-bottom:6px solid rgba(255,255,255,0.05);
    box-shadow: 10px 10px 32px rgba(0, 0, 0, 0.2);

    dl{
      margin-bottom:30px;
      dt{
        font-size:24px;
        margin-bottom:15px;
        color:#fff;
      }
      dd{
        input{
          width:100%;
          height:90px;
          border-radius:20px;
          padding:0 20px;
          font-size:28px;
          font-weight:600;
          outline: none;
        }
        input::placeholder{
          font-size:24px;
          font-weight:600;
          color:#898989;
        }
      }
    }
    .btns{
      display:flex;
      flex-direction: column;
      gap:15px;
      .el-button{
        margin:0;
        width:100%;
        height:90px;
        font-size:28px;
        border-radius:20px;
        color:#fff;
        border:0;
      }

      .coces{
        background:#CC0470;
      }
      .kicc{
        background:#0066ff;
      }
      .setup{
        background:#000;

        span{
          font-size:28px;
          margin-right:10px;
        }
      }
    }
  }

}
</style>