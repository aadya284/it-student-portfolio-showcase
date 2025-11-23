"use client"

import { useState, useEffect } from "react"

export function useTypingEffect(
  text: string,
  speed: number = 100,
  loop: boolean = false,
  pause: number = 1000
) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) {
      setDisplayedText("")
      setIsComplete(false)
      return
    }

    let index = 0
    let deleting = false
    let mounted = true
    let timeout: ReturnType<typeof setTimeout> | null = null

    const clear = () => {
      if (timeout) clearTimeout(timeout)
    }

    const tick = () => {
      if (!mounted) return

      if (!deleting) {
        if (index < text.length) {
          index++
          setDisplayedText(text.slice(0, index))
          setIsComplete(false)
          timeout = setTimeout(tick, speed)
        } else {
          setIsComplete(true)
          if (loop) {
            timeout = setTimeout(() => {
              deleting = true
              timeout = setTimeout(tick, Math.max(50, Math.floor(speed / 2)))
            }, pause)
          }
        }
      } else {
        if (index > 0) {
          index--
          setDisplayedText(text.slice(0, index))
          setIsComplete(false)
          timeout = setTimeout(tick, Math.max(50, Math.floor(speed / 2)))
        } else {
          deleting = false
          timeout = setTimeout(tick, 500)
        }
      }
    }

    // start
    setDisplayedText("")
    setIsComplete(false)
    timeout = setTimeout(tick, speed)

    return () => {
      mounted = false
      clear()
    }
  }, [text, speed, loop, pause])

  return { displayedText, isComplete }
}