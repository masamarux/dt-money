import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (max-width: 878px) {
    margin: 2rem auto 0;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-600']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 878px) {
    td {
      padding: 1.25rem 2rem;
      background-color: ${(props) => props.theme['gray-600']};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.td<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const TransactionsMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 0.75rem;
`

export const TransactionsMobileCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  padding: 1.25rem;
  gap: 0.75rem;

  & > div {
    header {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-300']};
      margin-bottom: 0.5rem;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;

    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }
`

export const PriceHighlightMobile = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};

  font-size: 1.25rem;
  font-weight: 700;
`

export const TransactionsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h4 {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-300']};
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};
  }
`
