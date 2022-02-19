+++
title = "Veloren 0.12 Release"
description = "Veloren 0.12 Release"

date = 2022-02-19
weight = 0
slug = "release-0-12"

[extra]
banner = "https://media.discordapp.net/attachments/541307708146581519/943900929210605568/bg_main.jpg"

[taxonomies]
tags = ["devblog"]
+++

# 0.12 Release

Today, Veloren is releasing 0.12. This version is 5 months in the making, and we
have a lot to show off!

If you're reading this before [18:00 GMT today (February
19th)](https://everytimezone.com/s/0b439554), make sure to join the release
party. To join, you can download the game for free at
[veloren.net](https://veloren.net/download) and [create an
account](https://veloren.net/account/), then launch the game and hop on the
default server. See you there!

We have also made a trailer for 0.12, so be sure to check it out!

{{ youtube(id="604JC5QdYQE") }}

## Changelog

Below are some of the key items from the release. You can check out the full
changelog
[here](https://gitlab.com/veloren/veloren/-/blob/master/CHANGELOG.md#0120-2022-02-19).

### Added

- Added a crafting station icon to the crafting menu sidebar for items that
  could be crafted at a crafting station
- Added a credits screen in the main menu which shows attributions for assets
- Shrubs, a system for spawning smaller tree-like plants into the world.
- Waterfalls
- Sailing boat (currently requires spawning in)
- Sneaking with weapons drawn
- Stealth stat values on (some) armors
- All new dismantling interface found at your nearest dismantling staion
- Wearable headgear, including hood, crown, bandanas
- Bomb sprites (can be exploded with arrows or other explosions)
- Campfire waypoints in towns
- New outfit for merchants
- Rivers now make ambient sounds (again)
- Players can now mount and ride pets
- Experimental shaders, that can be enabled in Voxygen's settings (see the book
  for more information)
- Keybinding customization to set waypoint on Map
- Added arthropods
- A 'point light glow' effect, making lanterns and other point lights more
  visually pronounced
- Convert giant trees to site2
- Add new upgraded travelers
- Wallrunning

### Changed

- Made dungeon tiers 3, 4, and 5 more common
- The Interact button can be used on campfires to sit
- Made map icons fade out when near the edge of the map display
- Agents using fireball projectiles aim at the feet instead of the eyes
- Explosions can now have a nonzero minimum falloff
- EXP on kill is now shared based on damage contribution
- Dungeons have somewhat proper scaling. The higher the dungeon the harder it
  gets, Cultist staying unchanged while Mino is now at its level.
- Yeti loot table modified
- Green/Red lantern now shine their respective color instead of the default
  lantern color
- Poise damage dealt to a target that is in a stunned state is now converted to
  health damage at an efficiency dependent on the severity of the stunned state
- Made the hotbar link to items by item definition id and component composition
  instead of specific inventory slots.
- Made loot boxes drop items instead of doing nothing in order to loot forcing
- Changed the way light strength is rendered by moving processing from shader
  code (GPU) to CPU code
- Made /home command a mod+ exclusive
- Friendly creatures will now defend each other
- Creatures will now defend their pets

### Fixed

- The menu map now properly handles dragging the map, zooming, and setting the
  waypoint when hovering icons
- Falling through an airship in flight should no longer be possible (although
  many issues with airship physics remain)
- Avoided black hexagons when bloom is enabled by suppressing NaN/Inf pixels
  during the first bloom blur pass
- Many known water generation problems
- Trading over long distances using ghost characters or client-side exploits is
  no longer possible
- Merchant cost percentages displayed as floored, whole numbers
- Bodies of water no longer contain black chunks on the voxel minimap.
- Agents can flee once again, and more appropriately
- Items in hotbar no longer change when sorting inventory
- Lantern color changes when swapping lanterns
- NPCs no longer wander off cliffs
- Guards will defend villagers instead of simply threatening the attacker
- Seafaring ships no longer spawn on dry land


{{
  img(src="https://media.discordapp.net/attachments/634860358623821835/925629196074647562/Screenshot_from_2021-12-29_02-18-21.png")
}}

## Support the Project

As always, feel free to support the project on Open Collective. It allows us to
keep our servers running, and launch great release parties like the one today!

[Veloren Open Collective](https://opencollective.com/veloren)
