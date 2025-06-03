import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { 
  TrendingUp, 
  Users, 
  MessageSquare,
  Rocket,
  Activity
} from 'lucide-react';

export function OverviewPage() {
  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Sarah!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your projects and network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Active Projects', value: '12', icon: Rocket, trend: '+2 this week' },
          { label: 'Team Members', value: '24', icon: Users, trend: '+5 new' },
          { label: 'Messages', value: '156', icon: MessageSquare, trend: '12 unread' },
          { label: 'Activity', value: '89%', icon: Activity, trend: '+12% this month' }
        ].map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                <stat.icon size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-sm text-emerald-600 dark:text-emerald-400">{stat.trend}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Add more dashboard content here */}
    </Container>
  );
}