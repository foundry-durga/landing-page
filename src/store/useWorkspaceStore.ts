import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  dueDate?: string;
  projectId: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed';
  progress: number;
  members: string[];
  tasks: Task[];
  dueDate: string;
}

interface WorkspaceStore {
  projects: Project[];
  tasks: Task[];
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;
  addTask: (task: Task) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  removeTask: (id: string) => void;
  getProjectTasks: (projectId: string) => Task[];
}

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set, get) => ({
      projects: [],
      tasks: [],

      addProject: (project) => set((state) => ({
        projects: [...state.projects, project]
      })),

      updateProject: (id, updatedProject) => set((state) => ({
        projects: state.projects.map((project) =>
          project.id === id ? { ...project, ...updatedProject } : project
        )
      })),

      removeProject: (id) => set((state) => ({
        projects: state.projects.filter((project) => project.id !== id),
        tasks: state.tasks.filter((task) => task.projectId !== id)
      })),

      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
      })),

      updateTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...updatedTask } : task
        )
      })),

      removeTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
      })),

      getProjectTasks: (projectId) => {
        return get().tasks.filter((task) => task.projectId === projectId);
      }
    }),
    {
      name: 'workspace-store'
    }
  )
);