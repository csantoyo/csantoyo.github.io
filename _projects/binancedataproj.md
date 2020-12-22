---
title: "Binance Historial Data Statistical Analysis Project"
excerpt: "Hobby project performing statistical analysis on publicly available binance trade data."
collection: projects
---
{{% include base_path %}}

This project is a hobby project analyzing publiclly available binance data. 

<h1>A Web Page</h1>
<p id="browserinfo">A Paragraph</p>
<p id="demo">Position Par</p>
<button type="button" onclick="getNavigator()">Get Browser info</button>

<script>
	function getNavigator(){
		document.getElementById("browserinfo").innerHTML =
		"navigator.appVersion is " + navigator.appVersion + "<br>"
		+ "navigator.platform is" + navigator.platform + "<br>"
		+ "navigator.UserAgent is " +  navigator.userAgent;
	}
</script>