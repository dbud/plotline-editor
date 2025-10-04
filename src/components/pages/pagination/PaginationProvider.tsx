import { useCallback, useState } from 'react'

import { DEFAULT_PAGINATION_STATE, PaginationContext, type PaginationStateUpdate } from './usePagination'

export function PaginationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [pagination, setPagination] = useState(DEFAULT_PAGINATION_STATE)

  const updatePagination = useCallback((update: PaginationStateUpdate) => {
    setPagination(prev => ({ ...prev, ...update }))
  }, [])

  return (
    <PaginationContext.Provider value={{ ...pagination, updatePagination }}>
      {children}
    </PaginationContext.Provider>
  )
}
