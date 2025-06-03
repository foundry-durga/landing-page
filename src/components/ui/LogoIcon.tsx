import React from 'react';
import { Workflow } from 'lucide-react';

export function LogoIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg text-white">
      <Workflow size={20} />
    </div>
  );
}