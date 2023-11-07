export const state = () => ({
    isOffline: true,
    isDarkMode: true,
    isLive: false,
});

export const mutations = {
    setIsOffline(state, value) {
        state.isOffline = value;
    },
    setIsLive(state, value) {
        state.isLive = value;
    },
    setIsDarkMode(state, value) {
        state.isDarkMode = value; 
    },
};