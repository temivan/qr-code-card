import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import App from './App'

describe('App', () => {
  it('has exactly one main landmark', () => {
    render(<App />)

    expect(screen.getAllByRole('main')).toHaveLength(1)
  })

  it('has a level-one heading describing the challenge', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Improve your front-end skills by building projects',
      }),
    ).toBeInTheDocument()
  })

  it('presents the card as an article inside main', () => {
    render(<App />)

    expect(within(screen.getByRole('main')).getByRole('article')).toBeInTheDocument()
  })

  it('shows the QR code image with a meaningful text alternative', () => {
    render(<App />)

    expect(
      screen.getByRole('img', { name: 'QR code linking to frontendmentor.io' }),
    ).toBeInTheDocument()
  })

  it('explains what scanning the QR code does', () => {
    render(<App />)

    expect(
      screen.getByText(
        'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
      ),
    ).toBeInTheDocument()
  })

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<App />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
