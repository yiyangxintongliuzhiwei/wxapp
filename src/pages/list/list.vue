<template>
  <div class="container">
    <swiper indicator-dots="true" indicator-color="#fff" autoplay="true" interval="3000">
      <swiper-item>
        <img src="/static/images/0.jpg" alt="">
      </swiper-item>
      <swiper-item>
          <img src="/static/images/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
          <img src="/static/images/2.jpg" alt="">
      </swiper-item>
    </swiper>
    <ListTap v-for="(item, index) in listTmp.listdata" :key=index :item="item" :index="index"></ListTap>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import ListTap from '../list_template/list_template.vue'
export default {
  components: {ListTap},
  beforeMount() {
    //分发action,触发action
    this.$store.dispatch('getlist')
  },
  computed: {
    //映射状态
    ...mapState(['listTmp'])
  },
}
</script>

<style>
.container{
    width: 100%;
}
.container swiper{
    width: 100%;
    height: 400rpx;
}
.container swiper swiper-item {
    width: 100%;
    height: 400rpx;
}
.container swiper swiper-item img{
    width: 100%;
    height: 100%;
}
</style>

