import React from 'react';
import { IdeaSubmissionFlow } from '../idea/IdeaSubmissionFlow';
import { useNavigate } from 'react-router-dom';

export function PostIdeaPage() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/dashboard/launchpad');
  };

  return <IdeaSubmissionFlow onComplete={handleComplete} />;
}