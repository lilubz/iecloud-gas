import { UserStateService } from './../../../core/userState.service';
import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import {
  isLoaded,
  loadModules,
  loadScript,
  utils
} from 'esri-loader';
import { Marker } from './marker';
import * as proj4x from 'proj4';
import { API } from '../../../common/api';
import { HttpService } from '../../../core/http.service';
import { RegionCenterCoordinates } from './RegionCenterCoordinates';
import * as moment from 'moment';
const proj4 = (proj4x as any).default;
// declare const proj4: any;

@Injectable()
export class MapService {
  arcgis_js_url = 'http://60.190.114.126/arcgis_js_v323_api/arcgis_js_api/library/3.23/3.23/init.js';
  // arcgis_js_url = 'http://localhost:8080/arcgis_js_api/library/4.5/init.js';
  shiliangUrl = 'http://122.228.28.0:16080/arcgis/rest/services/WZ2000/shiliang_wz2000/MapServer';
  yingxiangUrl = 'http://122.228.28.0:16080/arcgis/rest/services/WZ2000/yingxiang_wz2000/MapServer';
  // proj4坐标系转换的目的坐标系字符串
  proj4SpatialReferenceStr = `PROJCS["wenzhou2000",GEOGCS["GCS_China_Geodetic_Coordinate_System_2000",DATUM["D_China_2000",SPHEROID["CGCS2000",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",500000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",120.666666666667],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]`;
  // map坐标系
  wenzhouSpatialReferenceStr = 'PROJCS["wenzhou2000",GEOGCS["GCS_China_Geodetic_Coordinate_System_2000",DATUM["D_China_2000",SPHEROID["CGCS2000",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Gauss_Kruger"],PARAMETER["False_Easting",500000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",120.666666666667],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]';
  wenzhouSpatialReference;

  map;
  shiliangLayer; // 矢量图层
  yingxiangLayer; // 影像图层
  supplyStationLayer; // 供应站图层
  distributionStationLayer; // 储配站图层
  dispatcherPathLayer; // 送气工轨迹图层
  dispatcherPathPointLayer; // 送气工轨迹点图层
  sellingCarPathLayer; // 送气工轨迹图层
  sellingCarPathPointLayer; // 送气工轨迹点图层
  basemapGallery; // 图层切换按钮

  supplyStationSymbol; // 供应站/供应站 符号
  distributionStationSymbol; // 储配站符号
  dispatcherPathPointSymbol; // 送气工位置标记符号
  dispatcherPathSymbol;  // 送气工路径线条符号
  sellingCarPathPointSymbol; // 直销车位置标记符号
  sellingCarPathSymbol;  // 直销车路径线条符号

  stationInfoTemplate; // 站点弹窗信息模板
  dispatcherPathPointTemplate; // 送气工轨迹点弹窗信息模板
  sellingCarPathPointTemplate; // 送气工轨迹点弹窗信息模板

  // dispatcherPathPolyline; // 送气工路径坐标数据

  constructor(
    private httpService: HttpService,
    private userStateService: UserStateService
  ) { }

  /**
   * 初始化地图
   * 2018-02-06 17:17:40
   * @author hzb
   * @memberof MapService
   */
  initMap(mapEl: ElementRef) {
    return this.load({
      url: this.arcgis_js_url
    }).then((loadModules) => {
      return loadModules([
        'esri/map',
        'esri/geometry/Extent',
        'esri/geometry/Circle',
        'esri/geometry/ScreenPoint',
        'esri/symbols/SimpleFillSymbol',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/symbols/SimpleLineSymbol',
        'esri/graphic',
        'esri/geometry/Point',
        'esri/geometry/Polyline',
        'esri/layers/GraphicsLayer',
        'esri/InfoTemplate',
        'esri/Color',
        'dojo/dom',
        'esri/SpatialReference',
        'esri/layers/ArcGISTiledMapServiceLayer',
        'esri/dijit/Basemap',
        'esri/dijit/BasemapToggle',
        'esri/dijit/BasemapGallery'
      ]).then(([
        Map,
        Extent,
        Circle,
        ScreenPoint,
        SimpleFillSymbol,
        SimpleMarkerSymbol,
        SimpleLineSymbol,
        Graphic,
        Point,
        Polyline,
        GraphicsLayer,
        InfoTemplate,
        Color,
        dom,
        SpatialReference,
        ArcGISTiledMapServiceLayer,
        Basemap,
        BasemapToggle,
        BasemapGallery,
      ]) => {
        this.map = new Map(mapEl.nativeElement.id, { zoom: 3 });
        this.shiliangLayer = new ArcGISTiledMapServiceLayer(this.shiliangUrl); // 矢量图层
        this.yingxiangLayer = new ArcGISTiledMapServiceLayer(this.yingxiangUrl); // 影像图层

        // 矢量图与影像图选择按钮
        const shiliangBasemap = new Basemap({
          layers: [this.shiliangLayer],
          title: '矢量图',
          thumbnailUrl: './assets/img/shiliang-thumb.jpg'
        });
        const yingxiangBasemap = new Basemap({
          layers: [this.yingxiangLayer],
          title: '影像图',
          thumbnailUrl: './assets/img/yingxiang-thumb.jpg'
        });
        this.basemapGallery = new BasemapGallery({
          map: this.map,
          showArcGISBasemaps: false,
          basemaps: [
            shiliangBasemap,
            yingxiangBasemap
          ]
        }, 'BasemapToggle');
        this.supplyStationSymbol = new SimpleMarkerSymbol(
          SimpleMarkerSymbol.STYLE_PATH,
          22,
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([101, 122, 202, 1]), 3),
          new Color([255, 255, 255, 1])
        );
        this.supplyStationSymbol.setPath('M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z');

        this.distributionStationSymbol = new SimpleMarkerSymbol(
          SimpleMarkerSymbol.STYLE_PATH,
          22,
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([223, 115, 255, 1]), 3),
          new Color([255, 255, 255, 1])
        );
        this.distributionStationSymbol.setPath('M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z');

        this.dispatcherPathPointSymbol = new SimpleMarkerSymbol(
          SimpleMarkerSymbol.STYLE_CIRCLE,
          6,
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([15, 137, 245, 1]), 6)
        );
        this.sellingCarPathPointSymbol = this.dispatcherPathPointSymbol;

        this.dispatcherPathSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([243, 66, 52]), 2);
        this.sellingCarPathSymbol = this.dispatcherPathSymbol;

        this.stationInfoTemplate = new InfoTemplate(
          '${supplyStationName}',
          '<b>名称：</b> ${supplyStationName} <br/>' +
          '<b>负责人：</b> ${principal} <br/>' +
          '<b>地址：</b> ${supplyStationAddress} <br/>' +
          '<b>许可证：</b> ${supplyLicenseNum} <br/>' +
          '<b>类型：</b> ${type} <br/>'
        );

        this.dispatcherPathPointTemplate = new InfoTemplate(
          '${dispatcherName} -- ${time}',
          '<b>名称：</b> ${dispatcherName} <br/>' +
          '<b>工号：</b> <a href="./#/government/archive/employee/dispatcher;dispatcherNumber=${jobNumber}"> ${jobNumber}</a> <br/>' +
          '<b>归属企业：</b> ${enterpriseName} <br/>' +
          '<b>联系方式：</b> ${phone} <br/>' +
          '<b>记录时间：</b> ${time} <br/>'
        );

        this.sellingCarPathPointTemplate = new InfoTemplate(
          '${supplyStationName} -- ${time}',
          '<b>名称：</b> ${supplyStationName} <br/>' +
          '<b>许可证编号：</b> ${supplyLicenseNum} <br/>' +
          '<b>直销车初始地址：</b> ${supplyStationAddress} <br/>' +
          '<b>车牌号：</b> ${carNumber} <br/>' +
          '<b>负责人：</b> ${principal} <br/>' +
          '<b>记录时间：</b> ${time} <br/>'
        );

        this.supplyStationLayer = new GraphicsLayer({ id: 'supplyStationLayer', visible: false });
        this.distributionStationLayer = new GraphicsLayer({ id: 'distributionStationLayer', visible: false });
        this.dispatcherPathLayer = new GraphicsLayer({ id: 'dispatcherPathLayer', visible: true });
        this.dispatcherPathPointLayer = new GraphicsLayer({ id: 'dispatcherPathPointLayer', visible: true });
        this.sellingCarPathLayer = new GraphicsLayer({ id: 'sellingCarPathLayer', visible: true });
        this.sellingCarPathPointLayer = new GraphicsLayer({ id: 'sellingCarPathPointLayer', visible: true });

        this.wenzhouSpatialReference = new SpatialReference({ 'wkt': this.wenzhouSpatialReferenceStr });
        // this.map.disablePan();
        // this.map.enableMapNavigation();

        /**
         * 暂时解决在ie11下无法拖动的问题
         */
        let mapCenterBefore;
        let mapCenterAfter;
        let mousePositionBefore;
        let mousePositionAfter;
        this.map.on('mouse-drag-start', (e) => {
          mapCenterBefore = this.map.toMap(new ScreenPoint(this.map.width / 2.0, this.map.height / 2.0));
          mousePositionBefore = e.mapPoint;
        });
        this.map.on('mouse-drag', (e) => {
          mousePositionAfter = e.mapPoint;
          mapCenterAfter = new Point(
            mapCenterBefore.x - mousePositionAfter.x + mousePositionBefore.x,
            mapCenterBefore.y - mousePositionAfter.y + mousePositionBefore.y,
            this.wenzhouSpatialReference
          );
          this.map.centerAt(mapCenterAfter);
        });
        this.map.on('mouse-drag-end', (e) => {

        });
        // this.map.on('pan-start', (e) => {
        //   console.log('pan-start');
        // });
        // this.map.on('pan', (e) => {
        //   console.log('pan');
        // });
        // this.map.on('pan-end', (e) => {
        //   console.log('pan-end');
        // });
        return;
      });
    });
  }

  loadWebMap(mapEl: ElementRef) {
    this.load({
      url: this.arcgis_js_url
    }).then((loadModules) => {
      loadModules([
        'esri/geometry/Point',
      ]).then(([
        Point,
      ]) => {
        this.initMap(mapEl).then(() => {
          this.map.addLayer(this.shiliangLayer);

          // 根据当前用户设置地图中心点
          const center = this.getMapCenterByUserRegionId();
          const centerPoint = new Point(center.x, center.y, this.wenzhouSpatialReference);
          this.map.centerAndZoom(centerPoint, center.zoom);

          this.basemapGallery.startup();

          this.map.addLayer(this.supplyStationLayer);
          this.map.addLayer(this.distributionStationLayer);
          this.map.addLayer(this.dispatcherPathLayer);
          this.map.addLayer(this.dispatcherPathPointLayer);
          this.map.addLayer(this.sellingCarPathLayer);
          this.map.addLayer(this.sellingCarPathPointLayer);


          this.supplyStationLayer.setInfoTemplate(this.stationInfoTemplate);
          this.distributionStationLayer.setInfoTemplate(this.stationInfoTemplate);
          this.dispatcherPathPointLayer.setInfoTemplate(this.dispatcherPathPointTemplate);
          this.sellingCarPathPointLayer.setInfoTemplate(this.sellingCarPathPointTemplate);

          this.getStationLocation();
        });
      });
    });
  }

  /**
   * 显示送气工路径和点
   * 2018-02-06 10:17:56
   * @author hzb
   * @param {{
   *     pathId: number,
   *     accountTypeId: number,
   *     accountId: number,
   *     longitude: number,
   *     latitude: number,
   *     createTime: number,
   *     dispatcherName: string,
   *     jobNumber: string,
   *     enterpriseName: string,
   *     phone: string
   *   }[]} point
   * @memberof MapService
   */
  showDispatcherPathAndPoint(point: {
    pathId: number,
    accountTypeId: number,
    accountId: number,
    longitude: number,
    latitude: number,
    createTime: number,
    dispatcherName: string,
    jobNumber: string,
    enterpriseName: string,
    phone: string,
    time: string
  }[]) {
    this.load({
      url: this.arcgis_js_url
    }).then((loadModules) => {
      loadModules([
        'esri/geometry/Polyline',
        'esri/geometry/Point',
        'esri/graphic',
        'esri/SpatialReference',
      ]).then(([
        Polyline,
        Point,
        Graphic,
        SpatialReference
      ]) => {
        this.dispatcherPathLayer.clear();
        this.dispatcherPathPointLayer.clear();
        this.sellingCarPathLayer.clear();
        this.sellingCarPathPointLayer.clear();
        const coordinates = point.map(item => {
          return proj4(this.proj4SpatialReferenceStr, [item.longitude, item.latitude]);
        });
        console.log(point);
        const pointCount = coordinates.length;
        const interval = 5000 / pointCount;
        for (let i = 0; i < pointCount; i++) {
          const dispatcherPathPolyline = new Polyline([coordinates[i], coordinates[i + 1] || coordinates[i]]);
          const dispatcherPathGraphic = new Graphic(
            dispatcherPathPolyline,
            this.dispatcherPathSymbol
          );
          const dispatcherPathPoint = new Graphic(
            new Point(coordinates[i][0], coordinates[i][1], this.wenzhouSpatialReference),
            this.dispatcherPathPointSymbol,
            point[i]
          );
          setTimeout(() => {
            this.dispatcherPathLayer.add(dispatcherPathGraphic);
            this.dispatcherPathPointLayer.add(dispatcherPathPoint);
          }, interval * i);
        }
        const center = coordinates[0];
        const centerPoint = new Point(center[0], center[1], this.wenzhouSpatialReference);
        this.map.centerAndZoom(centerPoint, 10);

      });
    });
  }

  /**
   * 显示直销车轨迹
   * 2018-02-08 15:48:34
   * @author hzb
   * @param {{
   *     pathId: number,
   *     accountTypeId: number,
   *     accountId: number,
   *     longitude: number,
   *     latitude: number,
   *     createTime: number,
   *     supplyStationName: string,
   *     supplyStationAddress: string,
   *     supplyLicenseNum: string,
   *     principal: string,
   *     carNumber: string,
   *     time: string,
   *   }[]} point
   * @memberof MapService
   */
  showSellingCarPathAndPoint(point: {
    pathId: number,
    accountTypeId: number,
    accountId: number,
    longitude: number,
    latitude: number,
    createTime: number,
    supplyStationName: string,
    supplyStationAddress: string,
    supplyLicenseNum: string,
    principal: string,
    carNumber: string,
    time: string,
  }[]) {
    this.load({
      url: this.arcgis_js_url
    }).then((loadModules) => {
      loadModules([
        'esri/geometry/Polyline',
        'esri/geometry/Point',
        'esri/graphic',
        'esri/SpatialReference',
      ]).then(([
        Polyline,
        Point,
        Graphic,
        SpatialReference
      ]) => {
        this.dispatcherPathLayer.clear();
        this.dispatcherPathPointLayer.clear();
        this.sellingCarPathLayer.clear();
        this.sellingCarPathPointLayer.clear();
        const coordinates = point.map(item => {
          return proj4(this.proj4SpatialReferenceStr, [item.longitude, item.latitude]);
        });
        console.log(point);
        const pointCount = coordinates.length;
        const interval = 5000 / pointCount;
        for (let i = 0; i < pointCount; i++) {
          const sellingCarPathPolyline = new Polyline([coordinates[i], coordinates[i + 1] || coordinates[i]]);
          const sellingCarPathGraphic = new Graphic(
            sellingCarPathPolyline,
            this.sellingCarPathSymbol
          );
          const sellingCarPathPoint = new Graphic(
            new Point(coordinates[i][0], coordinates[i][1], this.wenzhouSpatialReference),
            this.sellingCarPathPointSymbol,
            point[i]
          );
          setTimeout(() => {
            this.sellingCarPathLayer.add(sellingCarPathGraphic);
            this.sellingCarPathPointLayer.add(sellingCarPathPoint);
          }, interval * i);
        }
        const center = coordinates[0];
        const centerPoint = new Point(center[0], center[1], this.wenzhouSpatialReference);
        this.map.centerAndZoom(centerPoint, 8);

      });
    });
  }

  /**
   * 获取站点位置信息
   * 2018-02-05 15:30:01
   * @author hzb
   * @memberof MapService
   */
  getStationLocation() {
    this.load({
      url: this.arcgis_js_url
    }).then((loadModules) => {
      loadModules([
        'esri/geometry/Point',
        'esri/graphic',
      ]).then(([
        Point,
        Graphic
      ]) => {
        this.listLocationInfo({
          searchType: ''
        }).then(data => {
          if (data.status === 0) {
            data.data.forEach(marker => {
              const coordinates = proj4(this.proj4SpatialReferenceStr, [marker.longitude, marker.latitude]);
              if (marker.type === '储配站') {
                const graphic = new Graphic(
                  new Point(coordinates[0], coordinates[1], this.wenzhouSpatialReference),
                  this.distributionStationSymbol,
                  marker,

                );
                this.distributionStationLayer.add(graphic);
              } else if (marker.type === '瓶库') {
                const graphic = new Graphic(
                  new Point(coordinates[0], coordinates[1], this.wenzhouSpatialReference),
                  this.supplyStationSymbol,
                  marker
                );
                this.supplyStationLayer.add(graphic);
              }
            });

          } else {

          }
        });
      });
    });

  }

  /**
   * 显示/隐藏 供应站（供应站）
   * 2018-02-01 10:43:06
   * @author hzb
   * @param {boolean} visible
   * @memberof MapService
   */
  toggleSupplyStation(visible: boolean) {
    this.supplyStationLayer.setVisibility(visible);
  }

  /**
   * 显示/隐藏 储配站
   * 2018-02-01 14:47:30
   * @author hzb
   * @param {boolean} visible
   * @memberof MapService
   */
  toggleDistributionStation(visible: boolean) {
    this.distributionStationLayer.setVisibility(visible);
  }

  /**
   * 销毁地图切换按钮
   * 2018-02-02 14:43:38
   * @author hzb
   * @memberof MapService
   */
  destroyBasemapGallary() {
    if (this.basemapGallery) {
      this.basemapGallery.destroy();
    }
  }

  /**
   * 根据用户regionId获取地图中心点
   * 2018-02-02 14:59:45
   * @author hzb
   * @returns {number[]}
   * @memberof MapService
   */
  getMapCenterByUserRegionId(): any {
    const user = this.userStateService.getUser();
    // 默认为温州市中心
    let x = 502790.53927620815;
    let y = 3098169.9151149886;
    let zoom = 3;
    RegionCenterCoordinates.forEach(item => {
      if (item.regionId === user.regionId.toString()) {
        x = item.x;
        y = item.y;
        zoom = 4;
        return;
      }
    });
    return {
      x,
      y,
      zoom
    };
  }

  extend(obj: any, src: any) {
    Object.keys(src).forEach(function (key) { obj[key] = src[key]; });
    return obj;
  }

  /**
   * 懒加载 ArcGIS API for JavaScript
   * 2018-02-01 14:45:53
   * @author hzb
   * @param {Object} [options]
   * @returns {Promise<Function>}
   * @memberof MapService
   */
  load(options?: Object): Promise<Function> {
    return new Promise((resolve: Function, reject: Function) => {
      // 防止重复加载
      if (isLoaded()) {
        resolve(loadModules);
      } else {
        // 加载
        loadScript(options).then((HTMLScriptElement) => {
          resolve(loadModules);
        }).catch((error) => {
          reject(error);
        });
      }
    });
  }

  /**
   * 获取储配站和供应站的坐标信息
   * 2018-02-01 20:52:02
   * @author hzb
   * @param {{ searchType: string }} params
   * @returns {Promise<any>}
   * @memberof MapService
   */
  listLocationInfo(params: { searchType: string }): Promise<any> {
    return this.httpService
      .getRequest(API.listLocationInfo, params);
  }
  /**
   * 获取送气工/直销车轨迹
   * 2018-02-06 10:06:34
   * @author hzb
   * @param {{ accountId: string, beginTime: Date, endTime: Date, accountTypeId: string }} params
   * @returns {Promise<any>}
   * @memberof MapService
   */
  getThePathByAccountId(params: { accountId: string, beginTime: Date, endTime: Date, accountTypeId: string }): Promise<any> {
    return this.httpService
      .getRequest(API.getThePathByAccountId, params);
  }
}
