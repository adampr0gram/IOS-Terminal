#!/usr/bin/env bash
mkdir -p public
echo "Setting MIME type for .mobileconfig files"
echo "AddType application/x-apple-aspen-config .mobileconfig" > public/.htaccess
