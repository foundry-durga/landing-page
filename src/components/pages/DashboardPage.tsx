import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../layout/DashboardLayout';
import { LaunchpadPage } from './LaunchpadPage';
import { ProfilePage } from './ProfilePage';
import { JobPortalPage } from './JobPortalPage';
import { NetworkPage } from './NetworkPage';
import { MessagesPage } from './MessagesPage';
import { WorkspacePage } from './WorkspacePage';
import { OverviewPage } from './OverviewPage';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/launchpad" element={<LaunchpadPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/jobs" element={<JobPortalPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
      </Routes>
    </DashboardLayout>
  );
}