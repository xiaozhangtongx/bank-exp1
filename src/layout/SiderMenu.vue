<!--
 * @Description: 侧边栏
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 14:40:53
-->
<template>
  <div>
    <a-menu :selectedKeys="selectedKeys" :openKeys.sync="openKeys" mode="inline">
      <template v-for="item in menu">
        <a-menu-item v-if="!item.children" :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { check } from '../utils/auth'

export default {
  watch: {
    '$route.path': function (val) {
      this.selectedKeys = this.selectedKeysMap[val]
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val]
    },
  },
  data() {
    this.selectedKeysMap = {}
    this.openKeysMap = {}
    let menuData = this.getMenuData(this.$router.options.routes)
    const menu = menuData[0].children
    return {
      menu,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path],
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = []
      // 权限的动态生成
      for (let item of routes) {
        if (item.meta && item.meta.authority && !check(item.meta.authority)) {
          continue
        }
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys
          this.selectedKeysMap[item.path] = [selectedKey || item.path]
          const newItem = { ...item }
          delete newItem.children
          menuData.push(newItem)
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children, [...parentKeys, item.path])
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            )
          }
        }
      }
      return menuData
    },
  },
}
</script>

<style lang="less" scoped>
</style>
