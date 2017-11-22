export class Order {
  linkPhone?= ''; // 联系电话
  linkMan?= ''; // 联系人
  userIdentityCardNumber?= ''; // 用户卡编号
  linkAddress?= ''; // 居住地址
  orderContent?: {
    specificationId?: string, // 类型id
    num?: number // 气瓶数量
  }[] = []; // 配送气瓶信息
  source?= ''; // 来源方式
  dispatcherNumber?= ''; // 配送人员id
  regionId?= ''; // 居住区域id
}
