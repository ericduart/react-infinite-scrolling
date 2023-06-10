import { style } from '@vanilla-extract/css'

export const _cardWrapper = style({
  margin: 'auto',
  width: '95%',
  '@media': {
    'screen and (min-width: 1000px)': {
      width: '85%'
    },
    'screen and (min-width: 1200px)': {
      width: '70%'
    }
  }
})

export const _card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  height: 'auto',
  margin: '50px 0',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 1000px)': {
      flexDirection: 'row',
      height: '60vh',
      margin: 0
    }
  }
})

export const _cardSection = style({
  width: '100%',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1000px)': {
      width: '50%'
    }
  }
})

export const _cardSectionImage = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1000px)': {
      width: '50%',
      alignItems: 'normal'
    }
  }
})

export const _cardImg = style({
  width: '100%',
  height: 'auto',
  maxWidth: '500px'
})

export const _cardLink = style({
  textDecoration: 'none',
  width: 'fit-content',
  fontSize: '1.2rem',
  margin: '20px auto 0',
  padding: '20px 50px',
  display: 'block',
  backgroundColor: '#4afff0',
  color: '#222',
  transition: '.2s',
  ':hover': {
    padding: '20px 65px'
  },
  '@media': {
    'screen and (min-width: 1000px)': {
    }
  }
})

export const _cardInfo = style({
  color: '#4afff0',
  fontWeight: 'bolder',
  fontSize: '1.2rem'
})

export const _cardViewers = style({
  color: '#ff7878',
  fontWeight: 'bold'
})

export const _cardError = style({
  height: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})
