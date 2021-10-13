"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentAutority = getCurrentAutority;
exports.check = check;
exports.isLogin = isLogin;

/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-01 09:00:12
 */
// 获取当前用户的角色
function getCurrentAutority() {
  return ['user'];
} // 检查当前用户的角色是否适配


function check(autority) {
  var current = getCurrentAutority();
  return current.some(function (item) {
    return autority.includes(item);
  });
} // 判断该用户是否已经登录


function isLogin() {
  var current = getCurrentAutority();
  return current && current[0] != 'guest';
}