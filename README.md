# Background Image Changer

[日本語](README.ja.md)

An extension for [Fixit Editor](https://fixit-editor.lapius7.com/) that puts an image of your choice behind the editor. From the settings screen you can change the image, its opacity, blur, and how it fits.

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

Use Fixit 1.3.0 or later. Open "Extensions", choose "Install from folder", and select this folder. It is installed as an unverified extension, so check the requested permission and allow it.

## Permissions

Only `ui` (changing how the screen looks). It does not use the network or read or write files. Fixit manages the image itself, and this extension never reads the image.

## License

[MIT](LICENSE)
