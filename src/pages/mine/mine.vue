<template>
  <div>
    <div class="touxiang">
      <div class="buddha">
        <img :src="userinfo.avatarUrl" alt="">
        <Button class="login" open-type="getUserInfo" @getuserinfo="getUserInfo" v-if="isloginshow">点击登入</Button>
        <p class="login" v-else>{{userinfo.nickName}}</p>
      </div>
    </div>
    <div class="order">
      <div class="word">我的订单</div>
      <div class="chakan">查看全部订单></div>
      <div class="orderlist">
        <div class="sonorderlist">
          <div><img src="/static/images/mine/payment to be made.png" alt=""></div>
          <span>待付款</span>
        </div>
        <div class="sonorderlist">
          <div><img src="/static/images/mine/to be distributed.png" alt=""></div>
          <span>待配送</span>
        </div>
        <div class="sonorderlist">
          <div><img src="/static/images/mine/distribution.png" alt=""></div>
          <span>配送中</span>
        </div>
        <div class="sonorderlist">
          <div><img src="/static/images/mine/to be evaluated.png" alt=""></div>
          <span>待评价</span>
        </div>
        <div class="sonorderlist">
          <div><img src="/static/images/mine/refund.png" alt=""></div>
          <span>退款</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {
        avatarUrl: '/static/images/mine/head.png'
      },
      isloginshow: true
    }
  },
  methods: {
    getUserInfo: function(data){
      if (data.mp.detail.rawData) {
        this.handgetuserinfo()
      }
    },
    handgetuserinfo() {
      wx.getUserInfo({
        success: (data) => {
          console.log(data)
          this.userinfo = data.userInfo
          this.isloginshow = false
        },
        fail: (data) => {
          console.log("获取失败")
          this.isloginshow = true
        }
      }) 
    }
  }
}
</script>>
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
    border-radius: 50%;
    display: block;
    width: 100%;
    height: 100%;
  }
  .login{
    width: 160rpx;
    height: 40rpx;
    font-size:24rpx;
    color: #000000;
    letter-spacing: 1rpx;
    text-align: center;
    line-height: 40rpx;
    position: absolute;
    left: 50%;
    top: 160rpx;
    margin-left: -76rpx;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .order{
    width: 100%;
    height: 238rpx;
    /* background: yellowgreen; */
    position: relative;
  }
  .word{
    width: 130rpx;
    height: 40rpx;
    font-family: PingFangSC-Medium;
    font-weight: bold;
    font-size: 30rpx;
    color: #222222;
    letter-spacing: 0.34rpx;
    text-align: center;
    line-height: 40rpx;
    margin-left: 32rpx;
    /* margin-top: 32rpx; */
  }
  .chakan{
    width: 170rpx;
    height: 33rpx;
    position: absolute;
    right: 30rpx;
    top: 10rpx;
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #B3B3B3;
    /* letter-spacing: 1rpx; */
    text-align: center
  }
  .orderlist{
    width: 100%;
    height: 108rpx;
    /* background: #B3B3B3; */
    position: absolute;
    left: 0;
    top: 60rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .sonorderlist{
    width: 85rpx;
    height: 108rpx;
    /* background: #222222; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .sonorderlist div{
    width: 80rpx;
    height: 60rpx;
    /* background: yellow; */
  }
  .sonorderlist div img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .sonorderlist span{
    width: 85rpx;
    height: 34rpx;
    /* background: #B3B3B3; */
    font-family: PingFangSC-Regular;
    font-size: 22rpx;
    color: #999999;
    text-align: center;
  }
</style>