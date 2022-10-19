import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface FetchTransactionsProps {
  query?: string
  page?: number
}

interface PaginationProps {
  actualPage: number
  totalPages: number
  pages: number[]
  count: number
}

interface TransactionContextType {
  transactions: Transaction[]
  pagination: PaginationProps
  fetchTransactions: ({ page, query }: FetchTransactionsProps) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType,
)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(
    [] as Transaction[],
  )
  const [pagination, setPagination] = useState<PaginationProps>({
    actualPage: 1,
    totalPages: 1,
    pages: [1],
    count: 0,
  })
  const limit = 10

  const fetchTransactions = useCallback(
    async ({ query, page }: FetchTransactionsProps = {}) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
          _page: page || 1,
          _limit: limit,
        },
      })

      const totalPages = Math.ceil(
        Number(response.headers['x-total-count']) / limit,
      )

      const pages = [...Array(totalPages).keys()].map((x) => ++x)

      const paginationObj = {
        actualPage: page || 1,
        totalPages,
        pages,
        count: Number(response.headers['x-total-count']),
      }

      setPagination(paginationObj)
      setTransactions(response.data)
    },
    [],
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type } = data

      const response = await api.post('transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })

      const totalPages = Math.ceil(
        Number(response.headers['x-total-count']) / limit,
      )

      const pages = [...Array(totalPages).keys()].map((x) => ++x)

      const paginationObj = {
        actualPage: pagination.actualPage || 1,
        totalPages,
        pages,
        count: Number(response.headers['x-total-count']),
      }

      setPagination(paginationObj)
      setTransactions((prevState) => [response.data, ...prevState])
    },
    [pagination],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        pagination,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
