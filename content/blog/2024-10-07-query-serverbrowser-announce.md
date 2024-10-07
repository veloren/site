+++
title = "Preparing to release server queries in Airshipper"
description = "Read this if you own a server on the serverbrowser list!"
aliases = ["query-server-preparations"]
authors = ["Crab"]

[taxonomies]
tags = ["devblog"]

[extra]
# TODO: Uploadto wasabi
banner = "https://media.discordapp.net/attachments/523568428905398283/1290005225486291125/image.png?ex=6704c5bc&is=6703743c&hm=a44d22f9bac71563f6f058a3fd210152ba422d16336e6e3c86f71feea33be14b&=&format=webp&quality=lossless&width=2234&height=1252"
+++

**Read this if you own a server on the servebrowser list!**

Player counts have been a long-requested feature for the server browser in Airshipper, and we're finally close to releasing them!

The query server, which allows for clients to query status information about a server, was already merged 5 months ago. Soon, Airshipper will also make use of it do display more accurate ping information, player counts, version information and the global battlemode.

{{img(src="https://media.discordapp.net/attachments/1292537005133271135/1292581401845039125/image.png?ex=670441bd&is=6702f03d&hm=38e4619a33ac230df426cb2e2fce4f1a252902af391ccb21de79cd451e3a945d&=&format=webp&quality=lossless&width=1824&height=1252", caption="Player counts, server version and battlemode displayed for the servers which already have queries enabled")}}

## Important info for server owners

While this feature is enabled by default for new servers, it requires a bit of manual work for existing servers.

If you own a server on the serverbrowser list, please read the following issue on gitlab for more information: <https://gitlab.com/veloren/serverbrowser/-/issues/103>

You will find a short guide explaining how to enable the query server, please add your comment once it is enabled!

----

\- Crab.
