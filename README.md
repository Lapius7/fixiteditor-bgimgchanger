<div align="center">

<p align="center"><b>English</b> | <a href="README.ja.md">日本語</a></p>

<h1 align="center">Background Image Changer</h1>

<h3 align="center">Put an image of your choice behind Fixit Editor.</h3>

<p align="center">An extension for <a href="https://fixit-editor.lapius7.com/">Fixit Editor</a>. From the settings screen you can change the image, its opacity, blur, and how it fits.</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/github/license/Lapius7/fixiteditor-bgimgchanger?style=flat-square&color=97ca00"></a>
  <a href="https://fixit-editor.lapius7.com/"><img alt="Fixit Editor extension" src="https://img.shields.io/badge/Fixit%20Editor-extension-0078d4?style=flat-square"></a>
  <a href="https://github.com/Lapius7/fixiteditor-bgimgchanger/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/Lapius7/fixiteditor-bgimgchanger?style=flat-square&color=e3b341&logo=github"></a>
  <a href="https://github.com/Lapius7/fixiteditor-bgimgchanger/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/Lapius7/fixiteditor-bgimgchanger?style=flat-square&color=3b82f6"></a>
</p>

<p align="center">
  <a href="#settings">Settings</a> · <a href="#install">Install</a> · <a href="#permissions">Permissions</a>
</p>

</div>

---

Extension id: `lapius7.bgimgchanger` · [Extension page](https://fixit-editor.lapius7.com/en/extensions/lapius7.bgimgchanger)

## Settings

| Setting | Description |
|---|---|
| Show background image | Turn the image on or off |
| Background image | png / jpeg / webp / gif / avif, up to 12 MB. "Remove" clears the image |
| Opacity | 0.05 to 1 |
| Blur | 0 to 30 |
| Fit | Cover / Contain / Original size, centered / Tile |

The command palette also has a "Toggle background image" command.

## Install

It is published on the official [extension page](https://fixit-editor.lapius7.com/en/extensions/lapius7.bgimgchanger) (verified). On Fixit 1.3.1 or later, install it either way:

- In Fixit's "Extensions" screen, search for "bgimgchanger" under "Browse" and press "Install"
- Press "Open in Fixit" on the extension page above (Fixit 1.4.0 or later)

Check the requested permission and allow it before installing.

### Try the development version

To try what is in this repository, paste `https://github.com/Lapius7/fixiteditor-bgimgchanger` into the search box of Fixit's "Extensions" screen (Fixit 1.4.0 or later) and press "Fetch". It is treated as unverified, with no review or signature.

## Permissions

Only `ui` (changing how the screen looks). It does not use the network or read or write files. Fixit manages the image itself, and this extension never reads the image.

## License

[MIT](LICENSE)
