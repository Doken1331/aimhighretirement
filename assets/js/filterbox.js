/**
  * Filter box / dependecy select
  * @author: Jan Krmela
  * About:
  *       Adding city to the list could be done by editing array of object.
  *		  Each array represents some region
  *		  If you need add any region dont forget to edit function listAll() also.
  */

(function() {
    // Load the script - jquery
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        

        $(document).ready(function(){
			//let's create arrays
			var jihomoravsky = [
			    {display: "Blansko"}, 
			    {display: "Boskovice"}, 
			    {display: "Břeclav"}, 
			    {display: "Brno - Černovice"},
			    {display: "Brno - Kobližná"},
			    {display: "Brno - Královo Pole"},
			    {display: "Brno - Mendlovo náměstí"},
			    {display: "Brno - Sever"},
			    {display: "Brno - Židenice"},
			    {display: "Vyškov"},
			    {display: "Hodonín"},
			    {display: "Znojmo"}];
			    
			var jihocesky = [
			    {display: "České Budějovice - KC Máj"}, 
			    {display: "České Budějovice - Riegrova"}, 
			    {display: "Prachatice"}, 
			    {display: "Písek"}];

			var zlinsky = [
			    {display: "Zlín"}];
			    
			var stredocesky = [
			    {display: "Příbram"}];

			var moravskoslezsky = [
			    {display: "Frýdek-Místek"}, 
			    {display: "Ostrava"}];

			//If parent option is changed
			$('select[name="accommodation-location"]').change(function() {
			        var parent = $(this).val(); //get option value from parent 
			        
			        switch(parent){ //using switch compare selected option and populate child
			              case 'retirement-all':
			              	listAll();
			                break;
			              case 'Jihomoravský kraj':
			                list(jihomoravsky);
			                break;              
			              case 'Jihočeský kraj':
			                list(jihocesky);
			                break;  
			              case 'Středočeský kraj':
			                list(stredocesky);
			                break;
			              case 'Moravskoslezský kraj':
			                list(moravskoslezsky);
			                break;
			              case 'Zlínský kraj':
			                list(zlinsky);
			                break;
			            default: //default child option is blank
			                console.log('default');
			                //$("#child_selection").html('');  
			                break;
			           }
			});

			//function to populate child select box
			function list(array_list)
			{
			    $('select[name="accommodation-type"]').html(""); //reset child options
			    $('select[name="accommodation-type"]').append('<option value="retirement-all">Všechna</option>');
			    $(array_list).each(function (i) { //populate child options 
			        $('select[name="accommodation-type"]').append('<option value="'+array_list[i].display+'">'+array_list[i].display+'</option>');
			    });
			}
			function listAll()
			{
			    $('select[name="accommodation-type"]').html(""); //reset child options
			    $('select[name="accommodation-type"]').append('<option value="retirement-all">Všechna</option>');
			    $(jihomoravsky).each(function (i) { //populate child options 
			        $('select[name="accommodation-type"]').append('<option value="'+jihomoravsky[i].display+'">'+jihomoravsky[i].display+'</option>');
			    });
			    $(stredocesky).each(function (i) { //populate child options 
			        $('select[name="accommodation-type"]').append('<option value="'+stredocesky[i].display+'">'+stredocesky[i].display+'</option>');
			    });
			    $(jihocesky).each(function (i) { //populate child options 
			        $('select[name="accommodation-type"]').append('<option value="'+jihocesky[i].display+'">'+jihocesky[i].display+'</option>');
			    });
			    $(zlinsky).each(function (i) { //populate child options 
			        $('select[name="accommodation-type"]').append('<option value="'+zlinsky[i].display+'">'+zlinsky[i].display+'</option>');
			    });
			    $(moravskoslezsky).each(function (i) { //populate child options 
			        $('select[name="accommodation-type"]').append('<option value="'+moravskoslezsky[i].display+'">'+moravskoslezsky[i].display+'</option>');
			    });
			}

		});

    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

