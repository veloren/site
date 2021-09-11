+++
title = "Veloren 0.11 Release"
description = "Veloren 0.11 Release"

date = 2021-09-11
weight = 0
slug = "release-0-11"

[extra]
banner = "https://media.discordapp.net/attachments/885518024516452362/886071387113009224/veloren-0-11.jpg"

[taxonomies]
tags = ["devblog"]
+++

# 0.11 Release

Today, Veloren is releasing 0.11. This version is 3 months in the making, and we
have a lot to show off!

If you're reading this before [18:00 GMT today (September
11th)](https://everytimezone.com/s/cefd9f4d), make sure to join the release
party. To join, you can download the game for free at
[veloren.net](https://veloren.net/download) and [create an
account](https://veloren.net/account/), then launch the game and hop on the
default server. See you there!

{{
  img(src="https://media.discordapp.net/attachments/634860358623821835/879194912749400094/screenshot_1629679274776.png",
  size=80)
}}

## Changelog

Below are some of the key items from the release. You can check out the full
changelog
[here](https://gitlab.com/veloren/veloren/-/blob/e4716147a7356eb13088e7d74ace3ccdcb5cd900/CHANGELOG.md#0110-2021-09-11).
A large emphasis in this version was making combat more dynamic all around the
world. This comes in the form of the new spot system, as well as how NPCs and
mobs can interact with the world. Read on to see what else is new!

#### Added

- Added a skill tree for mining, which gains xp from mining ores and gems.
- HUD debug info now displays current biome and site
- Pets are now saved on logout 🐕 🦎 🐼
- NPCs can now warn players before engaging in combat
- Add server setting with PvE/PvP switch
- Experimental terrain persistence
- The 'spot' system, which generates smaller site-like structures and scenarios
- Chestnut and cedar tree varieties
- Shooting sprites, such as apples and hives, can knock them out of trees
- Cultist raiders
- Bloom Slider

#### Changed

- Harvester boss now has new abilities and AI
- Death particles and SFX
- Trades now consider if items can stack in full inventories.
- The radius of the safe zone around the starting town has been doubled

#### Fixed

- Crafting Stations aren't exploadable anymore
- Significantly improved the performance of playing sound effects
- Campfires now despawn when underwater
- Map will now zoom around the cursor's position and drag correctly
- No more jittering while running down slopes with the glider out
- Camera is now clipping a lot less

{{
  img(src="https://media.discordapp.net/attachments/634860358623821835/884138091537907793/screenshot_1630865233900.png")
}}

## Updates from developers

Now, let's hear from some of the developers about this version.

### @zesterer, Worldgen Lead and Core Developer

I'm most excited about 0.11 because it finally starts to tie together some of
the grander themes and plans that we've always had for the game: a sense of
freedom, adventure, and place within a dynamic, open world without scripted
events or hard-coded locations.

You can see this vision beginning to materialise all across the game: the
increasingly mature crafting system, world generation, real-time simulation such
as cultist raids, etc. I'm sure that 0.12 will bring more of this vision in
abundance.

{{
  img(src="https://media.discordapp.net/attachments/634860358623821835/885141629902684180/bg_12.jpg")
}}

### @Slipped, Animation Lead and Core Developer

I think what I'm looking forward to most this version is for the world to feel
more alive. We've added a ton of small-scale sites to the overworld where NPCs
live and interact with the simulation. You can find occupied igloos, hideouts,
and burrows.

With new pickup animations and collectibles, the player is encouraged to take
their time in the world and interact with it, or try to pass through stealthily.
On a grand scale, the world has looked great for a while but we're starting to
bring real excitement to it at small scales too, by allowing the player to make
new discoveries all the time while exploring

{{
  img(src="https://media.discordapp.net/attachments/634860358623821835/884297602462539876/screenshot_1630903166427.png")
}}

### @Sam, Combat Lead and Core Developer

What I like most about this version is that players must think more about what
they need to do. Previously, players really only would rush the bosses in
dungeons with maybe the occasional foray into a cave, and would "loot vacuum"
everything that could be picked up that they encountered. Now players often
delay going to the boss to first loot chests in the dungeons, or they may
dedicate an expedition to harvesting flax for a set of linen armor instead of
spamming the collect key as they passed by a field of flax.

There are also now cultist raiders to provide a challenge on the surface, which
will hopefully pave the way for more real-time simulation surface encounters
where players can watch their actions have a meaningful effect on the world.

{{
  img(src="")
}}

### @Snowram, Assets & Aesthetics Lead

This release is a big step toward a dynamic world. With the inclusion of several
new locations and some promising real-time simulation usage, this is the start
of something big. I'm also very excited about the recent development of site
which will eventually allow us to simply add more complex procedurally generated
structure in the game.

About myself, I have been away for quite a bit of time which made me miss the
deadline for a new arthropod skeleton and its big batch of new species, so keep
an eye for them in the next version!

{{
  img(src="https://media.discordapp.net/attachments/634860358623821835/885141632519905330/bg_10.jpg")
}}

### @Aweinstock, General Developer

I ported dungeons from sampling to CSG (site2) between 0.10 and 0.11. This
allowed adding details (like the septagonal stars and the pillar bases) more
easily, and also sped up dungeon generation since the system no longer has to
sample every block in the chunk, only blocks inside dungeon rooms. Keep an eye
out for these new detail in the release!

{{
  video(src="https://cdn.discordapp.com/attachments/634860358623821835/875904635741806604/simplescreenrecorder-2021-08-13_17.51.44.mp4")
}}

## Support the Project

As always, feel free to support the project on Open Collective. It allows us to
keep our servers running, and launch great release parties like the one today!

[Veloren Open Collective](https://opencollective.com/veloren)
