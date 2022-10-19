import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'

interface summaryDates {
  incomeDate?: string
  outcomeDate?: string
  lastDate?: string
  firstDate?: string
}

export function useSummary() {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions,
  )

  const dates: summaryDates = {}

  dates.incomeDate = transactions.find((transaction) => {
    return transaction.type === 'income'
  })?.createdAt
  dates.outcomeDate = transactions.find((transaction) => {
    return transaction.type === 'outcome'
  })?.createdAt

  dates.lastDate = transactions[0] && transactions[0].createdAt
  const reversedTrasactions = [...transactions].reverse()
  dates.firstDate = reversedTrasactions[0] && reversedTrasactions[0].createdAt

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return { ...summary, ...dates }
}
