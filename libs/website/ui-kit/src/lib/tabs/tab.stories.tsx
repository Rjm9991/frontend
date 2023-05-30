import { Tab as TabComponent } from './tabs';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TabComponent> = {
  component: TabComponent,
  title: 'website/ui-kit/tabs',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TabComponent>;

export const ActiveTab: Story = {
  args: {
    children: 'Active',
    isActive: true,
  },
};

export const NonActiveTab: Story = {
  args: {
    children: 'NonActive',
    isActive: false,
  },
};
