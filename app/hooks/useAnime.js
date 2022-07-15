import { getAllAnimes } from '@services/anime'
import { seasonInfo } from '@utils'
import React, { useState } from 'react'

const useAnime = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { current, currentYear, next, nextYear } = seasonInfo()

    const getAllAnimesReq = async () => {
        try {
            setLoading(true)
            return await getAllAnimes({
                query: `query ($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int) {
                            trending: Page(page: 1, perPage: 20) {
                                media(type: ANIME, sort: TRENDING_DESC) {
                                    ...media
                                }
                            }
                            season: Page(page: 1, perPage: 20) {
                                media(season: $season, seasonYear: $seasonYear, type: ANIME, sort: POPULARITY_DESC) {
                                    ...media
                                }
                            }
                            nextSeason: Page(page: 1, perPage: 20) {
                                media(season: $nextSeason, seasonYear: $nextYear, type: ANIME, sort: POPULARITY_DESC) {
                                    ...media
                                }
                            }
                            popular: Page(page: 1, perPage: 20) {
                                media(type: ANIME, sort: POPULARITY_DESC) {
                                  ...media
                                }
                            }
                        }
                        
                        fragment media on Media {
                            id
                            title {
                            english
                            native
                            }
                            description
                            episodes
                            type
                            coverImage {
                            extraLarge
                            color
                            }
                            genres
                            trailer {
                            id
                            site
                            thumbnail
                            }
                            seasonYear
                            episodes
                            averageScore
                            staff(sort: RELEVANCE, perPage: 1) {
                                edges {
                                    role
                                    node {
                                        name {
                                            full
                                        }
                                        image {
                                            large
                                        }
                                        primaryOccupations
                                    }
                                }
                            }
                            studios(isMain: true) {
                                edges {
                                    node {
                                        name
                                    }
                                }
                            }
                        }
                  `,
                variables: {
                    season: current(),
                    seasonYear: currentYear(),
                    nextSeason: next(),
                    nextYear: currentYear()
                }
            })
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return {
        getAllAnimesReq,
        loading,
        error,
    }
}

export default useAnime
