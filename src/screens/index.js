import Login from '../services/auth/Login';
import SignUp from '../services/auth/Signup';
import SplashScreen from './1-splash';
import MainHomeScreen from './2-main-home';
import NearbyShopsScreen from './3-nearby-shops';
import StoreDetailScreen from './4-store-detail';
import StoreLocationScreen from './5-store-location';
import Favorites from './6-favorites';
import ProfileViewScreen from './7-profile';
import EditProfileScreen from './8-edit-profile';
import EditPasswordScreen from './9-edit-password';
import DealItems from '../components/deal-items';
import HotDealItems from '../components/hot-deal-items';

export const App = {
  SplashScreen,
  MainHomeScreen,
  NearbyShopsScreen,
  StoreDetailScreen,
  StoreLocationScreen,
  Favorites,
  ProfileViewScreen,
  EditProfileScreen,
  EditPasswordScreen,
  Login,
  SignUp,
  DealItems,
  HotDealItems
};
