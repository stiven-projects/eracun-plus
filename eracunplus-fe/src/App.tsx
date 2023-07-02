import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router";
import { router } from './routes/router';
import { store } from './stores/store';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
    </LocalizationProvider>
  );
}

export default App
