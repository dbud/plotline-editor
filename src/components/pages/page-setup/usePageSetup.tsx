import { createContext, useContext } from 'react'

type Margins = {
  top: number
  right: number
  bottom: number
  left: number
}

type PageDimensions = {
  width: number
  height: number
}

type PageSetupState = {
  margins: Margins
  dimensions: PageDimensions
}

export const DEFAULT_PAGE_SETUP: PageSetupState = {
  margins: {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  },
  dimensions: {
    width: 700,
    height: 900,
  },
}

export type PageSetupUpdate = Partial<PageSetupState> & {
  margins?: Partial<PageSetupState['margins']>
  dimensions?: Partial<PageSetupState['dimensions']>
}

type PageSetupContextType = PageSetupState & {
  updatePageSetup: (update: PageSetupUpdate) => void
}

export const PageSetupContext = createContext<PageSetupContextType | undefined>(
  undefined,
)

export function usePageSetup(): PageSetupContextType {
  const context = useContext(PageSetupContext)
  if (!context) {
    throw new Error('usePageSetup must be used within a PageSetupProvider')
  }
  return context
}
