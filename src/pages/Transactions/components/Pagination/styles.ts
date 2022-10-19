import styled, { css } from 'styled-components'

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 2.5rem;

  margin-bottom: 1rem;

  @media (max-width: 878px) {
    margin-top: 2rem;
  }
`
const BaseButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  border: 0;
  border-radius: 6px;
`

export const NavigationButton = styled(BaseButton)`
  background-color: transparent;

  color: ${(props) => props.theme['green-500']};

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme['gray-600']};
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['green-300']};
  }
`

interface PageNumberButtonProps {
  isActive?: boolean
}

export const PageNumberButton = styled(BaseButton)<PageNumberButtonProps>`
  background-color: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-400']};

  &:hover {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['gray-100']};
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${(props) => props.theme['green-700']};
      color: ${(props) => props.theme['gray-100']};
    `}
`
