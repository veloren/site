+++
title = "Download Veloren"
description = "Download Veloren"

weight = 0
+++

## Minimum requirements

- GPU with either Vulkan, Metal, or DirectX 11.2+ support
- 4GB RAM
- multi-core CPU
- 2GB of free disk space

For Windows 7 systems with an Nvidia GPU,
we recommend installing an Nvidia driver version 465 or newer.

## Airshipper, the official Veloren launcher

Airshipper is a cross-platform Veloren launcher taking care of keeping Veloren up to date.
Currently due to our very frequent update schedule we recommend using it for optimal experience.

* [Airshipper (Windows)](https://github.com/songtronix/airshipper/releases/latest/download/airshipper-windows.msi)
* [Airshipper (macOS)](https://github.com/songtronix/airshipper/releases/latest/download/airshipper-macos.tar.gz)
* [Airshipper (Linux)](https://github.com/songtronix/airshipper/releases/latest/download/airshipper-linux.tar.gz)

### Airshipper Linux packages

#### Flathub

<a style="background:none" href="https://flathub.org/apps/details/net.veloren.airshipper">
  <img width="200" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-en.png"/>
</a>

```
flatpak install flathub net.veloren.airshipper
```

#### PPA for Ubuntu-based distributions (unofficial)

```
sudo add-apt-repository ppa:frinksy/airshipper
sudo apt-get update
sudo apt install airshipper
```

More information can be found on [the PPA's page](https://launchpad.net/~frinksy/+archive/ubuntu/airshipper).


#### Arch User Repository

The launcher and the game are both available in the AUR.

* [Airshipper (AUR)](https://aur.archlinux.org/packages/airshipper/)
* [Veloren (AUR)](https://aur.archlinux.org/packages/veloren/)

#### Copr for RPM-based distribitions (unofficial)

Fedora
```
sudo dnf copr enable frinksy/airshipper
sudo dnf install airshipper
```

* More information and instructions for other RPM-based distributions
  can be found on [the Copr page](https://copr.fedorainfracloud.org/coprs/frinksy/airshipper/).

#### Snap

`sudo snap install veloren --edge`

<br>

[Older versions and other downloads](@/download-other.md)
