var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.5323625220506791,
        "pitch": 0.10431633284546216,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.4362321802428166,
          "pitch": 0.2747295691675795,
          "rotation": 4.71238898038469,
          "target": "8-dining-area"
        },
        {
          "yaw": -0.0817942394133766,
          "pitch": 0.6389040436881572,
          "rotation": 4.71238898038469,
          "target": "2-dry-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.110991843299857,
          "pitch": 0.5212756355434465,
          "rotation": 0,
          "target": "2-dry-kitchen"
        },
        {
          "yaw": -2.7016487612226445,
          "pitch": 0.4186684666806748,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.5527238519306366,
          "pitch": 0.40836649804433023,
          "rotation": 4.71238898038469,
          "target": "8-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dry-kitchen",
      "name": "Dry kitchen",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.7073276522551906,
        "pitch": 0.21967591252688123,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.3871144869854284,
          "pitch": 0.490608183381795,
          "rotation": 0,
          "target": "5-yard--ac-ledge"
        },
        {
          "yaw": -2.7972406339432823,
          "pitch": 0.4432763592382525,
          "rotation": 4.71238898038469,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway",
      "name": "Hallway",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6863283354930694,
          "pitch": 0.3040117873064041,
          "rotation": 7.853981633974483,
          "target": "7-master-bedroom"
        },
        {
          "yaw": -0.20293885167034098,
          "pitch": 0.30170944592695825,
          "rotation": 23.561944901923464,
          "target": "4-bedroom-1"
        },
        {
          "yaw": -1.2117829085290648,
          "pitch": 0.5121871505378621,
          "rotation": 0,
          "target": "9-common-bathroom"
        },
        {
          "yaw": -2.684024071963126,
          "pitch": 0.2940633597586917,
          "rotation": 1.5707963267948966,
          "target": "8-dining-area"
        },
        {
          "yaw": -3.0829082620025066,
          "pitch": 0.28292095107785364,
          "rotation": 4.71238898038469,
          "target": "6-living-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-1",
      "name": "Bedroom 1",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.365414013711936,
          "pitch": 0.5374264437174396,
          "rotation": 5.497787143782138,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-yard--ac-ledge",
      "name": "Yard & AC Ledge",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.9500824612323342,
        "pitch": 0.025742665617251248,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -2.41342018393658,
          "pitch": 0.3163488231991387,
          "rotation": 0,
          "target": "2-dry-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living-hall",
      "name": "Living Hall",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8960634442759972,
          "pitch": 0.33896444097664435,
          "rotation": 0,
          "target": "8-dining-area"
        },
        {
          "yaw": 1.2839845031014718,
          "pitch": 0.3681385454585069,
          "rotation": 13.351768777756625,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bedroom",
      "name": "Master bedroom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33846935242102383,
          "pitch": 0.49399457860071294,
          "rotation": 25.132741228718363,
          "target": "3-hallway"
        },
        {
          "yaw": -0.2898349517384595,
          "pitch": 0.34294415989916516,
          "rotation": 4.71238898038469,
          "target": "10-master-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining-area",
      "name": "Dining Area",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10055527036549528,
          "pitch": 0.3760937040433774,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": 1.712409100758988,
          "pitch": 0.4328982482639212,
          "rotation": 0,
          "target": "6-living-hall"
        },
        {
          "yaw": -1.2399383607208208,
          "pitch": -0.00409302330205108,
          "rotation": 7.853981633974483,
          "target": "2-dry-kitchen"
        },
        {
          "yaw": -1.531838427239176,
          "pitch": 0.3792945434289763,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-common-bathroom",
      "name": "Common Bathroom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9416159867645995,
          "pitch": 0.43766302003169955,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master-bath",
      "name": "Master Bath",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2835520634565345,
          "pitch": 0.502612128528753,
          "rotation": 1.5707963267948966,
          "target": "7-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ADISON TYPE C - 791 sqft (2 Bed 2 Bath)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
