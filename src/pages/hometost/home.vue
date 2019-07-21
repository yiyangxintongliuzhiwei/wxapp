<template>
  <div>
    <div class="themeimg">
      <img src="./img/theme.jpg" alt="">
    </div>
    <swiper indicator-color="#fff" autoplay="true" interval="3000" class="type">
      <swiper-item>
        <div class="typelist">
          <img src="./img/个人洗护.png" alt="">
          <div>个人洗护</div>
        </div>
        <div class="typelist">
          <img src="./img/零食.png" alt="">
          <div>零食饮料</div>
        </div>
        <div class="typelist">
          <img src="./img/家居.png" alt="">
          <div>家居清洁</div>
        </div>
        <div class="typelist">
          <img src="./img/厨房.png" alt="">
          <div>厨房日用</div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
  .themeimg{
    width: 97.3%;
    height: 300rpx;
    margin:0 auto;
    border-radius: 12rpx;
  }
  .themeimg img{
    width: 100%;
    height: 100%;
  }
  .type{
    width: 97.3%;
    height: 140rpx;
    margin:0 auto;
    /* background: yellow; */
  }
  .type swiper-item{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .typelist{
    width: 85rpx;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  .typelist img{
    width: 85rpx;
    height: 85rpx;
    border-radius: 50%;
  }
  .typelist div{
    font-family: PingFangSC-Regular;
    font-size: 22rpx;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    line-height: 30rpx;
  }
</style>



