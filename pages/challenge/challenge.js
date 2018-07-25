Page({

    /**
     * 页面的初始数据
     */
    data: {
        remainTime: 100,
        mode: 0, //'0easy 1difficult',
        countTimer: null,
        gameList: [{
            eqHead: '1+3=',
            eqAnswer: '13',
            answer: false
        }, {
            eqHead: '1+3=',
            eqAnswer: '4',
            answer: true
        }, {
            eqHead: '5+3=',
            eqAnswer: '9',
            answer: false
        }, {
            eqHead: '1+10=',
            eqAnswer: '12',
            answer: false
        }, {
            eqHead: '13+3=',
            eqAnswer: '14',
            answer: false
        }, {
            eqHead: '11+3=',
            eqAnswer: '14',
            answer: true
        }],
        loc: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    // countDown: function() {
    //     var that = this;
    //     if (this.data.mode == 0) {
    //         setInterval(function() {
    //             that.setData({
    //                 remainTime: that.data.remainTime - 1
    //             })
    //             if (that.data.remainTime == 10) {
    //                 clearInterval(this)
    //             }
    //         }, 100)
    //     } else {

    //     }
    // },
    countInterval: function() {
        // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
        var that = this
        this.countTimer = setInterval(() => {
            if (that.data.mode == 0&&this.data.remainTime>=0) {
                that.setData({
                    remainTime: that.data.remainTime - 1
                })
            } else if (that.data.mode == 1) {

            } else {
                clearInterval(this.countTimer);
            }
        }, 50)
    },
    trueBtn: function() {
        if (this.data.gameList[this.data.loc].answer === true) {
            if (this.data.loc == 40) {
              
            } else {
                this.setData({
                    loc: this.data.loc + 1,
                    remainTime: 100
                })
            }
        } else {

        }
    },
    falseBtn: function() {
        if (this.data.gameList[this.data.loc].answer === false) {
            if (this.data.loc == 40) {

            } else {
                this.setData({
                    loc: this.data.loc + 1,
                    remainTime: 100
                })
            }
        } else {

        }
    }
})