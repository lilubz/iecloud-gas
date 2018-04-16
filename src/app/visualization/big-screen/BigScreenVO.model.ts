export class BigScreenVO {
  regionId: number = null;
  regionName: string = '';
  partOfGc: BigScreenCylinderVO = new BigScreenCylinderVO();
  partOfDispatch: BigScreenDispatchVO = new BigScreenDispatchVO();
  partOfBasicInfo: BigScreenBasicInfoVO = new BigScreenBasicInfoVO();
  partOfCase: BigScreenCylinderCaseVO = new BigScreenCylinderCaseVO();
  partOfWarning: BigScreenCylinderWarningVO = new BigScreenCylinderWarningVO();
}

export class BigScreenCylinderVO {
  gcCountAddedCurrentMouth: number = 0;
  gcCountNeedInspectCurrentMonth: number = 0;
  gcCountNeedScrapCurrentMonth: number = 0;
  completionRateGcNeedInspectCurrentMonth: number = 0;
  completionRateGcNeedScrapCurrentMonth: number = 0
}

export class BigScreenDispatchVO {
  gcDispatchCountFullCurrentDay: number = 0;
  gcDispatchCountFullCurrentMonth: number = 0;
  growthGcDispatchCountYearOnYear: number = 0;
  growthGcDispatchCountMonthOnMonth: number = 0
}

export class BigScreenBasicInfoVO {
  gcCount: number = 0;
  gcCountTakeBySupplyStation: number = 0;
  gcCountNormal: number = 0;
  corpDispatcherCount: number = 0;
  carCount: number = 0;
  gcUserCount: number = 0
}

export class BigScreenCylinderCaseVO {
  rateCompletionCase: number = 0;
  rateProcessingCase: number = 0;
  rateOutOfDateCase: number = 0;
  caseCountOutOfDateList: { regionName: string, regionId: number, caseCount: number }[] = [
    { regionName: '市辖区', regionId: 330301, caseCount: 0 },
    { regionName: '洞头区', regionId: 330305, caseCount: 0 },
    { regionName: '永嘉县', regionId: 330324, caseCount: 0 },
    { regionName: '平阳县', regionId: 330326, caseCount: 0 },
    { regionName: '苍南县', regionId: 330327, caseCount: 0 },
    { regionName: '文成县', regionId: 330328, caseCount: 0 },
    { regionName: '泰顺县', regionId: 330329, caseCount: 0 },
    { regionName: '瑞安市', regionId: 330381, caseCount: 0 },
    { regionName: '乐清市', regionId: 330382, caseCount: 0 }
  ]
}

export class BigScreenCylinderWarningVO {
  titleWarning: string = '';
}
