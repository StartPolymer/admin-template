#!/bin/sh

DEFAULT_ENVIRONMENT=stage
environment=$1
app_version=$(git describe --tags)

echo "App version: $app_version"

# Update config variables.
sed -i -- "s/appVersion = '(appVersion)'/appVersion = '$app_version'/g" src/config.js
sed -i -- "s/env = '$DEFAULT_ENVIRONMENT'/env = '$environment'/g" src/config.js

rm -rf build
polymer build

# Restore default config variables.
sed -i -- "s/appVersion = '$app_version'/appVersion = '(appVersion)'/g" src/config.js
sed -i -- "s/env = '$environment'/env = '$DEFAULT_ENVIRONMENT'/g" src/config.js

sed -i -- "s/(appVersion)/$app_version/g" build/*/app-version.json

firebase deploy -P $environment -m $app_version
