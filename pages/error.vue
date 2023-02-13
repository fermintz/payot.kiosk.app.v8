<template>
  <div class="errorPage">
    <dl>
      <dt>404</dt>
      <dd>요청하신 페이지를 찾을 수 없습니다</dd>
    </dl>

    <p>
      페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.<br/>
      다시 한번 확인 후 이용해주시길 바랍니다.
    </p>

    <div class="btns">
      <el-button @click="$router.push('/')">메인으로 돌아가기</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.errorPage{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;

  dl{
    text-align:center;
    dt{
      font-size:300px;
      font-family:'Roboto';
      font-weight:600;
      line-height:1;
    }
    dd{
      font-size:40px;
      font-weight:500;
    }
  }

  p{
    font-size:30px;
    color:#797979;
    text-align:center;
    margin-top:40px;
  }

  .btns{
    margin-top:90px;
    .el-button{
      height:100px;
      padding:0 90px;
      border-radius:50px;
      background:#292929;
      border:0;
      font-size:30px;
      color:#fff;
    }
  }
}
</style>