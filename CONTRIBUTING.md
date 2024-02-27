<!--
SPDX-FileCopyrightText: 2020 Christian Authmann <https://gitlab.com/cauthmann>
SPDX-FileCopyrightText: 2020 Marcel Märtens
SPDX-FileCopyrightText: 2023 Crabman
SPDX-FileCopyrightText: 2023 - 2024 Javier Pérez

SPDX-License-Identifier: Apache-2.0
-->

# Welcome to the website contribution guide

Please, follow the styling rules when contributing to this repository:

[Styling guidelines](STYLING.md)

Similarly, remember to record the licensing and copyright information
on those files you create and modify. For more information:

<https://reuse.software/spec/>

**Important note**:

The `reuse annotate` CLI tool adds headers to the
top of files. Markdown files inside `content` have a TOML front-matter.
If the very first line of these files is a REUSE header and not the
front-matter (i.e. "+++"), Zola will fail to build the site. Consider
creating separate `*.license` files in such cases.

## Set up a local web server

The Veloren website uses [Zola](https://www.getzola.org/), a static site generator, to handle its internal structure and provide the website content. It is imperative to get Zola working locally on your device so that you can preview your blog posts and other changes before they are published to the public.

For instructions on how to install Zola on your environment, refer to:

<https://www.getzola.org/documentation/getting-started/installation/>

Once Zola is installed, you can run a local web server with the `zola serve` or the `zola serve --open` statement in the command line of your operating system. For instance, on Linux you can run it with:

```bash
git clone https://gitlab.com/veloren/site.git
cd ./site
zola serve
```

The web server will run at [127.0.0.1:1111](http://127.0.0.1:1111) by default. Most changes you do to the website code and content while it is running will be reflected in real-time.

For more information about the CLI usage, refer to:

<https://www.getzola.org/documentation/getting-started/cli-usage/>

## Contributing to the development blog

This example demonstrates the structure of a development blog post (using [2019-11-18-devblog-42.md](https://gitlab.com/veloren/site/-/blob/master/content/blog/2019-11-18-devblog-42.md) as a reference).

All the user-facing web content is located inside the `content` folder. Blog posts reside within the `blog` subdirectory.

### About the Discord CDN

In 2023, Discord changed the way links to files hosted in their CDN works.
The links are now unreliable because they expire automatically.

It affects these domain names:

- media.discordapp.net
- cdn.discordapp.com

**If you want to use content posted on Discord, please,
do not use links to the Discord CDN. Instead, copy the files here and use the
following REUSE format**:

```txt
SPDX-FileCopyrightText: <year> <author>
SPDX-License-Identifier: LicenseRef-DiscordTOS-2023-03-27
```

For instance, if someone posts a picture in Discord, and their Discord username:
is "johnDoe":

```txt
SPDX-FileCopyrightText: 2024 johnDoe (Discord)
SPDX-License-Identifier: LicenseRef-DiscordTOS-2023-03-27
```

Additionally, authors of files posted on Discord are free to commit their files here and
use a different author name and license.

Note:

The `static/discord-cdn` directory has the files that used to be retrieved
on the blog from the Discord CDN. We now host this content elsewhere.

That directory mirrors the format of Discord CDN URLs:
`discord-cdn/<channel_id>/<attachment_id?>/<filename>`

It is unclear whether or not that is the attachment ID or, rather,
a different kind of value.

### Document filename

The filename of blog posts is comprised of two major parts, separated by a hyphen ('-' character):

- The publication date of the post, written in the "&lt;year&gt;-&lt;month&gt;-&lt;day&gt;" format, also known as the "YYYY-MM-DD" format.
  - In this example: **2019-11-18**.
- The slug, that is, the name to be used in the URL.
  - In this example: **devblog-42**.

Note: If possible, try to make sure the date in the filename is the date a post is first published (made available) to the public, rather than the date you began writing the post. You can always modify the filename once you have finished writing the blog post.

The blog content is written in [CommonMark](https://commonmark.org/), so you must use the '.md' file extension.

The resultant URL of this example is:

<https://veloren.net/blog/devblog-42>

### Document content

The [blog post template](/other-assets/templates/devblog-template.md) has the barebones structure to start writing a blog post.

Lines enclosed by '+++' are the [TOML front matter](https://www.getzola.org/documentation/content/page/#front-matter), that is, the document metadata. Comments have been added to this example, but they should not be present in the final version of blog posts.

```toml
+++
title = "This Week In Veloren 42"
description = "Clouds, CI, and Game Design WG"

# The last updated date of the post, if different from the publication date.
# The publication date is contained in the filename.
# Use the YYYY-MM-DD format.
updated = 2023-09-10

# Use aliases if you are moving content but want to redirect previous URLs to the
# current one. This takes an array of paths, not URLs.
# This variable should not be used for new blog posts.
aliases = ["devblog-42"]

# A list of page authors. If a site feed is enabled, the first author (if any)
# will be used as the page's author in the default feed template.
authors = ["AngelOnFira"]

# The taxonomies for this page. The keys need to be the same as the taxonomy
# names configured in `config.toml` and the values are an array of String objects. For example,
# tags = ["rust", "web"].
[taxonomies]
tags = ["devblog"]

# Your own data.
[extra]
banner = "https://s3.eu-central-2.wasabisys.com/veloren-blog-images/cdn/634860358623821835/645962072143691786/screenshot_1574079543108.png"
+++

Blog content goes here! It must be compliant with the CommonMark specification.
```

### Common tasks

#### Images

Add an image:

`{{ img(src="https://.../foo.png") }}`

Add an image with alternative text. It is useful for accessibility (for example, used by screen readers):

`{{ img(src="https://.../foo.png", alt="Foo") }}`

Add an image with a caption:

`{{ img(src="https://.../foo.png", alt="Foo", caption="This is a nice foo image contributed by @foo!") }}`

#### Videos

Add an MP4 video:

`{{ video(src="https://.../foo.mp4") }}`

Add an MP4 video with a caption:

`{{ video(src="https://.../foo.mp4", caption="This is a nice video") }}`

Add other types of video files, like OGV files:

`{{ video(src="https://.../foo.ogv", type="video/ogg") }}`

Add an OGV video with a caption:

`{{ video(src="https://.../foo.ogv", type="video/ogg", caption="An ogg vorbis video") }}`

Add a YouTube video:

`{{ youtube(id="dQw4w9WgXcQ") }}`

Add a YouTube video with a caption:

`{{ youtube(id="dQw4w9WgXcQ", caption="Best song ever.") }}`

Add a Streamable video:

`{{ streamable(id="ir2yly") }}`

Add a Streamable video with a caption:

`{{ streamable(id="ir2yly", caption="Demo of playable guitar instrument") }}`

### Audio

Add an OGG audio file:

`{{ audio(src="https://.../foo.ogg") }}`

Add an OGG audio file with a caption:

`{{ audio(src="https://.../foo.ogg", caption="Nice music") }}`
