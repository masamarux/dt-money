import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { SizesContext } from '../../contexts/SizesContext'
import { useSummary } from '../../hooks/useSummary'
import {
  priceFormatter,
  longDateFormatter,
  shortDateFormatter,
} from '../../utils/formatter'

import { SummaryCard, SummaryContainer, Swiper, SwiperSlide } from './styles'
import 'swiper/css'

export function Summary() {
  const width = useContextSelector(SizesContext, (context) => context.width)
  const summary = useSummary()

  return (
    <SummaryContainer>
      {width > 878 ? (
        <>
          <SummaryCard>
            <header>
              <span>Entradas</span>
              <ArrowCircleUp size={32} color="#00b37e" />
            </header>
            <strong>{priceFormatter.format(summary.income)}</strong>
          </SummaryCard>
          <SummaryCard>
            <header>
              <span>Saída</span>
              <ArrowCircleDown size={32} color="#f75a68" />
            </header>
            <strong>{priceFormatter.format(summary.outcome)}</strong>
          </SummaryCard>
          <SummaryCard variant="green">
            <header>
              <span>Total</span>
              <CurrencyDollar size={32} color="#fff" />
            </header>
            <strong>{priceFormatter.format(summary.total)}</strong>
          </SummaryCard>
        </>
      ) : (
        <Swiper slidesPerView={'auto'} spaceBetween={24} centeredSlides>
          <SwiperSlide>
            <SummaryCard>
              <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#00b37e" />
              </header>
              <strong>{priceFormatter.format(summary.income)}</strong>
              <footer>
                Última entrada em{' '}
                {summary.incomeDate &&
                  longDateFormatter.format(new Date(summary.incomeDate))}
              </footer>
            </SummaryCard>
          </SwiperSlide>

          <SwiperSlide>
            <SummaryCard>
              <header>
                <span>Saída</span>
                <ArrowCircleDown size={32} color="#f75a68" />
              </header>
              <strong>{priceFormatter.format(summary.outcome)}</strong>
              <footer>
                Última saída em{' '}
                {summary.outcomeDate &&
                  longDateFormatter.format(new Date(summary.outcomeDate))}
              </footer>
            </SummaryCard>
          </SwiperSlide>

          <SwiperSlide>
            <SummaryCard variant="green">
              <header>
                <span>Total</span>
                <CurrencyDollar size={32} color="#fff" />
              </header>
              <strong>{priceFormatter.format(summary.total)}</strong>
              <footer>
                De{' '}
                {summary.firstDate &&
                  shortDateFormatter.format(new Date(summary.firstDate))}{' '}
                até{' '}
                {summary.lastDate &&
                  shortDateFormatter.format(new Date(summary.lastDate))}
              </footer>
            </SummaryCard>
          </SwiperSlide>
        </Swiper>
      )}
    </SummaryContainer>
  )
}
