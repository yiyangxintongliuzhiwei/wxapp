<template>
  <div class="containner">
    <img class="images" :src="userinfo.avatarUrl" alt="" v-if="isshow">
    <Button open-type="getUserInfo" v-else @getuserinfo="getUserInfo">获取用户信息</Button>
    <p>Hello {{userinfo.nickName}}</p>
    <!-- 阻止冒泡@click.stop -->
    <!-- 小程序点击事件@tap -->
    <div class="submit" @click="todetail" v-if="isshow">开启小程序</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {},
      isshow: false
    }
  },
  beforeMount() {
    // this.handgetuserinfo()
  },
  methods: {
    handgetuserinfo() {
      wx.getUserInfo({
        success: (data) => {
          console.log(data)
          this.userinfo = data.userInfo
          this.isshow = true
        },
        fail: (data) => {
          console.log("获取失败")
        }
      }) 
    },
    getUserInfo: function(data){
      if (data.mp.detail.rawData) {
        this.handgetuserinfo()
      }
    },
    todetail() {
      // console.log('todetail')
      wx.navigateTo({
        url: "/pages/list/main"
      })
    }
  }
}
</script>

<style>
  .containner{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
  }
  .images{
    width: 300rpx;
    height: 300rpx;
    border-radius: 50%;
  }
  .submit{
    width: 300rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    border: 1rpx solid #000;
  }
</style>

