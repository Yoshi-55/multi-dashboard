import { useState, useEffect } from "react";
import { WORK_TIME, BREAK_TIME } from "./constants";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [sessionStart, setSessionStart] = useState<number | null>(null);
  const [pausedTime, setPausedTime] = useState<number | null>(null);

  const playAlert = () => {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.5
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  useEffect(() => {
    if (!isRunning) {
      if (sessionStart && pausedTime === null) {
        setPausedTime(Date.now());
      }
      return;
    }

    const now = Date.now();
    let actualSessionStart = sessionStart;

    if (!actualSessionStart) {
      actualSessionStart = now;
      setSessionStart(now);
    } else if (pausedTime) {
      const pauseDuration = now - pausedTime;
      actualSessionStart = actualSessionStart + pauseDuration;
      setSessionStart(actualSessionStart);
      setPausedTime(null);
    }

    const sessionDuration = isWorkSession ? WORK_TIME : BREAK_TIME;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - actualSessionStart) / 1000);
      const remaining = sessionDuration - elapsed;

      if (remaining <= 0) {
        playAlert();
        if (isWorkSession) {
          setSessionsCompleted((s) => s + 1);
          setIsWorkSession(false);
        } else {
          setIsWorkSession(true);
        }
        setSessionStart(null);
        setPausedTime(null);
      } else {
        setTimeLeft(remaining);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning, isWorkSession]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(WORK_TIME);
    setIsWorkSession(true);
    setSessionsCompleted(0);
    setSessionStart(null);
    setPausedTime(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return {
    isRunning,
    timeLeft,
    isWorkSession,
    sessionsCompleted,
    handleStart,
    handleStop,
    handleReset,
    formatTime,
  };
};
