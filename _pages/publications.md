---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}
<h2 id="conference-publications">Conference Publications</h2>

{% for post in site.publications reversed %}
  {% if post.pubtype == 'conference' %}
    {% include archive-publist.html %}
  {% endif %}
{% endfor %}

<h2 id="journal-publications">Journal Publications</h2>

{% for post in site.publications reversed %}
  {% if post.pubtype == 'journal' %}
    {% include archive-publist.html %}
  {% endif %}
{% endfor %}

<!-- {% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->
