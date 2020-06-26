---
layout: home
---


<br>
<br>
<h1 class="header center"><img style="height: 200px; width: 200px;" src="assets/images/noelli.png" alt=""></h1>
<h3 class="no-top-margin header center">{% t global.title %}</h3>
<br>
<div class="row center">
    <p class="flow-text">
        {% tf home/description.md %}
    </p>
    <p class="flow-text">
        {% tf home/contact.md %}<br>
        <a class="icon-large" target="_blank" href="mailto:{{ site.email }}"><i class="fa fa-envelope green-text" style=""></i></a>
    </p>
</div>
<div class="separator">
    <h5>{% t global.languages %} & {% t global.frameworks %}:</h5>
</div>
<div class="row center">
    <a class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" data-position="top" data-tooltip="python.org" href="https://python.org">
        <i class="fab fa-python"></i>
    </a>
    <a class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" data-position="top" data-tooltip="flask.palletsprojects.com" href="https://flask.palletsprojects.com/">
        <img height="30px" width="30px" src='{{ "/assets/images/flask.png" | prepend: site.baseurl_root }}'>
    </a>
    <a class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" data-position="top" data-tooltip="dart.dev" href="https://dart.dev/">
        <img height="30px" width="30px" src='{{ "/assets/images/logo_dart.png" | prepend: site.baseurl_root }}'>
    </a>
    <a class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" data-position="top" data-tooltip="flutter.dev" href="https://flutter.dev">
        <img height="30px" width="30px" src='{{ "/assets/images/logo_flutter.png" | prepend: site.baseurl_root }}'>
    </a>
    <a class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" data-position="top" data-tooltip="nginx.org" href="https://nginx.org">
        NGINX
    </a>
</div>
<div class="separator">
    <h5>{% t global.last_projects %}</h5>
</div>

<br>