import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Collaborator {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  matchScore: number;
}

interface CollaborationRequest {
  id: string;
  ideaId: string;
  userId: string;
  status: 'pending' | 'accepted' | 'rejected';
  message: string;
  createdAt: Date;
}

interface CollaborationStore {
  collaborators: Collaborator[];
  requests: CollaborationRequest[];
  addCollaborator: (collaborator: Collaborator) => void;
  removeCollaborator: (id: string) => void;
  sendRequest: (request: Omit<CollaborationRequest, 'id' | 'createdAt'>) => void;
  updateRequestStatus: (id: string, status: 'accepted' | 'rejected') => void;
  getRequestsByIdea: (ideaId: string) => CollaborationRequest[];
  getCollaboratorsByIdea: (ideaId: string) => Collaborator[];
}

export const useCollaborationStore = create<CollaborationStore>()(
  persist(
    (set, get) => ({
      collaborators: [],
      requests: [],
      
      addCollaborator: (collaborator) => {
        set((state) => ({
          collaborators: [...state.collaborators, collaborator]
        }));
      },
      
      removeCollaborator: (id) => {
        set((state) => ({
          collaborators: state.collaborators.filter((c) => c.id !== id)
        }));
      },
      
      sendRequest: (request) => {
        const newRequest: CollaborationRequest = {
          ...request,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date()
        };
        
        set((state) => ({
          requests: [...state.requests, newRequest]
        }));
      },
      
      updateRequestStatus: (id, status) => {
        set((state) => ({
          requests: state.requests.map((request) =>
            request.id === id ? { ...request, status } : request
          )
        }));
      },
      
      getRequestsByIdea: (ideaId) => {
        return get().requests.filter((request) => request.ideaId === ideaId);
      },
      
      getCollaboratorsByIdea: (ideaId) => {
        // This is a simplified implementation. In a real app, you'd have a many-to-many
        // relationship between ideas and collaborators
        return get().collaborators;
      }
    }),
    {
      name: 'collaboration-store'
    }
  )
);