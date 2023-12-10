/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createMovie = /* GraphQL */ `mutation CreateMovie(
  $input: CreateMovieInput!
  $condition: ModelMovieConditionInput
) {
  createMovie(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMovieMutationVariables,
  APITypes.CreateMovieMutation
>;
export const updateMovie = /* GraphQL */ `mutation UpdateMovie(
  $input: UpdateMovieInput!
  $condition: ModelMovieConditionInput
) {
  updateMovie(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMovieMutationVariables,
  APITypes.UpdateMovieMutation
>;
export const deleteMovie = /* GraphQL */ `mutation DeleteMovie(
  $input: DeleteMovieInput!
  $condition: ModelMovieConditionInput
) {
  deleteMovie(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMovieMutationVariables,
  APITypes.DeleteMovieMutation
>;
export const createSeason = /* GraphQL */ `mutation CreateSeason(
  $input: CreateSeasonInput!
  $condition: ModelSeasonConditionInput
) {
  createSeason(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSeasonMutationVariables,
  APITypes.CreateSeasonMutation
>;
export const updateSeason = /* GraphQL */ `mutation UpdateSeason(
  $input: UpdateSeasonInput!
  $condition: ModelSeasonConditionInput
) {
  updateSeason(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSeasonMutationVariables,
  APITypes.UpdateSeasonMutation
>;
export const deleteSeason = /* GraphQL */ `mutation DeleteSeason(
  $input: DeleteSeasonInput!
  $condition: ModelSeasonConditionInput
) {
  deleteSeason(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSeasonMutationVariables,
  APITypes.DeleteSeasonMutation
>;
export const createEpisode = /* GraphQL */ `mutation CreateEpisode(
  $input: CreateEpisodeInput!
  $condition: ModelEpisodeConditionInput
) {
  createEpisode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEpisodeMutationVariables,
  APITypes.CreateEpisodeMutation
>;
export const updateEpisode = /* GraphQL */ `mutation UpdateEpisode(
  $input: UpdateEpisodeInput!
  $condition: ModelEpisodeConditionInput
) {
  updateEpisode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEpisodeMutationVariables,
  APITypes.UpdateEpisodeMutation
>;
export const deleteEpisode = /* GraphQL */ `mutation DeleteEpisode(
  $input: DeleteEpisodeInput!
  $condition: ModelEpisodeConditionInput
) {
  deleteEpisode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEpisodeMutationVariables,
  APITypes.DeleteEpisodeMutation
>;
