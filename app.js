//app.js
const Promise = require('utils/promise.js');
App({
    onLaunch: function() {
      var app=this
        wx.login({
            success: function(res) {
                if (res.code) {
                    //发起网络请求
                    wx.request({
                      url: 'https://yimuke.cn:8080/minus_stars/login/', //获取用户基本信息api
                        data: {
                            code: res.code
                        },
                        success: function(res) {
                            //服务器解密后，客户端收到基本信息
                            console.log(res)
                            app.globalData.rewardNum = res.data
                            app.globalData.chance = res.data
                            app.globalData.score = res.data
                            app.globalData.userID = res.data
                        },
                        fail: function() {}
                    })
                } else {
                    reject('error');
                    console.log('登录失败！' + res.errMsg)
                } //服务器将存储用户code
            }
        })
    },
    //获取基本信息方法

    globalData: {
        rewardNum: 0, //获得奖励个数
        chance: 0, //剩余机会
        score: 0, //最高分
        userID: '',
        hasShowRule: true
    }
})