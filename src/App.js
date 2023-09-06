import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';




function App() {

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes}>

        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
