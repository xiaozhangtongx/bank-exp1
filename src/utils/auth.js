/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-01 09:00:12
 */
// 获取当前用户的角色
export function getCurrentAutority() {
  return ['admin']
}

// 检查当前用户的角色是否适配
export function check(autority) {
  const current = getCurrentAutority()
  return current.some((item) => autority.includes(item))
}

// 判断该用户是否已经登录
export function isLogin() {
  const current = getCurrentAutority()
  return current && current[0] != 'guest'
}
