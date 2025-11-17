## API Inreface

For static image resources, we will use service workers in the future to replace failed network communications with our default images.

And for other data exchanges, directly access the getData function in any component or script. It is important to note that the return value of the function is not the original data from the API, but rather data that has been processed by our project's own middleware layer to match the format of the API interface, which is intended to be rendered on the page.

For example: In the front end, we have implemented a speech verification. We use beforeRequest to directly return {Status:403,Data:bull,message:Too many request} for high-frequency getData calls.

For example: (hypothetically) we can customize the homepage data. We have agreed on a path: content/getExps. When calling this path, we actually execute multiple concurrent getLibrary requests and finally combine these requests into a format that matches the authcate interface return value. In Home.vue, there is no need to consider too much; just directly use loadPageData regardless of what the return value is.

It is worth mentioning that it can also be used for caching.

对于静态图片资源，我们日后会使用service worker将失败的网络通讯替换为我们的默认图片。

而对于其他数据交流，在任何组件或脚本中都直接访问getData函数。需要注意的是，函数返回值不是API的源数据，而是经过我们项目，自己的中间层处理之后，与API接口格式一模一样的，希望被渲染到页面上的数据。

例如：在前端做了一个发言校验，我们使用beforeRequest对过高频率的getData调用直接返回{Status:403,Data:bull,message:Too many request}。

例如：（假设）我们可以自定义首页数据，我们约定一个路劲：content/getExps，调用这个路径的时候，我们实际上执行的是并发多个getLibrary请求，最后把这些请求合并成符合authcate接口返回值的格式。在Home.vue不用考虑太多，不管返回值是什么，都直接loadPageData就行。

值得一提的是，他也可以用于做缓存。