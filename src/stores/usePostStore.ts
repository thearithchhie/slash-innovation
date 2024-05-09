/* eslint-disable no-empty */
import { defineStore } from 'pinia';
// import axios from "axios";
import httpClient from '../utils/http-client';

export const usePostStore = defineStore('usePostStore',  {
    state: () => ({
        _posts: [],
        _post: {},
    }),

    getters: {
        getPosts: (state) => state._posts,
        getPost: (state) => state._post,
    },
    actions: {
        async findPosts() {
            const data: any = await httpClient.get('posts');
            this._posts = data.data;
        },
    }
});
