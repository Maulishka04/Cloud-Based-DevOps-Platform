resource "aws_db_instance" "postgres" {
  identifier = var.name
  allocated_storage = 20
  engine = "postgres"
  engine_version = "14"
  instance_class = "db.t3.micro"
  name = "clouddevopshub"
  username = var.db_username
  password = var.db_password
  skip_final_snapshot = true
}

output "endpoint" { value = aws_db_instance.postgres.address }
