import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  needsOnboarding: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  completeOnboarding: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      needsOnboarding: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        set({
          user: {
            id: '1',
            name: 'Demo User',
            email,
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
          },
          isAuthenticated: true,
          needsOnboarding: false
        });
      },

      signup: async (name: string, email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        set({
          user: {
            id: '1',
            name,
            email,
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
          },
          isAuthenticated: true,
          needsOnboarding: true
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          needsOnboarding: false
        });
      },

      completeOnboarding: () => {
        set({ needsOnboarding: false });
      }
    }),
    {
      name: 'auth-store'
    }
  )
);