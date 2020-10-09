## NGINX mit RTMP-Modul kompilieren und Multi-Streaming einstellen
Diese Skripte werden NGINX mit dem RTMP Modul installieren, dabei werden die "normalen" Ordner genutzt, wie auch bspw. von apt-get.

Der RTMP-Server den Sie damit erhalten kann für eins oder mehr der folgenden Dinge genutzt werden:
 - Streams im localen Netzerk bereitstellen
 - RTMP Streams in HLS-Video umwandeln
 - Streams an ein oder mehrere Webseiten wie z.B. Youtube senden
 - Streams auf Festplatte speichern
 - vieles, vieles mehr: Schau mal in die Offizielle Doku: [Nginx RTMP-Module](https://github.com/arut/nginx-rtmp-module/wiki/Directives)

Und es läuft problemlos auf einem Raspberry Pi 4!

## Installation
Wenn noch kein Git vorhanden ist, installiere es: [Download Git](https://git-scm.com/downloads)


Hole die Skripte:
```bash
git clone https://gist.github.com/489c5c0cf5a561a32f757d7513465344.git install_nginx
```

Wechsel in das Ziel-Verzeichis:
```bash
cd install_nginx
```
Führe das Haupt Installationsskript aus:
```bash
sudo install install_nginx.sh
```


### Streame auf deinen neuen RTMP-Server:
Starte einen Stream von OBS oder eines anderen Streaming-Gerätes auf folgende URL (Hostname ist hier die IP oder der Name deines Servers):
```
rtmp://hostname:1935/live
```
Wenn du einen API-Key z.B. von Youtube hast, stelle ihn in OBS ein oder verändere die URL wie folgt:
```
rtmp://hostname:1935/live/your-api-key
```

## Erklärung und Optionen:
Dieses Skript installiert eine RTMP-Configuration welche Livestreams annimt und an CLient-Verbindungen verteilt.

Standardmäßig sind folgende Optionen deaktiviert aber können, bei Bedarf, in der Konfigurations-Datei  `/etc/nginx/nginx.conf` aktiviert werden:

### Veröffentlichen zu einem Streaming-Service (z.B. Youtube):
Wenn du die Push Option aktivierst, wird jeder ankommende Stream auf die genannte URL weitergeleitet, standardmäßig Youtube.

### Lokale VLC Wiedergabe (z.B. auf einem Raspberry Pi):
Diese Option ist sehr Hilfreich wenn du in das Internet Livestreamen möchtest aber auch in einen Lokalen Raum Streamen möchtest.

Der Befehl nach exec_publish wird zu beginn eines neuen Livestreams ausgeführt und nach beendigung desselben beendet.

#### VLC Wiedergabe auf anderem Linux-Gerät
Der VLC-Befehl kann abgewandelt werden um VLC-Fenster auf einem anderen Gerät zu starten, via SSH.

Um das ans laufen zu bekommen müssen wir ein paar Vorbereitungen treffen. Ersetze `username` und `remote-client` durch die richtigen Werte.

Hier wird ein neuer SSH-Key generiert:
```bash
sudo -u www-data ssh-keygen -t rsa -b 4096
sudo -u www-data ssh-copy-id username@remote-client

```
Danach kann eine Option ähnlich wie die Folgende eingestellt werden:
```bash
ssh -o "StrictHostKeyChecking no" user@remote-client "export DISPLAY=:0.0 && vlc -f --video-on-top --no-video-title-show --mouse-hide-timeout 1 rtmp://localhost/live/$name";
```
