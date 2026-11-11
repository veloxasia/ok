"use strict"
// Pre-baked empirical placement priors aggregated across all production runs.
module.exports = {
  "preferredOrientation": {
    "observer|horiz": "observer-b",
    "observer": "observer-b",
    "observer|vert": "observer-b",
    "oak_fence_gate|horiz": "gate-same",
    "oak_fence_gate": "gate-same",
    "spruce_fence_gate|horiz": "gate-same",
    "spruce_fence_gate": "gate-same",
    "crafter|horiz": "crafter-a",
    "crafter": "crafter-a",
    "chest|horiz": "chest-sneak",
    "chest": "chest-sneak",
    "piston|vert": "piston-a",
    "piston": "piston-a",
    "sticky_piston|horiz": "piston-a",
    "sticky_piston": "piston-a",
    "dropper|horiz": "piston-a",
    "dropper|vert": "piston-a",
    "dropper": "piston-a",
    "dispenser|vert": "piston-a",
    "dispenser": "piston-a",
    "barrel|vert": "piston-a",
    "barrel": "piston-a",
    "piston|horiz": "piston-a",
    "lever|ceiling": "switch-ceiling",
    "lever": "switch-ceiling"
  },
  "universalPatterns": {
    "observer:f=east|D0U0N0S0W0E1": {
      "stand": [
        -1,
        -1,
        0
      ],
      "specTag": "observer-b"
    },
    "observer:f=west|D0U1N0S0W1E1": {
      "stand": [
        3,
        0,
        -2
      ],
      "specTag": "observer-b"
    },
    "chest:f=east:t=left|D1U1N0S1W1E1": {
      "stand": [
        2,
        0,
        2
      ],
      "specTag": "chest-sneak"
    },
    "chest:f=east:t=right|D0U1N1S0W1E1": {
      "stand": [
        2,
        0,
        2
      ]
    },
    "chest:f=east:t=left|D0U1N0S1W1E1": {
      "stand": [
        -1,
        0,
        -2
      ]
    },
    "chest:f=east:t=right|D1U1N1S0W1E1": {
      "stand": [
        2,
        0,
        -2
      ],
      "specTag": "chest-sneak"
    },
    "oak_leaves|D0U0N0S0W0E0": {
      "stand": [
        2,
        -3,
        0
      ],
      "specTag": "free"
    },
    "oak_leaves|D1U1N1S1W1E1": {
      "specTag": "free"
    },
    "black_stained_glass|D1U1N0S0W0E0": {
      "specTag": "free"
    },
    "black_stained_glass|D1U1N0S0W1E0": {
      "specTag": "free"
    },
    "smooth_stone|D1U0N1S1W1E1": {
      "stand": [
        -1,
        0,
        3
      ],
      "specTag": "free"
    },
    "piston:f=down|D1U0N1S0W1E0": {
      "specTag": "piston-a"
    },
    "piston:f=down|D1U0N0S1W0E1": {
      "stand": [
        0,
        -3,
        -2
      ],
      "specTag": "piston-a"
    },
    "piston:f=down|D1U0N0S1W1E0": {
      "stand": [
        2,
        -3,
        -1
      ],
      "specTag": "piston-a"
    },
    "piston:f=down|D1U0N0S0W1E1": {
      "specTag": "piston-a"
    },
    "piston:f=down|D1U0N1S0W0E1": {
      "stand": [
        0,
        -1,
        1
      ],
      "specTag": "piston-a"
    },
    "piston:f=down|D1U0N1S1W1E0": {
      "stand": [
        2,
        -2,
        0
      ],
      "specTag": "piston-a"
    },
    "piston:f=down|D1U0N1S1W0E1": {
      "stand": [
        -1,
        -3,
        1
      ],
      "specTag": "piston-a"
    },
    "smooth_stone|D0U0N1S1W1E0": {
      "stand": [
        -2,
        0,
        -2
      ],
      "specTag": "free"
    },
    "observer:f=east|D1U0N0S0W0E1": {
      "stand": [
        -4,
        0,
        0
      ],
      "specTag": "observer-b"
    },
    "observer:f=west|D1U0N0S0W1E0": {
      "stand": [
        3,
        0,
        1
      ],
      "specTag": "observer-b"
    },
    "dropper:f=south|D0U0N0S0W0E1": {
      "stand": [
        -2,
        0,
        3
      ],
      "specTag": "piston-a"
    },
    "cobblestone|D1U1N0S0W0E1": {
      "stand": [
        -3,
        -1,
        -1
      ],
      "specTag": "free"
    },
    "powered_rail|D1U0N1S0W0E1": {
      "stand": [
        -3,
        0,
        0
      ],
      "specTag": "rail-dir"
    },
    "powered_rail|D1U0N0S0W0E0": {
      "stand": [
        -3,
        0,
        0
      ],
      "specTag": "rail-dir"
    },
    "powered_rail|D1U0N0S0W0E1": {
      "stand": [
        -4,
        0,
        0
      ],
      "specTag": "rail-dir"
    },
    "powered_rail|D1U0N1S1W0E0": {
      "stand": [
        -2,
        0,
        2
      ],
      "specTag": "rail-dir"
    },
    "powered_rail|D1U0N1S0W0E0": {
      "stand": [
        -3,
        0,
        -1
      ],
      "specTag": "rail-dir"
    },
    "powered_rail|D1U0N1S0W1E0": {
      "stand": [
        -4,
        0,
        0
      ],
      "specTag": "rail-dir"
    },
    "powered_rail|D1U0N0S1W1E0": {
      "stand": [
        -3,
        0,
        0
      ],
      "specTag": "rail-dir"
    },
    "powered_rail|D1U0N0S0W1E0": {
      "stand": [
        -2,
        0,
        0
      ],
      "specTag": "rail-dir"
    },
    "observer:f=south|D1U0N0S0W0E0": {
      "stand": [
        0,
        0,
        -2
      ],
      "specTag": "observer-b"
    },
    "observer:f=west|D1U0N0S0W0E0": {
      "stand": [
        2,
        0,
        0
      ],
      "specTag": "observer-b"
    },
    "observer:f=south|D1U0N1S0W0E0": {
      "stand": [
        -2,
        0,
        -2
      ],
      "specTag": "observer-b"
    },
    "observer:f=east|D1U0N0S0W0E0": {
      "stand": [
        -2,
        0,
        0
      ],
      "specTag": "observer-b"
    },
    "sticky_piston:f=east|D0U0N0S1W0E1": {
      "stand": [
        2,
        0,
        -1
      ],
      "specTag": "piston-a"
    },
    "observer:f=south|D0U0N1S0W1E1": {
      "stand": [
        1,
        0,
        -4
      ],
      "specTag": "observer-b"
    },
    "observer:f=west|D0U0N0S0W0E0": {
      "stand": [
        2,
        0,
        -2
      ],
      "specTag": "observer-b"
    },
    "observer:f=east|D0U0N0S0W0E0": {
      "stand": [
        -2,
        0,
        -2
      ],
      "specTag": "observer-b"
    },
    "observer:f=south|D0U0N1S0W0E0": {
      "stand": [
        -2,
        -1,
        -3
      ],
      "specTag": "observer-b"
    },
    "sticky_piston:f=west|D0U0N0S1W1E0": {
      "stand": [
        -2,
        0,
        -1
      ],
      "specTag": "piston-a"
    },
    "note_block|D1U0N0S0W1E0": {
      "stand": [
        2,
        0,
        3
      ],
      "specTag": "free"
    },
    "observer:f=west|D0U0N0S0W1E0": {
      "stand": [
        0,
        -1,
        1
      ],
      "specTag": "observer-b"
    },
    "cobblestone|D1U1N0S0W1E0": {
      "stand": [
        -1,
        0,
        3
      ],
      "specTag": "free"
    },
    "observer:f=west|D0U1N0S0W1E0": {
      "stand": [
        2,
        0,
        0
      ],
      "specTag": "observer-b"
    },
    "observer:f=down|D1U1N1S0W1E0": {
      "stand": [
        1,
        -1,
        0
      ],
      "specTag": "observer-b"
    },
    "observer:f=down|D1U1N1S0W1E1": {
      "stand": [
        1,
        -1,
        1
      ],
      "specTag": "observer-b"
    },
    "observer:f=down|D1U1N1S0W0E1": {
      "stand": [
        0,
        -1,
        1
      ],
      "specTag": "observer-b"
    },
    "observer:f=down|D1U1N0S1W0E1": {
      "stand": [
        0,
        -1,
        -1
      ],
      "specTag": "observer-b"
    },
    "obsidian|D1U0N1S0W1E1": {
      "stand": [
        1,
        0,
        0
      ],
      "specTag": "free"
    },
    "black_concrete|D1U1N1S0W0E0": {
      "stand": [
        1,
        -1,
        0
      ],
      "specTag": "free"
    },
    "chest:f=east:t=right|D0U1N1S1W0E1": {
      "stand": [
        1,
        0,
        2
      ]
    },
    "polished_blackstone|D1U1N1S0W1E1": {
      "stand": [
        1,
        0,
        -1
      ],
      "specTag": "free"
    },
    "obsidian|D0U0N0S0W1E1": {
      "specTag": "free"
    },
    "cobblestone|D1U1N1S0W0E0": {
      "stand": [
        3,
        0,
        -1
      ],
      "specTag": "free"
    },
    "cobblestone|D1U1N0S1W0E0": {
      "stand": [
        -1,
        0,
        -1
      ],
      "specTag": "free"
    },
    "piston:f=up|D1U0N1S1W1E1": {
      "stand": [
        -1,
        0,
        0
      ],
      "specTag": "piston-a"
    },
    "observer:f=up|D0U0N0S1W1E0": {
      "stand": [
        1,
        -2,
        -1
      ],
      "specTag": "observer-b"
    },
    "observer:f=up|D0U0N0S1W0E1": {
      "stand": [
        0,
        -2,
        0
      ],
      "specTag": "observer-b"
    },
    "deepslate_tiles|D0U1N0S0W0E1": {
      "stand": [
        1,
        -2,
        -1
      ],
      "specTag": "free"
    },
    "observer:f=up|D0U0N1S0W1E1": {
      "stand": [
        0,
        -2,
        1
      ],
      "specTag": "observer-b"
    },
    "observer:f=up|D0U0N1S0W0E1": {
      "stand": [
        -1,
        -2,
        0
      ],
      "specTag": "observer-b"
    },
    "observer:f=west|D0U1N0S0W0E1": {
      "stand": [
        2,
        0,
        1
      ],
      "specTag": "observer-b"
    },
    "oak_leaves|D0U0N0S1W1E0": {
      "stand": [
        -4,
        0,
        0
      ],
      "specTag": "free"
    },
    "observer:f=north|D1U1N1S0W0E1": {
      "stand": [
        0,
        -1,
        2
      ],
      "specTag": "observer-b"
    },
    "observer:f=south|D1U1N0S1W1E1": {
      "stand": [
        0,
        0,
        -1
      ],
      "specTag": "observer-b"
    },
    "observer:f=west|D1U0N1S1W1E1": {
      "stand": [
        2,
        -1,
        0
      ],
      "specTag": "observer-b"
    },
    "observer:f=up|D1U1N0S1W0E1": {
      "stand": [
        0,
        -3,
        2
      ],
      "specTag": "observer-b"
    },
    "observer:f=east|D0U0N0S1W0E1": {
      "stand": [
        -1,
        0,
        0
      ],
      "specTag": "observer-b"
    },
    "piston:f=west|D1U0N0S0W0E0": {
      "stand": [
        -1,
        0,
        1
      ],
      "specTag": "piston-a"
    },
    "sand|D0U0N0S0W0E0": {
      "stand": [
        0,
        0,
        3
      ],
      "specTag": "free"
    },
    "lever:f=north:fc=ceiling|D0U1N1S0W0E1": {
      "stand": [
        1,
        -3,
        1
      ],
      "specTag": "switch-ceiling"
    }
  },
  "experience": {
    "stats": {
      "free|up|0": {
        "ok": 13821,
        "fail": 17
      },
      "observer-b|up|0": {
        "ok": 113,
        "fail": 0
      },
      "observer-b|up|1": {
        "ok": 66,
        "fail": 1
      },
      "free|north|0": {
        "ok": 2469,
        "fail": 15
      },
      "free|west|1": {
        "ok": 945,
        "fail": 2
      },
      "free|west|0": {
        "ok": 1627,
        "fail": 8
      },
      "free|south|1": {
        "ok": 985,
        "fail": 0
      },
      "free|south|0": {
        "ok": 2158,
        "fail": 3
      },
      "free|east|0": {
        "ok": 1803,
        "fail": 6
      },
      "crafter-a|up|0": {
        "ok": 45,
        "fail": 0
      },
      "crafter-a|east|1": {
        "ok": 85,
        "fail": 0
      },
      "crafter-a|up|1": {
        "ok": 81,
        "fail": 0
      },
      "free|north|1": {
        "ok": 1196,
        "fail": 0
      },
      "trapdoor-side|south|0": {
        "ok": 6,
        "fail": 0
      },
      "crafter-a|west|1": {
        "ok": 38,
        "fail": 1
      },
      "free|east|1": {
        "ok": 982,
        "fail": 0
      },
      "free|up|1": {
        "ok": 1842,
        "fail": 3
      },
      "hopper|up|1": {
        "ok": 396,
        "fail": 2
      },
      "trapdoor-side|east|0": {
        "ok": 6,
        "fail": 0
      },
      "gate-same|north|1": {
        "ok": 0,
        "fail": 6
      },
      "gate-same|north|0": {
        "ok": 6,
        "fail": 0
      },
      "stairs-top|south|0": {
        "ok": 2,
        "fail": 0
      },
      "door-left|up|1": {
        "ok": 1,
        "fail": 0
      },
      "door-right|up|1": {
        "ok": 1,
        "fail": 0
      },
      "wall-attach|north|1": {
        "ok": 3,
        "fail": 0
      },
      "wall-attach|south|1": {
        "ok": 7,
        "fail": 0
      },
      "wall-attach|north|0": {
        "ok": 9,
        "fail": 0
      },
      "wall-attach|east|0": {
        "ok": 1,
        "fail": 0
      },
      "wall-attach|south|0": {
        "ok": 13,
        "fail": 0
      },
      "stairs-bottom|north|0": {
        "ok": 5,
        "fail": 0
      },
      "stairs-top|south|1": {
        "ok": 1,
        "fail": 0
      },
      "stairs-top|north|1": {
        "ok": 1,
        "fail": 0
      },
      "chest-sneak|up|1": {
        "ok": 65,
        "fail": 0
      },
      "chest-sneak|east|1": {
        "ok": 12,
        "fail": 0
      },
      "chest-partner-side|south|1": {
        "ok": 39,
        "fail": 0
      },
      "stairs-top|north|0": {
        "ok": 5,
        "fail": 0
      },
      "stairs-bottom|up|1": {
        "ok": 12,
        "fail": 0
      },
      "stairs-bottom|west|1": {
        "ok": 7,
        "fail": 0
      },
      "stairs-bottom|east|1": {
        "ok": 13,
        "fail": 0
      },
      "free|down|0": {
        "ok": 25,
        "fail": 0
      },
      "free|down|1": {
        "ok": 3,
        "fail": 0
      },
      "observer-b|east|0": {
        "ok": 29,
        "fail": 0
      },
      "observer-a|down|1": {
        "ok": 4,
        "fail": 0
      },
      "trapdoor-side|west|1": {
        "ok": 4,
        "fail": 0
      },
      "trapdoor-side|north|0": {
        "ok": 6,
        "fail": 0
      },
      "trapdoor-side|north|1": {
        "ok": 4,
        "fail": 0
      },
      "hopper|north|1": {
        "ok": 45,
        "fail": 0
      },
      "hopper|south|1": {
        "ok": 52,
        "fail": 1
      },
      "trapdoor-side|west|0": {
        "ok": 5,
        "fail": 0
      },
      "chest-sneak|south|1": {
        "ok": 3,
        "fail": 0
      },
      "stairs-top|east|0": {
        "ok": 2,
        "fail": 0
      },
      "trapdoor-flat|up|0": {
        "ok": 3,
        "fail": 0
      },
      "stairs-top|west|1": {
        "ok": 3,
        "fail": 0
      },
      "chest-partner-side|north|1": {
        "ok": 41,
        "fail": 0
      },
      "stairs-bottom|west|0": {
        "ok": 2,
        "fail": 0
      },
      "chest-sneak|north|1": {
        "ok": 12,
        "fail": 0
      },
      "observer-b|east|1": {
        "ok": 53,
        "fail": 0
      },
      "observer-b|west|0": {
        "ok": 13,
        "fail": 0
      },
      "gate-same|east|0": {
        "ok": 1,
        "fail": 0
      },
      "crafter-a|north|1": {
        "ok": 1,
        "fail": 0
      },
      "trapdoor-side|south|1": {
        "ok": 1,
        "fail": 0
      },
      "stairs-bottom|up|0": {
        "ok": 25,
        "fail": 0
      },
      "stairs-bottom|east|0": {
        "ok": 3,
        "fail": 0
      },
      "stairs-top|west|0": {
        "ok": 6,
        "fail": 0
      },
      "wall-torch|east|1": {
        "ok": 1,
        "fail": 0
      },
      "trapdoor-flat|up|1": {
        "ok": 2,
        "fail": 0
      },
      "floor-torch|up|0": {
        "ok": 5,
        "fail": 0
      },
      "floor-torch|up|1": {
        "ok": 1,
        "fail": 0
      },
      "crafter-a|south|1": {
        "ok": 1,
        "fail": 0
      },
      "stairs-bottom|south|0": {
        "ok": 1,
        "fail": 0
      },
      "crafter-a|west|0": {
        "ok": 3,
        "fail": 0
      },
      "crafter-a|east|0": {
        "ok": 3,
        "fail": 0
      },
      "slab-top|east|0": {
        "ok": 2,
        "fail": 0
      },
      "slab-top|south|0": {
        "ok": 3,
        "fail": 0
      },
      "observer-a|up|0": {
        "ok": 8,
        "fail": 0
      },
      "wall-attach|west|1": {
        "ok": 1,
        "fail": 0
      },
      "floor|up|0": {
        "ok": 39,
        "fail": 0
      },
      "slab-top|north|0": {
        "ok": 2,
        "fail": 0
      },
      "piston-a|east|0": {
        "ok": 3,
        "fail": 0
      },
      "piston-a|up|0": {
        "ok": 36,
        "fail": 0
      },
      "observer-b|north|1": {
        "ok": 21,
        "fail": 0
      },
      "piston-a|up|1": {
        "ok": 26,
        "fail": 0
      },
      "piston-b|north|0": {
        "ok": 2,
        "fail": 0
      },
      "standing-sign|up|0": {
        "ok": 4,
        "fail": 0
      },
      "floor|up|1": {
        "ok": 10,
        "fail": 0
      },
      "diode|up|0": {
        "ok": 18,
        "fail": 0
      },
      "observer-b|south|1": {
        "ok": 17,
        "fail": 0
      },
      "observer-b|south|0": {
        "ok": 17,
        "fail": 0
      },
      "observer-b|north|0": {
        "ok": 20,
        "fail": 0
      },
      "observer-b|west|1": {
        "ok": 13,
        "fail": 0
      },
      "observer-a|north|0": {
        "ok": 2,
        "fail": 0
      },
      "observer-b|down|1": {
        "ok": 1,
        "fail": 0
      },
      "piston-a|south|0": {
        "ok": 2,
        "fail": 0
      },
      "piston-a|east|1": {
        "ok": 2,
        "fail": 0
      },
      "hopper|west|1": {
        "ok": 35,
        "fail": 0
      },
      "observer-b|down|0": {
        "ok": 2,
        "fail": 0
      },
      "piston-a|north|1": {
        "ok": 1,
        "fail": 0
      },
      "hopper|east|1": {
        "ok": 2,
        "fail": 0
      },
      "piston-b|down|0": {
        "ok": 2,
        "fail": 0
      },
      "diode|up|1": {
        "ok": 2,
        "fail": 0
      },
      "observer-a|south|1": {
        "ok": 4,
        "fail": 0
      },
      "observer-a|west|0": {
        "ok": 2,
        "fail": 0
      },
      "piston-a|north|0": {
        "ok": 1,
        "fail": 0
      },
      "standing-sign|up|1": {
        "ok": 1,
        "fail": 0
      },
      "observer-a|north|1": {
        "ok": 2,
        "fail": 0
      },
      "slab-bottom|up|0": {
        "ok": 2,
        "fail": 0
      },
      "slab-bottom|east|0": {
        "ok": 2,
        "fail": 0
      },
      "slab-bottom|south|0": {
        "ok": 1,
        "fail": 0
      },
      "slab-bottom|up|1": {
        "ok": 1,
        "fail": 0
      },
      "slab-bottom|west|0": {
        "ok": 2,
        "fail": 0
      },
      "piston-a|west|1": {
        "ok": 4,
        "fail": 0
      },
      "slab-top|south|1": {
        "ok": 1,
        "fail": 0
      },
      "slab-top|west|0": {
        "ok": 1,
        "fail": 0
      },
      "piston-a|down|0": {
        "ok": 2,
        "fail": 0
      },
      "switch-wall|south|1": {
        "ok": 1,
        "fail": 0
      },
      "switch-ceiling|down|0": {
        "ok": 1,
        "fail": 0
      }
    },
    "far": {
      "ok": 4912,
      "fail": 6
    },
    "ruleStats": {},
    "bias": {}
  },
  "schematics": {
    "McDs_64_Module_Cobblestone_Wall_Farm.litematic": {
      "bestStands": {
        "25,0,-34@0": [
          -4,
          0,
          -1
        ],
        "27,0,-34@0": [
          1,
          0,
          -2
        ],
        "26,0,-34@0": [
          2,
          0,
          -2
        ],
        "38,0,-51@0": [
          2,
          0,
          -2
        ],
        "37,0,-51@0": [
          3,
          0,
          -2
        ],
        "36,2,-32@0": [
          -2,
          0,
          -2
        ],
        "35,2,-32@0": [
          -1,
          0,
          -2
        ],
        "34,2,-32@0": [
          0,
          0,
          -2
        ],
        "37,2,-34@0": [
          0,
          0,
          2
        ],
        "38,2,-34@0": [
          -1,
          0,
          2
        ],
        "36,2,-34@0": [
          1,
          0,
          2
        ],
        "24,3,-46@0": [
          -1,
          0,
          3
        ],
        "24,3,-45@0": [
          -1,
          0,
          2
        ],
        "24,3,-44@0": [
          -1,
          0,
          1
        ],
        "24,3,-43@0": [
          -1,
          0,
          0
        ],
        "24,3,-42@0": [
          -1,
          0,
          -1
        ],
        "19,3,-42@0": [
          4,
          0,
          -1
        ],
        "18,3,-41@0": [
          4,
          0,
          -1
        ],
        "18,3,-43@0": [
          4,
          0,
          1
        ],
        "24,3,-41@0": [
          -2,
          0,
          -1
        ],
        "24,3,-40@0": [
          -1,
          0,
          3
        ],
        "24,3,-39@0": [
          -1,
          0,
          2
        ],
        "24,3,-38@0": [
          -1,
          0,
          1
        ],
        "24,3,-37@0": [
          -1,
          0,
          0
        ],
        "23,3,-33@0": [
          0,
          0,
          -4
        ],
        "24,3,-32@0": [
          1,
          0,
          0
        ],
        "25,3,-33@0": [
          0,
          0,
          1
        ],
        "25,4,-48@0": [
          0,
          0,
          -2
        ],
        "24,4,-48@0": [
          -3,
          0,
          -2
        ],
        "18,4,-43@0": [
          3,
          -1,
          1
        ],
        "25,4,-35@0": [
          0,
          0,
          2
        ],
        "25,4,-34@0": [
          0,
          0,
          1
        ],
        "24,4,-34@0": [
          1,
          0,
          1
        ],
        "35,5,-50@0": [
          -1,
          0,
          0
        ],
        "33,5,-50@0": [
          1,
          0,
          0
        ],
        "24,5,-27@0": [
          -4,
          -1,
          0
        ],
        "23,5,-27@0": [
          -3,
          -1,
          0
        ],
        "22,5,-27@0": [
          -2,
          -1,
          0
        ],
        "21,5,-27@0": [
          -1,
          -1,
          0
        ],
        "21,5,-25@0": [
          -1,
          -1,
          -2
        ],
        "21,5,-26@0": [
          -1,
          -1,
          -1
        ],
        "20,5,-25@0": [
          -2,
          -1,
          0
        ],
        "20,5,-26@0": [
          -2,
          -1,
          1
        ],
        "20,5,-27@0": [
          -2,
          -1,
          2
        ],
        "20,5,-28@0": [
          0,
          -1,
          1
        ],
        "20,5,-29@0": [
          0,
          -1,
          2
        ],
        "20,5,-30@0": [
          0,
          -1,
          3
        ],
        "20,5,-31@0": [
          2,
          -1,
          0
        ],
        "17,5,-29@0": [
          1,
          -1,
          -3
        ],
        "17,5,-30@0": [
          1,
          -1,
          -2
        ],
        "18,5,-30@0": [
          0,
          -1,
          -2
        ],
        "18,5,-31@0": [
          4,
          -1,
          0
        ],
        "61,6,-52@0": [
          0,
          0,
          -4
        ],
        "61,6,-53@0": [
          0,
          0,
          -3
        ],
        "61,6,-54@0": [
          0,
          0,
          -2
        ],
        "61,6,-55@0": [
          0,
          0,
          -1
        ],
        "60,6,-53@0": [
          1,
          0,
          -3
        ],
        "60,6,-54@0": [
          1,
          0,
          -2
        ],
        "60,6,-55@0": [
          1,
          0,
          -1
        ],
        "63,6,-58@0": [
          -2,
          0,
          2
        ],
        "63,6,-57@0": [
          -2,
          0,
          1
        ],
        "62,6,-57@0": [
          -1,
          0,
          1
        ],
        "72,6,-63@0": [
          -4,
          0,
          0
        ],
        "30,6,-25@0": [
          0,
          0,
          -4
        ],
        "30,6,-26@0": [
          0,
          0,
          -3
        ],
        "30,6,-27@0": [
          0,
          0,
          -2
        ],
        "30,6,-28@0": [
          0,
          0,
          -1
        ],
        "31,6,-27@0": [
          2,
          0,
          -3
        ],
        "45,7,-47@0": [
          -1,
          -1,
          0
        ],
        "37,8,-66@0": [
          0,
          0,
          3
        ],
        "40,8,-81@0": [
          4,
          0,
          0
        ],
        "41,8,-81@0": [
          3,
          0,
          0
        ],
        "34,10,-1@0": [
          -4,
          0,
          0
        ],
        "0,11,-77@0": [
          0,
          0,
          3
        ],
        "0,11,-76@0": [
          0,
          0,
          2
        ],
        "0,11,-73@0": [
          0,
          0,
          -1
        ],
        "4,11,-83@0": [
          -3,
          -1,
          2
        ],
        "12,11,-39@0": [
          -3,
          -1,
          -1
        ],
        "21,11,-39@0": [
          -4,
          -1,
          1
        ],
        "20,11,-39@0": [
          -3,
          -1,
          2
        ],
        "76,11,-41@0": [
          -1,
          0,
          0
        ],
        "74,12,-37@0": [
          1,
          -1,
          -4
        ],
        "74,12,-33@0": [
          0,
          0,
          3
        ],
        "74,12,-32@0": [
          0,
          0,
          2
        ],
        "74,12,-31@0": [
          0,
          0,
          1
        ],
        "74,12,-28@0": [
          0,
          0,
          -2
        ],
        "74,12,-40@0": [
          -1,
          0,
          -1
        ],
        "74,12,-42@0": [
          -1,
          0,
          1
        ],
        "74,12,-41@0": [
          -1,
          0,
          0
        ],
        "74,12,-30@0": [
          0,
          0,
          3
        ],
        "74,12,-29@0": [
          0,
          0,
          2
        ],
        "74,12,-25@0": [
          0,
          0,
          -2
        ],
        "74,12,-15@0": [
          0,
          0,
          -1
        ],
        "42,12,0@0": [
          1,
          0,
          0
        ],
        "21,12,-44@0": [
          2,
          0,
          2
        ],
        "25,12,-44@0": [
          2,
          0,
          2
        ],
        "25,12,-43@0": [
          1,
          0,
          2
        ],
        "25,12,-40@0": [
          2,
          0,
          -2
        ],
        "26,12,-40@0": [
          1,
          0,
          -2
        ],
        "27,12,-40@0": [
          0,
          0,
          -2
        ],
        "28,12,-40@0": [
          2,
          0,
          -2
        ],
        "29,12,-43@0": [
          1,
          0,
          1
        ],
        "32,12,-43@0": [
          -2,
          0,
          1
        ],
        "28,12,-44@0": [
          2,
          0,
          2
        ],
        "23,12,-39@0": [
          2,
          0,
          -2
        ],
        "74,13,-41@0": [
          0,
          0,
          4
        ],
        "74,13,-35@0": [
          0,
          0,
          -2
        ],
        "73,13,-34@0": [
          1,
          0,
          -3
        ],
        "74,13,-33@0": [
          0,
          0,
          3
        ],
        "74,13,-32@0": [
          0,
          0,
          2
        ],
        "74,13,-31@0": [
          0,
          0,
          1
        ],
        "74,13,-29@0": [
          0,
          0,
          -1
        ],
        "74,13,-24@0": [
          0,
          0,
          2
        ],
        "74,13,-21@0": [
          0,
          0,
          -1
        ],
        "43,13,-44@0": [
          -2,
          -1,
          2
        ],
        "43,13,-43@0": [
          -2,
          -1,
          1
        ],
        "42,13,-43@0": [
          -1,
          -1,
          1
        ],
        "42,13,-44@0": [
          -1,
          -1,
          2
        ],
        "40,13,-43@0": [
          1,
          -1,
          1
        ],
        "39,13,-43@0": [
          2,
          -1,
          1
        ],
        "39,13,-44@0": [
          2,
          -1,
          2
        ],
        "38,13,-44@0": [
          3,
          -1,
          2
        ],
        "38,13,-43@0": [
          3,
          -1,
          1
        ],
        "57,13,-40@0": [
          2,
          -3,
          -2
        ],
        "57,13,-41@0": [
          2,
          -3,
          -1
        ],
        "57,14,-39@0": [
          -2,
          0,
          -3
        ],
        "57,14,-40@0": [
          -2,
          0,
          -2
        ],
        "57,14,-41@0": [
          -2,
          0,
          -1
        ],
        "57,14,-42@0": [
          -2,
          0,
          0
        ],
        "57,14,-43@0": [
          -2,
          0,
          1
        ],
        "57,14,-44@0": [
          -2,
          0,
          2
        ],
        "58,14,-44@0": [
          1,
          0,
          3
        ],
        "58,14,-43@0": [
          1,
          0,
          2
        ],
        "58,14,-42@0": [
          1,
          0,
          1
        ],
        "58,14,-41@0": [
          1,
          0,
          0
        ],
        "58,14,-40@0": [
          1,
          0,
          -1
        ],
        "59,14,-40@0": [
          0,
          0,
          -1
        ],
        "58,14,-39@0": [
          1,
          0,
          -2
        ],
        "38,13,-40@0": [
          2,
          -1,
          -2
        ],
        "38,13,-39@0": [
          2,
          -1,
          -3
        ],
        "37,13,-40@0": [
          4,
          -1,
          -1
        ],
        "45,13,-40@0": [
          -4,
          -1,
          -1
        ],
        "45,13,-39@0": [
          -4,
          -1,
          -2
        ],
        "46,13,-39@0": [
          -3,
          -1,
          -3
        ],
        "70,13,-67@0": [
          3,
          -3,
          1
        ],
        "68,13,-34@0": [
          1,
          -3,
          -3
        ],
        "73,15,-82@0": [
          1,
          0,
          4
        ],
        "73,15,-1@0": [
          1,
          0,
          -4
        ],
        "50,15,-82@0": [
          1,
          0,
          -1
        ],
        "51,15,-82@0": [
          0,
          0,
          -1
        ],
        "52,15,-82@0": [
          2,
          0,
          -1
        ],
        "53,15,-82@0": [
          1,
          0,
          -1
        ],
        "54,15,-82@0": [
          3,
          0,
          -1
        ],
        "73,15,-77@0": [
          -4,
          0,
          1
        ],
        "73,15,-76@0": [
          -4,
          0,
          0
        ],
        "73,15,-75@0": [
          -4,
          0,
          2
        ],
        "73,15,-74@0": [
          -4,
          0,
          1
        ],
        "73,15,-73@0": [
          -4,
          0,
          1
        ],
        "73,15,-72@0": [
          -4,
          0,
          0
        ],
        "73,15,-71@0": [
          -2,
          0,
          3
        ],
        "73,15,-70@0": [
          -2,
          0,
          2
        ],
        "73,15,-69@0": [
          -2,
          0,
          1
        ],
        "73,15,-68@0": [
          -2,
          0,
          0
        ],
        "73,15,-66@0": [
          -3,
          0,
          0
        ],
        "73,15,-63@0": [
          -4,
          0,
          0
        ],
        "73,15,-61@0": [
          1,
          0,
          3
        ],
        "73,15,-60@0": [
          1,
          0,
          2
        ],
        "73,15,-59@0": [
          1,
          0,
          1
        ],
        "73,15,-58@0": [
          1,
          0,
          0
        ],
        "62,15,-1@0": [
          -1,
          0,
          1
        ],
        "61,15,-1@0": [
          0,
          0,
          1
        ],
        "60,15,-1@0": [
          0,
          0,
          -4
        ],
        "56,15,-1@0": [
          -2,
          0,
          1
        ],
        "46,15,-1@0": [
          -2,
          0,
          1
        ],
        "44,15,-4@0": [
          3,
          0,
          -2
        ],
        "45,15,-4@0": [
          2,
          0,
          -2
        ],
        "44,15,-5@0": [
          3,
          0,
          -1
        ],
        "52,15,-4@0": [
          1,
          0,
          -3
        ],
        "53,15,-4@0": [
          0,
          0,
          -3
        ],
        "51,15,-4@0": [
          2,
          0,
          -3
        ],
        "52,15,-5@0": [
          1,
          0,
          -2
        ],
        "62,15,-6@0": [
          2,
          0,
          3
        ],
        "62,15,-5@0": [
          2,
          0,
          2
        ],
        "63,15,-6@0": [
          1,
          0,
          3
        ],
        "42,16,-74@0": [
          -1,
          0,
          1
        ],
        "43,16,-73@0": [
          -2,
          0,
          0
        ],
        "42,16,-72@0": [
          -1,
          0,
          -1
        ],
        "26,15,-59@0": [
          3,
          0,
          3
        ],
        "30,15,-63@0": [
          0,
          0,
          2
        ],
        "30,15,-62@0": [
          0,
          0,
          1
        ],
        "31,15,-63@0": [
          -1,
          0,
          2
        ],
        "24,15,-65@0": [
          -3,
          0,
          1
        ],
        "24,15,-66@0": [
          -3,
          0,
          2
        ],
        "23,15,-65@0": [
          -2,
          0,
          1
        ],
        "24,15,-64@0": [
          -3,
          0,
          0
        ],
        "34,16,-67@0": [
          -1,
          0,
          0
        ],
        "34,16,-66@0": [
          -1,
          0,
          -1
        ],
        "44,15,-64@0": [
          -3,
          0,
          0
        ],
        "45,15,-63@0": [
          -4,
          0,
          -1
        ],
        "43,15,-63@0": [
          -2,
          0,
          -1
        ],
        "44,16,-64@0": [
          -4,
          -1,
          -1
        ],
        "44,16,-63@0": [
          -1,
          0,
          0
        ],
        "44,16,-62@0": [
          -1,
          0,
          -1
        ],
        "24,16,-34@0": [
          3,
          0,
          -3
        ],
        "24,16,-33@0": [
          1,
          0,
          -1
        ],
        "70,16,-22@0": [
          3,
          0,
          2
        ],
        "70,16,-21@0": [
          3,
          0,
          1
        ],
        "70,16,-23@0": [
          3,
          0,
          0
        ],
        "71,16,-24@0": [
          2,
          0,
          2
        ],
        "69,16,-25@0": [
          4,
          0,
          -1
        ],
        "70,16,-25@0": [
          3,
          0,
          -1
        ],
        "68,15,-11@0": [
          -3,
          0,
          0
        ],
        "34,13,-77@0": [
          2,
          -3,
          0
        ],
        "34,21,-54@0": [
          -1,
          0,
          -1
        ],
        "33,21,-54@0": [
          0,
          0,
          -1
        ],
        "47,16,-77@0": [
          2,
          -1,
          -3
        ],
        "45,19,-30@0": [
          1,
          0,
          -3
        ],
        "23,20,-28@0": [
          -1,
          0,
          -1
        ],
        "6,21,-48@0": [
          -4,
          -1,
          2
        ],
        "72,20,-42@0": [
          1,
          0,
          -2
        ],
        "73,20,-43@0": [
          0,
          0,
          -1
        ],
        "74,20,-43@0": [
          -1,
          0,
          -1
        ],
        "74,20,-40@0": [
          -1,
          0,
          -4
        ],
        "74,20,-41@0": [
          -1,
          0,
          -3
        ],
        "74,20,-42@0": [
          -1,
          0,
          -2
        ],
        "73,20,-40@0": [
          0,
          0,
          -4
        ],
        "74,20,-47@0": [
          -1,
          0,
          3
        ],
        "39,22,-83@0": [
          -3,
          0,
          0
        ],
        "38,22,-83@0": [
          -2,
          0,
          0
        ],
        "37,22,-83@0": [
          -1,
          0,
          0
        ],
        "25,23,-54@0": [
          0,
          0,
          -1
        ],
        "27,23,-53@0": [
          -2,
          0,
          -2
        ],
        "28,23,-53@0": [
          -3,
          0,
          -2
        ],
        "22,23,-55@0": [
          3,
          0,
          0
        ],
        "22,23,-56@0": [
          3,
          0,
          1
        ],
        "26,23,-59@0": [
          -1,
          0,
          4
        ],
        "26,23,-51@0": [
          -3,
          0,
          1
        ],
        "24,23,-49@0": [
          -1,
          0,
          -1
        ],
        "22,23,-48@0": [
          1,
          0,
          -2
        ],
        "21,23,-50@0": [
          2,
          0,
          0
        ],
        "27,23,-51@0": [
          -1,
          0,
          2
        ],
        "29,23,-50@0": [
          -3,
          0,
          1
        ],
        "30,23,-48@0": [
          -4,
          0,
          -1
        ],
        "32,23,-49@0": [
          -4,
          0,
          0
        ],
        "34,23,-51@0": [
          0,
          0,
          2
        ],
        "49,23,-54@0": [
          -1,
          0,
          3
        ],
        "47,23,-53@0": [
          1,
          0,
          2
        ],
        "47,23,-51@0": [
          1,
          0,
          0
        ],
        "46,23,-53@0": [
          2,
          0,
          2
        ],
        "50,23,-49@0": [
          -2,
          0,
          -2
        ],
        "34,23,-59@0": [
          -3,
          0,
          1
        ],
        "29,23,-58@0": [
          2,
          0,
          0
        ],
        "30,23,-56@0": [
          1,
          0,
          -2
        ],
        "27,23,-67@0": [
          -4,
          0,
          1
        ],
        "26,23,-67@0": [
          -3,
          0,
          1
        ],
        "8,23,-65@0": [
          -2,
          0,
          -2
        ],
        "8,23,-64@0": [
          -2,
          0,
          -3
        ],
        "5,23,-66@0": [
          1,
          0,
          -1
        ],
        "3,23,-67@0": [
          3,
          0,
          0
        ],
        "4,23,-69@0": [
          2,
          0,
          2
        ],
        "6,23,-71@0": [
          0,
          0,
          4
        ],
        "6,23,-72@0": [
          -1,
          0,
          0
        ],
        "5,23,-74@0": [
          0,
          0,
          2
        ],
        "3,23,-75@0": [
          2,
          0,
          3
        ],
        "58,23,-21@0": [
          0,
          -3,
          -2
        ],
        "57,23,-22@0": [
          1,
          -3,
          -1
        ],
        "64,23,-21@0": [
          -1,
          -2,
          1
        ],
        "65,23,-73@0": [
          -1,
          -2,
          0
        ],
        "64,23,-74@0": [
          0,
          -2,
          1
        ],
        "62,23,-74@0": [
          1,
          -1,
          0
        ],
        "61,23,-73@0": [
          2,
          -3,
          1
        ],
        "65,23,-71@0": [
          -2,
          -3,
          -1
        ],
        "64,23,-70@0": [
          -1,
          -3,
          -2
        ],
        "62,23,-70@0": [
          2,
          -3,
          -1
        ],
        "53,23,-63@0": [
          0,
          -1,
          -1
        ],
        "54,23,-62@0": [
          1,
          -1,
          0
        ],
        "56,23,-62@0": [
          -1,
          -1,
          0
        ],
        "64,23,-66@0": [
          -1,
          -1,
          0
        ],
        "44,23,-78@0": [
          0,
          -2,
          1
        ],
        "45,23,-77@0": [
          -1,
          -2,
          0
        ],
        "41,23,-77@0": [
          1,
          -2,
          1
        ],
        "42,23,-74@0": [
          1,
          -2,
          -2
        ],
        "33,23,-16@0": [
          -1,
          -2,
          0
        ],
        "33,23,-10@0": [
          0,
          -1,
          -1
        ],
        "25,23,-6@0": [
          0,
          -3,
          -1
        ],
        "26,23,-7@0": [
          -1,
          -3,
          0
        ],
        "25,23,-8@0": [
          0,
          -3,
          1
        ],
        "29,23,-10@0": [
          -2,
          -3,
          1
        ],
        "28,23,-9@0": [
          -1,
          -3,
          0
        ],
        "26,23,-9@0": [
          1,
          -3,
          0
        ],
        "25,23,-10@0": [
          1,
          -2,
          -1
        ],
        "9,23,-8@0": [
          -1,
          -2,
          1
        ],
        "10,23,-13@0": [
          1,
          -1,
          0
        ],
        "13,23,-15@0": [
          -2,
          0,
          -2
        ],
        "13,23,-20@0": [
          -1,
          -3,
          1
        ],
        "13,23,-18@0": [
          -1,
          -3,
          -1
        ],
        "12,23,-17@0": [
          0,
          -3,
          -2
        ],
        "10,23,-17@0": [
          1,
          -3,
          -2
        ],
        "10,23,-21@0": [
          1,
          -3,
          2
        ],
        "9,23,-18@0": [
          2,
          -3,
          -1
        ],
        "20,23,-21@0": [
          0,
          -1,
          1
        ],
        "4,23,-15@0": [
          -1,
          -1,
          0
        ],
        "53,23,-22@0": [
          -1,
          -2,
          -1
        ],
        "73,24,-34@0": [
          -3,
          0,
          2
        ],
        "33,24,-21@0": [
          0,
          0,
          -2
        ],
        "33,24,-20@0": [
          0,
          0,
          -3
        ],
        "32,24,-20@0": [
          1,
          0,
          -3
        ],
        "31,24,-20@0": [
          2,
          0,
          -3
        ],
        "33,24,-22@0": [
          0,
          0,
          -1
        ],
        "29,24,-22@0": [
          4,
          0,
          -1
        ],
        "29,24,-23@0": [
          4,
          0,
          0
        ],
        "59,24,-68@0": [
          1,
          0,
          4
        ],
        "61,24,-63@0": [
          -1,
          0,
          -1
        ],
        "61,24,-65@0": [
          -1,
          0,
          1
        ],
        "59,24,-63@0": [
          1,
          0,
          -1
        ],
        "58,24,-63@0": [
          2,
          0,
          -1
        ],
        "57,24,-63@0": [
          3,
          0,
          -1
        ],
        "57,24,-62@0": [
          3,
          0,
          -2
        ],
        "57,24,-61@0": [
          3,
          0,
          -3
        ],
        "57,24,-66@0": [
          3,
          0,
          2
        ],
        "60,24,-63@0": [
          0,
          0,
          -1
        ],
        "61,24,-62@0": [
          -1,
          0,
          -2
        ],
        "61,24,-61@0": [
          -1,
          0,
          -3
        ],
        "61,24,-60@0": [
          -1,
          0,
          -4
        ],
        "65,24,-63@0": [
          -4,
          0,
          0
        ],
        "65,24,-62@0": [
          -4,
          0,
          -1
        ],
        "61,24,-59@0": [
          0,
          0,
          -4
        ],
        "61,24,-58@0": [
          0,
          0,
          -3
        ],
        "65,24,-60@0": [
          -4,
          0,
          -1
        ],
        "65,24,-61@0": [
          -4,
          0,
          0
        ],
        "57,24,-60@0": [
          4,
          0,
          -1
        ],
        "61,24,-57@0": [
          0,
          0,
          -4
        ],
        "60,24,-57@0": [
          1,
          0,
          -4
        ],
        "59,24,-55@0": [
          2,
          0,
          -4
        ],
        "61,24,-55@0": [
          0,
          0,
          -4
        ],
        "60,24,-55@0": [
          1,
          0,
          -4
        ],
        "65,24,-58@0": [
          -1,
          0,
          -3
        ],
        "65,24,-59@0": [
          -1,
          0,
          -2
        ],
        "68,24,-57@0": [
          1,
          0,
          -4
        ],
        "69,24,-57@0": [
          0,
          0,
          -4
        ],
        "69,24,-58@0": [
          0,
          0,
          -3
        ],
        "53,24,-59@0": [
          3,
          0,
          -2
        ],
        "53,24,-63@0": [
          3,
          0,
          2
        ],
        "52,24,-63@0": [
          3,
          0,
          2
        ],
        "51,24,-63@0": [
          3,
          0,
          2
        ],
        "50,24,-63@0": [
          4,
          0,
          2
        ],
        "45,24,-70@0": [
          2,
          0,
          3
        ],
        "30,24,-10@0": [
          1,
          -1,
          -1
        ],
        "29,24,-4@0": [
          -1,
          0,
          -4
        ],
        "25,24,-5@0": [
          3,
          0,
          -3
        ],
        "25,24,-6@0": [
          3,
          0,
          -2
        ],
        "25,24,-7@0": [
          3,
          0,
          -1
        ],
        "30,24,-4@0": [
          -2,
          0,
          -4
        ],
        "33,24,-4@0": [
          -4,
          0,
          -1
        ],
        "25,24,-4@0": [
          4,
          0,
          -1
        ],
        "24,24,-4@0": [
          2,
          0,
          -2
        ],
        "23,24,-4@0": [
          3,
          0,
          -2
        ],
        "22,24,-4@0": [
          4,
          0,
          -2
        ],
        "21,24,-4@0": [
          3,
          0,
          -1
        ],
        "21,24,-5@0": [
          3,
          0,
          0
        ],
        "21,24,-9@0": [
          -2,
          0,
          3
        ],
        "21,24,-8@0": [
          -2,
          0,
          2
        ],
        "15,24,-4@0": [
          4,
          0,
          -2
        ],
        "14,24,-4@0": [
          3,
          0,
          -2
        ],
        "13,24,-5@0": [
          2,
          0,
          1
        ],
        "13,24,-6@0": [
          2,
          0,
          2
        ],
        "13,24,-4@0": [
          2,
          0,
          0
        ],
        "9,24,-4@0": [
          2,
          0,
          -2
        ],
        "9,24,-5@0": [
          2,
          0,
          -1
        ],
        "8,24,-4@0": [
          3,
          0,
          -2
        ],
        "13,24,-29@0": [
          -1,
          0,
          4
        ],
        "13,24,-30@0": [
          0,
          0,
          4
        ],
        "14,24,-17@0": [
          -4,
          0,
          0
        ],
        "14,24,-9@0": [
          -4,
          0,
          0
        ],
        "22,24,-9@0": [
          -4,
          0,
          0
        ],
        "52,24,-17@0": [
          3,
          0,
          1
        ],
        "60,24,-17@0": [
          3,
          0,
          1
        ],
        "68,24,-17@0": [
          2,
          0,
          2
        ],
        "68,24,-9@0": [
          2,
          0,
          1
        ],
        "52,24,-9@0": [
          4,
          0,
          0
        ],
        "44,24,-9@0": [
          4,
          0,
          1
        ],
        "60,24,-25@0": [
          4,
          0,
          1
        ],
        "60,24,-33@0": [
          4,
          0,
          1
        ],
        "68,24,-33@0": [
          3,
          0,
          1
        ],
        "59,24,-25@0": [
          -2,
          0,
          3
        ],
        "34,25,-1@0": [
          0,
          -1,
          -4
        ],
        "30,25,-34@0": [
          0,
          0,
          1
        ],
        "25,25,-34@0": [
          -3,
          0,
          1
        ],
        "24,25,-34@0": [
          -2,
          0,
          1
        ],
        "23,25,-34@0": [
          -1,
          0,
          1
        ],
        "22,25,-34@0": [
          0,
          0,
          1
        ],
        "16,25,-34@0": [
          -1,
          0,
          1
        ],
        "15,25,-34@0": [
          0,
          0,
          1
        ],
        "23,25,-9@0": [
          0,
          0,
          -4
        ],
        "23,25,-17@0": [
          0,
          0,
          4
        ],
        "15,25,-9@0": [
          0,
          0,
          -4
        ],
        "15,25,-17@0": [
          0,
          0,
          4
        ],
        "7,25,-9@0": [
          0,
          0,
          -4
        ],
        "7,25,-17@0": [
          0,
          0,
          4
        ],
        "31,25,-25@0": [
          0,
          0,
          4
        ],
        "59,25,-58@0": [
          0,
          0,
          4
        ],
        "59,25,-50@0": [
          0,
          0,
          -4
        ],
        "67,25,-74@0": [
          0,
          0,
          4
        ],
        "67,25,-66@0": [
          0,
          0,
          -4
        ],
        "67,25,-50@0": [
          0,
          0,
          -4
        ],
        "23,25,-25@0": [
          0,
          0,
          -4
        ],
        "35,26,-46@0": [
          -1,
          0,
          -4
        ],
        "36,26,-46@0": [
          -2,
          0,
          -2
        ],
        "38,26,-46@0": [
          2,
          0,
          -3
        ],
        "39,26,-46@0": [
          1,
          0,
          -3
        ],
        "37,26,-45@0": [
          0,
          0,
          -1
        ],
        "29,26,-45@0": [
          2,
          0,
          3
        ],
        "29,26,-44@0": [
          2,
          0,
          2
        ],
        "43,26,-45@0": [
          -2,
          0,
          3
        ],
        "43,26,-44@0": [
          -2,
          0,
          2
        ],
        "42,26,-44@0": [
          -1,
          0,
          2
        ],
        "41,26,-44@0": [
          0,
          0,
          2
        ],
        "44,26,-44@0": [
          -3,
          0,
          2
        ],
        "44,26,-43@0": [
          -3,
          0,
          1
        ],
        "43,26,-43@0": [
          -2,
          0,
          1
        ],
        "42,26,-43@0": [
          -1,
          0,
          1
        ],
        "41,26,-43@0": [
          0,
          0,
          1
        ],
        "39,26,-43@0": [
          2,
          0,
          1
        ],
        "40,26,-43@0": [
          1,
          0,
          1
        ],
        "38,26,-44@0": [
          3,
          0,
          2
        ],
        "39,26,-44@0": [
          2,
          0,
          2
        ],
        "40,26,-44@0": [
          1,
          0,
          2
        ],
        "39,26,-40@0": [
          2,
          0,
          -2
        ],
        "40,26,-40@0": [
          1,
          0,
          -2
        ],
        "41,26,-40@0": [
          0,
          0,
          -2
        ],
        "44,26,-40@0": [
          -3,
          0,
          -2
        ],
        "43,26,-40@0": [
          -2,
          0,
          -2
        ],
        "42,26,-40@0": [
          -1,
          0,
          -2
        ],
        "53,26,-47@0": [
          0,
          0,
          -2
        ],
        "53,26,-48@0": [
          0,
          0,
          -1
        ],
        "54,26,-48@0": [
          -1,
          0,
          -1
        ],
        "57,26,-48@0": [
          3,
          0,
          -1
        ],
        "58,26,-48@0": [
          2,
          0,
          -1
        ],
        "59,26,-48@0": [
          1,
          0,
          -1
        ],
        "60,26,-48@0": [
          0,
          0,
          -1
        ],
        "57,26,-47@0": [
          3,
          0,
          -2
        ],
        "58,26,-47@0": [
          2,
          0,
          -2
        ],
        "58,26,-46@0": [
          2,
          0,
          -3
        ],
        "61,26,-48@0": [
          3,
          0,
          -1
        ],
        "62,26,-48@0": [
          2,
          0,
          -1
        ],
        "63,26,-48@0": [
          1,
          0,
          -1
        ],
        "36,26,-56@0": [
          -2,
          0,
          -2
        ],
        "35,26,-56@0": [
          -1,
          0,
          -2
        ],
        "35,26,-57@0": [
          -1,
          0,
          -1
        ],
        "35,26,-58@0": [
          -1,
          0,
          0
        ],
        "36,26,-57@0": [
          -2,
          0,
          -1
        ],
        "36,26,-58@0": [
          -2,
          0,
          0
        ],
        "35,26,-59@0": [
          -1,
          0,
          -3
        ],
        "35,26,-60@0": [
          -1,
          0,
          -2
        ],
        "35,26,-61@0": [
          -1,
          0,
          -1
        ],
        "36,26,-59@0": [
          -2,
          0,
          -3
        ],
        "36,26,-60@0": [
          -2,
          0,
          -2
        ],
        "36,26,-61@0": [
          -2,
          0,
          -1
        ],
        "35,26,-62@0": [
          -1,
          0,
          -3
        ],
        "35,26,-63@0": [
          -1,
          0,
          -2
        ],
        "35,26,-64@0": [
          -1,
          0,
          -1
        ],
        "35,26,-65@0": [
          -1,
          0,
          0
        ],
        "36,26,-62@0": [
          -2,
          0,
          -3
        ],
        "36,26,-63@0": [
          -2,
          0,
          -2
        ],
        "36,26,-64@0": [
          -2,
          0,
          -1
        ],
        "36,26,-65@0": [
          -2,
          0,
          0
        ],
        "36,26,-66@0": [
          -2,
          0,
          -2
        ],
        "35,26,-66@0": [
          -1,
          0,
          -2
        ],
        "35,26,-67@0": [
          -1,
          0,
          -1
        ],
        "35,26,-68@0": [
          -1,
          0,
          0
        ],
        "36,26,-67@0": [
          -2,
          0,
          -1
        ],
        "36,26,-68@0": [
          -2,
          0,
          0
        ],
        "35,26,-69@0": [
          -1,
          0,
          -2
        ],
        "35,26,-70@0": [
          -1,
          0,
          -1
        ],
        "35,26,-71@0": [
          -1,
          0,
          0
        ],
        "36,26,-69@0": [
          -2,
          0,
          -2
        ],
        "36,26,-70@0": [
          -2,
          0,
          -1
        ],
        "36,26,-71@0": [
          -2,
          0,
          0
        ],
        "35,26,-72@0": [
          -1,
          0,
          -3
        ],
        "35,26,-73@0": [
          -1,
          0,
          -2
        ],
        "35,26,-74@0": [
          -1,
          0,
          -1
        ],
        "36,26,-72@0": [
          -2,
          0,
          -3
        ],
        "35,26,-75@0": [
          -1,
          0,
          -2
        ],
        "35,26,-76@0": [
          -1,
          0,
          -1
        ],
        "35,26,-77@0": [
          -1,
          0,
          0
        ],
        "35,26,-81@0": [
          3,
          -1,
          -2
        ],
        "36,26,-81@0": [
          2,
          -1,
          -2
        ],
        "36,26,-80@0": [
          2,
          -1,
          -3
        ],
        "23,26,-74@0": [
          0,
          -1,
          -4
        ],
        "7,26,-58@0": [
          0,
          -1,
          -4
        ],
        "7,26,-74@0": [
          0,
          -1,
          3
        ],
        "7,26,-17@0": [
          0,
          -1,
          -4
        ],
        "7,26,-62@0": [
          -1,
          -1,
          4
        ],
        "7,26,-61@0": [
          -1,
          -1,
          3
        ],
        "7,26,-63@0": [
          -1,
          -1,
          -3
        ],
        "7,26,-70@0": [
          -1,
          -1,
          4
        ],
        "7,26,-69@0": [
          -1,
          -1,
          3
        ],
        "7,26,-78@0": [
          -1,
          -1,
          4
        ],
        "7,26,-77@0": [
          -1,
          -1,
          3
        ],
        "7,26,-79@0": [
          2,
          -2,
          0
        ],
        "15,26,-78@0": [
          -1,
          -1,
          4
        ],
        "15,26,-77@0": [
          -1,
          -1,
          3
        ],
        "15,26,-70@0": [
          -1,
          -1,
          -4
        ],
        "15,26,-69@0": [
          -1,
          -1,
          3
        ],
        "15,26,-62@0": [
          -1,
          -1,
          -4
        ],
        "15,26,-61@0": [
          -1,
          -1,
          3
        ],
        "15,26,-54@0": [
          -1,
          -1,
          -4
        ],
        "23,26,-62@0": [
          -1,
          -1,
          4
        ],
        "23,26,-61@0": [
          -1,
          -1,
          3
        ],
        "23,26,-70@0": [
          -1,
          -1,
          4
        ],
        "23,26,-69@0": [
          -1,
          -1,
          3
        ],
        "23,26,-78@0": [
          -1,
          -1,
          4
        ],
        "23,26,-77@0": [
          -1,
          -1,
          3
        ],
        "31,26,-78@0": [
          -1,
          -1,
          4
        ],
        "31,26,-77@0": [
          -1,
          -1,
          3
        ],
        "31,26,-62@0": [
          -1,
          -1,
          -4
        ],
        "31,26,-54@0": [
          3,
          0,
          2
        ],
        "31,26,-53@0": [
          3,
          0,
          1
        ],
        "23,27,-50@0": [
          3,
          -1,
          1
        ],
        "15,27,-50@0": [
          3,
          0,
          2
        ],
        "19,27,-74@0": [
          3,
          -2,
          0
        ],
        "20,27,-74@0": [
          1,
          -2,
          0
        ],
        "14,27,-66@0": [
          0,
          -3,
          3
        ],
        "13,27,-66@0": [
          0,
          -3,
          3
        ],
        "12,27,-66@0": [
          0,
          -3,
          4
        ],
        "11,27,-66@0": [
          -3,
          -3,
          2
        ],
        "10,27,-66@0": [
          -2,
          -3,
          2
        ],
        "10,27,-67@0": [
          -2,
          -3,
          -3
        ],
        "10,27,-68@0": [
          -2,
          -3,
          -2
        ],
        "13,27,-74@0": [
          -3,
          -3,
          -1
        ],
        "12,27,-74@0": [
          -3,
          -3,
          -1
        ],
        "11,27,-74@0": [
          -2,
          -3,
          -2
        ],
        "10,27,-74@0": [
          -1,
          -3,
          -3
        ],
        "10,27,-75@0": [
          3,
          -3,
          -2
        ],
        "10,27,-76@0": [
          3,
          -3,
          -1
        ],
        "21,27,-74@0": [
          0,
          -3,
          -3
        ],
        "24,27,-74@0": [
          0,
          -3,
          -4
        ],
        "25,27,-74@0": [
          0,
          -3,
          -4
        ],
        "26,27,-74@0": [
          0,
          -3,
          -4
        ],
        "26,27,-75@0": [
          -1,
          -3,
          -3
        ],
        "26,27,-76@0": [
          -2,
          -3,
          -2
        ],
        "23,27,-67@0": [
          1,
          -3,
          -3
        ],
        "24,27,-66@0": [
          0,
          -3,
          -4
        ],
        "25,27,-66@0": [
          1,
          -3,
          -4
        ],
        "22,27,-66@0": [
          -1,
          -3,
          -3
        ],
        "21,27,-66@0": [
          0,
          -3,
          -3
        ],
        "20,27,-66@0": [
          -1,
          -3,
          -3
        ],
        "19,27,-66@0": [
          0,
          -3,
          -3
        ],
        "18,27,-66@0": [
          -1,
          -3,
          -3
        ],
        "18,27,-67@0": [
          -1,
          -3,
          -3
        ],
        "18,27,-68@0": [
          -1,
          -3,
          -3
        ],
        "17,27,-66@0": [
          0,
          -3,
          -4
        ],
        "11,27,-50@0": [
          -3,
          -1,
          1
        ],
        "10,27,-50@0": [
          -2,
          -1,
          1
        ],
        "14,27,-33@0": [
          0,
          -1,
          -1
        ],
        "13,27,-33@0": [
          -3,
          -1,
          -1
        ],
        "12,27,-33@0": [
          -2,
          -1,
          -1
        ],
        "11,27,-33@0": [
          -1,
          -1,
          -1
        ],
        "10,27,-33@0": [
          -3,
          -1,
          -1
        ],
        "51,26,-29@0": [
          1,
          -1,
          -4
        ],
        "51,26,-30@0": [
          1,
          -1,
          -3
        ],
        "61,22,-22@0": [
          -3,
          -1,
          -1
        ],
        "20,27,-9@0": [
          2,
          -3,
          -3
        ],
        "21,27,-9@0": [
          1,
          -3,
          -3
        ],
        "22,27,-9@0": [
          0,
          -3,
          -3
        ],
        "24,27,-9@0": [
          1,
          -3,
          -3
        ],
        "25,27,-9@0": [
          0,
          -3,
          -3
        ],
        "26,27,-9@0": [
          0,
          -3,
          -4
        ],
        "27,27,-9@0": [
          2,
          -3,
          -2
        ],
        "28,27,-9@0": [
          2,
          -3,
          -2
        ],
        "29,27,-9@0": [
          1,
          -3,
          -3
        ],
        "30,27,-9@0": [
          0,
          -3,
          -3
        ],
        "31,27,-8@0": [
          4,
          0,
          0
        ],
        "32,27,-9@0": [
          3,
          0,
          1
        ],
        "33,27,-9@0": [
          2,
          0,
          1
        ],
        "34,27,-9@0": [
          1,
          0,
          1
        ],
        "34,27,-8@0": [
          1,
          0,
          0
        ],
        "34,27,-7@0": [
          2,
          0,
          2
        ],
        "31,27,-71@0": [
          3,
          0,
          2
        ],
        "32,27,-71@0": [
          2,
          0,
          2
        ],
        "32,27,-70@0": [
          2,
          0,
          1
        ],
        "32,27,-69@0": [
          2,
          0,
          0
        ],
        "6,27,-70@0": [
          1,
          0,
          4
        ],
        "6,27,-69@0": [
          1,
          0,
          3
        ],
        "8,27,-54@0": [
          -1,
          0,
          4
        ],
        "8,27,-53@0": [
          -1,
          0,
          2
        ],
        "44,27,-62@0": [
          -4,
          -1,
          1
        ],
        "15,28,-55@0": [
          -1,
          0,
          -3
        ],
        "15,28,-63@0": [
          -3,
          0,
          -3
        ],
        "15,28,-71@0": [
          0,
          0,
          -3
        ],
        "7,28,-79@0": [
          0,
          0,
          4
        ],
        "26,28,-58@0": [
          -4,
          0,
          0
        ],
        "25,28,-58@0": [
          -3,
          0,
          0
        ],
        "24,28,-58@0": [
          -2,
          0,
          0
        ],
        "21,28,-58@0": [
          -3,
          0,
          0
        ],
        "20,28,-58@0": [
          -2,
          0,
          0
        ],
        "19,28,-58@0": [
          -1,
          0,
          0
        ],
        "16,28,-58@0": [
          -2,
          0,
          0
        ],
        "15,28,-58@0": [
          -2,
          0,
          0
        ],
        "10,28,-60@0": [
          2,
          0,
          2
        ],
        "13,28,-58@0": [
          -1,
          0,
          0
        ],
        "14,28,-58@0": [
          -2,
          0,
          0
        ],
        "10,28,-52@0": [
          1,
          0,
          2
        ],
        "10,28,-50@0": [
          -2,
          -1,
          2
        ],
        "11,28,-50@0": [
          -3,
          -1,
          2
        ],
        "12,28,-50@0": [
          -2,
          -1,
          2
        ],
        "13,28,-50@0": [
          -3,
          -1,
          2
        ],
        "14,28,-50@0": [
          -4,
          -1,
          2
        ],
        "15,28,-50@0": [
          -2,
          -1,
          2
        ],
        "16,28,-50@0": [
          -3,
          -1,
          2
        ],
        "18,28,-50@0": [
          -2,
          -1,
          2
        ],
        "19,28,-50@0": [
          -3,
          -1,
          2
        ],
        "20,28,-50@0": [
          -4,
          -1,
          2
        ],
        "21,28,-25@0": [
          -3,
          0,
          0
        ],
        "20,28,-25@0": [
          -2,
          0,
          0
        ],
        "19,28,-25@0": [
          -1,
          0,
          0
        ],
        "18,28,-23@0": [
          0,
          0,
          1
        ],
        "18,28,-25@0": [
          -3,
          0,
          0
        ],
        "16,28,-25@0": [
          -1,
          0,
          0
        ],
        "14,28,-25@0": [
          -3,
          0,
          0
        ],
        "13,28,-25@0": [
          -2,
          0,
          0
        ],
        "15,28,-25@0": [
          -4,
          0,
          0
        ],
        "10,28,-23@0": [
          -2,
          0,
          3
        ],
        "10,28,-15@0": [
          -2,
          0,
          3
        ],
        "10,28,-7@0": [
          -2,
          0,
          3
        ],
        "21,28,-50@0": [
          -2,
          0,
          0
        ],
        "22,28,-50@0": [
          -3,
          0,
          0
        ],
        "26,28,-50@0": [
          -3,
          0,
          0
        ],
        "26,28,-52@0": [
          -2,
          0,
          2
        ],
        "26,28,-60@0": [
          0,
          0,
          2
        ],
        "28,28,-58@0": [
          -2,
          0,
          0
        ],
        "29,28,-58@0": [
          -3,
          0,
          0
        ],
        "30,28,-58@0": [
          -4,
          0,
          0
        ],
        "26,28,-66@0": [
          -3,
          0,
          0
        ],
        "25,28,-66@0": [
          -2,
          0,
          0
        ],
        "22,28,-66@0": [
          -4,
          0,
          0
        ],
        "21,28,-66@0": [
          -3,
          0,
          0
        ],
        "20,28,-66@0": [
          -2,
          0,
          0
        ],
        "19,28,-66@0": [
          -1,
          0,
          0
        ],
        "16,28,-66@0": [
          -4,
          0,
          0
        ],
        "15,28,-66@0": [
          -3,
          0,
          0
        ],
        "14,28,-66@0": [
          -2,
          0,
          0
        ],
        "11,28,-66@0": [
          -1,
          0,
          -1
        ],
        "12,28,-66@0": [
          -2,
          0,
          -1
        ],
        "13,28,-66@0": [
          -3,
          0,
          -1
        ],
        "10,28,-68@0": [
          0,
          0,
          1
        ],
        "10,28,-66@0": [
          0,
          0,
          -1
        ],
        "10,28,-74@0": [
          -3,
          0,
          -1
        ],
        "11,28,-74@0": [
          -4,
          0,
          -1
        ],
        "10,28,-76@0": [
          0,
          0,
          2
        ],
        "12,28,-74@0": [
          -2,
          0,
          0
        ],
        "13,28,-74@0": [
          -3,
          0,
          0
        ],
        "14,28,-74@0": [
          -4,
          0,
          0
        ],
        "15,28,-74@0": [
          -3,
          0,
          0
        ],
        "16,28,-74@0": [
          -4,
          0,
          0
        ],
        "18,28,-74@0": [
          -3,
          0,
          0
        ],
        "19,28,-74@0": [
          -4,
          0,
          0
        ],
        "18,28,-76@0": [
          1,
          0,
          2
        ],
        "20,28,-74@0": [
          -1,
          0,
          0
        ],
        "21,28,-74@0": [
          -2,
          0,
          0
        ],
        "22,28,-74@0": [
          -3,
          0,
          0
        ],
        "23,28,-74@0": [
          -3,
          0,
          0
        ],
        "24,28,-74@0": [
          -4,
          0,
          0
        ],
        "25,28,-74@0": [
          -2,
          0,
          0
        ],
        "26,28,-74@0": [
          -3,
          0,
          0
        ],
        "26,28,-76@0": [
          -1,
          0,
          2
        ],
        "28,28,-74@0": [
          -3,
          0,
          0
        ],
        "26,28,-68@0": [
          0,
          0,
          2
        ],
        "28,28,-66@0": [
          -2,
          0,
          0
        ],
        "24,28,-66@0": [
          -2,
          0,
          0
        ],
        "23,28,-66@0": [
          -3,
          0,
          0
        ],
        "18,28,-66@0": [
          -4,
          0,
          0
        ],
        "18,28,-68@0": [
          0,
          0,
          2
        ],
        "29,28,-66@0": [
          -3,
          0,
          0
        ],
        "30,28,-66@0": [
          -4,
          0,
          0
        ],
        "31,28,-66@0": [
          -3,
          0,
          0
        ],
        "32,28,-66@0": [
          -4,
          0,
          0
        ],
        "29,28,-74@0": [
          -3,
          0,
          0
        ],
        "30,28,-74@0": [
          -4,
          0,
          0
        ],
        "31,28,-74@0": [
          -3,
          0,
          0
        ],
        "32,28,-74@0": [
          -4,
          0,
          0
        ],
        "42,28,-74@0": [
          -2,
          0,
          0
        ],
        "41,28,-74@0": [
          -1,
          0,
          0
        ],
        "51,28,-74@0": [
          -2,
          0,
          0
        ],
        "50,28,-74@0": [
          -1,
          0,
          0
        ],
        "52,28,-74@0": [
          -3,
          0,
          0
        ],
        "64,28,-76@0": [
          -2,
          0,
          2
        ],
        "56,28,-67@0": [
          2,
          0,
          -4
        ],
        "57,28,-66@0": [
          2,
          0,
          0
        ],
        "64,28,-67@0": [
          2,
          0,
          -2
        ],
        "18,28,-75@0": [
          -2,
          0,
          -2
        ],
        "18,28,-77@0": [
          -2,
          0,
          -2
        ],
        "17,28,-74@0": [
          -2,
          0,
          0
        ],
        "10,28,-67@0": [
          -2,
          0,
          -4
        ],
        "10,28,-75@0": [
          -2,
          0,
          -2
        ],
        "10,28,-59@0": [
          -2,
          0,
          -4
        ],
        "18,28,-67@0": [
          -2,
          0,
          -4
        ],
        "26,28,-75@0": [
          -2,
          0,
          -2
        ],
        "34,28,-75@0": [
          0,
          0,
          -2
        ],
        "56,28,-62@0": [
          2,
          0,
          -1
        ],
        "57,28,-62@0": [
          1,
          0,
          -4
        ],
        "57,28,-63@0": [
          1,
          0,
          -3
        ],
        "57,28,-78@0": [
          0,
          0,
          -1
        ],
        "31,28,-22@0": [
          3,
          0,
          -1
        ],
        "38,28,-74@0": [
          2,
          0,
          -2
        ],
        "36,28,-74@0": [
          -2,
          0,
          -2
        ],
        "36,28,-66@0": [
          -2,
          0,
          -2
        ],
        "26,28,-77@0": [
          -2,
          0,
          -2
        ],
        "25,28,-78@0": [
          0,
          0,
          -1
        ],
        "18,28,-69@0": [
          -2,
          0,
          -2
        ],
        "18,28,-70@0": [
          -2,
          0,
          -1
        ],
        "9,28,-71@0": [
          1,
          0,
          -3
        ],
        "8,28,-71@0": [
          2,
          0,
          -3
        ],
        "16,28,-71@0": [
          -1,
          0,
          -3
        ],
        "16,28,-70@0": [
          -1,
          0,
          -4
        ],
        "10,28,-77@0": [
          -2,
          0,
          -2
        ],
        "10,28,-78@0": [
          -2,
          0,
          -1
        ],
        "9,28,-78@0": [
          -1,
          0,
          -1
        ],
        "26,28,-61@0": [
          -2,
          0,
          -2
        ],
        "26,28,-62@0": [
          -2,
          0,
          -1
        ],
        "25,28,-62@0": [
          -1,
          0,
          -4
        ],
        "10,28,-61@0": [
          -2,
          0,
          -2
        ],
        "10,28,-62@0": [
          -2,
          0,
          -1
        ],
        "24,28,-63@0": [
          -1,
          0,
          -3
        ],
        "8,28,-62@0": [
          2,
          0,
          2
        ],
        "26,28,-69@0": [
          -2,
          0,
          -2
        ],
        "26,28,-70@0": [
          -2,
          0,
          -1
        ],
        "25,28,-70@0": [
          -1,
          0,
          -4
        ],
        "25,28,-71@0": [
          -1,
          0,
          -3
        ],
        "24,28,-71@0": [
          0,
          0,
          -3
        ],
        "24,28,-70@0": [
          0,
          0,
          -4
        ],
        "18,28,-53@0": [
          -2,
          0,
          -2
        ],
        "10,28,-53@0": [
          -2,
          0,
          -2
        ],
        "10,28,-54@0": [
          -2,
          0,
          -1
        ],
        "9,28,-54@0": [
          0,
          0,
          -1
        ],
        "34,28,-69@0": [
          1,
          -1,
          -1
        ],
        "24,29,-78@0": [
          2,
          -1,
          2
        ],
        "16,29,-78@0": [
          2,
          -1,
          2
        ],
        "16,29,-70@0": [
          2,
          -1,
          -4
        ],
        "34,28,-77@0": [
          1,
          -1,
          -1
        ],
        "33,28,-78@0": [
          0,
          0,
          -1
        ],
        "32,29,-78@0": [
          -1,
          0,
          -1
        ],
        "8,29,-54@0": [
          2,
          0,
          3
        ],
        "7,29,-54@0": [
          0,
          0,
          1
        ],
        "15,29,-62@0": [
          0,
          0,
          1
        ],
        "7,29,-70@0": [
          -1,
          -1,
          1
        ],
        "7,29,-62@0": [
          -1,
          -1,
          0
        ],
        "40,28,-69@0": [
          -2,
          -1,
          -3
        ],
        "41,28,-70@0": [
          1,
          0,
          -4
        ],
        "41,28,-71@0": [
          1,
          0,
          -3
        ],
        "42,28,-71@0": [
          0,
          0,
          -3
        ],
        "42,28,-70@0": [
          0,
          0,
          -4
        ],
        "42,29,-70@0": [
          0,
          -1,
          -4
        ],
        "43,29,-70@0": [
          1,
          -1,
          0
        ],
        "51,29,-54@0": [
          1,
          -1,
          1
        ],
        "8,27,-62@0": [
          2,
          -3,
          3
        ],
        "59,29,-54@0": [
          1,
          -1,
          0
        ],
        "66,27,-78@0": [
          -3,
          -3,
          1
        ],
        "67,27,-78@0": [
          -3,
          -3,
          1
        ],
        "70,22,-50@0": [
          -1,
          0,
          3
        ],
        "66,22,-58@0": [
          2,
          0,
          -1
        ],
        "66,22,-54@0": [
          2,
          0,
          1
        ],
        "61,24,-69@0": [
          3,
          0,
          2
        ],
        "65,22,-53@0": [
          3,
          0,
          2
        ],
        "64,22,-52@0": [
          4,
          0,
          1
        ],
        "69,22,-55@0": [
          -1,
          0,
          4
        ],
        "24,0,-42@0": [
          -1,
          0,
          -4
        ],
        "23,0,-42@0": [
          0,
          0,
          -4
        ],
        "33,0,-32@0": [
          -1,
          0,
          -4
        ],
        "32,0,-32@0": [
          3,
          0,
          -1
        ],
        "34,0,-32@0": [
          1,
          0,
          -1
        ],
        "34,0,-34@0": [
          1,
          0,
          1
        ],
        "35,0,-34@0": [
          4,
          0,
          1
        ],
        "36,0,-34@0": [
          3,
          0,
          1
        ],
        "36,0,-32@0": [
          3,
          0,
          -1
        ],
        "37,0,-32@0": [
          2,
          0,
          -1
        ],
        "38,0,-32@0": [
          1,
          0,
          -1
        ],
        "40,0,-34@0": [
          3,
          0,
          1
        ],
        "42,0,-34@0": [
          1,
          0,
          1
        ],
        "42,0,-32@0": [
          1,
          0,
          -1
        ],
        "43,0,-32@0": [
          4,
          0,
          -1
        ],
        "44,0,-32@0": [
          3,
          0,
          -1
        ],
        "45,0,-32@0": [
          2,
          0,
          -1
        ],
        "46,0,-32@0": [
          1,
          0,
          -1
        ],
        "47,0,-32@0": [
          3,
          0,
          -2
        ],
        "48,0,-32@0": [
          2,
          0,
          -2
        ],
        "48,0,-34@0": [
          2,
          0,
          0
        ],
        "48,1,-32@0": [
          0,
          -1,
          1
        ],
        "47,1,-32@0": [
          0,
          -1,
          1
        ],
        "46,1,-32@0": [
          0,
          -1,
          1
        ],
        "45,1,-32@0": [
          0,
          -1,
          1
        ],
        "44,1,-32@0": [
          1,
          -1,
          1
        ],
        "43,1,-32@0": [
          0,
          -1,
          1
        ],
        "42,1,-32@0": [
          1,
          -1,
          1
        ],
        "42,1,-33@0": [
          -2,
          -1,
          -2
        ],
        "41,1,-33@0": [
          -1,
          -1,
          -2
        ],
        "40,1,-33@0": [
          0,
          -1,
          -2
        ],
        "39,1,-33@0": [
          0,
          -1,
          -4
        ],
        "38,1,-33@0": [
          0,
          -1,
          -4
        ],
        "37,1,-33@0": [
          3,
          0,
          -1
        ],
        "36,1,-33@0": [
          4,
          0,
          -1
        ],
        "35,1,-33@0": [
          -2,
          0,
          -1
        ],
        "34,1,-33@0": [
          -1,
          0,
          -1
        ],
        "33,1,-33@0": [
          0,
          0,
          -1
        ],
        "34,1,-34@0": [
          0,
          -1,
          -1
        ],
        "48,1,-50@0": [
          0,
          -1,
          4
        ],
        "48,1,-49@0": [
          1,
          -1,
          0
        ],
        "47,1,-49@0": [
          0,
          -1,
          1
        ],
        "46,1,-49@0": [
          0,
          -1,
          1
        ],
        "45,1,-49@0": [
          1,
          -1,
          1
        ],
        "42,1,-49@0": [
          0,
          -1,
          1
        ],
        "42,2,-49@0": [
          2,
          0,
          -2
        ],
        "43,2,-49@0": [
          1,
          0,
          -2
        ],
        "44,2,-49@0": [
          0,
          0,
          -2
        ],
        "45,2,-49@0": [
          -1,
          0,
          -2
        ],
        "46,2,-34@0": [
          2,
          0,
          2
        ],
        "48,2,-34@0": [
          0,
          0,
          2
        ],
        "48,2,-32@0": [
          -1,
          0,
          -2
        ],
        "47,2,-32@0": [
          0,
          0,
          -2
        ],
        "41,5,-50@0": [
          0,
          0,
          1
        ],
        "42,5,-50@0": [
          -1,
          0,
          1
        ],
        "40,5,-50@0": [
          1,
          0,
          1
        ],
        "44,5,-47@0": [
          3,
          0,
          -3
        ],
        "45,5,-47@0": [
          2,
          0,
          -3
        ],
        "55,5,-31@0": [
          0,
          -1,
          -4
        ],
        "55,5,-32@0": [
          0,
          -1,
          -3
        ],
        "56,5,-31@0": [
          0,
          -1,
          -1
        ],
        "25,6,-33@0": [
          0,
          0,
          -3
        ],
        "24,6,-33@0": [
          1,
          0,
          -3
        ],
        "24,6,-34@0": [
          1,
          0,
          -2
        ],
        "23,6,-34@0": [
          2,
          0,
          -2
        ],
        "23,6,-35@0": [
          2,
          0,
          -1
        ],
        "22,6,-36@0": [
          3,
          0,
          0
        ],
        "18,6,-41@0": [
          0,
          0,
          -2
        ],
        "19,6,-42@0": [
          -1,
          0,
          -1
        ],
        "17,6,-42@0": [
          1,
          0,
          -1
        ],
        "45,7,-34@0": [
          4,
          0,
          0
        ],
        "46,7,-34@0": [
          3,
          0,
          0
        ],
        "20,9,-37@0": [
          -3,
          0,
          0
        ],
        "19,9,-37@0": [
          -2,
          0,
          0
        ],
        "18,9,-37@0": [
          -1,
          0,
          0
        ],
        "15,9,-37@0": [
          2,
          0,
          0
        ],
        "18,9,-41@0": [
          -1,
          0,
          4
        ],
        "16,9,-37@0": [
          1,
          0,
          0
        ],
        "51,10,-44@0": [
          3,
          0,
          -1
        ],
        "51,10,-42@0": [
          3,
          0,
          -3
        ],
        "32,10,-39@0": [
          3,
          0,
          -2
        ],
        "1,10,-49@0": [
          2,
          0,
          3
        ],
        "73,10,-82@0": [
          0,
          0,
          4
        ],
        "74,10,-80@0": [
          -1,
          0,
          3
        ],
        "74,10,-79@0": [
          -1,
          0,
          2
        ],
        "74,10,-78@0": [
          -1,
          0,
          1
        ],
        "74,10,-77@0": [
          -1,
          0,
          0
        ],
        "74,10,-76@0": [
          -1,
          0,
          3
        ],
        "74,10,-75@0": [
          -1,
          0,
          2
        ],
        "74,10,-74@0": [
          -1,
          0,
          1
        ],
        "74,10,-73@0": [
          -1,
          0,
          0
        ],
        "74,10,-72@0": [
          -1,
          0,
          3
        ],
        "74,10,-71@0": [
          -1,
          0,
          2
        ],
        "74,10,-70@0": [
          -1,
          0,
          1
        ],
        "74,10,-69@0": [
          -1,
          0,
          0
        ],
        "74,10,-68@0": [
          -1,
          0,
          3
        ],
        "74,10,-67@0": [
          -1,
          0,
          2
        ],
        "74,10,-66@0": [
          -1,
          0,
          1
        ],
        "74,10,-65@0": [
          -1,
          0,
          0
        ],
        "74,10,-60@0": [
          -1,
          0,
          3
        ],
        "74,10,-59@0": [
          -1,
          0,
          2
        ],
        "74,10,-58@0": [
          -1,
          0,
          1
        ],
        "74,10,-57@0": [
          -1,
          0,
          0
        ],
        "74,10,-56@0": [
          -1,
          0,
          3
        ],
        "74,10,-55@0": [
          -1,
          0,
          2
        ],
        "74,10,-54@0": [
          -1,
          0,
          1
        ],
        "74,10,-53@0": [
          -1,
          0,
          0
        ],
        "74,10,-52@0": [
          -1,
          0,
          2
        ],
        "74,10,-51@0": [
          -1,
          0,
          1
        ],
        "74,10,-50@0": [
          -1,
          0,
          3
        ],
        "74,11,-47@0": [
          -1,
          -1,
          0
        ],
        "74,11,-46@0": [
          -1,
          -1,
          -1
        ],
        "74,11,-48@0": [
          -1,
          -1,
          1
        ],
        "73,11,-49@0": [
          0,
          -1,
          2
        ],
        "74,11,-44@0": [
          -1,
          -1,
          -3
        ],
        "74,11,-45@0": [
          -1,
          -1,
          -2
        ],
        "74,11,-43@0": [
          -2,
          -1,
          -3
        ],
        "73,11,-42@0": [
          -1,
          -1,
          -4
        ],
        "0,10,-27@0": [
          1,
          0,
          3
        ],
        "0,10,-26@0": [
          1,
          0,
          2
        ],
        "0,10,-25@0": [
          1,
          0,
          1
        ],
        "0,10,-24@0": [
          1,
          0,
          0
        ],
        "0,10,-23@0": [
          1,
          0,
          0
        ],
        "0,10,-21@0": [
          1,
          0,
          3
        ],
        "0,10,-20@0": [
          1,
          0,
          2
        ],
        "0,10,-19@0": [
          1,
          0,
          1
        ],
        "0,10,-18@0": [
          1,
          0,
          0
        ],
        "0,10,-17@0": [
          1,
          0,
          3
        ],
        "0,10,-16@0": [
          1,
          0,
          2
        ],
        "0,10,-15@0": [
          1,
          0,
          1
        ],
        "0,10,-14@0": [
          1,
          0,
          0
        ],
        "0,10,-13@0": [
          1,
          0,
          3
        ],
        "0,10,-12@0": [
          1,
          0,
          2
        ],
        "0,10,-11@0": [
          1,
          0,
          1
        ],
        "0,10,-10@0": [
          1,
          0,
          0
        ],
        "0,10,-9@0": [
          1,
          0,
          3
        ],
        "0,10,-8@0": [
          1,
          0,
          2
        ],
        "0,10,-7@0": [
          1,
          0,
          1
        ],
        "0,10,-6@0": [
          1,
          0,
          0
        ],
        "0,10,-5@0": [
          1,
          0,
          3
        ],
        "0,10,-4@0": [
          1,
          0,
          2
        ],
        "0,10,-3@0": [
          1,
          0,
          1
        ],
        "0,10,-2@0": [
          1,
          0,
          0
        ],
        "1,11,-1@0": [
          0,
          -1,
          -1
        ],
        "0,11,-3@0": [
          1,
          -1,
          1
        ],
        "0,11,-4@0": [
          1,
          -1,
          2
        ],
        "0,11,-2@0": [
          1,
          -1,
          0
        ],
        "0,11,-5@0": [
          1,
          -1,
          -2
        ],
        "0,11,-6@0": [
          1,
          -1,
          2
        ],
        "40,11,-1@0": [
          -3,
          -1,
          -2
        ],
        "39,11,0@0": [
          -2,
          -1,
          -3
        ],
        "19,12,-44@0": [
          3,
          0,
          2
        ],
        "61,12,-39@0": [
          4,
          -2,
          1
        ],
        "29,12,-44@0": [
          3,
          0,
          3
        ],
        "30,12,-44@0": [
          3,
          0,
          2
        ],
        "28,12,-43@0": [
          2,
          0,
          1
        ],
        "30,12,-43@0": [
          0,
          0,
          1
        ],
        "31,12,-43@0": [
          -1,
          0,
          1
        ],
        "34,12,-43@0": [
          -4,
          0,
          1
        ],
        "34,12,-40@0": [
          -4,
          0,
          -2
        ],
        "33,12,-40@0": [
          -3,
          0,
          -2
        ],
        "32,12,-40@0": [
          -2,
          0,
          -2
        ],
        "31,12,-40@0": [
          -1,
          0,
          -2
        ],
        "30,12,-40@0": [
          0,
          0,
          -2
        ],
        "26,12,-43@0": [
          1,
          0,
          1
        ],
        "27,12,-43@0": [
          0,
          0,
          1
        ],
        "24,12,-43@0": [
          1,
          0,
          2
        ],
        "23,12,-43@0": [
          -2,
          0,
          2
        ],
        "22,12,-43@0": [
          -1,
          0,
          2
        ],
        "21,12,-43@0": [
          0,
          0,
          2
        ],
        "20,12,-43@0": [
          1,
          0,
          2
        ],
        "21,12,-40@0": [
          0,
          0,
          -1
        ],
        "22,12,-40@0": [
          -1,
          0,
          -1
        ],
        "24,12,-40@0": [
          -3,
          0,
          -1
        ],
        "52,12,-40@0": [
          1,
          0,
          -1
        ],
        "51,12,-39@0": [
          2,
          0,
          -2
        ],
        "50,12,-40@0": [
          3,
          0,
          -1
        ],
        "49,12,-40@0": [
          -1,
          0,
          -2
        ],
        "48,12,-40@0": [
          0,
          0,
          -2
        ],
        "46,12,-40@0": [
          2,
          0,
          -2
        ],
        "45,12,-43@0": [
          3,
          0,
          1
        ],
        "44,12,-43@0": [
          -2,
          0,
          2
        ],
        "43,12,-43@0": [
          -1,
          0,
          2
        ],
        "42,12,-43@0": [
          0,
          0,
          2
        ],
        "41,12,-43@0": [
          1,
          0,
          2
        ],
        "42,12,-40@0": [
          0,
          0,
          -1
        ],
        "43,12,-40@0": [
          -1,
          0,
          -1
        ],
        "40,12,-40@0": [
          2,
          0,
          -1
        ],
        "39,12,-43@0": [
          3,
          0,
          2
        ],
        "40,12,-43@0": [
          -2,
          0,
          2
        ],
        "36,12,-43@0": [
          2,
          0,
          2
        ],
        "35,12,-43@0": [
          2,
          0,
          2
        ],
        "47,12,-40@0": [
          -1,
          0,
          -2
        ],
        "55,13,-40@0": [
          -3,
          -1,
          -2
        ],
        "55,13,-39@0": [
          -3,
          -1,
          -3
        ],
        "56,13,-39@0": [
          4,
          0,
          -1
        ],
        "57,13,-39@0": [
          3,
          0,
          -1
        ],
        "58,13,-39@0": [
          2,
          0,
          -1
        ],
        "59,13,-40@0": [
          1,
          0,
          0
        ],
        "59,13,-41@0": [
          1,
          0,
          1
        ],
        "59,13,-42@0": [
          1,
          0,
          2
        ],
        "59,13,-39@0": [
          1,
          0,
          -1
        ],
        "60,13,-39@0": [
          0,
          0,
          -1
        ],
        "74,13,-43@0": [
          0,
          0,
          2
        ],
        "32,13,-40@0": [
          -4,
          -1,
          -1
        ],
        "31,13,-40@0": [
          -3,
          -1,
          -1
        ],
        "31,13,-39@0": [
          -3,
          -1,
          -2
        ],
        "32,13,-39@0": [
          -3,
          -1,
          -2
        ],
        "33,13,-40@0": [
          -4,
          -1,
          -1
        ],
        "33,13,-39@0": [
          -3,
          -1,
          -2
        ],
        "20,13,-43@0": [
          4,
          -1,
          1
        ],
        "20,13,-44@0": [
          3,
          -1,
          2
        ],
        "57,14,-45@0": [
          -2,
          0,
          0
        ],
        "56,14,-45@0": [
          -1,
          0,
          0
        ],
        "0,15,-42@0": [
          0,
          0,
          -4
        ],
        "0,15,-43@0": [
          0,
          0,
          -3
        ],
        "0,15,-44@0": [
          0,
          0,
          -2
        ],
        "0,15,-47@0": [
          0,
          0,
          1
        ],
        "1,15,-82@0": [
          -1,
          0,
          4
        ],
        "41,15,-82@0": [
          0,
          0,
          3
        ],
        "42,15,-82@0": [
          3,
          0,
          -1
        ],
        "43,15,-82@0": [
          2,
          0,
          -1
        ],
        "44,15,-82@0": [
          1,
          0,
          -1
        ],
        "45,15,-82@0": [
          0,
          0,
          -1
        ],
        "48,15,-82@0": [
          3,
          0,
          -1
        ],
        "49,15,-82@0": [
          2,
          0,
          -1
        ],
        "55,15,-82@0": [
          2,
          0,
          -1
        ],
        "56,15,-82@0": [
          1,
          0,
          -1
        ],
        "57,15,-82@0": [
          0,
          0,
          -1
        ],
        "3,15,-82@0": [
          0,
          0,
          -1
        ],
        "2,15,-82@0": [
          1,
          0,
          -1
        ],
        "1,15,-79@0": [
          -1,
          0,
          3
        ],
        "1,15,-78@0": [
          -1,
          0,
          2
        ],
        "1,15,-77@0": [
          -1,
          0,
          1
        ],
        "1,15,-76@0": [
          -1,
          0,
          0
        ],
        "1,15,-74@0": [
          -1,
          0,
          3
        ],
        "1,15,-73@0": [
          -1,
          0,
          2
        ],
        "1,15,-72@0": [
          -1,
          0,
          1
        ],
        "1,15,-71@0": [
          -1,
          0,
          0
        ],
        "1,15,-51@0": [
          -1,
          0,
          -3
        ],
        "1,15,-52@0": [
          -1,
          0,
          -2
        ],
        "1,15,-53@0": [
          -1,
          0,
          -1
        ],
        "1,15,-54@0": [
          -1,
          0,
          0
        ],
        "1,15,-59@0": [
          -1,
          0,
          -3
        ],
        "1,15,-60@0": [
          -1,
          0,
          -2
        ],
        "1,15,-61@0": [
          -1,
          0,
          -1
        ],
        "1,15,-62@0": [
          -1,
          0,
          0
        ],
        "43,15,-1@0": [
          3,
          0,
          1
        ],
        "72,15,-1@0": [
          -3,
          0,
          1
        ],
        "71,15,-1@0": [
          -2,
          0,
          1
        ],
        "70,15,-1@0": [
          -1,
          0,
          1
        ],
        "69,15,-1@0": [
          0,
          0,
          1
        ],
        "64,15,-1@0": [
          -3,
          0,
          1
        ],
        "63,15,-1@0": [
          -2,
          0,
          1
        ],
        "57,15,-1@0": [
          -3,
          0,
          1
        ],
        "55,15,-1@0": [
          -1,
          0,
          1
        ],
        "54,15,-1@0": [
          0,
          0,
          1
        ],
        "52,15,-1@0": [
          -3,
          0,
          1
        ],
        "51,15,-1@0": [
          -2,
          0,
          1
        ],
        "50,15,-1@0": [
          -1,
          0,
          1
        ],
        "49,15,-1@0": [
          0,
          0,
          1
        ],
        "47,15,-1@0": [
          -3,
          0,
          1
        ],
        "45,15,-1@0": [
          -1,
          0,
          1
        ],
        "73,15,-2@0": [
          1,
          0,
          -2
        ],
        "73,15,-3@0": [
          1,
          0,
          -1
        ],
        "1,15,-15@0": [
          -1,
          0,
          -3
        ],
        "1,15,-16@0": [
          -1,
          0,
          -2
        ],
        "1,15,-17@0": [
          -1,
          0,
          -1
        ],
        "1,15,-18@0": [
          -1,
          0,
          0
        ],
        "1,15,-19@0": [
          -1,
          0,
          1
        ],
        "6,16,-56@0": [
          2,
          0,
          -2
        ],
        "6,16,-65@0": [
          -1,
          0,
          -3
        ],
        "25,17,-51@0": [
          -4,
          0,
          0
        ],
        "18,17,-50@0": [
          3,
          0,
          -1
        ],
        "19,17,-53@0": [
          2,
          0,
          2
        ],
        "22,17,-50@0": [
          -1,
          0,
          -1
        ],
        "18,17,-52@0": [
          3,
          0,
          1
        ],
        "16,17,-50@0": [
          -4,
          0,
          -2
        ],
        "56,16,-13@0": [
          0,
          0,
          -4
        ],
        "57,16,-14@0": [
          -1,
          0,
          -3
        ],
        "55,16,-14@0": [
          1,
          0,
          -3
        ],
        "69,17,-55@0": [
          4,
          -1,
          0
        ],
        "62,18,-54@0": [
          -1,
          0,
          -1
        ],
        "52,18,-35@0": [
          -3,
          0,
          3
        ],
        "69,17,-12@0": [
          -2,
          0,
          -1
        ],
        "68,17,-13@0": [
          -1,
          0,
          0
        ],
        "66,17,-13@0": [
          1,
          0,
          0
        ],
        "69,17,-14@0": [
          -2,
          0,
          1
        ],
        "68,18,-13@0": [
          -1,
          -1,
          0
        ],
        "28,18,-29@0": [
          -3,
          0,
          3
        ],
        "29,18,-34@0": [
          1,
          0,
          -1
        ],
        "30,18,-35@0": [
          0,
          0,
          2
        ],
        "57,18,-20@0": [
          3,
          0,
          -1
        ],
        "62,18,-23@0": [
          -2,
          0,
          2
        ],
        "61,18,-24@0": [
          -1,
          0,
          3
        ],
        "57,18,-22@0": [
          3,
          0,
          1
        ],
        "60,18,-25@0": [
          0,
          0,
          4
        ],
        "39,18,0@0": [
          -3,
          0,
          0
        ],
        "38,18,0@0": [
          -2,
          0,
          0
        ],
        "37,18,0@0": [
          -1,
          0,
          0
        ],
        "0,18,-43@0": [
          1,
          0,
          3
        ],
        "0,18,-42@0": [
          1,
          0,
          3
        ],
        "1,18,-43@0": [
          0,
          0,
          4
        ],
        "1,18,-40@0": [
          0,
          0,
          1
        ],
        "0,18,-40@0": [
          1,
          0,
          1
        ],
        "0,18,-39@0": [
          1,
          0,
          0
        ],
        "0,18,-38@0": [
          1,
          0,
          -1
        ],
        "2,18,-38@0": [
          -1,
          0,
          -1
        ],
        "1,18,-36@0": [
          0,
          0,
          -3
        ],
        "0,18,-36@0": [
          1,
          0,
          -3
        ],
        "0,18,-37@0": [
          1,
          0,
          -2
        ],
        "0,18,-41@0": [
          1,
          0,
          2
        ],
        "2,18,-45@0": [
          -1,
          -1,
          0
        ],
        "2,18,-46@0": [
          -1,
          -1,
          1
        ],
        "1,19,-44@0": [
          1,
          0,
          -1
        ],
        "1,19,-43@0": [
          1,
          0,
          -2
        ],
        "0,19,-45@0": [
          2,
          0,
          0
        ],
        "0,19,-46@0": [
          2,
          0,
          1
        ],
        "0,19,-47@0": [
          2,
          0,
          2
        ],
        "1,19,-47@0": [
          1,
          0,
          2
        ],
        "2,19,-46@0": [
          0,
          0,
          1
        ],
        "13,21,-58@0": [
          0,
          -1,
          3
        ],
        "12,21,-58@0": [
          1,
          -1,
          3
        ],
        "13,21,-57@0": [
          0,
          -1,
          2
        ],
        "5,19,-49@0": [
          3,
          0,
          -1
        ],
        "27,19,-77@0": [
          -1,
          0,
          3
        ],
        "6,22,-66@0": [
          1,
          0,
          1
        ],
        "5,22,-65@0": [
          2,
          0,
          0
        ],
        "27,20,-77@0": [
          -3,
          -1,
          -3
        ],
        "5,20,-75@0": [
          -1,
          0,
          -1
        ],
        "3,20,-75@0": [
          1,
          0,
          -1
        ],
        "10,20,-25@0": [
          -2,
          0,
          0
        ],
        "66,22,-56@0": [
          -3,
          -1,
          3
        ],
        "55,19,-53@0": [
          1,
          0,
          3
        ],
        "53,21,-30@0": [
          0,
          0,
          -2
        ],
        "55,21,-32@0": [
          -2,
          0,
          0
        ],
        "49,22,-71@0": [
          1,
          0,
          -4
        ],
        "40,21,-13@0": [
          0,
          0,
          -2
        ],
        "44,22,-17@0": [
          -3,
          0,
          -1
        ],
        "45,22,-14@0": [
          1,
          0,
          -1
        ],
        "46,22,-13@0": [
          0,
          0,
          -2
        ],
        "34,22,-33@0": [
          -3,
          0,
          -1
        ],
        "40,21,-1@0": [
          -4,
          -1,
          -1
        ],
        "39,21,0@0": [
          -3,
          -1,
          -2
        ],
        "38,21,0@0": [
          -2,
          -1,
          -2
        ],
        "37,21,0@0": [
          -1,
          -1,
          -2
        ],
        "36,21,0@0": [
          0,
          -1,
          -2
        ],
        "35,21,0@0": [
          1,
          -1,
          -2
        ],
        "0,22,-45@0": [
          2,
          0,
          0
        ],
        "0,22,-44@0": [
          2,
          0,
          -1
        ],
        "0,22,-43@0": [
          2,
          0,
          -2
        ],
        "0,22,-42@0": [
          2,
          0,
          -3
        ],
        "0,22,-41@0": [
          2,
          0,
          -3
        ],
        "0,22,-38@0": [
          2,
          0,
          -2
        ],
        "0,22,-39@0": [
          2,
          0,
          -1
        ],
        "0,22,-40@0": [
          2,
          0,
          0
        ],
        "0,22,-37@0": [
          2,
          0,
          -3
        ],
        "1,22,-37@0": [
          1,
          0,
          -3
        ],
        "12,23,-61@0": [
          0,
          0,
          -1
        ],
        "11,23,-61@0": [
          1,
          0,
          -1
        ],
        "14,23,-63@0": [
          -2,
          0,
          1
        ],
        "14,23,-64@0": [
          -2,
          0,
          2
        ],
        "13,23,-66@0": [
          -1,
          0,
          4
        ],
        "24,23,-65@0": [
          -3,
          0,
          -1
        ],
        "19,23,-67@0": [
          2,
          0,
          1
        ],
        "19,23,-69@0": [
          2,
          0,
          3
        ],
        "20,23,-69@0": [
          1,
          0,
          3
        ],
        "21,23,-66@0": [
          0,
          0,
          3
        ],
        "34,23,-82@0": [
          -1,
          0,
          3
        ],
        "35,23,-83@0": [
          3,
          0,
          0
        ],
        "36,23,-83@0": [
          2,
          0,
          0
        ],
        "39,23,-83@0": [
          -1,
          0,
          0
        ],
        "26,23,-53@0": [
          -2,
          0,
          3
        ],
        "7,23,-65@0": [
          0,
          -2,
          -1
        ],
        "17,23,-32@0": [
          -1,
          -3,
          1
        ],
        "41,23,-6@0": [
          1,
          -1,
          0
        ],
        "57,23,-24@0": [
          2,
          -2,
          0
        ],
        "21,0,-42@0": [
          -2,
          0,
          -2
        ],
        "38,0,-49@0": [
          2,
          0,
          2
        ],
        "37,0,-49@0": [
          3,
          0,
          2
        ],
        "40,0,-51@0": [
          3,
          0,
          -2
        ],
        "43,1,-51@0": [
          -1,
          0,
          0
        ],
        "43,1,-50@0": [
          -2,
          0,
          1
        ],
        "42,1,-50@0": [
          -1,
          0,
          1
        ],
        "41,1,-50@0": [
          0,
          0,
          1
        ],
        "26,1,-50@0": [
          3,
          0,
          1
        ],
        "27,1,-50@0": [
          2,
          0,
          1
        ],
        "28,1,-50@0": [
          1,
          0,
          1
        ],
        "29,1,-50@0": [
          0,
          0,
          1
        ],
        "30,1,-50@0": [
          3,
          0,
          1
        ],
        "17,2,-42@0": [
          2,
          0,
          -1
        ],
        "18,2,-41@0": [
          1,
          0,
          -2
        ],
        "23,2,-43@0": [
          -4,
          0,
          0
        ],
        "27,3,-48@0": [
          -2,
          0,
          3
        ],
        "23,4,-52@0": [
          -2,
          0,
          2
        ],
        "23,4,-48@0": [
          -2,
          0,
          -2
        ],
        "25,4,-49@0": [
          0,
          0,
          -1
        ],
        "24,4,-49@0": [
          1,
          0,
          -1
        ],
        "23,4,-49@0": [
          2,
          0,
          -1
        ],
        "19,4,-25@0": [
          1,
          0,
          -3
        ],
        "18,4,-41@0": [
          3,
          -1,
          -1
        ],
        "54,5,-26@0": [
          2,
          -1,
          0
        ],
        "55,5,-26@0": [
          1,
          -1,
          0
        ],
        "56,5,-26@0": [
          0,
          -1,
          -3
        ],
        "56,5,-27@0": [
          0,
          -1,
          -2
        ],
        "56,5,-28@0": [
          0,
          -1,
          -1
        ],
        "56,5,-29@0": [
          0,
          -1,
          -3
        ],
        "56,5,-30@0": [
          0,
          -1,
          -2
        ],
        "53,5,-28@0": [
          1,
          -1,
          -3
        ],
        "53,5,-29@0": [
          1,
          -1,
          -2
        ],
        "53,5,-30@0": [
          1,
          -1,
          -1
        ],
        "54,5,-30@0": [
          0,
          -1,
          -1
        ],
        "54,5,-31@0": [
          0,
          -1,
          -4
        ],
        "22,5,-49@0": [
          2,
          -1,
          3
        ],
        "22,5,-48@0": [
          2,
          -1,
          2
        ],
        "22,5,-47@0": [
          2,
          -1,
          1
        ],
        "23,5,-47@0": [
          1,
          -1,
          1
        ],
        "24,5,-47@0": [
          0,
          -1,
          1
        ],
        "25,5,-47@0": [
          0,
          -2,
          2
        ],
        "19,5,-31@0": [
          3,
          -1,
          0
        ],
        "19,5,-26@0": [
          -1,
          -1,
          1
        ],
        "18,5,-26@0": [
          0,
          -1,
          1
        ],
        "46,6,-53@0": [
          0,
          0,
          3
        ],
        "47,6,-53@0": [
          -1,
          0,
          3
        ],
        "47,6,-52@0": [
          -1,
          0,
          2
        ],
        "48,6,-51@0": [
          -2,
          0,
          1
        ],
        "27,6,-74@0": [
          -4,
          0,
          0
        ],
        "26,6,-74@0": [
          -3,
          0,
          0
        ],
        "25,6,-74@0": [
          -2,
          0,
          0
        ],
        "24,6,-74@0": [
          -1,
          0,
          0
        ],
        "22,6,-75@0": [
          1,
          0,
          1
        ],
        "23,6,-75@0": [
          0,
          0,
          1
        ],
        "11,7,-2@0": [
          0,
          0,
          -4
        ],
        "11,7,-3@0": [
          0,
          0,
          -3
        ],
        "11,7,-4@0": [
          0,
          0,
          -2
        ],
        "11,7,-5@0": [
          0,
          0,
          -1
        ],
        "18,7,-41@0": [
          0,
          0,
          4
        ],
        "43,7,-77@0": [
          4,
          0,
          0
        ],
        "44,7,-77@0": [
          3,
          0,
          0
        ],
        "45,7,-77@0": [
          2,
          0,
          0
        ],
        "46,7,-77@0": [
          1,
          0,
          0
        ],
        "45,7,-75@0": [
          2,
          0,
          -2
        ],
        "45,7,-76@0": [
          2,
          0,
          -1
        ],
        "46,7,-76@0": [
          1,
          0,
          -1
        ],
        "1,9,-26@0": [
          0,
          0,
          4
        ],
        "1,9,-22@0": [
          0,
          0,
          -3
        ],
        "1,9,-24@0": [
          0,
          0,
          0
        ],
        "58,9,-37@0": [
          -3,
          0,
          0
        ],
        "57,9,-37@0": [
          -2,
          0,
          0
        ],
        "54,9,-37@0": [
          1,
          0,
          0
        ],
        "56,9,-37@0": [
          -3,
          0,
          0
        ],
        "55,9,-37@0": [
          -2,
          0,
          0
        ],
        "52,9,-37@0": [
          1,
          0,
          0
        ],
        "73,8,-18@0": [
          -2,
          0,
          -3
        ],
        "8,9,-41@0": [
          0,
          0,
          4
        ],
        "8,9,-40@0": [
          0,
          0,
          3
        ],
        "8,9,-39@0": [
          0,
          0,
          2
        ],
        "8,9,-38@0": [
          0,
          0,
          1
        ],
        "48,10,0@0": [
          3,
          0,
          -1
        ],
        "49,10,0@0": [
          2,
          0,
          -1
        ],
        "50,10,0@0": [
          1,
          0,
          -1
        ],
        "51,10,0@0": [
          0,
          0,
          -1
        ],
        "52,10,0@0": [
          3,
          0,
          -1
        ],
        "53,10,0@0": [
          2,
          0,
          -1
        ],
        "54,10,0@0": [
          1,
          0,
          -1
        ],
        "55,10,0@0": [
          0,
          0,
          -1
        ],
        "56,10,0@0": [
          3,
          0,
          -1
        ],
        "57,10,0@0": [
          3,
          0,
          -1
        ],
        "58,10,0@0": [
          2,
          0,
          -1
        ],
        "59,10,0@0": [
          1,
          0,
          -1
        ],
        "60,10,0@0": [
          0,
          0,
          -1
        ],
        "61,10,0@0": [
          3,
          0,
          -1
        ],
        "62,10,0@0": [
          2,
          0,
          -1
        ],
        "63,10,0@0": [
          1,
          0,
          -1
        ],
        "64,10,0@0": [
          0,
          0,
          -1
        ],
        "65,10,0@0": [
          3,
          0,
          -1
        ],
        "66,10,0@0": [
          2,
          0,
          -1
        ],
        "67,10,0@0": [
          1,
          0,
          -1
        ],
        "68,10,0@0": [
          0,
          0,
          -1
        ],
        "69,10,0@0": [
          2,
          0,
          -1
        ],
        "70,10,0@0": [
          1,
          0,
          -1
        ],
        "71,10,0@0": [
          0,
          0,
          -1
        ],
        "72,10,0@0": [
          1,
          0,
          -3
        ],
        "74,11,-3@0": [
          -1,
          -1,
          0
        ],
        "74,11,-2@0": [
          -1,
          -1,
          -1
        ],
        "74,11,-4@0": [
          -1,
          -1,
          1
        ],
        "74,11,-5@0": [
          -1,
          -1,
          2
        ],
        "74,11,-7@0": [
          -1,
          -1,
          4
        ],
        "73,11,-1@0": [
          0,
          -1,
          -2
        ],
        "72,11,0@0": [
          1,
          -1,
          -3
        ],
        "71,11,0@0": [
          2,
          -1,
          -3
        ],
        "70,11,0@0": [
          3,
          -1,
          -3
        ],
        "0,10,-35@0": [
          2,
          0,
          -3
        ],
        "0,10,-36@0": [
          2,
          0,
          -2
        ],
        "0,10,-37@0": [
          2,
          0,
          -1
        ],
        "0,10,-38@0": [
          2,
          0,
          0
        ],
        "0,10,-39@0": [
          2,
          0,
          -4
        ],
        "0,10,-40@0": [
          2,
          0,
          -3
        ],
        "0,10,-41@0": [
          2,
          0,
          -2
        ],
        "0,10,-42@0": [
          2,
          0,
          -1
        ],
        "0,10,-43@0": [
          2,
          0,
          -3
        ],
        "0,10,-44@0": [
          2,
          0,
          -2
        ],
        "0,10,-45@0": [
          2,
          0,
          -1
        ],
        "0,11,-41@0": [
          3,
          -1,
          -1
        ],
        "0,11,-40@0": [
          3,
          -1,
          -1
        ],
        "0,11,-39@0": [
          3,
          -1,
          -2
        ],
        "0,11,-42@0": [
          3,
          -1,
          1
        ],
        "0,11,-43@0": [
          3,
          -1,
          2
        ],
        "59,11,-44@0": [
          -4,
          0,
          1
        ],
        "59,11,-39@0": [
          -4,
          0,
          -1
        ],
        "60,11,-39@0": [
          -2,
          0,
          0
        ],
        "55,11,-39@0": [
          3,
          0,
          0
        ],
        "55,11,-40@0": [
          3,
          0,
          1
        ],
        "56,11,-39@0": [
          2,
          0,
          0
        ],
        "57,11,-39@0": [
          1,
          0,
          0
        ],
        "60,11,-40@0": [
          -2,
          0,
          1
        ],
        "19,12,-42@0": [
          3,
          0,
          0
        ],
        "19,12,-41@0": [
          3,
          0,
          -1
        ],
        "19,12,-40@0": [
          3,
          0,
          -2
        ],
        "19,12,-39@0": [
          3,
          0,
          -3
        ],
        "0,12,-19@0": [
          0,
          0,
          -3
        ],
        "0,12,-20@0": [
          0,
          0,
          -2
        ],
        "0,12,-21@0": [
          0,
          0,
          -1
        ],
        "0,12,-23@0": [
          0,
          0,
          1
        ],
        "0,12,-24@0": [
          0,
          0,
          -3
        ],
        "0,12,-25@0": [
          0,
          0,
          -2
        ],
        "0,12,-26@0": [
          0,
          0,
          -1
        ],
        "0,12,-28@0": [
          0,
          0,
          1
        ],
        "0,12,-29@0": [
          0,
          0,
          -3
        ],
        "0,12,-30@0": [
          0,
          0,
          -3
        ],
        "0,12,-31@0": [
          0,
          0,
          -2
        ],
        "0,12,-32@0": [
          0,
          0,
          -1
        ],
        "1,12,-34@0": [
          -1,
          0,
          1
        ],
        "0,12,-35@0": [
          0,
          0,
          2
        ],
        "0,12,-37@0": [
          0,
          0,
          -3
        ],
        "0,12,-38@0": [
          0,
          0,
          -2
        ],
        "0,12,-41@0": [
          0,
          0,
          1
        ],
        "59,12,0@0": [
          0,
          -2,
          -1
        ],
        "15,12,-43@0": [
          1,
          -2,
          1
        ],
        "39,12,-39@0": [
          2,
          -2,
          2
        ],
        "39,12,-40@0": [
          2,
          0,
          -1
        ],
        "38,12,-40@0": [
          -1,
          0,
          -2
        ],
        "18,13,-40@0": [
          2,
          0,
          -2
        ],
        "18,13,-39@0": [
          2,
          0,
          -3
        ],
        "19,13,-39@0": [
          1,
          0,
          -3
        ],
        "19,13,-40@0": [
          1,
          0,
          -2
        ],
        "18,13,-41@0": [
          2,
          0,
          -1
        ],
        "14,13,-43@0": [
          0,
          0,
          -1
        ],
        "16,13,-40@0": [
          0,
          -3,
          0
        ],
        "39,13,-40@0": [
          1,
          -1,
          -2
        ],
        "40,13,-40@0": [
          0,
          -1,
          -2
        ],
        "40,13,-39@0": [
          0,
          -1,
          -3
        ],
        "39,13,-39@0": [
          1,
          -1,
          -3
        ],
        "19,14,-42@0": [
          1,
          -1,
          0
        ],
        "17,14,-42@0": [
          3,
          -1,
          1
        ],
        "17,14,-41@0": [
          3,
          -1,
          0
        ],
        "17,14,-40@0": [
          3,
          -1,
          -1
        ],
        "17,14,-39@0": [
          3,
          -1,
          -2
        ],
        "15,14,-40@0": [
          0,
          0,
          1
        ],
        "6,13,-34@0": [
          1,
          -3,
          -3
        ]
      },
      "lockedSpecs": {
        "25,0,-34@0": "observer-b",
        "27,0,-34@0": "observer-b",
        "26,0,-34@0": "observer-b",
        "38,0,-51@0": "observer-b",
        "37,0,-51@0": "observer-b",
        "32,1,-50@0": "free",
        "33,1,-50@0": "free",
        "26,1,-50@0": "free",
        "27,1,-50@0": "free",
        "28,1,-50@0": "free",
        "29,1,-50@0": "free",
        "36,1,-50@0": "free",
        "37,1,-50@0": "free",
        "39,1,-51@0": "observer-b",
        "30,1,-51@0": "observer-b",
        "36,2,-32@0": "crafter-a",
        "35,2,-32@0": "crafter-a",
        "34,2,-32@0": "crafter-a",
        "37,2,-34@0": "crafter-a",
        "38,2,-34@0": "crafter-a",
        "36,2,-34@0": "crafter-a",
        "19,2,-27@0": "free",
        "28,2,-35@0": "hopper",
        "27,2,-35@0": "hopper",
        "26,2,-35@0": "hopper",
        "24,3,-47@0": "free",
        "24,3,-46@0": "free",
        "24,3,-45@0": "free",
        "24,3,-44@0": "free",
        "24,3,-43@0": "free",
        "24,3,-42@0": "free",
        "19,3,-42@0": "free",
        "18,3,-41@0": "free",
        "18,3,-43@0": "free",
        "24,3,-41@0": "free",
        "24,3,-40@0": "free",
        "24,3,-39@0": "free",
        "24,3,-38@0": "free",
        "24,3,-37@0": "free",
        "23,3,-33@0": "free",
        "24,3,-33@0": "free",
        "24,3,-34@0": "free",
        "24,3,-35@0": "free",
        "24,3,-36@0": "free",
        "24,3,-32@0": "free",
        "25,3,-33@0": "free",
        "32,3,-34@0": "crafter-a",
        "38,3,-34@0": "crafter-a",
        "23,3,-31@0": "free",
        "30,3,-52@0": "hopper",
        "31,3,-52@0": "hopper",
        "33,4,-49@0": "free",
        "36,4,-50@0": "free",
        "25,4,-48@0": "free",
        "24,4,-48@0": "free",
        "18,4,-43@0": "free",
        "17,4,-42@0": "free",
        "25,4,-35@0": "free",
        "25,4,-34@0": "free",
        "24,4,-34@0": "free",
        "32,4,-33@0": "free",
        "27,4,-33@0": "free",
        "26,4,-33@0": "free",
        "37,4,-34@0": "hopper",
        "39,4,-34@0": "hopper",
        "38,4,-34@0": "hopper",
        "40,4,-34@0": "hopper",
        "40,4,-35@0": "hopper",
        "39,4,-35@0": "hopper",
        "38,4,-35@0": "hopper",
        "37,4,-35@0": "hopper",
        "35,4,-34@0": "hopper",
        "34,4,-31@0": "hopper",
        "32,4,-31@0": "hopper",
        "31,4,-31@0": "hopper",
        "30,4,-31@0": "hopper",
        "29,4,-31@0": "hopper",
        "27,4,-31@0": "hopper",
        "28,4,-31@0": "hopper",
        "28,4,-35@0": "hopper",
        "37,4,-31@0": "hopper",
        "38,4,-31@0": "hopper",
        "39,4,-31@0": "hopper",
        "40,4,-48@0": "hopper",
        "35,4,-48@0": "hopper",
        "35,5,-50@0": "free",
        "33,5,-50@0": "free",
        "52,5,-54@0": "free",
        "50,5,-53@0": "free",
        "49,5,-53@0": "free",
        "48,5,-53@0": "free",
        "47,5,-53@0": "free",
        "46,5,-53@0": "free",
        "45,5,-53@0": "free",
        "44,5,-53@0": "free",
        "43,5,-53@0": "free",
        "41,5,-53@0": "free",
        "40,5,-53@0": "free",
        "39,5,-53@0": "free",
        "38,5,-53@0": "free",
        "37,5,-53@0": "free",
        "36,5,-53@0": "free",
        "35,5,-53@0": "free",
        "34,5,-53@0": "free",
        "33,5,-53@0": "free",
        "24,5,-47@0": "free",
        "23,5,-47@0": "free",
        "22,5,-47@0": "free",
        "22,5,-48@0": "free",
        "22,5,-49@0": "free",
        "20,5,-52@0": "free",
        "21,5,-53@0": "free",
        "21,5,-54@0": "free",
        "22,5,-54@0": "free",
        "15,5,-15@0": "free",
        "14,5,-15@0": "free",
        "14,5,-16@0": "free",
        "14,5,-17@0": "free",
        "13,5,-17@0": "free",
        "12,5,-17@0": "free",
        "12,5,-18@0": "free",
        "11,5,-18@0": "free",
        "28,5,-16@0": "free",
        "29,5,-16@0": "free",
        "24,5,-27@0": "free",
        "23,5,-27@0": "free",
        "22,5,-27@0": "free",
        "21,5,-27@0": "free",
        "21,5,-25@0": "free",
        "21,5,-26@0": "free",
        "20,5,-25@0": "free",
        "20,5,-26@0": "free",
        "20,5,-27@0": "free",
        "20,5,-28@0": "free",
        "20,5,-29@0": "free",
        "20,5,-30@0": "free",
        "20,5,-31@0": "free",
        "17,5,-29@0": "free",
        "17,5,-30@0": "free",
        "18,5,-30@0": "free",
        "18,5,-31@0": "free",
        "28,5,-34@0": "free",
        "29,5,-34@0": "free",
        "40,5,-34@0": "free",
        "39,5,-34@0": "free",
        "41,5,-34@0": "free",
        "39,5,-35@0": "fluid",
        "34,5,-31@0": "fluid",
        "31,5,-34@0": "fluid",
        "27,5,-32@0": "fluid",
        "47,5,-34@0": "fluid",
        "42,5,-51@0": "fluid",
        "61,6,-52@0": "free",
        "61,6,-53@0": "free",
        "61,6,-54@0": "free",
        "61,6,-55@0": "free",
        "60,6,-53@0": "free",
        "60,6,-54@0": "free",
        "60,6,-55@0": "free",
        "63,6,-58@0": "free",
        "63,6,-57@0": "free",
        "62,6,-57@0": "free",
        "72,6,-63@0": "free",
        "30,6,-25@0": "free",
        "30,6,-26@0": "free",
        "30,6,-27@0": "free",
        "30,6,-28@0": "free",
        "31,6,-27@0": "free",
        "45,7,-47@0": "free",
        "13,7,-47@0": "free",
        "1,7,-19@0": "free",
        "1,7,-20@0": "free",
        "52,7,-1@0": "free",
        "37,8,-66@0": "free",
        "40,8,-81@0": "free",
        "41,8,-81@0": "free",
        "32,8,-81@0": "free",
        "31,8,-81@0": "free",
        "30,8,-81@0": "free",
        "14,8,-46@0": "free",
        "13,8,-46@0": "free",
        "12,8,-46@0": "free",
        "11,8,-46@0": "free",
        "9,8,-46@0": "free",
        "37,9,-20@0": "free",
        "37,9,-19@0": "free",
        "37,9,-17@0": "free",
        "37,9,-18@0": "free",
        "37,9,-16@0": "free",
        "37,9,-14@0": "free",
        "37,9,-15@0": "free",
        "37,9,-13@0": "free",
        "37,9,-11@0": "free",
        "37,9,-12@0": "free",
        "48,9,-82@0": "free",
        "60,9,-82@0": "free",
        "61,9,-82@0": "free",
        "73,9,-31@0": "free",
        "73,9,-32@0": "free",
        "73,9,-33@0": "free",
        "73,9,-34@0": "free",
        "73,9,-37@0": "free",
        "71,9,-37@0": "free",
        "72,9,-39@0": "free",
        "71,9,-39@0": "free",
        "71,9,-40@0": "free",
        "73,9,-38@0": "free",
        "73,9,-39@0": "free",
        "73,9,-40@0": "free",
        "72,9,-40@0": "free",
        "70,9,-39@0": "free",
        "70,9,-40@0": "free",
        "68,9,-40@0": "free",
        "68,9,-41@0": "free",
        "68,9,-42@0": "free",
        "68,9,-43@0": "free",
        "69,9,-43@0": "free",
        "69,9,-42@0": "free",
        "67,9,-42@0": "free",
        "67,9,-43@0": "free",
        "66,9,-45@0": "free",
        "65,9,-45@0": "free",
        "73,9,-46@0": "free",
        "73,9,-45@0": "free",
        "73,9,-47@0": "free",
        "59,9,-42@0": "free",
        "55,9,-42@0": "free",
        "50,9,-42@0": "free",
        "47,9,-44@0": "free",
        "48,9,-44@0": "free",
        "48,9,-43@0": "free",
        "39,9,-42@0": "free",
        "38,9,-38@0": "free",
        "38,9,-39@0": "free",
        "40,9,-39@0": "free",
        "39,9,-39@0": "free",
        "36,9,-42@0": "free",
        "35,9,-41@0": "free",
        "38,9,-42@0": "free",
        "18,9,-40@0": "free",
        "17,9,-41@0": "free",
        "34,10,-1@0": "free",
        "48,10,-39@0": "free",
        "49,10,-39@0": "free",
        "50,10,-41@0": "free",
        "49,10,-41@0": "free",
        "48,10,-41@0": "free",
        "47,10,-41@0": "free",
        "46,10,-41@0": "free",
        "46,10,-42@0": "free",
        "50,10,-42@0": "free",
        "53,10,-42@0": "free",
        "74,10,-42@0": "free",
        "74,10,-41@0": "free",
        "75,10,-41@0": "free",
        "74,10,-43@0": "free",
        "74,10,-44@0": "free",
        "74,10,-45@0": "free",
        "74,10,-46@0": "free",
        "74,10,-47@0": "free",
        "74,10,-48@0": "free",
        "0,11,-77@0": "free",
        "0,11,-76@0": "free",
        "0,11,-73@0": "free",
        "2,10,-83@0": "free",
        "4,11,-83@0": "free",
        "5,11,-83@0": "free",
        "0,11,-75@0": "free",
        "0,11,-74@0": "free",
        "0,11,-70@0": "free",
        "0,11,-69@0": "free",
        "0,11,-67@0": "free",
        "0,11,-68@0": "free",
        "0,11,-66@0": "free",
        "0,11,-64@0": "free",
        "0,11,-65@0": "free",
        "0,11,-63@0": "free",
        "0,11,-59@0": "free",
        "0,11,-60@0": "free",
        "0,11,-58@0": "free",
        "0,11,-38@0": "free",
        "12,11,-40@0": "stairs-bottom",
        "13,11,-39@0": "free",
        "12,11,-39@0": "stairs-bottom",
        "21,11,-39@0": "free",
        "20,11,-39@0": "free",
        "18,11,-41@0": "free",
        "34,11,-39@0": "free",
        "35,11,-39@0": "free",
        "44,11,-41@0": "free",
        "46,11,-42@0": "free",
        "45,11,-42@0": "free",
        "50,11,-42@0": "free",
        "56,11,-44@0": "free",
        "55,11,-43@0": "free",
        "47,11,-40@0": "wall-attach",
        "51,11,-40@0": "wall-attach",
        "44,11,-43@0": "wall-attach",
        "41,11,-40@0": "wall-attach",
        "38,11,-43@0": "wall-attach",
        "76,11,-41@0": "free",
        "74,12,-37@0": "free",
        "74,12,-33@0": "free",
        "74,12,-32@0": "free",
        "74,12,-31@0": "free",
        "74,12,-28@0": "free",
        "75,11,-41@0": "floor",
        "74,12,-40@0": "free",
        "74,12,-42@0": "free",
        "74,12,-41@0": "free",
        "74,12,-30@0": "free",
        "74,12,-29@0": "free",
        "74,12,-25@0": "free",
        "74,12,-26@0": "free",
        "74,12,-27@0": "free",
        "74,12,-24@0": "free",
        "74,12,-23@0": "free",
        "74,12,-15@0": "free",
        "74,12,-14@0": "free",
        "42,12,0@0": "free",
        "43,12,0@0": "free",
        "21,12,-44@0": "chest-sneak",
        "25,12,-44@0": "chest-sneak",
        "28,12,-44@0": "chest-sneak",
        "23,12,-39@0": "chest-sneak",
        "55,13,-39@0": "free",
        "56,13,-39@0": "free",
        "58,13,-39@0": "free",
        "57,13,-39@0": "free",
        "59,13,-39@0": "free",
        "59,13,-40@0": "free",
        "59,13,-41@0": "free",
        "59,13,-42@0": "free",
        "60,13,-42@0": "stairs-bottom",
        "59,13,-43@0": "free",
        "57,13,-44@0": "free",
        "58,13,-44@0": "free",
        "59,13,-44@0": "free",
        "60,13,-44@0": "stairs-bottom",
        "56,13,-44@0": "free",
        "60,13,-41@0": "stairs-bottom",
        "60,13,-39@0": "stairs-bottom",
        "60,13,-40@0": "stairs-bottom",
        "60,13,-43@0": "stairs-bottom",
        "74,13,-41@0": "free",
        "74,13,-35@0": "free",
        "73,13,-34@0": "free",
        "74,13,-33@0": "free",
        "74,13,-32@0": "free",
        "74,13,-31@0": "free",
        "74,13,-29@0": "free",
        "74,13,-30@0": "free",
        "74,13,-36@0": "free",
        "74,13,-28@0": "free",
        "74,13,-24@0": "free",
        "74,13,-21@0": "free",
        "74,13,-22@0": "free",
        "74,13,-23@0": "free",
        "74,13,-20@0": "free",
        "74,13,-18@0": "free",
        "74,13,-19@0": "free",
        "74,13,-17@0": "free",
        "74,13,-15@0": "free",
        "74,13,-16@0": "free",
        "74,13,-14@0": "free",
        "74,13,-12@0": "free",
        "74,13,-13@0": "free",
        "74,13,-11@0": "free",
        "74,13,-9@0": "free",
        "74,13,-10@0": "free",
        "74,13,-6@0": "free",
        "74,13,-5@0": "free",
        "74,13,-3@0": "free",
        "74,13,-4@0": "free",
        "74,13,-2@0": "free",
        "70,13,0@0": "free",
        "69,13,0@0": "free",
        "67,13,0@0": "free",
        "68,13,0@0": "free",
        "66,13,0@0": "free",
        "64,13,0@0": "free",
        "65,13,0@0": "free",
        "63,13,0@0": "free",
        "61,13,0@0": "free",
        "62,13,0@0": "free",
        "60,13,0@0": "free",
        "56,13,0@0": "free",
        "55,13,0@0": "free",
        "53,13,0@0": "free",
        "54,13,0@0": "free",
        "49,13,0@0": "free",
        "48,13,0@0": "free",
        "46,13,0@0": "free",
        "47,13,0@0": "free",
        "45,13,0@0": "free",
        "43,13,0@0": "free",
        "44,13,0@0": "free",
        "42,13,0@0": "free",
        "41,13,0@0": "free",
        "39,13,0@0": "free",
        "40,13,-1@0": "free",
        "0,13,-16@0": "free",
        "0,13,-17@0": "free",
        "52,13,0@0": "free",
        "43,13,-44@0": "hopper",
        "43,13,-43@0": "hopper",
        "42,13,-43@0": "hopper",
        "42,13,-44@0": "hopper",
        "40,13,-43@0": "hopper",
        "39,13,-43@0": "hopper",
        "39,13,-44@0": "hopper",
        "38,13,-44@0": "hopper",
        "38,13,-43@0": "hopper",
        "57,13,-40@0": "slab-top",
        "57,13,-41@0": "slab-top",
        "56,13,-41@0": "free",
        "57,14,-39@0": "free",
        "57,14,-40@0": "free",
        "57,14,-41@0": "free",
        "57,14,-42@0": "free",
        "57,14,-43@0": "free",
        "57,14,-44@0": "free",
        "58,14,-44@0": "free",
        "58,14,-43@0": "free",
        "58,14,-42@0": "free",
        "58,14,-41@0": "free",
        "58,14,-40@0": "free",
        "59,14,-40@0": "stairs-bottom",
        "58,14,-39@0": "free",
        "38,13,-40@0": "hopper",
        "38,13,-39@0": "hopper",
        "37,13,-40@0": "hopper",
        "45,13,-40@0": "hopper",
        "45,13,-39@0": "hopper",
        "46,13,-39@0": "hopper",
        "0,14,-25@0": "free",
        "0,14,-24@0": "free",
        "0,14,-23@0": "free",
        "14,14,0@0": "free",
        "18,14,-40@0": "trapdoor-side",
        "19,14,-41@0": "free",
        "20,14,-41@0": "free",
        "22,14,-38@0": "free",
        "21,14,-38@0": "free",
        "20,14,-38@0": "free",
        "19,14,-38@0": "free",
        "18,14,-38@0": "free",
        "17,14,-38@0": "free",
        "16,14,-38@0": "free",
        "16,14,-45@0": "free",
        "36,14,-45@0": "free",
        "35,14,-45@0": "free",
        "34,14,-42@0": "free",
        "34,14,-41@0": "free",
        "33,14,-42@0": "free",
        "33,14,-41@0": "free",
        "32,14,-41@0": "free",
        "53,14,-41@0": "free",
        "53,14,-42@0": "free",
        "54,14,-42@0": "free",
        "55,14,-42@0": "free",
        "54,14,-41@0": "free",
        "55,14,-41@0": "free",
        "52,14,-42@0": "free",
        "51,14,-42@0": "free",
        "50,14,-42@0": "free",
        "33,14,-38@0": "free",
        "34,14,-38@0": "free",
        "32,14,-38@0": "free",
        "46,14,-39@0": "free",
        "47,14,-39@0": "free",
        "48,14,-39@0": "free",
        "49,14,-39@0": "free",
        "50,14,-40@0": "free",
        "51,14,-40@0": "free",
        "52,14,-40@0": "free",
        "18,14,-50@0": "free",
        "30,14,-50@0": "free",
        "19,14,-32@0": "free",
        "18,14,-32@0": "free",
        "18,14,-31@0": "free",
        "17,14,-32@0": "free",
        "30,14,-48@0": "free",
        "33,14,-49@0": "free",
        "16,14,-50@0": "free",
        "14,14,-50@0": "free",
        "12,14,-50@0": "free",
        "33,14,-62@0": "free",
        "33,14,-63@0": "free",
        "34,14,-62@0": "free",
        "8,14,-50@0": "free",
        "24,14,-65@0": "free",
        "25,14,-65@0": "free",
        "24,14,-66@0": "free",
        "23,14,-65@0": "free",
        "28,14,-69@0": "free",
        "29,14,-69@0": "free",
        "28,14,-70@0": "free",
        "5,14,-66@0": "free",
        "6,14,-66@0": "free",
        "10,14,-66@0": "free",
        "9,14,-69@0": "free",
        "9,14,-71@0": "free",
        "16,14,-72@0": "free",
        "16,14,-74@0": "free",
        "22,14,-79@0": "free",
        "23,14,-79@0": "free",
        "3,14,-75@0": "free",
        "3,14,-59@0": "free",
        "3,14,-67@0": "free",
        "32,14,-80@0": "free",
        "16,14,-80@0": "free",
        "8,14,-80@0": "free",
        "51,14,-34@0": "free",
        "50,14,-34@0": "free",
        "49,14,-34@0": "free",
        "50,14,-33@0": "free",
        "25,14,-30@0": "free",
        "24,14,-29@0": "free",
        "49,14,-51@0": "free",
        "4,14,-77@0": "free",
        "5,14,-77@0": "free",
        "4,14,-78@0": "free",
        "6,14,-78@0": "free",
        "69,14,-49@0": "free",
        "70,14,-50@0": "free",
        "42,14,-66@0": "free",
        "57,14,-61@0": "free",
        "57,14,-63@0": "free",
        "56,14,-62@0": "free",
        "60,14,-63@0": "free",
        "60,14,-64@0": "free",
        "66,14,-64@0": "free",
        "66,14,-66@0": "free",
        "61,14,-65@0": "free",
        "61,14,-66@0": "free",
        "60,14,-66@0": "free",
        "46,14,-74@0": "free",
        "57,14,-70@0": "free",
        "56,14,-70@0": "free",
        "57,14,-71@0": "free",
        "58,14,-70@0": "free",
        "52,14,-71@0": "free",
        "51,14,-71@0": "free",
        "52,14,-72@0": "free",
        "41,14,-79@0": "free",
        "53,14,-74@0": "free",
        "52,14,-74@0": "free",
        "53,14,-75@0": "free",
        "47,14,-77@0": "free",
        "46,14,-78@0": "free",
        "56,14,-75@0": "free",
        "65,14,-77@0": "free",
        "63,14,-77@0": "free",
        "62,14,-77@0": "free",
        "66,14,-78@0": "free",
        "64,14,-78@0": "free",
        "65,14,-79@0": "free",
        "60,14,-79@0": "free",
        "42,14,-80@0": "free",
        "66,14,-80@0": "free",
        "71,14,-32@0": "free",
        "41,14,-34@0": "free",
        "70,14,-29@0": "free",
        "69,14,-30@0": "free",
        "48,14,-24@0": "free",
        "45,14,-25@0": "free",
        "46,14,-25@0": "free",
        "69,14,-25@0": "free",
        "68,14,-25@0": "free",
        "69,14,-24@0": "free",
        "65,14,-16@0": "free",
        "65,14,-14@0": "free",
        "64,14,-13@0": "free",
        "65,14,-13@0": "free",
        "66,14,-13@0": "free",
        "52,14,-12@0": "free",
        "51,14,-12@0": "free",
        "50,14,-10@0": "free",
        "42,14,-9@0": "free",
        "64,14,-7@0": "free",
        "49,14,-6@0": "free",
        "50,14,-5@0": "free",
        "9,14,-29@0": "free",
        "10,14,-29@0": "free",
        "8,14,-29@0": "free",
        "8,14,-33@0": "free",
        "7,14,-34@0": "free",
        "13,14,-26@0": "free",
        "13,14,-25@0": "free",
        "12,14,-25@0": "free",
        "13,14,-24@0": "free",
        "5,14,-28@0": "free",
        "3,14,-32@0": "free",
        "4,14,-31@0": "free",
        "4,14,-30@0": "free",
        "4,14,-29@0": "free",
        "28,14,-21@0": "free",
        "9,14,-22@0": "free",
        "9,14,-21@0": "free",
        "10,14,-21@0": "free",
        "8,14,-21@0": "free",
        "6,14,-19@0": "free",
        "5,14,-20@0": "free",
        "5,14,-18@0": "free",
        "33,14,-14@0": "free",
        "33,14,-13@0": "free",
        "32,14,-13@0": "free",
        "27,14,-6@0": "free",
        "28,14,-5@0": "free",
        "18,14,-9@0": "free",
        "18,14,-8@0": "free",
        "19,14,-8@0": "free",
        "18,14,-7@0": "free",
        "19,14,-6@0": "free",
        "20,14,-5@0": "free",
        "17,14,-6@0": "free",
        "17,14,-5@0": "free",
        "18,14,-5@0": "free",
        "22,14,-4@0": "free",
        "23,14,-4@0": "free",
        "31,14,-4@0": "free",
        "4,14,-14@0": "free",
        "4,14,-13@0": "free",
        "5,14,-14@0": "free",
        "6,14,-13@0": "free",
        "13,14,-4@0": "free",
        "70,13,-67@0": "free",
        "68,13,-34@0": "free",
        "7,13,-23@0": "free",
        "10,13,-30@0": "free",
        "14,13,-34@0": "free",
        "13,13,-29@0": "free",
        "18,13,-30@0": "free",
        "17,13,-33@0": "free",
        "15,13,-31@0": "free",
        "10,13,-22@0": "free",
        "34,13,-22@0": "free",
        "31,13,-23@0": "free",
        "29,13,-29@0": "free",
        "25,13,-33@0": "free",
        "25,13,-25@0": "free",
        "6,13,-10@0": "free",
        "8,13,-12@0": "free",
        "12,13,-16@0": "free",
        "26,13,-30@0": "free",
        "41,13,-33@0": "free",
        "45,13,-29@0": "free",
        "49,13,-33@0": "free",
        "61,13,-29@0": "free",
        "58,13,-28@0": "free",
        "62,13,-24@0": "free",
        "68,13,-18@0": "free",
        "65,13,-9@0": "free",
        "61,13,-13@0": "free",
        "70,13,-8@0": "free",
        "62,13,-16@0": "free",
        "60,13,-18@0": "free",
        "54,13,-24@0": "free",
        "41,13,-25@0": "free",
        "42,13,-28@0": "free",
        "46,13,-24@0": "free",
        "52,13,-18@0": "free",
        "62,13,-8@0": "free",
        "46,13,-16@0": "free",
        "42,13,-20@0": "free",
        "46,13,-8@0": "free",
        "50,13,-4@0": "free",
        "51,13,-7@0": "free",
        "41,13,-9@0": "free",
        "17,13,-25@0": "free",
        "34,13,-30@0": "free",
        "9,13,-33@0": "free",
        "5,13,-29@0": "free",
        "7,13,-31@0": "free",
        "73,15,-82@0": "free",
        "73,15,-1@0": "free",
        "40,15,-44@0": "free",
        "39,15,-44@0": "free",
        "38,15,-44@0": "free",
        "37,15,-44@0": "free",
        "36,15,-44@0": "free",
        "35,15,-44@0": "free",
        "36,15,-39@0": "free",
        "37,15,-39@0": "free",
        "38,15,-39@0": "free",
        "39,15,-39@0": "free",
        "34,15,-44@0": "free",
        "34,15,-39@0": "free",
        "35,15,-39@0": "free",
        "33,15,-40@0": "free",
        "33,15,-44@0": "free",
        "32,15,-43@0": "free",
        "31,15,-43@0": "free",
        "32,15,-40@0": "free",
        "24,15,-44@0": "free",
        "23,15,-44@0": "free",
        "22,15,-44@0": "free",
        "21,15,-44@0": "free",
        "20,15,-44@0": "free",
        "20,15,-39@0": "free",
        "21,15,-39@0": "free",
        "22,15,-39@0": "free",
        "23,15,-39@0": "free",
        "18,15,-41@0": "free",
        "18,15,-44@0": "free",
        "25,15,-43@0": "free",
        "26,15,-43@0": "free",
        "27,15,-43@0": "free",
        "28,15,-43@0": "free",
        "26,15,-40@0": "free",
        "27,15,-40@0": "free",
        "28,15,-40@0": "free",
        "25,15,-39@0": "free",
        "24,15,-39@0": "free",
        "29,15,-40@0": "free",
        "30,15,-40@0": "free",
        "29,15,-43@0": "free",
        "30,15,-43@0": "free",
        "31,15,-40@0": "free",
        "43,15,-82@0": "free",
        "45,15,-82@0": "free",
        "46,15,-82@0": "free",
        "47,15,-82@0": "free",
        "48,15,-82@0": "free",
        "49,15,-82@0": "free",
        "50,15,-82@0": "free",
        "51,15,-82@0": "free",
        "52,15,-82@0": "free",
        "53,15,-82@0": "free",
        "54,15,-82@0": "free",
        "55,15,-82@0": "free",
        "56,15,-82@0": "free",
        "57,15,-82@0": "free",
        "58,15,-82@0": "free",
        "59,15,-82@0": "free",
        "60,15,-82@0": "free",
        "61,15,-82@0": "free",
        "62,15,-82@0": "free",
        "63,15,-82@0": "free",
        "64,15,-82@0": "free",
        "67,15,-82@0": "free",
        "69,15,-82@0": "free",
        "70,15,-82@0": "free",
        "71,15,-82@0": "free",
        "72,15,-82@0": "free",
        "73,15,-81@0": "free",
        "73,15,-79@0": "free",
        "73,15,-78@0": "free",
        "73,15,-77@0": "free",
        "73,15,-76@0": "free",
        "73,15,-75@0": "free",
        "73,15,-74@0": "free",
        "73,15,-73@0": "free",
        "73,15,-72@0": "free",
        "73,15,-71@0": "free",
        "73,15,-70@0": "free",
        "73,15,-69@0": "free",
        "73,15,-68@0": "free",
        "73,15,-66@0": "free",
        "73,15,-63@0": "free",
        "73,15,-62@0": "free",
        "73,15,-61@0": "free",
        "73,15,-60@0": "free",
        "73,15,-59@0": "free",
        "73,15,-58@0": "free",
        "73,15,-57@0": "free",
        "73,15,-56@0": "free",
        "73,15,-55@0": "free",
        "73,15,-54@0": "free",
        "73,15,-53@0": "free",
        "73,15,-50@0": "free",
        "73,15,-51@0": "free",
        "73,15,-52@0": "free",
        "73,15,-47@0": "free",
        "73,15,-46@0": "free",
        "58,15,-45@0": "free",
        "55,15,-44@0": "free",
        "54,15,-44@0": "free",
        "53,15,-44@0": "free",
        "56,15,-42@0": "free",
        "56,15,-41@0": "free",
        "56,15,-40@0": "free",
        "56,15,-39@0": "free",
        "54,15,-39@0": "free",
        "53,15,-39@0": "free",
        "52,15,-39@0": "free",
        "51,15,-39@0": "free",
        "50,15,-39@0": "free",
        "49,15,-40@0": "free",
        "48,15,-40@0": "free",
        "47,15,-40@0": "free",
        "46,15,-40@0": "free",
        "45,15,-40@0": "free",
        "47,15,-43@0": "free",
        "48,15,-43@0": "free",
        "49,15,-44@0": "free",
        "50,15,-44@0": "free",
        "46,15,-43@0": "free",
        "45,15,-43@0": "free",
        "51,15,-44@0": "free",
        "52,15,-44@0": "free",
        "44,15,-43@0": "free",
        "43,15,-43@0": "free",
        "43,15,-40@0": "free",
        "44,15,-40@0": "free",
        "42,15,-40@0": "free",
        "42,15,-43@0": "free",
        "41,15,-43@0": "free",
        "41,15,-39@0": "free",
        "40,15,-39@0": "free",
        "58,15,-38@0": "free",
        "63,15,-1@0": "free",
        "62,15,-1@0": "free",
        "61,15,-1@0": "free",
        "60,15,-1@0": "free",
        "59,15,-1@0": "free",
        "58,15,-1@0": "free",
        "57,15,-1@0": "free",
        "56,15,-1@0": "free",
        "55,15,-1@0": "free",
        "54,15,-1@0": "free",
        "53,15,-1@0": "free",
        "52,15,-1@0": "free",
        "50,15,-1@0": "free",
        "49,15,-1@0": "free",
        "48,15,-1@0": "free",
        "47,15,-1@0": "free",
        "46,15,-1@0": "free",
        "44,15,-1@0": "free",
        "41,15,-1@0": "free",
        "42,15,-1@0": "free",
        "43,15,-1@0": "free",
        "44,15,-4@0": "free",
        "45,15,-4@0": "free",
        "44,15,-5@0": "free",
        "52,15,-4@0": "free",
        "53,15,-4@0": "free",
        "51,15,-4@0": "free",
        "52,15,-5@0": "free",
        "50,15,-3@0": "free",
        "57,15,-4@0": "free",
        "60,15,-4@0": "free",
        "61,15,-4@0": "free",
        "59,15,-4@0": "free",
        "58,15,-3@0": "free",
        "62,15,-6@0": "free",
        "62,15,-5@0": "free",
        "63,15,-6@0": "free",
        "62,15,-7@0": "free",
        "62,16,-7@0": "free",
        "42,15,-74@0": "free",
        "42,16,-74@0": "free",
        "43,16,-73@0": "free",
        "42,16,-72@0": "free",
        "26,15,-59@0": "free",
        "30,15,-63@0": "free",
        "30,15,-62@0": "free",
        "31,15,-63@0": "free",
        "24,15,-65@0": "free",
        "24,15,-66@0": "free",
        "23,15,-65@0": "free",
        "24,15,-64@0": "free",
        "23,18,-65@0": "free",
        "33,15,-67@0": "free",
        "34,16,-67@0": "free",
        "34,16,-66@0": "free",
        "44,15,-55@0": "free",
        "45,15,-55@0": "free",
        "43,15,-55@0": "free",
        "44,15,-64@0": "free",
        "45,15,-63@0": "free",
        "43,15,-63@0": "free",
        "44,16,-64@0": "free",
        "44,16,-63@0": "free",
        "44,16,-62@0": "free",
        "45,16,-63@0": "free",
        "44,17,-64@0": "free",
        "45,17,-63@0": "free",
        "43,16,-63@0": "free",
        "44,17,-63@0": "free",
        "43,17,-63@0": "free",
        "24,18,-57@0": "free",
        "44,18,-63@0": "free",
        "25,15,-34@0": "free",
        "24,16,-34@0": "free",
        "29,15,-33@0": "free",
        "28,15,-33@0": "free",
        "24,16,-33@0": "free",
        "29,15,-34@0": "free",
        "29,15,-22@0": "free",
        "34,15,-21@0": "free",
        "33,15,-22@0": "free",
        "33,16,-21@0": "free",
        "70,15,-22@0": "free",
        "70,15,-21@0": "free",
        "70,16,-22@0": "free",
        "70,16,-21@0": "free",
        "70,15,-23@0": "free",
        "71,15,-24@0": "free",
        "70,16,-23@0": "free",
        "71,16,-24@0": "free",
        "69,15,-25@0": "free",
        "70,15,-25@0": "free",
        "69,15,-26@0": "free",
        "69,16,-25@0": "free",
        "70,16,-25@0": "free",
        "70,18,-25@0": "free",
        "69,18,-24@0": "free",
        "24,16,-56@0": "free",
        "24,17,-56@0": "free",
        "68,15,-11@0": "free",
        "66,16,-9@0": "free",
        "67,16,-12@0": "free",
        "47,15,-22@0": "free",
        "34,13,-77@0": "free",
        "72,16,-37@0": "free",
        "72,16,-46@0": "free",
        "2,17,-42@0": "free",
        "30,22,-55@0": "free",
        "30,22,-56@0": "free",
        "29,22,-55@0": "free",
        "31,22,-55@0": "free",
        "30,22,-54@0": "free",
        "32,22,-57@0": "free",
        "32,22,-58@0": "free",
        "31,22,-57@0": "free",
        "33,22,-57@0": "free",
        "32,22,-56@0": "free",
        "34,22,-59@0": "free",
        "34,22,-60@0": "free",
        "33,22,-59@0": "free",
        "34,22,-58@0": "free",
        "35,22,-61@0": "free",
        "76,19,-41@0": "free",
        "72,17,-42@0": "free",
        "50,22,-57@0": "free",
        "50,22,-58@0": "free",
        "51,22,-57@0": "free",
        "49,22,-57@0": "free",
        "50,22,-56@0": "free",
        "45,22,-58@0": "free",
        "45,22,-59@0": "free",
        "46,22,-58@0": "free",
        "44,22,-58@0": "free",
        "45,22,-57@0": "free",
        "45,22,-66@0": "free",
        "45,22,-67@0": "free",
        "46,22,-66@0": "free",
        "41,22,-62@0": "free",
        "41,22,-63@0": "free",
        "42,22,-62@0": "free",
        "40,22,-62@0": "free",
        "44,22,-63@0": "free",
        "45,21,-63@0": "free",
        "44,21,-62@0": "free",
        "44,22,-64@0": "free",
        "45,22,-63@0": "free",
        "43,22,-63@0": "free",
        "44,22,-62@0": "free",
        "41,22,-61@0": "free",
        "49,20,-59@0": "free",
        "49,21,-59@0": "free",
        "48,21,-58@0": "free",
        "48,22,-59@0": "free",
        "47,21,-59@0": "free",
        "48,22,-60@0": "free",
        "49,22,-59@0": "free",
        "47,22,-59@0": "free",
        "48,22,-58@0": "free",
        "41,20,-65@0": "free",
        "42,21,-64@0": "free",
        "41,21,-65@0": "free",
        "42,22,-65@0": "free",
        "42,21,-66@0": "free",
        "42,22,-66@0": "free",
        "43,22,-65@0": "free",
        "41,22,-65@0": "free",
        "42,22,-64@0": "free",
        "44,22,-79@0": "free",
        "45,22,-79@0": "free",
        "43,22,-79@0": "free",
        "44,22,-78@0": "free",
        "48,22,-75@0": "free",
        "48,22,-76@0": "free",
        "49,22,-75@0": "free",
        "47,22,-75@0": "free",
        "48,22,-74@0": "free",
        "41,22,-78@0": "free",
        "41,22,-79@0": "free",
        "42,22,-78@0": "free",
        "40,22,-78@0": "free",
        "41,22,-77@0": "free",
        "42,22,-80@0": "free",
        "48,22,-67@0": "free",
        "48,22,-68@0": "free",
        "49,22,-67@0": "free",
        "47,22,-67@0": "free",
        "48,22,-66@0": "free",
        "46,22,-69@0": "free",
        "46,22,-70@0": "free",
        "47,22,-69@0": "free",
        "45,22,-69@0": "free",
        "46,22,-68@0": "free",
        "45,22,-71@0": "free",
        "29,22,-74@0": "free",
        "29,22,-75@0": "free",
        "28,22,-74@0": "free",
        "30,22,-74@0": "free",
        "29,22,-73@0": "free",
        "26,22,-59@0": "free",
        "26,22,-60@0": "free",
        "25,22,-59@0": "free",
        "27,22,-59@0": "free",
        "26,22,-58@0": "free",
        "29,22,-50@0": "free",
        "28,22,-50@0": "free",
        "29,22,-51@0": "free",
        "29,22,-49@0": "free",
        "30,22,-50@0": "free",
        "28,22,-53@0": "free",
        "28,22,-54@0": "free",
        "27,22,-53@0": "free",
        "29,22,-53@0": "free",
        "28,22,-52@0": "free",
        "33,22,-62@0": "free",
        "33,22,-63@0": "free",
        "32,22,-62@0": "free",
        "34,22,-62@0": "free",
        "33,22,-61@0": "free",
        "30,22,-63@0": "free",
        "30,22,-64@0": "free",
        "29,22,-63@0": "free",
        "31,22,-63@0": "free",
        "30,22,-62@0": "free",
        "34,22,-51@0": "free",
        "34,22,-52@0": "free",
        "33,22,-51@0": "free",
        "34,22,-50@0": "free",
        "35,22,-53@0": "free",
        "34,20,-54@0": "free",
        "34,21,-54@0": "free",
        "33,20,-53@0": "free",
        "33,21,-54@0": "free",
        "33,22,-54@0": "free",
        "33,22,-55@0": "free",
        "32,22,-54@0": "free",
        "34,22,-54@0": "free",
        "33,22,-53@0": "free",
        "41,19,-67@0": "free",
        "39,19,-69@0": "free",
        "40,22,-67@0": "free",
        "40,22,-68@0": "free",
        "41,22,-67@0": "free",
        "40,22,-66@0": "free",
        "39,22,-69@0": "free",
        "40,22,-75@0": "free",
        "40,22,-76@0": "free",
        "41,22,-75@0": "free",
        "40,22,-74@0": "free",
        "39,22,-77@0": "free",
        "41,22,-21@0": "free",
        "41,22,-20@0": "free",
        "42,22,-21@0": "free",
        "41,22,-22@0": "free",
        "40,22,-21@0": "free",
        "39,22,-22@0": "free",
        "42,22,-26@0": "free",
        "42,22,-25@0": "free",
        "43,22,-26@0": "free",
        "41,22,-26@0": "free",
        "42,22,-27@0": "free",
        "14,22,-4@0": "free",
        "14,21,-5@0": "free",
        "14,22,-5@0": "free",
        "13,21,-4@0": "free",
        "13,22,-4@0": "free",
        "12,22,-6@0": "free",
        "12,20,-5@0": "free",
        "47,16,-77@0": "free",
        "54,19,-30@0": "free",
        "53,19,-30@0": "free",
        "54,19,-29@0": "free",
        "52,22,-28@0": "free",
        "53,22,-28@0": "free",
        "52,22,-27@0": "free",
        "52,22,-29@0": "free",
        "51,22,-28@0": "free",
        "48,22,-8@0": "free",
        "48,22,-7@0": "free",
        "49,22,-8@0": "free",
        "47,22,-8@0": "free",
        "48,22,-9@0": "free",
        "41,22,-29@0": "free",
        "41,22,-28@0": "free",
        "42,22,-29@0": "free",
        "40,22,-29@0": "free",
        "41,22,-30@0": "free",
        "39,22,-30@0": "free",
        "44,22,-28@0": "free",
        "44,22,-27@0": "free",
        "45,22,-28@0": "free",
        "43,22,-28@0": "free",
        "44,22,-29@0": "free",
        "45,19,-30@0": "free",
        "45,22,-33@0": "free",
        "45,22,-32@0": "free",
        "46,22,-33@0": "free",
        "44,22,-33@0": "free",
        "45,22,-34@0": "free",
        "45,21,-26@0": "free",
        "45,22,-25@0": "free",
        "45,21,-24@0": "free",
        "45,22,-24@0": "free",
        "46,22,-22@0": "free",
        "46,22,-21@0": "free",
        "47,22,-22@0": "free",
        "45,22,-22@0": "free",
        "46,22,-23@0": "free",
        "44,16,-27@0": "free",
        "20,22,-22@0": "free",
        "20,22,-21@0": "free",
        "19,22,-22@0": "free",
        "21,22,-22@0": "free",
        "20,22,-23@0": "free",
        "6,22,-12@0": "free",
        "5,22,-12@0": "free",
        "6,22,-11@0": "free",
        "6,22,-13@0": "free",
        "7,22,-12@0": "free",
        "16,22,-18@0": "free",
        "16,22,-17@0": "free",
        "15,22,-18@0": "free",
        "17,22,-18@0": "free",
        "16,22,-19@0": "free",
        "22,22,-20@0": "free",
        "22,22,-19@0": "free",
        "21,22,-20@0": "free",
        "23,22,-20@0": "free",
        "22,22,-21@0": "free",
        "5,19,-49@0": "free",
        "5,22,-50@0": "free",
        "4,22,-50@0": "free",
        "5,22,-51@0": "free",
        "5,22,-49@0": "free",
        "6,22,-50@0": "free",
        "3,22,-51@0": "free",
        "66,22,-34@0": "free",
        "67,22,-34@0": "free",
        "66,22,-33@0": "free",
        "65,22,-34@0": "free",
        "68,22,-35@0": "free",
        "69,20,-34@0": "free",
        "69,19,-33@0": "free",
        "68,19,-33@0": "free",
        "40,22,-8@0": "free",
        "40,22,-7@0": "free",
        "41,22,-8@0": "free",
        "40,22,-9@0": "free",
        "26,22,-8@0": "free",
        "25,21,-8@0": "free",
        "26,22,-7@0": "free",
        "25,22,-8@0": "free",
        "27,22,-8@0": "free",
        "26,22,-9@0": "free",
        "65,22,-29@0": "free",
        "66,22,-29@0": "free",
        "65,22,-28@0": "free",
        "65,22,-30@0": "free",
        "64,22,-29@0": "free",
        "65,21,-78@0": "free",
        "70,22,-22@0": "free",
        "70,22,-21@0": "free",
        "70,22,-23@0": "free",
        "69,22,-22@0": "free",
        "71,22,-24@0": "free",
        "57,22,-34@0": "free",
        "69,22,-25@0": "free",
        "70,22,-25@0": "free",
        "69,22,-24@0": "free",
        "69,22,-26@0": "free",
        "68,22,-25@0": "free",
        "65,22,-5@0": "free",
        "65,22,-4@0": "free",
        "66,22,-5@0": "free",
        "64,22,-5@0": "free",
        "65,22,-6@0": "free",
        "60,22,-4@0": "free",
        "61,22,-4@0": "free",
        "59,22,-4@0": "free",
        "60,22,-5@0": "free",
        "58,22,-3@0": "free",
        "57,20,-5@0": "free",
        "57,22,-5@0": "free",
        "57,22,-4@0": "free",
        "58,22,-5@0": "free",
        "56,22,-5@0": "free",
        "57,22,-6@0": "free",
        "21,22,-25@0": "free",
        "20,22,-25@0": "free",
        "21,22,-24@0": "free",
        "21,22,-26@0": "free",
        "22,22,-25@0": "free",
        "25,22,-29@0": "free",
        "24,22,-29@0": "free",
        "25,22,-28@0": "free",
        "25,22,-30@0": "free",
        "26,22,-29@0": "free",
        "23,20,-28@0": "free",
        "21,22,-50@0": "free",
        "20,22,-50@0": "free",
        "21,22,-51@0": "free",
        "6,21,-48@0": "free",
        "6,22,-48@0": "free",
        "45,22,-51@0": "free",
        "72,20,-42@0": "free",
        "73,20,-43@0": "free",
        "74,20,-43@0": "free",
        "74,20,-40@0": "free",
        "74,20,-41@0": "free",
        "74,20,-42@0": "free",
        "73,20,-40@0": "free",
        "74,20,-47@0": "free",
        "76,21,-41@0": "free",
        "73,22,-49@0": "free",
        "36,21,-83@0": "free",
        "39,22,-83@0": "free",
        "38,22,-83@0": "free",
        "37,22,-83@0": "free",
        "36,22,-83@0": "free",
        "42,22,-71@0": "fluid",
        "44,22,-73@0": "fluid",
        "41,22,-74@0": "fluid",
        "40,22,-69@0": "fluid",
        "41,22,-66@0": "fluid",
        "48,22,-61@0": "fluid",
        "49,22,-66@0": "fluid",
        "34,22,-61@0": "fluid",
        "32,22,-63@0": "fluid",
        "30,22,-65@0": "fluid",
        "33,22,-74@0": "fluid",
        "34,22,-77@0": "fluid",
        "26,22,-77@0": "fluid",
        "24,22,-71@0": "fluid",
        "20,22,-75@0": "fluid",
        "21,22,-62@0": "fluid",
        "29,22,-54@0": "fluid",
        "28,22,-67@0": "fluid",
        "21,22,-54@0": "fluid",
        "16,22,-55@0": "fluid",
        "14,22,-57@0": "fluid",
        "12,22,-51@0": "fluid",
        "10,22,-61@0": "fluid",
        "6,22,-49@0": "fluid",
        "4,22,-51@0": "fluid",
        "6,22,-73@0": "fluid",
        "9,22,-74@0": "fluid",
        "5,22,-78@0": "fluid",
        "8,22,-79@0": "fluid",
        "29,22,-29@0": "fluid",
        "30,22,-26@0": "fluid",
        "33,22,-25@0": "fluid",
        "34,22,-22@0": "fluid",
        "62,22,-16@0": "fluid",
        "41,22,-50@0": "fluid",
        "20,22,-59@0": "fluid",
        "18,22,-53@0": "fluid",
        "17,22,-58@0": "fluid",
        "22,22,-57@0": "fluid",
        "10,22,-53@0": "fluid",
        "8,22,-55@0": "fluid",
        "4,22,-59@0": "fluid",
        "5,22,-62@0": "fluid",
        "4,22,-75@0": "fluid",
        "10,22,-77@0": "fluid",
        "13,22,-78@0": "fluid",
        "21,22,-78@0": "fluid",
        "16,22,-79@0": "fluid",
        "25,22,-58@0": "fluid",
        "24,22,-55@0": "fluid",
        "30,22,-57@0": "fluid",
        "25,22,-50@0": "fluid",
        "25,23,-54@0": "free",
        "27,23,-53@0": "free",
        "28,23,-53@0": "free",
        "22,23,-55@0": "free",
        "22,23,-56@0": "free",
        "26,23,-59@0": "free",
        "26,23,-51@0": "free",
        "24,23,-49@0": "free",
        "22,23,-48@0": "free",
        "21,23,-50@0": "free",
        "27,23,-51@0": "free",
        "29,23,-50@0": "free",
        "30,23,-48@0": "free",
        "32,23,-49@0": "free",
        "34,23,-51@0": "free",
        "49,23,-54@0": "free",
        "47,23,-53@0": "free",
        "47,23,-51@0": "free",
        "46,23,-53@0": "free",
        "50,23,-49@0": "free",
        "48,23,-51@0": "free",
        "53,23,-50@0": "free",
        "52,23,-48@0": "free",
        "45,23,-50@0": "free",
        "44,23,-48@0": "free",
        "42,23,-49@0": "free",
        "44,23,-55@0": "free",
        "44,23,-56@0": "free",
        "45,23,-58@0": "free",
        "42,23,-57@0": "free",
        "42,23,-56@0": "free",
        "41,23,-54@0": "free",
        "39,23,-53@0": "free",
        "40,23,-51@0": "free",
        "35,23,-53@0": "free",
        "33,23,-54@0": "free",
        "30,23,-55@0": "free",
        "34,23,-59@0": "free",
        "29,23,-58@0": "free",
        "30,23,-56@0": "free",
        "27,23,-67@0": "free",
        "26,23,-67@0": "free",
        "8,23,-65@0": "free",
        "8,23,-64@0": "free",
        "5,23,-66@0": "free",
        "3,23,-67@0": "free",
        "4,23,-69@0": "free",
        "6,23,-71@0": "free",
        "6,23,-72@0": "free",
        "5,23,-74@0": "free",
        "3,23,-75@0": "free",
        "4,23,-77@0": "free",
        "10,23,-75@0": "free",
        "11,23,-75@0": "free",
        "11,23,-77@0": "free",
        "12,23,-77@0": "free",
        "9,23,-78@0": "free",
        "9,23,-76@0": "free",
        "10,23,-77@0": "free",
        "13,23,-76@0": "free",
        "12,23,-75@0": "free",
        "14,23,-73@0": "free",
        "16,23,-71@0": "free",
        "12,23,-67@0": "free",
        "10,23,-69@0": "free",
        "8,23,-71@0": "free",
        "14,23,-65@0": "free",
        "8,23,-63@0": "free",
        "9,23,-60@0": "free",
        "10,23,-61@0": "free",
        "12,23,-59@0": "free",
        "14,23,-57@0": "free",
        "16,23,-55@0": "free",
        "12,23,-51@0": "free",
        "10,23,-53@0": "free",
        "14,23,-49@0": "free",
        "6,23,-49@0": "free",
        "8,23,-20@0": "free",
        "9,23,-23@0": "free",
        "14,23,-18@0": "free",
        "9,23,-15@0": "free",
        "10,23,-14@0": "free",
        "12,23,-16@0": "free",
        "16,23,-20@0": "free",
        "18,23,-22@0": "free",
        "17,23,-15@0": "free",
        "18,23,-14@0": "free",
        "20,23,-16@0": "free",
        "21,23,-15@0": "free",
        "22,23,-18@0": "free",
        "24,23,-20@0": "free",
        "25,23,-23@0": "free",
        "30,23,-18@0": "free",
        "29,23,-15@0": "free",
        "26,23,-14@0": "free",
        "24,23,-12@0": "free",
        "30,23,-10@0": "free",
        "28,23,-8@0": "free",
        "26,23,-6@0": "free",
        "24,23,-4@0": "free",
        "32,23,-4@0": "free",
        "33,23,-7@0": "free",
        "34,23,-6@0": "free",
        "32,23,-12@0": "free",
        "34,23,-14@0": "free",
        "40,23,-14@0": "free",
        "40,23,-6@0": "free",
        "32,23,-20@0": "free",
        "28,23,-16@0": "free",
        "22,23,-10@0": "free",
        "21,23,-7@0": "free",
        "20,23,-8@0": "free",
        "18,23,-6@0": "free",
        "14,23,-10@0": "free",
        "16,23,-12@0": "free",
        "12,23,-8@0": "free",
        "10,23,-6@0": "free",
        "6,23,-10@0": "free",
        "8,23,-12@0": "free",
        "6,23,-18@0": "free",
        "4,23,-16@0": "free",
        "4,23,-8@0": "free",
        "8,23,-4@0": "free",
        "16,23,-4@0": "free",
        "10,23,-22@0": "free",
        "12,23,-24@0": "free",
        "14,23,-26@0": "free",
        "16,23,-28@0": "free",
        "12,23,-32@0": "free",
        "10,23,-30@0": "free",
        "8,23,-28@0": "free",
        "6,23,-26@0": "free",
        "4,23,-24@0": "free",
        "4,23,-32@0": "free",
        "6,23,-34@0": "free",
        "14,23,-34@0": "free",
        "18,23,-30@0": "free",
        "20,23,-32@0": "free",
        "28,23,-32@0": "free",
        "30,23,-34@0": "free",
        "22,23,-34@0": "free",
        "45,23,-13@0": "free",
        "49,23,-9@0": "free",
        "51,23,-4@0": "piston-a",
        "45,23,-5@0": "free",
        "53,23,-21@0": "free",
        "58,23,-21@0": "piston-a",
        "57,23,-22@0": "piston-a",
        "61,23,-21@0": "free",
        "59,23,-20@0": "piston-a",
        "61,23,-22@0": "piston-a",
        "64,23,-21@0": "piston-a",
        "66,23,-21@0": "piston-a",
        "68,23,-21@0": "piston-a",
        "67,23,-20@0": "piston-a",
        "69,23,-21@0": "free",
        "65,23,-17@0": "free",
        "69,23,-78@0": "free",
        "65,23,-73@0": "piston-a",
        "64,23,-74@0": "piston-a",
        "62,23,-74@0": "piston-a",
        "61,23,-73@0": "piston-a",
        "65,23,-71@0": "piston-a",
        "64,23,-70@0": "piston-a",
        "62,23,-70@0": "piston-a",
        "61,23,-70@0": "free",
        "53,23,-70@0": "free",
        "54,23,-68@0": "piston-a",
        "53,23,-69@0": "piston-a",
        "53,23,-68@0": "free",
        "53,23,-63@0": "piston-a",
        "53,23,-62@0": "free",
        "54,23,-62@0": "piston-a",
        "56,23,-62@0": "piston-a",
        "57,23,-58@0": "free",
        "61,23,-62@0": "free",
        "64,23,-66@0": "piston-a",
        "65,23,-66@0": "free",
        "45,23,-78@0": "free",
        "44,23,-78@0": "piston-a",
        "45,23,-77@0": "piston-a",
        "41,23,-77@0": "piston-a",
        "42,23,-74@0": "piston-a",
        "33,23,-17@0": "free",
        "33,23,-16@0": "piston-a",
        "33,23,-15@0": "free",
        "33,23,-10@0": "piston-a",
        "33,23,-9@0": "free",
        "29,23,-7@0": "free",
        "25,23,-6@0": "piston-a",
        "26,23,-7@0": "piston-a",
        "25,23,-8@0": "piston-a",
        "25,23,-7@0": "free",
        "29,23,-5@0": "free",
        "29,23,-10@0": "piston-a",
        "28,23,-9@0": "piston-a",
        "26,23,-9@0": "piston-a",
        "25,23,-10@0": "piston-a",
        "29,23,-13@0": "free",
        "13,23,-5@0": "free",
        "5,23,-5@0": "free",
        "9,23,-7@0": "free",
        "9,23,-8@0": "piston-a",
        "9,23,-9@0": "free",
        "10,23,-13@0": "piston-a",
        "13,23,-15@0": "free",
        "17,23,-17@0": "free",
        "29,23,-21@0": "free",
        "29,23,-23@0": "free",
        "17,23,-23@0": "free",
        "13,23,-21@0": "free",
        "13,23,-20@0": "piston-a",
        "13,23,-18@0": "piston-a",
        "12,23,-17@0": "piston-a",
        "10,23,-17@0": "piston-a",
        "10,23,-21@0": "piston-a",
        "9,23,-20@0": "piston-a",
        "9,23,-18@0": "piston-a",
        "20,23,-21@0": "piston-a",
        "4,23,-15@0": "piston-a",
        "53,23,-22@0": "piston-a",
        "73,24,-34@0": "free",
        "59,24,-13@0": "free",
        "67,24,-13@0": "free",
        "51,24,-5@0": "free",
        "33,24,-21@0": "floor",
        "33,24,-20@0": "floor",
        "32,24,-20@0": "floor",
        "31,24,-20@0": "floor",
        "33,24,-22@0": "floor",
        "29,24,-22@0": "floor",
        "29,24,-23@0": "floor",
        "59,24,-68@0": "free",
        "61,24,-63@0": "floor",
        "61,24,-65@0": "floor",
        "59,24,-63@0": "floor",
        "58,24,-63@0": "floor",
        "57,24,-63@0": "floor",
        "57,24,-62@0": "floor",
        "57,24,-61@0": "floor",
        "57,24,-66@0": "floor",
        "60,24,-63@0": "floor",
        "61,24,-62@0": "floor",
        "61,24,-61@0": "floor",
        "61,24,-60@0": "floor",
        "65,24,-63@0": "floor",
        "65,24,-62@0": "floor",
        "61,24,-59@0": "floor",
        "61,24,-58@0": "floor",
        "65,24,-60@0": "floor",
        "65,24,-61@0": "floor",
        "57,24,-60@0": "floor",
        "61,24,-57@0": "floor",
        "60,24,-57@0": "floor",
        "59,24,-55@0": "floor",
        "61,24,-55@0": "floor",
        "60,24,-55@0": "floor",
        "65,24,-58@0": "floor",
        "65,24,-59@0": "floor",
        "68,24,-57@0": "floor",
        "69,24,-57@0": "floor",
        "69,24,-58@0": "floor",
        "53,24,-59@0": "floor",
        "53,24,-63@0": "floor",
        "52,24,-63@0": "floor",
        "51,24,-63@0": "floor",
        "50,24,-63@0": "floor",
        "45,24,-70@0": "floor",
        "33,24,-15@0": "floor",
        "33,24,-13@0": "floor",
        "33,24,-12@0": "floor",
        "32,24,-12@0": "floor",
        "30,24,-12@0": "floor",
        "29,24,-12@0": "floor",
        "29,24,-15@0": "floor",
        "29,24,-16@0": "floor",
        "29,24,-17@0": "floor",
        "31,24,-14@0": "hook-a",
        "33,24,-14@0": "floor",
        "30,24,-10@0": "floor",
        "29,24,-4@0": "floor",
        "25,24,-5@0": "floor",
        "25,24,-6@0": "floor",
        "25,24,-7@0": "floor",
        "30,24,-4@0": "floor",
        "33,24,-4@0": "floor",
        "25,24,-4@0": "floor",
        "24,24,-4@0": "floor",
        "23,24,-4@0": "floor",
        "22,24,-4@0": "floor",
        "21,24,-4@0": "floor",
        "21,24,-5@0": "floor",
        "21,24,-9@0": "floor",
        "21,24,-8@0": "floor",
        "15,24,-4@0": "floor",
        "14,24,-4@0": "floor",
        "13,24,-5@0": "floor",
        "13,24,-6@0": "floor",
        "13,24,-4@0": "floor",
        "9,24,-4@0": "floor",
        "9,24,-5@0": "floor",
        "8,24,-4@0": "floor",
        "13,24,-29@0": "floor",
        "13,24,-30@0": "floor",
        "14,24,-17@0": "observer-b",
        "14,24,-9@0": "observer-b",
        "22,24,-9@0": "observer-b",
        "52,24,-17@0": "observer-b",
        "60,24,-17@0": "observer-b",
        "68,24,-17@0": "observer-b",
        "68,24,-9@0": "observer-b",
        "60,24,-9@0": "observer-b",
        "52,24,-9@0": "observer-b",
        "44,24,-9@0": "observer-b",
        "60,24,-25@0": "observer-b",
        "60,24,-33@0": "observer-b",
        "68,24,-33@0": "observer-b",
        "59,24,-25@0": "piston-a",
        "62,22,-21@0": "free",
        "61,22,-20@0": "free",
        "7,24,-5@0": "free",
        "51,24,-13@0": "free",
        "51,24,-14@0": "hook-a",
        "15,24,-6@0": "hook-a",
        "7,24,-6@0": "hook-a",
        "15,24,-17@0": "piston-a",
        "23,24,-17@0": "piston-a",
        "67,24,-15@0": "free",
        "62,22,-33@0": "free",
        "51,24,-15@0": "free",
        "15,24,-9@0": "piston-a",
        "23,24,-8@0": "hook-a",
        "15,24,-8@0": "hook-a",
        "34,25,-1@0": "free",
        "7,24,-15@0": "free",
        "15,24,-7@0": "free",
        "23,24,-68@0": "free",
        "23,24,-75@0": "hook-a",
        "34,25,-51@0": "free",
        "34,25,-52@0": "free",
        "38,25,-46@0": "free",
        "37,25,-46@0": "free",
        "37,25,-47@0": "free",
        "37,25,-48@0": "free",
        "37,25,-49@0": "free",
        "37,25,-50@0": "free",
        "37,25,-51@0": "free",
        "37,25,-52@0": "free",
        "37,25,-53@0": "free",
        "37,25,-54@0": "free",
        "37,25,-55@0": "free",
        "37,25,-45@0": "free",
        "37,25,-44@0": "free",
        "36,25,-43@0": "free",
        "37,25,-43@0": "free",
        "38,25,-43@0": "free",
        "33,25,-34@0": "free",
        "32,25,-34@0": "free",
        "31,25,-34@0": "free",
        "30,25,-34@0": "free",
        "25,25,-34@0": "free",
        "24,25,-34@0": "free",
        "23,25,-34@0": "free",
        "22,25,-34@0": "free",
        "16,25,-34@0": "free",
        "15,25,-34@0": "free",
        "13,25,-34@0": "free",
        "12,25,-34@0": "free",
        "32,25,-41@0": "free",
        "33,25,-41@0": "free",
        "31,25,-33@0": "floor-torch",
        "31,25,-17@0": "floor-torch",
        "31,25,-9@0": "floor-torch",
        "23,25,-9@0": "floor-torch",
        "23,25,-17@0": "floor-torch",
        "15,25,-9@0": "floor-torch",
        "15,25,-17@0": "floor-torch",
        "7,25,-9@0": "floor-torch",
        "7,25,-17@0": "floor-torch",
        "31,25,-25@0": "floor-torch",
        "59,25,-58@0": "floor-torch",
        "59,25,-50@0": "floor-torch",
        "67,25,-74@0": "floor-torch",
        "67,25,-66@0": "floor-torch",
        "67,25,-50@0": "floor-torch",
        "23,25,-25@0": "floor-torch",
        "35,26,-46@0": "free",
        "36,26,-46@0": "free",
        "38,26,-46@0": "free",
        "39,26,-46@0": "free",
        "37,26,-45@0": "free",
        "29,26,-45@0": "free",
        "29,26,-44@0": "free",
        "43,26,-45@0": "free",
        "43,26,-44@0": "free",
        "42,26,-44@0": "free",
        "41,26,-44@0": "free",
        "44,26,-44@0": "free",
        "44,26,-43@0": "free",
        "43,26,-43@0": "free",
        "42,26,-43@0": "free",
        "41,26,-43@0": "free",
        "39,26,-43@0": "free",
        "40,26,-43@0": "free",
        "38,26,-44@0": "free",
        "39,26,-44@0": "free",
        "40,26,-44@0": "free",
        "39,26,-40@0": "free",
        "40,26,-40@0": "free",
        "41,26,-40@0": "free",
        "44,26,-40@0": "free",
        "43,26,-40@0": "free",
        "42,26,-40@0": "free",
        "42,26,-45@0": "free",
        "41,26,-45@0": "free",
        "41,26,-46@0": "free",
        "40,26,-45@0": "free",
        "39,26,-45@0": "free",
        "38,26,-45@0": "free",
        "42,26,-46@0": "free",
        "43,26,-46@0": "free",
        "46,26,-44@0": "free",
        "46,26,-45@0": "free",
        "46,26,-46@0": "free",
        "47,26,-46@0": "free",
        "48,26,-46@0": "free",
        "48,26,-45@0": "free",
        "47,26,-45@0": "free",
        "47,26,-44@0": "free",
        "48,26,-44@0": "free",
        "53,26,-47@0": "free",
        "53,26,-48@0": "free",
        "54,26,-48@0": "free",
        "57,26,-48@0": "free",
        "58,26,-48@0": "free",
        "59,26,-48@0": "free",
        "60,26,-48@0": "free",
        "57,26,-47@0": "free",
        "58,26,-47@0": "free",
        "58,26,-46@0": "free",
        "61,26,-48@0": "free",
        "62,26,-48@0": "free",
        "63,26,-48@0": "free",
        "32,26,-48@0": "free",
        "32,26,-47@0": "free",
        "32,26,-46@0": "free",
        "32,26,-45@0": "free",
        "33,26,-44@0": "free",
        "34,26,-44@0": "free",
        "35,26,-44@0": "free",
        "35,26,-45@0": "free",
        "34,26,-45@0": "free",
        "33,26,-45@0": "free",
        "33,26,-46@0": "free",
        "33,26,-47@0": "free",
        "33,26,-48@0": "free",
        "38,26,-51@0": "free",
        "39,26,-51@0": "free",
        "39,26,-52@0": "free",
        "39,26,-53@0": "free",
        "38,26,-52@0": "free",
        "39,26,-54@0": "free",
        "38,26,-53@0": "free",
        "38,26,-54@0": "free",
        "36,26,-53@0": "free",
        "36,26,-54@0": "free",
        "36,26,-55@0": "free",
        "35,26,-53@0": "free",
        "35,26,-54@0": "free",
        "35,26,-55@0": "free",
        "36,26,-56@0": "free",
        "35,26,-56@0": "free",
        "35,26,-57@0": "free",
        "35,26,-58@0": "free",
        "36,26,-57@0": "free",
        "36,26,-58@0": "free",
        "35,26,-59@0": "free",
        "35,26,-60@0": "free",
        "35,26,-61@0": "free",
        "36,26,-59@0": "free",
        "36,26,-60@0": "free",
        "36,26,-61@0": "free",
        "35,26,-62@0": "free",
        "35,26,-63@0": "free",
        "35,26,-64@0": "free",
        "35,26,-65@0": "free",
        "36,26,-62@0": "free",
        "36,26,-63@0": "free",
        "36,26,-64@0": "free",
        "36,26,-65@0": "free",
        "36,26,-66@0": "free",
        "35,26,-66@0": "free",
        "35,26,-67@0": "free",
        "35,26,-68@0": "free",
        "36,26,-67@0": "free",
        "36,26,-68@0": "free",
        "35,26,-69@0": "free",
        "35,26,-70@0": "free",
        "35,26,-71@0": "free",
        "36,26,-69@0": "free",
        "36,26,-70@0": "free",
        "36,26,-71@0": "free",
        "35,26,-72@0": "free",
        "35,26,-73@0": "free",
        "35,26,-74@0": "free",
        "36,26,-72@0": "free",
        "35,26,-75@0": "free",
        "35,26,-76@0": "free",
        "35,26,-77@0": "free",
        "35,26,-81@0": "free",
        "36,26,-81@0": "free",
        "36,26,-80@0": "free",
        "23,26,-74@0": "free",
        "7,26,-58@0": "free",
        "7,26,-74@0": "free",
        "7,26,-17@0": "free",
        "7,26,-62@0": "free",
        "7,26,-61@0": "free",
        "7,26,-63@0": "free",
        "7,26,-70@0": "free",
        "7,26,-69@0": "free",
        "7,26,-78@0": "free",
        "7,26,-77@0": "free",
        "7,26,-79@0": "free",
        "15,26,-78@0": "free",
        "15,26,-77@0": "free",
        "15,26,-70@0": "free",
        "15,26,-69@0": "free",
        "15,26,-62@0": "free",
        "15,26,-61@0": "free",
        "15,26,-54@0": "free",
        "23,26,-62@0": "free",
        "23,26,-61@0": "free",
        "23,26,-70@0": "free",
        "23,26,-69@0": "free",
        "23,26,-78@0": "free",
        "23,26,-77@0": "free",
        "31,26,-78@0": "free",
        "31,26,-77@0": "free",
        "31,26,-62@0": "free",
        "39,26,-13@0": "free",
        "39,26,-14@0": "free",
        "39,26,-12@0": "free",
        "31,26,-54@0": "free",
        "31,26,-53@0": "free",
        "23,27,-50@0": "free",
        "15,27,-50@0": "free",
        "8,27,-79@0": "free",
        "19,27,-74@0": "free",
        "20,27,-74@0": "free",
        "14,27,-66@0": "free",
        "13,27,-66@0": "free",
        "12,27,-66@0": "free",
        "11,27,-66@0": "free",
        "10,27,-66@0": "free",
        "10,27,-67@0": "free",
        "10,27,-68@0": "free",
        "13,27,-74@0": "free",
        "12,27,-74@0": "free",
        "11,27,-74@0": "free",
        "10,27,-74@0": "free",
        "10,27,-75@0": "free",
        "10,27,-76@0": "free",
        "21,27,-74@0": "free",
        "22,27,-74@0": "free",
        "24,27,-74@0": "free",
        "25,27,-74@0": "free",
        "26,27,-74@0": "free",
        "26,27,-75@0": "free",
        "26,27,-76@0": "free",
        "23,27,-67@0": "free",
        "24,27,-66@0": "free",
        "25,27,-66@0": "free",
        "22,27,-66@0": "free",
        "21,27,-66@0": "free",
        "20,27,-66@0": "free",
        "19,27,-66@0": "free",
        "18,27,-66@0": "free",
        "18,27,-67@0": "free",
        "18,27,-68@0": "free",
        "17,27,-66@0": "free",
        "16,27,-66@0": "free",
        "15,27,-67@0": "free",
        "11,27,-50@0": "free",
        "10,27,-50@0": "free",
        "14,27,-33@0": "free",
        "13,27,-33@0": "free",
        "12,27,-33@0": "free",
        "11,27,-33@0": "free",
        "10,27,-33@0": "free",
        "51,26,-29@0": "free",
        "51,26,-30@0": "free",
        "61,22,-22@0": "free",
        "20,27,-9@0": "free",
        "21,27,-9@0": "free",
        "22,27,-9@0": "free",
        "24,27,-9@0": "free",
        "25,27,-9@0": "free",
        "26,27,-9@0": "free",
        "27,27,-9@0": "free",
        "28,27,-9@0": "free",
        "29,27,-9@0": "free",
        "30,27,-9@0": "free",
        "31,27,-8@0": "free",
        "32,27,-9@0": "free",
        "33,27,-9@0": "free",
        "34,27,-9@0": "free",
        "34,27,-8@0": "free",
        "34,27,-7@0": "free",
        "26,27,-8@0": "free",
        "23,27,-8@0": "free",
        "26,27,-7@0": "free",
        "26,27,-15@0": "free",
        "25,27,-25@0": "free",
        "26,27,-31@0": "free",
        "27,27,-33@0": "free",
        "28,27,-33@0": "free",
        "23,27,-31@0": "wall-attach",
        "15,27,-52@0": "wall-attach",
        "15,27,-60@0": "wall-attach",
        "15,27,-68@0": "wall-attach",
        "15,27,-76@0": "wall-attach",
        "23,27,-76@0": "wall-attach",
        "23,27,-68@0": "wall-attach",
        "31,27,-68@0": "wall-attach",
        "31,27,-76@0": "wall-attach",
        "43,27,-76@0": "wall-attach",
        "51,27,-76@0": "wall-attach",
        "59,27,-76@0": "wall-attach",
        "59,27,-52@0": "wall-attach",
        "7,27,-75@0": "free",
        "6,27,-78@0": "free",
        "6,27,-77@0": "free",
        "15,27,-31@0": "wall-attach",
        "22,27,-77@0": "free",
        "31,26,-70@0": "free",
        "31,26,-69@0": "free",
        "31,27,-71@0": "free",
        "32,27,-71@0": "free",
        "32,27,-70@0": "free",
        "32,27,-69@0": "free",
        "16,27,-79@0": "free",
        "15,27,-79@0": "free",
        "24,27,-78@0": "free",
        "24,27,-77@0": "free",
        "24,27,-79@0": "free",
        "23,27,-79@0": "free",
        "6,27,-70@0": "free",
        "6,27,-69@0": "free",
        "7,27,-71@0": "free",
        "8,27,-69@0": "free",
        "16,27,-69@0": "free",
        "16,27,-71@0": "free",
        "15,27,-71@0": "free",
        "24,27,-69@0": "free",
        "24,27,-71@0": "free",
        "23,27,-71@0": "free",
        "8,27,-61@0": "free",
        "6,27,-62@0": "free",
        "7,27,-59@0": "free",
        "7,27,-60@0": "wall-attach",
        "8,27,-54@0": "free",
        "8,27,-53@0": "free",
        "14,27,-62@0": "free",
        "14,27,-61@0": "free",
        "16,27,-62@0": "free",
        "16,27,-61@0": "free",
        "16,27,-63@0": "free",
        "15,27,-63@0": "free",
        "67,27,-68@0": "wall-attach",
        "24,27,-61@0": "free",
        "24,27,-63@0": "free",
        "23,27,-63@0": "free",
        "7,27,-51@0": "free",
        "7,27,-52@0": "wall-attach",
        "6,27,-54@0": "free",
        "6,27,-53@0": "free",
        "24,27,-53@0": "free",
        "24,27,-55@0": "free",
        "23,27,-55@0": "free",
        "66,27,-29@0": "free",
        "30,27,-78@0": "free",
        "30,27,-77@0": "free",
        "31,27,-79@0": "free",
        "30,27,-54@0": "free",
        "30,27,-53@0": "free",
        "44,27,-62@0": "free",
        "16,27,-22@0": "free",
        "22,27,-22@0": "free",
        "44,27,-61@0": "free",
        "7,27,-24@0": "free",
        "15,27,-62@0": "fluid",
        "15,27,-70@0": "fluid",
        "7,27,-70@0": "fluid",
        "7,27,-78@0": "fluid",
        "15,27,-78@0": "fluid",
        "23,27,-78@0": "fluid",
        "31,27,-70@0": "fluid",
        "31,27,-78@0": "fluid",
        "15,28,-55@0": "free",
        "15,28,-63@0": "free",
        "15,28,-71@0": "free",
        "7,28,-79@0": "free",
        "26,28,-58@0": "rail-dir",
        "25,28,-58@0": "rail-dir",
        "24,28,-58@0": "rail-dir",
        "21,28,-58@0": "rail-dir",
        "20,28,-58@0": "rail-dir",
        "19,28,-58@0": "rail-dir",
        "16,28,-58@0": "rail-dir",
        "15,28,-58@0": "rail-dir",
        "10,28,-60@0": "rail-dir",
        "13,28,-58@0": "rail-dir",
        "14,28,-58@0": "rail-dir",
        "10,28,-52@0": "rail-dir",
        "10,28,-50@0": "rail-dir",
        "11,28,-50@0": "rail-dir",
        "12,28,-50@0": "rail-dir",
        "13,28,-50@0": "rail-dir",
        "14,28,-50@0": "rail-dir",
        "15,28,-50@0": "rail-dir",
        "16,28,-50@0": "rail-dir",
        "18,28,-50@0": "rail-dir",
        "19,28,-50@0": "rail-dir",
        "20,28,-50@0": "rail-dir",
        "21,28,-25@0": "rail-dir",
        "20,28,-25@0": "rail-dir",
        "19,28,-25@0": "rail-dir",
        "18,28,-23@0": "rail-dir",
        "18,28,-25@0": "rail-dir",
        "16,28,-25@0": "rail-dir",
        "14,28,-25@0": "rail-dir",
        "13,28,-25@0": "rail-dir",
        "15,28,-25@0": "rail-dir",
        "10,28,-23@0": "rail-dir",
        "10,28,-15@0": "rail-dir",
        "10,28,-7@0": "rail-dir",
        "21,28,-50@0": "rail-dir",
        "22,28,-50@0": "rail-dir",
        "26,28,-50@0": "rail-dir",
        "26,28,-52@0": "rail-dir",
        "26,28,-60@0": "rail-dir",
        "28,28,-58@0": "rail-dir",
        "29,28,-58@0": "rail-dir",
        "30,28,-58@0": "rail-dir",
        "26,28,-66@0": "rail-dir",
        "25,28,-66@0": "rail-dir",
        "22,28,-66@0": "rail-dir",
        "21,28,-66@0": "rail-dir",
        "20,28,-66@0": "rail-dir",
        "19,28,-66@0": "rail-dir",
        "16,28,-66@0": "rail-dir",
        "15,28,-66@0": "rail-dir",
        "14,28,-66@0": "rail-dir",
        "11,28,-66@0": "rail-dir",
        "12,28,-66@0": "rail-dir",
        "13,28,-66@0": "rail-dir",
        "10,28,-68@0": "rail-dir",
        "10,28,-66@0": "rail-dir",
        "10,28,-74@0": "rail-dir",
        "11,28,-74@0": "rail-dir",
        "10,28,-76@0": "rail-dir",
        "12,28,-74@0": "rail-dir",
        "13,28,-74@0": "rail-dir",
        "14,28,-74@0": "rail-dir",
        "15,28,-74@0": "rail-dir",
        "16,28,-74@0": "rail-dir",
        "18,28,-74@0": "rail-dir",
        "19,28,-74@0": "rail-dir",
        "18,28,-76@0": "rail-dir",
        "20,28,-74@0": "rail-dir",
        "21,28,-74@0": "rail-dir",
        "22,28,-74@0": "rail-dir",
        "23,28,-74@0": "rail-dir",
        "24,28,-74@0": "rail-dir",
        "25,28,-74@0": "rail-dir",
        "26,28,-74@0": "rail-dir",
        "26,28,-76@0": "rail-dir",
        "28,28,-74@0": "rail-dir",
        "26,28,-68@0": "rail-dir",
        "28,28,-66@0": "rail-dir",
        "24,28,-66@0": "rail-dir",
        "23,28,-66@0": "rail-dir",
        "18,28,-66@0": "rail-dir",
        "18,28,-68@0": "rail-dir",
        "29,28,-66@0": "rail-dir",
        "30,28,-66@0": "rail-dir",
        "31,28,-66@0": "rail-dir",
        "32,28,-66@0": "rail-dir",
        "29,28,-74@0": "rail-dir",
        "30,28,-74@0": "rail-dir",
        "31,28,-74@0": "rail-dir",
        "32,28,-74@0": "rail-dir",
        "42,28,-74@0": "rail-dir",
        "41,28,-74@0": "rail-dir",
        "51,28,-74@0": "rail-dir",
        "50,28,-74@0": "rail-dir",
        "52,28,-74@0": "rail-dir",
        "64,28,-76@0": "rail-dir",
        "56,28,-67@0": "observer-b",
        "57,28,-66@0": "observer-b",
        "64,28,-67@0": "observer-b",
        "18,28,-75@0": "observer-b",
        "18,28,-77@0": "observer-b",
        "17,28,-74@0": "observer-b",
        "10,28,-67@0": "observer-b",
        "10,28,-75@0": "observer-b",
        "10,28,-59@0": "observer-b",
        "18,28,-67@0": "observer-b",
        "26,28,-75@0": "observer-b",
        "18,28,-78@0": "piston-a",
        "15,28,-77@0": "free",
        "18,28,-62@0": "piston-a",
        "17,28,-62@0": "observer-b",
        "34,28,-75@0": "observer-b",
        "56,28,-62@0": "piston-a",
        "56,28,-78@0": "piston-a",
        "59,28,-77@0": "free",
        "57,28,-62@0": "observer-b",
        "57,28,-63@0": "free",
        "17,28,-63@0": "free",
        "17,28,-79@0": "free",
        "57,28,-78@0": "observer-b",
        "57,28,-79@0": "free",
        "58,28,-79@0": "floor",
        "16,28,-79@0": "floor",
        "16,28,-63@0": "floor",
        "16,28,-62@0": "free",
        "23,28,-77@0": "free",
        "7,28,-77@0": "free",
        "31,28,-77@0": "free",
        "51,28,-53@0": "free",
        "43,28,-30@0": "free",
        "51,28,-30@0": "free",
        "31,28,-22@0": "free",
        "41,28,-43@0": "free",
        "41,28,-42@0": "diode",
        "38,28,-74@0": "observer-b",
        "36,28,-74@0": "observer-b",
        "36,28,-66@0": "observer-b",
        "26,28,-77@0": "observer-b",
        "26,28,-78@0": "piston-a",
        "25,28,-78@0": "observer-b",
        "25,28,-79@0": "free",
        "24,28,-79@0": "floor",
        "24,28,-78@0": "free",
        "18,28,-69@0": "observer-b",
        "18,28,-70@0": "piston-a",
        "10,28,-70@0": "piston-a",
        "17,28,-70@0": "observer-b",
        "17,28,-71@0": "free",
        "9,28,-71@0": "free",
        "8,28,-71@0": "floor",
        "16,28,-71@0": "floor",
        "16,28,-70@0": "free",
        "10,28,-77@0": "observer-b",
        "10,28,-78@0": "piston-a",
        "9,28,-78@0": "observer-b",
        "9,28,-79@0": "free",
        "8,28,-79@0": "floor",
        "26,28,-61@0": "observer-b",
        "26,28,-62@0": "piston-a",
        "25,28,-62@0": "observer-b",
        "10,28,-61@0": "observer-b",
        "10,28,-62@0": "piston-a",
        "24,28,-63@0": "floor",
        "8,28,-62@0": "free",
        "26,28,-69@0": "observer-b",
        "26,28,-70@0": "piston-a",
        "25,28,-70@0": "observer-b",
        "25,28,-71@0": "free",
        "24,28,-71@0": "floor",
        "24,28,-70@0": "free",
        "18,28,-53@0": "observer-b",
        "10,28,-53@0": "observer-b",
        "10,28,-54@0": "piston-a",
        "9,28,-54@0": "observer-b",
        "9,28,-55@0": "free",
        "8,28,-55@0": "floor",
        "8,28,-54@0": "free",
        "34,28,-69@0": "observer-b",
        "64,28,-78@0": "piston-a",
        "24,29,-78@0": "free",
        "16,29,-78@0": "free",
        "16,29,-70@0": "free",
        "34,28,-77@0": "observer-b",
        "34,28,-78@0": "piston-a",
        "33,28,-78@0": "observer-b",
        "33,28,-79@0": "free",
        "32,28,-79@0": "floor",
        "32,28,-78@0": "free",
        "32,29,-78@0": "free",
        "8,29,-54@0": "free",
        "7,29,-54@0": "observer-b",
        "15,29,-62@0": "observer-b",
        "7,29,-70@0": "observer-b",
        "7,29,-62@0": "observer-b",
        "40,28,-69@0": "observer-b",
        "40,28,-70@0": "piston-a",
        "41,28,-70@0": "observer-b",
        "41,28,-71@0": "free",
        "42,28,-71@0": "floor",
        "42,28,-70@0": "free",
        "42,29,-70@0": "free",
        "43,29,-70@0": "observer-b",
        "51,29,-54@0": "observer-b",
        "14,28,-78@0": "piston-a",
        "14,28,-70@0": "piston-a",
        "6,28,-70@0": "piston-a",
        "6,28,-78@0": "piston-a",
        "6,28,-54@0": "piston-a",
        "32,22,-66@0": "free",
        "8,27,-62@0": "free",
        "59,29,-54@0": "observer-b",
        "67,27,-62@0": "fluid",
        "34,25,-50@0": "free",
        "17,22,-51@0": "free",
        "67,22,-26@0": "free",
        "66,27,-78@0": "free",
        "67,27,-78@0": "fluid",
        "70,22,-50@0": "free",
        "70,22,-52@0": "free",
        "70,22,-54@0": "free",
        "67,22,-57@0": "free",
        "69,22,-61@0": "free",
        "66,22,-58@0": "free",
        "69,22,-59@0": "free",
        "68,22,-58@0": "free",
        "69,22,-57@0": "free",
        "70,22,-62@0": "free",
        "70,22,-60@0": "free",
        "66,22,-54@0": "free",
        "61,24,-69@0": "floor",
        "65,22,-53@0": "free",
        "64,22,-52@0": "free",
        "69,22,-55@0": "free",
        "46,22,-52@0": "free",
        "46,22,-50@0": "free",
        "45,22,-49@0": "free",
        "22,28,-70@0": "piston-a",
        "24,0,-42@0": "free",
        "23,0,-42@0": "free",
        "33,0,-32@0": "free",
        "32,0,-32@0": "observer-b",
        "34,0,-32@0": "observer-b",
        "34,0,-34@0": "observer-b",
        "35,0,-34@0": "observer-b",
        "36,0,-34@0": "observer-b",
        "36,0,-32@0": "observer-b",
        "37,0,-32@0": "observer-b",
        "38,0,-32@0": "observer-b",
        "40,0,-34@0": "observer-b",
        "42,0,-34@0": "observer-b",
        "42,0,-32@0": "observer-b",
        "43,0,-32@0": "observer-b",
        "44,0,-32@0": "observer-b",
        "45,0,-32@0": "observer-b",
        "46,0,-32@0": "observer-b",
        "47,0,-32@0": "observer-b",
        "48,0,-32@0": "observer-b",
        "48,0,-34@0": "observer-b",
        "48,1,-32@0": "observer-b",
        "47,1,-32@0": "observer-b",
        "46,1,-32@0": "observer-b",
        "45,1,-32@0": "observer-b",
        "44,1,-32@0": "observer-b",
        "43,1,-32@0": "observer-b",
        "42,1,-32@0": "observer-b",
        "42,1,-33@0": "free",
        "41,1,-33@0": "free",
        "40,1,-33@0": "free",
        "39,1,-33@0": "free",
        "38,1,-33@0": "free",
        "37,1,-33@0": "free",
        "36,1,-33@0": "free",
        "35,1,-33@0": "free",
        "34,1,-33@0": "free",
        "33,1,-33@0": "free",
        "34,1,-34@0": "observer-b",
        "35,1,-34@0": "observer-b",
        "36,1,-34@0": "observer-b",
        "36,1,-32@0": "observer-b",
        "35,1,-32@0": "observer-b",
        "42,1,-34@0": "observer-b",
        "48,1,-50@0": "free",
        "48,1,-49@0": "observer-b",
        "47,1,-49@0": "observer-b",
        "46,1,-49@0": "observer-b",
        "45,1,-49@0": "observer-b",
        "42,1,-49@0": "observer-b",
        "42,2,-49@0": "crafter-a",
        "43,2,-49@0": "crafter-a",
        "44,2,-49@0": "crafter-a",
        "45,2,-49@0": "crafter-a",
        "46,2,-34@0": "crafter-a",
        "48,2,-34@0": "crafter-a",
        "48,2,-32@0": "crafter-a",
        "47,2,-32@0": "crafter-a",
        "24,2,-41@0": "trapdoor-side",
        "21,3,-33@0": "free",
        "20,3,-33@0": "free",
        "17,3,-42@0": "free",
        "48,3,-31@0": "hopper",
        "48,3,-48@0": "hopper",
        "49,4,-49@0": "free",
        "51,4,-49@0": "free",
        "50,4,-48@0": "free",
        "41,4,-49@0": "free",
        "38,4,-50@0": "free",
        "37,4,-50@0": "free",
        "35,4,-50@0": "free",
        "34,4,-50@0": "free",
        "33,4,-48@0": "free",
        "33,4,-35@0": "free",
        "31,4,-33@0": "free",
        "30,4,-33@0": "free",
        "29,4,-33@0": "free",
        "28,4,-33@0": "free",
        "45,4,-51@0": "hopper",
        "48,4,-34@0": "hopper",
        "47,4,-34@0": "hopper",
        "46,4,-34@0": "hopper",
        "45,4,-34@0": "hopper",
        "44,4,-34@0": "hopper",
        "44,4,-32@0": "hopper",
        "45,4,-32@0": "hopper",
        "46,4,-32@0": "hopper",
        "48,4,-32@0": "hopper",
        "42,4,-34@0": "hopper",
        "43,4,-34@0": "hopper",
        "38,4,-32@0": "hopper",
        "37,4,-32@0": "hopper",
        "34,4,-35@0": "hopper",
        "28,4,-48@0": "hopper",
        "27,4,-48@0": "hopper",
        "32,4,-48@0": "hopper",
        "32,4,-52@0": "hopper",
        "31,4,-52@0": "hopper",
        "31,4,-48@0": "hopper",
        "29,4,-48@0": "hopper",
        "45,4,-52@0": "hopper",
        "46,4,-52@0": "hopper",
        "43,4,-48@0": "hopper",
        "42,4,-48@0": "hopper",
        "41,5,-50@0": "free",
        "42,5,-50@0": "free",
        "40,5,-50@0": "free",
        "39,5,-50@0": "free",
        "34,5,-47@0": "free",
        "35,5,-47@0": "free",
        "36,5,-47@0": "free",
        "37,5,-47@0": "free",
        "38,5,-47@0": "free",
        "39,5,-47@0": "free",
        "40,5,-47@0": "free",
        "41,5,-47@0": "free",
        "42,5,-47@0": "free",
        "43,5,-47@0": "free",
        "44,5,-47@0": "free",
        "45,5,-47@0": "free",
        "29,5,-62@0": "free",
        "24,5,-49@0": "free",
        "25,5,-49@0": "free",
        "44,5,-34@0": "free",
        "45,5,-34@0": "free",
        "38,5,-35@0": "free",
        "45,5,-32@0": "free",
        "46,5,-32@0": "free",
        "47,5,-32@0": "free",
        "44,5,-32@0": "free",
        "35,5,-35@0": "free",
        "55,5,-31@0": "free",
        "55,5,-32@0": "free",
        "56,5,-31@0": "free",
        "7,5,-20@0": "free",
        "25,6,-33@0": "free",
        "24,6,-33@0": "free",
        "24,6,-34@0": "free",
        "23,6,-34@0": "free",
        "23,6,-35@0": "free",
        "22,6,-36@0": "free",
        "18,6,-41@0": "free",
        "19,6,-42@0": "free",
        "17,6,-42@0": "free",
        "18,6,-43@0": "free",
        "18,6,-47@0": "free",
        "59,7,-81@0": "free",
        "45,7,-34@0": "free",
        "46,7,-34@0": "free",
        "73,7,-22@0": "free",
        "73,7,-21@0": "free",
        "73,7,-20@0": "free",
        "21,8,-82@0": "free",
        "54,8,-46@0": "free",
        "54,8,-37@0": "free",
        "55,8,-37@0": "free",
        "20,9,-37@0": "free",
        "19,9,-37@0": "free",
        "18,9,-37@0": "free",
        "15,9,-37@0": "free",
        "18,9,-41@0": "free",
        "16,9,-37@0": "free",
        "17,9,-37@0": "free",
        "14,9,-37@0": "free",
        "12,9,-37@0": "free",
        "13,9,-37@0": "free",
        "11,9,-37@0": "free",
        "9,9,-37@0": "free",
        "10,9,-37@0": "free",
        "20,9,-46@0": "free",
        "1,9,-63@0": "free",
        "1,9,-65@0": "free",
        "1,9,-64@0": "free",
        "1,9,-66@0": "free",
        "1,9,-70@0": "free",
        "1,9,-69@0": "free",
        "1,9,-71@0": "free",
        "12,9,-82@0": "free",
        "44,9,-82@0": "free",
        "32,9,-82@0": "free",
        "31,9,-82@0": "free",
        "37,9,-53@0": "free",
        "37,9,-52@0": "free",
        "37,9,-51@0": "free",
        "37,9,-50@0": "free",
        "33,9,-45@0": "free",
        "34,9,-45@0": "free",
        "35,9,-45@0": "free",
        "32,9,-45@0": "free",
        "31,9,-45@0": "free",
        "30,9,-45@0": "free",
        "29,9,-45@0": "free",
        "28,9,-45@0": "free",
        "31,9,-44@0": "free",
        "32,9,-44@0": "free",
        "33,9,-44@0": "free",
        "34,9,-44@0": "free",
        "35,9,-44@0": "free",
        "36,9,-43@0": "free",
        "37,9,-43@0": "free",
        "38,9,-43@0": "free",
        "39,9,-43@0": "free",
        "39,9,-44@0": "free",
        "39,9,-45@0": "free",
        "40,9,-45@0": "free",
        "41,9,-45@0": "free",
        "42,9,-45@0": "free",
        "43,9,-45@0": "free",
        "40,9,-44@0": "free",
        "41,9,-44@0": "free",
        "42,9,-44@0": "free",
        "43,9,-44@0": "free",
        "44,9,-44@0": "free",
        "45,9,-44@0": "free",
        "45,9,-45@0": "free",
        "46,9,-45@0": "free",
        "46,9,-44@0": "free",
        "44,9,-45@0": "free",
        "41,9,-42@0": "free",
        "40,9,-43@0": "free",
        "40,9,-42@0": "free",
        "42,9,-42@0": "free",
        "43,9,-42@0": "free",
        "44,9,-42@0": "free",
        "48,9,-45@0": "free",
        "49,9,-45@0": "free",
        "50,9,-45@0": "free",
        "45,9,-42@0": "free",
        "46,9,-42@0": "free",
        "47,9,-42@0": "free",
        "51,9,-45@0": "free",
        "52,9,-45@0": "free",
        "48,9,-42@0": "free",
        "49,9,-42@0": "free",
        "49,9,-43@0": "free",
        "49,9,-44@0": "free",
        "50,9,-44@0": "free",
        "50,9,-43@0": "free",
        "51,9,-44@0": "free",
        "51,9,-43@0": "free",
        "51,9,-42@0": "free",
        "49,9,-41@0": "free",
        "49,9,-40@0": "free",
        "49,9,-39@0": "free",
        "49,9,-38@0": "free",
        "50,9,-41@0": "free",
        "50,9,-40@0": "free",
        "50,9,-39@0": "free",
        "50,9,-38@0": "free",
        "48,9,-41@0": "free",
        "48,9,-40@0": "free",
        "48,9,-39@0": "free",
        "48,9,-38@0": "free",
        "47,9,-38@0": "free",
        "51,9,-38@0": "free",
        "52,9,-38@0": "free",
        "51,9,-41@0": "free",
        "51,9,-40@0": "free",
        "51,9,-39@0": "free",
        "53,9,-38@0": "free",
        "52,9,-44@0": "free",
        "52,9,-41@0": "free",
        "52,9,-42@0": "free",
        "52,9,-43@0": "free",
        "54,9,-45@0": "free",
        "58,9,-45@0": "free",
        "57,9,-45@0": "free",
        "51,10,-44@0": "free",
        "51,10,-42@0": "free",
        "37,9,-4@0": "free",
        "37,9,-5@0": "free",
        "32,10,-39@0": "free",
        "13,10,-40@0": "stairs-top",
        "1,10,-49@0": "free",
        "73,10,-82@0": "free",
        "74,10,-81@0": "free",
        "74,10,-80@0": "free",
        "74,10,-79@0": "free",
        "74,10,-78@0": "free",
        "74,10,-77@0": "free",
        "74,10,-76@0": "free",
        "74,10,-75@0": "free",
        "74,10,-74@0": "free",
        "74,10,-73@0": "free",
        "74,10,-72@0": "free",
        "74,10,-71@0": "free",
        "74,10,-70@0": "free",
        "74,10,-69@0": "free",
        "74,10,-68@0": "free",
        "74,10,-67@0": "free",
        "74,10,-66@0": "free",
        "74,10,-65@0": "free",
        "74,10,-64@0": "free",
        "74,10,-63@0": "free",
        "74,10,-62@0": "free",
        "74,10,-61@0": "free",
        "74,10,-60@0": "free",
        "74,10,-59@0": "free",
        "74,10,-58@0": "free",
        "74,10,-57@0": "free",
        "74,10,-56@0": "free",
        "74,10,-55@0": "free",
        "74,10,-54@0": "free",
        "74,10,-53@0": "free",
        "74,10,-52@0": "free",
        "74,10,-51@0": "free",
        "74,10,-50@0": "free",
        "74,11,-47@0": "free",
        "74,11,-46@0": "free",
        "74,11,-48@0": "free",
        "73,11,-49@0": "free",
        "74,11,-44@0": "free",
        "74,11,-45@0": "free",
        "74,11,-43@0": "free",
        "73,11,-42@0": "free",
        "74,11,-42@0": "free",
        "74,11,-40@0": "free",
        "74,11,-39@0": "free",
        "74,11,-37@0": "free",
        "74,11,-38@0": "free",
        "73,11,-41@0": "free",
        "74,11,-36@0": "free",
        "73,11,-34@0": "free",
        "74,11,-35@0": "free",
        "74,11,-33@0": "free",
        "74,11,-32@0": "free",
        "74,11,-30@0": "free",
        "74,11,-31@0": "free",
        "74,11,-29@0": "free",
        "74,11,-27@0": "free",
        "74,11,-28@0": "free",
        "0,10,-31@0": "free",
        "0,10,-30@0": "free",
        "0,10,-29@0": "free",
        "0,10,-28@0": "free",
        "0,10,-27@0": "free",
        "0,10,-26@0": "free",
        "0,10,-25@0": "free",
        "0,10,-24@0": "free",
        "0,10,-23@0": "free",
        "0,10,-22@0": "free",
        "0,10,-21@0": "free",
        "0,10,-20@0": "free",
        "0,10,-19@0": "free",
        "0,10,-18@0": "free",
        "0,10,-17@0": "free",
        "0,10,-16@0": "free",
        "0,10,-15@0": "free",
        "0,10,-14@0": "free",
        "0,10,-13@0": "free",
        "0,10,-12@0": "free",
        "0,10,-11@0": "free",
        "0,10,-10@0": "free",
        "0,10,-9@0": "free",
        "0,10,-8@0": "free",
        "0,10,-7@0": "free",
        "0,10,-6@0": "free",
        "0,10,-5@0": "free",
        "0,10,-4@0": "free",
        "0,10,-3@0": "free",
        "0,10,-2@0": "free",
        "1,11,-1@0": "free",
        "0,11,-3@0": "free",
        "0,11,-4@0": "free",
        "0,11,-2@0": "free",
        "0,11,-5@0": "free",
        "0,11,-6@0": "free",
        "40,11,-1@0": "free",
        "39,11,0@0": "free",
        "41,11,0@0": "free",
        "42,11,-40@0": "fluid",
        "25,11,-43@0": "fluid",
        "19,12,-44@0": "free",
        "47,12,0@0": "free",
        "48,12,0@0": "free",
        "49,12,0@0": "free",
        "61,12,-39@0": "stairs-bottom",
        "18,12,-83@0": "free",
        "17,12,-83@0": "free",
        "29,12,-44@0": "chest-sneak",
        "30,12,-44@0": "chest-sneak",
        "54,12,-42@0": "free",
        "54,12,-41@0": "free",
        "53,12,-39@0": "chest-sneak",
        "51,12,-39@0": "chest-sneak",
        "55,13,-40@0": "free",
        "74,13,-43@0": "free",
        "74,13,-45@0": "free",
        "74,13,-47@0": "free",
        "74,13,-46@0": "free",
        "74,13,-48@0": "free",
        "73,13,-49@0": "free",
        "74,13,-50@0": "free",
        "74,13,-51@0": "free",
        "74,13,-53@0": "free",
        "74,13,-52@0": "free",
        "74,13,-54@0": "free",
        "74,13,-56@0": "free",
        "74,13,-55@0": "free",
        "74,13,-57@0": "free",
        "74,13,-59@0": "free",
        "74,13,-58@0": "free",
        "74,13,-60@0": "free",
        "74,13,-62@0": "free",
        "74,13,-61@0": "free",
        "74,13,-63@0": "free",
        "74,13,-65@0": "free",
        "74,13,-64@0": "free",
        "74,13,-66@0": "free",
        "74,13,-68@0": "free",
        "74,13,-67@0": "free",
        "74,13,-69@0": "free",
        "74,13,-71@0": "free",
        "74,13,-70@0": "free",
        "74,13,-72@0": "free",
        "74,13,-74@0": "free",
        "74,13,-73@0": "free",
        "74,13,-75@0": "free",
        "74,13,-77@0": "free",
        "74,13,-76@0": "free",
        "74,13,-78@0": "free",
        "74,13,-80@0": "free",
        "74,13,-79@0": "free",
        "74,13,-81@0": "free",
        "73,13,-82@0": "free",
        "72,13,-83@0": "free",
        "71,13,-83@0": "free",
        "70,13,-83@0": "free",
        "68,13,-83@0": "free",
        "69,13,-83@0": "free",
        "67,13,-83@0": "free",
        "65,13,-83@0": "free",
        "66,13,-83@0": "free",
        "64,13,-83@0": "free",
        "63,13,-83@0": "free",
        "62,13,-83@0": "free",
        "74,13,-38@0": "free",
        "74,13,-37@0": "free",
        "74,13,-27@0": "free",
        "74,13,-26@0": "free",
        "74,13,-25@0": "free",
        "1,13,-34@0": "free",
        "0,13,-25@0": "free",
        "32,13,-40@0": "hopper",
        "31,13,-40@0": "hopper",
        "31,13,-39@0": "hopper",
        "32,13,-39@0": "hopper",
        "33,13,-40@0": "hopper",
        "33,13,-39@0": "hopper",
        "20,13,-43@0": "hopper",
        "20,13,-44@0": "hopper",
        "16,14,-39@0": "free",
        "16,14,-40@0": "free",
        "15,14,-40@0": "stairs-bottom",
        "15,14,-43@0": "stairs-bottom",
        "17,14,-44@0": "free",
        "0,14,-41@0": "free",
        "18,14,-42@0": "trapdoor-side",
        "57,14,-45@0": "free",
        "56,14,-45@0": "free",
        "54,14,-45@0": "free",
        "53,14,-45@0": "free",
        "52,14,-45@0": "free",
        "51,14,-45@0": "free",
        "50,14,-45@0": "free",
        "49,14,-45@0": "free",
        "48,14,-38@0": "free",
        "47,14,-38@0": "free",
        "46,14,-38@0": "free",
        "45,14,-38@0": "free",
        "44,14,-38@0": "free",
        "43,14,-38@0": "free",
        "42,14,-38@0": "free",
        "41,14,-38@0": "free",
        "40,14,-38@0": "free",
        "39,14,-38@0": "free",
        "38,14,-38@0": "free",
        "37,14,-38@0": "free",
        "36,14,-38@0": "free",
        "35,14,-38@0": "free",
        "54,14,-33@0": "free",
        "56,14,-33@0": "free",
        "56,14,-32@0": "free",
        "55,14,-32@0": "free",
        "56,14,-31@0": "free",
        "57,14,-32@0": "free",
        "58,14,-33@0": "free",
        "60,14,-33@0": "free",
        "62,14,-33@0": "free",
        "60,14,-35@0": "free",
        "42,14,-33@0": "free",
        "43,14,-34@0": "free",
        "51,14,-49@0": "free",
        "50,14,-49@0": "free",
        "49,14,-49@0": "free",
        "58,14,-49@0": "free",
        "57,14,-49@0": "free",
        "60,14,-50@0": "free",
        "62,14,-50@0": "free",
        "16,14,-49@0": "free",
        "17,14,-49@0": "free",
        "12,14,-60@0": "free",
        "13,14,-61@0": "free",
        "12,14,-61@0": "free",
        "12,14,-62@0": "free",
        "6,14,-48@0": "free",
        "5,14,-49@0": "free",
        "4,14,-50@0": "free",
        "3,14,-51@0": "free",
        "4,14,-53@0": "free",
        "4,14,-54@0": "free",
        "4,14,-68@0": "free",
        "4,14,-69@0": "free",
        "4,14,-70@0": "free",
        "33,14,-79@0": "free",
        "30,14,-78@0": "free",
        "30,14,-79@0": "free",
        "17,14,-79@0": "free",
        "16,14,-78@0": "free",
        "62,14,-52@0": "free",
        "50,14,-58@0": "free",
        "49,14,-57@0": "free",
        "65,14,-57@0": "free",
        "58,14,-57@0": "free",
        "59,14,-57@0": "free",
        "58,14,-58@0": "free",
        "68,14,-48@0": "free",
        "54,14,-60@0": "free",
        "54,14,-62@0": "free",
        "65,14,-62@0": "free",
        "64,14,-62@0": "free",
        "66,14,-62@0": "free",
        "71,14,-51@0": "free",
        "70,14,-52@0": "free",
        "70,14,-53@0": "free",
        "70,14,-54@0": "free",
        "54,14,-70@0": "free",
        "69,14,-65@0": "free",
        "69,14,-66@0": "free",
        "68,14,-66@0": "free",
        "69,14,-67@0": "free",
        "70,14,-66@0": "free",
        "58,14,-72@0": "free",
        "59,14,-73@0": "free",
        "66,14,-74@0": "free",
        "61,14,-73@0": "free",
        "60,14,-74@0": "free",
        "61,14,-75@0": "free",
        "71,14,-75@0": "free",
        "27,14,-32@0": "free",
        "53,14,-18@0": "free",
        "57,14,-18@0": "free",
        "58,14,-17@0": "free",
        "40,14,-15@0": "free",
        "52,14,-17@0": "free",
        "53,14,-16@0": "free",
        "41,14,-14@0": "free",
        "42,14,-11@0": "free",
        "41,14,-10@0": "free",
        "44,14,-9@0": "free",
        "69,14,-10@0": "free",
        "54,14,-7@0": "free",
        "56,14,-5@0": "free",
        "57,14,-4@0": "free",
        "58,14,-5@0": "free",
        "71,14,-8@0": "free",
        "69,14,-6@0": "free",
        "52,14,-4@0": "free",
        "51,14,-4@0": "free",
        "53,14,-4@0": "free",
        "27,14,-22@0": "free",
        "30,14,-21@0": "free",
        "30,14,-19@0": "free",
        "32,14,-21@0": "free",
        "34,14,-21@0": "free",
        "29,14,-20@0": "free",
        "21,14,-16@0": "free",
        "20,14,-15@0": "free",
        "17,14,-13@0": "free",
        "18,14,-13@0": "free",
        "17,14,-12@0": "free",
        "21,14,-10@0": "free",
        "21,14,-9@0": "free",
        "22,14,-9@0": "free",
        "21,14,-8@0": "free",
        "33,14,-6@0": "free",
        "5,14,-6@0": "free",
        "16,14,-3@0": "free",
        "21,13,-29@0": "free",
        "18,13,-22@0": "free",
        "24,13,-28@0": "free",
        "30,13,-34@0": "free",
        "66,13,-20@0": "free",
        "70,13,-16@0": "free",
        "57,13,-9@0": "free",
        "68,13,-10@0": "free",
        "66,13,-12@0": "free",
        "58,13,-20@0": "free",
        "44,13,-34@0": "free",
        "51,13,-23@0": "free",
        "48,13,-22@0": "free",
        "53,13,-5@0": "free",
        "56,13,-6@0": "free",
        "52,13,-10@0": "free",
        "48,13,-14@0": "free",
        "40,13,-22@0": "free",
        "40,13,-14@0": "free",
        "48,13,-6@0": "free",
        "45,13,-5@0": "free",
        "40,13,-6@0": "free",
        "25,13,-50@0": "free",
        "40,13,-53@0": "free",
        "54,13,-75@0": "free",
        "59,13,-76@0": "free",
        "48,13,-69@0": "free",
        "48,13,-61@0": "free",
        "61,13,-78@0": "free",
        "61,13,-70@0": "free",
        "60,13,-73@0": "free",
        "49,13,-50@0": "free",
        "51,13,-52@0": "free",
        "57,13,-50@0": "free",
        "56,13,-53@0": "free",
        "62,13,-75@0": "free",
        "66,13,-63@0": "free",
        "69,13,-70@0": "free",
        "66,13,-79@0": "free",
        "67,13,-76@0": "free",
        "64,13,-69@0": "free",
        "30,14,-26@0": "fluid",
        "34,14,-30@0": "fluid",
        "33,14,-25@0": "fluid",
        "30,14,-34@0": "fluid",
        "26,14,-22@0": "fluid",
        "10,14,-30@0": "fluid",
        "64,14,-6@0": "fluid",
        "25,15,-45@0": "free",
        "22,15,-43@0": "free",
        "21,15,-43@0": "free",
        "19,15,-45@0": "free",
        "20,15,-45@0": "free",
        "18,15,-45@0": "free",
        "17,15,-45@0": "free",
        "17,15,-44@0": "free",
        "17,15,-43@0": "free",
        "18,15,-43@0": "free",
        "16,15,-43@0": "stairs-bottom",
        "16,15,-45@0": "free",
        "16,15,-44@0": "stairs-bottom",
        "16,15,-42@0": "stairs-bottom",
        "0,15,-42@0": "free",
        "0,15,-43@0": "free",
        "0,15,-44@0": "free",
        "0,15,-47@0": "free",
        "0,15,-46@0": "free",
        "0,15,-45@0": "free",
        "0,15,-48@0": "free",
        "1,15,-49@0": "free",
        "0,15,-41@0": "free",
        "0,15,-39@0": "free",
        "0,15,-40@0": "free",
        "1,15,-82@0": "free",
        "41,15,-82@0": "free",
        "42,15,-82@0": "free",
        "44,15,-82@0": "free",
        "3,15,-82@0": "free",
        "2,15,-82@0": "free",
        "4,15,-82@0": "free",
        "5,15,-82@0": "free",
        "6,15,-82@0": "free",
        "7,15,-82@0": "free",
        "8,15,-82@0": "free",
        "9,15,-82@0": "free",
        "1,15,-81@0": "free",
        "1,15,-80@0": "free",
        "1,15,-79@0": "free",
        "1,15,-78@0": "free",
        "1,15,-77@0": "free",
        "1,15,-76@0": "free",
        "1,15,-75@0": "free",
        "1,15,-74@0": "free",
        "1,15,-73@0": "free",
        "1,15,-72@0": "free",
        "1,15,-71@0": "free",
        "42,15,-45@0": "free",
        "1,15,-46@0": "free",
        "1,15,-47@0": "free",
        "1,15,-50@0": "free",
        "1,15,-51@0": "free",
        "1,15,-52@0": "free",
        "1,15,-53@0": "free",
        "1,15,-54@0": "free",
        "1,15,-55@0": "free",
        "1,15,-56@0": "free",
        "1,15,-57@0": "free",
        "1,15,-58@0": "free",
        "1,15,-59@0": "free",
        "1,15,-60@0": "free",
        "1,15,-61@0": "free",
        "1,15,-62@0": "free",
        "1,15,-63@0": "free",
        "1,15,-64@0": "free",
        "1,15,-65@0": "free",
        "1,15,-66@0": "free",
        "1,15,-67@0": "free",
        "1,15,-68@0": "free",
        "1,15,-69@0": "free",
        "1,15,-70@0": "free",
        "1,15,-33@0": "free",
        "1,15,-36@0": "free",
        "1,15,-37@0": "free",
        "1,15,-32@0": "free",
        "1,15,-31@0": "free",
        "1,15,-29@0": "free",
        "39,15,0@0": "free",
        "40,15,-1@0": "free",
        "72,15,-1@0": "free",
        "71,15,-1@0": "free",
        "70,15,-1@0": "free",
        "69,15,-1@0": "free",
        "68,15,-1@0": "free",
        "67,15,-1@0": "free",
        "66,15,-1@0": "free",
        "65,15,-1@0": "free",
        "64,15,-1@0": "free",
        "51,15,-1@0": "free",
        "45,15,-1@0": "free",
        "73,15,-2@0": "free",
        "73,15,-3@0": "free",
        "73,15,-6@0": "free",
        "73,15,-7@0": "free",
        "73,15,-9@0": "free",
        "73,15,-10@0": "free",
        "73,15,-11@0": "free",
        "73,15,-12@0": "free",
        "69,14,-21@0": "fluid",
        "1,15,-10@0": "free",
        "1,15,-11@0": "free",
        "1,15,-12@0": "free",
        "1,15,-13@0": "free",
        "1,15,-14@0": "free",
        "1,15,-15@0": "free",
        "1,15,-16@0": "free",
        "1,15,-17@0": "free",
        "1,15,-18@0": "free",
        "1,15,-19@0": "free",
        "21,15,-1@0": "free",
        "9,15,-58@0": "fluid",
        "6,15,-57@0": "fluid",
        "4,15,-59@0": "fluid",
        "5,15,-62@0": "fluid",
        "6,16,-56@0": "free",
        "64,15,-77@0": "fluid",
        "6,15,-79@0": "free",
        "8,15,-80@0": "free",
        "7,15,-79@0": "free",
        "5,15,-79@0": "free",
        "49,14,-17@0": "fluid",
        "65,14,-25@0": "fluid",
        "5,16,-70@0": "fluid",
        "8,16,-71@0": "fluid",
        "9,16,-66@0": "fluid",
        "6,16,-65@0": "fluid",
        "4,16,-67@0": "fluid",
        "8,17,-55@0": "fluid",
        "10,17,-53@0": "fluid",
        "20,14,-51@0": "fluid",
        "25,17,-51@0": "free",
        "18,17,-50@0": "free",
        "19,17,-53@0": "free",
        "22,17,-50@0": "free",
        "18,17,-52@0": "free",
        "16,17,-50@0": "free",
        "15,16,-49@0": "free",
        "13,16,-54@0": "fluid",
        "12,15,-59@0": "fluid",
        "18,15,-61@0": "fluid",
        "12,15,-67@0": "fluid",
        "17,15,-74@0": "fluid",
        "18,15,-69@0": "fluid",
        "13,15,-70@0": "fluid",
        "25,15,-74@0": "fluid",
        "16,15,-71@0": "fluid",
        "6,17,-65@0": "fluid",
        "4,17,-67@0": "fluid",
        "9,17,-50@0": "fluid",
        "6,17,-49@0": "fluid",
        "16,16,-55@0": "fluid",
        "18,17,-51@0": "free",
        "17,17,-53@0": "free",
        "20,16,-51@0": "fluid",
        "4,17,-51@0": "fluid",
        "6,18,-48@0": "free",
        "4,18,-52@0": "free",
        "3,18,-51@0": "free",
        "17,16,-66@0": "fluid",
        "18,15,-77@0": "fluid",
        "16,16,-71@0": "fluid",
        "21,15,-78@0": "fluid",
        "22,15,-73@0": "fluid",
        "5,17,-70@0": "fluid",
        "13,16,-62@0": "fluid",
        "17,16,-50@0": "fluid",
        "14,17,-49@0": "fluid",
        "5,17,-54@0": "fluid",
        "13,17,-54@0": "fluid",
        "16,17,-55@0": "fluid",
        "9,18,-50@0": "fluid",
        "8,18,-55@0": "fluid",
        "18,17,-53@0": "fluid",
        "12,17,-51@0": "fluid",
        "17,17,-50@0": "fluid",
        "14,18,-49@0": "fluid",
        "17,18,-50@0": "fluid",
        "18,18,-53@0": "fluid",
        "5,18,-66@0": "free",
        "10,18,-69@0": "fluid",
        "8,18,-71@0": "fluid",
        "16,18,-55@0": "fluid",
        "5,18,-78@0": "fluid",
        "6,18,-49@0": "fluid",
        "4,18,-51@0": "fluid",
        "9,18,-66@0": "fluid",
        "49,15,-50@0": "fluid",
        "8,18,-79@0": "fluid",
        "54,15,-51@0": "fluid",
        "49,16,-50@0": "fluid",
        "60,15,-49@0": "fluid",
        "6,18,-73@0": "fluid",
        "4,18,-75@0": "fluid",
        "13,16,-70@0": "fluid",
        "12,16,-67@0": "fluid",
        "14,16,-65@0": "fluid",
        "53,16,-54@0": "fluid",
        "54,16,-51@0": "fluid",
        "25,16,-74@0": "fluid",
        "21,16,-78@0": "fluid",
        "20,16,-75@0": "fluid",
        "13,17,-70@0": "fluid",
        "12,17,-67@0": "fluid",
        "14,17,-65@0": "fluid",
        "62,16,-51@0": "fluid",
        "64,16,-53@0": "fluid",
        "68,16,-49@0": "fluid",
        "17,18,-66@0": "fluid",
        "21,17,-78@0": "fluid",
        "64,16,-61@0": "fluid",
        "66,16,-55@0": "fluid",
        "57,16,-74@0": "fluid",
        "69,16,-54@0": "fluid",
        "18,18,-69@0": "fluid",
        "14,18,-65@0": "fluid",
        "13,18,-70@0": "fluid",
        "12,18,-67@0": "fluid",
        "14,16,-57@0": "fluid",
        "20,17,-75@0": "fluid",
        "22,17,-73@0": "fluid",
        "25,18,-74@0": "fluid",
        "22,18,-73@0": "fluid",
        "13,17,-78@0": "fluid",
        "20,18,-75@0": "fluid",
        "21,18,-78@0": "fluid",
        "12,16,-59@0": "fluid",
        "13,18,-78@0": "fluid",
        "16,18,-79@0": "fluid",
        "12,18,-75@0": "fluid",
        "17,18,-74@0": "fluid",
        "12,17,-59@0": "fluid",
        "14,17,-57@0": "fluid",
        "18,17,-61@0": "fluid",
        "13,18,-62@0": "fluid",
        "16,18,-63@0": "fluid",
        "14,18,-57@0": "fluid",
        "17,18,-58@0": "fluid",
        "18,18,-61@0": "fluid",
        "20,15,-59@0": "fluid",
        "56,15,-69@0": "fluid",
        "42,15,-71@0": "fluid",
        "61,16,-12@0": "free",
        "26,16,-22@0": "fluid",
        "24,16,-20@0": "fluid",
        "56,16,-13@0": "free",
        "57,16,-14@0": "free",
        "55,16,-14@0": "free",
        "42,15,-20@0": "fluid",
        "65,17,-66@0": "fluid",
        "60,16,-73@0": "fluid",
        "48,15,-61@0": "fluid",
        "50,15,-63@0": "fluid",
        "53,15,-62@0": "fluid",
        "48,15,-69@0": "fluid",
        "50,15,-71@0": "fluid",
        "48,16,-69@0": "fluid",
        "50,16,-63@0": "fluid",
        "50,16,-71@0": "fluid",
        "48,16,-61@0": "fluid",
        "53,16,-70@0": "fluid",
        "40,15,-61@0": "fluid",
        "42,15,-63@0": "fluid",
        "56,16,-6@0": "fluid",
        "58,16,-4@0": "fluid",
        "50,16,-4@0": "fluid",
        "54,16,-75@0": "fluid",
        "49,17,-74@0": "fluid",
        "48,17,-77@0": "fluid",
        "50,17,-79@0": "fluid",
        "53,17,-78@0": "fluid",
        "66,16,-79@0": "fluid",
        "69,17,-55@0": "free",
        "69,17,-57@0": "free",
        "70,17,-60@0": "free",
        "69,17,-61@0": "free",
        "66,17,-63@0": "fluid",
        "70,17,-59@0": "fluid",
        "66,18,-63@0": "fluid",
        "61,16,-62@0": "fluid",
        "68,16,-18@0": "fluid",
        "62,18,-54@0": "free",
        "47,17,-30@0": "free",
        "48,17,-29@0": "free",
        "63,18,-51@0": "free",
        "58,17,-55@0": "fluid",
        "58,18,-74@0": "free",
        "57,18,-73@0": "free",
        "54,16,-67@0": "fluid",
        "54,17,-59@0": "fluid",
        "68,18,-73@0": "fluid",
        "65,18,-74@0": "fluid",
        "66,18,-79@0": "fluid",
        "69,18,-78@0": "fluid",
        "58,18,-79@0": "fluid",
        "60,18,-73@0": "fluid",
        "52,18,-35@0": "free",
        "69,17,-12@0": "free",
        "68,17,-13@0": "free",
        "66,17,-13@0": "free",
        "69,17,-14@0": "free",
        "68,18,-13@0": "free",
        "69,17,-18@0": "free",
        "71,17,-16@0": "free",
        "65,17,-13@0": "free",
        "64,17,-16@0": "free",
        "61,18,-5@0": "fluid",
        "62,18,-8@0": "fluid",
        "60,18,-10@0": "fluid",
        "57,18,-9@0": "fluid",
        "56,18,-6@0": "fluid",
        "58,18,-4@0": "fluid",
        "52,17,-10@0": "fluid",
        "50,17,-4@0": "fluid",
        "58,17,-28@0": "fluid",
        "28,18,-29@0": "free",
        "29,18,-34@0": "free",
        "30,18,-35@0": "free",
        "53,18,-62@0": "fluid",
        "33,18,-33@0": "fluid",
        "54,18,-32@0": "fluid",
        "49,18,-8@0": "free",
        "52,17,-20@0": "free",
        "61,18,-29@0": "fluid",
        "66,18,-12@0": "fluid",
        "68,18,-10@0": "fluid",
        "61,18,-12@0": "free",
        "58,18,-11@0": "free",
        "59,18,-12@0": "free",
        "57,18,-20@0": "free",
        "62,18,-23@0": "free",
        "61,18,-24@0": "free",
        "57,18,-22@0": "free",
        "60,18,-25@0": "free",
        "60,18,-27@0": "free",
        "57,18,-18@0": "free",
        "49,18,-65@0": "free",
        "48,18,-66@0": "free",
        "56,18,-66@0": "free",
        "55,18,-69@0": "free",
        "57,18,-67@0": "free",
        "57,18,-65@0": "free",
        "56,18,-68@0": "free",
        "49,18,-66@0": "fluid",
        "53,18,-70@0": "fluid",
        "62,18,-67@0": "fluid",
        "73,16,-38@0": "free",
        "2,17,-38@0": "free",
        "39,18,0@0": "free",
        "38,18,0@0": "free",
        "37,18,0@0": "free",
        "0,18,-43@0": "free",
        "0,18,-42@0": "free",
        "1,18,-43@0": "free",
        "1,18,-40@0": "free",
        "0,18,-40@0": "free",
        "0,18,-39@0": "free",
        "0,18,-38@0": "free",
        "2,18,-38@0": "free",
        "1,18,-36@0": "free",
        "0,18,-36@0": "free",
        "0,18,-37@0": "free",
        "0,18,-41@0": "free",
        "1,18,-39@0": "free",
        "2,18,-37@0": "free",
        "0,18,-35@0": "free",
        "1,18,-34@0": "free",
        "2,18,-45@0": "free",
        "2,18,-46@0": "free",
        "1,19,-44@0": "free",
        "1,19,-43@0": "free",
        "0,19,-45@0": "free",
        "0,19,-46@0": "free",
        "0,19,-47@0": "free",
        "1,19,-47@0": "free",
        "2,19,-46@0": "free",
        "0,19,-44@0": "free",
        "0,19,-48@0": "free",
        "1,19,-49@0": "free",
        "2,19,-45@0": "free",
        "0,19,-43@0": "free",
        "0,19,-42@0": "free",
        "0,19,-40@0": "free",
        "0,19,-41@0": "free",
        "1,19,-40@0": "free",
        "0,19,-39@0": "free",
        "1,19,-39@0": "free",
        "0,19,-37@0": "free",
        "0,19,-38@0": "free",
        "0,19,-35@0": "free",
        "0,19,-36@0": "free",
        "5,19,-50@0": "free",
        "4,19,-50@0": "free",
        "3,19,-51@0": "free",
        "2,19,-37@0": "free",
        "2,19,-38@0": "free",
        "1,19,-36@0": "free",
        "14,19,-57@0": "fluid",
        "16,19,-55@0": "fluid",
        "6,20,-57@0": "fluid",
        "5,20,-62@0": "fluid",
        "18,19,-53@0": "fluid",
        "16,20,-63@0": "fluid",
        "17,19,-50@0": "fluid",
        "14,19,-49@0": "fluid",
        "12,19,-51@0": "fluid",
        "13,21,-58@0": "free",
        "12,21,-58@0": "free",
        "13,21,-57@0": "free",
        "13,19,-54@0": "fluid",
        "11,21,-59@0": "free",
        "33,22,-78@0": "free",
        "18,22,-61@0": "fluid",
        "12,22,-59@0": "fluid",
        "17,20,-50@0": "fluid",
        "20,21,-67@0": "fluid",
        "14,21,-48@0": "free",
        "17,21,-50@0": "fluid",
        "13,21,-54@0": "fluid",
        "17,22,-54@0": "free",
        "16,22,-54@0": "free",
        "17,22,-55@0": "free",
        "17,22,-53@0": "free",
        "18,22,-54@0": "free",
        "18,22,-52@0": "free",
        "19,22,-53@0": "free",
        "14,22,-55@0": "free",
        "12,22,-52@0": "free",
        "13,22,-53@0": "free",
        "13,22,-54@0": "fluid",
        "11,20,-69@0": "free",
        "27,19,-77@0": "free",
        "9,19,-50@0": "fluid",
        "10,19,-53@0": "fluid",
        "8,19,-55@0": "fluid",
        "5,19,-54@0": "fluid",
        "4,19,-51@0": "fluid",
        "6,19,-49@0": "fluid",
        "6,20,-65@0": "fluid",
        "6,21,-65@0": "fluid",
        "9,21,-66@0": "fluid",
        "10,21,-69@0": "fluid",
        "8,21,-71@0": "fluid",
        "8,22,-49@0": "free",
        "7,22,-49@0": "free",
        "8,22,-50@0": "free",
        "9,22,-49@0": "free",
        "10,22,-51@0": "free",
        "9,22,-51@0": "free",
        "10,22,-52@0": "free",
        "10,22,-50@0": "free",
        "11,22,-53@0": "free",
        "9,22,-54@0": "free",
        "8,22,-54@0": "free",
        "9,22,-55@0": "free",
        "9,22,-53@0": "free",
        "10,22,-54@0": "free",
        "6,22,-55@0": "free",
        "5,22,-55@0": "free",
        "6,22,-54@0": "free",
        "7,22,-55@0": "free",
        "8,22,-56@0": "free",
        "4,22,-53@0": "free",
        "4,22,-54@0": "free",
        "4,22,-52@0": "free",
        "5,22,-53@0": "free",
        "5,21,-70@0": "fluid",
        "5,22,-66@0": "free",
        "6,22,-66@0": "free",
        "5,22,-65@0": "free",
        "4,22,-66@0": "free",
        "5,22,-67@0": "free",
        "3,22,-67@0": "free",
        "4,22,-69@0": "free",
        "4,22,-70@0": "free",
        "4,22,-68@0": "free",
        "5,22,-69@0": "free",
        "6,22,-71@0": "free",
        "5,22,-71@0": "free",
        "6,22,-70@0": "free",
        "7,22,-71@0": "free",
        "8,22,-72@0": "free",
        "9,22,-70@0": "free",
        "8,22,-70@0": "free",
        "9,22,-71@0": "free",
        "9,22,-69@0": "free",
        "10,22,-70@0": "free",
        "10,22,-67@0": "free",
        "9,22,-67@0": "free",
        "10,22,-68@0": "free",
        "10,22,-66@0": "free",
        "11,22,-69@0": "free",
        "8,22,-65@0": "free",
        "7,22,-65@0": "free",
        "9,22,-65@0": "free",
        "8,22,-66@0": "free",
        "6,22,-64@0": "free",
        "9,22,-50@0": "fluid",
        "9,22,-66@0": "fluid",
        "5,22,-54@0": "fluid",
        "10,22,-69@0": "fluid",
        "16,19,-72@0": "free",
        "27,20,-77@0": "free",
        "12,19,-67@0": "fluid",
        "13,19,-70@0": "fluid",
        "14,19,-65@0": "fluid",
        "5,22,-70@0": "fluid",
        "4,22,-67@0": "fluid",
        "6,22,-65@0": "fluid",
        "12,20,-67@0": "fluid",
        "14,20,-65@0": "fluid",
        "10,19,-77@0": "fluid",
        "8,19,-79@0": "fluid",
        "5,20,-75@0": "free",
        "3,20,-75@0": "free",
        "6,20,-72@0": "free",
        "16,22,-71@0": "fluid",
        "18,20,-77@0": "fluid",
        "12,20,-75@0": "fluid",
        "14,20,-73@0": "fluid",
        "14,21,-73@0": "fluid",
        "18,21,-77@0": "fluid",
        "21,20,-78@0": "fluid",
        "18,22,-77@0": "fluid",
        "12,22,-75@0": "fluid",
        "14,22,-73@0": "fluid",
        "10,21,-77@0": "fluid",
        "8,21,-79@0": "fluid",
        "5,21,-78@0": "fluid",
        "4,22,-74@0": "free",
        "5,22,-73@0": "free",
        "3,22,-75@0": "free",
        "6,22,-79@0": "free",
        "5,22,-79@0": "free",
        "6,22,-78@0": "free",
        "9,22,-78@0": "free",
        "22,22,-73@0": "fluid",
        "6,19,-26@0": "fluid",
        "4,19,-24@0": "fluid",
        "5,19,-21@0": "fluid",
        "8,19,-20@0": "fluid",
        "10,19,-22@0": "fluid",
        "9,19,-25@0": "fluid",
        "10,20,-25@0": "free",
        "6,20,-26@0": "fluid",
        "4,20,-24@0": "fluid",
        "5,20,-21@0": "fluid",
        "8,20,-20@0": "fluid",
        "10,20,-22@0": "fluid",
        "5,22,-25@0": "free",
        "4,22,-25@0": "free",
        "5,22,-24@0": "free",
        "5,22,-26@0": "free",
        "6,22,-25@0": "free",
        "6,22,-27@0": "free",
        "4,22,-22@0": "free",
        "4,22,-21@0": "free",
        "4,22,-23@0": "free",
        "5,22,-22@0": "free",
        "3,22,-24@0": "free",
        "6,22,-20@0": "free",
        "6,22,-21@0": "free",
        "7,22,-20@0": "free",
        "8,22,-19@0": "free",
        "9,22,-21@0": "free",
        "8,22,-21@0": "free",
        "9,22,-20@0": "free",
        "9,22,-22@0": "free",
        "10,22,-21@0": "free",
        "11,22,-22@0": "free",
        "10,22,-24@0": "free",
        "9,22,-24@0": "free",
        "10,22,-23@0": "free",
        "10,22,-25@0": "free",
        "8,22,-26@0": "free",
        "7,22,-26@0": "free",
        "8,22,-25@0": "free",
        "9,22,-26@0": "free",
        "9,22,-25@0": "fluid",
        "6,22,-26@0": "fluid",
        "4,22,-24@0": "fluid",
        "5,22,-21@0": "fluid",
        "8,22,-20@0": "fluid",
        "10,22,-22@0": "fluid",
        "11,19,-32@0": "free",
        "16,19,-27@0": "free",
        "60,19,-74@0": "free",
        "66,22,-56@0": "free",
        "62,19,-75@0": "fluid",
        "62,19,-70@0": "free",
        "55,19,-53@0": "free",
        "66,20,-4@0": "fluid",
        "52,19,-34@0": "fluid",
        "54,19,-32@0": "fluid",
        "53,19,-29@0": "fluid",
        "50,19,-28@0": "fluid",
        "48,19,-30@0": "fluid",
        "49,19,-33@0": "fluid",
        "53,20,-29@0": "fluid",
        "50,20,-28@0": "fluid",
        "48,20,-30@0": "fluid",
        "53,21,-30@0": "free",
        "55,21,-32@0": "free",
        "70,19,-75@0": "fluid",
        "26,19,-30@0": "fluid",
        "65,19,-66@0": "fluid",
        "56,19,-69@0": "fluid",
        "58,19,-71@0": "fluid",
        "55,20,-69@0": "free",
        "53,19,-70@0": "fluid",
        "57,19,-74@0": "fluid",
        "50,20,-63@0": "fluid",
        "56,19,-77@0": "fluid",
        "54,19,-67@0": "fluid",
        "58,19,-79@0": "fluid",
        "48,22,-53@0": "fluid",
        "57,20,-66@0": "fluid",
        "56,20,-69@0": "fluid",
        "53,20,-70@0": "fluid",
        "50,20,-71@0": "fluid",
        "58,22,-63@0": "fluid",
        "56,22,-61@0": "fluid",
        "57,22,-58@0": "fluid",
        "68,22,-55@0": "free",
        "62,22,-54@0": "free",
        "68,22,-54@0": "free",
        "57,21,-66@0": "fluid",
        "56,21,-69@0": "fluid",
        "58,21,-71@0": "fluid",
        "50,21,-71@0": "fluid",
        "53,21,-70@0": "fluid",
        "48,21,-77@0": "fluid",
        "50,21,-79@0": "fluid",
        "49,22,-71@0": "free",
        "49,22,-70@0": "free",
        "50,22,-70@0": "free",
        "48,22,-70@0": "free",
        "50,22,-72@0": "free",
        "52,22,-71@0": "free",
        "53,22,-71@0": "free",
        "51,22,-71@0": "free",
        "52,22,-70@0": "free",
        "54,22,-69@0": "free",
        "54,22,-70@0": "free",
        "53,22,-69@0": "free",
        "54,22,-68@0": "free",
        "53,22,-70@0": "fluid",
        "50,22,-71@0": "fluid",
        "48,22,-69@0": "fluid",
        "57,20,-74@0": "fluid",
        "51,22,-73@0": "free",
        "52,22,-72@0": "free",
        "49,22,-73@0": "free",
        "50,22,-74@0": "free",
        "40,21,-13@0": "free",
        "42,20,-21@0": "free",
        "42,21,-21@0": "free",
        "43,22,-18@0": "free",
        "44,22,-17@0": "free",
        "45,21,-12@0": "free",
        "45,22,-14@0": "free",
        "46,22,-13@0": "free",
        "39,21,-14@0": "free",
        "52,22,-62@0": "free",
        "53,22,-63@0": "free",
        "54,22,-58@0": "free",
        "53,22,-59@0": "free",
        "55,22,-59@0": "free",
        "52,22,-58@0": "free",
        "48,22,-77@0": "fluid",
        "53,22,-78@0": "fluid",
        "60,20,-73@0": "fluid",
        "60,21,-73@0": "fluid",
        "58,21,-79@0": "fluid",
        "61,22,-74@0": "free",
        "61,22,-75@0": "free",
        "62,22,-74@0": "free",
        "60,22,-74@0": "free",
        "61,22,-73@0": "free",
        "62,22,-77@0": "free",
        "62,22,-78@0": "free",
        "60,22,-79@0": "free",
        "61,22,-79@0": "free",
        "59,22,-79@0": "free",
        "60,22,-78@0": "free",
        "57,22,-78@0": "free",
        "57,22,-79@0": "free",
        "58,22,-78@0": "free",
        "56,22,-78@0": "free",
        "57,22,-77@0": "free",
        "58,22,-80@0": "free",
        "56,22,-75@0": "free",
        "56,22,-76@0": "free",
        "57,22,-75@0": "free",
        "56,22,-74@0": "free",
        "55,22,-77@0": "free",
        "58,22,-73@0": "free",
        "60,22,-72@0": "free",
        "70,22,-69@0": "free",
        "70,22,-66@0": "free",
        "69,22,-67@0": "free",
        "70,22,-77@0": "free",
        "68,22,-79@0": "free",
        "69,21,-78@0": "fluid",
        "64,22,-75@0": "free",
        "65,21,-66@0": "fluid",
        "66,22,-65@0": "free",
        "65,22,-65@0": "free",
        "65,22,-66@0": "fluid",
        "21,22,-34@0": "free",
        "34,22,-33@0": "free",
        "30,22,-29@0": "free",
        "33,22,-29@0": "free",
        "33,22,-28@0": "free",
        "34,22,-31@0": "free",
        "30,22,-35@0": "free",
        "22,22,-34@0": "fluid",
        "34,20,-82@0": "free",
        "35,20,-83@0": "free",
        "2,21,-38@0": "free",
        "40,21,-1@0": "free",
        "39,21,0@0": "free",
        "38,21,0@0": "free",
        "37,21,0@0": "free",
        "36,21,0@0": "free",
        "35,21,0@0": "free",
        "1,22,-46@0": "free",
        "0,22,-46@0": "free",
        "0,22,-47@0": "free",
        "0,22,-48@0": "free",
        "0,22,-45@0": "free",
        "0,22,-44@0": "free",
        "0,22,-43@0": "free",
        "0,22,-42@0": "free",
        "0,22,-41@0": "free",
        "0,22,-38@0": "free",
        "0,22,-39@0": "free",
        "0,22,-40@0": "free",
        "0,22,-37@0": "free",
        "1,22,-37@0": "free",
        "2,22,-39@0": "free",
        "1,22,-38@0": "free",
        "1,22,-41@0": "free",
        "1,22,-42@0": "free",
        "2,22,-43@0": "free",
        "2,22,-44@0": "free",
        "1,22,-45@0": "free",
        "12,23,-61@0": "free",
        "11,23,-61@0": "free",
        "14,23,-63@0": "free",
        "14,23,-64@0": "free",
        "13,23,-66@0": "free",
        "24,23,-65@0": "free",
        "19,23,-67@0": "free",
        "19,23,-69@0": "free",
        "20,23,-69@0": "free",
        "21,23,-66@0": "free",
        "16,23,-65@0": "free",
        "11,23,-67@0": "free",
        "11,23,-69@0": "free",
        "12,23,-69@0": "free",
        "10,23,-67@0": "free",
        "18,23,-67@0": "free",
        "24,23,-80@0": "free",
        "32,23,-80@0": "free",
        "34,23,-82@0": "free",
        "35,23,-83@0": "free",
        "36,23,-83@0": "free",
        "39,23,-83@0": "free",
        "54,23,-77@0": "free",
        "55,23,-77@0": "free",
        "55,23,-75@0": "free",
        "56,23,-75@0": "free",
        "58,23,-73@0": "free",
        "58,23,-72@0": "free",
        "57,23,-78@0": "free",
        "60,23,-72@0": "free",
        "60,23,-71@0": "free",
        "61,23,-74@0": "free",
        "62,23,-69@0": "free",
        "63,23,-69@0": "free",
        "63,23,-67@0": "free",
        "64,23,-67@0": "free",
        "65,23,-70@0": "free",
        "66,23,-65@0": "free",
        "69,23,-66@0": "free",
        "71,23,-67@0": "free",
        "63,23,-75@0": "free",
        "63,23,-77@0": "free",
        "62,23,-77@0": "free",
        "65,23,-78@0": "free",
        "66,23,-80@0": "free",
        "68,23,-79@0": "free",
        "60,23,-79@0": "free",
        "50,23,-65@0": "free",
        "50,23,-64@0": "free",
        "22,23,-57@0": "free",
        "20,23,-59@0": "free",
        "18,23,-61@0": "free",
        "16,23,-63@0": "free",
        "8,23,-55@0": "free",
        "5,23,-52@0": "free",
        "6,23,-57@0": "free",
        "5,23,-60@0": "free",
        "4,23,-59@0": "free",
        "6,23,-65@0": "free",
        "18,23,-69@0": "free",
        "20,23,-75@0": "free",
        "24,23,-71@0": "free",
        "21,23,-68@0": "free",
        "20,23,-67@0": "free",
        "22,23,-73@0": "free",
        "18,23,-77@0": "free",
        "16,23,-79@0": "free",
        "24,23,-79@0": "free",
        "8,23,-79@0": "free",
        "22,23,-65@0": "free",
        "17,23,-52@0": "free",
        "18,23,-53@0": "free",
        "4,23,-67@0": "free",
        "6,23,-73@0": "free",
        "4,23,-75@0": "free",
        "24,23,-63@0": "free",
        "25,23,-60@0": "free",
        "26,23,-61@0": "free",
        "24,23,-55@0": "free",
        "20,23,-51@0": "free",
        "22,23,-49@0": "free",
        "4,23,-51@0": "free",
        "1,23,-44@0": "free",
        "1,23,-43@0": "free",
        "26,23,-53@0": "free",
        "32,23,-63@0": "free",
        "26,23,-77@0": "free",
        "21,23,-78@0": "free",
        "17,23,-74@0": "free",
        "13,23,-78@0": "free",
        "25,23,-66@0": "free",
        "21,23,-52@0": "free",
        "9,23,-68@0": "free",
        "9,23,-74@0": "free",
        "7,23,-65@0": "piston-a",
        "17,23,-33@0": "free",
        "17,23,-32@0": "piston-a",
        "21,23,-31@0": "free",
        "21,23,-29@0": "free",
        "53,23,-13@0": "free",
        "53,23,-15@0": "free",
        "57,23,-15@0": "free",
        "57,23,-17@0": "free",
        "49,23,-17@0": "free",
        "41,23,-6@0": "piston-a",
        "65,23,-7@0": "free",
        "53,23,-23@0": "free",
        "57,23,-24@0": "piston-a",
        "45,23,-21@0": "free",
        "57,23,-74@0": "free",
        "21,0,-42@0": "free",
        "38,0,-49@0": "observer-b",
        "37,0,-49@0": "observer-b",
        "40,0,-51@0": "observer-b",
        "43,1,-51@0": "observer-b",
        "43,1,-50@0": "free",
        "42,1,-50@0": "free",
        "41,1,-50@0": "free",
        "30,1,-50@0": "free",
        "29,1,-49@0": "observer-b",
        "29,1,-51@0": "observer-b",
        "17,1,-42@0": "free",
        "17,2,-42@0": "free",
        "18,2,-41@0": "free",
        "23,2,-43@0": "free",
        "23,2,-42@0": "free",
        "23,2,-41@0": "free",
        "25,2,-41@0": "free",
        "25,2,-42@0": "free",
        "25,2,-43@0": "free",
        "25,2,-47@0": "free",
        "25,2,-46@0": "free",
        "25,2,-45@0": "free",
        "22,2,-42@0": "free",
        "19,2,-42@0": "free",
        "20,2,-42@0": "free",
        "21,2,-42@0": "free",
        "18,2,-43@0": "free",
        "23,2,-44@0": "free",
        "23,2,-47@0": "free",
        "23,2,-46@0": "free",
        "23,2,-45@0": "free",
        "25,2,-50@0": "trapdoor-side",
        "19,3,-56@0": "trapdoor-side",
        "26,3,-48@0": "hopper",
        "27,3,-48@0": "hopper",
        "19,3,-19@0": "fluid",
        "19,3,-64@0": "fluid",
        "23,4,-52@0": "free",
        "23,4,-48@0": "free",
        "25,4,-49@0": "free",
        "24,4,-49@0": "free",
        "23,4,-49@0": "free",
        "41,4,-52@0": "free",
        "24,4,-35@0": "free",
        "23,4,-35@0": "free",
        "22,4,-32@0": "free",
        "19,4,-25@0": "free",
        "18,4,-41@0": "free",
        "26,4,-34@0": "hopper",
        "27,4,-34@0": "hopper",
        "28,4,-34@0": "hopper",
        "29,4,-34@0": "hopper",
        "30,4,-34@0": "hopper",
        "30,4,-32@0": "hopper",
        "29,4,-32@0": "hopper",
        "28,4,-32@0": "hopper",
        "26,4,-32@0": "hopper",
        "32,4,-32@0": "hopper",
        "32,4,-34@0": "hopper",
        "31,4,-32@0": "hopper",
        "31,4,-34@0": "hopper",
        "35,4,-32@0": "hopper",
        "34,4,-32@0": "hopper",
        "34,4,-34@0": "hopper",
        "36,4,-34@0": "hopper",
        "36,4,-32@0": "hopper",
        "36,4,-48@0": "hopper",
        "37,4,-48@0": "hopper",
        "38,4,-48@0": "hopper",
        "39,4,-48@0": "hopper",
        "30,4,-48@0": "hopper",
        "45,4,-48@0": "hopper",
        "54,5,-26@0": "free",
        "55,5,-26@0": "free",
        "56,5,-26@0": "free",
        "56,5,-27@0": "free",
        "56,5,-28@0": "free",
        "56,5,-29@0": "free",
        "56,5,-30@0": "free",
        "53,5,-28@0": "free",
        "53,5,-29@0": "free",
        "53,5,-30@0": "free",
        "54,5,-30@0": "free",
        "54,5,-31@0": "free",
        "52,5,-29@0": "free",
        "34,5,-36@0": "free",
        "33,5,-36@0": "free",
        "32,5,-36@0": "free",
        "31,5,-36@0": "free",
        "30,5,-36@0": "free",
        "29,5,-36@0": "free",
        "28,5,-36@0": "free",
        "27,5,-36@0": "free",
        "26,5,-36@0": "free",
        "25,5,-36@0": "free",
        "24,5,-36@0": "free",
        "23,5,-36@0": "free",
        "25,5,-47@0": "free",
        "23,5,-56@0": "free",
        "24,5,-56@0": "free",
        "24,5,-67@0": "free",
        "24,5,-68@0": "free",
        "23,5,-68@0": "free",
        "24,5,-69@0": "free",
        "23,5,-69@0": "free",
        "23,5,-70@0": "free",
        "23,5,-71@0": "free",
        "32,5,-51@0": "free",
        "33,5,-51@0": "free",
        "34,5,-51@0": "free",
        "35,5,-52@0": "free",
        "36,5,-52@0": "free",
        "36,5,-48@0": "free",
        "39,5,-49@0": "free",
        "35,5,-48@0": "free",
        "37,5,-48@0": "free",
        "40,5,-49@0": "free",
        "34,5,-32@0": "free",
        "33,5,-32@0": "free",
        "31,5,-32@0": "free",
        "32,5,-32@0": "free",
        "28,5,-32@0": "free",
        "23,5,-34@0": "trapdoor-side",
        "19,5,-31@0": "free",
        "19,5,-26@0": "free",
        "18,5,-26@0": "free",
        "39,5,-48@0": "fluid",
        "46,6,-53@0": "free",
        "47,6,-53@0": "free",
        "47,6,-52@0": "free",
        "48,6,-51@0": "free",
        "27,6,-74@0": "free",
        "26,6,-74@0": "free",
        "25,6,-74@0": "free",
        "24,6,-74@0": "free",
        "22,6,-75@0": "free",
        "23,6,-75@0": "free",
        "11,7,-2@0": "free",
        "11,7,-3@0": "free",
        "11,7,-4@0": "free",
        "11,7,-5@0": "free",
        "18,7,-41@0": "free",
        "40,7,-72@0": "free",
        "40,7,-71@0": "free",
        "43,7,-77@0": "free",
        "44,7,-77@0": "free",
        "45,7,-77@0": "free",
        "46,7,-77@0": "free",
        "45,7,-75@0": "free",
        "45,7,-76@0": "free",
        "46,7,-76@0": "free",
        "1,8,-21@0": "free",
        "1,8,-22@0": "free",
        "37,8,-21@0": "free",
        "37,8,-20@0": "free",
        "53,7,-37@0": "free",
        "54,7,-37@0": "free",
        "34,8,-33@0": "free",
        "35,8,-33@0": "free",
        "36,8,-33@0": "free",
        "36,8,-32@0": "free",
        "35,8,-32@0": "free",
        "34,8,-32@0": "free",
        "1,9,-26@0": "free",
        "1,9,-22@0": "free",
        "1,9,-24@0": "free",
        "1,9,-23@0": "free",
        "73,9,-17@0": "free",
        "73,9,-19@0": "free",
        "73,9,-18@0": "free",
        "73,9,-20@0": "free",
        "73,9,-21@0": "free",
        "58,9,-37@0": "free",
        "57,9,-37@0": "free",
        "54,9,-37@0": "free",
        "56,9,-37@0": "free",
        "55,9,-37@0": "free",
        "52,9,-37@0": "free",
        "53,9,-37@0": "free",
        "51,9,-37@0": "free",
        "49,9,-37@0": "free",
        "50,9,-37@0": "free",
        "48,9,-37@0": "free",
        "46,9,-37@0": "free",
        "47,9,-37@0": "free",
        "45,9,-37@0": "free",
        "73,8,-18@0": "free",
        "54,9,-1@0": "free",
        "46,9,-1@0": "free",
        "45,9,-1@0": "free",
        "16,9,-38@0": "free",
        "18,9,-38@0": "free",
        "17,9,-38@0": "free",
        "18,9,-39@0": "free",
        "17,9,-39@0": "free",
        "16,9,-39@0": "free",
        "17,9,-40@0": "free",
        "16,9,-40@0": "free",
        "16,9,-41@0": "free",
        "15,9,-41@0": "free",
        "15,9,-40@0": "free",
        "15,9,-39@0": "free",
        "15,9,-38@0": "free",
        "14,9,-38@0": "free",
        "14,9,-39@0": "free",
        "14,9,-40@0": "free",
        "14,9,-42@0": "free",
        "15,9,-42@0": "free",
        "16,9,-42@0": "free",
        "13,9,-38@0": "free",
        "13,9,-39@0": "free",
        "13,9,-40@0": "free",
        "13,9,-41@0": "free",
        "13,9,-42@0": "free",
        "12,9,-38@0": "free",
        "11,9,-38@0": "free",
        "10,9,-38@0": "free",
        "12,9,-39@0": "free",
        "12,9,-40@0": "free",
        "12,9,-41@0": "free",
        "11,9,-39@0": "free",
        "11,9,-40@0": "free",
        "11,9,-41@0": "free",
        "10,9,-41@0": "free",
        "10,9,-40@0": "free",
        "10,9,-39@0": "free",
        "9,9,-38@0": "free",
        "9,9,-39@0": "free",
        "9,9,-40@0": "free",
        "9,9,-41@0": "free",
        "10,9,-44@0": "free",
        "12,9,-42@0": "free",
        "8,9,-41@0": "free",
        "8,9,-40@0": "free",
        "8,9,-39@0": "free",
        "8,9,-38@0": "free",
        "10,9,-46@0": "free",
        "7,9,-41@0": "free",
        "7,9,-40@0": "free",
        "7,9,-42@0": "free",
        "8,9,-42@0": "free",
        "9,9,-42@0": "free",
        "4,9,-44@0": "free",
        "4,9,-43@0": "free",
        "5,9,-43@0": "free",
        "5,9,-44@0": "free",
        "6,9,-40@0": "free",
        "5,9,-40@0": "free",
        "5,9,-41@0": "free",
        "4,9,-41@0": "free",
        "4,9,-40@0": "free",
        "3,9,-40@0": "free",
        "6,9,-41@0": "free",
        "6,9,-39@0": "free",
        "7,9,-39@0": "free",
        "8,9,-37@0": "free",
        "7,9,-37@0": "free",
        "7,9,-38@0": "free",
        "6,9,-38@0": "free",
        "5,9,-38@0": "free",
        "5,9,-37@0": "free",
        "6,9,-37@0": "free",
        "4,9,-38@0": "free",
        "3,9,-38@0": "free",
        "3,9,-37@0": "free",
        "4,9,-37@0": "free",
        "25,9,-40@0": "free",
        "26,9,-40@0": "free",
        "27,9,-40@0": "free",
        "28,9,-40@0": "free",
        "29,9,-40@0": "free",
        "30,9,-37@0": "free",
        "31,9,-37@0": "free",
        "36,9,-37@0": "free",
        "37,9,-37@0": "free",
        "37,9,-36@0": "free",
        "37,9,-35@0": "free",
        "37,9,-34@0": "free",
        "37,9,-33@0": "free",
        "37,9,-30@0": "free",
        "37,9,-31@0": "free",
        "37,9,-32@0": "free",
        "42,9,-43@0": "free",
        "59,9,-45@0": "free",
        "60,9,-45@0": "free",
        "56,9,-45@0": "free",
        "57,9,-44@0": "free",
        "58,9,-44@0": "free",
        "61,9,-45@0": "free",
        "59,9,-44@0": "free",
        "62,9,-45@0": "free",
        "62,9,-44@0": "free",
        "61,9,-44@0": "free",
        "60,9,-44@0": "free",
        "59,9,-43@0": "free",
        "57,9,-43@0": "free",
        "58,9,-43@0": "free",
        "57,9,-42@0": "free",
        "56,9,-42@0": "free",
        "56,9,-41@0": "free",
        "1,9,-1@0": "free",
        "1,9,-2@0": "free",
        "1,9,-3@0": "free",
        "59,9,-38@0": "free",
        "55,10,-42@0": "door-left",
        "55,10,-41@0": "door-right",
        "55,10,-40@0": "free",
        "53,10,-41@0": "free",
        "56,10,-39@0": "free",
        "57,10,-39@0": "free",
        "58,10,-39@0": "free",
        "43,10,-43@0": "wall-attach",
        "49,10,-43@0": "wall-attach",
        "48,10,-40@0": "wall-attach",
        "42,10,-40@0": "wall-attach",
        "41,10,0@0": "free",
        "42,10,0@0": "free",
        "43,10,0@0": "free",
        "44,10,0@0": "free",
        "45,10,0@0": "free",
        "46,10,0@0": "free",
        "47,10,0@0": "free",
        "48,10,0@0": "free",
        "49,10,0@0": "free",
        "50,10,0@0": "free",
        "51,10,0@0": "free",
        "52,10,0@0": "free",
        "53,10,0@0": "free",
        "54,10,0@0": "free",
        "55,10,0@0": "free",
        "56,10,0@0": "free",
        "57,10,0@0": "free",
        "58,10,0@0": "free",
        "59,10,0@0": "free",
        "60,10,0@0": "free",
        "61,10,0@0": "free",
        "62,10,0@0": "free",
        "63,10,0@0": "free",
        "64,10,0@0": "free",
        "65,10,0@0": "free",
        "66,10,0@0": "free",
        "67,10,0@0": "free",
        "68,10,0@0": "free",
        "69,10,0@0": "free",
        "70,10,0@0": "free",
        "71,10,0@0": "free",
        "72,10,0@0": "free",
        "74,11,-3@0": "free",
        "74,11,-2@0": "free",
        "74,11,-4@0": "free",
        "74,11,-5@0": "free",
        "74,11,-7@0": "free",
        "73,11,-1@0": "free",
        "72,11,0@0": "free",
        "71,11,0@0": "free",
        "70,11,0@0": "free",
        "74,11,-6@0": "free",
        "74,11,-8@0": "free",
        "74,11,-10@0": "free",
        "74,11,-9@0": "free",
        "74,11,-11@0": "free",
        "74,11,-13@0": "free",
        "74,11,-12@0": "free",
        "74,11,-14@0": "free",
        "74,11,-16@0": "free",
        "74,11,-15@0": "free",
        "0,10,-35@0": "free",
        "0,10,-36@0": "free",
        "0,10,-37@0": "free",
        "0,10,-38@0": "free",
        "0,10,-39@0": "free",
        "0,10,-40@0": "free",
        "0,10,-41@0": "free",
        "0,10,-42@0": "free",
        "0,10,-43@0": "free",
        "0,10,-44@0": "free",
        "0,10,-45@0": "free",
        "0,11,-41@0": "free",
        "0,11,-40@0": "free",
        "0,11,-39@0": "free",
        "0,11,-42@0": "free",
        "0,11,-43@0": "free",
        "22,11,-41@0": "free",
        "24,11,-41@0": "free",
        "24,11,-42@0": "free",
        "26,11,-42@0": "free",
        "26,11,-41@0": "free",
        "28,11,-41@0": "free",
        "27,11,-41@0": "free",
        "28,11,-42@0": "free",
        "27,11,-42@0": "free",
        "27,11,-44@0": "free",
        "26,11,-44@0": "free",
        "25,11,-44@0": "free",
        "23,11,-44@0": "free",
        "29,11,-41@0": "free",
        "29,11,-42@0": "free",
        "31,11,-42@0": "free",
        "30,11,-42@0": "free",
        "30,11,-41@0": "free",
        "31,11,-41@0": "free",
        "30,11,-44@0": "free",
        "29,11,-44@0": "free",
        "28,11,-44@0": "free",
        "32,11,-41@0": "free",
        "32,11,-42@0": "free",
        "33,11,-41@0": "free",
        "34,11,-42@0": "free",
        "33,11,-42@0": "free",
        "33,11,-44@0": "free",
        "32,11,-44@0": "free",
        "31,11,-44@0": "free",
        "34,11,-44@0": "free",
        "35,11,-44@0": "free",
        "36,11,-44@0": "free",
        "37,11,-44@0": "free",
        "37,11,-42@0": "free",
        "38,11,-44@0": "free",
        "39,11,-44@0": "free",
        "40,11,-44@0": "free",
        "41,11,-44@0": "free",
        "42,11,-39@0": "free",
        "43,11,-39@0": "free",
        "44,11,-44@0": "free",
        "45,11,-44@0": "free",
        "46,11,-44@0": "free",
        "47,11,-42@0": "free",
        "47,11,-41@0": "free",
        "46,11,-39@0": "free",
        "45,11,-39@0": "free",
        "47,11,-44@0": "free",
        "48,11,-42@0": "free",
        "48,11,-41@0": "free",
        "48,11,-39@0": "free",
        "47,11,-39@0": "free",
        "49,11,-39@0": "free",
        "50,11,-41@0": "free",
        "49,11,-41@0": "free",
        "49,11,-42@0": "free",
        "50,11,-39@0": "free",
        "51,11,-39@0": "free",
        "59,11,-44@0": "free",
        "59,11,-39@0": "free",
        "60,11,-39@0": "free",
        "55,11,-39@0": "free",
        "55,11,-40@0": "free",
        "56,11,-39@0": "free",
        "57,11,-39@0": "free",
        "60,11,-40@0": "stairs-top",
        "54,11,-39@0": "free",
        "53,11,-39@0": "free",
        "50,11,-43@0": "wall-attach",
        "52,11,-42@0": "free",
        "52,11,-41@0": "free",
        "35,11,-40@0": "wall-attach",
        "54,11,-44@0": "free",
        "54,11,-42@0": "wall-attach",
        "43,11,-43@0": "fluid",
        "37,11,-43@0": "fluid",
        "36,11,-40@0": "fluid",
        "49,11,-43@0": "fluid",
        "19,12,-42@0": "free",
        "19,12,-41@0": "free",
        "19,12,-40@0": "free",
        "19,12,-39@0": "free",
        "32,11,-43@0": "wall-attach",
        "31,11,-43@0": "fluid",
        "17,12,-43@0": "free",
        "17,12,-42@0": "free",
        "17,12,-39@0": "free",
        "30,11,-40@0": "fluid",
        "0,12,-19@0": "free",
        "0,12,-20@0": "free",
        "0,12,-21@0": "free",
        "0,12,-23@0": "free",
        "0,12,-22@0": "free",
        "0,12,-24@0": "free",
        "0,12,-25@0": "free",
        "0,12,-26@0": "free",
        "0,12,-28@0": "free",
        "0,12,-27@0": "free",
        "0,12,-29@0": "free",
        "0,12,-30@0": "free",
        "0,12,-31@0": "free",
        "0,12,-32@0": "free",
        "1,12,-34@0": "free",
        "0,12,-35@0": "free",
        "0,12,-37@0": "free",
        "0,12,-38@0": "free",
        "0,12,-41@0": "free",
        "0,12,-40@0": "free",
        "0,12,-39@0": "free",
        "0,12,-42@0": "free",
        "0,12,-44@0": "free",
        "0,12,-43@0": "free",
        "0,12,-4@0": "free",
        "0,12,-3@0": "free",
        "59,12,0@0": "free",
        "15,12,-43@0": "stairs-top",
        "39,12,-39@0": "chest-sneak",
        "18,13,-40@0": "free",
        "18,13,-39@0": "free",
        "19,13,-39@0": "free",
        "19,13,-40@0": "free",
        "18,13,-41@0": "free",
        "14,13,-43@0": "stairs-bottom",
        "14,13,-44@0": "stairs-bottom",
        "16,13,-83@0": "free",
        "16,13,-40@0": "stairs-top",
        "39,13,-40@0": "hopper",
        "40,13,-40@0": "hopper",
        "40,13,-39@0": "hopper",
        "39,13,-39@0": "hopper",
        "19,14,-42@0": "free",
        "17,14,-42@0": "free",
        "17,14,-41@0": "free",
        "17,14,-40@0": "free",
        "17,14,-39@0": "free",
        "74,14,-44@0": "free",
        "74,14,-45@0": "free",
        "74,14,-46@0": "free",
        "74,14,-54@0": "free",
        "74,14,-56@0": "free",
        "74,14,-55@0": "free",
        "74,14,-57@0": "free",
        "74,14,-59@0": "free",
        "74,14,-58@0": "free",
        "74,14,-60@0": "free",
        "74,14,-62@0": "free",
        "74,14,-61@0": "free",
        "74,14,-63@0": "free",
        "74,14,-65@0": "free",
        "74,14,-64@0": "free",
        "74,14,-66@0": "free",
        "74,14,-68@0": "free",
        "74,14,-67@0": "free",
        "74,14,-69@0": "free",
        "74,14,-71@0": "free",
        "74,14,-70@0": "free",
        "74,14,-72@0": "free",
        "74,14,-74@0": "free",
        "74,14,-73@0": "free",
        "57,14,-83@0": "free",
        "46,14,-83@0": "free",
        "45,14,-83@0": "free",
        "43,14,-83@0": "free",
        "44,14,-83@0": "free",
        "39,14,-83@0": "free",
        "28,14,-50@0": "free",
        "15,14,-49@0": "free",
        "14,14,-48@0": "free",
        "10,14,-50@0": "free",
        "7,14,-49@0": "free",
        "6,14,-50@0": "free",
        "5,14,-51@0": "free",
        "34,14,-52@0": "free",
        "18,14,-33@0": "free",
        "20,14,-31@0": "free",
        "21,14,-30@0": "free",
        "20,14,-29@0": "free",
        "22,14,-29@0": "free",
        "22,14,-27@0": "free",
        "21,14,-28@0": "free",
        "16,14,-33@0": "free",
        "21,14,-26@0": "free",
        "17,14,-28@0": "free",
        "15,14,-28@0": "free",
        "13,14,-28@0": "free",
        "14,14,-27@0": "free",
        "14,14,-35@0": "free",
        "14,14,-33@0": "free",
        "12,14,-33@0": "free",
        "13,14,-34@0": "free",
        "10,14,-33@0": "free",
        "11,14,-32@0": "free",
        "10,14,-32@0": "free",
        "9,14,-30@0": "free",
        "9,14,-28@0": "free",
        "16,14,-21@0": "free",
        "17,14,-20@0": "free",
        "6,14,-33@0": "free",
        "4,14,-33@0": "free",
        "25,14,-59@0": "free",
        "8,14,-72@0": "free",
        "28,14,-78@0": "free",
        "28,14,-76@0": "free",
        "14,14,-11@0": "free",
        "15,14,-10@0": "free",
        "6,14,-27@0": "free",
        "10,14,-25@0": "free",
        "10,14,-24@0": "free",
        "11,14,-24@0": "free",
        "10,14,-23@0": "free",
        "9,14,-24@0": "free",
        "9,14,-20@0": "free",
        "6,14,-21@0": "free",
        "26,14,-33@0": "free",
        "28,14,-33@0": "free",
        "28,14,-31@0": "free",
        "30,14,-33@0": "free",
        "30,14,-35@0": "free",
        "33,14,-29@0": "free",
        "33,14,-30@0": "free",
        "35,14,-30@0": "free",
        "32,14,-27@0": "free",
        "32,14,-26@0": "free",
        "31,14,-26@0": "free",
        "32,14,-25@0": "free",
        "33,14,-26@0": "free",
        "34,14,-25@0": "free",
        "34,14,-23@0": "free",
        "33,14,-24@0": "free",
        "24,14,-19@0": "free",
        "24,14,-18@0": "free",
        "24,14,-17@0": "free",
        "23,14,-18@0": "free",
        "26,14,-17@0": "free",
        "26,14,-16@0": "free",
        "25,14,-16@0": "free",
        "26,14,-15@0": "free",
        "27,14,-16@0": "free",
        "25,14,-13@0": "free",
        "24,14,-13@0": "free",
        "25,14,-12@0": "free",
        "35,14,-14@0": "free",
        "3,14,-8@0": "free",
        "34,14,-9@0": "free",
        "32,14,-62@0": "free",
        "28,14,-6@0": "free",
        "29,14,-6@0": "free",
        "30,14,-4@0": "free",
        "35,14,-77@0": "free",
        "40,14,-51@0": "free",
        "41,14,-51@0": "free",
        "40,14,-52@0": "free",
        "39,14,-53@0": "free",
        "39,14,-77@0": "free",
        "56,14,-24@0": "free",
        "57,14,-24@0": "free",
        "61,14,-26@0": "free",
        "55,14,-24@0": "free",
        "56,14,-23@0": "free",
        "57,14,-22@0": "free",
        "57,14,-20@0": "free",
        "53,14,-17@0": "free",
        "54,14,-17@0": "free",
        "58,14,-13@0": "free",
        "56,14,-13@0": "free",
        "57,14,-12@0": "free",
        "54,14,-14@0": "free",
        "55,14,-14@0": "free",
        "53,14,-14@0": "free",
        "45,14,-18@0": "free",
        "46,14,-17@0": "free",
        "45,14,-16@0": "free",
        "50,14,-18@0": "free",
        "51,14,-18@0": "free",
        "50,14,-17@0": "free",
        "58,14,-11@0": "free",
        "57,14,-10@0": "free",
        "58,14,-10@0": "free",
        "60,14,-9@0": "free",
        "62,14,-9@0": "free",
        "17,14,-78@0": "free",
        "6,13,-49@0": "free",
        "35,14,-43@0": "free",
        "30,13,-65@0": "free",
        "9,13,-25@0": "free",
        "4,13,-24@0": "free",
        "6,13,-26@0": "free",
        "12,13,-32@0": "free",
        "20,13,-32@0": "free",
        "16,13,-28@0": "free",
        "12,13,-24@0": "free",
        "30,13,-18@0": "free",
        "33,13,-33@0": "free",
        "7,13,-7@0": "free",
        "20,13,-24@0": "free",
        "29,13,-5@0": "free",
        "22,13,-18@0": "free",
        "26,13,-22@0": "free",
        "28,13,-24@0": "free",
        "30,13,-26@0": "free",
        "32,13,-28@0": "free",
        "6,13,-34@0": "free"
      },
      "provenFluids": [
        "39,5,-35@0",
        "34,5,-31@0",
        "31,5,-34@0",
        "27,5,-32@0",
        "47,5,-34@0",
        "42,5,-51@0",
        "21,14,-50@0",
        "18,14,-32@0",
        "32,14,-49@0",
        "16,14,-49@0",
        "13,14,-50@0",
        "34,14,-59@0",
        "33,14,-62@0",
        "8,14,-49@0",
        "24,14,-65@0",
        "28,14,-69@0",
        "5,14,-66@0",
        "10,14,-67@0",
        "9,14,-70@0",
        "16,14,-73@0",
        "22,14,-79@0",
        "50,14,-34@0",
        "25,14,-29@0",
        "4,14,-77@0",
        "6,14,-79@0",
        "69,14,-50@0",
        "70,14,-53@0",
        "57,14,-62@0",
        "60,14,-63@0",
        "66,14,-65@0",
        "61,14,-66@0",
        "57,14,-70@0",
        "52,14,-71@0",
        "53,14,-74@0",
        "56,14,-75@0",
        "65,14,-78@0",
        "42,14,-34@0",
        "70,14,-30@0",
        "48,14,-24@0",
        "45,14,-25@0",
        "69,14,-25@0",
        "64,14,-16@0",
        "65,14,-13@0",
        "52,14,-12@0",
        "50,14,-10@0",
        "42,14,-10@0",
        "64,14,-8@0",
        "49,14,-5@0",
        "9,14,-29@0",
        "8,14,-34@0",
        "6,14,-28@0",
        "14,14,-28@0",
        "13,14,-25@0",
        "4,14,-30@0",
        "9,14,-21@0",
        "6,14,-20@0",
        "33,14,-13@0",
        "28,14,-6@0",
        "18,14,-8@0",
        "17,14,-5@0",
        "22,14,-4@0",
        "4,14,-14@0",
        "6,14,-12@0",
        "56,13,-22@0",
        "70,13,-67@0",
        "68,13,-34@0",
        "6,13,-26@0",
        "7,13,-23@0",
        "10,13,-30@0",
        "14,13,-34@0",
        "13,13,-29@0",
        "18,13,-30@0",
        "17,13,-33@0",
        "15,13,-31@0",
        "14,13,-26@0",
        "10,13,-22@0",
        "24,13,-12@0",
        "34,13,-22@0",
        "31,13,-23@0",
        "29,13,-29@0",
        "25,13,-33@0",
        "25,13,-25@0",
        "23,13,-23@0",
        "6,13,-10@0",
        "8,13,-12@0",
        "12,13,-16@0",
        "26,13,-30@0",
        "41,13,-33@0",
        "45,13,-29@0",
        "49,13,-33@0",
        "61,13,-29@0",
        "58,13,-28@0",
        "62,13,-24@0",
        "68,13,-18@0",
        "67,13,-15@0",
        "64,13,-22@0",
        "65,13,-9@0",
        "61,13,-13@0",
        "59,13,-15@0",
        "70,13,-8@0",
        "62,13,-16@0",
        "60,13,-18@0",
        "54,13,-24@0",
        "41,13,-25@0",
        "42,13,-28@0",
        "46,13,-24@0",
        "52,13,-18@0",
        "62,13,-8@0",
        "53,13,-5@0",
        "46,13,-16@0",
        "42,13,-20@0",
        "46,13,-8@0",
        "50,13,-4@0",
        "51,13,-7@0",
        "41,13,-9@0",
        "17,13,-25@0",
        "34,13,-30@0",
        "28,13,-24@0",
        "15,13,-23@0",
        "9,13,-33@0",
        "5,13,-29@0",
        "4,13,-32@0",
        "7,13,-31@0",
        "44,15,-4@0",
        "49,15,-5@0",
        "49,16,-5@0",
        "49,17,-5@0",
        "49,18,-5@0",
        "44,16,-4@0",
        "44,17,-4@0",
        "44,18,-4@0",
        "48,15,-8@0",
        "48,16,-8@0",
        "48,17,-8@0",
        "48,18,-8@0",
        "52,15,-4@0",
        "54,15,-6@0",
        "54,16,-6@0",
        "54,17,-6@0",
        "54,18,-6@0",
        "52,16,-4@0",
        "52,17,-4@0",
        "52,18,-4@0",
        "57,15,-5@0",
        "56,15,-8@0",
        "56,16,-8@0",
        "56,17,-8@0",
        "56,18,-8@0",
        "57,16,-5@0",
        "57,17,-5@0",
        "57,18,-5@0",
        "60,15,-4@0",
        "60,16,-4@0",
        "60,17,-4@0",
        "60,18,-4@0",
        "62,15,-6@0",
        "65,15,-5@0",
        "65,16,-5@0",
        "65,17,-5@0",
        "65,18,-5@0",
        "62,16,-6@0",
        "62,17,-6@0",
        "62,18,-6@0",
        "56,15,-16@0",
        "56,16,-16@0",
        "56,17,-16@0",
        "56,18,-16@0",
        "58,15,-18@0",
        "58,16,-18@0",
        "58,17,-18@0",
        "58,18,-18@0",
        "56,15,-32@0",
        "56,16,-32@0",
        "56,17,-32@0",
        "56,18,-32@0",
        "61,15,-33@0",
        "61,16,-33@0",
        "61,17,-33@0",
        "61,18,-33@0",
        "58,15,-34@0",
        "58,16,-34@0",
        "58,17,-34@0",
        "58,18,-34@0",
        "42,16,-73@0",
        "41,16,-70@0",
        "40,15,-67@0",
        "40,16,-67@0",
        "40,17,-67@0",
        "40,18,-67@0",
        "41,17,-70@0",
        "41,18,-70@0",
        "42,17,-73@0",
        "42,18,-73@0",
        "25,15,-78@0",
        "26,15,-75@0",
        "26,16,-75@0",
        "26,17,-75@0",
        "26,18,-75@0",
        "25,16,-78@0",
        "29,15,-74@0",
        "32,15,-73@0",
        "32,16,-73@0",
        "32,17,-73@0",
        "32,18,-73@0",
        "32,15,-65@0",
        "32,16,-65@0",
        "32,17,-65@0",
        "32,18,-65@0",
        "34,15,-59@0",
        "34,16,-59@0",
        "34,17,-59@0",
        "34,18,-59@0",
        "26,15,-59@0",
        "30,15,-55@0",
        "30,16,-55@0",
        "30,17,-55@0",
        "30,18,-55@0",
        "33,15,-54@0",
        "34,15,-51@0",
        "34,16,-51@0",
        "34,17,-51@0",
        "34,18,-51@0",
        "33,16,-54@0",
        "33,17,-54@0",
        "33,18,-54@0",
        "29,15,-58@0",
        "28,16,-61@0",
        "28,17,-61@0",
        "28,18,-61@0",
        "32,15,-57@0",
        "32,16,-57@0",
        "32,17,-57@0",
        "32,18,-57@0",
        "26,16,-59@0",
        "26,17,-59@0",
        "26,18,-59@0",
        "30,15,-63@0",
        "33,15,-62@0",
        "33,16,-62@0",
        "30,16,-63@0",
        "30,17,-63@0",
        "33,17,-62@0",
        "33,18,-62@0",
        "30,18,-63@0",
        "28,15,-53@0",
        "29,15,-50@0",
        "29,16,-50@0",
        "29,17,-50@0",
        "32,15,-49@0",
        "24,15,-65@0",
        "22,15,-63@0",
        "22,16,-63@0",
        "22,17,-63@0",
        "22,18,-63@0",
        "26,15,-67@0",
        "21,15,-66@0",
        "26,16,-67@0",
        "26,17,-67@0",
        "26,18,-67@0",
        "48,15,-59@0",
        "49,15,-62@0",
        "49,16,-62@0",
        "49,17,-62@0",
        "49,18,-62@0",
        "46,15,-61@0",
        "46,16,-61@0",
        "46,17,-61@0",
        "46,18,-61@0",
        "45,15,-58@0",
        "45,16,-58@0",
        "45,17,-58@0",
        "45,18,-58@0",
        "48,16,-59@0",
        "48,17,-59@0",
        "48,18,-59@0",
        "34,16,-67@0",
        "34,17,-67@0",
        "34,18,-67@0",
        "44,15,-55@0",
        "41,15,-54@0",
        "41,16,-54@0",
        "41,17,-54@0",
        "41,18,-54@0",
        "42,15,-57@0",
        "42,16,-57@0",
        "42,17,-57@0",
        "42,18,-57@0",
        "44,16,-55@0",
        "44,17,-55@0",
        "44,18,-55@0",
        "40,15,-59@0",
        "40,16,-59@0",
        "40,17,-59@0",
        "40,18,-59@0",
        "41,15,-62@0",
        "41,16,-62@0",
        "41,17,-62@0",
        "41,18,-62@0",
        "44,16,-63@0",
        "42,15,-65@0",
        "42,16,-65@0",
        "42,17,-65@0",
        "42,18,-65@0",
        "44,17,-63@0",
        "44,18,-63@0",
        "24,18,-73@0",
        "5,15,-33@0",
        "5,16,-33@0",
        "5,17,-33@0",
        "5,18,-33@0",
        "21,15,-33@0",
        "20,15,-30@0",
        "20,16,-30@0",
        "20,17,-30@0",
        "20,18,-30@0",
        "24,16,-34@0",
        "29,15,-33@0",
        "24,17,-34@0",
        "24,18,-34@0",
        "29,16,-33@0",
        "29,17,-33@0",
        "29,18,-33@0",
        "50,15,-34@0",
        "50,16,-34@0",
        "50,17,-34@0",
        "50,18,-34@0",
        "53,17,-33@0",
        "53,18,-33@0",
        "49,16,-29@0",
        "49,17,-29@0",
        "49,18,-29@0",
        "40,16,-32@0",
        "40,17,-32@0",
        "40,18,-32@0",
        "41,15,-29@0",
        "41,16,-29@0",
        "41,17,-29@0",
        "41,18,-29@0",
        "30,17,-20@0",
        "30,18,-20@0",
        "28,16,-22@0",
        "28,17,-22@0",
        "28,18,-22@0",
        "26,17,-24@0",
        "26,18,-24@0",
        "29,16,-25@0",
        "29,17,-25@0",
        "29,18,-25@0",
        "24,15,-26@0",
        "21,15,-25@0",
        "21,16,-25@0",
        "21,17,-25@0",
        "21,18,-25@0",
        "33,16,-21@0",
        "33,17,-21@0",
        "33,18,-21@0",
        "69,15,-9@0",
        "69,16,-9@0",
        "69,17,-9@0",
        "69,18,-9@0",
        "70,15,-6@0",
        "70,16,-6@0",
        "70,17,-6@0",
        "70,18,-6@0",
        "46,17,-6@0",
        "46,18,-6@0",
        "42,15,-10@0",
        "42,16,-10@0",
        "42,17,-10@0",
        "42,18,-10@0",
        "69,15,-17@0",
        "70,15,-14@0",
        "70,16,-14@0",
        "70,17,-14@0",
        "70,18,-14@0",
        "70,15,-22@0",
        "70,16,-22@0",
        "69,16,-17@0",
        "66,15,-18@0",
        "66,16,-18@0",
        "66,17,-18@0",
        "69,17,-17@0",
        "66,18,-18@0",
        "69,18,-17@0",
        "70,17,-22@0",
        "70,18,-22@0",
        "69,15,-25@0",
        "69,16,-25@0",
        "65,15,-21@0",
        "65,16,-21@0",
        "65,17,-21@0",
        "65,18,-21@0",
        "68,15,-28@0",
        "70,15,-30@0",
        "70,16,-30@0",
        "70,17,-30@0",
        "70,18,-30@0",
        "66,15,-26@0",
        "68,16,-28@0",
        "68,17,-28@0",
        "68,18,-28@0",
        "66,16,-26@0",
        "64,15,-24@0",
        "64,16,-24@0",
        "64,17,-24@0",
        "64,18,-24@0",
        "69,17,-25@0",
        "66,17,-26@0",
        "66,18,-26@0",
        "8,15,-34@0",
        "8,16,-34@0",
        "8,17,-34@0",
        "8,18,-34@0",
        "60,15,-12@0",
        "62,15,-14@0",
        "62,16,-14@0",
        "62,17,-14@0",
        "62,18,-14@0",
        "68,16,-12@0",
        "66,15,-10@0",
        "64,15,-8@0",
        "64,16,-8@0",
        "64,17,-8@0",
        "64,18,-8@0",
        "68,17,-12@0",
        "68,18,-12@0",
        "66,16,-10@0",
        "66,17,-10@0",
        "66,18,-10@0",
        "64,15,-16@0",
        "64,16,-16@0",
        "64,17,-16@0",
        "64,18,-16@0",
        "60,18,-20@0",
        "52,16,-12@0",
        "52,17,-12@0",
        "52,18,-12@0",
        "49,18,-13@0",
        "40,15,-16@0",
        "42,15,-18@0",
        "42,16,-18@0",
        "42,17,-18@0",
        "42,18,-18@0",
        "50,17,-10@0",
        "50,18,-10@0",
        "46,16,-22@0",
        "46,17,-22@0",
        "46,18,-22@0",
        "44,15,-12@0",
        "44,16,-12@0",
        "44,17,-12@0",
        "44,18,-12@0",
        "30,19,-55@0",
        "30,20,-55@0",
        "30,21,-55@0",
        "30,22,-55@0",
        "32,19,-57@0",
        "32,20,-57@0",
        "32,21,-57@0",
        "32,22,-57@0",
        "34,19,-59@0",
        "34,20,-59@0",
        "34,21,-59@0",
        "34,22,-59@0",
        "48,19,-59@0",
        "50,19,-57@0",
        "50,20,-57@0",
        "50,21,-57@0",
        "50,22,-57@0",
        "48,20,-59@0",
        "49,19,-62@0",
        "46,19,-61@0",
        "45,19,-58@0",
        "45,20,-58@0",
        "45,21,-58@0",
        "45,22,-58@0",
        "44,19,-63@0",
        "45,19,-66@0",
        "45,20,-66@0",
        "45,21,-66@0",
        "45,22,-66@0",
        "44,20,-63@0",
        "42,19,-65@0",
        "42,20,-65@0",
        "44,21,-63@0",
        "42,21,-65@0",
        "41,19,-62@0",
        "41,20,-62@0",
        "41,21,-62@0",
        "41,22,-62@0",
        "44,22,-63@0",
        "48,22,-59@0",
        "42,22,-65@0",
        "44,19,-79@0",
        "44,20,-79@0",
        "44,21,-79@0",
        "44,22,-79@0",
        "48,19,-75@0",
        "48,20,-75@0",
        "48,21,-75@0",
        "48,22,-75@0",
        "41,20,-78@0",
        "41,21,-78@0",
        "41,22,-78@0",
        "44,19,-71@0",
        "46,19,-69@0",
        "48,19,-67@0",
        "48,20,-67@0",
        "48,21,-67@0",
        "48,22,-67@0",
        "46,20,-69@0",
        "46,21,-69@0",
        "46,22,-69@0",
        "30,19,-79@0",
        "28,19,-77@0",
        "29,19,-74@0",
        "29,20,-74@0",
        "29,21,-74@0",
        "29,22,-74@0",
        "28,20,-77@0",
        "32,19,-73@0",
        "32,20,-73@0",
        "26,19,-59@0",
        "26,20,-59@0",
        "26,21,-59@0",
        "26,22,-59@0",
        "28,19,-53@0",
        "29,19,-50@0",
        "29,20,-50@0",
        "29,21,-50@0",
        "29,22,-50@0",
        "28,20,-53@0",
        "28,21,-53@0",
        "28,22,-53@0",
        "33,19,-62@0",
        "33,20,-62@0",
        "32,21,-65@0",
        "33,21,-62@0",
        "33,22,-62@0",
        "30,19,-63@0",
        "30,20,-63@0",
        "30,21,-63@0",
        "30,22,-63@0",
        "25,19,-54@0",
        "25,20,-54@0",
        "33,19,-54@0",
        "34,19,-51@0",
        "34,20,-51@0",
        "34,21,-51@0",
        "34,22,-51@0",
        "33,21,-54@0",
        "33,22,-54@0",
        "40,19,-67@0",
        "40,20,-67@0",
        "40,21,-67@0",
        "40,22,-67@0",
        "40,19,-75@0",
        "40,20,-75@0",
        "40,21,-75@0",
        "40,22,-75@0",
        "40,19,-24@0",
        "41,19,-21@0",
        "41,20,-21@0",
        "41,21,-21@0",
        "41,22,-21@0",
        "40,20,-24@0",
        "42,19,-26@0",
        "42,20,-26@0",
        "42,21,-26@0",
        "42,22,-26@0",
        "17,19,-5@0",
        "14,19,-4@0",
        "14,20,-4@0",
        "12,19,-6@0",
        "14,21,-4@0",
        "14,22,-4@0",
        "12,22,-6@0",
        "54,19,-30@0",
        "52,19,-28@0",
        "52,20,-28@0",
        "52,21,-28@0",
        "52,22,-28@0",
        "48,20,-8@0",
        "48,21,-8@0",
        "48,22,-8@0",
        "41,19,-29@0",
        "41,20,-29@0",
        "41,21,-29@0",
        "41,22,-29@0",
        "45,19,-25@0",
        "44,19,-28@0",
        "44,20,-28@0",
        "44,21,-28@0",
        "44,22,-28@0",
        "45,19,-33@0",
        "45,20,-33@0",
        "45,21,-33@0",
        "45,22,-33@0",
        "45,21,-25@0",
        "45,22,-25@0",
        "46,20,-22@0",
        "46,21,-22@0",
        "46,22,-22@0",
        "20,19,-22@0",
        "20,20,-22@0",
        "20,21,-22@0",
        "20,22,-22@0",
        "22,19,-20@0",
        "6,21,-12@0",
        "6,22,-12@0",
        "16,22,-18@0",
        "46,19,-6@0",
        "22,20,-20@0",
        "22,21,-20@0",
        "22,22,-20@0",
        "5,19,-50@0",
        "5,20,-50@0",
        "5,21,-50@0",
        "5,22,-50@0",
        "66,19,-34@0",
        "66,20,-34@0",
        "66,21,-34@0",
        "66,22,-34@0",
        "69,19,-33@0",
        "70,19,-30@0",
        "70,20,-30@0",
        "70,21,-30@0",
        "40,20,-8@0",
        "40,21,-8@0",
        "40,22,-8@0",
        "26,21,-8@0",
        "26,22,-8@0",
        "65,20,-29@0",
        "65,21,-29@0",
        "65,22,-29@0",
        "65,21,-78@0",
        "70,19,-22@0",
        "70,20,-22@0",
        "70,21,-22@0",
        "70,22,-22@0",
        "69,19,-25@0",
        "69,20,-25@0",
        "69,21,-25@0",
        "69,22,-25@0",
        "66,19,-10@0",
        "65,19,-5@0",
        "65,20,-5@0",
        "65,21,-5@0",
        "65,22,-5@0",
        "64,19,-8@0",
        "60,19,-4@0",
        "60,20,-4@0",
        "60,21,-4@0",
        "60,22,-4@0",
        "57,19,-5@0",
        "57,20,-5@0",
        "57,21,-5@0",
        "57,22,-5@0",
        "21,19,-25@0",
        "21,20,-25@0",
        "21,21,-25@0",
        "21,22,-25@0",
        "22,19,-28@0",
        "25,19,-29@0",
        "25,20,-29@0",
        "25,21,-29@0",
        "25,22,-29@0",
        "29,20,-33@0",
        "16,22,-49@0",
        "21,20,-50@0",
        "21,21,-50@0",
        "21,22,-50@0",
        "8,19,-49@0",
        "45,20,-50@0",
        "42,22,-79@0",
        "40,22,-77@0",
        "42,22,-71@0",
        "44,22,-73@0",
        "41,22,-74@0",
        "40,22,-69@0",
        "41,22,-66@0",
        "48,22,-61@0",
        "49,22,-66@0",
        "46,22,-59@0",
        "44,22,-57@0",
        "41,22,-58@0",
        "42,22,-55@0",
        "34,22,-61@0",
        "32,22,-63@0",
        "30,22,-65@0",
        "33,22,-74@0",
        "34,22,-77@0",
        "29,22,-78@0",
        "26,22,-77@0",
        "24,22,-71@0",
        "20,22,-75@0",
        "25,22,-66@0",
        "21,22,-62@0",
        "29,22,-54@0",
        "28,22,-67@0",
        "21,22,-54@0",
        "16,22,-55@0",
        "14,22,-57@0",
        "12,22,-51@0",
        "10,22,-61@0",
        "6,22,-49@0",
        "4,22,-51@0",
        "4,22,-67@0",
        "8,22,-71@0",
        "5,22,-70@0",
        "6,22,-73@0",
        "9,22,-74@0",
        "5,22,-78@0",
        "8,22,-79@0",
        "29,22,-29@0",
        "30,22,-26@0",
        "33,22,-25@0",
        "34,22,-22@0",
        "34,22,-30@0",
        "33,22,-33@0",
        "46,22,-24@0",
        "54,22,-32@0",
        "62,22,-16@0",
        "41,22,-50@0",
        "20,22,-59@0",
        "18,22,-53@0",
        "17,22,-58@0",
        "22,22,-57@0",
        "10,22,-53@0",
        "8,22,-55@0",
        "4,22,-59@0",
        "5,22,-62@0",
        "4,22,-75@0",
        "10,22,-77@0",
        "13,22,-78@0",
        "21,22,-78@0",
        "16,22,-79@0",
        "25,22,-58@0",
        "24,22,-55@0",
        "30,22,-57@0",
        "25,22,-50@0",
        "7,27,-29@0",
        "15,27,-62@0",
        "15,27,-54@0",
        "15,27,-70@0",
        "7,27,-70@0",
        "7,27,-78@0",
        "15,27,-78@0",
        "23,27,-78@0",
        "23,27,-70@0",
        "31,27,-70@0",
        "31,27,-78@0",
        "7,27,-54@0",
        "23,27,-21@0",
        "67,27,-62@0",
        "67,27,-78@0",
        "40,2,-50@0",
        "32,2,-33@0",
        "23,5,-35@0",
        "42,11,-40@0",
        "25,11,-43@0",
        "53,14,-33@0",
        "56,14,-32@0",
        "58,14,-34@0",
        "61,14,-33@0",
        "50,14,-49@0",
        "58,14,-49@0",
        "61,14,-50@0",
        "12,14,-61@0",
        "5,14,-50@0",
        "4,14,-53@0",
        "4,14,-69@0",
        "30,14,-79@0",
        "50,14,-57@0",
        "66,14,-49@0",
        "66,14,-57@0",
        "69,14,-58@0",
        "64,14,-59@0",
        "61,14,-58@0",
        "58,14,-57@0",
        "54,14,-61@0",
        "65,14,-62@0",
        "70,14,-61@0",
        "56,14,-67@0",
        "69,14,-66@0",
        "58,14,-73@0",
        "61,14,-74@0",
        "40,14,-16@0",
        "45,14,-9@0",
        "69,14,-9@0",
        "54,14,-6@0",
        "57,14,-5@0",
        "70,14,-6@0",
        "52,14,-4@0",
        "30,14,-20@0",
        "21,14,-17@0",
        "29,14,-17@0",
        "20,14,-14@0",
        "17,14,-13@0",
        "21,14,-9@0",
        "33,14,-5@0",
        "21,13,-29@0",
        "18,13,-22@0",
        "24,13,-28@0",
        "30,13,-34@0",
        "66,13,-20@0",
        "70,13,-16@0",
        "57,13,-9@0",
        "68,13,-10@0",
        "66,13,-12@0",
        "58,13,-20@0",
        "44,13,-34@0",
        "51,13,-23@0",
        "48,13,-22@0",
        "56,13,-6@0",
        "52,13,-10@0",
        "48,13,-14@0",
        "40,13,-22@0",
        "40,13,-14@0",
        "43,13,-15@0",
        "48,13,-6@0",
        "45,13,-5@0",
        "40,13,-6@0",
        "25,13,-50@0",
        "40,13,-53@0",
        "41,13,-50@0",
        "58,13,-71@0",
        "51,13,-60@0",
        "49,13,-58@0",
        "52,13,-65@0",
        "61,13,-78@0",
        "68,13,-73@0",
        "65,13,-66@0",
        "67,13,-68@0",
        "62,13,-59@0",
        "61,13,-54@0",
        "60,13,-57@0",
        "57,13,-66@0",
        "33,14,-33@0",
        "30,14,-26@0",
        "34,14,-30@0",
        "29,14,-29@0",
        "33,14,-25@0",
        "30,14,-34@0",
        "34,14,-22@0",
        "28,14,-24@0",
        "25,14,-25@0",
        "41,14,-25@0",
        "22,14,-26@0",
        "26,14,-22@0",
        "20,14,-24@0",
        "18,14,-22@0",
        "17,14,-25@0",
        "16,14,-28@0",
        "14,14,-26@0",
        "12,14,-24@0",
        "10,14,-30@0",
        "64,14,-6@0",
        "32,14,-28@0",
        "69,14,-21@0",
        "6,15,-63@0",
        "4,15,-61@0",
        "5,15,-58@0",
        "8,15,-57@0",
        "10,15,-59@0",
        "9,15,-62@0",
        "12,15,-61@0",
        "14,15,-63@0",
        "17,15,-62@0",
        "18,15,-59@0",
        "16,15,-57@0",
        "13,15,-58@0",
        "9,15,-58@0",
        "6,15,-57@0",
        "4,15,-59@0",
        "5,15,-62@0",
        "9,16,-62@0",
        "10,16,-59@0",
        "6,15,-55@0",
        "69,15,-74@0",
        "70,15,-77@0",
        "68,15,-79@0",
        "65,15,-78@0",
        "64,15,-75@0",
        "66,15,-73@0",
        "65,15,-74@0",
        "64,15,-77@0",
        "6,15,-79@0",
        "4,15,-77@0",
        "5,15,-74@0",
        "6,15,-71@0",
        "4,15,-69@0",
        "5,15,-66@0",
        "8,15,-65@0",
        "10,15,-67@0",
        "9,15,-70@0",
        "8,15,-71@0",
        "10,15,-69@0",
        "16,15,-65@0",
        "18,15,-67@0",
        "17,15,-70@0",
        "20,15,-69@0",
        "22,15,-71@0",
        "25,15,-70@0",
        "9,18,-62@0",
        "10,18,-59@0",
        "8,18,-57@0",
        "5,18,-58@0",
        "4,18,-61@0",
        "6,18,-63@0",
        "53,14,-13@0",
        "49,14,-17@0",
        "65,14,-25@0",
        "5,16,-70@0",
        "8,16,-71@0",
        "9,16,-66@0",
        "10,16,-69@0",
        "6,16,-65@0",
        "25,14,-66@0",
        "4,16,-67@0",
        "6,17,-71@0",
        "4,17,-69@0",
        "5,17,-66@0",
        "8,17,-65@0",
        "10,17,-67@0",
        "8,17,-55@0",
        "10,17,-53@0",
        "20,15,-61@0",
        "25,15,-62@0",
        "20,14,-51@0",
        "14,16,-49@0",
        "13,16,-54@0",
        "18,16,-53@0",
        "12,15,-59@0",
        "14,15,-57@0",
        "18,15,-61@0",
        "12,15,-67@0",
        "13,15,-62@0",
        "16,15,-63@0",
        "14,15,-65@0",
        "17,15,-74@0",
        "18,15,-69@0",
        "13,15,-70@0",
        "17,15,-66@0",
        "25,15,-74@0",
        "16,15,-71@0",
        "13,16,-66@0",
        "12,16,-69@0",
        "14,16,-71@0",
        "17,16,-70@0",
        "18,16,-67@0",
        "16,16,-65@0",
        "6,17,-65@0",
        "4,17,-67@0",
        "6,17,-73@0",
        "9,17,-50@0",
        "12,16,-51@0",
        "6,17,-49@0",
        "16,16,-55@0",
        "13,17,-50@0",
        "16,17,-49@0",
        "18,17,-51@0",
        "17,17,-54@0",
        "14,17,-55@0",
        "12,17,-53@0",
        "20,16,-51@0",
        "4,17,-51@0",
        "17,16,-66@0",
        "18,15,-77@0",
        "16,16,-71@0",
        "21,15,-78@0",
        "22,15,-73@0",
        "5,17,-70@0",
        "4,17,-75@0",
        "13,16,-62@0",
        "17,16,-50@0",
        "14,17,-49@0",
        "20,17,-53@0",
        "5,17,-54@0",
        "9,18,-54@0",
        "10,18,-51@0",
        "8,18,-49@0",
        "5,18,-50@0",
        "4,18,-53@0",
        "6,18,-55@0",
        "5,18,-54@0",
        "10,18,-53@0",
        "9,18,-70@0",
        "10,18,-67@0",
        "8,18,-65@0",
        "13,17,-54@0",
        "16,17,-55@0",
        "9,18,-50@0",
        "8,18,-55@0",
        "18,17,-53@0",
        "12,17,-51@0",
        "17,17,-50@0",
        "12,18,-53@0",
        "14,18,-55@0",
        "17,18,-54@0",
        "18,18,-51@0",
        "16,18,-49@0",
        "13,18,-50@0",
        "12,18,-51@0",
        "14,18,-49@0",
        "17,18,-50@0",
        "18,18,-53@0",
        "13,18,-54@0",
        "5,17,-78@0",
        "9,18,-78@0",
        "10,18,-75@0",
        "8,18,-73@0",
        "5,18,-74@0",
        "4,18,-77@0",
        "6,18,-79@0",
        "5,18,-66@0",
        "4,18,-69@0",
        "6,18,-71@0",
        "5,18,-70@0",
        "10,18,-69@0",
        "8,18,-71@0",
        "9,18,-74@0",
        "16,18,-55@0",
        "5,18,-78@0",
        "6,18,-49@0",
        "4,18,-51@0",
        "9,18,-66@0",
        "49,15,-50@0",
        "6,18,-65@0",
        "8,18,-79@0",
        "53,15,-54@0",
        "54,15,-51@0",
        "57,15,-50@0",
        "49,16,-50@0",
        "60,15,-49@0",
        "54,15,-61@0",
        "50,15,-57@0",
        "6,18,-73@0",
        "4,18,-75@0",
        "4,18,-67@0",
        "13,16,-70@0",
        "12,16,-67@0",
        "14,16,-65@0",
        "16,17,-65@0",
        "18,17,-67@0",
        "17,17,-70@0",
        "14,17,-71@0",
        "12,17,-69@0",
        "13,17,-66@0",
        "53,16,-54@0",
        "54,16,-51@0",
        "25,16,-74@0",
        "22,16,-73@0",
        "17,16,-74@0",
        "18,16,-77@0",
        "13,16,-78@0",
        "21,16,-78@0",
        "20,16,-75@0",
        "25,17,-78@0",
        "22,17,-79@0",
        "20,17,-77@0",
        "21,17,-74@0",
        "24,17,-73@0",
        "13,17,-70@0",
        "18,17,-69@0",
        "16,17,-71@0",
        "12,17,-67@0",
        "14,17,-65@0",
        "62,16,-51@0",
        "64,16,-53@0",
        "68,16,-49@0",
        "17,18,-66@0",
        "14,16,-73@0",
        "12,16,-75@0",
        "17,17,-78@0",
        "14,17,-79@0",
        "12,17,-77@0",
        "13,17,-74@0",
        "16,17,-73@0",
        "18,17,-75@0",
        "17,17,-74@0",
        "18,17,-77@0",
        "16,17,-79@0",
        "21,17,-78@0",
        "64,16,-61@0",
        "66,16,-55@0",
        "57,16,-74@0",
        "69,16,-54@0",
        "18,18,-69@0",
        "14,18,-65@0",
        "13,18,-70@0",
        "16,18,-71@0",
        "12,18,-67@0",
        "14,16,-57@0",
        "20,17,-75@0",
        "14,17,-73@0",
        "22,17,-73@0",
        "21,18,-74@0",
        "20,18,-77@0",
        "22,18,-79@0",
        "25,18,-78@0",
        "25,18,-74@0",
        "22,18,-73@0",
        "13,17,-78@0",
        "12,17,-75@0",
        "18,18,-75@0",
        "16,18,-73@0",
        "13,18,-74@0",
        "12,18,-77@0",
        "20,18,-75@0",
        "21,18,-78@0",
        "14,18,-79@0",
        "12,16,-59@0",
        "12,17,-61@0",
        "14,17,-63@0",
        "17,17,-62@0",
        "18,17,-59@0",
        "16,17,-57@0",
        "13,17,-58@0",
        "17,18,-78@0",
        "18,18,-77@0",
        "13,18,-78@0",
        "16,18,-79@0",
        "12,18,-75@0",
        "17,18,-74@0",
        "14,18,-73@0",
        "12,17,-59@0",
        "14,17,-57@0",
        "13,17,-62@0",
        "17,17,-58@0",
        "18,17,-61@0",
        "16,17,-63@0",
        "13,18,-58@0",
        "16,18,-57@0",
        "18,18,-59@0",
        "17,18,-62@0",
        "14,18,-63@0",
        "12,18,-61@0",
        "12,18,-59@0",
        "13,18,-62@0",
        "16,18,-63@0",
        "14,18,-57@0",
        "17,18,-58@0",
        "18,18,-61@0",
        "33,16,-70@0",
        "20,15,-59@0",
        "56,15,-69@0",
        "42,15,-71@0",
        "20,16,-16@0",
        "20,15,-24@0",
        "25,15,-25@0",
        "21,16,-21@0",
        "20,16,-24@0",
        "22,16,-26@0",
        "25,16,-25@0",
        "26,16,-22@0",
        "24,16,-20@0",
        "32,16,-55@0",
        "42,15,-20@0",
        "44,16,-20@0",
        "45,16,-25@0",
        "42,16,-26@0",
        "65,17,-66@0",
        "65,16,-74@0",
        "60,16,-73@0",
        "69,17,-58@0",
        "70,17,-61@0",
        "52,16,-73@0",
        "61,15,-62@0",
        "57,15,-66@0",
        "48,15,-61@0",
        "50,15,-63@0",
        "53,15,-62@0",
        "48,15,-69@0",
        "50,15,-71@0",
        "53,15,-70@0",
        "54,17,-61@0",
        "52,17,-63@0",
        "50,17,-57@0",
        "48,16,-69@0",
        "50,16,-63@0",
        "50,16,-71@0",
        "48,16,-61@0",
        "53,16,-62@0",
        "53,16,-70@0",
        "40,15,-61@0",
        "42,15,-63@0",
        "40,17,-51@0",
        "42,17,-49@0",
        "45,17,-50@0",
        "46,17,-53@0",
        "56,17,-51@0",
        "58,17,-49@0",
        "61,17,-50@0",
        "57,16,-9@0",
        "53,16,-5@0",
        "56,16,-6@0",
        "58,16,-4@0",
        "50,16,-4@0",
        "44,16,-10@0",
        "34,18,-16@0",
        "29,18,-17@0",
        "28,18,-14@0",
        "30,18,-12@0",
        "33,18,-13@0",
        "29,17,-54@0",
        "54,16,-75@0",
        "54,17,-77@0",
        "52,17,-79@0",
        "49,17,-78@0",
        "48,17,-75@0",
        "50,17,-73@0",
        "53,17,-74@0",
        "54,17,-75@0",
        "52,17,-73@0",
        "49,17,-74@0",
        "48,17,-77@0",
        "50,17,-79@0",
        "53,17,-78@0",
        "68,17,-55@0",
        "64,16,-77@0",
        "66,16,-79@0",
        "68,17,-63@0",
        "65,17,-62@0",
        "64,17,-59@0",
        "66,17,-57@0",
        "65,17,-58@0",
        "66,17,-63@0",
        "64,17,-61@0",
        "70,17,-59@0",
        "68,17,-57@0",
        "66,18,-57@0",
        "64,18,-59@0",
        "65,18,-62@0",
        "68,18,-63@0",
        "70,18,-61@0",
        "69,18,-58@0",
        "66,18,-63@0",
        "61,16,-62@0",
        "68,16,-18@0",
        "62,17,-53@0",
        "58,17,-55@0",
        "56,18,-75@0",
        "62,18,-77@0",
        "60,18,-79@0",
        "54,16,-67@0",
        "54,17,-59@0",
        "56,16,-61@0",
        "62,18,-53@0",
        "68,18,-73@0",
        "61,18,-50@0",
        "61,18,-78@0",
        "65,18,-74@0",
        "10,17,-22@0",
        "64,18,-77@0",
        "66,18,-79@0",
        "69,18,-78@0",
        "62,18,-75@0",
        "58,18,-79@0",
        "60,18,-73@0",
        "50,17,-65@0",
        "48,17,-67@0",
        "49,17,-70@0",
        "61,18,-54@0",
        "58,16,-71@0",
        "65,17,-13@0",
        "65,17,-17@0",
        "68,17,-18@0",
        "70,17,-16@0",
        "61,18,-5@0",
        "62,18,-8@0",
        "60,18,-10@0",
        "57,18,-9@0",
        "56,18,-6@0",
        "58,18,-4@0",
        "52,17,-10@0",
        "54,17,-8@0",
        "53,17,-5@0",
        "50,17,-4@0",
        "58,17,-28@0",
        "32,18,-34@0",
        "34,18,-32@0",
        "26,18,-32@0",
        "30,18,-28@0",
        "16,18,-34@0",
        "17,17,-33@0",
        "60,16,-65@0",
        "56,17,-67@0",
        "58,17,-65@0",
        "61,17,-66@0",
        "62,17,-69@0",
        "60,17,-71@0",
        "57,17,-70@0",
        "52,17,-71@0",
        "53,17,-66@0",
        "62,17,-59@0",
        "53,18,-62@0",
        "33,18,-33@0",
        "48,17,-6@0",
        "52,18,-34@0",
        "54,18,-32@0",
        "53,18,-29@0",
        "49,17,-9@0",
        "60,17,-34@0",
        "52,17,-20@0",
        "54,17,-22@0",
        "58,18,-28@0",
        "61,18,-29@0",
        "68,18,-4@0",
        "69,17,-5@0",
        "69,18,-13@0",
        "70,18,-8@0",
        "66,18,-12@0",
        "61,17,-17@0",
        "68,18,-10@0",
        "64,18,-6@0",
        "69,18,-5@0",
        "61,17,-21@0",
        "60,18,-12@0",
        "57,18,-13@0",
        "57,18,-21@0",
        "49,18,-70@0",
        "50,18,-65@0",
        "52,18,-65@0",
        "49,18,-66@0",
        "54,18,-67@0",
        "58,18,-65@0",
        "53,18,-70@0",
        "48,18,-69@0",
        "50,18,-71@0",
        "62,18,-67@0",
        "4,19,-53@0",
        "8,19,-57@0",
        "10,19,-59@0",
        "9,19,-62@0",
        "6,19,-63@0",
        "4,19,-61@0",
        "12,19,-61@0",
        "14,19,-63@0",
        "17,19,-62@0",
        "18,19,-59@0",
        "16,19,-57@0",
        "13,19,-58@0",
        "14,19,-55@0",
        "12,19,-53@0",
        "13,19,-50@0",
        "16,19,-49@0",
        "18,19,-51@0",
        "17,19,-54@0",
        "14,19,-57@0",
        "16,19,-55@0",
        "10,20,-61@0",
        "6,20,-57@0",
        "5,20,-62@0",
        "13,20,-58@0",
        "16,20,-57@0",
        "18,20,-59@0",
        "18,19,-53@0",
        "16,20,-63@0",
        "17,19,-50@0",
        "14,19,-49@0",
        "12,19,-51@0",
        "13,21,-58@0",
        "13,19,-54@0",
        "24,19,-73@0",
        "33,22,-78@0",
        "6,19,-55@0",
        "9,19,-54@0",
        "10,19,-51@0",
        "8,19,-73@0",
        "10,19,-75@0",
        "9,19,-78@0",
        "6,19,-79@0",
        "4,19,-77@0",
        "5,19,-74@0",
        "6,19,-65@0",
        "9,19,-66@0",
        "18,22,-61@0",
        "12,22,-59@0",
        "16,20,-55@0",
        "17,20,-50@0",
        "20,21,-67@0",
        "18,21,-51@0",
        "17,21,-54@0",
        "16,21,-55@0",
        "18,21,-53@0",
        "17,21,-50@0",
        "14,21,-49@0",
        "12,21,-51@0",
        "13,21,-54@0",
        "17,22,-54@0",
        "14,22,-55@0",
        "13,22,-54@0",
        "5,19,-70@0",
        "5,20,-66@0",
        "4,20,-69@0",
        "6,20,-71@0",
        "9,20,-70@0",
        "10,20,-67@0",
        "8,20,-65@0",
        "9,19,-50@0",
        "10,19,-53@0",
        "8,19,-55@0",
        "5,19,-54@0",
        "4,19,-51@0",
        "6,19,-49@0",
        "8,20,-49@0",
        "10,20,-51@0",
        "9,20,-54@0",
        "6,20,-55@0",
        "4,20,-53@0",
        "6,20,-65@0",
        "8,21,-65@0",
        "10,21,-67@0",
        "9,21,-70@0",
        "6,21,-71@0",
        "4,21,-69@0",
        "5,21,-66@0",
        "4,21,-67@0",
        "6,21,-65@0",
        "9,21,-66@0",
        "10,21,-69@0",
        "8,21,-71@0",
        "8,22,-49@0",
        "10,22,-51@0",
        "9,22,-54@0",
        "6,22,-55@0",
        "4,22,-53@0",
        "5,21,-70@0",
        "5,22,-66@0",
        "4,22,-69@0",
        "6,22,-71@0",
        "9,22,-70@0",
        "10,22,-67@0",
        "8,22,-65@0",
        "9,22,-50@0",
        "9,22,-66@0",
        "5,22,-54@0",
        "10,22,-69@0",
        "16,19,-73@0",
        "18,19,-75@0",
        "13,19,-66@0",
        "26,19,-75@0",
        "25,19,-78@0",
        "12,19,-67@0",
        "13,19,-70@0",
        "22,19,-79@0",
        "20,19,-77@0",
        "14,19,-65@0",
        "17,19,-66@0",
        "18,19,-69@0",
        "16,19,-71@0",
        "6,22,-65@0",
        "17,20,-66@0",
        "16,20,-71@0",
        "13,20,-70@0",
        "12,20,-67@0",
        "14,20,-65@0",
        "4,19,-75@0",
        "6,19,-73@0",
        "9,19,-74@0",
        "10,19,-77@0",
        "8,19,-79@0",
        "5,19,-78@0",
        "5,20,-74@0",
        "4,20,-77@0",
        "6,20,-79@0",
        "9,20,-78@0",
        "10,20,-75@0",
        "8,20,-73@0",
        "14,19,-79@0",
        "12,19,-77@0",
        "13,19,-74@0",
        "16,22,-71@0",
        "18,20,-77@0",
        "12,20,-75@0",
        "14,20,-73@0",
        "14,21,-73@0",
        "18,21,-77@0",
        "21,20,-78@0",
        "18,22,-77@0",
        "12,22,-75@0",
        "14,22,-73@0",
        "10,21,-77@0",
        "8,21,-79@0",
        "5,21,-78@0",
        "5,22,-74@0",
        "6,22,-79@0",
        "9,22,-78@0",
        "22,22,-73@0",
        "6,19,-26@0",
        "4,19,-24@0",
        "5,19,-21@0",
        "8,19,-20@0",
        "10,19,-22@0",
        "9,19,-25@0",
        "5,20,-25@0",
        "4,20,-22@0",
        "6,20,-20@0",
        "9,20,-21@0",
        "10,20,-24@0",
        "8,20,-26@0",
        "9,20,-25@0",
        "6,20,-26@0",
        "4,20,-24@0",
        "5,20,-21@0",
        "8,20,-20@0",
        "10,20,-22@0",
        "8,21,-26@0",
        "10,21,-24@0",
        "9,21,-21@0",
        "6,21,-20@0",
        "4,21,-22@0",
        "5,21,-25@0",
        "6,21,-26@0",
        "4,21,-24@0",
        "5,21,-21@0",
        "8,21,-20@0",
        "10,21,-22@0",
        "9,21,-25@0",
        "5,22,-25@0",
        "4,22,-22@0",
        "6,22,-20@0",
        "9,22,-21@0",
        "10,22,-24@0",
        "8,22,-26@0",
        "9,22,-25@0",
        "6,22,-26@0",
        "4,22,-24@0",
        "5,22,-21@0",
        "8,22,-20@0",
        "10,22,-22@0",
        "24,19,-20@0",
        "21,19,-21@0",
        "20,19,-24@0",
        "18,19,-32@0",
        "16,19,-34@0",
        "13,19,-33@0",
        "12,19,-30@0",
        "14,19,-28@0",
        "17,19,-29@0",
        "18,19,-30@0",
        "16,19,-28@0",
        "40,19,-51@0",
        "42,19,-49@0",
        "45,19,-50@0",
        "46,19,-53@0",
        "44,19,-55@0",
        "48,19,-51@0",
        "50,19,-49@0",
        "53,19,-50@0",
        "54,19,-53@0",
        "70,19,-53@0",
        "68,19,-55@0",
        "65,19,-54@0",
        "58,19,-65@0",
        "56,19,-67@0",
        "57,19,-70@0",
        "62,19,-69@0",
        "61,19,-74@0",
        "66,19,-55@0",
        "62,19,-75@0",
        "60,19,-71@0",
        "61,19,-66@0",
        "56,19,-51@0",
        "58,19,-49@0",
        "49,19,-54@0",
        "53,19,-66@0",
        "66,20,-4@0",
        "52,19,-34@0",
        "54,19,-32@0",
        "53,19,-29@0",
        "50,19,-28@0",
        "48,19,-30@0",
        "49,19,-33@0",
        "53,20,-33@0",
        "54,20,-30@0",
        "49,20,-29@0",
        "48,20,-32@0",
        "50,20,-34@0",
        "49,20,-33@0",
        "52,20,-34@0",
        "54,20,-32@0",
        "53,20,-29@0",
        "50,20,-28@0",
        "48,20,-30@0",
        "50,21,-34@0",
        "48,21,-32@0",
        "49,21,-29@0",
        "54,21,-30@0",
        "53,21,-33@0",
        "60,19,-73@0",
        "70,19,-75@0",
        "26,19,-30@0",
        "65,19,-66@0",
        "56,19,-69@0",
        "58,19,-71@0",
        "61,19,-70@0",
        "61,20,-66@0",
        "62,20,-69@0",
        "60,20,-71@0",
        "57,20,-70@0",
        "56,20,-67@0",
        "53,19,-70@0",
        "54,19,-75@0",
        "57,19,-74@0",
        "50,20,-63@0",
        "56,19,-77@0",
        "68,19,-73@0",
        "64,19,-69@0",
        "54,19,-67@0",
        "58,19,-79@0",
        "57,21,-58@0",
        "48,22,-53@0",
        "50,22,-55@0",
        "58,21,-63@0",
        "53,20,-66@0",
        "50,20,-65@0",
        "49,20,-70@0",
        "52,20,-71@0",
        "54,20,-69@0",
        "57,20,-66@0",
        "56,20,-69@0",
        "53,20,-70@0",
        "50,20,-71@0",
        "49,20,-66@0",
        "52,20,-65@0",
        "58,22,-63@0",
        "56,22,-61@0",
        "57,22,-58@0",
        "60,22,-57@0",
        "53,20,-62@0",
        "68,22,-55@0",
        "66,19,-71@0",
        "57,21,-66@0",
        "56,21,-69@0",
        "58,21,-71@0",
        "50,21,-71@0",
        "53,21,-70@0",
        "49,21,-74@0",
        "48,21,-77@0",
        "50,21,-79@0",
        "49,22,-70@0",
        "52,22,-71@0",
        "54,22,-69@0",
        "53,22,-70@0",
        "50,22,-71@0",
        "48,22,-69@0",
        "57,20,-74@0",
        "65,19,-74@0",
        "64,19,-77@0",
        "42,20,-12@0",
        "54,20,-22@0",
        "60,21,-20@0",
        "62,21,-22@0",
        "61,21,-25@0",
        "58,21,-26@0",
        "56,21,-24@0",
        "57,21,-21@0",
        "40,20,-14@0",
        "48,22,-77@0",
        "53,22,-78@0",
        "60,20,-73@0",
        "58,21,-73@0",
        "56,21,-75@0",
        "57,21,-78@0",
        "60,21,-79@0",
        "62,21,-77@0",
        "61,21,-74@0",
        "62,21,-75@0",
        "60,21,-73@0",
        "57,21,-74@0",
        "56,21,-77@0",
        "58,21,-79@0",
        "61,21,-78@0",
        "61,22,-74@0",
        "62,22,-77@0",
        "60,22,-79@0",
        "57,22,-78@0",
        "56,22,-75@0",
        "58,22,-73@0",
        "70,22,-69@0",
        "69,21,-66@0",
        "70,22,-77@0",
        "68,22,-79@0",
        "65,22,-70@0",
        "66,21,-71@0",
        "69,21,-78@0",
        "64,22,-75@0",
        "65,21,-66@0",
        "66,22,-65@0",
        "65,22,-66@0",
        "69,22,-78@0",
        "68,22,-73@0",
        "33,22,-29@0",
        "22,22,-34@0",
        "25,22,-33@0",
        "24,2,-33@0",
        "19,3,-19@0",
        "19,3,-64@0",
        "27,5,-51@0",
        "39,5,-48@0",
        "50,5,-52@0",
        "43,11,-43@0",
        "37,11,-43@0",
        "36,11,-40@0",
        "49,11,-43@0",
        "31,11,-43@0",
        "30,11,-40@0",
        "29,14,-50@0",
        "34,14,-51@0",
        "20,14,-30@0",
        "22,14,-28@0",
        "16,14,-34@0",
        "13,14,-33@0",
        "10,14,-32@0",
        "5,14,-33@0",
        "26,14,-59@0",
        "28,14,-61@0",
        "28,14,-77@0",
        "10,14,-24@0",
        "5,14,-17@0",
        "26,14,-32@0",
        "29,14,-33@0",
        "28,14,-30@0",
        "33,14,-29@0",
        "32,14,-26@0",
        "34,14,-24@0",
        "24,14,-18@0",
        "26,14,-16@0",
        "25,14,-13@0",
        "30,14,-4@0",
        "40,14,-51@0",
        "48,13,-53@0",
        "61,14,-25@0",
        "56,14,-24@0",
        "57,14,-21@0",
        "69,14,-17@0",
        "53,14,-17@0",
        "57,14,-13@0",
        "54,14,-14@0",
        "45,14,-17@0",
        "50,14,-18@0",
        "58,14,-10@0",
        "61,14,-9@0",
        "18,14,-75@0",
        "17,14,-78@0",
        "6,13,-49@0",
        "31,13,-60@0",
        "46,13,-59@0",
        "64,13,-53@0",
        "62,13,-67@0",
        "50,13,-28@0",
        "51,13,-31@0",
        "56,13,-30@0",
        "30,13,-65@0",
        "9,13,-25@0",
        "4,13,-24@0",
        "12,13,-32@0",
        "29,13,-62@0",
        "20,13,-32@0",
        "16,13,-28@0",
        "12,13,-24@0",
        "30,13,-18@0",
        "33,13,-33@0",
        "7,13,-7@0",
        "20,13,-24@0",
        "29,13,-5@0",
        "8,13,-4@0",
        "22,13,-18@0",
        "26,13,-22@0",
        "30,13,-26@0",
        "32,13,-28@0",
        "6,13,-34@0",
        "4,13,-51@0",
        "7,13,-52@0",
        "14,13,-49@0"
      ],
      "hardBlocks": {
        "20,0,-42@0": {
          "name": "packed_ice",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "30,2,-51@0": {
          "name": "crafter",
          "fails": 1,
          "lastCode": "AIM"
        },
        "42,2,-49@0": {
          "name": "crafter",
          "fails": 2,
          "lastCode": "DIG_REJECTED"
        },
        "42,3,-49@0": {
          "name": "crafter",
          "fails": 1,
          "lastCode": "AIM"
        },
        "28,3,-51@0": {
          "name": "crafter",
          "fails": 1,
          "lastCode": "DIG_REJECTED"
        },
        "29,3,-51@0": {
          "name": "crafter",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "32,3,-51@0": {
          "name": "crafter",
          "fails": 2,
          "lastCode": "DIG_REJECTED"
        },
        "24,2,-41@0": {
          "name": "iron_trapdoor",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "51,3,-49@0": {
          "name": "iron_trapdoor",
          "fails": 1,
          "lastCode": "AIM"
        },
        "23,3,-31@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "40,2,-33@0": {
          "name": "water",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "17,4,-16@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "AIM"
        },
        "50,4,-19@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "57,5,-28@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "54,5,-29@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "57,5,-29@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "57,5,-30@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "58,5,-27@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "54,5,-28@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "52,5,-28@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "26,5,-58@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "16,5,-69@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "AIM"
        },
        "28,5,-65@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NOT_GROUNDED"
        },
        "27,5,-63@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "25,5,-65@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "26,5,-67@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "23,5,-67@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "24,5,-66@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "24,5,-70@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "36,5,-35@0": {
          "name": "iron_bars",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "35,5,-35@0": {
          "name": "iron_bars",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "34,5,-35@0": {
          "name": "iron_bars",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "33,5,-35@0": {
          "name": "iron_bars",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "32,5,-32@0": {
          "name": "iron_bars",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "15,5,-27@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "18,5,-12@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "21,5,-13@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "19,5,-64@0": {
          "name": "oak_fence_gate",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "42,6,-60@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "REFUSED"
        },
        "27,6,-52@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "16,6,-47@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "15,6,-48@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "21,6,-36@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "AIM"
        },
        "21,6,-35@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "AIM"
        },
        "5,6,-25@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "26,6,-10@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "REFUSED"
        },
        "18,7,-43@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "14,7,-47@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "15,7,-47@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "25,7,-47@0": {
          "name": "stone_bricks",
          "fails": 4,
          "lastCode": "NO_ACCESS"
        },
        "25,7,-48@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "25,7,-49@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "31,7,-54@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "32,7,-54@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "38,7,-71@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "39,7,-69@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "39,7,-73@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "30,7,-34@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "32,7,-31@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "32,7,-30@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "27,7,-34@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "31,7,-31@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "35,7,-30@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "27,7,-36@0": {
          "name": "stone_bricks",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "37,8,-29@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "37,8,-28@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "42,8,-34@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "42,8,-47@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "44,8,-47@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "46,8,-46@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "37,8,-72@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "34,7,-31@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "17,8,-37@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "19,8,-37@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "1,8,-24@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "1,8,-23@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "1,8,-16@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "1,8,-17@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "16,8,-1@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "18,8,-1@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "17,8,-1@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "7,8,-36@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "AIM"
        },
        "2,8,-81@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "5,8,-80@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "16,9,-46@0": {
          "name": "obsidian",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "1,9,-54@0": {
          "name": "obsidian",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "45,9,-44@0": {
          "name": "black_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "0,12,-43@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "38,12,-39@0": {
          "name": "chest",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "19,13,-40@0": {
          "name": "packed_ice",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "18,13,-41@0": {
          "name": "packed_ice",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "14,13,-44@0": {
          "name": "polished_blackstone_stairs",
          "fails": 1,
          "lastCode": "AIM"
        },
        "76,13,-41@0": {
          "name": "stone_bricks",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "38,14,-83@0": {
          "name": "black_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "41,14,-83@0": {
          "name": "gray_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "42,14,-83@0": {
          "name": "black_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "40,14,-82@0": {
          "name": "black_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "37,14,-83@0": {
          "name": "sea_lantern",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "36,14,-83@0": {
          "name": "black_concrete",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "17,14,-45@0": {
          "name": "black_concrete",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "18,14,-40@0": {
          "name": "iron_trapdoor",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "20,14,-42@0": {
          "name": "black_concrete",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "16,14,-42@0": {
          "name": "polished_blackstone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "17,14,-43@0": {
          "name": "black_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "16,14,-45@0": {
          "name": "black_concrete",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "19,14,-41@0": {
          "name": "black_concrete",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "51,14,-42@0": {
          "name": "sea_lantern",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "50,14,-41@0": {
          "name": "black_concrete",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "36,14,-42@0": {
          "name": "black_concrete",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "35,14,-42@0": {
          "name": "black_concrete",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "16,14,-49@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "AIM"
        },
        "5,14,-50@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "20,14,-30@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "17,14,-29@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "14,14,-29@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "14,14,-27@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "9,14,-32@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "6,14,-35@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "34,14,-60@0": {
          "name": "cobblestone",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "35,14,-61@0": {
          "name": "black_stained_glass",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "4,14,-33@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "3,14,-32@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "29,14,-61@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "18,14,-9@0": {
          "name": "cobblestone",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "29,14,-77@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "13,14,-12@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NOT_GROUNDED"
        },
        "30,14,-79@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "8,14,-27@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "6,14,-27@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "AIM"
        },
        "14,14,-4@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "31,14,-79@0": {
          "name": "cobblestone",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "10,14,-25@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "5,14,-16@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "3,14,-16@0": {
          "name": "black_stained_glass",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "4,14,-14@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "32,14,-33@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "70,14,-66@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "33,14,-24@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NOT_GROUNDED"
        },
        "57,14,-78@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "33,14,-14@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "8,14,-3@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "71,14,-67@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "32,14,-11@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "58,14,-80@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "64,14,-67@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "34,14,-9@0": {
          "name": "cobblestone",
          "fails": 2,
          "lastCode": "AIM"
        },
        "34,14,-8@0": {
          "name": "oak_leaves",
          "fails": 3,
          "lastCode": "TASK_TIMEOUT"
        },
        "42,14,-27@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "34,14,-7@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "28,14,-7@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "30,14,-4@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "32,14,-80@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "45,14,-25@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "40,14,-32@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "44,14,-64@0": {
          "name": "black_stained_glass",
          "fails": 3,
          "lastCode": "TASK_TIMEOUT"
        },
        "45,14,-65@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "48,14,-25@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "20,14,-69@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "17,14,-70@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "48,14,-24@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "53,14,-25@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "58,14,-26@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "62,14,-25@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "39,14,-77@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "61,14,-24@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "16,14,-72@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "71,14,-16@0": {
          "name": "black_stained_glass",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "62,14,-23@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "70,14,-15@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "52,14,-21@0": {
          "name": "cobblestone",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "56,14,-17@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "64,14,-17@0": {
          "name": "cobblestone",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "58,14,-10@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "58,14,-9@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "18,14,-75@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "16,14,-80@0": {
          "name": "black_stained_glass",
          "fails": 3,
          "lastCode": "TASK_TIMEOUT"
        },
        "57,14,-6@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "60,14,-5@0": {
          "name": "cobblestone",
          "fails": 3,
          "lastCode": "TASK_TIMEOUT"
        },
        "49,14,-4@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "54,14,-7@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "46,13,-59@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "46,13,-67@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "43,13,-31@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "42,13,-28@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "22,14,-71@0": {
          "name": "oak_leaves",
          "fails": 3,
          "lastCode": "TASK_TIMEOUT"
        },
        "21,14,-71@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "5,13,-5@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "22,14,-79@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "9,13,-9@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "9,13,-25@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "21,14,-79@0": {
          "name": "cobblestone",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "6,13,-26@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "17,13,-33@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "30,13,-34@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "30,13,-10@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "32,13,-12@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "33,13,-17@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "10,13,-6@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "NO_ACCESS"
        },
        "16,13,-12@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "24,13,-20@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "15,13,-76@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "9,13,-33@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "49,13,-9@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        },
        "4,13,-32@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "60,13,-10@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "7,13,-31@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "6,13,-34@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "NO_ACCESS"
        },
        "4,13,-51@0": {
          "name": "oak_leaves",
          "fails": 1,
          "lastCode": "TASK_TIMEOUT"
        },
        "12,13,-51@0": {
          "name": "oak_leaves",
          "fails": 2,
          "lastCode": "TASK_TIMEOUT"
        }
      },
      "supportNeeded": {
        "56,23,-74@0": [
          [
            -1,
            -2,
            0
          ]
        ]
      },
      "version": 8,
      "runs": 1,
      "completedRuns": 0,
      "hazardCells": {},
      "unsealNeeded": {},
      "updatedAt": 0,
      "rules": {},
      "stands": {},
      "failedStands": {},
      "supportCells": {}
    },
    "Mauschu_Hyperspeed_Bonemeal_Farm_16x_1.litematic": {
      "runs": 1,
      "completedRuns": 0,
      "bestStands": {
        "0,1,8@0": [
          -2,
          -1,
          0
        ],
        "0,1,9@0": [
          -1,
          -1,
          3
        ],
        "0,1,10@0": [
          -1,
          -1,
          2
        ],
        "0,1,11@0": [
          -1,
          -1,
          1
        ],
        "1,1,10@0": [
          0,
          -1,
          3
        ],
        "1,1,11@0": [
          0,
          -1,
          2
        ],
        "1,1,12@0": [
          0,
          -1,
          1
        ],
        "2,1,10@0": [
          0,
          -1,
          3
        ],
        "2,1,11@0": [
          0,
          -1,
          2
        ],
        "2,1,12@0": [
          0,
          -1,
          1
        ],
        "19,1,19@0": [
          0,
          -1,
          4
        ],
        "20,1,19@0": [
          0,
          -1,
          4
        ],
        "21,1,19@0": [
          0,
          -1,
          4
        ],
        "22,1,19@0": [
          0,
          -1,
          4
        ],
        "23,1,19@0": [
          0,
          -1,
          4
        ],
        "24,1,19@0": [
          0,
          -1,
          4
        ],
        "31,1,8@0": [
          3,
          -1,
          2
        ],
        "18,1,27@0": [
          1,
          -1,
          -3
        ],
        "19,1,27@0": [
          0,
          -1,
          -3
        ],
        "20,1,27@0": [
          1,
          -1,
          -3
        ],
        "21,1,27@0": [
          0,
          -1,
          -3
        ],
        "22,1,27@0": [
          1,
          -1,
          -3
        ],
        "23,1,27@0": [
          0,
          -1,
          -3
        ],
        "24,1,27@0": [
          1,
          -1,
          -3
        ],
        "25,1,27@0": [
          0,
          -1,
          -3
        ],
        "26,1,27@0": [
          1,
          -1,
          -3
        ],
        "27,1,27@0": [
          0,
          -1,
          -3
        ],
        "28,1,27@0": [
          0,
          -1,
          -3
        ],
        "29,1,27@0": [
          0,
          -1,
          -3
        ],
        "30,1,27@0": [
          0,
          -1,
          -3
        ],
        "31,1,27@0": [
          1,
          -1,
          -3
        ],
        "11,1,81@0": [
          0,
          -1,
          3
        ],
        "10,1,81@0": [
          0,
          -1,
          3
        ],
        "9,1,81@0": [
          0,
          -1,
          3
        ],
        "8,1,81@0": [
          0,
          -1,
          3
        ],
        "7,1,81@0": [
          0,
          -1,
          3
        ],
        "6,2,67@0": [
          1,
          0,
          0
        ],
        "8,2,67@0": [
          1,
          0,
          0
        ],
        "10,2,67@0": [
          -1,
          0,
          0
        ],
        "1,2,32@0": [
          0,
          0,
          3
        ],
        "16,2,1@0": [
          1,
          -2,
          -1
        ],
        "3,2,1@0": [
          0,
          -2,
          0
        ],
        "2,2,2@0": [
          1,
          -2,
          -1
        ],
        "14,2,45@0": [
          0,
          -2,
          1
        ],
        "13,2,45@0": [
          0,
          -2,
          1
        ],
        "12,2,45@0": [
          0,
          -2,
          1
        ],
        "11,2,45@0": [
          0,
          -2,
          1
        ],
        "10,2,45@0": [
          0,
          -2,
          1
        ],
        "9,2,45@0": [
          0,
          -2,
          1
        ],
        "8,2,45@0": [
          0,
          -2,
          1
        ],
        "7,2,45@0": [
          0,
          -2,
          1
        ],
        "6,2,45@0": [
          0,
          -2,
          1
        ],
        "5,2,45@0": [
          0,
          -2,
          1
        ],
        "4,2,45@0": [
          0,
          -2,
          1
        ],
        "3,2,45@0": [
          -1,
          -2,
          1
        ],
        "3,2,21@0": [
          -1,
          -2,
          0
        ],
        "3,2,11@0": [
          2,
          0,
          1
        ],
        "2,2,11@0": [
          1,
          0,
          2
        ]
      },
      "lockedSpecs": {
        "0,1,8@0": "free",
        "0,1,9@0": "free",
        "0,1,10@0": "free",
        "0,1,11@0": "free",
        "1,1,10@0": "free",
        "1,1,11@0": "free",
        "1,1,12@0": "free",
        "2,1,10@0": "free",
        "2,1,11@0": "free",
        "2,1,12@0": "free",
        "6,2,3@0": "piston-a",
        "2,1,33@0": "free",
        "19,1,19@0": "free",
        "20,1,19@0": "free",
        "21,1,19@0": "free",
        "22,1,19@0": "free",
        "23,1,19@0": "free",
        "24,1,19@0": "free",
        "31,1,8@0": "free",
        "18,1,27@0": "free",
        "19,1,27@0": "free",
        "20,1,27@0": "free",
        "21,1,27@0": "free",
        "22,1,27@0": "free",
        "23,1,27@0": "free",
        "24,1,27@0": "free",
        "25,1,27@0": "free",
        "26,1,27@0": "free",
        "27,1,27@0": "free",
        "28,1,27@0": "free",
        "29,1,27@0": "free",
        "30,1,27@0": "free",
        "31,1,27@0": "free",
        "28,1,10@0": "hopper",
        "11,1,81@0": "free",
        "10,1,81@0": "free",
        "9,1,81@0": "free",
        "8,1,81@0": "free",
        "7,1,81@0": "free",
        "6,2,67@0": "piston-a",
        "8,2,67@0": "piston-a",
        "10,2,67@0": "piston-a",
        "7,2,4@0": "free",
        "8,2,4@0": "free",
        "9,2,4@0": "free",
        "10,2,4@0": "free",
        "11,2,3@0": "piston-a",
        "9,2,3@0": "piston-a",
        "11,2,4@0": "free",
        "12,2,4@0": "free",
        "13,2,4@0": "free",
        "14,2,3@0": "piston-a",
        "12,2,3@0": "piston-a",
        "14,2,4@0": "free",
        "15,2,4@0": "free",
        "16,2,4@0": "free",
        "15,2,3@0": "piston-a",
        "1,2,32@0": "free",
        "3,2,2@0": "observer-b",
        "16,2,1@0": "observer-b",
        "3,2,1@0": "observer-b",
        "2,2,2@0": "free",
        "19,2,44@0": "observer-b",
        "14,2,45@0": "observer-b",
        "13,2,45@0": "observer-b",
        "12,2,45@0": "observer-b",
        "11,2,45@0": "observer-b",
        "10,2,45@0": "observer-b",
        "9,2,45@0": "observer-b",
        "8,2,45@0": "observer-b",
        "7,2,45@0": "observer-b",
        "6,2,45@0": "observer-b",
        "5,2,45@0": "observer-b",
        "4,2,45@0": "observer-b",
        "3,2,45@0": "observer-b",
        "3,2,21@0": "observer-b",
        "3,2,11@0": "observer-b",
        "2,2,11@0": "diode"
      },
      "provenFluids": [],
      "hardBlocks": {},
      "supportNeeded": {
        "4,1,60@0": [
          [
            0,
            -1,
            0
          ]
        ],
        "15,2,44@0": [
          [
            -1,
            0,
            0
          ]
        ],
        "21,2,74@0": [
          [
            -1,
            0,
            0
          ]
        ],
        "29,2,20@0": [
          [
            -1,
            0,
            0
          ]
        ]
      }
    },
    "cobble.litematic": {
      "runs": 1,
      "completedRuns": 1,
      "bestStands": {
        "5,1,13@0": [
          -1,
          -1,
          -3
        ],
        "5,1,12@0": [
          -1,
          -1,
          -2
        ],
        "5,1,11@0": [
          -1,
          -1,
          -1
        ],
        "4,1,11@0": [
          0,
          -1,
          -3
        ],
        "4,1,10@0": [
          0,
          -1,
          -2
        ],
        "4,1,9@0": [
          0,
          -1,
          -1
        ],
        "5,1,9@0": [
          0,
          -1,
          -3
        ],
        "5,1,8@0": [
          0,
          -1,
          -2
        ],
        "5,1,7@0": [
          0,
          -1,
          -1
        ],
        "6,1,7@0": [
          0,
          -1,
          -4
        ],
        "6,1,6@0": [
          0,
          -1,
          -3
        ],
        "6,1,5@0": [
          0,
          -1,
          -2
        ],
        "7,1,5@0": [
          0,
          -1,
          -3
        ],
        "7,1,4@0": [
          0,
          -1,
          -3
        ],
        "7,1,3@0": [
          0,
          -1,
          -2
        ],
        "7,1,2@0": [
          0,
          -1,
          -3
        ],
        "7,1,1@0": [
          0,
          -1,
          -2
        ],
        "7,1,0@0": [
          0,
          -1,
          -1
        ],
        "8,1,0@0": [
          0,
          -1,
          -3
        ],
        "9,1,0@0": [
          0,
          -1,
          -3
        ],
        "10,1,0@0": [
          0,
          -1,
          -3
        ],
        "11,1,0@0": [
          0,
          -1,
          -3
        ],
        "12,1,0@0": [
          0,
          -1,
          -3
        ],
        "13,1,0@0": [
          0,
          -1,
          -3
        ],
        "14,1,0@0": [
          0,
          -1,
          -3
        ],
        "15,1,0@0": [
          0,
          -1,
          -2
        ],
        "16,1,0@0": [
          0,
          -1,
          -2
        ],
        "16,1,1@0": [
          3,
          -1,
          2
        ],
        "16,1,2@0": [
          3,
          -1,
          1
        ],
        "16,1,3@0": [
          3,
          -1,
          0
        ],
        "16,1,4@0": [
          3,
          -1,
          1
        ],
        "16,1,5@0": [
          3,
          -1,
          0
        ],
        "16,1,6@0": [
          3,
          -1,
          1
        ],
        "16,1,7@0": [
          3,
          -1,
          0
        ],
        "16,1,8@0": [
          3,
          -1,
          0
        ],
        "13,1,8@0": [
          -3,
          -1,
          0
        ],
        "12,1,8@0": [
          -2,
          -1,
          0
        ],
        "11,1,8@0": [
          -1,
          -1,
          0
        ],
        "7,1,7@0": [
          3,
          -1,
          1
        ],
        "8,1,7@0": [
          2,
          -1,
          1
        ],
        "8,1,5@0": [
          2,
          -1,
          3
        ],
        "8,1,6@0": [
          2,
          -1,
          2
        ],
        "9,1,6@0": [
          1,
          -1,
          2
        ],
        "6,1,8@0": [
          4,
          -1,
          0
        ],
        "7,1,8@0": [
          3,
          -1,
          0
        ],
        "8,1,8@0": [
          2,
          -1,
          0
        ],
        "9,1,8@0": [
          3,
          -1,
          -1
        ],
        "10,1,8@0": [
          2,
          -1,
          -1
        ],
        "10,1,7@0": [
          2,
          -1,
          0
        ],
        "10,1,6@0": [
          2,
          -1,
          1
        ],
        "11,1,6@0": [
          1,
          -1,
          1
        ],
        "13,1,7@0": [
          -1,
          -1,
          0
        ],
        "12,1,7@0": [
          0,
          -1,
          -4
        ],
        "12,1,6@0": [
          0,
          -1,
          -3
        ],
        "12,1,5@0": [
          0,
          -1,
          -2
        ],
        "11,1,5@0": [
          1,
          -1,
          -2
        ],
        "11,1,4@0": [
          1,
          -1,
          -1
        ],
        "11,1,1@0": [
          1,
          -1,
          2
        ],
        "11,1,2@0": [
          1,
          -1,
          1
        ],
        "11,1,3@0": [
          1,
          -1,
          0
        ],
        "12,1,2@0": [
          0,
          -1,
          1
        ],
        "15,1,2@0": [
          -3,
          -1,
          1
        ],
        "14,1,2@0": [
          -2,
          -1,
          1
        ],
        "14,1,3@0": [
          -2,
          -1,
          0
        ],
        "13,1,3@0": [
          -1,
          -1,
          0
        ],
        "15,1,4@0": [
          -3,
          -1,
          -1
        ],
        "14,1,4@0": [
          -2,
          -1,
          -1
        ],
        "13,1,4@0": [
          -1,
          -1,
          -1
        ],
        "2,1,9@0": [
          0,
          -1,
          3
        ],
        "2,1,10@0": [
          0,
          -1,
          2
        ],
        "2,1,11@0": [
          0,
          -1,
          1
        ],
        "2,1,13@0": [
          0,
          -1,
          -1
        ],
        "2,1,12@0": [
          -3,
          -1,
          0
        ],
        "1,1,12@0": [
          -2,
          -1,
          0
        ],
        "0,1,12@0": [
          -1,
          -1,
          0
        ],
        "1,1,10@0": [
          -2,
          -1,
          2
        ],
        "1,1,11@0": [
          -2,
          -1,
          1
        ],
        "0,1,10@0": [
          -1,
          -1,
          2
        ],
        "0,1,11@0": [
          -1,
          -1,
          1
        ],
        "0,1,13@0": [
          -3,
          -1,
          0
        ],
        "1,1,13@0": [
          -3,
          -1,
          2
        ],
        "0,1,9@0": [
          -3,
          -1,
          -1
        ],
        "0,1,8@0": [
          -3,
          -1,
          0
        ],
        "1,1,8@0": [
          0,
          -1,
          -3
        ],
        "1,1,7@0": [
          0,
          -1,
          -2
        ],
        "1,1,6@0": [
          0,
          -1,
          -1
        ],
        "3,1,6@0": [
          -2,
          -1,
          -1
        ],
        "2,1,6@0": [
          -1,
          -1,
          -1
        ],
        "2,1,5@0": [
          -1,
          -1,
          0
        ],
        "1,1,5@0": [
          0,
          -1,
          -3
        ],
        "1,1,4@0": [
          0,
          -1,
          -2
        ],
        "1,1,3@0": [
          0,
          -1,
          -1
        ],
        "4,1,4@0": [
          -3,
          -1,
          -2
        ],
        "3,1,4@0": [
          -2,
          -1,
          -2
        ],
        "3,1,3@0": [
          -2,
          -1,
          -1
        ],
        "2,1,3@0": [
          -1,
          -1,
          -1
        ],
        "2,1,2@0": [
          -1,
          -1,
          0
        ],
        "1,1,2@0": [
          0,
          -1,
          -4
        ],
        "1,1,1@0": [
          0,
          -1,
          -3
        ],
        "1,1,0@0": [
          0,
          -1,
          -2
        ],
        "2,1,0@0": [
          0,
          -1,
          -3
        ],
        "3,1,0@0": [
          0,
          -1,
          -3
        ],
        "6,1,0@0": [
          -3,
          -1,
          -3
        ],
        "5,1,0@0": [
          -2,
          -1,
          -3
        ],
        "4,1,0@0": [
          -1,
          -1,
          -3
        ],
        "4,1,1@0": [
          -1,
          -1,
          0
        ],
        "3,1,2@0": [
          0,
          -1,
          -1
        ],
        "2,1,1@0": [
          1,
          -1,
          0
        ],
        "7,2,8@0": [
          -1,
          0,
          -1
        ],
        "6,2,8@0": [
          0,
          0,
          -1
        ],
        "6,2,6@0": [
          0,
          0,
          1
        ],
        "7,2,6@0": [
          -1,
          0,
          1
        ],
        "8,2,6@0": [
          -2,
          0,
          1
        ],
        "8,2,7@0": [
          -2,
          0,
          0
        ],
        "9,2,8@0": [
          -3,
          0,
          -1
        ],
        "8,2,8@0": [
          -2,
          0,
          -1
        ],
        "5,2,7@0": [
          1,
          0,
          0
        ],
        "4,2,8@0": [
          2,
          0,
          -1
        ],
        "5,2,8@0": [
          1,
          0,
          -1
        ],
        "5,2,11@0": [
          1,
          0,
          -4
        ],
        "5,2,10@0": [
          1,
          0,
          -3
        ],
        "5,2,9@0": [
          1,
          0,
          -2
        ],
        "6,2,9@0": [
          0,
          0,
          -2
        ],
        "6,2,11@0": [
          0,
          0,
          -4
        ],
        "4,2,5@0": [
          2,
          0,
          2
        ],
        "5,2,5@0": [
          1,
          0,
          2
        ],
        "5,2,6@0": [
          1,
          0,
          1
        ],
        "6,2,5@0": [
          0,
          0,
          2
        ],
        "14,2,8@0": [
          -1,
          0,
          0
        ],
        "14,2,9@0": [
          -1,
          0,
          -1
        ],
        "13,2,9@0": [
          0,
          0,
          -1
        ],
        "12,2,9@0": [
          1,
          0,
          -1
        ],
        "12,2,8@0": [
          1,
          0,
          0
        ],
        "12,2,7@0": [
          1,
          0,
          1
        ],
        "12,2,6@0": [
          1,
          0,
          2
        ],
        "13,2,6@0": [
          0,
          0,
          2
        ],
        "14,2,6@0": [
          -1,
          0,
          2
        ],
        "14,2,7@0": [
          -1,
          0,
          1
        ],
        "10,2,8@0": [
          3,
          0,
          0
        ],
        "11,2,8@0": [
          2,
          0,
          0
        ],
        "12,2,4@0": [
          1,
          0,
          4
        ],
        "13,2,4@0": [
          0,
          0,
          4
        ],
        "13,3,13@0": [
          -1,
          0,
          0
        ],
        "11,3,13@0": [
          1,
          0,
          0
        ],
        "11,3,11@0": [
          1,
          0,
          2
        ],
        "12,3,11@0": [
          0,
          0,
          2
        ],
        "13,3,11@0": [
          -1,
          0,
          2
        ],
        "14,3,11@0": [
          -2,
          0,
          2
        ],
        "15,3,11@0": [
          -3,
          0,
          2
        ],
        "10,3,11@0": [
          2,
          0,
          2
        ],
        "9,3,11@0": [
          3,
          0,
          2
        ],
        "0,4,0@0": [
          3,
          0,
          0
        ],
        "0,5,0@0": [
          3,
          -1,
          0
        ],
        "4,4,3@0": [
          -1,
          0,
          -3
        ],
        "5,4,3@0": [
          0,
          0,
          -3
        ],
        "4,5,3@0": [
          0,
          -1,
          -1
        ],
        "4,7,3@0": [
          0,
          -3,
          -3
        ],
        "7,4,2@0": [
          -3,
          0,
          -2
        ],
        "7,5,2@0": [
          0,
          -1,
          -1
        ],
        "7,6,2@0": [
          0,
          -2,
          -1
        ],
        "7,7,2@0": [
          2,
          -3,
          -2
        ],
        "8,4,3@0": [
          1,
          0,
          -3
        ],
        "8,5,3@0": [
          0,
          -1,
          -1
        ],
        "8,7,3@0": [
          2,
          -3,
          -2
        ],
        "9,4,4@0": [
          1,
          0,
          -3
        ],
        "9,5,4@0": [
          1,
          -1,
          -3
        ],
        "9,7,4@0": [
          0,
          -3,
          -3
        ],
        "10,4,5@0": [
          -1,
          0,
          -4
        ],
        "10,5,5@0": [
          1,
          -1,
          0
        ],
        "10,6,5@0": [
          1,
          -2,
          0
        ],
        "10,7,5@0": [
          0,
          -3,
          -3
        ],
        "2,5,7@0": [
          -1,
          -1,
          0
        ],
        "2,6,7@0": [
          -1,
          -2,
          0
        ],
        "2,7,7@0": [
          -2,
          -3,
          2
        ],
        "3,4,8@0": [
          -3,
          0,
          1
        ],
        "3,5,8@0": [
          -1,
          -1,
          0
        ],
        "3,7,8@0": [
          -3,
          -3,
          -1
        ],
        "3,4,4@0": [
          -3,
          0,
          3
        ],
        "3,4,5@0": [
          -3,
          0,
          1
        ],
        "3,5,4@0": [
          -1,
          -1,
          0
        ],
        "3,7,4@0": [
          0,
          -3,
          -3
        ],
        "4,7,9@0": [
          3,
          -3,
          1
        ],
        "8,4,9@0": [
          -1,
          0,
          1
        ],
        "8,7,9@0": [
          2,
          -3,
          -2
        ],
        "7,4,8@0": [
          3,
          0,
          -1
        ],
        "7,5,8@0": [
          3,
          -1,
          -1
        ],
        "9,4,8@0": [
          1,
          0,
          -1
        ],
        "9,5,8@0": [
          1,
          -1,
          0
        ],
        "9,7,8@0": [
          3,
          -3,
          0
        ],
        "4,5,7@0": [
          0,
          0,
          -2
        ],
        "4,7,7@0": [
          0,
          -2,
          -2
        ],
        "5,8,7@0": [
          2,
          0,
          1
        ],
        "6,8,7@0": [
          1,
          0,
          1
        ],
        "7,8,7@0": [
          0,
          0,
          1
        ],
        "7,8,5@0": [
          -4,
          0,
          0
        ],
        "5,8,6@0": [
          -2,
          0,
          -1
        ],
        "4,8,6@0": [
          -1,
          0,
          -1
        ],
        "5,8,5@0": [
          -2,
          0,
          0
        ],
        "6,8,5@0": [
          -2,
          0,
          3
        ],
        "5,9,5@0": [
          0,
          0,
          2
        ],
        "6,9,7@0": [
          -1,
          0,
          0
        ],
        "7,9,6@0": [
          -2,
          0,
          1
        ],
        "8,9,6@0": [
          0,
          -1,
          -2
        ],
        "4,9,5@0": [
          0,
          -1,
          3
        ],
        "4,9,6@0": [
          0,
          -1,
          2
        ],
        "6,10,7@0": [
          1,
          0,
          -1
        ],
        "4,10,5@0": [
          3,
          0,
          1
        ],
        "7,10,7@0": [
          0,
          0,
          -1
        ],
        "5,10,6@0": [
          0,
          0,
          -1
        ],
        "4,11,5@0": [
          1,
          -1,
          0
        ],
        "6,10,6@0": [
          -2,
          0,
          -3
        ],
        "5,11,6@0": [
          2,
          -1,
          0
        ],
        "5,11,7@0": [
          2,
          -1,
          0
        ],
        "4,11,6@0": [
          0,
          -3,
          2
        ],
        "5,11,5@0": [
          -1,
          0,
          0
        ],
        "6,11,6@0": [
          1,
          0,
          -1
        ],
        "7,11,6@0": [
          0,
          -1,
          1
        ],
        "4,12,6@0": [
          3,
          -2,
          1
        ],
        "6,12,6@0": [
          -2,
          -1,
          -1
        ],
        "6,12,7@0": [
          -2,
          0,
          1
        ],
        "5,12,7@0": [
          -1,
          0,
          1
        ],
        "6,12,9@0": [
          -2,
          0,
          -2
        ],
        "6,12,8@0": [
          -1,
          0,
          -3
        ],
        "4,12,9@0": [
          2,
          0,
          -1
        ],
        "5,12,9@0": [
          1,
          0,
          -1
        ],
        "8,10,6@0": [
          -1,
          0,
          1
        ],
        "4,13,7@0": [
          0,
          0,
          3
        ],
        "4,11,9@0": [
          1,
          -3,
          1
        ]
      },
      "lockedSpecs": {
        "5,1,13@0": "free",
        "5,1,12@0": "free",
        "5,1,11@0": "free",
        "4,1,11@0": "free",
        "4,1,10@0": "free",
        "4,1,9@0": "free",
        "5,1,9@0": "free",
        "5,1,8@0": "free",
        "5,1,7@0": "free",
        "6,1,7@0": "free",
        "6,1,6@0": "free",
        "6,1,5@0": "free",
        "7,1,5@0": "free",
        "7,1,4@0": "free",
        "7,1,3@0": "free",
        "7,1,2@0": "free",
        "7,1,1@0": "free",
        "7,1,0@0": "free",
        "8,1,0@0": "free",
        "9,1,0@0": "free",
        "10,1,0@0": "free",
        "11,1,0@0": "free",
        "12,1,0@0": "free",
        "13,1,0@0": "free",
        "14,1,0@0": "free",
        "15,1,0@0": "free",
        "16,1,0@0": "free",
        "16,1,1@0": "free",
        "16,1,2@0": "free",
        "16,1,3@0": "free",
        "16,1,4@0": "free",
        "16,1,5@0": "free",
        "16,1,6@0": "free",
        "16,1,7@0": "free",
        "16,1,8@0": "free",
        "13,1,8@0": "free",
        "12,1,8@0": "free",
        "11,1,8@0": "free",
        "7,1,7@0": "free",
        "8,1,7@0": "free",
        "8,1,5@0": "free",
        "8,1,6@0": "free",
        "9,1,6@0": "free",
        "6,1,8@0": "free",
        "7,1,8@0": "free",
        "8,1,8@0": "free",
        "9,1,8@0": "free",
        "10,1,8@0": "free",
        "10,1,7@0": "free",
        "10,1,6@0": "free",
        "11,1,6@0": "free",
        "13,1,7@0": "free",
        "12,1,7@0": "free",
        "12,1,6@0": "free",
        "12,1,5@0": "free",
        "11,1,5@0": "free",
        "11,1,4@0": "free",
        "11,1,1@0": "free",
        "11,1,2@0": "free",
        "11,1,3@0": "free",
        "12,1,2@0": "free",
        "15,1,2@0": "free",
        "14,1,2@0": "free",
        "14,1,3@0": "free",
        "13,1,3@0": "free",
        "15,1,4@0": "free",
        "14,1,4@0": "free",
        "13,1,4@0": "free",
        "12,1,4@0": "free",
        "12,1,3@0": "free",
        "12,1,1@0": "free",
        "13,1,1@0": "free",
        "13,1,2@0": "free",
        "14,1,1@0": "free",
        "10,1,1@0": "free",
        "9,1,1@0": "free",
        "8,1,1@0": "free",
        "8,1,2@0": "free",
        "9,1,2@0": "free",
        "10,1,2@0": "free",
        "10,1,3@0": "free",
        "13,1,5@0": "free",
        "13,1,6@0": "free",
        "15,1,6@0": "free",
        "15,1,5@0": "free",
        "14,1,5@0": "free",
        "14,1,6@0": "free",
        "15,1,3@0": "free",
        "15,1,1@0": "free",
        "15,1,7@0": "free",
        "14,1,7@0": "free",
        "14,1,8@0": "free",
        "12,1,9@0": "free",
        "11,1,7@0": "free",
        "9,1,7@0": "free",
        "9,1,5@0": "free",
        "10,1,5@0": "free",
        "10,1,4@0": "free",
        "9,1,4@0": "free",
        "8,1,4@0": "free",
        "7,1,6@0": "free",
        "6,1,9@0": "free",
        "7,1,9@0": "free",
        "8,1,9@0": "free",
        "11,1,9@0": "free",
        "10,1,9@0": "free",
        "9,1,9@0": "free",
        "5,1,10@0": "free",
        "4,1,8@0": "free",
        "4,1,7@0": "free",
        "6,1,4@0": "free",
        "5,1,4@0": "free",
        "5,1,5@0": "free",
        "5,1,6@0": "free",
        "4,1,6@0": "free",
        "4,1,12@0": "free",
        "3,1,12@0": "free",
        "4,1,13@0": "free",
        "3,1,13@0": "free",
        "3,1,11@0": "free",
        "3,1,10@0": "free",
        "3,1,9@0": "free",
        "2,1,9@0": "free",
        "2,1,10@0": "free",
        "2,1,11@0": "free",
        "2,1,13@0": "free",
        "2,1,12@0": "free",
        "1,1,12@0": "free",
        "0,1,12@0": "free",
        "1,1,10@0": "free",
        "1,1,11@0": "free",
        "0,1,10@0": "free",
        "0,1,11@0": "free",
        "0,1,13@0": "free",
        "1,1,13@0": "free",
        "0,1,9@0": "free",
        "0,1,8@0": "free",
        "1,1,8@0": "free",
        "1,1,7@0": "free",
        "1,1,6@0": "free",
        "3,1,6@0": "free",
        "2,1,6@0": "free",
        "2,1,5@0": "free",
        "1,1,5@0": "free",
        "1,1,4@0": "free",
        "1,1,3@0": "free",
        "4,1,4@0": "free",
        "3,1,4@0": "free",
        "3,1,3@0": "free",
        "2,1,3@0": "free",
        "2,1,2@0": "free",
        "1,1,2@0": "free",
        "1,1,1@0": "free",
        "1,1,0@0": "free",
        "2,1,0@0": "free",
        "3,1,0@0": "free",
        "6,1,0@0": "free",
        "5,1,0@0": "free",
        "4,1,0@0": "free",
        "4,1,1@0": "free",
        "3,1,2@0": "free",
        "2,1,1@0": "free",
        "3,1,1@0": "free",
        "4,1,2@0": "free",
        "4,1,3@0": "free",
        "5,1,3@0": "free",
        "5,1,2@0": "free",
        "6,1,2@0": "free",
        "6,1,1@0": "free",
        "6,1,3@0": "free",
        "2,1,4@0": "free",
        "5,1,1@0": "free",
        "4,1,5@0": "free",
        "3,1,5@0": "free",
        "3,1,7@0": "free",
        "2,1,7@0": "free",
        "2,1,8@0": "free",
        "3,1,8@0": "free",
        "0,1,7@0": "free",
        "0,1,6@0": "free",
        "0,1,5@0": "free",
        "0,1,4@0": "free",
        "0,1,3@0": "free",
        "0,1,2@0": "free",
        "0,1,1@0": "free",
        "0,1,0@0": "free",
        "8,1,3@0": "free",
        "9,1,3@0": "free",
        "1,1,9@0": "free",
        "6,1,12@0": "chest-sneak",
        "7,1,12@0": "chest-sneak",
        "8,1,12@0": "chest-sneak",
        "9,1,12@0": "chest-sneak",
        "15,1,10@0": "hopper",
        "14,1,10@0": "hopper",
        "13,1,10@0": "hopper",
        "12,1,10@0": "hopper",
        "11,1,10@0": "hopper",
        "10,1,10@0": "hopper",
        "9,1,10@0": "hopper",
        "8,1,10@0": "hopper",
        "7,1,10@0": "hopper",
        "6,1,10@0": "hopper",
        "7,2,8@0": "free",
        "6,2,8@0": "free",
        "6,2,6@0": "free",
        "7,2,6@0": "free",
        "8,2,6@0": "free",
        "8,2,7@0": "free",
        "9,2,8@0": "free",
        "8,2,8@0": "free",
        "5,2,7@0": "free",
        "4,2,8@0": "free",
        "5,2,8@0": "free",
        "5,2,11@0": "free",
        "5,2,10@0": "free",
        "5,2,9@0": "free",
        "6,2,9@0": "free",
        "6,2,11@0": "free",
        "4,2,5@0": "free",
        "5,2,5@0": "free",
        "5,2,6@0": "free",
        "6,2,5@0": "free",
        "6,2,7@0": "free",
        "7,2,7@0": "free",
        "4,2,7@0": "free",
        "3,2,7@0": "free",
        "3,2,8@0": "free",
        "3,2,9@0": "free",
        "4,2,9@0": "free",
        "4,2,10@0": "free",
        "4,2,11@0": "free",
        "3,2,11@0": "free",
        "3,2,10@0": "free",
        "1,2,10@0": "free",
        "2,2,10@0": "free",
        "2,2,9@0": "free",
        "2,2,8@0": "free",
        "1,2,9@0": "free",
        "1,2,8@0": "free",
        "1,2,7@0": "free",
        "2,2,7@0": "free",
        "4,2,6@0": "free",
        "3,2,5@0": "free",
        "3,2,6@0": "free",
        "10,2,1@0": "free",
        "9,2,1@0": "free",
        "9,2,0@0": "free",
        "8,2,0@0": "free",
        "7,2,0@0": "free",
        "6,2,0@0": "free",
        "4,2,0@0": "free",
        "5,2,0@0": "free",
        "5,2,1@0": "free",
        "5,2,2@0": "free",
        "4,2,2@0": "free",
        "4,2,1@0": "free",
        "3,2,1@0": "free",
        "3,2,2@0": "free",
        "3,2,3@0": "free",
        "2,2,3@0": "free",
        "2,2,4@0": "free",
        "2,2,5@0": "free",
        "1,2,6@0": "free",
        "1,2,5@0": "free",
        "1,2,4@0": "free",
        "0,2,3@0": "free",
        "1,2,3@0": "free",
        "0,2,4@0": "free",
        "1,2,1@0": "free",
        "1,2,2@0": "free",
        "2,2,2@0": "free",
        "2,2,1@0": "free",
        "2,2,0@0": "free",
        "3,2,0@0": "free",
        "1,2,0@0": "free",
        "0,2,2@0": "free",
        "0,2,1@0": "free",
        "0,2,0@0": "free",
        "14,2,8@0": "free",
        "14,2,9@0": "free",
        "13,2,9@0": "free",
        "12,2,9@0": "free",
        "12,2,8@0": "free",
        "12,2,7@0": "free",
        "12,2,6@0": "free",
        "13,2,6@0": "free",
        "14,2,6@0": "free",
        "14,2,7@0": "free",
        "10,2,8@0": "free",
        "11,2,8@0": "free",
        "12,2,4@0": "free",
        "13,2,4@0": "free",
        "13,2,5@0": "free",
        "14,2,5@0": "free",
        "15,2,5@0": "free",
        "15,2,6@0": "free",
        "15,2,7@0": "free",
        "15,2,8@0": "free",
        "16,2,9@0": "free",
        "16,2,8@0": "free",
        "16,2,10@0": "free",
        "16,2,11@0": "free",
        "15,2,11@0": "free",
        "14,2,11@0": "free",
        "13,2,11@0": "free",
        "13,2,8@0": "free",
        "13,2,7@0": "free",
        "15,2,9@0": "free",
        "16,2,7@0": "free",
        "12,2,5@0": "free",
        "12,2,3@0": "free",
        "13,2,3@0": "free",
        "14,2,3@0": "free",
        "14,2,4@0": "free",
        "16,2,4@0": "free",
        "15,2,4@0": "free",
        "16,2,5@0": "free",
        "16,2,6@0": "free",
        "15,2,3@0": "free",
        "15,2,2@0": "free",
        "14,2,2@0": "free",
        "13,2,2@0": "free",
        "12,2,2@0": "free",
        "12,2,1@0": "free",
        "13,2,1@0": "free",
        "11,2,1@0": "free",
        "10,2,0@0": "free",
        "11,2,0@0": "free",
        "12,2,0@0": "free",
        "13,2,0@0": "free",
        "14,2,0@0": "free",
        "14,2,1@0": "free",
        "15,2,0@0": "free",
        "15,2,1@0": "free",
        "16,2,3@0": "free",
        "16,2,2@0": "free",
        "16,2,1@0": "free",
        "16,2,0@0": "free",
        "4,2,13@0": "free",
        "4,2,12@0": "free",
        "3,2,12@0": "free",
        "2,2,12@0": "free",
        "2,2,11@0": "free",
        "0,2,7@0": "free",
        "0,2,8@0": "free",
        "0,2,9@0": "free",
        "0,2,10@0": "free",
        "0,2,11@0": "free",
        "1,2,11@0": "free",
        "0,2,12@0": "free",
        "1,2,12@0": "free",
        "3,2,13@0": "free",
        "2,2,13@0": "free",
        "1,2,13@0": "free",
        "0,2,13@0": "free",
        "8,2,13@0": "free",
        "9,2,13@0": "free",
        "9,2,11@0": "free",
        "10,2,11@0": "free",
        "11,2,11@0": "free",
        "12,2,11@0": "free",
        "12,2,13@0": "free",
        "11,2,13@0": "free",
        "10,2,13@0": "free",
        "13,2,13@0": "free",
        "14,2,13@0": "free",
        "15,2,13@0": "free",
        "16,2,12@0": "free",
        "13,3,13@0": "free",
        "11,3,13@0": "free",
        "11,3,11@0": "free",
        "12,3,11@0": "free",
        "13,3,11@0": "free",
        "14,3,11@0": "free",
        "15,3,11@0": "free",
        "10,3,11@0": "free",
        "9,3,11@0": "free",
        "14,3,13@0": "free",
        "12,3,13@0": "free",
        "16,3,12@0": "free",
        "16,3,11@0": "free",
        "16,3,10@0": "free",
        "16,3,9@0": "free",
        "15,3,9@0": "free",
        "14,3,9@0": "free",
        "13,3,9@0": "free",
        "12,3,9@0": "free",
        "11,3,9@0": "free",
        "10,3,9@0": "free",
        "10,3,13@0": "free",
        "15,3,13@0": "free",
        "14,3,8@0": "free",
        "15,3,8@0": "free",
        "13,3,8@0": "free",
        "13,3,6@0": "free",
        "13,3,7@0": "free",
        "14,3,7@0": "free",
        "14,3,6@0": "free",
        "15,3,6@0": "free",
        "15,3,7@0": "free",
        "11,3,8@0": "free",
        "12,3,8@0": "free",
        "12,3,7@0": "free",
        "16,3,7@0": "free",
        "16,3,8@0": "free",
        "16,3,6@0": "free",
        "16,3,4@0": "free",
        "16,3,5@0": "free",
        "15,3,5@0": "free",
        "15,3,4@0": "free",
        "14,3,4@0": "free",
        "14,3,5@0": "free",
        "13,3,5@0": "free",
        "12,3,5@0": "free",
        "12,3,6@0": "free",
        "10,3,6@0": "free",
        "10,3,7@0": "free",
        "11,3,7@0": "free",
        "10,3,8@0": "free",
        "9,3,8@0": "free",
        "9,3,9@0": "free",
        "8,3,9@0": "free",
        "8,3,8@0": "free",
        "9,3,7@0": "free",
        "9,3,5@0": "slab-bottom",
        "11,3,5@0": "free",
        "10,3,5@0": "free",
        "8,3,11@0": "free",
        "5,3,11@0": "piston-a",
        "6,3,11@0": "free",
        "6,3,13@0": "free",
        "7,3,13@0": "free",
        "8,3,13@0": "free",
        "9,3,13@0": "free",
        "5,3,13@0": "free",
        "5,3,12@0": "free",
        "4,3,12@0": "free",
        "4,3,13@0": "free",
        "4,3,11@0": "free",
        "4,3,9@0": "free",
        "4,3,10@0": "free",
        "2,3,10@0": "free",
        "3,3,10@0": "free",
        "3,3,11@0": "free",
        "3,3,12@0": "free",
        "2,3,13@0": "free",
        "3,3,13@0": "free",
        "2,3,12@0": "free",
        "2,3,11@0": "free",
        "1,3,11@0": "free",
        "1,3,12@0": "free",
        "0,3,12@0": "free",
        "0,3,11@0": "free",
        "0,3,10@0": "free",
        "1,3,10@0": "free",
        "1,3,8@0": "free",
        "1,3,9@0": "free",
        "3,3,9@0": "free",
        "2,3,9@0": "free",
        "0,3,8@0": "free",
        "0,3,9@0": "free",
        "0,3,7@0": "free",
        "1,3,7@0": "free",
        "2,3,8@0": "free",
        "3,3,8@0": "free",
        "3,3,7@0": "free",
        "2,3,7@0": "free",
        "2,3,5@0": "free",
        "2,3,6@0": "free",
        "1,3,6@0": "free",
        "0,3,6@0": "free",
        "1,3,5@0": "free",
        "0,3,5@0": "free",
        "0,3,4@0": "free",
        "1,3,4@0": "free",
        "3,3,4@0": "free",
        "2,3,4@0": "free",
        "2,3,2@0": "free",
        "2,3,3@0": "free",
        "1,3,3@0": "free",
        "0,3,3@0": "free",
        "1,3,2@0": "free",
        "0,3,2@0": "free",
        "0,3,1@0": "free",
        "1,3,1@0": "free",
        "3,3,1@0": "free",
        "2,3,1@0": "free",
        "3,3,2@0": "free",
        "3,3,3@0": "free",
        "4,3,3@0": "free",
        "4,3,4@0": "free",
        "3,3,5@0": "slab-bottom",
        "4,3,2@0": "free",
        "6,3,2@0": "free",
        "5,3,2@0": "free",
        "5,3,3@0": "slab-bottom",
        "5,3,0@0": "free",
        "5,3,1@0": "free",
        "4,3,1@0": "free",
        "4,3,0@0": "free",
        "3,3,0@0": "free",
        "2,3,0@0": "free",
        "1,3,0@0": "free",
        "6,3,1@0": "free",
        "6,3,0@0": "free",
        "7,3,0@0": "free",
        "7,3,1@0": "free",
        "7,3,3@0": "slab-bottom",
        "7,3,2@0": "free",
        "9,3,2@0": "free",
        "8,3,2@0": "free",
        "8,3,1@0": "free",
        "8,3,0@0": "free",
        "9,3,1@0": "free",
        "9,3,0@0": "free",
        "10,3,0@0": "free",
        "10,3,1@0": "free",
        "10,3,3@0": "free",
        "10,3,2@0": "free",
        "9,3,3@0": "free",
        "12,3,2@0": "free",
        "11,3,2@0": "free",
        "11,3,1@0": "free",
        "11,3,0@0": "free",
        "12,3,1@0": "free",
        "12,3,0@0": "free",
        "13,3,0@0": "free",
        "13,3,1@0": "free",
        "13,3,3@0": "free",
        "13,3,2@0": "free",
        "12,3,3@0": "free",
        "11,3,3@0": "free",
        "15,3,1@0": "free",
        "14,3,1@0": "free",
        "14,3,0@0": "free",
        "15,3,0@0": "free",
        "16,3,0@0": "free",
        "16,3,1@0": "free",
        "16,3,2@0": "free",
        "16,3,3@0": "free",
        "15,3,3@0": "free",
        "14,3,3@0": "free",
        "14,3,2@0": "free",
        "15,3,2@0": "free",
        "13,3,4@0": "free",
        "12,3,4@0": "free",
        "11,3,4@0": "free",
        "10,3,4@0": "free",
        "9,3,4@0": "free",
        "8,3,3@0": "free",
        "8,3,4@0": "free",
        "1,3,13@0": "free",
        "0,3,13@0": "free",
        "0,3,0@0": "free",
        "6,3,3@0": "fluid",
        "0,4,0@0": "free",
        "0,5,0@0": "free",
        "4,4,3@0": "free",
        "5,4,3@0": "free",
        "5,7,3@0": "free",
        "4,5,3@0": "free",
        "4,7,3@0": "free",
        "7,4,2@0": "free",
        "6,7,2@0": "free",
        "7,5,2@0": "free",
        "7,6,2@0": "free",
        "7,7,2@0": "free",
        "8,4,3@0": "free",
        "8,7,4@0": "free",
        "8,5,3@0": "free",
        "8,7,3@0": "free",
        "9,4,4@0": "free",
        "9,5,4@0": "free",
        "9,7,4@0": "free",
        "10,4,5@0": "free",
        "10,7,6@0": "free",
        "10,5,5@0": "free",
        "10,6,5@0": "free",
        "10,7,5@0": "free",
        "2,7,6@0": "free",
        "2,5,7@0": "free",
        "2,6,7@0": "free",
        "2,7,7@0": "free",
        "3,4,8@0": "free",
        "4,7,8@0": "free",
        "3,5,8@0": "free",
        "3,7,8@0": "free",
        "3,4,4@0": "free",
        "3,4,5@0": "free",
        "3,7,5@0": "free",
        "3,5,4@0": "free",
        "3,7,4@0": "free",
        "4,7,9@0": "free",
        "8,4,9@0": "free",
        "7,7,9@0": "free",
        "8,7,9@0": "free",
        "7,4,8@0": "free",
        "7,5,8@0": "free",
        "9,4,8@0": "free",
        "9,7,7@0": "free",
        "9,5,8@0": "free",
        "9,7,8@0": "free",
        "4,4,7@0": "free",
        "4,5,7@0": "free",
        "4,7,7@0": "free",
        "6,7,10@0": "free",
        "5,5,10@0": "free",
        "5,6,10@0": "free",
        "5,7,10@0": "free",
        "6,7,9@0": "free",
        "8,5,8@0": "fluid",
        "3,5,7@0": "fluid",
        "9,5,5@0": "fluid",
        "4,5,4@0": "fluid",
        "7,5,3@0": "fluid",
        "5,8,7@0": "free",
        "6,8,7@0": "free",
        "7,8,7@0": "free",
        "7,8,6@0": "free",
        "7,8,5@0": "free",
        "5,8,6@0": "free",
        "4,8,6@0": "free",
        "5,8,5@0": "free",
        "6,8,5@0": "free",
        "6,8,6@0": "trapdoor-side",
        "5,9,5@0": "free",
        "6,9,7@0": "free",
        "7,9,6@0": "free",
        "8,9,6@0": "slab-top",
        "4,9,5@0": "free",
        "4,9,6@0": "observer-b",
        "5,9,6@0": "observer-b",
        "6,10,7@0": "slab-bottom",
        "4,10,5@0": "free",
        "7,10,7@0": "slab-bottom",
        "5,10,7@0": "slab-bottom",
        "6,10,5@0": "floor",
        "5,10,5@0": "floor",
        "5,10,6@0": "observer-b",
        "4,11,5@0": "floor",
        "6,10,6@0": "free",
        "5,11,6@0": "observer-b",
        "5,11,7@0": "slab-top",
        "4,11,7@0": "piston-a",
        "4,11,8@0": "slab-top",
        "4,11,6@0": "observer-b",
        "5,11,5@0": "observer-b",
        "7,10,5@0": "free",
        "6,11,6@0": "free",
        "7,11,6@0": "observer-b",
        "4,12,6@0": "free",
        "6,11,5@0": "trapdoor-side",
        "6,12,6@0": "slab-bottom",
        "6,11,8@0": "slab-top",
        "6,12,7@0": "free",
        "5,12,7@0": "diode",
        "5,11,9@0": "slab-top",
        "6,12,9@0": "free",
        "6,12,8@0": "diode",
        "4,12,9@0": "free",
        "5,12,9@0": "diode",
        "4,12,8@0": "diode",
        "8,10,6@0": "piston-a",
        "4,12,10@0": "switch-wall",
        "4,13,7@0": "free",
        "4,11,9@0": "switch-ceiling",
        "15,0,13@0": "free",
        "16,0,13@0": "free",
        "15,1,8@0": "free",
        "13,1,9@0": "free",
        "14,1,9@0": "free",
        "15,1,9@0": "free",
        "16,1,9@0": "free",
        "16,1,10@0": "free",
        "16,1,11@0": "free",
        "16,1,12@0": "free",
        "6,1,13@0": "free",
        "7,1,13@0": "free",
        "8,1,13@0": "free",
        "9,1,13@0": "free",
        "10,1,13@0": "free",
        "11,1,13@0": "free",
        "12,1,13@0": "free",
        "13,1,13@0": "free",
        "14,1,13@0": "free",
        "15,1,13@0": "free",
        "6,2,1@0": "free",
        "7,2,1@0": "free",
        "8,2,1@0": "free",
        "6,2,2@0": "free",
        "7,2,2@0": "free",
        "8,2,2@0": "free",
        "9,2,2@0": "free",
        "10,2,2@0": "free",
        "11,2,2@0": "free",
        "4,2,3@0": "free",
        "5,2,3@0": "free",
        "6,2,3@0": "free",
        "7,2,3@0": "free",
        "8,2,3@0": "free",
        "9,2,3@0": "free",
        "10,2,3@0": "free",
        "11,2,3@0": "free",
        "3,2,4@0": "free",
        "4,2,4@0": "free",
        "5,2,4@0": "free",
        "6,2,4@0": "free",
        "7,2,4@0": "free",
        "8,2,4@0": "free",
        "9,2,4@0": "free",
        "10,2,4@0": "free",
        "11,2,4@0": "free",
        "0,2,5@0": "free",
        "7,2,5@0": "free",
        "8,2,5@0": "free",
        "9,2,5@0": "free",
        "10,2,5@0": "free",
        "11,2,5@0": "free",
        "0,2,6@0": "free",
        "2,2,6@0": "free",
        "9,2,6@0": "free",
        "10,2,6@0": "free",
        "11,2,6@0": "free",
        "9,2,7@0": "free",
        "10,2,7@0": "free",
        "11,2,7@0": "free",
        "7,2,9@0": "free",
        "8,2,9@0": "free",
        "9,2,9@0": "free",
        "10,2,9@0": "free",
        "11,2,9@0": "free",
        "7,2,11@0": "free",
        "8,2,11@0": "free",
        "5,2,12@0": "free",
        "5,2,13@0": "free",
        "6,2,13@0": "free",
        "7,2,13@0": "free",
        "4,3,8@0": "free",
        "5,3,9@0": "free",
        "7,3,9@0": "free",
        "5,3,10@0": "free",
        "7,3,10@0": "free",
        "7,3,11@0": "free",
        "6,4,2@0": "free",
        "6,4,3@0": "free",
        "5,4,4@0": "free",
        "7,4,4@0": "free",
        "8,4,4@0": "free",
        "4,4,5@0": "free",
        "8,4,5@0": "free",
        "2,4,6@0": "free",
        "3,4,6@0": "free",
        "6,4,6@0": "free",
        "9,4,6@0": "free",
        "10,4,6@0": "free",
        "2,4,7@0": "free",
        "8,4,7@0": "free",
        "9,4,7@0": "free",
        "4,4,8@0": "free",
        "5,4,8@0": "free",
        "4,4,9@0": "free",
        "6,4,9@0": "free",
        "7,4,9@0": "free",
        "5,4,10@0": "free",
        "6,4,10@0": "free",
        "5,4,11@0": "wall-attach",
        "6,5,2@0": "free",
        "5,5,3@0": "free",
        "6,5,3@0": "free",
        "5,5,4@0": "free",
        "7,5,4@0": "free",
        "8,5,4@0": "free",
        "3,5,5@0": "free",
        "4,5,5@0": "free",
        "8,5,5@0": "free",
        "2,5,6@0": "free",
        "3,5,6@0": "free",
        "9,5,6@0": "free",
        "10,5,6@0": "free",
        "8,5,7@0": "free",
        "9,5,7@0": "free",
        "4,5,8@0": "free",
        "5,5,8@0": "free",
        "4,5,9@0": "free",
        "6,5,9@0": "free",
        "7,5,9@0": "free",
        "8,5,9@0": "free",
        "6,5,10@0": "free",
        "5,5,11@0": "wall-attach",
        "0,6,0@0": "free",
        "6,6,2@0": "free",
        "5,6,3@0": "free",
        "8,6,4@0": "free",
        "3,6,5@0": "free",
        "2,6,6@0": "free",
        "10,6,6@0": "free",
        "9,6,7@0": "free",
        "4,6,8@0": "free",
        "7,6,9@0": "free",
        "6,6,10@0": "free",
        "5,6,11@0": "wall-attach",
        "0,7,0@0": "free",
        "6,7,3@0": "free",
        "5,7,4@0": "free",
        "7,7,4@0": "free",
        "4,7,5@0": "free",
        "8,7,5@0": "free",
        "3,7,6@0": "free",
        "9,7,6@0": "free",
        "8,7,7@0": "free",
        "5,7,8@0": "free",
        "7,7,8@0": "free",
        "5,7,11@0": "wall-attach",
        "0,8,0@0": "free",
        "0,9,0@0": "free",
        "0,10,0@0": "free",
        "0,11,0@0": "free",
        "0,12,0@0": "free",
        "0,13,0@0": "free"
      },
      "provenFluids": [
        "6,3,3@0",
        "7,3,3@0",
        "9,3,5@0",
        "5,3,3@0",
        "3,3,5@0",
        "5,5,3@0",
        "5,6,3@0",
        "5,7,3@0",
        "5,4,3@0",
        "6,4,2@0",
        "6,5,2@0",
        "6,6,2@0",
        "6,7,2@0",
        "8,4,4@0",
        "8,5,4@0",
        "8,6,4@0",
        "8,7,4@0",
        "10,4,6@0",
        "10,5,6@0",
        "10,6,6@0",
        "10,7,6@0",
        "2,4,6@0",
        "2,5,6@0",
        "2,6,6@0",
        "2,7,6@0",
        "4,4,8@0",
        "4,5,8@0",
        "4,6,8@0",
        "4,7,8@0",
        "3,5,5@0",
        "3,6,5@0",
        "3,7,5@0",
        "3,4,5@0",
        "7,4,9@0",
        "7,5,9@0",
        "7,6,9@0",
        "7,7,9@0",
        "9,4,7@0",
        "9,5,7@0",
        "9,6,7@0",
        "9,7,7@0",
        "6,4,6@0",
        "6,7,10@0",
        "6,6,10@0",
        "6,5,10@0",
        "6,4,10@0",
        "8,5,8@0",
        "3,5,7@0",
        "9,5,5@0",
        "4,5,4@0",
        "7,5,3@0",
        "5,8,7@0",
        "6,8,7@0",
        "7,8,7@0",
        "7,8,6@0",
        "7,8,5@0",
        "5,8,6@0",
        "4,8,6@0",
        "5,8,5@0",
        "6,9,6@0",
        "5,5,9@0",
        "6,8,6@0",
        "6,2,10@0",
        "7,7,3@0",
        "4,7,4@0",
        "9,7,5@0",
        "3,7,7@0",
        "8,7,8@0",
        "5,7,9@0"
      ],
      "hardBlocks": {},
      "supportNeeded": {
        "6,9,5@0": [
          [
            0,
            -4,
            -1
          ]
        ],
        "6,11,8@0": [
          [
            0,
            0,
            -1
          ]
        ],
        "5,11,9@0": [
          [
            1,
            0,
            0
          ],
          [
            2,
            0,
            0
          ],
          [
            2,
            0,
            -1
          ]
        ],
        "8,10,6@0": [
          [
            1,
            0,
            0
          ]
        ]
      }
    }
  }
}
