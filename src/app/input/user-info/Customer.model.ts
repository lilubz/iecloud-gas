export class Customer {
  userName?= ''; // 客户名称
  userTypeId?= ''; // 客户类型
  gcCorpUserName?= ''; // 企业用户名称
  enterpriseOrganizationCode?= ''; // 营业执照
  address?= ''; // 营业执照注册地址
  legalRepresentative?= ''; // 营业执照法定代表人
  certificateName?= ''; // 证件类型名称
  principal?= ''; // 姓名（联系人）
  certificateId?= ''; // 证件号码
  certificateAddress?= ''; // 证件地址
  deliveryRegionId?= ''; // 居住地址行政区域id
  deliveryAddress?= ''; // 居住地址（派送地址）
  phone?= ''; // 联系电话
  contractNo?= ''; // 合同编号
  contractEffectiveDate?= ''; // 合同开始日期
  contractDeadline?= ''; // 合同结束日期
  identity?: File[] = []; // 证件信息图片
  others?: File[] = []; // 其它附件图片
  dispatcherNumber?= ''; // 配送工
  userIdentityCardNumber?= ''; // 用户卡编号
  // id?= ''; // 客户编码；客户唯一id
  // cardNo?= ''; // 身份认证卡编号
  // state?= ''; // 用户状态
}
