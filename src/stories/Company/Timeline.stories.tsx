import { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { omit } from "lodash";
import { twMerge } from "tailwind-merge";

import { Timeline, TimelineEventProps, TimelineProps } from "@components/Timeline";

const meta: Meta<TimelineProps> = {
  title: "Company/Timeline",
  component: Timeline,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

const TimelineComponentEvent = ({ startHour, endHour, isHovering, ...props }: TimelineEventProps) => {
  return (
    <div
      className={twMerge(
        "rounded-lg border-2 border-gray-100 bg-white p-6",
        isHovering && "border-primary-700",
      )}
      {...props}
    >
      <div>{startHour.format("HH:mm")}</div>
      {endHour && <div>{endHour.format("HH:mm")}</div>}
    </div>
  );
};

const TimelineComponent = ({ startHour, endHour, ...args }: TimelineProps) => {
  const totalHours = endHour.diff(startHour, "hour");

  return (
    <Timeline startHour={startHour} endHour={endHour} {...omit(args, "children")}>
      <TimelineComponentEvent
        startHour={startHour.add(1, "hour")}
        endHour={startHour.add(totalHours / 2 - 1, "hour")}
      />
      <TimelineComponentEvent
        startHour={startHour.add(totalHours / 2, "hour")}
        endHour={startHour.add(totalHours - 1, "hour")}
      />
    </Timeline>
  );
};

export const Basic: Story = {
  args: {
    startHour: dayjs("2021-01-01 08:00"),
    endHour: dayjs("2021-01-01 18:00"),
  },
  render: (args) => <TimelineComponent {...args} />,
};

// export const Status: Story = {
//   render: (args) => (
//     <>
//       <Alert title="Normal" type="normal" {...omit(args, "title", "type")} />
//       <Alert title="Danger" type="danger" {...omit(args, "title", "type")} />
//       <Alert title="Warning" type="warning" {...omit(args, "title", "type")} />
//       <Alert title="Success" type="success" {...omit(args, "title", "type")} />
//     </>
//   ),
//   argTypes: {
//     type: {
//       control: false,
//     },
//     title: {
//       control: false,
//     },
//   },
// };

// export const Footer: Story = {
//   args: {
//     title: "Alert Footer",
//     children: <div>Do something...</div>,
//     type: "normal",
//   },
// };
