const storage = (function (storage) {
    const setItem = (key, value) => {
        try {
            storage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting item in localStorage for key "${key}":`, error);
        }
    };

    const getItem = (key, defaultValue) => {
        const storedValue = localStorage.getItem(key);

        try {
            if (storedValue) {
                return JSON.parse(storedValue);
            }
            return defaultValue;
        } catch (error) {
            console.error(`Error parsing JSON from localStorage for key "${key}":`, error);
            return defaultValue;
        }
    };

    return {
        setItem,
        getItem,
    };
})(window.localStorage);
