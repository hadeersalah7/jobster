export const saveUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem("user");
    if (!result || result === "undefined") {
        return null;
    }
    const user = result ? JSON.parse(result) : null;
    return user;
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
};
