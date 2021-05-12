import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import tweetsReducer from './tweets/tweets-reducer'
import tagsReducer from './tags/tags-reducer'
import tweetReducer from './one-tweet/one-tweet-reducer'
import { TweetsSaga } from './tweets/tweets-sagas'
import { TweetSaga } from './one-tweet/one-tweet-sagas'
import { TagsSaga } from './tags/tags-sagas'

/* --- BIG REDUCER --- */
export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
})

/* --- BIG SAGA --- */
export const rootSaga = function* () {
    yield all([TweetsSaga(), TagsSaga(), TweetSaga()])
}
