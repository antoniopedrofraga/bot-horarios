		/* utilizar o custom java script para injectar este código, resultou em 09/02/2016*/

		function checkeic (eicDomId, classId) {

			var options = document.getElementById(eicDomId);
			for (var i = 0; i < options.childNodes.length; i++) {
				var optionText = options.childNodes[i].text + "";
				console.log(optionText);
				var matchArr = optionText.match(classId + '.*' + '\\((\\d)\\)');
				if (matchArr !== null) {
					var number =  matchArr[1];
					if (options.value == options.childNodes[i].value) {
						return 1;
					} else if (number > 0) {

						options.value = options.childNodes[i].value;
						var nodes = document.querySelectorAll("input[type=submit]");
						for (var j = 0; j < nodes.length; j++) {
							if (nodes[j].value == 'Concluir')
								nodes[j].click();
						}

					}
				}
			}
			return 0;
		}




		var eicDomId = ['368714','368716']; //ids do selector dessa cadeira
		var classId = ['3MIEIC02','3MIEIC02']; //turma pretendida em cada index
		var successNumber = 0;

		for (var i = 0; i < eicDomId.length; i++)
			successNumber += checkeic(eicDomId[i], classId[i]);

		if (successNumber < eicDomId.length)
			setTimeout( function () { location.reload(); }, 250);
		else
			alert('O script cumpriu!');
