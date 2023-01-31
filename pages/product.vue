<template>
  <div class="product contents">
    <div class="top">
      <h2>페이오티 금정점</h2>
      <p>
        사용하실 장비와 상품을<br/>
        선택해주세요
      </p>

      <div class="step">
        <span>로그인</span>
        <span class="active">장비선택</span>
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

      <div class="eqSelector row">
        <div class="cate">
          <div class="cate_btn" v-for="(item, index) in ['세탁기','건조기','기타장비','운동화','자판기']" :key="item" :class="{active:category === index}" @click="category = index">
            <span class="material-icons">local_laundry_service</span>
            <strong>{{item}}</strong>
          </div>
        </div>
        <div class="list">
          <div class="eq_item between" v-for="item in 10" :key="item" @click="visible = true">
            <div class="label">
              <strong>1번세탁기</strong>
              <p>용량 27Kg</p>
            </div>
            <span class="material-icons">
              chevron_right
            </span>
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

    <bottomProduct v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
const category = ref(0)
const visible = ref(false)
</script>

<style lang="scss" scoped>


.cont{
  .eqSelector{
    margin-top:40px;
    gap:40px;
    .cate{
      display:flex;
      flex-direction: column;
      gap:24px;
      background:#292929;
      border-radius:30px;
      width:200px;
      height:980px;
      padding:24px;
      overflow-y:auto;

      &::-webkit-scrollbar{
        display:none;
      }

      .cate_btn{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius:15px;
        background:#fff;
        min-height:200px;
        cursor: pointer;
        span{
          font-size:90px;
        }
        strong{
          font-size:24px;
          margin-top:15px;
        }
      }
      .cate_btn.active{
        position: relative;
        background:#0066ff;

        &:after{
          content:'';
          display:block;
          width:30px;
          height:30px;
          position: absolute;
          right:-10px;
          background:#0066ff;
          transform: rotate(45deg);
        }

        span,strong{
          color:#fff;
        }
      }
    }

    .list{
      display:flex;
      flex-direction: column;
      flex:1;
      padding:24px;
      background:#f5f5f7;
      height:980px;
      border-radius:30px;
      gap:20px;
      border:3px solid #e2e2e2;
      overflow-y:auto;

      &::-webkit-scrollbar{ //스크롤바 전체
        width:8px;
        border:0;
      }
      &::-webkit-scrollbar-thumb{
        background:#0066ff;
        width:8px;
        border-radius:4px;
      } // 스크롤 막대
      &::-webkit-scrollbar-track{
        background:transparent;
        border-radius:4px;
        
      } // 스크롤바 트랙
      .eq_item{
        border:3px solid #e2e2e2;
        background:#fff;
        border-radius:20px;
        padding:30px;
        .label{
          flex:1;
          strong{
            font-size:36px;
            font-weight:500;
          }
          p{
            font-size:24px;
            color:#797979;
          }
        }
        span{
          font-size:50px;
          color:#0066ff;
        }
      }
    }

  }
}


</style>