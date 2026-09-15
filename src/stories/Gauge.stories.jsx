import { Panel, Widget } from "../components/Panel";
import { Gauge } from "../components/widgets/Gauge";

export default {
  title: "Widgets/Gauge",
  component: Gauge,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <Panel>
      <Widget>
        <Gauge value={42} actualLabel="Actual: $17,640" target="$42,000" />
      </Widget>
    </Panel>
  ),
};

export const FullValue = {
  render: () => (
    <Panel>
      <Widget>
        <Gauge value={100} actualLabel="Actual: $42,000" target="$42,000" />
      </Widget>
    </Panel>
  ),
};
