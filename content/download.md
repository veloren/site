+++
title = "Download Veloren"
description = "Download the game for free!"
+++

## Airshipper, the official game launcher

![Airshipper](/airshipper.png)

Airshipper brings you the most optimal experience to download and keep the game up-to-date.
It is available for Windows, macOS and Linux.

### Minimum system requirements

- Operating system: Windows 10, Windows 11, macOS or Linux
- Processor: 64-bit CPU
- Memory: 4 GiB RAM
- Graphics: GPU with support for DirectX 12 or newer, Vulkan or Metal
- Storage: 2 GiB available space

### Windows 10 / Windows 11

- [Download Airshipper for Windows](https://gitlab.com/veloren/airshipper/-/jobs/artifacts/v0.14.0/download?job=windows-installer-x86_64)

Or install with cargo:

```powershell
cargo install airshipper
```

You can also install it with bundled `openssl-sys` by doing:

```powershell
cargo install airshipper --features bundled
```

### macOS

- [Download Airshipper for macOS (Intel x86_64 CPU)](https://gitlab.com/veloren/airshipper/-/jobs/artifacts/v0.14.0/download?job=macos-x86_64)
- [Download Airshipper for macOS (Apple M1 and M2 Arm CPU)](https://gitlab.com/veloren/airshipper/-/jobs/artifacts/v0.14.0/download?job=macos-aarch64)

Or install with cargo:

```bash
cargo install airshipper
```

### Linux

- [Download Airshipper for Linux](https://gitlab.com/veloren/airshipper/-/jobs/artifacts/v0.14.0/download?job=linux-x86_64)

Or install with cargo:

```bash
cargo install airshipper
```

### Unofficial download channels for Linux

[![Packaging status](https://repology.org/badge/vertical-allrepos/airshipper.svg?header=Airshipper%20packaging%20status&columns=3)](https://repology.org/project/airshipper/versions)

#### Flathub

The game launcher and the standalone version of the game are both available on Flathub.

**Airshipper** Flatpak:

```bash
flatpak install flathub net.veloren.airshipper
```

[![Download Airshipper on Flathub](https://flathub.org/api/badge?svg&locale=en)](https://flathub.org/apps/net.veloren.airshipper)

**Veloren** Flatpak:

```bash
flatpak install flathub net.veloren.veloren
```

[![Download Veloren on Flathub](https://flathub.org/api/badge?svg&locale=en)](https://flathub.org/apps/net.veloren.veloren)

#### Arch User Repository (AUR)

The game launcher and the standalone version of the game are both available in the AUR.

**Airshipper** package:

```bash
yay -Sy airshipper
```

**Veloren** package:

```bash
yay -Sy veloren
```

#### Copr for RPM-based distributions

```bash
sudo dnf copr enable frinksy/airshipper
sudo dnf install airshipper
```

More information and instructions for other RPM-based distributions
can be found on [the Copr page](https://copr.fedorainfracloud.org/coprs/frinksy/airshipper/).

[Older versions and other downloads](@/download-other.md)
