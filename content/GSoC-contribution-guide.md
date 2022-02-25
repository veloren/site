+++
title = "GSoC 2022 Contribution Guide"
description = "How to apply to contribute to Veloren"

date = 2022-02-21
weight = 0
slug = "GSoC-contribution-guide"

[extra]
banner = "https://media.discordapp.net/attachments/634860358623821835/906695229028065290/screenshot_1636240466943.png"

[taxonomies]
tags = ["devblog"]
+++

## Applying for GSoC

Welcome! The application process consists of the following steps

- First of all, [Read up on the Veloren
  book](https://book.veloren.net/introduction/index.html) to understand the
  basics of what the project is about, how to compile and much more.
- Play! You can [download the game here](https://veloren.net/download/), and
  then either [create an account](https://veloren.net/account/) or try out
  single player.
- [Join us on social media platforms](https://veloren.net/joinus) to get in
  contact with developers and better understand the different areas of the
  codebase, known as Working Groups.
- Begin thinking about improvements you'd like to see, or areas you'd like to
  focus on. Reach out with questions!
- Submit the application/proposal including all requirements at the Google
  Summer of Code Site.
  
## Ideas for GSoC Contributions

We're welcome to any ideas you can come up with for contibuting to Veloren, and we've compiled a few examples.

- Refactoring the AI system for robustness and ease of use. (175 hours) (medium)

Re-organization of the agent system will allow for continued expansion to include new desired features (group-based combat mechanics, more environmental awareness, daily simulated activity).

Desired skills: Some basic behavior tree knowledge

Mentors: James, Sam
- Integrating the wiring system in procedurally generated structures allowing for increased player interaction. (350 hours) (hard)

The wiring system is turing-complete and allows electricity-like mechanics to be added into the game. One desired feature is to introduce this sytem into procedural structures such as dungeons to allow for opening of doors with switches and similar features.

Desired skills: Strong mathematical logic capability

Mentors: James
- Implement a site governance AI that can grow a site over time based on economic factors. (350 hours) (medium)

Sites such as towns currently contain knowledge of the land around them to determine available resources, economic prosperity, potential to trade, etc. It is desired for these sites to be able to develop over time based on incoming and outgoing resources, using the flow of material to determine population change and overall development of the site.

Desired skills: Modelling or economic background

Mentors: zesterer, Christof
- Combat expansion, developing new ability sets and attacks. (175 hours) (easy)

Many existing entities in the game have very basic or placeholder combat ability sets. Expansion of these ability sets will be critical to create a varied, diverse experience in different sections of the game.

Desired skills: General programming, game design

Mentors: Sam, James
- Interactive vehicles, expanding on ships and airships to allow player use. (175 hours) (medium)

Currently ships and airships exist in a fairly simple state, and expansion of the feature is necessary to properly engage players with the feature. The ability to mount and control these ships will require improvements in pathfinding, physics, and simulated interaction with towns.

Desired skills: Physics knowledge, general programming

Mentors: zesterer, James
- Transitioning network to QUIC. (350 hours) (hard)

QUIC is a general-purpose nework protocol which is partially implemented in Veloren, however, not fully active. Further implementation of the protocol is desired and will be used to improve player latency, creating a better experience.

Desired skills: Network experience

Mentors: xMax94x
- Create diagnostics for tracking bandwidth contribution of each type of message with counts, uncompressed size, and estimated compressed size. (175 hours) (easy)

Improving these metrics will give us more insight into network performance and where bottlenecks are located, helping us better allocate time when determining future improvements. 

Desired skills: General programming, network experience

Mentors: imbris, xMac94x
- Expand authorization system with password reset, email tracking, a friends list, etc. (350 hours) (medium)

Improving this system will require prgramming experience to work on the veloren authorization code and also some background into the security requirements related to storage of data, such as e-mail addresses, across the US, EU and other places. 

Desired skills: Knowledge of standard practices for authorization

Mentors: zesterer, AngelOnFira
- Develop the plugin system to a maturity that allows for writing useful plugins. (350 hours) (hard)

The plugin system will allow the download and use of mods for players and servers, a strongly desired Veloren feature. Currently this system exists but is not robust enough to introduce to the playerbase. Continued expansion of the plugin system will greatly improve player experience.

Desired skills: ECS experience, WASM knowledge

Mentors: zesterer
- Implement server federation, allowing characters to transfer between servers in the same federation. (350 hours) (medium)

A server federation is a union of trusted servers, and allows the servers in the federation to operate knowing that the others can be trusted to hold characters which haven't been manipulated in any undesirable way (such as using commands to introduce items). 

Desired skills: Database experience, general programming

Mentors: xMac94x, zesterer, XVar
- UI refactor to continue the transition to new GUI backend. (175 hours) (medium)

Currently, the ICED and Conrod UI backends both exist in Veloren, it is desired to make a full transition of the UI to the newer, improved UI backend, ICED. As part of a visual UI overhaul as well, the transition will require both the ability to create new widgets and artistic insight.

Desired skills: UI development experience

Mentors: imbris
- Implement UDP hole-punching on the auth server so that players can host games locally without needing to port-forward. (175 hours) (hard)

UDP hole-punching establishes bidirectional connection between hosts, allowing transfer of data between the hosts. The feature is desired in order to simplify the creation of private servers for players to make it easier to play the game with a group of friends.

Mentors: zesterer
- Improve controller support, adding a GUI for editing controller bindings. (175 hours) (easy)

Controller support exists in a simple form, but additional features are desired such as improving the editing of controller bindings, the ability to use the UI with a controller, etc.

Desired skills: General programming

Mentors: imbris
