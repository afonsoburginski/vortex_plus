/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateMovie = /* GraphQL */ `subscription OnCreateMovie($filter: ModelSubscriptionMovieFilterInput) {
  onCreateMovie(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMovieSubscriptionVariables,
  APITypes.OnCreateMovieSubscription
>;
export const onUpdateMovie = /* GraphQL */ `subscription OnUpdateMovie($filter: ModelSubscriptionMovieFilterInput) {
  onUpdateMovie(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMovieSubscriptionVariables,
  APITypes.OnUpdateMovieSubscription
>;
export const onDeleteMovie = /* GraphQL */ `subscription OnDeleteMovie($filter: ModelSubscriptionMovieFilterInput) {
  onDeleteMovie(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMovieSubscriptionVariables,
  APITypes.OnDeleteMovieSubscription
>;
export const onCreateSeason = /* GraphQL */ `subscription OnCreateSeason($filter: ModelSubscriptionSeasonFilterInput) {
  onCreateSeason(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSeasonSubscriptionVariables,
  APITypes.OnCreateSeasonSubscription
>;
export const onUpdateSeason = /* GraphQL */ `subscription OnUpdateSeason($filter: ModelSubscriptionSeasonFilterInput) {
  onUpdateSeason(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSeasonSubscriptionVariables,
  APITypes.OnUpdateSeasonSubscription
>;
export const onDeleteSeason = /* GraphQL */ `subscription OnDeleteSeason($filter: ModelSubscriptionSeasonFilterInput) {
  onDeleteSeason(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSeasonSubscriptionVariables,
  APITypes.OnDeleteSeasonSubscription
>;
export const onCreateEpisode = /* GraphQL */ `subscription OnCreateEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
  onCreateEpisode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEpisodeSubscriptionVariables,
  APITypes.OnCreateEpisodeSubscription
>;
export const onUpdateEpisode = /* GraphQL */ `subscription OnUpdateEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
  onUpdateEpisode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEpisodeSubscriptionVariables,
  APITypes.OnUpdateEpisodeSubscription
>;
export const onDeleteEpisode = /* GraphQL */ `subscription OnDeleteEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
  onDeleteEpisode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEpisodeSubscriptionVariables,
  APITypes.OnDeleteEpisodeSubscription
>;
