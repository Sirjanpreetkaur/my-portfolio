// TextToSpeech.js
import React from "react";

const TextToSpeech = ({ text, rate = 1, pitch = 1, volume = 1 }) => {
  // Function to trigger speech synthesis
  const speak = () => {
    // Check if the API is supported
    if ("speechSynthesis" in window) {
      // Create a new utterance
      const utterance = new SpeechSynthesisUtterance(text);

      // Set optional properties
      utterance.rate = rate;     // Speed of speech (default is 1)
      utterance.pitch = pitch;   // Tone of speech (default is 1)
      utterance.volume = volume; // Volume (0 to 1, default is 1)

      // Choose a female voice if available
      const voices = window.speechSynthesis.getVoices();
      // Attempt to find a voice with "female" in its name
      const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female"));
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      } else if (voices.length > 0) {
        // Fallback to the first available voice if no female voice is found
        utterance.voice = voices[0];
      }

      // Speak the utterance
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech functionality.");
    }
  };

  // Function to cancel the speech
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
