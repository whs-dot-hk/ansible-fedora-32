## Install tabbed

```
$ git clone https://git.suckless.org/tabbed
$ cd tabbed
$ sudo dnf install libXft-devel -y
$ sudo make clean install
```

### Run alacritty

```
$ tabbed alacritty --embed
```

## Install vapor

```
$ sudo dnf install swift-lang -y
$ git clone https://github.com/vapor/toolbox.git
$ cd toolbox
$ touch Tests/LinuxMain.swift
$ swift build -c release --disable-sandbox
$ sudo cp .build/release/vapor /usr/local/bin
```
