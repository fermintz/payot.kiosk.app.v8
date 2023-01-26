<template>
  <div class="default">
    <div class="container">
      <slot />
    </div>
    <div class="footer">
      <div class="cscenter">
        <span class="material-icons">support_agent</span>
        <strong>1588-1588</strong>
      </div>
      <div class="aggre">
        <el-button text>키오스크 이용약관</el-button>
        <el-button text>개인정보 취급방침</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default{
  padding:0 15px;
  padding-top:15px;
  background:#292929;
  height:1920px;

  .container{
    position: relative;
    overflow:hidden;
    border-radius:50px;
    margin:0;
    padding:0;
    background:#fff;
    height:1830px;
    padding:0 40px 40px 40px;
  }

  .footer{
    height:75px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;

    .cscenter{
      display:flex;
      align-items: center;
      font-size:18px;

      span{
        font-size:32px;
        margin-right:10px;
      }
      strong{
        font-size:24px;
        font-weight:500;
      }
    }

    .aggre{
      .el-button{
        font-size:18px;
        color:#fff;
      }
    }
  }
}
</style>