function getNavigator(){
	document.getElementById("browserinfo").innerHTML =
	"navigator.appVersion is " + navigator.appVersion + "<br>"
	+ "navigator.platform is" + navigator.platform + "<br>"
	+ "navigator.UserAgent is " +  navigator.userAgent;
}