var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1楼客厅",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9644814104196406,
          "pitch": -1.5288318758572927,
          "rotation": 0,
          "target": "1-2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-1",
      "name": "2楼客厅-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6045894015514186,
          "pitch": 1.3706285636959379,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": 2.938083557214342,
          "pitch": -1.3615141998386608,
          "rotation": 0,
          "target": "2-2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-2-2",
      "name": "2楼客厅-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9035769868376011,
          "pitch": 1.3713564397343454,
          "rotation": 0,
          "target": "1-2-1"
        },
        {
          "yaw": -2.969286738825449,
          "pitch": 0.045973209781813296,
          "rotation": 0,
          "target": "3-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2",
      "name": "2楼厕所",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07562409465590392,
          "pitch": 0.2102275115219676,
          "rotation": 0,
          "target": "2-2-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "stairs_2a_bathroom_2020-11-20",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
