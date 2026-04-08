---
title: "DaVinci Resolve Install Error on Ubuntu 24.04: A Working Fix"
excerpt: "How I got DaVinci Resolve running on Ubuntu 24.04 after the installer failed on package checks and the app crashed on launch."
publishDate: "2026-04-09"
isFeatured: false
tags:
  - Ubuntu
  - Linux
  - DaVinci Resolve
  - Troubleshooting
seo:
  title: "DaVinci Resolve Install Error on Ubuntu 24.04: A Working Fix"
  description: "A simple fix for DaVinci Resolve install errors on Ubuntu 24.04 using SKIP_PACKAGE_CHECK, Jammy libraries, LD_LIBRARY_PATH, and a permanent library copy."
  pageType: article
---
Installing DaVinci Resolve on Ubuntu 24.04 was not as straightforward as I expected. The installer opened, complained about missing or outdated packages, and refused to continue. Even after getting past that stage, Resolve still would not launch cleanly because of library conflicts.

So this was not a normal one-command install. It turned into a bit of trial and error, but the process was still manageable once I understood what was actually failing.

![Ubuntu 24.04 desktop screenshot](https://upload.wikimedia.org/wikipedia/commons/6/6a/Ubuntu_24.04_Noble_Numbat_Desktop_English.png)

*Ubuntu 24.04 "Noble Numbat" desktop. Image source: Wikimedia Commons.*

<!-- Add screenshot here: Initial installer error dialog on Ubuntu 24.04 -->

The first failure showed up during installation itself. DaVinci Resolve complained that some packages were missing or outdated. The names it checked for included `libapr1`, `libaprutil1`, `libasound2`, and `libglib2.0-0`.

The confusing part was that Ubuntu 24.04 was not exactly "missing" everything. The bigger problem was that Resolve was checking for an older dependency layout, while Ubuntu 24.04 has newer packages and slightly different naming in some places. So the installer treated that mismatch as a hard failure.

Instead of double-clicking the installer, I extracted it manually into a temporary directory and ran it from the terminal. That made it much easier to see what was going wrong.

```bash
mkdir /tmp/dr
cd /tmp/dr
unzip ~/Downloads/DaVinci_Resolve_Studio_19.0b3_Linux.zip
```

After that, I bypassed the package validation step completely:

```bash
SKIP_PACKAGE_CHECK=1 ./DaVinci_Resolve_Studio_19.0b3_Linux.run
```

That got the installer moving, but it did not fully solve the problem. Resolve installed, but it still failed when I tried to open it.

## Why It Still Failed After Installing

The next problem was library compatibility. Resolve on Linux seems much happier with some older Ubuntu 22.04 Jammy libraries than with the newer ones on Ubuntu 24.04. So even though the install finished, the app itself still hit symbol and shared-library issues on launch.

That is where the workaround started.

I went to:

`https://packages.ubuntu.com`

Then I searched for the libraries Resolve needed, including:

- `libpango`
- `libpangocairo`
- `libpangoft2`
- `libgdk-pixbuf`

<!-- Add screenshot here: Ubuntu Packages search page -->
<!-- Add screenshot here: Selecting Jammy package version -->
<!-- Add screenshot here: amd64 download page with mirrors.kernel.org/ubuntu -->

For each one, I selected the Jammy version and downloaded the `amd64` `.deb` file. On the download page, I clicked the `amd64` link and then selected `mirrors.kernel.org/ubuntu` to download it.

I did not install those old packages directly on Ubuntu 24.04. That felt like a good way to create new problems. Instead, I only extracted the files from the `.deb` packages.

```bash
dpkg-deb -x <downloaded_package_name>.deb /tmp/dr/files
```

For example:

```bash
dpkg-deb -x libpango-1.0-0_1.50.6+ds-2_amd64.deb /tmp/dr/files
```

This extracts the shared libraries into a safe temporary folder without touching the system package installation.

## Testing with `LD_LIBRARY_PATH`

Once the libraries were extracted, I tested Resolve by pointing it at that directory:

```bash
LD_LIBRARY_PATH=/tmp/dr/files/usr/lib/x86_64-linux-gnu /opt/resolve/bin/resolve
```

This was the trial-and-error part. I would run the command, see the next missing library or symbol issue, go back to `packages.ubuntu.com`, grab the matching Jammy package, extract it, and test again.

After repeating that a few times, Resolve finally opened properly.

## Making the Fix Permanent

Once I confirmed the extracted libraries were working, I copied them into Resolve's own library directory so I would not need to keep launching it with `LD_LIBRARY_PATH`.

```bash
sudo cp /tmp/dr/files/usr/lib/x86_64-linux-gnu/lib* /opt/resolve/libs/
```

After that, Resolve started normally from the application menu.

That was the main fix: skip the package check, pull the Jammy versions of the missing libraries, extract them safely, test using `LD_LIBRARY_PATH`, and finally copy the working libraries into `/opt/resolve/libs`.

## Miscellaneous Fixes

There were also a couple of smaller things after the main install was done.

One was the app icon. In the dock and sidebar, DaVinci Resolve initially showed up with a generic settings-style icon instead of the proper Resolve logo.

<!-- Add screenshot here: wrong Resolve icon in dock/sidebar -->

I fixed that by editing the desktop entry:

```bash
sudo nano /usr/share/applications/com.blackmagicdesign.resolve.desktop
```

Then I added this line at the end:

```bash
StartupWMClass=resolve
```

After saving and exiting, I refreshed the desktop database:

```bash
update-desktop-database
```

I do not fully remember whether I changed anything else in that file, but adding `StartupWMClass=resolve` was the main thing that fixed the icon issue for me.

The other small annoyance was that Resolve added a bunch of extra launchers to the app menu. Things like the RAW player, RAW speed test, panel tools, installer shortcut, and a few others showed up even though I did not really need them.

<!-- Add screenshot here: extra bundled DaVinci Resolve launchers in app menu -->

I just removed those `.desktop` files to keep the application list cleaner:

```bash
sudo rm /usr/share/applications/com.blackmagicdesign.rawplayer.desktop
sudo rm /usr/share/applications/com.blackmagicdesign.rawspeedtest.desktop
sudo rm /usr/share/applications/com.blackmagicdesign.resolve-CaptureLogs.desktop
sudo rm /usr/share/applications/com.blackmagicdesign.resolve-Panels.desktop
sudo rm /usr/share/applications/com.blackmagicdesign.resolve-Installer.desktop
```

I mainly did that just to reduce clutter. I have not personally seen any issue from removing those launchers, but I have not tested every bundled tool either.

So that was the full install path for me on Ubuntu 24.04. Not exactly clean, but definitely workable.
