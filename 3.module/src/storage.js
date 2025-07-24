const storage = window.localStorage;

export const setItem = (key, value) => {
    try {
        storage.setItem(key, value);
    } catch (error) {
        console.error(`Error setting item in localStorage for key "${key}":`, error);
    }
};

export const getItem = (key, defaultValue) => {
    try {
        const storedValue = storage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return defaultValue;
    } catch (error) {
        console.error(`Error parsing JSON from localStorage for key "${key}":`, error);
        return defaultValue;
    }
};
