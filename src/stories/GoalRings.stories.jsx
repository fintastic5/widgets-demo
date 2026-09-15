import { Panel, Widget } from "../components/Panel";
import { GoalRings } from "../components/widgets/GoalRings";

export default {
  title: "Widgets/GoalRings",
  component: GoalRings,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <Panel>
      <Widget>
        <GoalRings
          overall={78}
          items={[
            { label: "Website", amount: "$12,579", change: 12 },
            { label: "Marketplace", amount: "$4,579", change: -12 },
            { label: "Affiliates", amount: "$12,579", change: 0 },
          ]}
        />
      </Widget>
    </Panel>
  ),
};
