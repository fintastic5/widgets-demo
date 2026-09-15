import { Panel, Widget } from "../components/Panel";
import { Countdown } from "../components/widgets/Countdown";

export default {
  title: "Widgets/Countdown",
  component: Countdown,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <Panel>
      <Widget>
        <Countdown launchDate="2026-10-28" />
      </Widget>
    </Panel>
  ),
};
