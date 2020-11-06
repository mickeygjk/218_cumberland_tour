var APP_DATA = {
  "scenes": [
    {
      "id": "0-2a_ceiling",
      "name": "2a_ceiling",
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
          "yaw": 1.68766263962162,
          "pitch": -1.137226632261747,
          "rotation": 0,
          "target": "1-3a_bathtub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-3a_bathtub",
      "name": "3a_bathtub",
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
          "yaw": -0.10936561325253358,
          "pitch": 1.4308778611471524,
          "rotation": 0,
          "target": "0-2a_ceiling"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "2a_bathroom_ceiling",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
