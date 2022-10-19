import { CalendarBlank, TagSimple } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SizesContext } from '../../contexts/SizesContext'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { Pagination } from './components/Pagination'
import { SearchForm } from './components/SearchForm'
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
  TransactionsMobileContainer,
  TransactionsMobileCard,
  PriceHighlightMobile,
  TransactionsHeader,
} from './styles'

export function Transactions() {
  const width = useContextSelector(SizesContext, (context) => context.width)

  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions,
  )

  const pagination = useContextSelector(
    TransactionContext,
    (context) => context.pagination,
  )

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        {width < 878 && (
          <TransactionsHeader>
            <h4>Transações</h4>
            <span>{pagination.count} itens</span>
          </TransactionsHeader>
        )}

        <SearchForm />

        {width > 878 ? (
          <TransactionsTable>
            <tbody>
              {transactions &&
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </TransactionsTable>
        ) : (
          <TransactionsMobileContainer>
            {transactions &&
              transactions.map((transaction) => (
                <TransactionsMobileCard key={transaction.id}>
                  <div>
                    <header>{transaction.description}</header>
                    <PriceHighlightMobile variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlightMobile>
                  </div>

                  <footer>
                    <span>
                      <TagSimple size={16} />
                      {transaction.category}
                    </span>
                    <span>
                      <CalendarBlank size={16} />
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </span>
                  </footer>
                </TransactionsMobileCard>
              ))}
          </TransactionsMobileContainer>
        )}
        <Pagination />
      </TransactionsContainer>
    </div>
  )
}
