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
      <swiper-item>
        <div class="typelist">
          <img src="./img/家居.png" alt="">
          <div>家居清洁</div>
        </div>
        <div class="typelist">
          <img src="./img/零食.png" alt="">
          <div>零食饮料</div>
        </div>
        <div class="typelist">
          <img src="./img/个人洗护.png" alt="">
          <div>个人洗护</div>
        </div>
        <div class="typelist">
          <img src="./img/厨房.png" alt="">
          <div>厨房日用</div>
        </div>
      </swiper-item>
    </swiper>
    <div class="checkbox">
      <div v-for="(item, index) in checkboxlist" :class=" isactive == index ? 'active' : 'checkboxstyle' " :key="index" @click="handlecheck(item, index)">{{item}}</div>
    </div>
    <div class="product">
      <div class="productlist" v-for="(item, index) in pruductlists" :key="index">
        <div class="tupian">
          <img :src="item.imgurl" alt="">
        </div>
        <p class="miaoshu">{{item.description}}</p>
        <div class="goumai">{{item.goumailiang}}人购买</div>
        <div class="jiage">
          <div class="qian">
            <span>￥</span>
            <div>{{item.price}}</div>
          </div>
          <div class="che">
            <img src="./img/inshop_pressed.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkboxlist: ['推荐','秒杀','拼单','预约','Vip'],
      isactive: 0,
      pruductlists: [
        {
          imgurl: './img/xuegao.jpg',
          description: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          goumailiang: 2350,
          price: 16.0
        },
        {
          imgurl: './img/xuegao.jpg',
          description: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          goumailiang: 2350,
          price: 16.0
        },
        {
          imgurl: './img/xuegao.jpg',
          description: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          goumailiang: 2350,
          price: 16.0
        },
        {
          imgurl: './img/xuegao.jpg',
          description: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          goumailiang: 2350,
          price: 16.0
        },
        {
          imgurl: './img/xuegao.jpg',
          description: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          goumailiang: 2350,
          price: 16.0
        }
      ]
    }
  },
  methods: {
    handlecheck(item, index) {
      this.isactive = index
    }
  }
}
</script>
<style scoped>
  .themeimg{
    width: 97.3%;
    height: 300rpx;
    margin:0 auto 40rpx auto;
    border-radius: 12rpx;
  }
  .themeimg img{
    width: 100%;
    height: 100%;
  }
  .type{
    width: 97.3%;
    height: 140rpx;
    margin:0 auto 40rpx auto;
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
    width: 90rpx;
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
  .checkbox{
    width: 97.3%;
    height: 40rpx;
    margin:0 auto 40rpx auto;
    display: flex;
    align-items: center;
    justify-content: space-around
  }
  .checkboxstyle{
    width: 80rpx;
    height: 40rpx;
    font-family: PingFangSC-Semibold;
    font-size: 30rpx;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 40rpx;
  }
  .active{
    width: 80rpx;
    height: 40rpx;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    font-size: 30rpx;
    color: #000000;
    letter-spacing: 0;
    text-align: center; 
    line-height: 40rpx; 
  }
  .product{
    width: 97.3%;
    margin:0 auto 40rpx auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
  }
  .productlist{
    width: 330rpx;
    height: 527rpx;
    margin-left: 25rpx
  }
  .tupian{
    width: 302rpx;
    height: 302rpx;
    margin: 10rpx 0rpx 0 16rpx
  }
  .tupian img{
    width: 100%;
    height: 100%;
  }
  .miaoshu{
    width: 302rpx;
    height: 74rpx;
    margin: 40rpx 0rpx 0 16rpx;
    font-family: PingFangSC-Medium;
    font-size: 26rpx;
    color: #333333;
    letter-spacing: 1rpx;
  }
  .goumai{
    width: 302rpx;
    height: 28rpx;
    font-family: PingFangSC-Light;
    font-size: 20rpx;
    color: #666363;
    letter-spacing: 0.56rpx;
    text-align: left;
    line-height: 28rpx;
     margin: 10rpx 0rpx 0 16rpx
  }
  .jiage{
    width: 302rpx;
    height: 50rpx;
    margin: 10rpx 0rpx 0 16rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .qian{
    width: 130rpx;
    height: 50rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .qian span{
    width: 26rpx;
    height: 50rpx;
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #E22A24;
    letter-spacing: 0.93rpx;
    line-height: 50rpx;
  }
  .qian div{
    width: 104rpx;
    height: 50rpx;
    font-family: PingFangSC-Semibold;
    font-size: 36rpx;
    color: #E22A24;
    letter-spacing: 1rpx;
    text-align: left;
    line-height: 50rpx;
  }
  .che{
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  .che img{
    width: 100%;
    height: 100%;
  }
</style>



