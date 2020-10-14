var APP_DATA = {
  scenes: [
    {
      id: "12--1",
      name: "客厅-1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.6111157651368515,
          pitch: 0.23697308678924145,
          rotation: 0,
          target: "13-",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "13-",
      name: "客厅走廊",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.1076743655981733,
          pitch: 0.21680833115977727,
          rotation: 0,
          target: "8-1-",
        },
        {
          yaw: 0.6266379689173256,
          pitch: 0.308172056068333,
          rotation: 0,
          target: "12--1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "0-1",
      name: "厕所1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.8351688841548537,
          pitch: 0.40827683308748064,
          rotation: 6.283185307179586,
          target: "7-",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-2",
      name: "厕所2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.7941113571874077,
          pitch: 0.5185151559477728,
          rotation: 0,
          target: "10-2-1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-1-",
      name: "卧室1 （墙拆，并入客厅）",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.3401589159965557,
          pitch: 0.3695682213020568,
          rotation: 0,
          target: "8-1-",
        },
      ],
      infoHotspots: [
        {
          yaw: -1.5619299153255035,
          pitch: -0.23210957676281296,
          title: "墙拆",
          text: "Text",
        },
      ],
    },
    {
      id: "3-2",
      name: "卧室2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.070056020519793,
          pitch: 0.46993477571987086,
          rotation: 0,
          target: "10-2-1",
        },
      ],
      infoHotspots: [
        {
          yaw: -3.0492989906968617,
          pitch: 0.021290837808855656,
          title: "Title",
          text: "Text",
        },
      ],
    },
    {
      id: "4-",
      name: "主卧",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.38857853029905876,
          pitch: 0.23825418862717385,
          rotation: 0,
          target: "9-2-2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "5-2-",
      name: "厨房2 （改成卧室）",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.5507161812684611,
          pitch: 0.2829221086138656,
          rotation: 0,
          target: "9-2-2",
        },
      ],
      infoHotspots: [
        {
          yaw: 1.654781096857577,
          pitch: 0.22340273289883683,
          title: "古董柜",
          text: "",
        },
      ],
    },
    {
      id: "6-",
      name: "餐厅（改成厨房）",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.297215775352253,
          pitch: 0.046856583273569896,
          rotation: 0,
          target: "11-",
        },
        {
          yaw: 2.8719557489744023,
          pitch: 0.26655879491137213,
          rotation: 0,
          target: "10-2-1",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.8789722594154092,
          pitch: -0.0376333302066314,
          title: "古董柜",
          text: "Text",
        },
      ],
    },
    {
      id: "7-",
      name: "玄关",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 1.4276911421394756,
        pitch: 0.06044300410373182,
        fov: 1.407788478282707,
      },
      linkHotspots: [
        {
          yaw: 0.2968445082834137,
          pitch: 0.4458447441038693,
          rotation: 6.283185307179586,
          target: "8-1-",
        },
        {
          yaw: 2.0745741000053375,
          pitch: 0.11065749323333485,
          rotation: 6.283185307179586,
          target: "11-",
        },
        {
          yaw: 1.3064367949943083,
          pitch: 0.3142934433258162,
          rotation: 0,
          target: "0-1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "8-1-",
      name: "走廊1 （墙拆，并入客厅）",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.0121167701803966,
          pitch: 0.4830928224339637,
          rotation: 0,
          target: "7-",
        },
        {
          yaw: 2.34008633247705,
          pitch: -0.09718502938031293,
          rotation: 0,
          target: "0-1",
        },
        {
          yaw: 2.796828553946167,
          pitch: -0.03737048689541744,
          rotation: 0,
          target: "11-",
        },
        {
          yaw: 0.9023798888370163,
          pitch: -0.0007588205042878826,
          rotation: 12.566370614359176,
          target: "2-1-",
        },
        {
          yaw: -0.07641781203798814,
          pitch: 0.2008679592496101,
          rotation: 0,
          target: "13-",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.14873643397736735,
          pitch: -0.0009883375431147812,
          title: "墙拆",
          text: "Text",
        },
      ],
    },
    {
      id: "9-2-2",
      name: "走廊2-2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.08127676498329706,
          pitch: 0.3050181145366935,
          rotation: 0,
          target: "10-2-1",
        },
        {
          yaw: -2.4783912980174847,
          pitch: 0.3774882495464986,
          rotation: 0,
          target: "5-2-",
        },
        {
          yaw: 2.6441440306509065,
          pitch: 0.2950838903746025,
          rotation: 0,
          target: "4-",
        },
      ],
      infoHotspots: [
        {
          yaw: -1.7596047032012017,
          pitch: 0.10299432030671163,
          title: "洗衣烘干",
          text: "Text",
        },
      ],
    },
    {
      id: "10-2-1",
      name: "走廊2-1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.24559067092390308,
          pitch: 0.2816853551583183,
          rotation: 0,
          target: "6-",
        },
        {
          yaw: 2.069883625732249,
          pitch: 0.44332941527554226,
          rotation: 0,
          target: "3-2",
        },
        {
          yaw: -2.683909907386065,
          pitch: 0.3711787078184212,
          rotation: 0,
          target: "1-2",
        },
        {
          yaw: 2.988733177720899,
          pitch: 0.2612669219761088,
          rotation: 0,
          target: "9-2-2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "11-",
      name: "厨房（改成卧室）",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.40062302697787544,
          pitch: 0.20321473940054524,
          rotation: 0,
          target: "8-1-",
        },
        {
          yaw: -1.874070682440946,
          pitch: 0.3742286286794112,
          rotation: 0,
          target: "6-",
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "218_cumberland_existing",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
