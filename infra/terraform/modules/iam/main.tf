resource "aws_iam_role" "eks_role" {
  name = var.role_name
  assume_role_policy = data.aws_iam_policy_document.eks_assume.json
}

data "aws_iam_policy_document" "eks_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = ["eks.amazonaws.com", "ec2.amazonaws.com"]
    }
  }
}

output "role_arn" { value = aws_iam_role.eks_role.arn }
