const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.profile.name;

export { getIsAuthenticated, getUsername };
