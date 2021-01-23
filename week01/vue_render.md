### Vue虚拟Dom
#### render函数
- render 在new Vue对象中，可以手写一个render函数，并植入相应的标签和文本。与{{}}的形式不同，会在mounted之前就把这个值渲染到dom里
```js
new Vue({
  el: '#app',
  // render: h => h(App),
  render(createElement) {
    return createElement('div', {
      attrs: {
        id: '#app1'
      }
    }, this.message)
  },
  data() {
    return {
      message: 'Hi' 
    }
  }
})
```

  
##### initRender
- 绑定createElement到vm实例上
##### Vue.prototype._render
- 从$option 拿到render
- Vnode 只能有一个根节点

### 浏览器对应的DOM节点树
![节点](https://cn.vuejs.org/images/dom-tree.png)
### Virtual Dom
- 因为浏览器的Dom是非常昂贵的（大量替换Dom节点会引发重绘）
- virtual dom 是用JS对象去描述一个Dom节点
- VNode是一个class，里面定义了类似tag、data、children等对象
- 映射到真实的DOM实际上要经历VNode的create、diff、patch等过程
- 实现是参考了开源库：snabbdom

### createElement
- 不允许VNode的data是响应式的
- 对children做normalize
### 创建VNode
- 首先判断tag 是否是string
### Update函数
- _update是Vue实例的一个私有方法。它的调用时机有两个，一个是首次渲染的时候，另个一是数据更新的时候 
- patch：调用createPatchFunction（return patch），对各个模块的钩子函数做初始化
- vue为啥要绕这么大一圈去调用patch方法？：使用了函数科里化（在最开始传入的是nodeOps和modules，是和平台相关的）不管是在weex或者说别的平台，通过这个闭包的方式，把差异抹平。
```js
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)

```
```js
  return function patch (oldVnode, vnode, hydrating, removeOnly) {

```
- oldNode 是真实Dom
- createChildren：遍历创建createElm，对每个子节点插入（insert方法）
- insert其实就是对原生DOM的封装：insertBefore和appendChild方法

##### Vue渲染过程：
- new Vue->init->$mount->compile->render->vnode->patch->DOM