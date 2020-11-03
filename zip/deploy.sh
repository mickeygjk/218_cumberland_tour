#!/bin/bash
set -x
set -e

if [ -z "$1" ]; then
  echo "No argument supplied"
  exit 1
fi

function cleanup {
  rm -R -f app-files
  rm -f README.txt
  rm -f LICENSE.txt
}

cleanup

tour_name=$1
unzip ${tour_name}.zip
sed -i -e "s/data.js\">/data_${tour_name}.js\"><\/script><script>tour_name = \"${tour_name}\";/" app-files/index.html
mv app-files/tiles ../tiles/${tour_name}
mv app-files/data.js ../data_${tour_name}.js
mv app-files/index.html ../tour_${tour_name}.html
sed -i -e "s/<\/table>/<tr><td><a href=\"tour_${tour_name}.html\" target=\"_blank\">${tour_name}<\/a><\/td><\/tr><\/table>/" ../index.html

cleanup
