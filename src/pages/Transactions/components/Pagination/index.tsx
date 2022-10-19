import { CaretLeft, CaretRight } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import {
  PaginationContainer,
  NavigationButton,
  PageNumberButton,
} from './styles'

export function Pagination() {
  const pagination = useContextSelector(
    TransactionContext,
    (context) => context.pagination,
  )
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => context.fetchTransactions,
  )

  async function handlePageChange(page: number) {
    await fetchTransactions({ page })
  }

  return (
    <PaginationContainer>
      <NavigationButton
        disabled={pagination.actualPage - 1 === 0}
        onClick={() => handlePageChange(pagination.actualPage - 1)}
      >
        <CaretLeft weight="bold" size={24} />
      </NavigationButton>
      {pagination &&
        pagination.pages.map((page, index) => {
          if (
            page === pagination.actualPage + 1 ||
            page === pagination.actualPage - 1 ||
            page === pagination.actualPage
          ) {
            return (
              <PageNumberButton
                isActive={pagination.actualPage === page}
                key={`${index}-link`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PageNumberButton>
            )
          }
          return null
        })}
      <NavigationButton
        disabled={pagination.actualPage + 1 > pagination.totalPages}
        onClick={() => handlePageChange(pagination.actualPage + 1)}
      >
        <CaretRight weight="bold" size={24} />
      </NavigationButton>
    </PaginationContainer>
  )
}
