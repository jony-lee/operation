//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        hasUserInfo: false,
        totalPlay: 15621567,
        startAni: {},
        shareAni: {},

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
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onGotUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
            // console.log(e.detail.errMsg)
            // console.log(e.detail.userInfo)
            // console.log(e.detail.rawData)//将发送请求session_ID
        wx.reLaunch({
            url: '../home/home',
        })
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    startTap: function() {
        wx.navigateTo({
          url: '../challenge/challenge',
        })
    }
})