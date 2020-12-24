---
title: "Binance Historial Data Statistical Analysis"
excerpt: "Hobby project performing statistical analysis on publicly available binance trade data."
collection: projects
---
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>  

{% include base_path %}

(Under Construction) This project is a hobby project analyzing publicly available binance data. 

<div id="activeplot" style="width:600px;height:300px; margin:0 auto"></div>
<div id="inactiveplot" style="width:600px;height:300px;  margin:0 auto"></div>

Note that the sudden jumps in the number of active symnbols to zero are either due to maintenance on the part of Binance or something beyond the control of my script. For now, I have left these jumps in there. Data is collected at 6 hr intervals.

<script src="/assets/js/custom/plotdata.js"></script>

