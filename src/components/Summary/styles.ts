import {
  Swiper as SwiperComponent,
  SwiperSlide as SwiperSlideComponent,
} from 'swiper/react'
import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;

  margin-top: -5rem;

  @media (min-width: 878px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    padding: 0 1.5rem;
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  footer {
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};

      footer {
        color: ${(props) => props.theme['gray-300']};
      }
    `}
`

export const Swiper = styled(SwiperComponent)`
  width: 100%;
`

export const SwiperSlide = styled(SwiperSlideComponent)`
  width: 75%;
  max-width: 375px;
  min-width: 250px;
`
