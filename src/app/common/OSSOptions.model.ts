/**
 * 创建OSS客户端的参数配置
 * 2018-03-12 20:56:09
 * @author hzb
 * @export
 * @class OSSClientOptions
 */
export class OSSClientOptions {
  accessKeyId: String; // 通过阿里云控制台创建的access key。
  accessKeySecret: String; // 通过阿里云控制台创建的access secret。
  stsToken: String; // 使用临时授权方式，传送门
  bucket: String; // 通过控制台创建的bucket, 或通过putBucket创建。
  endpoint: String; // oss 域名。
  region: String; // bucket 所在的区域, 默认 oss - cn - hangzhou。
  internal: Boolean; // 是否使用阿里云内部网访问，比如采用ecs访问oss，设置true, 采用internal的endpoint 会节约费用, 默认false。
  secure: Boolean; // (secure: true) 使用 HTTPS, (secure: false) 则使用 HTTP，具体可查看。
  timeout: String | Number; // 超时时间, 默认 60s。
}
