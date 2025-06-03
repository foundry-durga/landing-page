import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { Button } from '../ui/Button';
import { CollaborationModal } from './CollaborationModal';

interface CollaborationButtonProps {
  ideaId: string;
  ideaTitle: string;
}

export function CollaborationButton({ ideaId, ideaTitle }: CollaborationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        size="sm"
        onClick={() => setIsModalOpen(true)}
      >
        <Rocket size={16} className="mr-2" />
        Collaborate
      </Button>

      <CollaborationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ideaId={ideaId}
        ideaTitle={ideaTitle}
      />
    </>
  );
}