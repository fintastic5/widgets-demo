import styled from "styled-components";

const Wrapper = styled.div`
  color: var(--text-secondary);
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Subtitle = styled.p`
  margin: 0 0 16px;
  font-weight: 600;
  color: var(--text-primary);
`;

const Donut = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: conic-gradient(${(p) => p.$gradient});
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 22px;
    border-radius: 50%;
    background: var(--bg-widget);
  }
`;

const Legend = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  font-size: 13px;
`;

const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Swatch = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(p) => p.$color};
`;

const SEGMENT_COLORS = ["var(--purple-400)", "var(--purple-300)", "var(--purple-200)", "var(--purple-100)"];

export function Distribution({ title, subtitle, segments = [] }) {
  const stops = segments.reduce((acc, seg, i) => {
    const color = SEGMENT_COLORS[i % SEGMENT_COLORS.length];
    const start = acc.cursor;
    const end = start + seg.pct;
    acc.stops.push(`${color} ${start}% ${end}%`);
    acc.cursor = end;
    return acc;
  }, { stops: [], cursor: 0 }).stops;

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Donut
        $gradient={stops.join(", ")}
        role="img"
        aria-label={segments.map((s) => `${s.label} ${s.pct}%`).join(", ")}
      />
      <Legend>
        {segments.map((seg, i) => (
          <LegendItem key={seg.label}>
            <Swatch $color={SEGMENT_COLORS[i % SEGMENT_COLORS.length]} />
            {seg.label} {seg.pct}%
          </LegendItem>
        ))}
      </Legend>
    </Wrapper>
  );
}
