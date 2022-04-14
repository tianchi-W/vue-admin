import Mock from "mockjs";

// 定义数据类型
let data = Mock.mock({
  status: 0,
  "result|40": [
    {
      style:
        "https://pic3.zhimg.com/80/v2-f3a2cebdedb06ab8d56eca59bc52fdd1_720w.jpg",
      goodsName: "@ctitle",
      "stydentNum|+1": 1200001,
      "label|1": [
        "待付款",
        "代发货",
        "待收款",
        "待收款",
        "退款中",
        "交易失败",
        "交易成功",
      ],
      goodsData: "@datetime()",
      "goodsSale|30-500": 30,
      "paystyle|1": ["支付宝", "微信"],
      "fen|1-5": "★",
      pingjia: "@ctitle",
      money: "@integer(100,2000)",
    },
  ],
});
class StudentsService {
  getDate() {
    return Promise.resolve({
      data,
    });
  }
  delete(id) {
    data.data = data.data.filter((item) => item.goodsId !== id);
    return Promise.resolve(true);
  }
}

const service = new StudentsService();
export default service;
