import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Home from '../components/Home/Home';
import Following from '../components/Following/Following';
import SearchPhotos from '../components/Search/SearchPhotos';
import SearchResult from '../components/Search/SearchResult';
import SearchCollections from '../components/Search/SearchCollections';
import SearchUsers from '../components/Search/SearchUsers';
import EnsureAtSymbol from '../components/User/EnsureAtSymbol';
import PhotosGrid from '../components/Root/PhotosGrid';
import CollectionsGrid from '../components/Root/CollectionsGrid';
import AccountSettings from '../components/Settings/AccountSettings';
import EditProfile from '../components/Settings/EditProfile';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [{
    path: '',
    element: <Home/>
  },{
    path: 'following',
    element: <Following/>
  },{
    path: 'search',
    element: <SearchResult/>,
    children: [{
      path: 'photos',
      element: <SearchPhotos/>
    }, {
      path: 'collections',
      element: <SearchCollections/>
    }, {
      path: 'users',
      element: <SearchUsers/>
    },]
  }, {
    path: 'account',
    element: <AccountSettings/>,
    children: [{
      path: '',
      element: <EditProfile/>
    }]
  }, {
    path: ':username', 
    element: <EnsureAtSymbol/>,
    children: [{
      path: '',
      element: <PhotosGrid/>
    }, {
      path: 'likes',
      element: <PhotosGrid/>
    }, {
      path: 'collections',
      element: <CollectionsGrid/>
    }]
  }]
}]);


export default router