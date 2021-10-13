<!--
 * @Description: 首页的基本布局
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 11:29:50
-->
<template>
  <div>
    <a-layout id="basiclayout">
      <!-- header部分 -->
      <a-layout-header style="padding: 0 10px;">
        <Header />
      </a-layout-header>
      <!-- sider和content部分 -->
      <a-layout>
        <a-layout-sider breakpoint="md" collapsed-width="0" @collapse="onCollapse"
          @breakpoint="onBreakpoint" style="background: #fff;">
          <SiderMenu />
        </a-layout-sider>
        <a-layout-content style="margin:36px">
          <router-view />
        </a-layout-content>
      </a-layout>
      <!-- footer部分 -->
      <a-layout-footer style="padding: 5px 50px;">
        <Footer />
      </a-layout-footer>
    </a-layout>

  </div>

</template>

<script>
import Footer from '@/layout/Footer'
import SiderMenu from '@/layout/SiderMenu'
import Header from '@/layout/Header'
export default {
  data() {
    return {}
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint(broken) {
      console.log(broken)
    },
  },
  components: {
    Footer,
    Header,
    SiderMenu,
  },
}
</script>

<style lang="less" scoped>
#basiclayout {
  width: 100vw;
  height: 100vh;
}
.ant-layout-header,
.ant-layout-footer {
  background-color: #1990ff;
}
</style>
