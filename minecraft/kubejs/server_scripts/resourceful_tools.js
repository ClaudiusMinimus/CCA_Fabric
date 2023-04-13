// priority: 0

ServerEvents.recipes((event) => {
  // Cook 1 Resourceful Tools Tin Powder into 1 Tin Ingot
  event.smelting("mythicmetals:tin_ingot", "resourceful_tools:powder_tin");
});
