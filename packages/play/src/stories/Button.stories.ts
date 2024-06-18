import { expect, fn, userEvent, within } from '@storybook/test';
import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import { ZButton } from 'zm-element';

type Story = StoryObj<typeof ZButton> & { argTypes: ArgTypes }

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ZButton> = {
  title: 'Example/Button',
  component: ZButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleTime: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  argTypes: {
    useThrottle: { control: { type: 'boolean' } }
  },
  render: (args) => {
    return {
      components: { ZButton },
      setup() {
        // const onClick = () => {
        //   console.log('clicked');

        // }
        return { args,  };
      },
      template: '<z-button v-bind="args" >Button</z-button>',
    }
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click the button', async () => {
      await userEvent.tripleClick(canvas.getByRole('button'))
    })
    expect(args.onClick).toHaveBeenCalled()
  }
}

export const Primary = {
  args: {
    ...Default,
  }
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
