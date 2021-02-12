---
title: "Electric Vehicle Charging Facility Simulation"
excerpt: "Hobby project performing statistical analysis on publicly available Binance trade data."
collection: projects
---
{% include base_path %}

<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>  
<script src="https://pagecdn.io/lib/mathjs/7.1.0/math.min.js"></script>
<!-- Custom Javascript -->
<script src="/assets/js/custom/pricingplots.js"></script>

This project is a web implementation of my research work. 
<label for="num_of_levels">Number of Service Levels:</label>
<input type="text" id="num_of_levels" value="3">
<button onclick="generate_sliders()">Generate</button> 


<label for="charge_section">Service Level Charging Rates:</label>
<div id="charge_section"> </div>

<label for="price_section">Service Level Pricing: </label>
<div id="price_section"> </div>

<!-- <label for="rates">Charging Rates:</label>
<input type="text" id="charge_rate_input" value="20,25,30" required minlength="2" maxlength="30" size="2">


<label for="rates">Prices:</label>
<input type="text" id="price_input" value="0.15,0.20,0.25" required minlength="2" maxlength="30" size="2"> -->



<label for="xj-distribution">Choose user demand distribution:</label>
<select name="distributions" id="xj-distribution">
    <option value="">--Please choose an option--</option>
    <option value="uniform">Uniform</option>
</select>	

<label for="rates">Value range of user demand [a,b]:</label>
<input type="text" id="xj_range" value="2,10" required minlength="2" maxlength="10" size="2">


<label for="alpha-distribution">Choose user impatience distribution:</label>
<select name="distributions" id="alpha-distribution">
    <option value="">--Please choose an option--</option>
    <option value="uniform">Uniform</option>
</select>

<label for="alpha_range">Value range of [a,b]:</label>
<input type="text" id="alpha_range" value="2,20" required minlength="2" maxlength="10" size="2">

<label for="xij-distribution">Choose user time spent at location distribution:</label>
<select name="distributions" id="xij-distribution">
    <option value="">--Please choose an option--</option>
    <option value="uniform">Uniform</option>
</select>

<label for="xij_range">Value range of [a,b]:</label>
<input type="text" id="xij_range" name="name" required minlength="2" maxlength="10" size="2">

<label for="myxjVal">Fixed Demand Value for Pricing: </label>
 <div class="slidecontainer">
  	<input type="range" min="1" max="100" value="50" class="slider" id="myxjVal">
	<p>
		Energy demand Value: <span id="xjslideroutput"></span>
	</p>
</div>

<script>test();</script>


<button onclick="get_form_inputs()">Run</button> 

<div id="pricingfunc" style="width:100%; margin:0 auto"></div>
