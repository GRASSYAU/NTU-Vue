export const state = () => {
    return {
        isLogin: false,
        isAdmin: false,
        user: {}
    }
}

export const mutations = {
    finalizeLogin(state, userInfo) {
        //標記為登入
        state.isLogin = true;
        state.user = userInfo;
    },
    finalizeLogout(state) {
        state.isLogin = false;
        state.isAdmin = false;
        state.user = {};
    },
    setAdmin(state) {
        state.isAdmin = true;
    }
}

export const getters = {
    isLogin(state) {
        return state.isLogin;
    },
    isAdmin(state) {
        return state.isAdmin
    },
    user(state) {
        return state.user
    }
}