var canvas;
var centerCan;

var canctx;
var centerCtx;

document.body.onload = init;

var x; var y;

var prize;
var ratio1;
var ratio2;

var istrue = false;
var $table;

function init() {
	canvas = document.getElementById('prize-canvas');
	canctx = canvas.getContext('2d');

	centerCan = document.getElementById('center-canvas');
	centerCtx = centerCan.getContext('2d');

	x = 250;
	y = 250;

	$table = $('#prize-canvas');

	// 这里是奖品的所有内容
	prize = ['大号QQ公仔', '中号QQ公仔', '钥匙扣', '小号QQ公仔', '谢谢参与'];

	// 【高亮！！】这里是抽奖概率大小的百分比！！
	ratio2 = [0.05, 0.15, 0.25, 0.25, 0.3];

	centerCan.addEventListener('click', onMouseClick, false);

	drawTurntable();
	drawPrize();
	drawCenter();
}




















