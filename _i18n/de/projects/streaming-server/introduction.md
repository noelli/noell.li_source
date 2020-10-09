#### Einführung
Dieses Tutorial und die dazugehörigen Skripte wurden urspünglich in einem [Gist](https://gist.github.com/noelli/489c5c0cf5a561a32f757d7513465344) Veröffentlicht und vereinfachen die Installation eines eigenen RTMP-Servers mithilfe von NGINX.



Wir hatten nicht nur die Anforderung an verschiedene Dienste wie Youtube, Twitch oder Facebook gleichzeitig zu streamen, sondern benötigten auch "Lokale Wiedergabemöglichkeiten" also Empfänger in anderen Räumlichkeiten in der gleichen Liegenschaft.
Dies bedingt möglichst niedrige Latenzen, welche mit den üblichen Multi-Streaming Anbietern in der Cloud nicht erreicht werden können, sodass wir uns für eine Topologie wie unten angezeigt entschieden haben.

Die mit diesen Skripten und Anleitungen hergestellte Lösung ist auf einem kostengünstigen Raspberry Pi 4 vollfunktionsfähig, der einzige Flaschenhals ist die Netzwerkanbindung!

