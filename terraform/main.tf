# Use default VPC
data "aws_vpc" "default" {
  default = true
}

data "aws_security_group" "default" {
  name   = "default"
  vpc_id = data.aws_vpc.default.id
}

# Allow HTTP (port 80)
resource "aws_security_group_rule" "allow_http_default_sg" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = data.aws_security_group.default.id
}

# Allow SSH (port 22)
resource "aws_security_group_rule" "allow_ssh_default_sg" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = data.aws_security_group.default.id
}

# EC2 Instance
resource "aws_instance" "webserver" {
  ami           = var.ami_value
  instance_type = var.instance_type_value
  key_name      = var.Key_pair

  # Associate default SG
  vpc_security_group_ids = [
    data.aws_security_group.default.id
  ]

  # Public IP required for SSH
  associate_public_ip_address = true

  tags = {
    Name = var.server_name
  }
}

# Terraform S3 bucket for backend
resource "aws_s3_bucket" "s3_bucket" {
  bucket = "backend-statefile-tf-github-actions-cicd"
}


