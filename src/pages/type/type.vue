<template>
  <div>
    <input type="text" class="sousuo" placeholder="搜索店内商品">
    <div class="xian"></div>
    <div class="box">
      <div class="xuanxiang">
        <div v-for="(item, index) in xuanxianglist" :class=" isactive == item ? 'active' : 'xuanxiangstyle' " :key="index" @click="changetype(item, index)">{{item}}</div>
      </div>
      <div class="huowu">
          <div class="meige" v-for="(item, index) in huowulist" :key="index">
            <div class="xiaotupian">
                <img :src="item.imgurl" alt="">
            </div>
            <div class="xiangqing">
              <div class="miaoshuneirong">{{item.des}}</div>
              <div class="jiagexiangqi">
                  <div class="pqian">
                      <span>￥</span>
                      <div>{{item.price}}</div>
                  </div>
                  <div class="goumailiangs">{{item.goumai}}人购买</div>
                  <div class="ches">
                    <img src="./img/inshop_pressed.png" alt="">
                  </div>
              </div>
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
      xuanxianglist: ['个人洗护', '零食饮料', '家居清洁', '厨房日用', '其他商品'],
      isactive: '个人洗护',
      huowulist: [
        {
          imgurl: './img/xuegao.jpg',
          des: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          price: 16.0,
          goumai: 394,
        },
        {
          imgurl: './img/xuegao.jpg',
          des: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          price: 16.0,
          goumai: 394,
        },
        {
          imgurl: './img/xuegao.jpg',
          des: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          price: 16.0,
          goumai: 394,
        },
        {
          imgurl: './img/xuegao.jpg',
          des: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          price: 16.0,
          goumai: 394,
        },
        {
          imgurl: './img/xuegao.jpg',
          des: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          price: 16.0,
          goumai: 394,
        },
        {
          imgurl: './img/xuegao.jpg',
          des: '蒙牛 巧乐兹蒙牛巧乐兹蒙牛巧...',
          price: 16.0,
          goumai: 394,
        }
      ]
    }
  },
  methods: {
    changetype(item, index) {
      this.isactive = item
    }
  },
  mounted() {
    console.log(this.$store.state.type)
    this.isactive = this.$store.state.type
  }
}
</script>

<style scoped>
.sousuo{
    width: 80.3%;
    height: 48rpx;
    margin:0 auto 0rpx auto;
    border-radius: 12rpx;
    font-family: PingFangSC-Regular;
    font-size: 30rpx;
    color: #B3B3B3;
    text-align: left;
    line-height: 48rpx;
}
.xian{
   width: 100%;
   height: 1rpx;
   background: rgb(248, 227, 227);
   margin-top: 20rpx; 
}
.box{
   width: 100%;
   display: flex;
   /* align-items: center; */
   justify-content: space-between;
}
.xuanxiangstyle{
    width: 100%;
    height: 90rpx;
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #666666;
    text-align: center;
    line-height: 90rpx;
}
.xuanxiang{
    width: 26.1%;
}
.active{
    width: 100%;
    height: 90rpx;
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #666666;
    font-weight:bold;
    text-align: center;
    line-height: 90rpx;
    background: rgba(245,231,221, 0.9)
}
.huowu{
    border-left: 1rpx solid rgb(248, 227, 227, 0.8);
    width: 72.9%;
}
.meige{
    width: 100%;
    height: 160rpx;
    /* background: yellow; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 0 40rpx 0;
}
.xiaotupian{
    width: 160rpx;
    height: 160rpx;
    margin: 10rpx 0 0 0;
    /* background: #666666; */
}
.xiaotupian img{
    width: 100%;
    height: 100%;
}
.xiangqing{
    width: 324rpx;
    height: 160rpx;
}
.miaoshuneirong{
    width: 322rpx;
    height: 74rpx;
    font-family: PingFangSC-Medium;
    font-size: 26rpx;
    color: #333333;
    letter-spacing: 1rpx;
    margin: 10rpx 0 0 0;
}
.jiagexiangqi{
    width: 322rpx;
    height: 44rpx;
    /* background: #666666; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40rpx 0 0 0;
}
.pqian{
    width: 100rpx;
    height: 50rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.pqian span{
    width: 26rpx;
    height: 50rpx;
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #E22A24;
    letter-spacing: 0.93rpx;
    line-height: 50rpx;
  }
  .pqian div{
    width: 104rpx;
    height: 50rpx;
    font-family: PingFangSC-Semibold;
    font-size: 36rpx;
    color: #E22A24;
    letter-spacing: 1rpx;
    text-align: left;
    line-height: 50rpx;
  }
  .goumailiangs{
    width: 130rpx;
    height: 50rpx;
    /* background: yellow; */
    font-family: PingFangSC-Light;
    font-size: 20rpx;
    color: #666363;
    letter-spacing: 0.56rpx;
    text-align: left;
    line-height: 60rpx;
  }
  .ches{
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  .ches img{
    width: 100%;
    height: 100%;
  }
</style>

