// Plot Number of active and inactive symbols on Binance
$(document).ready(
	function() {
				// Get JSON file posted on github repo
   			$.getJSON('https://csantoyo.github.io/files/data/asset_data.json', 
   				function(jd) {

   					let time = jd.time; 
   					let active = jd.num_of_active
   					let inactive = jd.num_of_inactive

					activeplot = document.getElementById('activeplot');
					inactiveplot = document.getElementById('inactiveplot');
					
					var timestr = [];
					time.forEach(function(item, index, array){
						var s = new Date(item * 1000).toLocaleDateString("en-US")
						timestr.push(s)
						console.log(timestr, index)
					})

					var trace1 = { x: timestr, y: active };
					var trace2 = { x: timestr, y: inactive };
					var data1 = [trace1]
					var data2 = [trace2]
					var layout1 = { margin: { t: 0 },
								   xaxis: {
								   			title: "Date"
								   },
								   yaxis: {
								   		title: "Num. of Active Symbols",
								   		range: [890, 925]}
								};
					var layout2 = { margin: { t: 0 },
									xaxis: {
										title: "Date"
									},
									yaxis: {
								   		title: "Num. of Inactive Symbols",
										range: [300, 350]}
								};
					Plotly.newPlot(activeplot, data1, layout1);
					Plotly.newPlot(inactiveplot, data2, layout2);
   					});
			});