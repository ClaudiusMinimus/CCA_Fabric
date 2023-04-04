// priority: 0
ServerEvents.recipes(event => {

    event.recipes.botania.petal_apothecary("minecraft:seagrass",
        ["minecraft:grass", "botania:water_bowl"]);

    event.recipes.botania.petal_apothecary("minecraft:sea_pickle",
        ["minecraft:seagrass", "minecraft:torch"]);

    event.recipes.botania.petal_apothecary("minecraft:dead_brain_coral",
        ["minecraft:seagrass", "minecraft:bone", "minecraft:bone", "minecraft:rotten_flesh"]);

    event.recipes.botania.petal_apothecary("minecraft:dead_bubble_coral",
        ["minecraft:seagrass", "minecraft:bone", "minecraft:bone", "minecraft:glass_bottle"]);

    event.recipes.botania.petal_apothecary("minecraft:dead_fire_coral",
        ["minecraft:seagrass", "minecraft:bone", "minecraft:bone", "minecraft:magma_block"]);

    event.recipes.botania.petal_apothecary("minecraft:dead_horn_coral",
        ["minecraft:seagrass", "minecraft:bone", "minecraft:bone", "botania:cosmetic_unicorn_horn"]);

    event.recipes.botania.petal_apothecary("minecraft:dead_tube_coral",
        ["minecraft:seagrass", "minecraft:bone", "minecraft:bone", "minecraft:bamboo"]);

    event.recipes.botania.elven_trade(
        ["minecraft:brain_coral"], "minecraft:dead_brain_coral");

    event.recipes.botania.elven_trade(
        ["minecraft:bubble_coral"], "minecraft:dead_bubble_coral");

    event.recipes.botania.elven_trade(
        ["minecraft:fire_coral"], "minecraft:dead_fire_coral");

    event.recipes.botania.elven_trade(
        ["minecraft:horn_coral"], "minecraft:dead_horn_coral");

    event.recipes.botania.elven_trade(
        ["minecraft:tube_coral"], "minecraft:dead_tube_coral");


})
