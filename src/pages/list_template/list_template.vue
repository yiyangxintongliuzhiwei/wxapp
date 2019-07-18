<template>
  <div>
    <div>
      <span>{{item.username}}</span>
    </div>
    <div>{{item.companyname}}</div>
    <div class="imgcontain"><img src="/static/images/3.jpg" alt=""></div>
    <div>
      <span>评论{{item.dianzan}}</span>
      <span>点赞{{item.pinglun}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'item', 'index'
  ]
}
</script>

<style>
.imgcontain{
  width: 100%;
  height: 400rpx;
}
.imgcontain img{
  width: 100%;
  height: 400rpx;
}
</style>

