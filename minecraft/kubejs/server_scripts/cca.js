// priority: 0


ServerEvents.recipes(event => {

	// remove end portal frame recipe
	event.remove({ output: 'minecraft:end_portal_frame'});
	
	// Craft shaped end portal frame	
	event.shaped('minecraft:end_portal_frame', [
		'OEO'
	], {
		O: 'minecraft:obsidian',
		E: 'minecraft:end_crystal'
	})

	// craft deepslate
	event.shaped('4x minecraft:deepslate', [
		'TT',
		'TT'
	], {
		T: 'minecraft:tuff'
	})

	// craft hanging_roots
	event.shaped('minecraft:hanging_roots', [
		' S ',
		'S S'
	], {
		S: 'minecraft:stick'
	})

	//  - minecraft:sculk_catalyst craft (4 x sculk) + 1 diamond + (4 x quartz) = 1 x sculk_catalyst
	// Craft shaped sculk catalyst 	
	event.shaped('minecraft:sculk_catalyst', [
		'SQS',
		'QDQ',
		'SQS'
	], {
		S: 'minecraft:sculk',
		Q: 'minecraft:quartz',
		D: 'minecraft:diamond'
	})

	// Craft shaped rooted_dirt 	
	event.shaped('2x minecraft:rooted_dirt', [
		'HD',
		'DH'
	], {
		H: 'minecraft:hanging_roots',
		D: 'minecraft:dirt'
	})

	// Spawner recipe
	event.shaped('minecraft:spawner', [
		'BBB',
		'BSB',
		'BBB'
	], {
		B: 'createdeco:netherite_bars',
		S: 'minecraft:nether_star'
	})

	// Pillager spawn egg recipe
	event.shaped('minecraft:pillager_spawn_egg', [
		'W',
		'A'
	], {
		W: 'minecraft:witch_spawn_egg',
		A: 'minecraft:crossbow'
	})

	// Evoker spawn egg recipe
	event.shaped('minecraft:evoker_spawn_egg', [
		'W',
		'A'
	], {
		W: 'minecraft:pillager_spawn_egg',
		A: 'minecraft:iron_axe'
	})

});