<template>
    <main>
        <div class="robot-face-container">
            <robot-face ref="robotFace" />
        </div>
        <form @submit.prevent="voicechat">
            <div>
                <button @click="talkWithRobot()" type="submit" class="voice-btn">Press to speak</button>
            </div>
        </form>
    </main>
</template>

<script>
import RobotFace from "../components/RobotFace.vue";

export default {
	data() {
		return {
			runtimeTranscription_: "",
			transcription_: [],
			lang_: "en-US",
			msg: "",
		};
	},
	components: {
		RobotFace,
	},
	methods: {
		talkWithRobot: function () {
			this.$refs.robotFace.botListens();
			this.startSpeechToTxt();
		},
		startSpeechToTxt() {
			// initialisation of voicereco
			window.SpeechRecognition =
				window.SpeechRecognition || window.webkitSpeechRecognition;
			const recognition = new window.SpeechRecognition();
			recognition.lang = this.lang_;
			recognition.interimResults = true;
			// event current voice reco word
			recognition.addEventListener("result", (event) => {
				const text = Array.from(event.results)
					.map((result) => result[0])
					.map((result) => result.transcript)
					.join("");
				this.runtimeTranscription_ = text;
				this.msg = this.runtimeTranscription_;
			});
			// end of transcription
			recognition.addEventListener("end", () => {
				this.predict();
				this.transcription_.push(this.runtimeTranscription_);
				this.runtimeTranscription_ = "";
				recognition.stop();
			});
			recognition.start();
		},
		startTxtToSpeech(pred) {
			// start speech to txt

			let msg = pred;
			var utterance = new SpeechSynthesisUtterance(msg);
			window.speechSynthesis.speak(utterance);
			this.$refs.robotFace.botTalks(msg.length);
		},
		async predict() {
			let pred = {
				sentence: this.msg,
			};

			let res = await fetch("/rest/predict", {
				method: "POST",
				body: JSON.stringify(pred),
			});

			let prediction = await res.json();

			let newMessage = {
				text: pred.sentence.toString(),
				timestamp: Date.now(),
				prediction: prediction,
			};

			this.$store.commit("appendMessage", newMessage);
			this.startTxtToSpeech(prediction);
		},
	},
};
</script>

<style scoped>
main {
	display: flex;
	height: 90vh;
	flex-direction: column;
}

button {
	display: flex;
}

.robot-face-container {
	display: flex;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
	max-width: 300px;
	max-height: 300px;
}

.voice-btn {
	margin-top: 110px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
}
</style>