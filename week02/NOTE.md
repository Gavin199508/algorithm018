# 学习笔记
## HashMap分析 `jdk1.8`
### 一：putVal
```java
public V put(K key, V value) {
        return putVal(hash(key), key, value, false, true);
    }
```
### 二：get
