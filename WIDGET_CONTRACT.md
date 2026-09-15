# Widget props contract

This is the shared interface every widget in this package follows, so the panel can render any of them the same way.

## How a widget is placed in a panel

import { Panel, Widget, WidgetShell, Gauge } from "../index";

<Panel>
  <Widget size={1}>
    <WidgetShell title="Gauge" subtitle="This week" state="ready">
      <Gauge value={42} target="$42,000" actualLabel="Actual: $17,640" />
    </WidgetShell>
  </Widget>
</Panel>


Three layers, each with one job:

- **Panel** owns arrangement, the sizing grid and the empty state. It also owns drag-to-reorder.
- **Widget** is a grid slot. Takes a `size` prop (1 to 4, how many of the panel's 4 columns it spans). Defaults to 1.
- **WidgetShell** owns the header (title, subtitle, optional menu button) and the four display states. This is what makes every widget look consistent regardless of what's inside it.
- The widget itself (`Gauge`, `Countdown`, etc.) only owns its own body content and data. It should not render its own title or menu when used inside a shell.

## WidgetShell props

| Prop | Type | Required | Notes |
| `title` | string | yes | Shown in the header |
| `subtitle` | string | no | Shown under the title |
| `state` | `"loading" \| "error" \| "empty" \| "ready"` | no, defaults to `"ready"` | Controls what renders in the body |
| `onMenuClick` | function | no | If passed, shows a menu button in the header |
| `children` | node | yes | The widget's own content, only rendered when `state` is `"ready"` |

## Individual widget props

Each widget accepts an optional `title` and `subtitle` too, purely so it can be previewed on its own in Storybook without a shell around it. When a widget is used inside `WidgetShell`, leave these two off so the header isn't duplicated.

Beyond that, each widget has its own data props specific to what it displays, documented in its own Storybook docs page.

## Sizing

The panel grid is 2 columns wide. `Widget size` values seen so far:

- `1`: Progress, Countdown, Gauge, Distribution (half width each)
- `2`: Goal Rings (full width, it needs the room for the ring plus the list)

This is a starting convention based on how the widgets currently render, not a locked rule. Revisit if a future widget needs a different footprint.

## Status

This resolves the panel/widget layout-state ownership question that was open on Trello: the panel owns it, via internal state and drag-to-reorder. Not yet built: persisting a user's reordered layout across a page refresh (auto-save/load is a Should Have, not a Must Have).
