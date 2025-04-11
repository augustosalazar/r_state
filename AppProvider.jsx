import React from "react"; // Add this import

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [Value, setValue] = React.useState(0);

    const increment = () => {
        setValue(Value + 1);
    }
    const decrement = () => {
        setValue(Value - 1);
    }
    const reset = () => {
        setValue(0);
    }
    return (
        <AppContext.Provider value={{ Value, increment, decrement, reset }}>
            {children}
        </AppContext.Provider>
    );
}
