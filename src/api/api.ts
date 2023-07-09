import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method.Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance
            .get(`profile/` + userId)

    }
}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
    }
}
