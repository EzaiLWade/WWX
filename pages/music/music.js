Page({
  onLoad:function(options){
      var that = this;
      wx.getSystemInfo({
        success: function(res){
          that.setData({
            scrollHeight: res.windowHeight - 75
          })
        }
      })
  },
   onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    music:{
      poster:'http://ezailwade.online/music/1.jpg',
      name: 'Jam Jam',
      author: 'IU',
      src: 'http://ezailwade.online/music/1.mp3'
    },
    
    musicList:[
      {
        id:0,
        poster:'http://ezailwade.online/music/1.jpg',
        name:'Jam Jam',
        author:'IU',
        src:'http://ezailwade.online/music/1.mp3'
      },{
        id:1,
        poster:'http://ezailwade.online/music/2.jpg',
        name:'絶 絶',
        author:'Swimy',
        src:'http://ezailwade.online/music/2.mp3'
      },{
        id:2,
        poster:'http://ezailwade.online/music/3.jpg',
        name:'直到世界尽头',
        author:'上杉升',
        src:'http://ezailwade.online/music/3.mp3'
      },{
        id:3,
        poster:'http://ezailwade.online/music/4.jpg',
        name:'La La Land',
        author:'Jax',
        src:'http://ezailwade.online/music/4.mp3'
      },{
        id:4,
        poster:'http://ezailwade.online/music/5.jpg',
        name:'Humble',
        author:'Kendrick Lamar',
        src:'http://ezailwade.online/music/5.mp3'
      },{
        id:5,
        poster:'http://ezailwade.online/music/6.jpg',
        name:'百鬼夜行',
        author:'米津玄师',
        src:'http://ezailwade.online/music/6.mp3'
      }
    ]
  },
  playMusic: function(event){
    
    var idx = event.target.dataset.idx;
    var that = this;
    console.log(this.data.musicList[idx])
    that.setData({
      music :this.data.musicList[idx]
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})