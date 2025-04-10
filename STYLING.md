<!--
SPDX-FileCopyrightText: 2023 Javier Pérez

SPDX-License-Identifier: Apache-2.0
-->

# Styling guidelines

## Baseline

The repository follows these basic rules:

- Indentation type: space.
- Indentation size: 2.
- File encoding: UTF-8.

## Recommended extensions

If you are working on this repository with Visual Studio Code or VSCodium,
you will get these extensions recommended automatically:

- EditorConfig (<https://editorconfig.org/>).
  - It will enforce the rules mentioned above. Some text editors and IDEs have native support for this tool. It helps maintain consistency across the codebase.
- markdownlint (<https://github.com/DavidAnson/markdownlint>).
  - This extension helps maintain consistency when writing Markdown/CommonMark files.
- GitLab Workflow (<https://gitlab.com/gitlab-org/gitlab-vscode-extension>)
  - Standard extension to integrate with GitLab.

Configuration files are provided in the repository to get most of these extensions configured out-of-the-box.

We also suggest you use any utility to spell check your code and blog content, such as the [Spell Right extension](https://github.com/bartosz-antosik/vscode-spellright) for Visual Studio Code.

If you are using a different text editor or IDE, alternative extensions, add-ons or plugins might be available to you with similar functionality.

### Markdownlint

Certain rules have been changed as follows:

| Rule | Value | Notes |
| --- | --- | --- |
| `line-length` | `false` | The project has several lines which exceed this limit. |
| `no-duplicate-heading` | `siblings_only: true` | A certain blog post conflicts with this rule. |
| `no-trailing-punctuation` | `.,;:` | The rule is enabled. It is configured to allow the '!' character because it is used in a header in the home page. |
| `no-blanks-blockquote` | `false` | Some blog posts include consecutive user quotes, which conflicts with this rule. |
| `no-inline-html` | `false` | Some blog posts contain HTML code because CommonMark has certain limitations that HTML helps overcome. |
| `no-bare-urls` | `false` | URLs inside Zola shortcode calls get flagged by this rule. |
