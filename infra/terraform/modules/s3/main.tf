resource "aws_s3_bucket" "frontend" {
  bucket = var.bucket_name
  acl    = "private"
  tags = {
    Name = var.bucket_name
  }
}

output "bucket_id" { value = aws_s3_bucket.frontend.id }
