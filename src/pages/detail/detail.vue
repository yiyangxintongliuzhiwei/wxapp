<template>
  <div>
    <div class="proimg">
      <img src="/static/images/mine/shipin.jpg" alt="">
    </div>
    <div class="miaoshu">{{description}}</div>
    <div class="jiage">￥{{price}}</div>
    <div class="guige">
      <div class="qingxuanze">{{qingxuanze}}</div>
      <div class="xuanzehao">></div>
    </div>
    <div class="xuanzeguige">
      <div class="xuankuang">
        <div class="xiaokuang">选择规格</div>
        <div>+</div>
        <div>立即购买</div>
      </div>
    </div>
  </div>
</template>>
<script>
export default {
  data() {
    return {
      url: '',
      options: '',
      description: '',
      price: '',
      qingxuanze: '请选择规格',
      clentheight: 0
    }
  },
  mounted() {
    var pages = getCurrentPages()
    var currentPage = pages[pages.length-1]
    this.url = currentPage.route //当前页面url
    this.options = currentPage.options // 当前参数
    this.description = this.options.id
    this.price = this.options.price
  },
  methods: {}
}
</script>>
<style>
  .proimg{
    width: 100%;
    height: 600rpx;
  }
  .proimg img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .miaoshu{
    width: 660rpx;
    height: 40rpx;
    margin: 20rpx 0rpx 0 46rpx;
    font-family: PingFangSC-Medium;
    font-weight: bold;
    font-size: 30rpx;
    color: #222222;
    letter-spacing: 1rpx;
  }
  .jiage{
    width: 160rpx;
    height: 70rpx;
    margin: 0rpx 0rpx 0 38rpx;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #E22A24;
    text-align: left;
  }
  .guige{
    width: 100%;
    height: 100rpx;
    /* background: yellow; */
    display: flex;
    align-items: center;
    justify-content: space-around
  }
  .qingxuanze{
    width: 90%;
    box-sizing: border-box;
    padding-left: 46rpx;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222222
  }
  .xuanzehao{
    width: 10%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222222
  }
  .xuanzeguige{
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.4);
    position: absolute;
    left: 0;
    top: 0;
  }
  .xuankuang{
    width: 100%;
    height: 200rpx;
    background: #ffffff;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>