import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{ RouterProvider, createBrowserRouter, Route} from "react-router-dom"

import Home from './routers/Home.jsx'
import NewPost from './routers/NewPost.jsx'

const router = createBrowserRouter([

  {
    element : <App/>,
    children : [
      {
        path: < Home/>
      },

      {
        path: <NewPost/>
      }
    ]
  }
])
  

ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-no-undef
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
