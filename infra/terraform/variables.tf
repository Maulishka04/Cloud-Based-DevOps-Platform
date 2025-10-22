variable "aws_region" {
  type = string
  default = "us-east-1"
}

variable "frontend_bucket" {
  type = string
}

variable "db_username" {
  type = string
  default = "admin"
}

variable "db_password" {
  type = string
  description = "RDS password - set via TF_VAR_db_password or .tfvars"
}

variable "vpc_cidr" {
  type = string
  default = "10.0.0.0/16"
}

variable "public_subnets" {
  type = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnets" {
  type = list(string)
  default = ["10.0.101.0/24", "10.0.102.0/24"]
}
