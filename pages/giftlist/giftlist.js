Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbar: [{
                index: 1,
                name: '奖品列表'
            },
            {
                index: 2,
                name: '我领到的'
            }
        ],
        currentTab: 1,
        gift: [{
                src: '../../images/po.png',
                name: '十寸小布娃娃',
                id: 1
            }, {
                src: '../../images/po.png',
                name: '十寸小布娃娃',
                id: 2
            }, {
                src: '../../images/po.png',
                name: '十寸小布娃娃',
                id: 3
            }, {
                src: '../../images/po.png',
                name: '十寸小布娃娃',
                id: 4
            },
            {
                src: '../../images/po.png',
                name: '十寸小布娃娃',
                id: 5
            }, {
                src: '../../images/po.png',
                name: '十寸小布娃娃',
                id: 6
            }
        ],
        mygift: [{
                src: '../../images/po.png',
                name: '十寸小布娃娃',
                id: 6
            },
            {
                src: '../../images/po.png',
                name: '十一寸小布娃娃',
                id: 4
            }
        ]
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
    navbarTap: function(event) {
        this.setData({
            currentTab: event.currentTarget.dataset.idx
        })
    },
    tapCard: function(event) {},
    toMyDetail: function(event) {}
})