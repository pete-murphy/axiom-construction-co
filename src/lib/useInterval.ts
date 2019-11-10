import { useEffect, useRef } from "react"

export type Effect = () => void

export const useInterval = (fn: Effect, delay: number) => {
  const fnRef = useRef<Effect>()

  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  useEffect(() => {
    const id = setInterval(fnRef.current, delay)
    return () => clearInterval(id)
  }, [delay])
}
