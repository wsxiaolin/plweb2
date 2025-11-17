### storage interfaces

Storage manager(alias: sm?) is a caching middleware layer. We use localStorage to store small data in storage, and use indexDB to cache API data. Maybe we'll use settion storage(based on user config) one day.

In the future, we hope that, for example, when a user opens their messages, they won't need to fetch data from the server every time as it does now. Instead, we can first call getData with a special flag to check if there is corresponding data in the local database and return it immediately. Meanwhile, we can initiate a second call to getData to fetch the real data from the server. Once we receive the response, we can overwrite the old result. Vue's reactivity system will automatically compare the two results and update the interface accordingly.

Offline pages may also be served through this middleware layer.


storageManager（被奇怪的缩写为sm）是一个缓存中间层，使用localStorage存储一些不大的数据，使用indexDB来做API的缓存。

未来我们希望，比如用户打开自己留言，不用像现在一样每一次请求都去获取数据，先调用一次带有特殊标记的getData，直接从本地存储的数据库里面查询是否有相应的数据先返回，同时再组建回第二次调用get data接口，去获取真实的数据，并且在得到返回值后，覆盖掉之前的旧结果。Vue 小宁是会自动比对两次，结果并在界面上做出更新。

离线页面也有望通过这个中间层返回。
