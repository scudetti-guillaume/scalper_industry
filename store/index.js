export const state = () => ({
    isOffline: true,
    isDarkMode: true,
});

export const mutations = {
    setIsOffline(state, value) {
        state.isOffline = value;
    },
    setIsDarkMode(state, value) {
        state.isDarkMode = value; 
    },
};