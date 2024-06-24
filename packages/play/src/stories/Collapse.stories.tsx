import type { Meta, StoryObj } from "@storybook/vue3";
import { ZCollapse, ZCollapseItem } from "zm-element";
import 'zm-element/dist/index.css'

type Story = StoryObj<typeof ZCollapse>;

const meta: Meta<typeof ZCollapse> = {
  title: "Example/Collapse",
  component: ZCollapse,
  subcomponents: { ZCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      ZCollapse,
      ZCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <z-collapse v-bind="args">
      <z-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </z-collapse-item>
      <z-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </z-collapse-item>
      <z-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </z-collapse-item>
    </z-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;
