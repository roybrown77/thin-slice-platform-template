provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "static_assets" {
  bucket = "thin-slice-assets-staging"
}

output "bucket_name" {
  value = aws_s3_bucket.static_assets.bucket
}