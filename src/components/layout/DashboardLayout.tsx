import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { 
  LayoutGrid, 
  Rocket, 
  User,
  Briefcase,
  Users, 
  MessageSquare,
  FolderKanban,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  TrendingUp,
  ChevronDown,
  Settings,
  HelpCircle,
  Plus,
  FileText,
  Star,
  Inbox,
  LifeBuoy,
  Zap,
  Home,
  Layers,
  Calendar,
  FileCode,
  Database,
  GitBranch
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const mainNavigation = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'LaunchPad', href: '/dashboard/launchpad', icon: Rocket },
  { name: 'LaunchBoard', href: '/launchboard', icon: TrendingUp },
];

const workspaceNavigation = [
  { name: 'Projects', href: '/dashboard/workspace', icon: Layers },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
];

const communityNavigation = [
  { name: 'Network', href: '/dashboard/network', icon: Users },
  { name: 'Jobs', href: '/dashboard/jobs', icon: Briefcase },
];

const developerNavigation = [
  { name: 'Code', href: '/dashboard/code', icon: FileCode },
  { name: 'Database', href: '/dashboard/database', icon: Database },
  { name: 'Git', href: '/dashboard/git', icon: GitBranch },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const renderNavGroup = (items: typeof mainNavigation, title?: string) => (
    <div className="space-y-1">
      {title && (
        <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {title}
        </h3>
      )}
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`
            flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
            ${location.pathname === item.href
              ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }
          `}
        >
          <item.icon size={18} className="mr-3" />
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Container>
          <div className="h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {/* Logo */}
              <Link to="/dashboard" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <Rocket size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white hidden md:block">
                  Foundarly
                </span>
              </Link>

              {/* Search */}
              <div className="hidden md:block relative flex-1 max-w-lg">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              {/* Help */}
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <LifeBuoy size={20} />
              </button>

              {/* Quick Create */}
              <div className="relative">
                <button 
                  className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsQuickActionsOpen(!isQuickActionsOpen)}
                >
                  <Zap size={20} />
                </button>

                {isQuickActionsOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 border border-gray-200 dark:border-gray-700">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Plus size={16} className="mr-2" />
                      New Project
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FileText size={16} className="mr-2" />
                      New Document
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Star size={16} className="mr-2" />
                      Add to Favorites
                    </button>
                  </div>
                )}
              </div>

              {/* Notifications */}
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  <div className="hidden md:block text-right">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{user?.name || 'Demo User'}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">View profile</div>
                  </div>
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                      src={user?.avatar || "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ChevronDown size={16} className="hidden md:block text-gray-500" />
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name || 'Demo User'}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email || 'demo@example.com'}</p>
                    </div>
                    <Link
                      to="/dashboard/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User size={16} className="mr-2" />
                      Your Profile
                    </Link>
                    <Link
                      to="/dashboard/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings size={16} className="mr-2" />
                      Settings
                    </Link>
                    <Link
                      to="/dashboard/help"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HelpCircle size={16} className="mr-2" />
                      Help Center
                    </Link>
                    <div className="border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 -mb-px">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors
                  ${location.pathname === item.href
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-300'
                  }
                `}
              >
                <item.icon size={18} className="mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div 
          className="absolute inset-0 bg-gray-600 bg-opacity-75" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative w-full max-w-xs bg-white dark:bg-gray-800 h-full overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {renderNavGroup(mainNavigation, 'Main')}
            {renderNavGroup(workspaceNavigation, 'Workspace')}
            {renderNavGroup(communityNavigation, 'Community')}
            {renderNavGroup(developerNavigation, 'Developer')}

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={handleLogout}
              >
                <LogOut size={18} className="mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">
        {children}
      </main>
    </div>
  );
}