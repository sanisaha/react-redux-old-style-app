import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.js';
import ProductProvider from './context/ProductProvider.js';




function App() {

  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes}>

        </RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
