import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
    IFetchAddTweet,
    TweetsTypeEnum,
} from './tweets-types'
import { OneTweetResponseType, TweetsResponseType } from "../../services/api/types";
import { apiTweets } from '../../services/api/APITweets'
import {
    addTweetAction,
    setFormTweetLoadingState,
    setTweetsAction,
    setTweetsLoadingState,
} from './tweets-action'
import { LoadingFormStateEnum, LoadingStateEnum, TweetType } from '../types'

// --- ПОЛУЧЕНИЕ ТВИТОВ  ---
const fetchTweetsRequest = function* () {
    yield put(setTweetsLoadingState(LoadingStateEnum.LOADING))
    try {
        const response: TweetsResponseType = yield call(apiTweets.getTweets)
        const tweets = response.data as TweetType[]
        yield put(setTweetsAction(tweets))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingStateEnum.ERROR))
    }
}
const watchFetchTweets = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_TWEETS, fetchTweetsRequest)
}

// --- ДОБАВЛЕНИЕ ТВИТА ---
const addTweetRequest = function* ({ payload }: IFetchAddTweet) {
    yield put(setFormTweetLoadingState(LoadingFormStateEnum.LOADING))
    try {
        const data: TweetType = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: 'Test',
                username: 'test',
                avatarUrl: 'https://source.unsplash.com/random/100x100?5',
            },
        }
        const response: OneTweetResponseType = yield call(apiTweets.addTweet, data)
        const tweet = response.data as TweetType
        yield put(addTweetAction(tweet))
    } catch (e) {
        yield put(setFormTweetLoadingState(LoadingFormStateEnum.ERROR))
    }
}
const watchFetchAddTweet = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_ADD_TWEET, addTweetRequest)
}

export const TweetsSaga = function* () {
    yield all([watchFetchTweets(), watchFetchAddTweet()])
}
