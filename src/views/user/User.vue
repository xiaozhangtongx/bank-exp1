<!--
 * @Description: 用户登录背景页面
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-11 16:26:51
-->
<template>
  <a-carousel autoplay>
    <div v-for="item in imgs" :key="item">
      <img :src="item.img" alt="暂无图片">
    </div>
  </a-carousel>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          img: require('../../assets/images/1.png'),
        },
        {
          img: require('../../assets/images/2.png'),
        },
        {
          img: require('../../assets/images/3.png'),
        },
        {
          img: require('../../assets/images/4.png'),
        },
      ],
    }
  },
}
</script>
<style scoped >
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 100vh;
  line-height: 100vh;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
