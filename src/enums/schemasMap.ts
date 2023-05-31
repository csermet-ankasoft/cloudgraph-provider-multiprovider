import services from './services'

/**
 * schemasMap is an object that contains schemas name by resource
 */
export default {
  account: 'awsAccount',
  [services.acm]: 'awsAcm',
  [services.alb]: 'awsAlb',
  [services.apiGatewayDomainName]: 'awsApiGatewayDomainName',
  [services.apiGatewayHttpApi]: 'awsApiGatewayHttpApi',
  [services.apiGatewayResource]: 'awsApiGatewayResource',
  [services.apiGatewayRestApi]: 'awsApiGatewayRestApi',
  [services.apiGatewayStage]: 'awsApiGatewayStage',
  [services.appSync]: 'awsAppSync',
  [services.asg]: 'awsAsg',
  [services.athenaDataCatalog]: 'awsAthenaDataCatalog'
}
