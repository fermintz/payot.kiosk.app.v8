<template>
  <div class="user_history contents">
    <div class="top">
      <h2>페이오티 금정점</h2>
      <p>
        010-8525-4561님의<br/>
        보유포인트는 <b>1,500P</b> 입니다.
      </p>

      <div class="timer">
        <span>60</span>
      </div>
    </div>

    <div class="cont">
      <div class="history">
        <dl>
          <dt>2023-01-18</dt>
          <dd>
            <div class="item">
              <div class="item_top row">
                <div class="label chage">충전</div>
                <div class="info between">
                  <div class="name">키오스크</div>
                  <div class="time">
                    12:34:14
                  </div>
                </div>
              </div>
              <div class="priceInfo">
                <span class="between">
                  <label>결제금액</label>
                  <strong>7,000원</strong>
                </span>
                <span class="between">
                  <label>보너스</label>
                  <strong>+700P</strong>
                </span>
                <span class="between">
                  <label>사용포인트</label>
                  <strong>1,000P</strong>
                </span>
                <span class="between">
                  <label>보유포인트</label>
                  <strong>7,700P</strong>
                </span>
              </div>
            </div>
            <div class="item">
              <div class="item_top row">
                <div class="label use">충전</div>
                <div class="info between">
                  <div class="name">세탁기 1번</div>
                  <div class="time">
                    12:34:14
                  </div>
                </div>
              </div>
              <div class="priceInfo">
                <span class="between">
                  <label>결제금액</label>
                  <strong>7,000원</strong>
                </span>
                <span class="between">
                  <label>보너스</label>
                  <strong>+700P</strong>
                </span>
                <span class="between">
                  <label>사용포인트</label>
                  <strong>1,000P</strong>
                </span>
                <span class="between">
                  <label>보유포인트</label>
                  <strong>7,700P</strong>
                </span>
              </div>
            </div>
          </dd>
        </dl>

        <dl>
          <dt>2023-01-10</dt>
          <dd>
            <div class="item" v-for="item in 3" :key="item">
              <div class="item_top row">
                <div class="label use">충전</div>
                <div class="info between">
                  <div class="name">세탁기 1번</div>
                  <div class="time">
                    12:34:14
                  </div>
                </div>
              </div>
              <div class="priceInfo">
                <span class="between">
                  <label>결제금액</label>
                  <strong>7,000원</strong>
                </span>
                <span class="between">
                  <label>보너스</label>
                  <strong>+700P</strong>
                </span>
                <span class="between">
                  <label>사용포인트</label>
                  <strong>1,000P</strong>
                </span>
                <span class="between">
                  <label>보유포인트</label>
                  <strong>7,700P</strong>
                </span>
              </div>
            </div>
          </dd>
        </dl>
        
      </div>
    </div>

    <div class="bottom between">
      <el-button text @click="$router.go(-1)">
        <span class="material-icons">arrow_back</span>
        <strong>뒤로가기</strong>
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.history{
  display:flex;
  flex-direction: column;
  overflow-y:auto;
  background:#292929;

  padding:40px;
  border-radius:30px;
  height:1200px;

  dl{
    margin-bottom:60px;
    dt{
      font-size:30px;
      font-weight:600;
      color:#fff;
    }
    dd{
      display:flex;
      flex-direction: column;
      gap:20px;
      margin-top:20px;
    }
  }

  .item{
    background:#fff;
    padding:30px;
    border-radius:20px;
    .item_top{
      gap:20px;
      margin-bottom:30px;

      .label{
        display:flex;
        align-items: center;
        justify-content: center;
        
        color:#fff;
        height:60px;
        width:120px;
        border-radius:30px;
        font-size:28px;
      }
      .label.chage{
        background:#0066ff;
      }
      .label.use{
        background:#ff0033;
      }
      .info{
        height:60px;
        background:#f5f5f7;
        flex:1;
        font-size:28px;
        padding:0 30px;
        border-radius:30px;
        .name{
          font-weight:500;
        }
        .time{
          color:#797979;
        }
      }
    }

    .priceInfo{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:15px 60px;

      span{
        font-size:28px;
        strong{
          font-weight:600;
        }
      }
    }
  }
}



</style>