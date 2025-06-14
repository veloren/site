{#-
  The purpose of this shortcode is to facilitate referencing issues
  and merge requests from our GitLab organization.

  :param array[str] ids: A list of GitLab references.
  A reference is an ID number preceded either by "#" for issues
  or by "!" for merge requests.

  :param str project: The project within our GitLab organization whose
  issues and/or merge requests are being referenced.
  The default value is the main repository ("veloren/veloren").
-#}
{%- for id in ids -%}
  {%- if loop.index0 > 0 -%}{{ " + " }}{%- endif -%}

  {#- In this block we process issues from GitLab. -#}
  {%- if id is starting_with("#") -%}
    [{% if project %}{{ project }}{% endif %}{{ id }}](https://gitlab.com/veloren/{% if project%}{{ project }}{% else %}veloren{% endif %}/-/issues/{{ id | trim_start_matches(pat="#")}})
    {%- continue -%}
  {%- endif -%}

  {#- In this block we process merge requests from GitLab. -#}
  {%- if id is starting_with("!") -%}
    [{% if project %}{{ project }}{% endif %}{{ id }}](https://gitlab.com/veloren/{% if project%}{{ project }}{% else %}veloren{% endif %}/-/merge_requests/{{ id | trim_start_matches(pat="!")}})
    {%- continue -%}
  {%- endif -%}

{%- endfor -%}
