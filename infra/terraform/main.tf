terraform {
  required_version = ">= 1.2"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "network" {
  source = "./modules/network"
  vpc_cidr = var.vpc_cidr
  public_subnets = var.public_subnets
  private_subnets = var.private_subnets
}

module "s3_frontend" {
  source = "./modules/s3"
  bucket_name = var.frontend_bucket
}

module "rds_postgres" {
  source = "./modules/rds"
  name = "clouddevopshub-db"
  db_username = var.db_username
  db_password = var.db_password
  subnet_ids = module.network.private_subnet_ids
}

module "iam_examples" {
  source = "./modules/iam"
  role_name = "clouddevopshub-eks-role"
}

module "secrets" {
  source = "./modules/secrets"
  secret_name = "clouddevopshub/db_password"
  secret_string = var.db_password
}
