import { HelixStreams } from '../types/twitch'
import { TWITCH_CLIENT_ID, TWITCH_TOKEN } from '../utils/getEnv'

export const getStreams = async (page: string | undefined): Promise<HelixStreams> => {
  const res = await fetch(`https://api.twitch.tv/helix/streams?after=${page ?? ''}`, {
    headers: {
      Authorization: `Bearer ${TWITCH_TOKEN}`,
      'Client-Id': TWITCH_CLIENT_ID
    }
  })

  return await res.json()
}
