学习笔记
### 二分查找
#### 前提：
1. 目标函数单调性（单调递增或递减）：这样可以排除前半部或后半部
   无序只能遍历
2. 存在上下界（bounded）
3. 能够通过索引访问（index accessible）
   
```javascript
left=0,right =len(array)-1
while(left<= right){
  let mid =(left+right)>>1
  if(array[mid]===target){
    //find the target
    return
  }else if(array[mid]<target){
    left=mid+1
  }else{
    right =mid-1
  }
}
```