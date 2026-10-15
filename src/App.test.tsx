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

  it('credits Frontend Mentor for the challenge in the footer', () => {
    render(<App />)

    expect(
      within(screen.getByRole('contentinfo')).getByRole('link', {
        name: 'Frontend Mentor',
      }),
    ).toHaveAttribute('href', 'https://www.frontendmentor.io?ref=challenge')
  })

  it('credits the developer with a link to their GitHub profile', () => {
    render(<App />)

    expect(
      within(screen.getByRole('contentinfo')).getByRole('link', {
        name: 'temivan',
      }),
    ).toHaveAttribute('href', 'https://github.com/temivan')
  })

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<App />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
