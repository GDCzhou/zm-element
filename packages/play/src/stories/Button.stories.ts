import { expect, fn, userEvent, within } from '@storybook/test';
import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import { ZButton } from 'zm-element';
import { ZButtonGroup} from 'zm-element'
import 'zm-element/dist/index.css'

type Story = StoryObj<typeof ZButton> & { argTypes?: ArgTypes }

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
        return { args};
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

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;



export const Circle: Story = {
  args: {
    icon: "search",
  },
  render: (args) => ({
    components: { ZButton },
    setup() {
      return { args };
    },
    template: container(`
      <z-button circle v-bind="args"/>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    groupSize: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    groupDisabled: {
      control: "boolean",
    },
    content1: {
      control: { type: "text" },
      defaultValue: "Button1",
    },
    content2: {
      control: { type: "text" },
      defaultValue: "Button2",
    },
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2",
  },
  render: (args) => ({
    components: { ZButton, ZButtonGroup },
    setup() {
      return { args };
    },
    template: container(`
       <z-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <z-button v-bind="args">{{args.content1}}</z-button>
         <z-button v-bind="args">{{args.content2}}</z-button>
       </z-button-group>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  },
};
