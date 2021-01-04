import { useState, useRef, useEffect } from 'react';

const useStopwatch = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef<NodeJS.Timeout>()

  const getFormattedTime = () => {
    let seconds = Math.round(timer % 60)
    let minutes = Math.round(timer / 60)
    let hours = Math.round(minutes / 60)

    return `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`
  }

  const handleStart = () => {
    if(isActive) return
    setIsActive(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    if(!countRef.current){
        console.debug('returning')
        return
    }
    clearInterval(countRef.current)
    setIsActive(false)
  }

  const handleResume = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    if(!countRef.current){
        return
    }
    clearInterval(countRef.current)
    setIsActive(false)
    setTimer(0)
  }

  return { timer, isActive, isPaused, getFormattedTime, start: handleStart, pause: handlePause, resume: handleResume, reset: handleReset}
}

export default useStopwatch