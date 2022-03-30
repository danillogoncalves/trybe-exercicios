import fetchApiReddit from "../services/fetchApiReddit";

export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_SUCCESS = 'RESPONSE_SUCCESS';
export const RESPONSE_FAILURE = 'RESPONSE_FAILURE';

const requestApi = () => ({type: REQUEST_API});

const responseSuccess = (object) => ({type: RESPONSE_SUCCESS, subredditObject: object});

const responseFailure = (error) => ({type: RESPONSE_FAILURE, errorMessage: error})

export function fetchApiRedditAction(subreddit) {
  return (dispatch) => {
    dispatch(requestApi());
    return fetchApiReddit(subreddit)
    .then(
      (object) => dispatch(responseSuccess(object)),
      (error) => dispatch(responseFailure(error))
    );
  }
}
