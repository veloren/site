+++
title = "Preparing to release server queries in Airshipper"
description = "Read this if you own a server on the serverbrowser list!"
aliases = ["query-server-preparations"]
authors = ["Crab"]

[taxonomies]
tags = ["devblog"]

[extra]
banner = "https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/query-server-post/crab.webp"
+++

**Read this if you own a server on the servebrowser list!**

Player counts have been a long-requested feature for the server browser in Airshipper, and we're finally close to releasing them!

The query server, which allows for clients to query status information about a server, was already merged 5 months ago. Soon, Airshipper will also make use of it do display more accurate ping information, player counts, version information and the global battlemode.

{{img(src="https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/query-server-post/airshipper_screenshot.webp", caption="Player counts, server version and battlemode displayed for the servers which already have queries enabled")}}

## Important info for server owners

While this feature is enabled by default for new servers, it requires a bit of manual work for existing servers.

If you own a server on the serverbrowser list, please read the following issue on gitlab for more information: <https://gitlab.com/veloren/serverbrowser/-/issues/103>

You will find a short guide explaining how to enable the query server, please add your comment once it is enabled!

----

\- Crab.
