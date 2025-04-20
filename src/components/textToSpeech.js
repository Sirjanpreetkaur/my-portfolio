// TextToSpeech.js
import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text, rate = 1, pitch = 1, volume = 1 }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Clean up on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = () => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support text-to-speech functionality.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    const setFemaleVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(v => /female|woman/i.test(v.name));
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      // Start speaking
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      setIsPaused(false);
    };

    let voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        setFemaleVoiceAndSpeak();
        window.speechSynthesis.onvoiceschanged = null;
      };
    } else {
      setFemaleVoiceAndSpeak();
    }

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
  };

  const pauseSpeech = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const resumeSpeech = () => {
    window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <div className="text-to-speech">
      {!isSpeaking && (
        <button onClick={speak}>
          Listen
        </button>
      )}
      {isSpeaking && !isPaused && (
        <button onClick={pauseSpeech}>
          Pause
        </button>
      )}
      {isSpeaking && isPaused && (
        <button onClick={resumeSpeech}>
          Resume
        </button>
      )}
      {isSpeaking && (
        <button onClick={stopSpeech} style={{ marginLeft: "10px" }}>
          Stop
        </button>
      )}
    </div>
  );
};

export default TextToSpeech;
