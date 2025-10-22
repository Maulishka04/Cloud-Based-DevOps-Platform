resource "aws_vpc" "this" {
  cidr_block = var.vpc_cidr
  enable_dns_support = true
  enable_dns_hostnames = true
  tags = { Name = "clouddevopshub-vpc" }
}

resource "aws_subnet" "public" {
  for_each = toset(var.public_subnets)
  vpc_id = aws_vpc.this.id
  cidr_block = each.value
  map_public_ip_on_launch = true
  tags = { Name = "public-${each.key}" }
}

resource "aws_subnet" "private" {
  for_each = toset(var.private_subnets)
  vpc_id = aws_vpc.this.id
  cidr_block = each.value
  tags = { Name = "private-${each.key}" }
}

output "vpc_id" { value = aws_vpc.this.id }
output "public_subnet_ids" { value = [for s in aws_subnet.public: s.id] }
output "private_subnet_ids" { value = [for s in aws_subnet.private: s.id] }
