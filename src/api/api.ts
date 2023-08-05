import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "e5cf8594-32cf-4be5-9a53-8fb67649cdee"
    }
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

    },
    getStatus(userId: string) {
        return instance
            .get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance
            .delete(`auth/login`)
    },
}