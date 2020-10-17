# Firefox UI Hacks

* reduce tabs to single favicon (remove labels and close icons)
* gray-out unloaded tabs
* reduce spacing around toolbar buttons
* reduce spacing between elements on about:config
* less blurry images on 4k screen
* increase search box size
* less ui animations
* hide flow-breaking spacer on the menubar
* make "flexible space" from customize menu to fill entire space

# Move tabs toolbar below bookmarks toolbar

## 78 ESR, Gentoo

```sh
sudo mkdir -p /etc/portage/patches/www-client/firefox
sudo cp tabs.patch /etc/portage/patches/www-client/firefox
emerge -1 firefox
```
