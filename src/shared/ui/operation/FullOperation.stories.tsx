import type { Meta, StoryObj } from '@storybook/react';

import { FullOperation } from './FullOperation';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FullOperation> = {
    title: 'shared/FullOperation',
    component: FullOperation,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FullOperation>;
export const Default: Story = {
    args: {
        amount: 100,
        categoryName: 'категория',
        name: 'название',
        description: 'полное описание',
        date: new Date().toISOString().slice(0, 10),
    },
};
