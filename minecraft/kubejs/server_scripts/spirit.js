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
      { item: "minecraft:hay_block" },
      { item: "farmersdelight:carrot_crate" },
      { item: "farmersdelight:potato_crate" },
      { item: "minecraft:emerald_block" },
      { item: "farmersdelight:tomato_crate" },
      { item: "farmersdelight:cabbage_crate" },
      { item: "farmersdelight:rice_bale" },
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
