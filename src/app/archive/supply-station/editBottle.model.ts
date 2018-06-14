export class EditBottle {
  supplyStationNumber?= '';
  regionName?= ''; // 区域名称
  regionId?= ''; // 	区域编号
  enterpriseName?= ''; // 站点归属企业名称
  enterpriseNumber?= ''; // 企业编号
  supplyStationName?= ''; // 站点名称
  principal?= ''; // 负责人
  contactPerson?= ''; // 联系人
  supplyStationContact?= ''; // 站点联系方式
  supplyStationAddress?= ''; // 站点地址
  supplyLicenseNum?= ''; // 	供应许可证编号
  issuingUnit?= ''; // 	核发单位
  releaseTime?= null; // 发证日期
  effectiveTimeStart?= null; // 	有效期起始时间
  effectiveTimeEnd?= null; // 有效期结束时间
  businessCategory?= ''; // 	经营类别
  businessArea?= ''; // 经营区域
  carNumber?= ''; // 车牌号，直销车必须有
  stationType?= 0; // 1=瓶库；3=直销车 瓶库类型
  remark?= ''; // 备注，补充送气工号
}
