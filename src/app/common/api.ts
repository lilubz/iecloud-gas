const release = '/wenZhouGas/';
const local = '/api/';

const URL = release;
export const API = {
  // 项目地址
  'url': URL,
  'mapServerAddress': '122.228.28.0:16080',

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
  'listCorpSupplyStationVO': URL + 'corpBusiness/applyManagement/listCorpSupplyStationVO.do', // 获取供应站列表
  'listSupplyStationUser': URL + '/basicInformation/corpSupplyStation/listSupplyStationUser.do', // 获取供应站账号列表
  'listCorpInflatableStation': URL + 'basicInformation/corpInflatableStation/listCorpInflatableStation.do', // 获取储配站列表
  'listLocationInfo': URL + 'basicInformation/corpCarInfo/listCorpLocationInfo.do', // 获取站点位置信息
  'getThePathByAccountId': URL + 'corpBusiness/dispatchOrder/getThePathByAccountId.do', // 获取送气工轨迹
  'listMobileCorpSupplyStationInfoVO': URL + 'basicInformation/corpSupplyStation/listMobileCorpSupplyStationInfoVO.do', // 获取移动或固定供应站
  'getRealTimeLocation': URL + 'corpBusiness/dispatchOrder/getRealTimeLocation.do', // 获取送气工实时位置

  // 气瓶档案
  // 'queryCylinderDetail': URL + 'basicInformation/gasCylinder/getGcInfoByCylinderCode.do',弃用
  'queryCustomerDetail': URL + 'basicInformation/gcUserInfo/getUserDetailInfo.do', // 被修改
  // 气瓶录入
  'getListManufactureOrg': URL + 'basicInformation/commonInfo/listManufactureOrg.do',
  'getListGcType': URL + 'basicInformation/commonInfo/listGcType.do',
  'getListFillingMedium': URL + 'basicInformation/commonInfo/listFillingMedium.do',
  'getListGcSpecification': URL + 'basicInformation/commonInfo/listGcSpecification.do',
  'getListInspection': URL + 'basicInformation/commonInfo/listInspection.do',
  'getGcSpecification': URL + 'basicInformation/commonInfo/getGcSpecification.do',
  'getEnterpriseCylinderCode': URL + 'basicInformation/gasCylinder/getEnterpriseCylinderCode.do',
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
  // 系统管理
  'queryLog': URL + '',
  // 通知公告
  'addAnnouncement': URL + 'announcements/add.do',
  'queryAnnouncement': URL + 'announcements/get.do',
  'deleteAnnouncement': URL + 'announcements/delete.do',
  // 企业管理
  'getlistCorpUser': URL + 'basicInformation/corpInfo/listCorpUser.do',
  'changefreeze': URL + 'sysUserPermissions/user/freeze.do',
  'resetPassword': URL + 'sysUserPermissions/user/resetPassword.do',
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
  'deleteGcUser': URL + 'basicInformation/gcUserInfo/deleteGcUser.do',
  'updateGcUser': URL + 'basicInformation/gcUserInfo/updateGcUser.do',

  // 订单评价
  'listOrderEvaluate': URL + 'order/listOrderEvaluate.do',
  'avgOrderEvaluate': URL + 'order/avgOrderEvaluate.do',


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
  'listGcSendOrReceive': URL + 'basicInformation/gasCylinder/listGcSendOrReceive.do', // 储配站、供应站、送气工，收发记录查询

  /**
   * 系统管理
   */
  'updatePassword': URL + 'sysUserPermissions/user/modificationPassword.do', // 修改密码
  // 供应站管理
  'addCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/addCorpSupplyStation.do',
  'getCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/listCorpSupplyStation.do',
  'deleteCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/deleteCorpSupplyStation.do',
  'createAccount': URL + 'basicInformation/corpSupplyStation/createAccount.do',
  'freezeAccount': URL + 'basicInformation/corpSupplyStation/freezeAccount.do',
  'updateCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/updateCorpSupplyStation.do',
  'updateTheEnterpriseOfCorpSupplyStation': URL + 'basicInformation/corpSupplyStation/updateTheEnterpriseOfCorpSupplyStation.do',
  // 储配站
  'listCorpInflatableStations': URL + 'basicInformation/corpInflatableStation/listCorpInflatableStations.do',
  'addInflatableStation': URL + 'basicInformation/corpInflatableStation/addInflatableStation.do',
  'updateCorpInflatableStation': URL + 'basicInformation/corpInflatableStation/updateCorpInflatableStation.do',
  // 气瓶标签分配
  'listTagApplication': URL + 'basicInformation/gasCylinder/listTagApplication.do',
  'getUnboundGcLabelInfo': URL + 'basicInformation/gasCylinder/listUnboundGcLabelInfo.do',
  'getUnboundCylinderInfo': URL + 'basicInformation/gasCylinder/listUnboundGcSimpleInfo.do',
  'getGcLabelInfo': URL + 'basicInformation/gasCylinder/getGcLabelInfo.do',
  'getGcBasicInfo': URL + 'basicInformation/gasCylinder/listGcBasicInfo.do',
  'sendTagBinding': URL + 'basicInformation/gasCylinder/listTagBinding.do',
  // 架构管理
  'getOrganzationTree': URL + 'sysUserPermissions/user/getOrganzationTree.do',
  'addOrganzation': URL + 'sysUserPermissions/user/addOrganzation.do',
  'updateOrganzation': URL + 'sysUserPermissions/user/updateOrganzation.do',
  'deleteOrganzation': URL + 'sysUserPermissions/user/deleteOrganzation.do',

  // 配送人员信息
  'getDispatcherInfo': URL + 'basicInformation/corpInfo/listDispatcherInfo.do',

  // 身份认证卡审核
  'getUserCertNumApply': URL + 'basicInformation/gcUserInfo/getUserCertNumApply.do',
  'getCheckApply': URL + 'basicInformation/gcUserInfo/checkUserCertCardApply.do',

  // 信息批量导入
  'importUser': URL + 'dataImport/gcUser/importGcUserCertInfo.do',
  'importGc': URL + 'dataImport/gasCylinder/importGasLableInfo.do',
  'importCard': URL + 'dataImport/gcUser/importGcUserCertInfoUnbound.do',
  'importTag': URL + 'dataImport/gasCylinder/importGasCylinderUnboundLabel.do',
  'importGcUserInfo': URL + 'dataImport/gcUser/importGcUserInfo.do',

  // 监管事务
  // 根据气瓶条码获取气瓶某段时间流转历史
  'listGasStatusChangeByTime': URL + 'basicInformation/gasCylinder/listGasStatusChangeByTime.do',
  // 获取某责任主体类型下的气瓶列表
  'listGasInfoSearchByLiabilitySubjectId': URL +
    'basicInformation/gasCylinder/listGasInfoSearchByLiabilitySubjectId.do',
  // 气瓶充装记录
  'listFillingInfo': URL + 'corpBusiness/applyManagement/listFillingInfo.do',
  'getDispatcherDistributions': URL + 'corpBusiness/applyManagement/getDispatcherDistributions.do',
  'listGasReceiveAndDispatch': URL + 'basicInformation/gasCylinder/listGasReceiveAndDispatch.do',
  // 重瓶定价
  'listGcPricingByCorp': URL + 'basicInformation/gcPricing/listGcPricingByCorp.do', // 获取企业定价列表
  'updateOrAddPricing': URL + 'basicInformation/gcPricing/updateOrAddPricing.do', // 新增/更新定价
  'deletePricing': URL + 'basicInformation/gcPricing/deletePricing.do', // 删除定价
  // 安检信息查询
  'securityCheckInquiries': URL + 'statisticalQuery/security/securityCheckInquiries.do', // 安检综合查询

  // 协同管理
  'listCorpInflatableStationInfo': URL + 'corpBusiness/collaborative/listCorpInflatableStationInfo.do', // 2.模糊搜索充装站信息
  'listCorpSupplyStation': URL + 'corpBusiness/collaborative/listCorpSupplyStation.do', // 3,模糊搜索供应站信息
  'listGcCarrier': URL + 'corpBusiness/collaborative/listGcCarrier.do', // 4.精确搜索押送工信息
  'listDispatcher': URL + 'corpBusiness/collaborative/listDispatcher.do', // 5.精确搜索送气工信息
  'insertTransactionBasic': URL + 'corpBusiness/collaborative/insertTransactionBasic.do', // 6, 执法事务录入
  'deleteTransaction': URL + 'corpBusiness/collaborative/deleteTransaction.do', // 8，撤销执法事务
  'cooperativeOperation': URL + 'corpBusiness/collaborative/cooperativeOperation.do', // 9 & 10,协同操作->【事务处理】
  'listMyTransaction': URL + 'corpBusiness/collaborative/listMyTransaction.do', // 12,查询我的事务列表。
  'listTransactionDetailInfo': URL + 'corpBusiness/collaborative/listTransactionDetailInfo.do', // 13,查询事务祥情
  'listTransactionChildren': URL + 'corpBusiness/collaborative/listTransactionChildren.do', // 14,获取某个事务下面所有节点的信息
  'listEventDetailInfo': URL + 'corpBusiness/collaborative/listEventDetailInfo.do', // 15,根据节点ID查询事务信息。
  'updateDeadlineTime': URL + 'corpBusiness/collaborative/updateDeadlineTime.do', // 【改】23、重新指定截止时间
  'listTransactionOverdueHistory': URL + 'corpBusiness/collaborative/listTransactionOverdueHistory.do', // 【查】24、事务超期历史查询
  'listCorpTransactionOverdueHistory': URL + 'corpBusiness/collaborative/listCorpTransactionOverdueHistory.do',


  // 报表管理
  'listCommitDetail': URL + 'corpBusiness/reportManagementController/listCommitDetail.do', // 历史记录
  // 企业协同
  'listCorpTransactionInfo': URL + 'corpBusiness/collaborative/listCorpTransactionInfo.do', // 21.获取与本企业有关的事务列表
  'listCorpEventInfo': URL + 'corpBusiness/collaborative/listCorpEventInfo.do', // 22.获取需处理节点的信息

  // 报表管理
  'listReportInfo': URL + 'corpBusiness/reportManagementController/listReportInfo.do', // 1,获取需提交报表列表
  'addReportInfo': URL + 'corpBusiness/reportManagementController/addReportInfo.do', // 2，新增报表
  'listReportCommitInfo': URL + 'corpBusiness/reportManagementController/listReportCommitInfo.do', // 3.获取报表提交情况列表
  'reportCommit': URL + 'corpBusiness/reportManagementController/reportCommit.do', // 4.报表提交
  'reportStatistics': URL + 'corpBusiness/reportManagementController/reportStatistics.do', // 5.获取报表统计列表
  'reportCommitDetail': URL + 'corpBusiness/reportManagementController/reportCommitDetail.do', // 6.查询某次报表提交祥情列表。
  'deleteReport': URL + 'corpBusiness/reportManagementController/deleteReport.do',
  'loadTaskList': URL + 'corpBusiness/reportManagementController/loadTaskList.do', // 温州市加快管道燃气用户发展任务清单
  'loadNewPipelineGasUsers': URL + 'corpBusiness/reportManagementController/loadNewPipelineGasUsers.do',
  'loadRegulatoryStatistics': URL + 'corpBusiness/reportManagementController/loadRegulatoryStatistics.do',
  'loadInformationSupervisionStatisticsByWeek': URL + 'corpBusiness/reportManagementController/loadInformationSupervisionStatisticsByWeek.do',

  // 气瓶存量预警
  'listGcThresholdCurrentWarning': URL + 'corpBusiness/gcStockMonitor/listGcThresholdCurrentWarning.do',
  'listGcThreshold': URL + 'corpBusiness/gcStockMonitor/listGcThreshold.do',
  'addGcThreshold': URL + 'corpBusiness/gcStockMonitor/addGcThreshold.do',
  'listGcThresholdHistoryWarning': URL + 'corpBusiness/gcStockMonitor/listGcThresholdHistoryWarning.do',
  'listGcThresholdHistoryWarningDetail': URL + 'corpBusiness/gcStockMonitor/listGcThresholdHistoryWarningDetail.do',

  // 车辆管理
  'getCarType': URL + 'basicInformation/corpCarInfo/getCarType.do', // 获取车辆类型
  'getCarNumberList': URL + 'basicInformation/corpCarInfo/getCarNumberList.do', // 获取登陆用户能够查看的车牌列表，模糊查询车牌号
  'getCarList': URL + 'basicInformation/corpCarInfo/getCarList.do', // 根据条件查询车辆信息
  'listCorpInfoInRegion': URL + 'basicInformation/corpInfo/listCorpInfoInRegion.do',


  // 统计查询
  // 获取某区域下属于【储配站】的气瓶的统计信息
  'getGcCountFillingStationInfoByRegion': URL + 'statisticalQuery/corp/getGcCountFillingStationInfoByRegion.do',
  'inflatableStationHas': URL + 'statisticalQuery/gasCylinders/inflatableStationHas.do',
  'inflatableStationSendAndReceiveCount': URL + 'statisticalQuery/gasCylinders/inflatableStationSendAndReceiveCount.do',
  'supplyStationHas': URL + 'statisticalQuery/gasCylinders/supplyStationHas.do',
  'supplyStationSendAndReceiveCount':
    URL + 'statisticalQuery/gasCylinders/supplyStationSendAndReceiveCount.do',
  'dispatcherHas': URL + 'statisticalQuery/gasCylinders/dispatcherHas.do',
  'dispatcherStatistical': URL + 'statisticalQuery/gasCylinders/dispatcherStatistical.do',
  'gcUserHas': URL + 'statisticalQuery/gasCylinders/gcUserHas.do',
  'countTransaction': URL + 'corpBusiness/collaborative/countTransaction.do',
  'BusinessInformation': URL + 'statisticalQuery/corp/statistical.do',
  'corpDispatcherSendAndReceiveList': URL + 'statisticalQuery/gasCylinders/corpDispatcherSendAndReceiveList.do',
  'dispatcherSendAndReceiveCount': URL + 'statisticalQuery/gasCylinders/dispatcherSendAndReceiveCount.do',
  'getUserInfoImprecise': URL + 'basicInformation/gcUserInfo/getUserInfoImprecise.do',
  'listGasCylinderBySupplyStationNumber': URL + 'basicInformation/gasCylinder/listGasCylinderBySupplyStationNumber.do',
  'listGcNewAddCount': URL + 'statisticalQuery/gasCylinders/listGcNewAddCount.do', // 统计最近新增气瓶和新增气瓶异常数量
  'fillingFluctuations': URL + 'statisticalQuery/industry/fillingFluctuations.do', // 查询本年，本月充装量波动情况
  'checkResults': URL + 'statisticalQuery/security/checkResults.do', // 安检情况统计


  'listCollaborativeInfo': URL + 'corpBusiness/collaborative/listCollaborativeInfo.do', // 16.获取协同企业列表
  'listTransactionTypeInfo': URL + 'corpBusiness/collaborative/listTransactionTypeInfo.do', // 17.获取事务类别树。
  'listTransactionSourceInfo': URL + 'corpBusiness/collaborative/listTransactionSourceInfo.do', // 18.获取事务来源列表。
  // 19.获取事务所在部门下拉框数据。
  'listChildUserId': URL + 'corpBusiness/collaborative/listChildUserId.do',
  'listTransactionInfo': URL + 'corpBusiness/collaborative/listTransactionInfo.do', // 20.事务一览表中的查询。

  // 登录
  'signIn': URL + 'sysUserPermissions/user/login.do',
  'signUp': URL + 'sysUserPermissions/login.do',
  'logout': URL + 'sysUserPermissions/user/logout.do',
  // 大屏展示
  'getBigScreenData': URL + 'visualization/getBigScreenData.do',

  // 公共服务
  // 安全宣传
  'listSecurityPublicityArticle': URL + 'publicService/securityPublicity/listSecurityPublicityArticle.do',
  'deleteSecurityPublicityArticle': URL + 'publicService/securityPublicity/deleteSecurityPublicityArticle.do',
  'uploadSecurityPublicityArticle': URL + 'publicService/securityPublicity/uploadSecurityPublicityArticle.do',
  // 公众服务
  // 问卷调查
  'uploadNewQuestionnaire': URL + 'publicService/questionnaire/uploadNewQuestionnaire.do', // 上传一份新的调查问卷
  'listQuestionnaire': URL + 'publicService/questionnaire/listQuestionnaire.do', // 获取所有问卷列表
  'listQuestions': URL + 'publicService/questionnaire/listQuestions.do', // 获取某个问卷中问题列表
  'listCurrentQuestions': URL + 'publicService/questionnaire/listCurrentQuestions.do', // 获取当前最新问卷调查中的所有问题
  'listQuestionnaireResult': URL + 'publicService/questionnaire/listQuestionnaireResult.do', // 获取某个问卷的调查结果
  'deleteQuestionnaire': URL + 'publicService/questionnaire/deleteQuestionnaire.do', // 删除调查问卷
  // 储气罐档案
  'listFillingGasTank': URL + 'gcFillingSupervise/listFillingGasTank.do',

  // 系统用户管理
  'addUser': URL + 'sysUserPermissions/user/addUser.do', // 新增系统用户
  'getGovSysUsers': URL + 'sysUserPermissions/user/getGovSysUsers.do', // 查询
  'getGovOrganzations': URL + 'sysUserPermissions/user/getGovOrganzations.do', // 组织ID
  'getRoles': URL + 'sysUserPermissions/user/getRoles.do', // 角色ID
  'updateUserPhone': URL + 'sysUserPermissions/user/updateUserPhone.do', // 更改手机号码
  // 充装秤
  /**
   * 监管数据统计分析
   */
  'listLicenseExpire': URL + 'corpBusiness/gcStockMonitor/listLicenseExpire.do', // 1.燃气经营许可证到期预警
  'listGasInspection': URL + 'corpBusiness/gcStockMonitor/listGasInspection.do', // 2.气瓶检验预警
  'listGasScrap': URL + 'corpBusiness/gcStockMonitor/listGasScrap.do', // 3.气瓶报废预警
  'listSecurityCheckWarning': URL + '/statisticalQuery/security/listSecurityCheckWarning.do', // 3.企业安检预警处置记录

  // 充装监管子系统
  'getBalanceStatus': URL + 'gcFillingSupervise/getBalanceStatus.do', // 查询充装秤的状态
  'listBalanceInfo': URL + 'gcFillingSupervise/listBalanceInfo.do', // 获取某个企业、充装站的所有秤信息
  'listBalanceLockRecord': URL + 'gcFillingSupervise/listBalanceLockRecord.do', // 查询锁秤记录
  'setBalanceInnerLockStatus': URL + 'gcFillingSupervise/setBalanceInnerLockStatus.do', // 设置某个秤的联锁状态
  'setBalanceLockStatus': URL + 'gcFillingSupervise/setBalanceLockStatus.do', // 设置某个秤的锁状态
  // 充装监管规则设置
  'getRuleForFillingSupervise': URL + 'gcFillingSupervise/getRuleForFillingSupervise.do', // 获取充装监管规则
  'setRuleForCheckGcValid': URL + 'gcFillingSupervise/setRuleForCheckGcValid.do', // 设置充装监管规则
  'setRuleForCheckFillingCycle': URL + 'gcFillingSupervise/setRuleForCheckFillingCycle.do', // 设置充装周期充装规则
  'setRuleForCheckFillingCountOneDay': URL + 'gcFillingSupervise/setRuleForCheckFillingCountOneDay.do', // 设置充装数量充装规则
  'setRuleForCheckGcDispatchComplete': URL + 'gcFillingSupervise/setRuleForCheckGcDispatchComplete.do', // 设置流转状态是否完整充装规则
  // 对象搜索
  'regionOverview': URL + 'statisticalQuery/regionOverview.do', // 分区概览
  'corpOverview': URL + 'statisticalQuery/corpOverview.do', // 全市概览
  'queryCylinderDetail': URL + 'basicInformation/gasCylinder/getGcLableInfoOverveiw.do', // 新启用气瓶详情

  // 对象搜索 查看责任类型的详情
  'getDispatcherDetailInfo': URL + 'basicInformation/corpInfo/getDispatcherInfo.do', // 送气工详情
  'getSupplyStationDetailInfo': URL + 'basicInformation/corpSupplyStation/getSupplyStationInfo.do', // 供应站详情
  'getInflatableStationDetailInfo': URL + 'basicInformation/corpInflatableStation/getInflatableStationInfo.do', // 储配站详情
  'getCorpDetailInfo': URL + 'basicInformation/corpInfo/getCorpInfo.do', // 企业详情

  // 地图页面中供应站或储配站的详情
  'listCorpStationDetailInfo': URL + 'basicInformation/corpCarInfo/listCorpStationDetailInfo.do', // 获取储配站/供应站的站点统计信息
};
