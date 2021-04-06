<template>
	<div class="window">
		<div class="robot">
			<div class="antenna-top"></div>
			<div class="antenna"></div>
			<div class="face">
				<div class="mouth"></div>
				<div class="eyes">
					<div class="eye">
						<div class="pupils" ref="pupils"></div>
					</div>
					<div class="eye">
						<div class="pupils" ref="pupils"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		moveEyes() {
			let pupils = document.getElementsByClassName("pupils");
			let counter = 0;
			let i = setInterval(function () {
				if (counter % 2 == 0) {
					for (let i = 0; i < pupils.length; i++) {
						pupils[i].classList.add("look-right");
					}
				} else {
					for (let i = 0; i < pupils.length; i++) {
						pupils[i].classList.remove("look-right");
					}
				}
				counter++;
			}, 5000);
		},
		botTalks(sentenceLength) {
			var pupils = document.getElementsByClassName("pupils");
			var mouth = document.getElementsByClassName("mouth");
			for (let i = 0; i < pupils.length; i++) {
				pupils[i].classList.remove("look-right");
				pupils[i].classList.add("look-straight");
			}
			mouth[0].classList.add("mouth-two");

			var counter = 0;
			var i = setInterval(function () {
				if (counter % 2 == 0) {
					mouth[0].classList.remove("mouth-two");
				} else {
					mouth[0].classList.add("mouth-two");
				}
				counter++;
				if (counter === Math.round(sentenceLength / 3)) {
                    mouth[0].classList.remove("mouth-two");
					clearInterval(i);
				}
			}, 200);

			setTimeout(this.endTalk, 1000);
		},
		botListens() {
			var pupils = document.getElementsByClassName("pupils");
			for (let i = 0; i < pupils.length; i++) {
				pupils[i].classList.remove("look-right");
				pupils[i].classList.add("look-straight");
			}
			setTimeout(this.endTalk, 4000);
		},
		endTalk() {
			var pupils = document.getElementsByClassName("pupils");
			for (let i = 0; i < pupils.length; i++) {
				pupils[i].classList.remove("look-straight");
			}
		},
	},
	beforeMount() {
		this.moveEyes();
	},
};
</script>

<style scoped>
.window {
	height: 400px;
	width: 400px;
}

.robot {
	height: 350px;
}

.face {
	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 25%;
	background: #807e7a;
	display: flex;
	justify-content: center;
	align-items: center;
}

.mouth {
	content: "";
	position: absolute;
	top: 180px;
	width: 150px;
	height: 70px;
	background: #dbd7d0;
	border-bottom-left-radius: 70px;
	border-bottom-right-radius: 70px;
}

.mouth-two {
	top: 210px;
	width: 150px;
	height: 20px;
	background: #dbd7d0;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
}

.eyes {
	position: relative;
	top: -40px;
	display: flex;
}

.eyes .eye {
	position: relative;
	width: 80px;
	height: 80px;
	display: block;
	background: #fff;
	margin: 0 15px;
	border-radius: 50%;
}

.pupils {
	content: "";
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 40px;
	height: 40px;
	background: #333;
	border-radius: 50%;
	left: 35%;
}

.look-right {
	left: 65%;
}

.look-straight {
	left: 50%;
}

.antenna {
	width: 10px;
	height: 70px;
	background: #807e7a;
	margin-left: 50%;
}

.antenna-top {
	width: 30px;
	height: 30px;
	background: #807e7a;
	margin-left: 47%;
	border-radius: 50%;
}
</style>