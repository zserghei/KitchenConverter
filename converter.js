measures = new Array("w.kg", "килограмм", "кг", //
"w.gram", "грамм", "г", //
"v.liter", "литр", "л", //
"v.milliliter", "миллилитр", "мл", //
"v.mcup", "стакан", "-", //
"v.mtablespoon", "столовая ложка", "-", //
"v.mteaspoon", "чайная ложка", "-");
factors = new Array(1000, 1, 1000, 4.1666667, 66.666667, 200, 0.001, 1, 0.0041666667, 0.066666667, 0.2, 1000,
	4.1666667, 66.666667, 200, 0.0041666667, 0.066666667, 0.2, 16, 48, 3);
substances = new Array("абрикосы, сушёные", 0.64, //
"анчоусы", 1.02, //
"арахис, дроблёный", 0.68, //
"арахис, обжаренный в масле", 0.64, //
"арахисовое масло", 0.76, //
"арахисовое масло (жидкое)", 0.92, //
"базилик, сухой", 0.11, //
"бамбука ростки", 1.14, //
"бананы, нарезанные", 0.76, //
"бананы, растёртые", 0.97, //
"бисквитная смесь", 0.55, //
"бобы, сухие", 0.85, //
"бразильский орех, цельный", 0.64, //
"ванильные вафли, толчёные", 0.68, //
"вода", 1, //
"гвоздика, молотая", 0.4, //
"гвоздика, цельная", 0.38, //
"говядина, варёная", 0.97, //
"говядина, сырая", 0.93, //
"горох, дроблёный", 0.85, //
"горох, сырой", 0.64, //
"горчица, готовая", 1.06, //
"горчица, семя", 0.64, //
"горчца, порошок", 0.49, //
"грецкие орехи, дроблёные", 0.49, //
"грецкие орехи, очищенные", 0.51, //
"грецкие орехи, толчёные", 0.36, //
"гречневая крупа", 0.72, //
"грибы, древесные", 0.42, //
"грибы, китайские чёрные", 0.21, //
"грибы, порезанные ломтиками", 0.28, //
"грибы, рубленые", 0.32, //
"грибы, целые", 0.25, //
"дрожжи, активные сухие", 1.23, //
"желатин", 0.93, //
"зародыши пшеницы", 0.53, //
"земляника", 0.64, //
"зефир, мелкий", 0.21, //
"изюм", 0.64, //
"имбирь, гранулированный", 1.02, //
"имбирь, молотый", 0.51, //
"имбирь, свежий", 0.97, //
"инжир, сушёный", 0.7, //
"какао-порошок", 0.47, //
"капуста цветная", 0.97, //
"капуста, рубленная", 1.44, //
"картофель, вареный, кубиками", 0.85, //
"картофель, ломтики, сырой", 0.76, //
"картофельное пюре", 0.89, //
"касторовое масло", 0.95, //
"каша", 0.72, //
"каша, манная", 0.76, //
"кедровый орех", 0.53, //
"кешью, жареный в масле", 0.47, //
"киш-миш", 0.64, //
"клюква", 0.42, //
"кокос, рубленый", 0.32, //
"корица, молотая", 0.51, //
"кофе, молотый", 0.38, //
"кофе, растворимый", 0.23, //
"крахмал", 0.76, //
"крекер, крошка", 0.38, //
"крекер, кусочки", 0.25, //
"кукурузный сироп", 1.48, //
"кунжут, семена", 0.68, //
"куркума, толчёная", 0.59, //
"лапша яичная", 0.38, //
"лесные орехи, цельные", 0.72, //
"лук зелёный, перо", 0.21, //
"лук, измельчённый", 0.85, //
"лук, нарезанный ломтиками", 0.55, //
"лук, рубленый", 0.64, //
"лук-шалот", 1.02, //
"майонез", 0.93, //
"мак", 0.57, //
"макароны, паста", 0.49, //
"манная крупа", 0.74, //
"маранта, мука", 0.95, //
"маргарин", 0.93, //
"маргарин, растопленный", 0.89, //
"маргарин, твёрдый", 0.93, //
"мармелад", 0.68, //
"масло", 0.97, //
"масло, оливковое", 0.91, //
"масло, растительное", 0.89, //
"мёд", 1.44, //
"миндаль, толченый", 0.36, //
"миндаль, цельный", 0.72, //
"молоко", 1.03, //
"молоко, сгущеное", 0.93, //
"молоко, сухое", 0.49, //
"мука кукурузная", 0.64, //
"мука кукурузная, голубая", 0.51, //
"мука кукурузная, мелкая", 0.72, //
"мука, Deaf Smith", 0.55, //
"мука, США, универсальная", 0.42, //
"мука, бобовая", 0.55, //
"мука, британская с дрожжами", 0.47, //
"мука, гречневая", 0.72, //
"мука, для выпечки", 0.38, //
"мука, картофельная", 0.72, //
"мука, пшеничная", 0.55, //
"мука, пшеничная хлебная", 0.42, //
"мука, ржаная", 0.38, //
"мука, рисовая", 0.64, //
"овёс", 0.68, //
"овсяная крупа, сырая", 0.34, //
"овсяные хлопья", 0.34, //
"оливки, рубленые", 0.76, //
"орехи пекан, дробленые", 0.51, //
"орехи пекан, очищенные", 0.51, //
"орехи пекан, толченые", 0.42, //
"отруби, непросеянные", 0.23, //
"пальмовое масло", 0.92, //
"патока", 1.48, //
"перец горошком, белый", 0.64, //
"перец горошком, чёрный", 0.57, //
"перец красный", 0.49, //
"перец-чили, рубленый", 0.72, //
"петрушка, свежая", 0.17, //
"печенье, крошка свежая", 0.38, //
"пряности, приправы", 0.42, //
"разрыхлитель", 0.76, //
"рис, дикий", 0.61, //
"рис, сваренный на пару", 0.68, //
"рис, сырой", 0.89, //
"сало", 0.93, //
"сахар, гранулированный", 0.81, //
"сахар, кондитерский", 0.55, //
"сахар, коричневый", 0.85, //
"сахар-песок", 0.81, //
"сахарная пудра", 0.55, //
"сельдерей, семена", 0.51, //
"сладкий картофель, вареный", 1.02, //
"сладкий картофель, сырой", 0.76, //
"сметана", 0.51, //
"смородина", 0.64, //
"сода пищевая", 0.87, //
"соль", 1.02, //
"спагетти, сырые", 0.51, //
"сыр джек, тёртый", 0.55, //
"сыр колби, тёртый", 0.47, //
"сыр коттаж", 0.97, //
"сыр пармезан, тёртый", 0.76, //
"сыр чеддер, тёртый", 0.51, //
"сыр, мягкий (крем)", 1.02, //
"тартар, соус", 0.64, //
"томаты, рубленые", 0.68, //
"тунец консервированный", 0.85, //
"тыква, варёная", 0.76, //
"финики, рубленые", 0.64, //
"хлебный мякиш, свежий", 0.25, //
"хлебный мякиш, тостерный", 0.51, //
"хлопья рисовые", 0.09, //
"хлопья, сухие завтраки", 0.51, //
"цветки тигровых лилий", 0.17, //
"цедра апельсина, натёртая", 0.38, //
"цедра лимона, натёртая", 0.64, //
"цукаты, апельсиновые", 0.53, //
"цукаты, лимонные", 0.57, //
"чай", 0.32, //
"чеснок", 0.68, //
"чеснок, измельчённый", 0.64, //
"чеснок, нарезанный свежий", 0.21, //
"чеснок, рубленый сухой", 0.03, //
"чечевица", 0.85, //
"шоколад, жидкий", 1.02, //
"шоколад, кусочками", 0.76, //
"шоколад, тёртый", 0.42, //
"шпик", 0.76, //
"шпинат, вареный", 0.76, //
"яблоки, нарезаные", 0.76, //
"яблоки, сушёные", 0.38, //
"яичный белок", 0.93, //
"яичный желток", 1.14, //
"яйца, взбитые", 0.97, //
"ячмень, сырой", 0.78);
var units = new Array();

function unit(name, title, sign) {
	this.name = name;
	this.title = title;
	this.sign = sign;
	this.hidden = 0;
	this.coef = {};
}

function addCoef() {
	var k = 0;
	for ( var i = 0; i < units.length; i++) {
		for ( var j = i + 1; j < units.length; j++) {
			// прямой и обратный коэффициенты
			units[i].coef[units[j].name] = factors[k];
			units[j].coef[units[i].name] = 1 / factors[k];
			k++;
		}
	}
	document.onkeydown = register;
}

function createUnits() {
	var i = 0;
	var j = 0;
	while (i < measures.length) {
		units[j] = new unit(measures[i], measures[++i], measures[++i]);
		i++;
		j++;
	}
}

function createForm() {
	var text;
	var form = '<form name="main">';

	form += '<table><tr><td valign="top">';
	text = 'Количество значащих цифр: ';
	form += '<div>' + text + '<select name="signFig" onChange="compute(currentUnit);">'
		+ '<option>1</option><option>2</option><option>3</option><option selected>4</option>'
		+ '<option>5</option><option>6</option><option>7</option></select></div>';

	text = 'Показывать разделитель групп разрядов';
	form += '<div><label>' + '<input type="checkbox" checked="true" onClick="compute(currentUnit);" name="separate">'
		+ text + '</label></div>';

	var stext = 'Выберите вещество';
	form += '<div>' + stext + ':<br />';
	form += '<select name="substance" onChange="compute(currentUnit);">';
	for ( var i = 0; i < substances.length; i += 2) {
		form += '<option value="' + substances[i + 1] + '"' + (substances[i + 1] == 1.00 ? ' selected>' : '>')
			+ substances[i] + '</option>';
	}
	form += '</select>';

	form += '<table border="0" cellspacing="0">';
	for ( var i = 0; i < units.length; i++) {
		form += '<tr><td>' + units[i].title;
		if (units[i].sign != '-') {
			form += " (" + units[i].sign + ")";
		}
		form += '</td>';
		form += '<td><input type="text" name="' + units[i].name + '" size="15"'
			+ ' onFocus="oldValue=this.value; curField=this;"'
			+ ' onBlur="currentCompute(this.name, this.value); curField=\'\'"></td>';
		form += '</tr>';
	}
	form += '</table>';
	form += '</td><td valign="top">';
	form += '<div style="-moz-column-count:2; column-count:2;"><ul>';
	for ( var i = 0; i < substances.length; i += 2) {
		form += '<li><a href="#" onClick="document.forms[\'main\'].substance.selectedIndex=' + i / 2
			+ '; compute(currentUnit);">' + substances[i] + '</a></li>';
	}
	form += '</ul></div>';
	form += '</td></tr></table>';
	form += '</form>';
	var div = document.getElementById('mw-content-text');
	if (div.innerHTML.indexOf('form name="main"') < 0) {
		div.innerHTML = div.innerHTML + form;
	}
	this.currentUnit = "w.gram";
}

function register(e) {
	// keypress
	var code = 0;
	if (!e) {
		e = window.event;
	}
	if (e.keyCode) {
		code = e.keyCode;
	} else if (e.which) {
		code = e.which;
	}
	// enter
	if (code == 13 && curField) {
		currentCompute(curField.name, curField.value);
		return false; // do not do try to submit the form in Opera
	}
}

function checkNum(val) {
	for ( var i = 0; i < currentValue.length; i++) {
		var ch = currentValue.substring(i, i + 1);
		if (ch == ',') {
			currentValue = currentValue.substring(0, i) + '.' + currentValue.substring(i + 1, currentValue.length);
		} else if (ch == ' ') {
			currentValue = currentValue.substring(0, i) + currentValue.substring(i + 1, currentValue.length);
			i--;
		} else if (ch != '.' && ch != '+' && ch != '-' && (ch < '0' || ch > '9')) {
			document.forms["main"][val].focus();
			document.forms["main"][val].select();
			return false;
		}
	}
	document.forms["main"][val].value = currentValue;
	return true;
}

function roundOff(value) {
	var precision = parseInt(typeof (document.forms["main"].signFig) != 'undefined' ? document.forms["main"].signFig.selectedIndex + 1
		: 4);
	var result = '';
	value = String(value).toLowerCase();
	var shift;
	var expPart = '';
	var signPart = '';
	if (!isFinite(value)) {
		return '∞';
	}
	if (value.substring(0, 1) == '-') {
		signPart = '-';
		value = value.substring(1, value.length);
	}
	if (parseFloat(value) >= 1.0) {
		var point = value.indexOf('.');
		if (point == -1) {
			point = value.length;
		}
		shift = point - precision;
	} else {
		var notNull = String(value).lastIndexOf('.') + 1;
		if (notNull == 1) {
			notNull += 1;
		}
		while (String(value).charAt(notNull) == '0') {
			notNull++;
		}
		notNull -= 2;
		shift = -(precision + notNull);
	}

	result = Math.round(value / Math.pow(10, shift));
	if (shift >= 0) {
		for ( var i = 1; i <= shift; i++) {
			result += '0';
		}
	} else {
		result += '';
		if (result.length + shift > 0) {
			result = result.substring(0, result.length + shift) + '.'
				+ result.substring(result.length + shift, result.length);
		} else {
			var result1 = '0.';
			for ( var i = -1; i >= result.length + shift; i--) {
				result1 += '0';
			}
			result = result1 + result;
		}
		while (result.charAt(result.length - 1) == '0') {
			result = result.substring(0, result.length - 1);
		}
		if (result.charAt(result.length - 1) == '.') {
			result = result.substring(0, result.length - 1);
		}
	}
	result = signPart + result + expPart;
	// разбиваем результат на группы разрядов, если это необходимо
	if (typeof (document.forms["main"].separate) != 'undefined' && document.forms["main"].separate.checked) {
		var i = result.indexOf('.') > 0 ? result.indexOf('.') : result.length;
		for ( var j = i - 3; j > 0; j -= 3) {
			if (result[j - 1] != '-') {
				result = result.substring(0, j) + ' ' + result.substring(j, result.length);
			}
		}
	}
	return result;
}

function compute(val) {
	if (!this.currentUnit || !this.currentValue) {
		return;
	}
	if (!this.currentValue || !checkNum(val)) {
		return;
	}
	var cvalue = this.currentValue;
	var vw = '';
	var substanceValue = 1;
	if (val.indexOf(".") != -1 && substances.length > 0) {
		vw = val.substring(0, 1);
		if (vw != 'v' && vw != 'w') {
			alert("Конвертация невозможна.");
			return;
		}
		substanceValue = document.forms["main"].substance.options[document.forms["main"].substance.selectedIndex].value;
	}
	var i = 0;
	for (i = 0; i < units.length; i++) {
		if (val == units[i].name) {
			break;
		}
	}
	var csubs = 1;
	for ( var j in units[i].coef) {
		if (substanceValue != 1 && j.substring(0, 1) != vw) {
			// поправка на конкретное вещество
			if (vw == 'v') {
				csubs = substanceValue; // из объёма в вес
			} else {
				csubs = 1 / substanceValue; // из веса в объём
			}
		} else {
			csubs = 1;
		}
		document.forms["main"][j].value = roundOff(units[i].coef[j] * cvalue * csubs);
	}
	document.forms["main"][val].value = roundOff(currentValue);
}

function currentCompute(name, value) {
	if (this.oldValue != value) {
		this.currentUnit = name;
		this.currentValue = value;
		compute(name);
	}
}

createUnits();
addCoef();
createForm();
