terraform {
  backend "s3" {
    bucket         = "backend-statefile-tf-github-actions-cicd"
    key            = "dev/terraform.tfstate"
    region         = "ap-south-1"
    encrypt        = true
  }
}