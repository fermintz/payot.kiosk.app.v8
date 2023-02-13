<template>
  <div class="wait">
    <el-carousel :interval="8000" height="1920px">
      <el-carousel-item  @click="$router.push('/')">
        <div class="item">
          <img src="~/assets/img/wait01.jpg" />
          <div class="point_percent row">
            <dl>
              <dt>현금결제시 최대</dt>
              <dd>30% 적립</dd>
            </dl>
            <dl>
              <dt>카드결제시 최대</dt>
              <dd>30% 적립</dd>
            </dl>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item  @click="$router.push('/')">
        <div class="item shopState">
          <div class="logo_area">
            <img src="~/assets/img/logo_w.png"/>
            <span>세탁프리워시 광안점</span>
          </div>

          <h2>
            매장에서 사용중인 장비의<br/>상태를 확인해 볼 수 있습니다 
          </h2>

          <div class="stateArea" v-for="items in ['세탁기','건조기']" :key="items">
            <h4>{{ items }}</h4>
            <div class="list">
              <dl class="play">
                <dt>
                  <span class="material-icons">local_laundry_service</span>
                </dt>
                <dd>
                  <strong>1번 {{items}}</strong>
                  <span>사용중</span>
                </dd>
              </dl>
              <dl class="pause" v-for="item in 9" :key="item">
                <dt>
                  <span class="material-icons">local_laundry_service</span>
                </dt>
                <dd>
                  <strong>{{item + 1}}번 {{items}}</strong>
                  <span>대기중</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="bottom_text">
      <p>키오스크를 이용하시려면<br/>화면을 터치해주세요</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty'
})
</script>

<style lang="scss" scoped>

.wait{
  img{
    width:100%;
  }

  .item{
    .point_percent{
      position: absolute;
      bottom:35%;
      width:100%;
      justify-content: center;
      z-index:2;
      display:flex;

      dl{
        text-align:center;
        dt{
          font-size:34px;
        }
        dd{
          font-size:70px;
          font-weight:600;
        }
      }

      dl:nth-child(1){
        border-right:3px solid rgba(0,0,0,0.3);
        padding-right:60px;
        margin-right:60px;
      }
    }
  }

  .shopState{
    background: linear-gradient(168.18deg, #1644E6 3.43%, #0028B5 96.71%);
    height:100%;
    padding:50px;
    .logo_area{
      display:flex;
      align-items: center;
      img{
        width:240px;        
      }
      span{
        display:flex;
        align-items: center;
        color:#fff;
        background:rgba(0,0,0,0.4);
        padding:0 30px;
        height:50px;
        border-radius:30px;
        font-size:24px;
        margin-left:40px;
      }
    }

    h2{
      font-size:40px;
      font-weight:500;
      color:#fff;
      margin:50px 0;
    }
  }


  .stateArea{
    background:rgba(0,0,0,0.2);
    border-radius:30px;
    padding:40px;
    margin-bottom:20px;

    h4{
      font-size:30px;
      color:#fff;
      font-weight:500;
      margin-bottom:15px;
    }

    .list{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      gap:15px;

      dl{
        background:#fff;
        padding:15px;
        border-radius:10px;
        box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
        dt{
          display:flex;
          align-items: center;
          justify-content: center;
          width:100%;
          height:70px;

          span{
            font-size:60px;
            color:#d2d2d2;
          }
        }
        dd{
          margin-top:15px;
          strong,span{
            display:block;
          }
          strong{
            font-size:16px;
          }
          span{
            font-size:16px;
            font-weight:500;
            color:#797979;
          }

          &:after{
            content:'';
            display:block;
            height:5px;
            background:#e2e2e2;
            border-radius:2.5px;
            margin-top:15px;
          }
        }
      }

      dl.play{
        dt{
          span{
            color:#ff0066
          }
        }
        dd{
          span{
            color:#ff0066;
          }
        }
        dd:after{
          background:#ff0066;
        }
      }
    }
  }

  .bottom_text{
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    position: absolute;
    z-index:99;
    bottom:0px;
    padding:40px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
    height:450px;

    p{
      text-align:center;
      font-size:40px;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
  }
}

</style>