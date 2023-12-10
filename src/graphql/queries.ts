/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    title
    movies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $id: ID
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCategories(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      title
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getMovie = /* GraphQL */ `query GetMovie($id: ID!) {
  getMovie(id: $id) {
    id
    title
    poster
    year
    numberOfSeasons
    plot
    cast
    creator
    categoryID
    seasons {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMovieQueryVariables, APITypes.GetMovieQuery>;
export const listMovies = /* GraphQL */ `query ListMovies(
  $id: ID
  $filter: ModelMovieFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMovies(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMoviesQueryVariables,
  APITypes.ListMoviesQuery
>;
export const getSeason = /* GraphQL */ `query GetSeason($id: ID!) {
  getSeason(id: $id) {
    id
    name
    movieID
    movie {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      createdAt
      updatedAt
      __typename
    }
    episodes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSeasonQueryVariables, APITypes.GetSeasonQuery>;
export const listSeasons = /* GraphQL */ `query ListSeasons(
  $id: ID
  $filter: ModelSeasonFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSeasons(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      movieID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSeasonsQueryVariables,
  APITypes.ListSeasonsQuery
>;
export const getEpisode = /* GraphQL */ `query GetEpisode($id: ID!) {
  getEpisode(id: $id) {
    id
    title
    poster
    duration
    plot
    video
    seasonID
    season {
      id
      name
      movieID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEpisodeQueryVariables,
  APITypes.GetEpisodeQuery
>;
export const listEpisodes = /* GraphQL */ `query ListEpisodes(
  $id: ID
  $filter: ModelEpisodeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEpisodes(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEpisodesQueryVariables,
  APITypes.ListEpisodesQuery
>;
export const moviesByCategoryIDAndId = /* GraphQL */ `query MoviesByCategoryIDAndId(
  $categoryID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMovieFilterInput
  $limit: Int
  $nextToken: String
) {
  moviesByCategoryIDAndId(
    categoryID: $categoryID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MoviesByCategoryIDAndIdQueryVariables,
  APITypes.MoviesByCategoryIDAndIdQuery
>;
export const seasonsByMovieIDAndId = /* GraphQL */ `query SeasonsByMovieIDAndId(
  $movieID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSeasonFilterInput
  $limit: Int
  $nextToken: String
) {
  seasonsByMovieIDAndId(
    movieID: $movieID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      movieID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SeasonsByMovieIDAndIdQueryVariables,
  APITypes.SeasonsByMovieIDAndIdQuery
>;
export const episodesBySeasonIDAndId = /* GraphQL */ `query EpisodesBySeasonIDAndId(
  $seasonID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEpisodeFilterInput
  $limit: Int
  $nextToken: String
) {
  episodesBySeasonIDAndId(
    seasonID: $seasonID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EpisodesBySeasonIDAndIdQueryVariables,
  APITypes.EpisodesBySeasonIDAndIdQuery
>;
