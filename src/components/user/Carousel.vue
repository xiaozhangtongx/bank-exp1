<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-12 22:54:01
-->
<!--
 * @Description: 用户登录背景页面
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-11 16:26:51
-->
<template>
  <a-carousel autoplay>
    <div v-for="item in imgs" :key="item.id">
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
          id: 1,
          img: require('../../assets/images/1.png'),
        },
        {
          id: 2,
          img: require('../../assets/images/2.png'),
        },
        {
          id: 3,
          img: require('../../assets/images/3.png'),
        },
        {
          id: 4,
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
  width: 100vw;
  background: #364d79;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
