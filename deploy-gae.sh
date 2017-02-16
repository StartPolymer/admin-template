#!/bin/sh

BUILD_VERSION=unbundled
DEFAULT_ENVIRONMENT=stage
environment=$1
app_version=$(git describe --tags)

echo "App version: $app_version"

case $environment in
  dev) project_id=startpolymer-admin-template ;;
  stage) project_id=startpolymer-admin-template ;;
  prod) project_id=startpolymer-admin-template ;;
  *) project_id=startpolymer-admin-template ;;
esac

# Update config variables.
sed -i -- "s/appVersion = '(appVersion)'/appVersion = '$app_version'/g" src/config.js
sed -i -- "s/env = '$DEFAULT_ENVIRONMENT'/env = '$environment'/g" src/config.js

rm -rf build
polymer build

# Restore default config variables.
sed -i -- "s/appVersion = '$app_version'/appVersion = '(appVersion)'/g" src/config.js
sed -i -- "s/env = '$environment'/env = '$DEFAULT_ENVIRONMENT'/g" src/config.js

sed -i -- "s/(appVersion)/$app_version/g" build/*/app-version.json

cp app.yaml build/$BUILD_VERSION

gcloud app deploy build/$BUILD_VERSION/app.yaml -q --project $project_id

rm build/$BUILD_VERSION/app.yaml
