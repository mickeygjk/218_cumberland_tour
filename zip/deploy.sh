#!/bin/bash
set -x
set -e

if [ -z "$1" -o -z "$2" -o -z "$3"]; then
    echo "Not enough argument supplied, (location date description)"
  exit 1
fi

function cleanup {
  rm -R -f app-files
  rm -f README.txt
  rm -f LICENSE.txt
}

cleanup

location=$1
date=$2
description=$3
tour_name=$1_$2
unzip ${tour_name}.zip
sed -i -e "s/data.js\">/data_${tour_name}.js\"><\/script><script>tour_name = \"${tour_name}\";/" app-files/index.html
mv app-files/tiles ../tiles/${tour_name}
mv app-files/data.js ../data_${tour_name}.js
mv app-files/index.html ../tour_${tour_name}.html
sed -i -e "s/]; \/\/ End of the tours array;/  {date: \"${date}\", location: \"${location}\", link: \"tour_${tour_name}.html\", description: \"${description}\"},\r    ]; \/\/ End of the tours array;/" ../index.html

cleanup
