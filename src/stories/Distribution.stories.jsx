import { Panel, Widget } from "../components/Panel";
import { Distribution } from "../components/widgets/Distribution";

export default {
  title: "Widgets/Distribution",
  component: Distribution,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <Panel>
      <Widget>
        <Distribution
          segments={[
            { label: "HTML", pct: 26 },
            { label: "CSS", pct: 34 },
            { label: "JavaScript", pct: 40 },
          ]}
        />
      </Widget>
    </Panel>
  ),
};
