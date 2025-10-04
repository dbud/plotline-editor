import { useCallback, useState } from 'react'

import {
  DEFAULT_PAGE_SETUP,
  PageSetupContext,
  type PageSetupUpdate,
} from './usePageSetup'

export function PageSetupProvider({ children }: { children: React.ReactNode }) {
  const [pageSetup, setPageSetup] = useState(DEFAULT_PAGE_SETUP)

  const updatePageSetup = useCallback((update: PageSetupUpdate) => {
    setPageSetup(prev => ({
      ...prev,
      ...update,
      margins: { ...prev.margins, ...update.margins },
      dimensions: { ...prev.dimensions, ...update.dimensions },
    }))
  }, [])

  return (
    <PageSetupContext.Provider value={{ ...pageSetup, updatePageSetup }}>
      {children}
    </PageSetupContext.Provider>
  )
}
