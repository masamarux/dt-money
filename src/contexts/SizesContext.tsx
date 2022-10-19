import { ReactNode, useState, useLayoutEffect, useCallback } from 'react'
import { createContext } from 'use-context-selector'

interface SizesContextType {
  height: number
  width: number
}

export const SizesContext = createContext<SizesContextType>(
  {} as SizesContextType,
)

interface SizesProviderProps {
  children: ReactNode
}

export function SizesProvider({ children }: SizesProviderProps) {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const updateSize = useCallback(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize)

    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [updateSize])

  return (
    <SizesContext.Provider
      value={{
        width,
        height,
      }}
    >
      {children}
    </SizesContext.Provider>
  )
}
