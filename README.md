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
