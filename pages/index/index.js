//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        totalPlay: 15621567,

        people: [{
                range: 1,
                portrait: '../../images/po.png',
                name: '开心就好',
                reward: 5
            },
            {
                range: 2,
                portrait: '../../images/po.png',
                name: '开心就好',
                reward: 5
            },
            {
                range: 3,
                portrait: '../../images/po.png',
                name: '开心就好',
                reward: 5
            },
            {
                range: 4,
                portrait: '../../images/po.png',
                name: '开心就好',
                reward: 5
            },
            {
                range: 5,
                portrait: '../../images/po.png',
                name: '开心就好',
                reward: 5
            },
            {
                range: 6,
                portrait: '../../images/po.png',
                name: '开心就好',
                reward: 5
            }
        ]
    },
    //事件处理函数,获取用户基本信息
    onLoad: function() {},
    onShow: function() {},
    onGotUserInfo: function(e) {

    },
    startTap: function() {
        wx.navigateTo({
            url: '../challenge/challenge',
        })
    },
    shareGame: function() {
        this.setData({

        })
    }
})