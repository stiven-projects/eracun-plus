import { Provider } from 'react-redux';
import { RouterProvider } from "react-router";
import { router } from './routes/router';
import { store } from './stores/store';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </LocalizationProvider>
  );
}

export default App
