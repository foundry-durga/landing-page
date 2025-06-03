import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'tech' | 'non-tech';
  stage: string;
  tags: string[];
  seeking: string[];
  fundingGoal: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  stats: {
    likes: number;
    comments: number;
    views: number;
  };
  traction: {
    users?: number;
    revenue?: string;
    growth?: string;
    impact?: string;
    reach?: number;
    partnerships?: number;
  };
  team: Array<{
    avatar: string;
    role: string;
  }>;
  updates: Array<{
    date: string;
    title: string;
  }>;
  documents: Array<{
    type: string;
    name: string;
  }>;
}

interface IdeaStore {
  ideas: Idea[];
  filters: {
    category: string[];
    type: string[];
    stage: string[];
    seeking: string[];
  };
  addIdea: (idea: Idea) => void;
  updateIdea: (id: string, idea: Partial<Idea>) => void;
  removeIdea: (id: string) => void;
  setFilters: (filters: Partial<IdeaStore['filters']>) => void;
  likeIdea: (id: string) => void;
  addComment: (id: string) => void;
  incrementViews: (id: string) => void;
}

export const useIdeaStore = create<IdeaStore>()(
  persist(
    (set) => ({
      ideas: [],
      filters: {
        category: [],
        type: [],
        stage: [],
        seeking: [],
      },
      
      addIdea: (idea) => set((state) => ({
        ideas: [...state.ideas, idea]
      })),
      
      updateIdea: (id, updatedIdea) => set((state) => ({
        ideas: state.ideas.map((idea) =>
          idea.id === id ? { ...idea, ...updatedIdea } : idea
        )
      })),
      
      removeIdea: (id) => set((state) => ({
        ideas: state.ideas.filter((idea) => idea.id !== id)
      })),
      
      setFilters: (newFilters) => set((state) => ({
        filters: { ...state.filters, ...newFilters }
      })),
      
      likeIdea: (id) => set((state) => ({
        ideas: state.ideas.map((idea) =>
          idea.id === id
            ? { ...idea, stats: { ...idea.stats, likes: idea.stats.likes + 1 } }
            : idea
        )
      })),
      
      addComment: (id) => set((state) => ({
        ideas: state.ideas.map((idea) =>
          idea.id === id
            ? { ...idea, stats: { ...idea.stats, comments: idea.stats.comments + 1 } }
            : idea
        )
      })),
      
      incrementViews: (id) => set((state) => ({
        ideas: state.ideas.map((idea) =>
          idea.id === id
            ? { ...idea, stats: { ...idea.stats, views: idea.stats.views + 1 } }
            : idea
        )
      })),
    }),
    {
      name: 'idea-store'
    }
  )
);