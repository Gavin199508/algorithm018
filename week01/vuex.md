### Vuex实现原理
##### Vuex是状态管理工具，统一数据操作的生态系统。它集中于MVC模式中的Model层。通过action（commit）->mutation(mutate)->state change的流程，并配合Vue的数据视图双向绑定特性来实现页面的展示更新。
![节点](https://awps-assets.meituan.net/mit-x/blog-images-bundle-2017/52630863.png)

- Vue Components：Vue组件。HTML页面上，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。
- dispatch：操作行为触发方法，是唯一能执行action的方法。
- actions：操作行为处理模块。负责处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。
- commit：状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。
- mutations：状态改变操作方法。是Vuex修改state的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。
- state：页面状态管理容器对象。集中存储Vue components中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。
- getters：state对象读取方法。图中没有单独列出该模块，应该被包含在了render中，Vue Components通过该方法读取全局state对象。

##### state实例化的过程
##### $option: 用于当前 Vue 实例的初始化选项。需要在选项中包含自定义 property 时会有用处：
##### $parent：父实例

- Vue.use(vuex)->执行install方法
- 在每个组件beforeCreate的时候都通过vuexInit拿到一个store的实例
- 通过查找option上有没有store（如果是函数就执行，否则直接this.$store = options.store),否则就找parent的store。
  
### Class store 
#### 一个原生JS对象，脱离组件也是可以独立运行的
#### this.$store来操作store
- 几个断言assert
1. 必须使用use（vuex）
2. 如果浏览器不支持Promise则需要polyfill
3. Store必须是实例（new Store）
- 初始化几个空对象
1. action、mutations、
- 两个订阅者
1. _actionSubscribers
2. _subscribers

- dispatch 和 commit
1. 调用.call(store)进行当前实例的绑定
- installModule:对action和wrappedGetters等进行赋值
- resetStoreVM响应式相关

### this._modules = new ModuleCollection(options);
- modules:子仓库。里面也有state、mutations、getters等
- modules的初始化：ModuleCollection
- ModuleCollection的过程是首先调用register方法，接着判断path是否是空，是的话就让root为newModule。newModule里面包含了一个children空对象，rawModule等。如果path不为空，则先截取path（0，-1），然后对path的最后一位进行addChild操作，遍历建立父子关系
### makeLocalContext
- 对每个module的mutation做拼接，使每次的dispatch、commit、getters都是有module前缀，从而确定是哪个module的操作
### local对象
- 包含对dispatch 和commit 的重新定义
 ### forEachMutation
- 拼接namespace+key
### registerAction
- action对象上有commit方法
### _wrappedGetters
- 一个函数，返回值为rowGetter：包含local.state,local.getters和store.state,state.getters
### resetStoreVM
- 定义了一个store.getters对象，至此store的getters就有了（公有接口）
1. 遍历store中的getter容器_wrappedGetters，将容器中的每一个Getters函数，通过Object.defineProperty方法，赋值到刚刚定义的store.getters对象中。在通过get函数进行拦截，返回的实际是store._vm的同名函数
2. 定义store._vm为新的Vue实例
- 并在vue实例的data中，通过$$state保存store实例本身
- 并将刚刚定义的computed传入，作为vue的computed属性。从而实现了getter函数的computed功能。getter的返回值会根据它的依赖北环存起来，且只有当它的依赖值发生了改变才会被重新计算。 


### API
- 数据获取的api
1. getters:获取state计算过后的数据
- 数据存储的api
1. commit:拿到type和payload
- 然后检测type是否正确，或者是否拼写正确
2. 在执行_withCommit时，会先确保committing为true
- 接着执行wrappedMutationHandler，然后取store为上下文，local.state、payload为参数
- action
1. action可以是异步的，在处理接口请求的时候，可以使用这个方法
- 其实最终也是commit操作。
#### registerAction
- 判断结果是否是promise，不是的话需要promise化（因为dispatch使用了Promise.all）

#### mapState 和 mapGetters
- 可以通过这两个方法，磨平this.$state来拿到state里的数据
  #### mapMutations 和 mapActions
- 分发任务 修改store.state的值

