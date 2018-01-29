var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

function InitPlugin()
{
	pluginHtml = '';
	if (Sys.ie)
	{		
		pluginHtml = '<OBJECT id="WebOcx" name="WebOcx" classid="clsid:A3F076BD-A96C-4565-A326-0B6A2A3E8E9A" width="540" height="405"></OBJECT>';
	}
	else
	{
		pluginHtml = '<object id="WebOcx" name="WebOcx" width="540" height="405" type="application/npmegaeyes-plugin"></object>';
	}

	document.getElementById('plugin-container').innerHTML = pluginHtml;

	if (!Sys.ie)
	{
		bindPluginEvents();
	}
}

function bindPluginEvents() 
{
	var WebOcx = document.getElementById('WebOcx');
	WebOcx.AddEventListener('NotifyDeviceListMessage', handlerPluginEvents.NotifyDeviceListMessage);
	WebOcx.AddEventListener('NotifyChannelMessage', handlerPluginEvents.NotifyChannelMessage);
	WebOcx.AddEventListener('NotifyRecordMessage', handlerPluginEvents.NotifyRecordMessage);
	WebOcx.AddEventListener('NotifyGroupListMessage', handlerPluginEvents.NotifyGroupListMessage);
	WebOcx.AddEventListener('OnChangeFocus', handlerPluginEvents.OnChangeFocus);
	WebOcx.AddEventListener('OnMessage', handlerPluginEvents.OnMessage);
	WebOcx.AddEventListener('NotifyUserMPListMessage', handlerPluginEvents.NotifyUserMPListMessage);
	WebOcx.AddEventListener('ChangePlayWindowStatus', handlerPluginEvents.ChangePlayWindowStatus);
	WebOcx.AddEventListener('StopVideo', handlerPluginEvents.StopVideo);
	WebOcx.AddEventListener('StopAllMonitor', handlerPluginEvents.StopAllMonitor);
	WebOcx.AddEventListener('CaptureImage', handlerPluginEvents.CaptureImage);
	WebOcx.AddEventListener('StartLocalRecord', handlerPluginEvents.StartLocalRecord);
	WebOcx.AddEventListener('StopLocalRecord', handlerPluginEvents.StopLocalRecord);
	WebOcx.AddEventListener('SetRecordRange', handlerPluginEvents.SetRecordRange);
	WebOcx.AddEventListener('onPtzControl', handlerPluginEvents.onPtzControl);
}

var handlerPluginEvents = {
	NotifyDeviceListMessage : function(sDeviceList){
		parent.parseXml && parent.parseXml(sDeviceList);
	},
	NotifyChannelMessage : function(sChannels){
		parent.onNotifyChannelMessage && parent.onNotifyChannelMessage(sChannels);
	},
	NotifyRecordMessage : function(sCameraID, sList){
		parent.getRecordList && parent.getRecordList(sList);	//录像改在时间轴内显示
	},
	NotifyGroupListMessage : function(lType, sGroupList){
		parent.onNotifyGroupListMessage && parent.onNotifyGroupListMessage(lType, sGroupList);
	},
	OnChangeFocus : function(hWnd, sWindData){
		parent.OnChangeFocus && parent.OnChangeFocus(hWnd, sWindData);
	},
	OnMessage : function(hWnd, sCameraID, lMsgID, sMessage){
		parent.onNotifyUserMessage && parent.onNotifyUserMessage(lMsgID);
	},
	NotifyUserMPListMessage : function(sMPListInfo){
		alert(sMPListInfo);
	},
	ChangePlayWindowStatus : function(hWnd,lStatus,lType){
		parent.onChangePlayWindowStatus && parent.onChangePlayWindowStatus(hWnd,lStatus,lType);
	},
	StopVideo : function(hWnd){
		parent.onStopVideo && parent.onStopVideo(hWnd);
	},
	StopAllMonitor : function(){
		parent.onStopAllMonitor && parent.onStopAllMonitor();
	},
	CaptureImage : function(hWnd){
		parent.onCaptureImage && parent.onCaptureImage(hWnd);
	},
	StartLocalRecord : function(hWnd){
		parent.onStartLocalRecord && parent.onStartLocalRecord(hWnd);
	},
	StopLocalRecord : function(hWnd){
		parent.onStopLocalRecord && parent.onStopLocalRecord(hWnd);
	},
	SetRecordRange : function(hWnd, lRange){		
	},
	onPtzControl : function(hWnd, lPTZCommand, sPuID, sChannelID){
		parent.onHandlePtzControl && parent.onHandlePtzControl(hWnd, lPTZCommand, sPuID, sChannelID);
	}
}