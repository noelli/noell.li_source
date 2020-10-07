---
layout: project
title: NGINX (Multi-) Streaming Server
description: Instrucions and Scripts to Setup your own (Multi-) Streaming Server, either Locally or on a VPS.
client: Ev. Gemeinschaft Büschergrund
thumbnail:
    url: assets/images/NGINXStreamingServer.png
links:
    - name: github
      url: https://gist.github.com/noelli/489c5c0cf5a561a32f757d7513465344
techniques:
    - nginx
    - shell
    - Raspberry Pi


---

<!-- ToDo: Add translation -->
#### Introduction
This installation Tutorial and the corresponding Scripts were initially provided within a [Gist](https://gist.github.com/noelli/489c5c0cf5a561a32f757d7513465344) and help with the installation of a custom RTMP Server using NGINX.


We did not only want to Stream to many different Services like Youtube, Twitch and Facebook but also wanted to playback Streams locally in different Rooms with little to zero latency. Which is not possible if you use a Streaming Service in the Cloud. So we needed a Local Multi-Streaming Provider, as shown in the Diagram below.


We managed to get there with the provided Instructions and Scripts, running on a low-cost Raspberry Pi 4, with the only Bottleneck being the Internet Connection!



<img
src="/assets/images/NGINXStreamingServer.svg"
alt="Network Diagram of a local NGINX Streaming Server by noell.li"
style="
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
">





## Compile NGINX with RTMP and setup Multi-Streaming
These Scripts will install NGINX with the RTMP Module in the usual directories similar to installation with apt-get.


The RTMP-Server you get with this can then be used to do one ore more of the following:
 - deliver streams in a local network
 - deliver streams to websites similar to youtube
 - transcode rtmp streams to hls video
 - publish to multiple streaming providers
 - record livestreams to a harddrive
 - many, many more: Check the Docs on [Nginx RTMP-Module](https://github.com/arut/nginx-rtmp-module/wiki/Directives)


And it also runs flawless on the Raspberry Pi 4!

## Installation
If git is not present, install it: [Download Git](https://git-scm.com/downloads)


Get the Scripts:
```bash
git clone https://gist.github.com/489c5c0cf5a561a32f757d7513465344.git install_nginx
```

Change into the directory:
```bash
cd install_nginx
```

Then Run the main Script:
```bash
sudo install install_nginx.sh
```

### Pulish to your new RTMP-Server:
Publish from OBS or another Streaming-Device to the following URL (where hostname is the Name or IP of your server).
```
rtmp://hostname:1935/live
```
If you have an api-key for example to publish to youtube, either set it in your OBS or alter the URL like so:
```
rtmp://hostname:1935/live/your-api-key
```

## Explanation and Options
This script installs a rtmp-config which accepts Livestreams and accepts client-connections to play them.

By default the following options are disabled in the configuration file nginx.conf but you can enable and alter them according to your scenario:

### Publishing to Streaming-Service (i.e. Youtube):
If you enable the push option, every published stream will also be pushed to the provided server, by default youtube.

### local VLC Playback (i.e. on Raspberry Pi):
The second option is very handy if you want to Livestream into the internet but have to also Stream into another Room/Location at your site where an audience is watching.

The command after exec_publish will be executed when starting a livestream and will be killed on stop.

### remote VLC Playback
The Command can be altered to start the VLC-Window on another device if you use it with ssh.

To get this running you will have to do some things first, replace username and remote-client with the values fitting your setup:

```bash
sudo -u www-data ssh-keygen -t rsa -b 4096
sudo -u www-data ssh-copy-id username@remote-client

```
After that you can enable an option similar to this:
```bash
ssh -o "StrictHostKeyChecking no" user@remote-client "export DISPLAY=:0.0 && vlc -f --video-on-top --no-video-title-show --mouse-hide-timeout 1 rtmp://localhost/live/$name";
```


To see what the Scripts do exactly or what the config means, look into the Files below.

