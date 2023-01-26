<template>
  <div class="setting">
    <div class="inner">
      <div class="head">
        <el-button @click="$router.go(-1)">
          <span class="material-icons">
            arrow_back
          </span>
        </el-button>
        <h2>환경설정</h2>
      </div>

      <div class="options">
        <dl>
          <dt>키오스크 자동 재부팅</dt>
          <dd class="switch-btn">
            <span>off</span>
            <div class="switch" @click="switch1 = !switch1" :class="{active:switch1 === true}">
              <strong />
            </div> 
            <span>on</span>
          </dd>
        </dl>
        <dl>
          <dt>결제 후 코스 선택 팝업표시</dt>
          <dd class="switch-btn">
            <span>off</span>
            <div class="switch" @click="switch2 = !switch2" :class="{active:switch2 === true}">
              <strong />
            </div> 
            <span>on</span>
          </dd>
        </dl>
        <dl>
          <dt>스탠바이화면 사용</dt>
          <dd class="switch-btn">
            <span>off</span>
            <div class="switch" @click="switch3 = !switch3" :class="{active:switch3 === true}">
              <strong />
            </div> 
            <span>on</span>
          </dd>
        </dl>
        <dl>
          <dt>스탠바이화면 뉴스노출</dt>
          <dd class="switch-btn">
            <span>off</span>
            <div class="switch" @click="switch4 = !switch4" :class="{active:switch4 === true}">
              <strong />
            </div> 
            <span>on</span>
          </dd>
        </dl>
        <dl>
          <dt>페이코 QR결제 사용</dt>
          <dd class="switch-btn">
            <span>off</span>
            <div class="switch" @click="switch5 = !switch5" :class="{active:switch5 === true}">
              <strong />
            </div> 
            <span>on</span>
          </dd>
        </dl>
      </div>

      <div class="divider">
        <span class="black"></span>
        <span class="white"></span>
      </div>

      <div class="info">
        <dl>
          <dt>사업자 등록번호</dt>
          <dd>
            <input type="text" placeholder="사업자등록번호를 입력해주세요">
          </dd>
        </dl>
        <dl>
          <dt>TID</dt>
          <dd>
            <input type="text" placeholder="TID번호를 입력해주세요">
          </dd>
        </dl>
        <el-button>
          수정한 내용 저장하기
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty',
})

const switch1 = ref(false)
const switch2 = ref(false)
const switch3 = ref(false)
const switch4 = ref(false)
const switch5 = ref(false)
</script>

<style lang="scss" scoped>
.setting{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;

  .head{
    display:flex;
    align-items: center;
    margin-bottom:60px;

    h2{
      font-size:52px;
      font-weight:500;
      color:#fff;
      margin-left:30px;
    }
    .el-button{
      height:80px;
      width:80px;
      margin:0;
      border-radius:40px;
      span{
        font-size:40px;
      }
    }
  }
  .inner{
    width:720px;
  }

  .divider{
    display:flex;
    flex-direction: column;
    margin:60px 0;
    
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

  .options{
    display:flex;
    flex-direction: column;
    gap:24px;

    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      height:100px;
      background:#191919;
      padding:0 30px;
      border-radius:15px;
      dt{
        font-size:24px;
        font-weight:400;
        color:#fff;
      }
    }
    .switch-btn{
      display:flex;
      align-items: center;
      gap:30px;
      span{
        font-size:24px;
        color:#898989;
      }
    }
    .switch{
      position: relative;
      width:90px;
      height:50px;
      border-radius:25px;
      background:#d9d9d9;
      padding:5px;
      strong{
        position: absolute;
        left:5px;
        width:40px;
        height:40px;
        border-radius:20px;
        background:#797979;
        transition: all 0.5s;
      }
    }

    .switch.active{
      background:#fff;
      strong{
        left:unset;
        left:45px;
        transition: all 0.5s;
        background:#0066ff;
      }
    }
  }
}

.info{
  display:flex;
  flex-direction: column;
  gap:30px;
  dl{
    dt{
      font-size:24px;
      color:#fff;
      margin-bottom:15px;
    }
    dd{
      input{
        width:100%;
        height:90px;
        border-radius:20px;
        outline: none;
        padding:0 20px;
        font-size:28px;
      }

      input::placeholder{
        font-size:24px;
        color:#797979;
      }
    }
  } 
  
  .el-button{
    height:90px;
    border-radius:20px;
    font-size:28px;
    border:0px;
    background:#0066ff;
    color:#fff;
  }
}
</style>