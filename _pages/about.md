---
layout: archive
permalink: /
title: "About Me"
seo_title: "Jieqi Di | Operations Research | Georgia Tech"
description: "Jieqi Di is a Ph.D. candidate in Operations Research at Georgia Tech, studying stochastic models, pricing, sustainable operations, and machine learning."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Ph.D. candidate in Operations Research at the [H. Milton Stewart School of Industrial and Systems Engineering](https://www.isye.gatech.edu/), Georgia Institute of Technology, advised by Professors [Sigrún Andradóttir](https://www.isye.gatech.edu/users/sigrun-andradottir) and [Hayriye Ayhan](https://www.isye.gatech.edu/users/hayriye-ayhan). I am also fortunate to collaborate with Prof. [Yuwei Zhou](https://yuweizhou3.github.io/), Prof. [Fei Gao](https://sites.google.com/view/feigao/home), and Prof. [Wenchang Zhang](https://www.wenchangzhang.com/) at the Kelley School of Business, Indiana University. Before joining Georgia Tech, I received a B.S. in Mathematics with a minor in Finance from Boston College in 2022.

My research focuses on stochastic modeling and its applications to sustainable and socially responsible operations. My interests include:

- **Stochastic modeling and pricing:** I use Markov decision processes and queueing theory to study stochastic systems and develop pricing and control policies.
- **Sustainable retail operations:** I study operational decisions related to food waste reduction, food donation, and on-demand services, considering both business performance and social impact.

I am also interested in machine learning methods for modeling and predicting complex stochastic systems and using these insights to improve operational decision-making.

In addition, I have industry experience in semiconductor supply chains. During my internship at [Sandisk](https://www.sandisk.com/), I worked on capacity planning and inventory simulation to support manufacturing and supply-chain decisions.

You can also learn more about me on [LinkedIn](https://www.linkedin.com/in/jieqi-di-gatech/) or find my articles on [Google Scholar]({{ site.author.googlescholar }}).

<!-- These sections use the editable Markdown files alongside this page. -->
{% capture publications_source %}{% include_relative publications.md %}{% endcapture %}
{{ publications_source | split: '---' | shift | shift | join: '---' }}

## Talks and Presentations
{: #talks }

{% capture talks_source %}{% include_relative talks.md %}{% endcapture %}
{{ talks_source | split: '---' | shift | shift | join: '---' }}

## Honors and Awards
{: #awards }

{% capture awards_source %}{% include_relative awards.md %}{% endcapture %}
{{ awards_source | split: '---' | shift | shift | join: '---' }}

## Teaching
{: #teaching }

{% capture teaching_source %}{% include_relative teaching.md %}{% endcapture %}
{{ teaching_source | split: '---' | shift | shift | join: '---' }}
