# 一款查询天气的微信小程序
![avatar](docs/images/public_1.png)
> ### 简介

* 这个查询天气的小程序是我学习小程序时的第一个实战项目，这个虽然较为简单，但是帮助我熟悉了小程序的框架。**灵感来自于**我看视频教程时发现其实还可以做更多的事，于是决定将它完善，顺便借这个机会多学点东西。我喜欢在自己的动手中解决问题 (-。-)。我解决问题的流程：``遇到问题``->``尝试自己解决``->``看文档``->``百度``->``某不存在的搜索网站``。

* 项目使用了**XX天气**的API，乞丐版也就那样，能用就行。

* **无法预览**，由于微信每个小程序对应一个AppID，我还需要做其他的练习，所以只能逮着一个使劲薅了。

> ### 学习到的内容

* 1.小程序框架的基本知识。

* 2.小程序框架中**组件**的使用、**小程序语法**、**部分API**以及小程序项目的**基本配置**。
> * **API**包括：``wx.request()``发起网络请求，``wx.showLoading()``和``wx.hideLoading()``，``wx.showToast()``等内容。
> * **基本配置**包括页面、导航栏、项目开发文件结构等的配置。

* 3.封装共用的方法并将其应用到页面中。

* 4.获取全局变量并利用它在页面跳转的时候**传值**。

```
// 页面一 page1.js
var app = getApp();

Page({
	data: {
		num: 1,
		...
	},
	change: function () {// 某绑定事件
		this.setData({num: this.data.num + 1});
		app.num = this.data.num;
	},
	onLoad: function () {
		app.num = this.data.num;
	}
 })

// 页面二 page2.js
var app = getApp();

Page({
	data: {
		xxx: xxx
		...
	},
	onShow: function () {
		console.log(app.num);// 打印保存早全局变量中的值
	}
})
```

* 5.点击时为点击的对象添加选中样式

```
// page.wxml
...
<view class="item-style {{showIndex === item ? 'active' : ''}}"
	wx:for="{{data}}"
	wx:key="index"
	data-index="{{item}}"
	bindtap="click"
>
	{{item}}
</view>

// page.js
Page({
	data: {
		data: [1, 2, 3, 4],
		showIndex: '',
		...
	},
	click: function (e) {
		this.setData({showIndex: e.currentTarget.dataset.index});
	}
})

// page.wxss
...
.item-style.active {
  background-color: #F5F5F5;
}
```

* 6.小程序**页面生命周期函数**的用法。

``onLoad()``->``onShow()``->``onReady()``->``onHide()``->``onShow()``->``onUnload()``

* 7.学无止境......