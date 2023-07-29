import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router";
import { queryClient } from './lib/queryClient';
import { router } from './routes/router';
import { store } from './stores/store';
import { SnackbarProvider } from 'notistack';

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <RouterProvider router={router} />
          </SnackbarProvider>
        </QueryClientProvider>
      </Provider>
    </LocalizationProvider>
  );
}

export default App
