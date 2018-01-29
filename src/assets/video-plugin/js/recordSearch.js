var Array_FDID;
var lResult = 1;
var IniFDID="";
var FdVideoArray=null;
var videoArray=null;
var ds;
var fileName;
var startTime_rtn;
var endTime_rtn;
var fdId_rtn;
var grid;
var llOption;


Ext.onReady(function(){
		var tabs = new Ext.TabPanel('south_div',{
	        resizeTabs:true, // turn on tab resizing
	        minTabWidth: 15,
	        preferredTabWidth:120
	    });
        
        var videoSearchInfo = tabs.addTab('videoSearch_Div', "查询列表");
        tabs.activate('videoSearch_Div');
});

/*************************解析查询返回XML格式的录像列表**************************************/
function getRecordList(sRecords)
{
  FdVideoArray =sRecords.split("$");
  var recordListLength = FdVideoArray.length;
	GVideoArray = new IniArray(recordListLength);
	for(i = 1;i < recordListLength;i++)
	{
		videoArray=FdVideoArray[i].split("|");
		var fileName = videoArray[0];
		var size = videoArray[1];
		var startTime = videoArray[2];
		var endTime = videoArray[3];
		videoArray[4] = i;
		GVideoArray[i-1] = videoArray;
	}
	if(grid != null)
	{
		grid.destroy();
	}	
	getSearchDiv(); //加载grid
	ds.load();	
	FdVideoArray = []; //清空数组
	videoArray =[];
}
/****************************************************************************/

function getSearchDiv()
{
    ds = new Ext.data.Store({   
        proxy: new Ext.data.MemoryProxy(GVideoArray),
        reader: new Ext.data.ArrayReader({}, [
         	   
         	   {name: 'fileName'},    
	           {name: 'fileSize'},    
	           {name: 'startTime'},    
	           {name: 'endTime'}, 
	           {name: 'id'}   
	      ])    
        });    
    
    var cm  = new Ext.grid.ColumnModel
    (
      [
        {
          header: '序号',
          width: 50,
          sortable: true,
          dataIndex: 'id'
        },
        
        {
          header: '开始时间',
          width: 140,
          sortable: true,
          dataIndex: 'startTime'
        },
        {
          header: '结束时间',
          width: 140,
          sortable: true,
          dataIndex: 'endTime'
        },
        {
          header: '文件名',
          width: 300,
          sortable: true,
          dataIndex: 'fileName'
        },
        {
          header: '文件大小',
          width: 100,
          sortable: true,
          dataIndex: 'fileSize'
        }       
      ]
    );
//	cm.setHidden(5, true);
    
    grid = new Ext.grid.Grid
    (
      'searchgrid', 
      {
        ds: ds,
        cm: cm,
        selModel: new Ext.grid.RowSelectionModel({singleSelect:true}),
        enableColLock:false
      }
    );
    
    grid.addListener('rowdblclick',onRowClick); //双击事件，打开录像文件，同时选定所要下载的文件
    
	 function onRowClick(grid, rowIndex, colIndex, e){  
	  	var selectionModel = grid.getSelectionModel();
	  	var record = selectionModel.getSelected();
	  	
	  	var startTime = record.data['startTime'];
	  	var endTime = record.data['endTime'];
	  	var fileName = record.data['fileName'];
	  	WebOcx.StopVideo(hwnd);
	  	WebOcx.StopPlayRecord(hwnd);
	  	//re=WebOcx.PlayRecord(hwnd, llOption, fileName);	 	
	    setTimeout("WebOcx.PlayRecord(hwnd, llOption, fileName);",100); 	  	
	 } 		

    grid.addListener('rowclick',singleClick); //单击事件，选取所要下载的文件
	 function singleClick(grid, rowIndex, colIndex, e){  
	  	var selectionModel = grid.getSelectionModel();
	  	var record = selectionModel.getSelected();

	  	startTime_rtn = record.data['startTime'];
	  	endTime_rtn = record.data['endTime'];
	  	fileName = record.data['fileName'];
	
	 } 		
	 
    var rz = new Ext.Resizable
    (
      'searchgrid', 
      {
        //wrap:true,
        minHeight:100,
        pinned:true,
        handles: 's'
      }
    );
    rz.on('resize', grid.autoSize, grid); 
    grid.render();
//	ds.load();	
}

//回放录像
function PlayRecord()
{ 	
   WebOcx.StopVideo(hwnd);
   WebOcx.StopPlayRecord(hwnd);
   //WebOcx.PlayRecord(hwnd,llOption,fileName);
	 var lOption = Ext.get('recordType').dom.value;
	 var ret = WebOcx.PlayRecordByTime(hwnd, sPlaybackCameraID, sPlaybackChannelID, lOption - 0, 0);
	 if(ret != -1) {
		document.getElementById('curPuState').innerHTML = '回放';
	 } else {
		alert('打开回放失败!');
	 }
	 
}

//暂停播放录像
function PausePlayRecord()
{
   WebOcx.PausePlayRecord(hwnd);
}
//停止播放录像
function StopPlayRecord()
{
   WebOcx.StopPlayRecord(hwnd);
}
//开始录像
function StartRecord()
{
   WebOcx.StartRecord(sCameraID, sChannelID, sFileName);
}
//停止录像
function StopRecord()
{
   WebOcx.StopRecord(sCameraID, sChannelID);
}

//录像文件检索
function QueryRecord()
{ 
	if(document.getElementById('curPuState').innerHTML == '回放') {
		alert('请先停止当前窗口的回放！');
		return;
	}
		var sStartTime = Ext.get('BeginTime_1').dom.value;
		var sEndTime = Ext.get('BeginTime_1').dom.value;
        var lOption = Ext.get('recordType').dom.value;
        var fdname = Ext.get('fdNameSelect').dom.value;
        if(fdname == null || fdname == '')
        {
        	alert("请先从左边设备列表中选择摄像头!");
        	return;
        }
        if(sStartTime != '' && sEndTime != '')
        {
			sStartTime = sStartTime + ' 00:00:00';
			sEndTime = sEndTime + ' 23:59:59';
			//alert(sCameraID + ': ' + sChannelID + ': ' + Ext.get('fdNameSelect').dom.value + ': ' + lOption + ': ' + sStartTime + ': ' + sEndTime)
        	WebOcx.QueryRecord(sCameraID,sChannelID,Ext.get('fdNameSelect').dom.value,lOption - 0,sStartTime,sEndTime); //lOption: 0 表示前端录像， 1表示中心录像
        }
        else
        {
        	alert("请填写检索时间段!");
        	return;
        }
        llOption = parseInt(lOption);   
}

//下载录象
function DownloadRecord()
{
	lResult=WebOcx.DownloadRecord(fileName, sDstFilePath);	
}

