output "frontend_bucket" {
  value = module.s3_frontend.bucket_id
}

output "rds_endpoint" {
  value = module.rds_postgres.endpoint
}

output "iam_role_arn" {
  value = module.iam_examples.role_arn
}
