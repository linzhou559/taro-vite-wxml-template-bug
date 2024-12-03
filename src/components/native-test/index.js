Component({
  properties: {
    src: {
      type: String,
      value: "",
    },
    mode: {
      type: String,
      value: "aspectFit", // 默认图片裁剪模式
    },
  },

  data: {
    loadError: false,
  },

  methods: {
    onError(e) {
      console.error("图片加载失败", e);
      this.setData({
        loadError: true,
      });
    },

    onLoad() {
      console.log("图片加载成功");
      this.setData({
        loadError: false,
      });
    },
  },
});
