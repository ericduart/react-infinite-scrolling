import { TwitchStream } from '../types/twitch'
import { _card, _cardSection, _cardSectionImage, _cardImg, _cardLink, _cardInfo, _cardViewers } from '../styles/card.css'
import { getRelativeTime } from '../utils/relativeTime'
import { Langs } from '../utils/langs'

export default function Card ({ streamData }: { streamData: TwitchStream }) {
  const getLanguage = (isoLang: string): string | undefined => {
    const lang = Langs.find(el => el.code === isoLang)?.name

    return lang?.split(';')[0]
  }

  return (
    <>
      <div className={_card}>
        <div className={_cardSection}>
          <span className={_cardInfo}>Title</span>
          <h2>{streamData.title}</h2>
          <div style={{ margin: '20px 0' }}>
            <span className={_cardInfo} style={{ marginTop: '20px' }}>Streamer</span>
            <h2>{streamData.user_login}</h2>
            <span className={_cardInfo}>Game</span>
            <h2>{streamData.game_name}</h2>
          </div>
          <p><span className={_cardViewers}>{streamData.viewer_count}</span> current viewers.</p>
          <p>Started {getRelativeTime(streamData.started_at)}.</p>
          <p>{getLanguage(streamData.language)}.</p>
          <p><a href={`https://www.twitch.tv/${streamData.user_login}`} target='_blank' rel='noreferrer' className={_cardLink}>Go to twitch.</a></p>
        </div>
        <div className={_cardSectionImage}>
          <span className={_cardInfo}>Thumbnail</span>
          <img src={streamData.thumbnail_url.replace('{width}', '1920').replace('{height}', '1080')} alt='Thumbnail of the stream' width={500} height={320} className={`${_cardImg} skeleton`} loading='lazy' />
        </div>
      </div>
    </>
  )
}
