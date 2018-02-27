var api;
var index;
var apiLength;
var constellation;
var level;
var lowLevelImg, midLevelImg, highLevelImg;
var signs = [];
var font;

function preload() {
	api = loadJSON("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole", dataReceived);

	//constellation
	signs[0] = loadImage("images/Aries.png");
	signs[1] = loadImage("images/Taurus.png");
	signs[2] = loadImage("images/Gemini.png");
	signs[3] = loadImage("images/Cancer.png");
	signs[4] = loadImage("images/Leo.png");
	signs[5] = loadImage("images/Virgo.png");
	signs[6] = loadImage("images/Libra.png");
	signs[7] = loadImage("images/Scorpio.png");
	signs[8] = loadImage("images/Sagittarius.png");
	signs[9] = loadImage("images/Capricorn.png");
	signs[10] = loadImage("images/Aquarius.png");
	signs[11] = loadImage("images/Pisces.png");

	//level img
	lowLevelImg = loadImage("images/low.png");
	midLevelImg = loadImage("images/mid.png");
	highLevelImg = loadImage("images/high.png");

	font = loadFont("Font.ttf");
}

function setup() {
	createCanvas(600, 800);
	index = Math.floor(random(apiLength));
	print(api.length);
	balances(index);
	constellations(index);
	//    var str = "$100,020201.11";
	//    //    var num = parseInt(str.substring(1));
	//    var num = str.replace(/[^0-9/.]/ig, "");
	//    var i = parseInt(num);
	//    print(num);
	//    print(i);
	var str = "Hello world, welcome to the universe.";
	var n = str.indexOf("welcome");
}

function draw() {
	background(66, 155, 244);
	rect(40, 90, width - 80, height - 180, 20);
	textFont("font");
	name(index, width / 2, 60);
	textFont("Fantasy");
	drawBalance(2 * width / 6, 100, width / 3, width / 3);
	drawConstellation(2 * width / 6, width / 1.5, width / 2.5, width / 3);
	contact(index, width / 2, height * 0.92);
}

function name(index, x, y) {
	fill(0, 0, 0);
	rect(0, 0, width, 90);
	fill(255, 255, 255);
	textSize(50);
	textAlign(CENTER);
	text(api[index].first + " " + api[index].last, x, y);
}

function contact(index, x, y) {
	fill(255);
	stroke(0);
	strokeWeight(1);
	text("Contect me :\n" + api[index].email + "\n" + api[index].address, x, y);

}

function constellations(index) {
	date = api[index].created;
	print(date);
	if (date.search("January") >= 0) {
		constellation = "Aries";
	} else if (date.search("February") >= 0) {
		constellation = "Taurus";
	} else if (date.search("March") >= 0) {
		constellation = "Gemini";
	} else if (date.search("April") >= 0) {
		constellation = "Cancer";
	} else if (date.search("May") >= 0) {
		constellation = "Leo";
	} else if (date.search("June") >= 0) {
		constellation = "Virgo";
	} else if (date.search("July") >= 0) {
		constellation = "Libra";
	} else if (date.search("August") >= 0) {
		constellation = "Scorpio";
	} else if (date.search("September") >= 0) {
		constellation = "Sagittarius";
	} else if (date.search("October") >= 0) {
		constellation = "Capricorn";
	} else if (date.search("November") >= 0) {
		constellation = "Aquarius";
	} else if (date.search("December") >= 0) {
		constellation = "Pisces";
	}
	print(constellation);
}

function drawConstellation(x, y, w, h) {
	fill(0)
	textSize(20);
	textAlign(CENTER);
	switch (constellation) {
		case "Aries":
			image(signs[0], x, y, w, h);
			text("My sign is Aries.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: hopeful, active, energetic, honest, versatile, brave,  curious", x + width / 6, y + h * 1.3);
			break;
		case "Taurus":
			image(signs[1], x, y, w, h);
			text("My sign is Taurus.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: romantic, decisive, logical, diligent, ardent, patient", x + width / 6, y + h * 1.3);
			break;
		case "Gemini":
			image(signs[2], x, y, w, h);
			text("My sign is Gemini.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: multifarious,  smart, cheerful, quick - witted, clement, charming", x + width / 6, y + h * 1.3);
			break;
		case "Cancer":
			image(signs[3], x, y, w, h);
			text("My sign is Cancer.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: with strong sixth sense, gentle, swift, imaginative, kind, caring", x + width / 6, y + h * 1.3);
			break;
		case "Leo":
			image(signs[4], x, y, w, h);
			text("My sign is Leo.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: proud, charitable, reflective, loyal and enthusiastic", x + width / 6, y + h * 1.3);
			break;
		case "Virgo":
			image(signs[5], x, y, w, h);
			text("My sign is Virgo.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: helping, elegant, perfectionist, modest, practical, clearheaded", x + width / 6, y + h * 1.3);
			break;
		case "Libra":
			image(signs[6], x, y, w, h);
			text("My sign is Libra.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: idealistic, equitable, aesthetic, charming, artistic, beautiful", x + width / 6, y + h * 1.3);
			break;
		case "Scorpio":
			image(signs[7], x, y, w, h);
			text("My sign is Scorpio.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: mysterious, rational, intelligent, independent, charming", x + width / 6, y + h * 1.3);
			break;
		case "Sagittarius":
			image(signs[8], x, y, w, h);
			text("My sign is Sagittarius.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: insightful, superior, rational, brave, beautiful, lovely, optimistic", x + width / 6, y + h * 1.3);
			break;
		case "Capricorn":
			image(signs[9], x, y, w, h);
			text("My sign is Capricorn.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: excellent, intelligent, practical, reliable, perseverant", x + width / 6, y + h * 1.3);
			break;
		case "Aquarius":
			image(signs[10], x, y, w, h);
			text("My sign is Aquarius.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: original, tolerant, ideal, calm, friendly, charitable", x + width / 6, y + h * 1.3);
			break;
		case "Pisces":
			image(signs[11], x, y, w, h);
			text("My sign is Pisces.", x + w / 2.5, y + h * 1);
			textSize(14);
			text("Strength: conscious, aesthetic, platonic, dedicated, kind, with good temper", x + width / 6, y + h * 1.3);
			break;

	}
}


function balances(index) {
	///[^0-9]/ig  *ignore number 0~9*
	var moneyStr = api[index].balance.replace(/[^0-9/.]/ig, "");
	var money = parseInt(moneyStr);
	if (money >= 2000 && money <= 5000) {
		level = "mid";
	} else if (money < 2000) {
		level = "low";
	} else {
		level = "high";
	}
}

function drawBalance(x, y, w, h) {
	fill(0)
	textSize(20);
	textAlign(CENTER);
	switch (level) {
		case "low":
			image(lowLevelImg, x, y, w, h);
			text("I'm a poor people!\nI have " + api[index].balance, x + w / 2, y + h * 1.2);
			break;
		case "mid":
			image(midLevelImg, x, y, w, h);
			text("I'm a normal people!\nI have " + api[index].balance, x + w / 2, y + h * 1.2);
			break;
		case "high":
			image(highLevelImg, x, y, w, h);
			text("I'm a rich guy!\nI have " + api[index].balance, x + w / 2, y + h * 1.2);
			break;
	}
}

function dataReceived(data) {
	console.log("here is the data: ");
	console.log(data);
	console.log(data.length)
	apiLength = data.length;
}
