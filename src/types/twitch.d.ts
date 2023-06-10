export interface HelixStreams {
  data: TwitchStream[]
  pagination: Pagination
}

export interface TwitchStream {
  id: string
  user_id: string
  user_login: string
  user_name: string
  game_id: string
  game_name: string
  type: Type
  title: string
  viewer_count: number
  started_at: Date
  language: string
  thumbnail_url: string
  tag_ids: string[]
  tags: string[]
  is_mature: boolean
}

export enum Type {
  Live = 'live',
  All = 'all'
}

export interface Pagination {
  cursor: string | undefined
}

export interface FetchData {
  content: TwitchStream[]
  pagination: Pagination
}
