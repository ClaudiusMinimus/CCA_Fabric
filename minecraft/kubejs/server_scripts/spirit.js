ServerEvents.recipes((event) => {
  event.custom({
    type: "spirit:soul_transmutation",
    entityInput: "minecraft:zombie",
    activationItem: {
      item: "minecraft:golden_apple",
    },
    consumesActivator: true,
    itemInputs: [
      { item: "minecraft:diamond_block" },
      { item: "minecraft:grindstone" },
      { item: "minecraft:smoker" },
      { item: "minecraft:blast_furnace" },
      { item: "minecraft:emerald_block" },
      { item: "minecraft:lectern" },
      { item: "minecraft:fletching_table" },
      { item: "minecraft:smithing_table" },
    ],
    entityOutput: "minecraft:villager",
    duration: 60,
    shouldSummonMob: true,
  });

  /* 
event.custom(

    { "type": "spirit:soul_engulfing",
        "input": { "ingredient": 
            {"item": "minecraft:egg"},
        "multiblock": {     "pattern": [
            [
                "   ",
                " @ ",
                "   "
            ],
            [
                "PSP",
                "SXS",
                "PSP"
            ]
            ],
            "keys": {     
            "S": { "block": "minecraft:red_mushroom_block" },
            "X": { "block": "minecraft:soul_sand" },
            "P": { "block": "spirit:compressed_soul_powder_block" }
        }
        }},
        "duration": 60,
        "outputItem": "minecraft:mooshroom_spawn_egg"
    })
 */
});
