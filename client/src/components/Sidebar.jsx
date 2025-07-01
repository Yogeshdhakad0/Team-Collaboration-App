import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FolderOpen, 
  Users, 
  Calendar, 
  Settings, 
  LogOut,
  Zap,
  Bell,
  Menu,
  X
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { getLoginOut } from '../feature/auth/authslice';
import { useAuth0 } from '@auth0/auth0-react';
// import { useAuth } from '../contexts/AuthContext';

const Sidebar = () => {
    const {  logout} = useAuth0();
  
  // const { user, logout } = useAuth();
const dispatch=useDispatch()
const logoutt=()=>{
  dispatch(getLoginOut())
 logout({ logoutParams: { returnTo: window.location.origin } })
}

const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
    { name: 'Workspaces', href: '/admin/workspaces', icon: FolderOpen },
    { name: 'project', href: '/admin/project', icon: Users },
    { name: 'Task', href: '/admin/projects/task', icon: Calendar },
    { name: 'commant', href: '/admin/project/task/commnet', icon: Bell },
    // { name: 'Settings', href: '/settings', icon: Settings }
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg lg:text-xl font-bold text-gray-900">CollabSpace</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 lg:p-4">
        <ul className="space-y-1 lg:space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`flex items-center space-x-3 px-3 py-2 lg:py-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-50 '
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm lg:text-base">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-3 lg:p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-3 lg:mb-4">
          <img
            src={user?.avatar || `https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop`}
            alt={user?.name}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.name}
            </p>
            <p className="text-xs lg:text-sm text-gray-500 truncate">
              {user?.email}
            </p>
          </div>
        </div>
        <button
          onClick={logoutt}
          className="flex items-center space-x-3 w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm lg:text-base">Sign Out</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CollabSpace</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 flex flex-col">
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;