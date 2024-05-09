import { defineStore } from 'pinia';
// import axios from "axios";
import httpClient from '../utils/http-client';

export const usePostStore = defineStore('usePostStore',  {
    state: () => ({
        _posts: [],
        _post: {
            id: 0,
            title: '',
            body: '',
            userId: 0,
        },
    }),

    getters: {
        getPosts: (state) => state._posts,
        getPost: (state) => state._post,
    },
    actions: {
        async findPosts() {
            const data = await httpClient.get('posts');
            this._posts = data.data;
        },

        async findPost(id: number) {
            const data = await httpClient.get(`posts/${id}`);
            this._post = data.data;
        },
    }
});
