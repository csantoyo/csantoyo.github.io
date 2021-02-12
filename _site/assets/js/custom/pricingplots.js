
function get_number_of_levels(){
	var num_of_levels = document.getElementById("num_of_levels")
	return Number(num_of_levels.value)
}

function generate_sliders(){
	var section_charge = document.getElementById("charge_section")
	var section_price = document.getElementById("price_section")
	// Clear HTML contents
	section_charge.innerHTML = ""
	section_price.innerHTML = ""

	// Insert Sliders into HTML
	for (var j = 0; j < get_number_of_levels(); j++){
		// Slider Contents
		var charge_slider_html = "<div class=slidecontainer> \
			<input type=range min=1 max=100 value=50 class=slider id=chargeVal" + j + ">\
		  		<p>	Charge Rate: <span id=chargeOutput" + j + "></span></p>\
							</div>"
		var price_slider_html = "<div class=slidecontainer> \
			<input type=range min=0 max=1 step=.05 value=.50 class=slider id=priceVal" + j + ">\
		  		<p>	Price: <span id=priceOutput" + j + "></span></p>\
							</div>"

		section_charge.innerHTML += charge_slider_html;
		section_price.innerHTML += price_slider_html;

	}
	// Add scripts at the bottom
	for (var j = 0; j < get_number_of_levels(); j++){
		var charge_scr = document.createElement('script');
		var price_scr = document.createElement('script');

		charge_scr.innerHTML = "charge_rate_slider_update(" + j + ")";
		price_scr.innerHTML = "price_slider_update(" + j + ")";
		document.body.appendChild(charge_scr);
		document.body.appendChild(price_scr);
	}

}

function get_form_inputs() {
	var num_of_levels = get_number_of_levels();
	console.log("Collecting info for plots ...");
	// Get Charging Facility Parameters  
	// var charge_input = document.getElementById("charge_rate_input");
	// var price_input = document.getElementById("price_input");
	var slider = document.getElementById("myxjVal");

	// Get distribution parameters
	var xj_dist_type_input = document.getElementById("xj-distribution");
	var alpha_dist_type_input = document.getElementById("alpha-distribution");
	var xij_dist_type_input = document.getElementById("xij-distribution");

	// Get range inputs
	var xj_range_input = document.getElementById("xj_range");
	var alpha_range_input = document.getElementById("alpha_range");
	var xij_range_input = document.getElementById("xij_range");

	// Convert Rates to number array
	// var R_ell = charge_input.value.split(",").map(Number);
	// var V_ell = price_input.value.split(",").map(Number);

	var R_ell = get_charge_rates(num_of_levels);
	var V_ell = get_prices(num_of_levels);
	console.log(R_ell, V_ell)
	// Get name of distribution
	var xj_dist = xj_dist_type_input.value;
	var alpha_dist = alpha_dist_type_input.value;
	var xij_dist = xij_dist_type_input.value;

	// Get numerical Ranges 
	var xj_range = xj_range_input.value.split(",").map(Number);
	var alpha_range = alpha_range_input.value.split(",").map(Number);
	var xij_range_input = xij_range_input.value.split(",").map(Number);

	// Compute step sizes for range
	var num = 100;
	var alphaj_step = math.subtract(math.max.apply(null, alpha_range),
					math.min.apply(null, alpha_range))
	alphaj_step = math.divide(alphaj_step, num)

	var xj_step = math.subtract(math.max.apply(null, xj_range),
					math.min.apply(null, xj_range))
	xj_step = math.divide(xj_step, num)

	// Get Range for random variables
	var alphaj = math.range(math.min.apply(null, alpha_range),
					math.max.apply(null, alpha_range), alphaj_step);
	var xj = math.range(math.min.apply(null, xj_range),
					math.max.apply(null, xj_range), xj_step);

	var g_ell = math.zeros(R_ell.length, num)
	for (var i = 0; i < R_ell.length; i++){
	  	g_ell[i] = math.add(math.dotMultiply(slider.value, V_ell[i]),
	  	 		math.dotMultiply(alphaj, math.divide(slider.value, R_ell[i])));
	}


	pricesplot = document.getElementById("pricingfunc");
	traces = []
	for (var i = 0; i < R_ell.length; i++){
		traces.push({x: alphaj._data, y: g_ell[i]._data , name: "Level " + (i+1)})
	}
	console.log(traces)
	Plotly.newPlot(pricesplot, traces)

}

function test(){
	var slider = document.getElementById("myxjVal");
	var output = document.getElementById("xjslideroutput");
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value;
		get_form_inputs();
	}
}

function charge_rate_slider_update(num){
	var slider = document.getElementById("chargeVal" + num);
	var output = document.getElementById("chargeOutput" + num);
	output.innerHTML = slider.value;
	console.log("Charge Ran" + num)
	slider.oninput = function() {
		output.innerHTML = this.value;
		get_form_inputs();
	}
}

function price_slider_update(num){
	var slider = document.getElementById("priceVal" + num);
	var output = document.getElementById("priceOutput" + num);
	output.innerHTML = slider.value;
	console.log("Price Ran " + num)
	slider.oninput = function() {
		output.innerHTML = this.value;
		get_form_inputs();
	}
}

function get_charge_rates(num_of_levels){
	var charge_rates = [];
	for(var j = 0; j < num_of_levels; j++){
		var slider = document.getElementById("chargeVal" + j);
		charge_rates.push(slider.value);
	}

	return charge_rates
}

function get_prices(num_of_levels){
	var prices = [];
	for(var j = 0; j < num_of_levels; j++){
		var slider = document.getElementById("priceVal" + j);
		prices.push(slider.value);
	}
	
	return prices
}
// test();
// function test(){
// 	var temp = math.zeros(2,2);
// 	console.log(temp._data[0]);
// 	temp._data[0] = [2,3];
// 	console.log(temp._data);
// }

// test();
// $(document).ready(

// 	);