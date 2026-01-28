data "aws_security_group" "default" {
  name   = "default"
  vpc_id = aws_vpc.vpc.id
}
resource "aws_security_group_rule" "allow_http_default_sg" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = data.aws_security_group.default.id
}

resource "aws_instance" "webserver" {
  ami           = var.ami_value
  instance_type = var.instance_type_value
  key_name      = var.Key_pair

  vpc_security_group_ids = [
    data.aws_security_group.default.id
  ]

  tags = {
    Name = var.server_name
  }
}