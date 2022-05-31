import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = {
    web: 'https://dapi.kakao.com/v2/search/web',
    blog: 'https://dapi.kakao.com/v2/search/blog',
    cafe: 'https://dapi.kakao.com/v2/search/cafe',
    book: 'https://dapi.kakao.com/v3/search/book',
    image: 'https://dapi.kakao.com/v2/search/image',
}

const API_KEY = 'b293b4dfa9f4f75c610c605cdb377b6a';

/** 비동기 처리 함수 구현 */
export const getKakaoSearch = createAsyncThunk("KakaoSlice/getKakaoSearch", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(API_URL[payload.api ? payload.api : 'web'], {
            params: {
                query: payload.query,
                sort: payload.sort ? payload.sort : null,
                page: payload.page ? payload.page : 1,
                size: payload.size ? payload.size : 20
            },
            headers: { Authorization: `KakaoAK ${API_KEY}` }
        });
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** Slice 정의 (Action 함수 + Reducer의 개념) */
const KakaoSlice = createSlice ({ 
    name: 'kakao',
    initialState: {
        meta: null,
        documents: null,
        loading: false, 
        error: null 
    },
    // 내부 action 및 동기 action
    reducers: {},
    // 외부 acrion 및 비동기 action (Ajax용)
    extraReducers: {
        [getKakaoSearch.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getKakaoSearch.fulfilled]: (state, { meta, payload }) => {
            return {
                meta: payload?.data?.meta,
                documents: meta.arg.page > 1 ? state.documents.concat(payload?.data?.documents) : payload?.data?.documents,
                loading: false,
                error: null
            }
        },
        [getKakaoSearch.rejected]: (state, { payload }) => {
            return {
                meta: null,
                documents: null,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    },
});

// 리듀서 객체 내보내기 
export default KakaoSlice.reducer;