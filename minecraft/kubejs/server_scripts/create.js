// priority: 0
ServerEvents.recipes((event) => {
  event.recipes.createMixing("minecraft:brain_coral_block", [
    "minecraft:brain_coral",
    "minecraft:orange_concrete_powder",
    {
      amount: 1000,
      fluid: "minecraft:water",
    },
  ]);

  event.recipes.createMixing("minecraft:bubble_coral_block", [
    "minecraft:bubble_coral",
    "minecraft:blue_concrete_powder",
    {
      amount: 1000,
      fluid: "minecraft:water",
    },
  ]);

  event.recipes.createMixing("minecraft:fire_coral_block", [
    "minecraft:fire_coral",
    "minecraft:red_concrete_powder",
    {
      amount: 1000,
      fluid: "minecraft:water",
    },
  ]);

  event.recipes.createMixing("minecraft:horn_coral_block", [
    "minecraft:horn_coral",
    "minecraft:cyan_concrete_powder",
    {
      amount: 1000,
      fluid: "minecraft:water",
    },
  ]);

  event.recipes.createMixing("minecraft:tube_coral_block", [
    "minecraft:tube_coral",
    "minecraft:brown_concrete_powder",
    {
      amount: 1000,
      fluid: "minecraft:water",
    },
  ]);

  // Asurine recipes
  event.recipes
  .createMixing("3x create:asurine", [
      "create:zinc_ingot",
      "minecraft:stone","minecraft:stone","minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("3x create:asurine", [
        "create:raw_zinc",
        "minecraft:stone","minecraft:stone","minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("3x create:asurine", [
        "#c:crushed_zinc_ores",
        "minecraft:stone","minecraft:stone","minecraft:stone"
    ])
    .heated();  

  // Crimsite recipes
  event.recipes
  .createMixing("2x create:crimsite", [
      "minecraft:iron_ingot",
      "minecraft:stone","minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("2x create:crimsite", [
        "minecraft:raw_iron",
        "minecraft:stone","minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("2x create:crimsite", [
        "#c:crushed_iron_ores",
        "minecraft:stone","minecraft:stone"
    ])
    .heated();

    // Limestone recipe
    event.recipes
    .createMixing("create:limestone", [
        "minecraft:smooth_stone"
    ])
    .heated();   
    
    // Ochrum recipes
    event.recipes
    .createMixing("5x create:ochrum", [
        "minecraft:gold_ingot",
        "minecraft:stone","minecraft:stone","minecraft:stone","minecraft:stone","minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("5x create:ochrum", [
        "minecraft:raw_gold",
        "minecraft:stone","minecraft:stone","minecraft:stone","minecraft:stone","minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("5x create:ochrum", [
        "#c:crushed_gold_ores",
        "minecraft:stone","minecraft:stone","minecraft:stone","minecraft:stone","minecraft:stone"
    ])
    .heated();

    // Veridium recipes
    event.recipes
    .createMixing("create:veridium", [
        "minecraft:copper_ingot",
        "minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("create:veridium", [
        "minecraft:raw_copper",
        "minecraft:stone"
    ])
    .heated();
    event.recipes
    .createMixing("create:veridium", [
        "#c:crushed_copper_ores",
        "minecraft:stone"
    ])
    .heated();    
    //  use heated mixing .heated()
    //   'create:asurine', 30 3 zinc ingot + 9 stone = 9 asurine
    //   'create:crimsite', 40 2 iron ingot + 5 stone = 5 blocks crimsite
    //   'create:limestone', 1 smoothstone = 1 limestone
    //   'create:ochrum', 20 1 gold ingot + 5 stone = 5 ochrum
    //   'create:veridium' 80 1 copper nugget + 1 stone = 1 veridium
    
});

