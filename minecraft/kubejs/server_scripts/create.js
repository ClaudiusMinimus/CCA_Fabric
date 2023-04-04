// priority: 0
ServerEvents.recipes(event => {

    event.recipes.createMixing(
        "minecraft:brain_coral_block",
        [
            "minecraft:brain_coral",
            "minecraft:orange_concrete_powder",
            {
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ]);

    event.recipes.createMixing(
        "minecraft:bubble_coral_block",
        [
            "minecraft:bubble_coral",
            "minecraft:blue_concrete_powder",
            {
                "amount": 1000,
                "fluid": "minecraft:water"
            }

        ]);

    event.recipes.createMixing(
        "minecraft:fire_coral_block",
        [
            "minecraft:fire_coral",
            "minecraft:red_concrete_powder",
            {
                "amount": 1000,
                "fluid": "minecraft:water"
            }

        ]);

    event.recipes.createMixing(
        "minecraft:horn_coral_block",
        [
            "minecraft:horn_coral",
            "minecraft:cyan_concrete_powder",
            {
                "amount": 1000,
                "fluid": "minecraft:water"
            }

        ]);

    event.recipes.createMixing(
        "minecraft:tube_coral_block",
        [
            "minecraft:tube_coral",
            "minecraft:brown_concrete_powder",
            {
                "amount": 1000,
                "fluid": "minecraft:water"
            }

        ]);

})
