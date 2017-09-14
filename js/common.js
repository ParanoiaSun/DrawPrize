
function getSum (array) {
	var result = 0;
	for(var i = 0; i < array.length; i++)
		result += array[i];
	return result;
}

function onMouseClick (e) {
	if(istrue)
		return;

	if(isClickOn(e)) {
		var result = randomPrize();
		switch (result) {
			case 0 : 
				tableRotate(252, '恭喜您获得' + prize[0]);
				break;
			case 1 : 
				tableRotate(198, '恭喜您获得' + prize[1]);
				break;
			case 2 : 
				tableRotate(117, '恭喜您获得' + prize[2]);
				break;
			case 3 : 
				tableRotate(27, '恭喜您获得' + prize[3]);
				break;
			case 4 : 
				tableRotate(306, prize[4]);
				break;
		}
	}
}

function isClickOn (ev) {
	var x, y;
  	if (ev.layerX || ev.layerX == 0) {
    	x = ev.layerX;
    	y = ev.layerY;
  	} else if (ev.offsetX || ev.offsetX == 0) { // Opera
    	x = ev.offsetX;
    	y = ev.offsetY;
  	}
  	var l = (x - 250) * (x - 250) + (y - 250) * (y - 250);
  	return l <= 4900 ? true : false;
}

function tableRotate (angle, text) {
	istrue = true;
	$table.stopRotate();
	$table.rotate({
		angle: 0,
		duration: 4000, //旋转时间
		animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
		callback: function() {
			istrue = false; // 标志为 执行完毕
			alert(text);
		}
	});
}

// 0.05, 0.15, 0.25, 0.25, 0.3

function randomPrize () {
	var l = Math.random();
	if(l >= 0 && l < ratio2[0])
		return 0;
	else if(l >= ratio2[0] && l < ratio2[0] + ratio2[1])
		return 1;
	else if(l >= ratio2[0] + ratio2[1] && l < ratio2[0] + ratio2[1] + ratio2[2])
		return 2;
	else if(l >= ratio2[0] + ratio2[1] + ratio2[2] && l < ratio2[0] + ratio2[1] + ratio2[2] + ratio2[3])
		return 3;
	else if(l >= ratio2[0] + ratio2[1] + ratio2[2] + ratio2[3] && l < 1)
		return 4;
}




















