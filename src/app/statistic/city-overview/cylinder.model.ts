export class CityReviewList {
  regionCount: number = 0;
  regionName: string = '';
  regionOverviewVO = new regionOverviewVO();
}
//	气瓶标签信息对象
export class regionOverviewVO {
  regionId: number = 0;
  regionName: string = '';
  corpCount: number = 0;
  supplyStationCount: number = 0;
  inflatableStationCount: number = 0;
  dispatcherCount: number = 0;
  gcUserCount: number = 0;
  alreadyCheckedUserCount: number = 0;
  noCheckedUserCount: number = 0;
  gcTotalCount: number = 0;
  gcCodeAbnormalCount: number = 0;
  gcScrapCount: number = 0;

}
