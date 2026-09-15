import React, { useState, useRef } from "react";
import styled from "styled-components";

const PanelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: var(--bg-panel);
  padding: 1.25rem;
  border-radius: 16px;
`;

const Slot = styled.div`
  grid-column: span ${(p) => p.$size};
  display: flex;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const WidgetCard = styled.div`
  background: var(--bg-widget);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px;
  min-height: 220px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  border: 1px dashed var(--border);
  border-radius: 24px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 14px;
`;

// Panel owns arrangement, sizing and the empty state. Widgets only own
// their own body content. Order is kept as actual elements, not indices,
// so a drag never points at a position that no longer exists.
export function Panel({ children }) {
  const items = React.Children.toArray(children);
  const [dragOrderKeys, setDragOrderKeys] = useState(null);
  const dragIndex = useRef(null);

  // Derive display order: use dragOrderKeys if set, otherwise use items directly
  const ordered = dragOrderKeys
    ? dragOrderKeys.map((key) => items.find((item) => item.key === key)).filter(Boolean)
    : items;

  if (items.length === 0) {
    return (
      <PanelGrid>
        <EmptyState>No widgets added yet</EmptyState>
      </PanelGrid>
    );
  }

  function handleDrop(dropIndex) {
    if (dragIndex.current === null || dragIndex.current === dropIndex) {
      dragIndex.current = null;
      return;
    }
    setDragOrderKeys((prev) => {
      const order = prev ? [...prev] : items.map((item) => item.key);
      const [moved] = order.splice(dragIndex.current, 1);
      order.splice(dropIndex, 0, moved);
      return order;
    });
    dragIndex.current = null;
  }

  return (
    <PanelGrid>
      {ordered.map((item, i) => {
        const size = (item.props && item.props.size) || 1;
        return (
          <Slot
            key={item.key}
            $size={size}
            draggable
            onDragStart={() => (dragIndex.current = i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(i)}
          >
            {item}
          </Slot>
        );
      })}
    </PanelGrid>
  );
}

export function Widget({ children }) {
  return <WidgetCard>{children}</WidgetCard>;
}
