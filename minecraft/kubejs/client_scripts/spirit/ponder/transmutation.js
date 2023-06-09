// declare function for transmutation of zombie to villager
const displaySoulPedestalFromBlocksScene = (params) => (scene, util) => {

  // identifies position of every block in schematic
  const soul_pedestal = util.grid.at(3, 1, 3);
  const pedestal_1 = util.grid.at(3, 1, 6);
  const pedestal_2 = util.grid.at(1, 1, 5);
  const pedestal_3 = util.grid.at(0, 1, 3);
  const pedestal_4 = util.grid.at(1, 1, 1);
  const pedestal_5 = util.grid.at(3, 1, 0);
  const pedestal_6 = util.grid.at(5, 1, 1);
  const pedestal_7 = util.grid.at(6, 1, 3);
  const pedestal_8 = util.grid.at(5, 1, 5);

  // shows the checkerboard base
  scene.showBasePlate();
  scene.idle(20); // measured in ticks

  // display soul pedestal
  scene.world.showSection(soul_pedestal, Facing.DOWN);
  scene.idle(10);

  // display popup by soul pedestal & set keyframe
  scene
    .text(
      70,
      "Place the Soul Pedestal and then place 8 Pedestals as shown.",
      soul_pedestal
    )
    .placeNearTarget()
    .attachKeyFrame();
  scene.idle(40);

  // display pedestals
  scene.world.showSection(pedestal_1, Facing.DOWN);
  scene.world.showSection(pedestal_2, Facing.DOWN);
  scene.world.showSection(pedestal_3, Facing.DOWN);
  scene.world.showSection(pedestal_4, Facing.DOWN);
  scene.world.showSection(pedestal_5, Facing.DOWN);
  scene.world.showSection(pedestal_6, Facing.DOWN);
  scene.world.showSection(pedestal_7, Facing.DOWN);
  scene.world.showSection(pedestal_8, Facing.DOWN);
  scene.idle(50);

  // display popup by pedestal_4 & set keyframe
  scene
    .text(
      70,
      "Place your offerings on the Pedestals surrounding the Soul Pedestal - in any order.",
      pedestal_4
    )
    .placeNearTarget()
    .attachKeyFrame();
  scene.idle(30);

  // Javascript is a dynamically typed language while Java is a
  // strong typed language. The datatypes both languages provide
  // don't match.
  // sets javascript $ByteTag from Java
  const $ByteTag = Java.loadClass("net.minecraft.nbt.ByteTag");
  // Returns current value of $ByteTag as byte value.
  const byteTag = $ByteTag.ONE.getAsByte();

  // Placing offerings on pedestals
  scene.world.modifyTileNBT(pedestal_1, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:diamond_block" };
  });
  scene.idle(10);
  scene.world.modifyTileNBT(pedestal_2, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:grindstone" };
  });
  scene.idle(10);
  scene.world.modifyTileNBT(pedestal_3, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:smoker" };
  });
  scene.idle(10);
  scene.world.modifyTileNBT(pedestal_4, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:blast_furnace" };
  });
  scene.idle(10);
  scene.world.modifyTileNBT(pedestal_5, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:emerald_block" };
  });
  scene.idle(10);
  scene.world.modifyTileNBT(pedestal_6, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:lectern" };
  });
  scene.idle(10);
  scene.world.modifyTileNBT(pedestal_7, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:fletching_table" };
  });
  scene.idle(10);
  scene.world.modifyTileNBT(pedestal_8, (nbt) => {
    nbt.item = { Count: byteTag, id: "minecraft:smithing_table" };
  });
  scene.idle(10);

  // display popup at custom location above soul pedestal & set keyframe
  scene
    .text(
      70,
      "Place your filled Soul Crystal on the Soul Pedestal.",
      [2.5, 2.5, 2.5]
    )
    .placeNearTarget()
    .attachKeyFrame();

  // show mouse right click with soul crystal
  scene
    .showControls(60, [3.25, 2.5, 3], "down")
    .rightClick()
    .withItem("spirit:soul_crystal");
  scene.idle(90);

  // places a zombie soul on the soul pedestal
  scene.world.modifyTileNBT(soul_pedestal, (nbt) => {
    nbt.BurnTime = 1;
    nbt.Soul = "minecraft:zombie";
  });

  // show mouse right click
  scene.showControls(60, [3.25, 2.5, 3], "down").rightClick();

  // display popup at custom location above soul pedestal & set keyframe
  scene
    .text(
      60,
      "Right click the Soul Pedestal with an empty hand to activate.",
      [2.5, 2.5, 2.5]
    )
    .placeNearTarget()
    .attachKeyFrame();
  scene.idle(70);

  // remove offerings from pedestals
  scene.world.modifyTileNBT(pedestal_1, (nbt) => {
    nbt.remove("item");
  });
  scene.world.modifyTileNBT(pedestal_2, (nbt) => {
    nbt.remove("item");
  });
  scene.world.modifyTileNBT(pedestal_3, (nbt) => {
    nbt.remove("item");
  });
  scene.world.modifyTileNBT(pedestal_4, (nbt) => {
    nbt.remove("item");
  });
  scene.world.modifyTileNBT(pedestal_5, (nbt) => {
    nbt.remove("item");
  });
  scene.world.modifyTileNBT(pedestal_6, (nbt) => {
    nbt.remove("item");
  });
  scene.world.modifyTileNBT(pedestal_7, (nbt) => {
    nbt.remove("item");
  });
  scene.world.modifyTileNBT(pedestal_8, (nbt) => {
    nbt.remove("item");
  });

  // remove the zombie soul from the soul pedestal
  scene.world.modifyTileNBT(soul_pedestal, (nbt) => {
    nbt.remove("Soul");
    nbt.BurnTime = 0;
  });

  // sets the soul pedestal again with some partical effects
  scene.world.setBlock(soul_pedestal, "spirit:soul_pedestal", true);
  scene.idle(5);

  // display popup at custom location above soul pedestal & set keyframe
  scene
    .text(70, "A Villager is Spawned!", [2.5, 3.5, 2.5])
    .placeNearTarget()
    .attachKeyFrame();

  // display a villager at the location on top of the soul pedestal
  scene.world.createEntity("villager", [3.25, 2, 3]);
};

// for 1.18 use: onEvent("ponder.registry")
// call function for transmutation of zombie to villager
Ponder.registry((event) => {
  event
    .create("spirit:soul_pedestal") // full block id
    .scene(
      "soul_pedestal_scene", // unique scene identifier
      "Let's Spawn a Villager!", // scene title
      "spirit:transmutation", // namespace and path to nbt file inside ponder folder
      displaySoulPedestalFromBlocksScene({ blockId: "spirit:soul_pedestal" })
    );
});
