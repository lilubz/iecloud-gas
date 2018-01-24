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
  'getDispatchers': URL + 'basicInformation/corpInfo/getDispatchers.do', // 获取当前企业下的所有配送工
  'listCorpSupplyStationVO': URL + 'corpBusiness/applyManagement/listCorpSupplyStationVO.do', // 获取瓶库列表
  'listCorpInflatableStation': URL + 'basicInformation/corpInflatableStation/listCorpInflatableStation.do', // 获取储配站列表

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

  // 车辆信息录入 包含配送车 和 运输车。
  // tslint:disable-next-line:max-line-length
  'listTheCorpDispatcherInfoByTheNameOfTheCorpDispatcher': URL + 'basicInformation/corpDispatcherInfo/listTheCorpDispatcherInfoByTheNameOfTheCorpDispatcher.do',
  'insertCorpCarInfoTO': URL + 'basicInformation/corpCarInfo/insertCorpCarInfoTO.do',
  'insertCorpCarInfoDistribution': URL + 'basicInformation/corpCarInfo/insertCorpCarInfoDistribution.do',


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
  // 通知公告
  'addAnnouncement': URL + 'announcements/add.do',
  'queryAnnouncement': URL + 'announcements/get.do',
  'deleteAnnouncement': URL + 'announcements/delete.do',
  // 企业管理
  'getlistCorpUser': URL + 'basicInformation/corpInfo/listCorpUser.do',
  'changefreeze': URL + 'sysUserPermissions/user/freeze.do',
  'addSystemCorpUser': URL + 'basicInformation/corpInfo/addSystemCorpUser.do',
  'addCorpInfo': URL + 'basicInformation/corpInfo/addCorpInfo.do',

  // 企业档案查询
  'listCorp': URL + 'basicInformation/corpInfo/listCorp.do',
  // 气瓶信息概览
  'getCylinderCountiesOverview': URL + 'basicInformation/gasCylinder/getGcCountInfoGroupByRegion.do',
  'getCylinderEnterpriseOverviewByAreaId': URL + 'basicInformation/gasCylinder/getGcCountGroupByCorp.do',
  'getCylinderEnterpriseOverviewByOrganizationId': URL + 'basicInformation/gasCylinder/getGcCountByOrganization.do',

  // 用户信息概览
  'getCustomerCountiesOverview': URL + 'basicInformation/gcUserInfo/getUserCountGroupByRegion.do',
  'getCustomerEnterpriseOverviewByAreaId': URL + 'basicInformation/gcUserInfo/getUserCountByRegionAndCorp.do',
  'getCustomerEnterpriseOverviewByOrganizationId': URL + 'basicInformation/gcUserInfo/getUserCountByOrganization.do',
  'listUserHasGc': URL + 'basicInformation/gasCylinder/listUserHasGc.do',

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
  'listGcSendOrReceive': URL + 'basicInformation/gasCylinder/listGcSendOrReceive.do', // 储配站、瓶库、送气工，收发记录查询

  /**
   * 系统管理
   */
  'updatePassword': URL + 'sysUserPermissions/user/modificationPassword.do', // 修改密码
  // 瓶库管理
  'addCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/addCorpSupplyStation.do',
  'getCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/listCorpSupplyStation.do',
  'deleteCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/deleteCorpSupplyStation.do',
  'createAccount': URL + 'basicInformation/corpSupplyStation/createAccount.do',
  'freezeAccount': URL + 'basicInformation/corpSupplyStation/freezeAccount.do',
  'updateCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/updateCorpSupplyStation.do',
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
  'listGasStatusChangeByTime': URL + 'basicInformation/gasCylinder/listGasStatusChangeByTime.do',
  // 获取某责任主体类型下的气瓶列表
  'listGasInfoSearchByLiabilitySubjectId': URL +
    'basicInformation/gasCylinder/listGasInfoSearchByLiabilitySubjectId.do',
  // 气瓶充装记录
  'listFillingInfo': URL + 'corpBusiness/applyManagement/listFillingInfo.do',
  'getDispachterDistributions': URL + 'corpBusiness/applyManagement/getDispachterDistributions.do',
  'listGasReceiveAndDispatch': URL + 'basicInformation/gasCylinder/listGasReceiveAndDispatch.do',

  // 协同管理
  'listCorpInflatableStationInfo': URL + 'corpBusiness/collaborative/listCorpInflatableStationInfo.do', // 2.模糊搜索充装站信息
  'listCorpSupplyStation': URL + 'corpBusiness/collaborative/listCorpSupplyStation.do', // 3,模糊搜索供应站信息
  'listGcCarrier': URL + 'corpBusiness/collaborative/listGcCarrier.do', // 4.精确搜索押送工信息
  'listDispatcher': URL + 'corpBusiness/collaborative/listDispatcher.do', // 5.精确搜索送气工信息
  'insertTransactionBasic': URL + 'corpBusiness/collaborative/insertTransactionBasic.do', // 6, 执法事务录入
  'deleteTransaction': URL + 'corpBusiness/collaborative/deleteTransaction.do', // 8，撤销执法事务
  'cooperativeOperation': URL + 'corpBusiness/collaborative/cooperativeOperation.do', // 9 & 10,协同操作->【事务处理】
  'listEventOrganizationId': URL + 'corpBusiness/collaborative/listEventOrganizationId.do', // 11，获取协同部门列表
  'listMyTransaction': URL + 'corpBusiness/collaborative/listMyTransaction.do', // 12,查询我的事务列表。
  'listTransactionDetailInfo': URL + 'corpBusiness/collaborative/listTransactionDetailInfo.do', // 13,查询事务祥情
  'listTransactionChildren': URL + 'corpBusiness/collaborative/listTransactionChildren.do', // 14,获取某个事务下面所有节点的信息
  'listEventDetailInfo': URL + 'corpBusiness/collaborative/listEventDetailInfo.do', // 15,根据节点ID查询事务信息。

  // 企业协同
  'listCorpTransactionInfo': URL + 'corpBusiness/collaborative/listCorpTransactionInfo.do', // 21.获取与本企业有关的事务列表
  'listCorpEventInfo': URL + 'corpBusiness/collaborative/listCorpEventInfo.do', // 22.获取需处理节点的信息

  // 统计查询
  // 获取某区域下属于【储配站】的气瓶的统计信息
  'getGcCountFillingStationInfoByRegion': URL + 'statisticalQuery/corp/getGcCountFillingStationInfoByRegion.do',
  'inflatableStationHas': URL + 'statisticalQuery/gasCylinders/inflatableStationHas.do',
  'inflatableStationSendAndReceiveCount': URL + 'statisticalQuery/gasCylinders/inflatableStationSendAndReceiveCount.do',
  'supplyStationHas': URL + 'statisticalQuery/gasCylinders/supplyStationHas.do',
  'supplyStationSendAndReceiveCount':
    URL + 'statisticalQuery/gasCylinders/supplyStationSendAndReceiveCount.do',
  'dispatcherHas': URL + 'statisticalQuery/gasCylinders/dispatcherHas.do',
  'dispatcherStatisyical': URL + 'statisticalQuery/gasCylinders/dispatcherStatisyical.do',
  'gcUserHas': URL + 'statisticalQuery/gasCylinders/gcUserHas.do',
  'countTransaction': URL + 'corpBusiness/collaborative/countTransaction.do',
  'BusinessInformation': URL + 'statisticalQuery/corp/statistical.do',


  'listCollaborativeInfo': URL + 'corpBusiness/collaborative/listCollaborativeInfo.do', // 16.获取协同企业列表
  'listTransactionTypeInfo': URL + 'corpBusiness/collaborative/listTransactionTypeInfo.do', // 17.获取事务类别树。
  'listTransactionSourceInfo': URL + 'corpBusiness/collaborative/listTransactionSourceInfo.do', // 18.获取事务来源列表。
    // 19.获取事务所在部门下拉框数据。
  'listTransactionDepartmentInfo': URL + 'corpBusiness/collaborative/listTransactionDepartmentInfo.do',
  'listTransactionInfo': URL + 'corpBusiness/collaborative/listTransactionInfo.do', // 20.事务一览表中的查询。

  // 登录
  'signIn': URL + 'sysUserPermissions/user/login.do',
  'signUp': URL + 'sysUserPermissions/login.do',
  'logout': URL + 'sysUserPermissions/user/logout.do',
};
