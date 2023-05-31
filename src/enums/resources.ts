export default {
  acm: 'aws_acm',
  alb: 'aws_lb',
  elb: 'aws_elb',
  vpc: 'aws_vpc',
  eip: 'aws_eip',
  nat: 'aws_nat_gateway',
  efs: 'aws_efs_file_system',
  igw: 'aws_internet_gateway',
  nacl: 'aws_network_acl',
  subnet: 'aws_subnet',
  kmsKey: 'aws_kms_key',
  region: 'aws_region', // Not a real TF resource, used to organize all regional resources
  account: 'aws_account', // Not a real TF resource, used to organize all regional resources
  mskCluster: 'aws_msk_cluster',
  iamPasswordPolicy: 'aws_iam_password_policy',
  iamSamlProvider: 'aws_iam_saml_provider',
  iamOpenIdConnectProvider: 'aws_iam_openidconnect_provider',
  iamServerCertificate: 'aws_iam_server_certificate'
}
