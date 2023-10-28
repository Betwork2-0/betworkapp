import { useState, createContext, useContext } from "react";

const SnackbarContext = createContext();

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function SnackbarProvider({ children }) {
  const [snackbarStates, setSnackbarStates] = useState({
    success: { open: false, message: "Success!" },
    error: { open: false, message: "Error!" },
  });

  const openSuccessMessage = (successMessage) => {
    setSnackbarStates({
      ...snackbarStates,
      success: {
        open: true,
        message: successMessage,
      },
    });
  };

  const openErrorMessage = (errorMessage) => {
    setSnackbarStates({
      ...snackbarStates,
      error: {
        open: true,
        message: errorMessage,
      },
    });
  };

  const closeSuccessMessage = () => {
    setSnackbarStates({
      ...snackbarStates,
      success: {
        open: false,
        message: snackbarStates.success.message,
      },
    });
  };

  const closeErrorMessage = () => {
    setSnackbarStates({
      ...snackbarStates,
      error: {
        open: false,
        message: snackbarStates.error.message,
      },
    });
  };

  return (
    <SnackbarContext.Provider
      value={{
        snackbarStates,
        openSuccessMessage,
        openErrorMessage,
        closeSuccessMessage,
        closeErrorMessage,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}