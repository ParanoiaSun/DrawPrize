
ratio1 = [0.1, 0.2, 0.25, 0.25, 0.2];

// 绘制转盘
function drawTurntable () {

	canctx.save();
	canctx.beginPath();
	canctx.fillStyle = '#ff6f5d';
	canctx.arc(x, y, 250, 0, 2 * Math.PI, false);
	canctx.fill();

	canctx.beginPath();
	canctx.fillStyle = '#fc4a42';
	canctx.arc(x, y, 240, 0, 2 * Math.PI, false);
	canctx.fill();
	canctx.restore();

	canctx.save();
	canctx.translate(x, y);
	for (var i = 0; i < 24; i++) {
		canctx.rotate(Math.PI / 12);
		canctx.beginPath();
		canctx.fillStyle = i % 2 ===0 ? '#fffbfc' : '#fde8ba';
		canctx.arc(0, 230, 5, 0, 2 * Math.PI, false);
		canctx.fill();
	}
	canctx.restore();
}

// 绘制奖品
function drawPrize () {
	var radius1 = 220;
	var radius2 = 190;

	var angle1 = 0;
	var angle2 = 0;

	var color1 = ['#f0a19c', '#e6e6e6', '#4fb6be', '#e6e6e6', '#4fb6be'];
	var color2 = ['#f9a8a3', '#ffffff', '#59cbd6', '#ffffff', '#59cbd6'];
	canctx.save();
	for (var i = 0; i < prize.length; i++) {
		canctx.beginPath();
		canctx.fillStyle = color1[i];
		canctx.moveTo(x, y);
		canctx.lineTo(x + radius1 * Math.cos(angle1), y + radius1 * Math.sin(angle1));
		canctx.moveTo(x + radius1 * Math.cos(angle1), y + radius1 * Math.sin(angle1));
		canctx.arc(x, y, radius1, angle1, angle1 + 2 * Math.PI * ratio1[i] / getSum(ratio1), false);
		canctx.lineTo(x, y);
		canctx.fill();
		angle1 += 2 * Math.PI * ratio1[i] / getSum(ratio1);
	}

	for (var i = 0; i < prize.length; i++) {
		canctx.beginPath();
		canctx.fillStyle = color2[i];
		canctx.moveTo(x, y);
		canctx.lineTo(x + radius2 * Math.cos(angle2), y + radius2 * Math.sin(angle2));
		canctx.moveTo(x + radius2 * Math.cos(angle2), y + radius2 * Math.sin(angle2));
		canctx.arc(x, y, radius2, angle2, angle2 + 2 * Math.PI * ratio1[i] / getSum(ratio1), false);
		canctx.lineTo(x, y);
		canctx.fill();
		angle2 += 2 * Math.PI * ratio1[i] / getSum(ratio1);
	}
	canctx.restore();

	canctx.save();
	var paths = ['./image/1.png', './image/2.png', './image/3.png', './image/4.png', './image/5.png'];
	var images = [];

	for(var i = 0; i < 5; i++) {
		images[i] = new Image();
		images[i].src = './image/' + (i + 1) + '.png';
	}

	var scale = 0.5;
	var prize_x = [370, 270, 80, 150, 360];
	var prize_y = [270, 370, 270, 80, 120];
	images[0].onload = function () {
		canctx.drawImage(images[0], prize_x[0], prize_y[0], images[0].width * scale, images[0].height * scale);}	
	images[1].onload = function () {
		canctx.drawImage(images[1], prize_x[1], prize_y[1], images[1].width * scale, images[1].height * scale);}
	images[2].onload = function () {
		canctx.drawImage(images[2], prize_x[2], prize_y[2], images[2].width * scale, images[2].height * scale);}
	images[3].onload = function () {
		canctx.drawImage(images[3], prize_x[3], prize_y[3], images[3].width * scale, images[3].height * scale);}
	images[4].onload = function () {
		canctx.drawImage(images[4], prize_x[4], prize_y[4], images[4].width * scale, images[4].height * scale);}

	canctx.restore();
}

// 绘制中间的指针
function drawCenter () {
	centerCtx.save();

	centerCtx.beginPath();
	centerCtx.fillStyle = '#ff8600';
	centerCtx.moveTo(x, y - 120);
	centerCtx.lineTo(x - 40, y - 40);
	centerCtx.lineTo(x + 40, y - 40);
	centerCtx.lineTo(x, y - 120);
	centerCtx.fill();

	centerCtx.beginPath();
	centerCtx.fillStyle = '#ffb800';
	centerCtx.arc(x, y, 80, 0, 2 * Math.PI, false);
	centerCtx.fill();

	centerCtx.beginPath();
	centerCtx.fillStyle = '#f5eb6f';
	centerCtx.arc(x, y, 70, 0, 2 * Math.PI, false);
	centerCtx.fill();

	centerCtx.beginPath();
	centerCtx.fillStyle = '#ff9800';
	centerCtx.arc(x, y, 65, 0, 2 * Math.PI, false);
	centerCtx.fill();
	centerCtx.restore();

	centerCtx.save();
	centerCtx.font = 'bold 30px Helvetica';
	centerCtx.textBaseline = 'hanging';
	centerCtx.strokeStyle = '#777777';
	centerCtx.fillStyle = '#ffe154';
	centerCtx.fillText('开始', x - 30, y - 30);
	centerCtx.strokeText('开始', x - 30, y - 30);
	centerCtx.fillText('抽奖', x - 30, y + 10);
	centerCtx.strokeText('抽奖', x - 30, y + 10);
	centerCtx.restore();

}