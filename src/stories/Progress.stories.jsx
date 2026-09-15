import { Panel, Widget } from "../components/Panel";
import { ProgressRing } from "../components/widgets/ProgressRing";

export default {
  title: "Widgets/Progress",
  component: ProgressRing,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <Panel>
      <Widget>
        <ProgressRing value={78} />
      </Widget>
    </Panel>
  ),
};
