// priority: 0

console.info("Remove recipes");

ServerEvents.recipes( event => {

	// event.remove({ output: 'mythicmetals:adamantite_ingot'})
	// event.remove({mod: 'mythicmetals'});
	// event.remove({mod: 'alloy_forgery'});
	
	// Remove the following recipes
	const REMOVED_ITEMS = ["kibe:basalt_generator_mk1","kibe:basalt_generator_mk2","kibe:basalt_generator_mk3","kibe:basalt_generator_mk4","kibe:basalt_generator_mk5","kibe:black_elevator","kibe:black_rune","kibe:blue_elevator","kibe:blue_rune","kibe:breaker","kibe:brown_elevator","kibe:brown_rune","kibe:chunk_loader","kibe:cobblestone_generator_mk1","kibe:cobblestone_generator_mk2","kibe:cobblestone_generator_mk3","kibe:cobblestone_generator_mk4","kibe:cobblestone_generator_mk5","kibe:cyan_elevator","kibe:cyan_rune","kibe:dehumidifier","kibe:dehumidifier","kibe:diamond_spikes","kibe:drawbridge","kibe:entangled_bag","kibe:entangled_bucket","kibe:entangled_chest","kibe:entangled_tank","kibe:express_conveyor_belt","kibe:fast_conveyor_belt","kibe:flowing_liquid_xp","kibe:fluid_hopper","kibe:gold_spikes","kibe:gray_elevator","kibe:gray_rune","kibe:green_elevator","kibe:green_rune","kibe:heater","kibe:heater","kibe:igniter","kibe:iron_spikes","kibe:kibe","kibe:light_blue_elevator","kibe:light_blue_rune","kibe:light_gray_elevator","kibe:light_gray_rune","kibe:light_ring","kibe:lime_elevator","kibe:lime_rune","kibe:liquid_xp_bucket","kibe:liquid_xp","kibe:magenta_elevator","kibe:magenta_rune","kibe:orange_elevator","kibe:orange_rune","kibe:pink_elevator","kibe:pink_rune","kibe:placer","kibe:purple_elevator","kibe:purple_rune","kibe:red_elevator","kibe:red_rune","kibe:redstone_timer","kibe:regular_conveyor_belt","kibe:stone_spikes","kibe:tank","kibe:vacuum_hopper","kibe:void_bucket","kibe:water_ring","kibe:water_wooden_bucket","kibe:white_elevator","kibe:white_rune","kibe:wither_builder","kibe:wooden_bucket","kibe:xp_drain","kibe:xp_shower","kibe:yellow_elevator","kibe:yellow_rune","emerald_tools:wooden_treeaxe","emerald_tools:wooden_excavator","emerald_tools:wooden_paxel","emerald_tools:wooden_hammer","createaddition:zinc_sheet"];
	
	REMOVED_ITEMS.forEach(id => event.remove({ output: id }));

	// grindstone recipe
	event.shaped('minecraft:grindstone', [
		' S ',
		'PSP',
		'PSP'
	  ], {
		S: 'minecraft:smooth_stone',
		P: '#minecraft:planks'
	  });

		//   'create:asurine', 30 3 zinc ingot + 9 stone = 9 asurine
		//   'create:crimsite', 40 2 iron ingot + 5 stone = 5 blocks crimsite
		//   'create:limestone', 1 smoothstone = 1 limestone
		//   'create:ochrum', 20 1 gold ingot + 5 stone = 5 ochrum
		//   'create:veridium' 80 1 copper nugget + 1 stone = 1 veridium
		
	
});

console.info("Remove reciped");

// Listen to item tag event
ServerEvents.tags('item', event => {
	/* https://wiki.latvian.dev/books/kubejs/page/tags */
	// consolidate zinc plate tags - also removed 'createaddition:zinc_sheet' above and in REI
	event.add('c:plates', '#c:zinc_plates');
	event.add('c:plates/zinc', '#c:zinc_plates');
  });

