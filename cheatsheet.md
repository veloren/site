+++
title = "This Week In Veloren 42"
description = ""

date = 2020-01-31
weight = 0
slug = "devblog-42"

[extra]
# uncomment one of these to replace this page's background image, either via an absolute url or a relative one
#background = "https://.../screenshot.png"
#background = "header.png"

[taxonomies]
tags = ["devblog"]
+++

Blog content goes here!

# Images

Add an image:

{{ img(src="https://.../foo.png") }}

With an alt text, for screen readers etc:

{{ img(src="https://.../foo.png", alt="Foo") }}

With a caption:

{{ img(src="https://.../foo.png", alt="Foo", caption="This is a nice foo image contributed by @foo!") }}


# Videos

mp4 video, direct download (e.g. a discord url):

{{ video(src="https://.../foo.mp4") }}

With a caption:

{{ video(src="https://.../foo.mp4", caption="This is a nice video") }}

Different video type:

{{ video(src="https://.../foo.ogv", type="video/ogg") }}
{{ video(src="https://.../foo.ogv", type="video/ogg", caption="An ogg vorbis video") }}

Youtube video:

{{ youtube(id="dQw4w9WgXcQ") }}

With caption:

{{ youtube(id="dQw4w9WgXcQ", caption="Best song ever.") }}


# Audio

ogg, direct download:

{{ audio(src="https://.../foo.ogg") }}

With a caption:

{{ audio(src="https://.../foo.ogg", caption="Nice music") }}

mp3, direct download:

{{ audio(src="https://.../foo.mp3", type="audio/mpeg3") }}
{{ audio(src="https://.../foo.mp3", type="audio/mpeg3", caption="Nice music") }}

