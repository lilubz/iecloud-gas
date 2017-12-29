import { InjectionToken } from '@angular/core';

const release = '/wenZhouGas/';
const local = '/api/';

const URL = release;
export const API = {
  // 项目地址
  'url': URL,

  /**
   * 公共接口
   */
  // 获取当前用户可查看的区域列表
  'getDropdownForRegionSysUser': URL + 'basicInformation/region/listRegionInfo.do',
  'getWenZhouRegionList': URL + 'basicInformation/region/listAllRegionInfo.do', // 获取温州市行政区列表
  'getCylinderTypes': URL + 'basicInformation/commonInfo/listGcType.do', // 获取所有气瓶类型
  'getCylinderSpecification': URL + 'basicInformation/commonInfo/listGcSpecification.do', // 获取所有气瓶类型
  'listLiabilitySubjectType': URL + 'basicInformation/gasCylinder/listLiabilitySubjectType.do', // 获取气瓶责任主体类型列表
  'getDispatchers': URL + '/basicInformation/corpInfo/getDispatchers.do', // 获取当前企业下的所有配送工

  // 气瓶档案
  'queryCylinderDetail': URL + 'basicInformation/gasCylinder/getGcInfoByCylinderCode.do',
  'queryCustomerDetail': URL + 'basicInformation/gcUserInfo/getUserDetailInfo.do',
  // 气瓶录入
  'getListManufactureOrg': URL + 'basicInformation/commonInfo/listManufactureOrg.do',
  'getListGcType': URL + 'basicInformation/commonInfo/listGcType.do',
  'getListFillingMedium': URL + 'basicInformation/commonInfo/listFillingMedium.do',
  'getListGcSpecification': URL + 'basicInformation/commonInfo/listGcSpecification.do',
  'getListInspection': URL + 'basicInformation/commonInfo/listInspection.do',
  'getGcSpecification': URL + 'basicInformation/commonInfo/getGcSpecification.do',
  'getSerialNumber': URL + 'basicInformation/gasCylinder/getSerialNumber.do',
  'insertGCInfoBasic': URL + 'basicInformation/gasCylinder/insertGCInfoBasic.do',

  'getEnterpriseName': URL + 'basicInformation/corpInfo/getEnterpriseName.do',
  // 导出
  'exportUserUndistributed': URL + 'dataExport/gcUser/exportUserUndistributed.do',
  'exportUserCertNumUndistributed': URL + 'dataExport/gcUser/exportUserCertNumUndistributed.do',
  'exportUnboundGcBasicInfo': URL + 'dataExport/gasCylinder/exportUnboundGcBasicInfo.do',
  'exportUnboundGcLabelInfo': URL + 'dataExport/gasCylinder/exportUnboundGcLabelInfo.do',
  'importGasCylinderInfoUnbound': URL + 'dataImport/gasCylinder/importGasCylinderInfoUnbound.do',
  // 审核
  'listRegionInfo': URL + 'basicInformation/region/listRegionInfo.do',
  'getGcCountRecentlyRegister': URL + 'basicInformation/gasCylinder/getGcCountRecentlyRegister.do',
  'listGcInfoRecentlyRegister': URL + 'basicInformation/gasCylinder/listGcInfoRecentlyRegister.do',
  // 系统管理
  'queryLog': URL + '',

  // 气瓶信息概览
  'getCylinderCountiesOverview': URL + 'basicInformation/gasCylinder/getGcCountInfoGroupByRegion.do',
  'getCylinderEnterpriseOverviewByAreaId': URL + 'basicInformation/gasCylinder/getGcCountGroupByCorp.do',
  'getCylinderEnterpriseOverviewByOrganizationId': URL + 'basicInformation/gasCylinder/getGcCountByOrganization.do',

  // 用户信息概览
  'getCustomerCountiesOverview': URL + 'basicInformation/gcUserInfo/getUserCountGroupByRegion.do',
  'getCustomerEnterpriseOverviewByAreaId': URL + 'basicInformation/gcUserInfo/getUserCountByRegionAndCorp.do',
  'getCustomerEnterpriseOverviewByOrganizationId': URL + 'basicInformation/gcUserInfo/getUserCountByOrganization.do',

  // 气瓶综合查询
  'cylinderSelectOpt': URL + 'basicInformation/gasCylinder/getDropInfo.do',
  'getCylinders': URL + 'basicInformation/gasCylinder/searchGasCylinder.do',

  // 用户综合查询
  'getCustomerList': URL + 'basicInformation/gcUserInfo/listUserInfoSelective.do',
  'getDropdownForUserNature': URL + 'basicInformation/gcUserInfo/listUserNature.do',
  'getDropdownForUserType': URL + 'basicInformation/gcUserInfo/listUserType.do',
  'getDropdownForCorpInfoInRegion': URL + 'basicInformation/corpInfo/listCorpInfoInRegion.do',

  /**
   * 信息录入
   */
  // 用户基本信息
  'addCustomer': URL + 'basicInformation/gcUserInfo/addGcUser.do', // 登记新客户
  'uploadUnbindingCustomer': URL + 'dataImport/gcUser/importGcUserInfo.do', // 上传未绑定卡的客户文件
  // 用户身份认证卡
  'applyCustomterCard': URL + 'basicInformation/gcUserInfo/applyGcUserCert.do', // 认证卡申请
  'userCardBind': URL + 'basicInformation/gcUserInfo/userCardBind.do', // 绑定用户和用户身份认证卡
  'listSupplyStation': URL + 'basicInformation/corpInfo/listSupplyStation.do', // 获取供气站点列表
  'listUserCertNumUndistributed': URL + 'basicInformation/gcUserInfo/listUserCertNumUndistributed.do', // 获取未绑定用户的身份认证卡
  'listNoBindGcUser': URL + 'basicInformation/gcUserInfo/listNoBindGcUser.do', // 获取未绑定身份认证卡的客户

  /**
   * 审核管理
   */
  // 统计某区域下所有企业最近一周新增的用户数量
  'getUserCountRecentlyRegister': URL + 'basicInformation/gcUserInfo/getUserCountRecentlyRegister.do',
  // 查询某企业最近新增的用户
  'listUserInfoRecentlyRegister': URL + 'basicInformation/gcUserInfo/listUserInfoRecentlyRegister.do',

  /**
   * 配送管理
   */
  'getDispatcher': URL + 'corpBusiness/order/listDispatcher.do', // 获取配送工
  'dispatchOrder': URL + 'corpBusiness/order/boolIsAssign.do', // 派送订单
  'getCustomerByPhone': URL + 'corpBusiness/order/listCustomer.do', // 获取客户列表
  'addOrder': URL + 'corpBusiness/order/userOrder.do', // 新增订单
  'getProcessingOrder': URL + 'corpBusiness/order/listProcessingOrder.do', // 新增订单

  /**
   * 系统管理
   */
  'updatePassword': URL + 'sysUserPermissions/user/modificationPassword.do', // 修改密码
  // 气瓶标签分配
  'listTagApplication': URL + 'basicInformation/gasCylinder/listTagApplication.do',
  'getUnboundGcLabelInfo': URL + 'basicInformation/gasCylinder/listUnboundGcLabelInfo.do',
  'getUnboundCylinderInfo': URL + 'basicInformation/gasCylinder/listUnboundGcSimpleInfo.do',
  'getGcLabelInfo': URL + 'basicInformation/gasCylinder/getGcLabelInfo.do',
  'getGcBasicInfo': URL + 'basicInformation/gasCylinder/listGcBasicInfo.do',
  'sendTagBinding': URL + 'basicInformation/gasCylinder/listTagBinding.do',

  // 配送人员信息
  'getDispatcherInfo': URL + 'basicInformation/corpInfo/listDispatcherInfo.do',

  // 身份认证卡审核
  'getUserCertNumApply': URL + 'basicInformation/gcUserInfo/getUserCertNumApply.do',
  'getCheckApply': URL + 'basicInformation/gcUserInfo/checkUserCertCardApply.do',

  // 身份认证卡审核
  'getGcLabelNumApply': URL + 'basicInformation/gasCylinder/getGcLabelNumApply.do',
  'sendGcLabelApply': URL + 'basicInformation/gasCylinder/checkGcLabelApply.do',

  // 信息批量导入
  'importUser': URL + 'dataImport/gcUser/importGcUserCertInfo.do',
  'importGc': URL + 'dataImport/gasCylinder/importGasLableInfo.do',
  'importCard': URL + 'dataImport/gcUser/importGcUserCertInfoUnbound.do',
  'importTag': URL + 'dataImport/gasCylinder/importGasCylinderUnboundLable.do',
  'importGcUserInfo': URL + 'dataImport/gcUser/importGcUserInfo.do',

  // 监管事务
  // 根据气瓶条码获取气瓶某段时间流转历史
  'listGasStatusChangeByTime': URL + '/basicInformation/gasCylinder/listGasStatusChangeByTime.do',
  // 获取某责任主体类型下的气瓶列表
  'listGasInfoSearchByLiabilitySubjectId': URL +
    'basicInformation/gasCylinder/listGasInfoSearchByLiabilitySubjectId.do',
  // 气瓶充装记录
  'listFillingInfo': URL + '/corpBusiness/applyManagement/listFillingInfo.do',


  // 登录
  'signIn': URL + 'sysUserPermissions/user/login.do',
  'signUp': URL + 'sysUserPermissions/login.do',
  'logout': URL + 'sysUserPermissions/user/logout.do',
};

export let API_TOKEN = new InjectionToken<any>('API');

export let APIProvide: any = {
  provide: API_TOKEN,
  useValue: API
};
