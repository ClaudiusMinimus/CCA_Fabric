// priority: 0

// For examples, see: https://www.curseforge.com/minecraft/mc-mods/kubejs-botania

ServerEvents.recipes(event => {

    // Petal Apothecary Recipes
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

    // Elven Trades Recipes
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

    // Orechid Recipes
    event.recipes.botania.orechid("mythicmetals:unobtainium_ore", "minecraft:stone", 500);
    
    event.recipes.botania.orechid("mythicmetals:adamantite_ore", "minecraft:stone", 900);
    
    event.recipes.botania.orechid("mythicmetals:platinum_ore", "minecraft:stone", 901);
    
    event.recipes.botania.orechid("mythicmetals:starrite_ore", "minecraft:stone", 1400);
    
    event.recipes.botania.orechid("mythicmetals:mythril_ore", "minecraft:stone", 1800);
    
    event.recipes.botania.orechid("mythicmetals:orichalcum_ore", "minecraft:stone", 2200);
    
    event.recipes.botania.orechid("mythicmetals:prometheum_ore", "minecraft:stone", 2300);
    
    event.recipes.botania.orechid("mythicmetals:palladium_ore", "minecraft:stone", 2400);
    
    event.recipes.botania.orechid("mythicmetals:silver_ore", "minecraft:stone", 2500);
    
    event.recipes.botania.orechid("mythicmetals:carmot_ore", "minecraft:stone", 3101);
    
    event.recipes.botania.orechid("mythicmetals:quadrillum_ore", "minecraft:stone", 3200);
    
    event.recipes.botania.orechid("mythicmetals:manganese_ore", "minecraft:stone", 3500);
    
    event.recipes.botania.orechid("mythicmetals:kyber_ore", "minecraft:stone", 3501);
    
    event.recipes.botania.orechid("mythicmetals:aquarium_ore", "minecraft:stone", 3700);
    
    event.recipes.botania.orechid("mythicmetals:osmium_ore", "minecraft:stone", 4000);
    
    event.recipes.botania.orechid("mythicmetals:runite_ore", "minecraft:stone", 4001);
    
    event.recipes.botania.orechid("mythicmetals:banglum_ore", "minecraft:stone", 4002);
    
    event.recipes.botania.orechid("mythicmetals:tin_ore", "minecraft:stone", 6000);
    
})
