var GitHub = {};
GitHub.include = {};
GitHub.include.markdown = function(html_id, url) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = xhttp.responseXML.getElementById(html_id).innerHTML;
			if(!response) {
				document.getElementById(html_id).innerHTML = response;
			}
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
};
