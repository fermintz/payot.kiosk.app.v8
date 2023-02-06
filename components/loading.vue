<template>
  <el-dialog
    v-model="show"
    width="auto"
    align-center
    :show-close="false"
  >
    
    <div class="dialog loading">
      <dl>
        <dt>
          <div class="row">
            <span v-for="item in 10" :key="item"></span>
          </div>
        </dt>
        <dd>
          <strong>
            인터넷 연결 확인중입니다.
          </strong>
          <span>
            잠시만 기다려주세요
          </span>
        </dd>
      </dl>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()
const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})


</script>

<style lang="scss" scoped>
.el-overlay-dialog{
  top:unset;
  bottom:15%;
}
.loading{
  padding:80px;

  dl{
    dt{
      width:100%;
      display:flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom:50px;

      .row{
        position: relative;
        gap:15px;

        span{
          position: relative;
          display:block;
          height:80px;
          width:15px;
          border-radius:7.5px;
          overflow:hidden;
          background:#eaeaea;
        }

        span:after{
          position: absolute;
          display:block;
          content:'';
          width:15px;
          height:15px;
          border-radius:7.5px;
          background:#0066ff;
          animation: loading 2.6s infinite ease-in-out;
        }

        span:nth-child(2):after{
          animation-delay: 0.2s;
        }
        span:nth-child(3):after{
          animation-delay: 0.4s;
        }
        span:nth-child(4):after{
          animation-delay: 0.6s;
        }
        span:nth-child(5):after{
          animation-delay: 0.8s;
        }
        span:nth-child(6):after{
          animation-delay: 1s;
        }
        span:nth-child(7):after{
          animation-delay: 1.2s;
        }
        span:nth-child(8):after{
          animation-delay: 1.4s;
        }
        span:nth-child(9):after{
          animation-delay: 1.6s;
        }
        span:nth-child(10):after{
          animation-delay: 1.8s;
        }
      }
    
    }
    dd{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      strong{
        font-size:42px;
        font-weight:500;
        color:#292929;
      }
      span{
        font-size:30px;
        color:#797979;
        margin-top:10px;
      }
    }
  }
}

@keyframes loading {
  0%{
    top:0px;
  }
  50%{
    top:65px;

  }
  100%{
    top:0px;
  }
}


</style>