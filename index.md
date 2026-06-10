---
layout: default
title: Home
---

# PRIDE Study Lab Manual

Welcome to the PRIDE Study lab manual. This site contains resources, protocols, and guidelines for our research team.


<div class="search-box">
  <input type="text" id="search" placeholder="Search..." onkeyup="searchContent()">
</div>

## Lab Manual

<ol class="toc">
{% for item in site.data.toc %}
  <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
</ol>

## Quick Links

- [Onboarding Guide]({{ site.baseurl }}/pages/onboarding)
- [Resources]({{ site.baseurl }}/pages/resources)
- [Current Projects]({{ site.baseurl }}/pages/projects)

## About Our Lab

The PRIDE Study investigates... [your description here]

## Contact

For questions, contact: [email@domain.com](mailto:email@domain.com)