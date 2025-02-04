import { Meta, StoryObj } from '@storybook/react';
import { UnsupportedBrowserModal as UnsupportedBrowserModalComponent } from './unsupported-browser-modal';

const meta: Meta<typeof UnsupportedBrowserModalComponent> = {
  component: UnsupportedBrowserModalComponent,
  title: 'shell/ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof UnsupportedBrowserModalComponent>;

export const UnsupportedBrowserModal: Story = {
  args: {
    isOpen: true,
  },
};
