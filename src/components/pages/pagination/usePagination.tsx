import { createContext, useContext } from 'react'

type PaginationState = {
  numberOfPages: number
  gap: number
}

export const DEFAULT_PAGINATION_STATE: PaginationState = {
  numberOfPages: 1,
  gap: 20,
}

export type PaginationStateUpdate = Partial<PaginationState>

type PaginationContextType = PaginationState & {
  updatePagination: (update: PaginationStateUpdate) => void
}

export const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined,
)

export function usePagination(): PaginationContextType {
  const context = useContext(PaginationContext)
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}
