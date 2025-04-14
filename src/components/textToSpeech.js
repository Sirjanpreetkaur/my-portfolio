// TextToSpeech.js
import React from "react";

const TextToSpeech = ({ text, rate = 1, pitch = 1, volume = 1 }) => {
  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;

      // Helper function to set the female voice and speak
      const setFemaleVoiceAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female"));
        if (femaleVoice) {
          utterance.voice = femaleVoice;
          window.speechSynthesis.speak(utterance);
        } else {
          // If still no female voice is found after voices have loaded, alert the user.
          alert("No female voice available on your browser.");
        }
      };

      let voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        // Voices aren't loaded yet, so wait for the voiceschanged event
        window.speechSynthesis.onvoiceschanged = () => {
          setFemaleVoiceAndSpeak();
          // Remove the event listener once voices are loaded to prevent multiple calls
          window.speechSynthesis.onvoiceschanged = null;
        };
      } else {
        setFemaleVoiceAndSpeak();
      }
    } else {
      alert("Sorry, your browser does not support text-to-speech functionality.");
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="text-to-speech">
      <button onClick={speak}>Listen</button>
      <button onClick={stopSpeech} style={{ marginLeft: "10px" }}>
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
