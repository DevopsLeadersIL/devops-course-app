provider "kubernetes" {
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
}

provider "aws" {
  region = var.region
}

data "aws_availability_zones" "available" {}

locals {
  cluster_name = "tf-us-east-2-eks-${random_string.suffix.result}" # can be changed to specific name
}

resource "random_string" "suffix" {
  length  = 8
  special = false
}
