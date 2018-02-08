## 温州市瓶装燃气信息化监管平台web开发说明书

### 消息提示
项目中消息提示使用primeng组件库中的p-growl组件开发。对消息提示框的颜色做以下规范：
  - success -- 执行成功时展示
  - warn -- 执行成功，但不符合正常状态时展示
  - error -- 执行异常时展示
其它颜色可以根据具体场景使用。

### 分页大小
使用分页组件时的分页大小选项统一设置为：5，10，20，40

### 前后端状态统一
未获取到数据时返回状态码应该是0还是1？

### 前后端数据验证
前端应根据接口文档中定义的字段类型在前端做数据校验，对于不符合规则的输入应无法输入或禁止提交。

### arcgis配置说明
1. 到官网下载 `arcgis_js_api` ,下载时需要登录。
2. 按照官网说明将解压后文件夹放到服务器根目录，我放到了tomcat服务器的webapps文件夹下面。
3. 将 `arcgis_js_api/library/4.5/dojo/dojo.js` 和 `arcgis_js_api/library/4.5/init.js` 文件中的 `[HOSTNAME_AND_PATH_TO_JSAPI]` 替换为实际访问的路径地址。我设置的是 `http://localhost:8080/arcgis_js_api/library/4.5/` .

    ***注意**：这时候的完整路径为 `http://localhost:8080/arcgis_js_api/library/4.5/dojo`*
4. 在前端代码中引用文件，如：
  ```ts
    this.esriLoader.load({
      // the specific version of the API that is to be used
      url: 'http://localhost:8080/arcgis_js_api/library/4.5/init.js'
    })
  ```
