export class Customer {
  id?= '';// 客户编码；客户唯一id
  userName?= ''; // 客户名称
  customerType?= ''; // 客户性质
  subCustomerType?= ''; // 客户类型子类型
  businessLicense?= ''; // 营业执照
  registeredAddress?= ''; // 营业执照注册地址
  legalPerson?= ''; // 营业执照法定代表人
  IDType?= ''; // 证件类型名称
  IDName?= ''; // 证件姓名
  IDNumber?= ''; // 证件号码
  IDAddress?= ''; // 证件地址
  residentialAddress?= ''; // 居住地址
  contactPerson?= ''; // 联系人
  contactPhone?= ''; // 联系电话
  contractNo?= ''; // 合同编号
  contractBeginDate?= ''; // 合同开始日期
  contractEndDate?= ''; // 合同结束日期
  IDImage?: File[] = []; // 证件信息图片
  otherImage?: File[] = []; // 其它附件图片
  cardNo?= ''; // 身份认证卡编号
  state?= ''; // 用户状态
}
