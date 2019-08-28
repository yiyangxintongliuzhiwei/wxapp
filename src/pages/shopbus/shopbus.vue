<template>
  <div>
    <div class="gouwu">
      <div class="shoptu">
        <img src="/static/images/shopbus/shopkong.png" alt="">
      </div>
      <div class="kongzifu">购物车竟然空空如也~~</div>
      <div class="quguang" @click="toshop">去逛逛</div>
    </div>
    <div class="jiesuan"></div>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    toshop() {
      wx.reLaunch({
        url: "/pages/hometost/main" 
      })
    }
  }
}
</script>

<style>
.gouwu{
  width: 341rpx;
  height: 300rpx;
  /* background: yellow; */
  position: fixed;
  top: 50%;
  left: 50% ;
  margin-left: -170rpx;
  margin-top: -300rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.shoptu{
    /* background: #000; */
  width: 222rpx;
  height: 177rpx;
}
.shoptu img{
   width: 100%;
  height: 100%; 
}
.kongzifu{
  width: 284rpx;
  height: 40rpx;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #999999;
  letter-spacing: 0.34rpx;
  text-align: center;
  line-height: 40rpx;
}
.quguang{
  width: 284rpx;
  height: 56rpx;
  background: #F99545;
  box-shadow: 0 20rpx 30rpx -10rpx rgba(198,121,37,0.30);
  border-radius: 4rpx;
  font-family: PingFangSC-Medium;
  font-size: 28rpx;
  color: #FFFFFF;
  letter-spacing: 1.17rpx;
  text-align: center;
  line-height: 56rpx;
}
</style>

