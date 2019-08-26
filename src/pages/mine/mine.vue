<template>
  <div>
    <div class="touxiang">
      <div class="buddha">
        <img src="/static/images/mine/head.png" alt="">
        <div class="login">点击登入</div>
      </div>
    </div>
    <div class="order">
      <div class="word">我的订单</div>
    </div>
  </div>
</template>
<style>
  .touxiang{
    width: 100%;
    height: 353rpx;
    /* background: yellow; */
    position: relative;
  }
  .buddha{
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -75rpx;
    margin-top: -105rpx; 
  }
  .buddha img {
    width: 100%;
    height: 100%;
  }
  .login{
    width: 130rpx;
    height: 40rpx;
    font-size:32rpx;
    color: #000000;
    letter-spacing: 2rpx;
    text-align: center;
    line-height: 40rpx;
    position: absolute;
    left: 50%;
    top: 160rpx;
    margin-left: -60rpx;
  }
  .order{
    width: 100%;
    height: 238rpx;
    background: yellowgreen;
  }
  .word{
    width: 114rpx;
    height: 40rpx;
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #222222;
    letter-spacing: 0.34rpx;
    text-align: center;
    line-height: 40rpx;
    margin-left: 32rpx;
    /* margin-top: 32rpx; */
  }
</style>