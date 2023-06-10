import { useState, useEffect, useRef } from 'react'

import { FetchData } from './types/twitch'
import { getStreams } from './services/twitchApi'

import Card from './components/Card'
import { _cardError, _cardWrapper } from './styles/card.css'

export default function App (): JSX.Element {
  const chivato = useRef<HTMLSpanElement>(null)
  const [streams, setStreams] = useState<FetchData>()
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (typeof streams !== 'undefined' && typeof streams?.pagination.cursor === 'undefined') return

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const prevStreams = streams?.content ?? []
        const cursor = streams?.pagination.cursor

        getStreams(cursor)
          .then(data => { setStreams({ content: [...prevStreams, ...data.data], pagination: data.pagination }) })
          .catch(_ => { setError(true) })
      }
    }, {
      rootMargin: '2000px'
    })

    if (chivato.current === null) {
      return
    }

    observer.observe(chivato.current)

    return () => {
      observer.disconnect()
    }
  }, [streams])

  return (
    <>
      <div className={_cardWrapper}>
        {streams?.content.map((el, index) => {
          return <Card key={index} streamData={el} />
        })}
      </div>
      {error && <div className={_cardError}><h1>Something went <span style={{ color: '#ff7878' }}>wrong</span>!</h1><h2>Could not load streams.</h2></div>}
      <span ref={chivato}>&#8203;</span>
    </>
  )
}
