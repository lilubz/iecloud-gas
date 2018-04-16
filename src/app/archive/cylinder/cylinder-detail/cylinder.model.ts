export class CylinderList {
  regionName: string = '';
  manufactureName: string = '';
  enterpriseName: string = '';
  scrapDate: number = 0;
  scrapDisposalSituation: string = '';
  scrapDisposalDate: number = 0;
  liabilityName: string = '';
  fillingState: number = 0;
  gcLabelInfo: gcLabelInfoVO = new gcLabelInfoVO();
  gcCurrentStatus: gcCurrentStatusVO = new gcCurrentStatusVO();
  gcStatusChange: string = '';
  gcStatusType: string = '';
  gcSpecification: gcSpecificationVO = new gcSpecificationVO();
  liabilityAddress: string = '';
  createTime: number = 0;
  gasLabelNumber: string = '';
}
//	气瓶标签信息对象
export class gcLabelInfoVO {
  gasLabelNumber: number = 0;
  enterpriseNumber: number = 0;
  currentStatusId: number = 0;
  regionId: number = 0;
  manufactureOrg: number = 0;
  inspectorId: number = 0;
  specificationId: number = 0;
  typeId: number = 0;
  enterpriseCylinderCode: string = '';
  tagAllocationTime: number = 0;
  registrationDate: number = 0;
  registrationPerson: string = ''; 
  registrationCode: string = ''; 
  intoStationDate: number = 0; 
  productNature: string = ''; 
  timeManufacture: number = 0;  
  serialNumber: string = ''; 
  lastInspectionTime: number = 0; 
  nextInspectionTime: number = 0; 
  inspectionResult: string = ''; 

}
//	当前状态对象
export class gcCurrentStatusVO {
  currentStatusId:string='';
  liabilityTypeId:string='';
  liabilityId:string='';
  status:string='';
  longitude:string='';
  latitude:string='';
}
// 气瓶规格表	
export class gcSpecificationVO {
  specificationId:string='';
  volume:string='';
  weight:string='';
  fillingMedia:string='';
  equipmentVarieties:string='';
  designWallThickness:string='';
  waterPressureTest:string='';
  nominalWorkingPressure:string='';
  innerDiameter:string='';
  nominalWallThickness:string='';
  maximumCharge:string='';
  height:string='';
}
