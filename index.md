---
layout: home
---

<h1 class="header center"><img style="height: 200px; width: 200px;" src="assets/images/noelli.png" alt=""></h1>
<h3 class="no-top-margin header center">{% t global.title %}</h3>
<br>
<div class="row center">
    <p class="flow-text">
        {% tf home/description.md %}
    </p>
</div>
<div class="row center">
    <div class="col s12 m6">
        <p class="flow-text">
            {% tf home/contact.md %}
        </p>
        <p class="flow-text">
            <a class="icon-large green-text" target="_blank" href="mailto:{{ site.email }}"><i class="fa fa-envelope green-text" style=""></i> {% t global.contact_me %}</a>
        </p>
    </div>
    <div class="col s12 m6">
        <p class="flow-text">
            {% tf home/donate.md %}
        </p>
        <p class="flow-text">
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="96QF69TJDWTPS" />
                <input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </p>
    </div>
</div>
<div class="row center">
    <div class="col s12 m6">
        <div class="separator">
            <h5>{% t global.languages %} & {% t global.frameworks %}:</h5>
        </div>
        <div class="row center">
            <a  class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped"
                data-position="top"
                data-tooltip="python.org"
                href="https://python.org">
                <i class="fab fa-python"></i>
            </a>
            <a  class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" 
                data-position="top" 
                data-tooltip="flask.palletsprojects.com" 
                href="https://flask.palletsprojects.com/">
                {% picture "flask.png" --img height="30px" width="30px" %}
                
            </a>
            <a  class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" 
                data-position="top"
                data-tooltip="dart.dev" 
                href="https://dart.dev/">
                {% picture "logo_dart.png" --img height="30px" width="30px" %}
            </a>
            <a  class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" 
                data-position="top" 
                data-tooltip="flutter.dev" 
                href="https://flutter.dev">
                {% picture "logo_flutter.png" --img height="30px" width="30px" %}
                
            </a>
        </div>
    </div>
    <div class="col s12 m6">
        <div class="separator">
            <h5>{% t global.technologies %}:</h5>
        </div>
        <div class="row center">
            <a  class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped"
                data-position="top"
                data-tooltip="nginx.org"
                href="https://nginx.org">
                NGINX
            </a>
            <a  class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped"
                data-position="top"
                data-tooltip="inga-hameln.de"
                href="http://www.inga-hameln.de/ibms">
                iBMS
            </a>
            <a  class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped"
                data-position="top"
                data-tooltip="bacnet.org"
                href="http://www.bacnet.org/">
                BACnet
            </a>
        </div>
    </div>
</div>
<div class="separator">
    <h5>{% t global.last_projects %}</h5>
</div>

<br>