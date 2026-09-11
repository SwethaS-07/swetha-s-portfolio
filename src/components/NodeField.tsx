/**
 * Decorative background: glowing connected nodes suggesting an API/service graph.
 */
export function NodeField({ className }: { className?: string }) {
  const nodes = [
    { x: 12, y: 22 },
    { x: 38, y: 10 },
    { x: 66, y: 26 },
    { x: 88, y: 14 },
    { x: 24, y: 58 },
    { x: 52, y: 46 },
    { x: 80, y: 62 },
    { x: 34, y: 86 },
    { x: 68, y: 90 },
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [4, 5],
    [5, 2],
    [5, 6],
    [4, 7],
    [7, 8],
    [8, 6],
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="0.15" className="text-primary/45">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a]!.x}
            y1={nodes[a]!.y}
            x2={nodes[b]!.x}
            y2={nodes[b]!.y}
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="1.9" className="fill-primary/15" />
          <circle cx={n.x} cy={n.y} r="0.7" className="fill-cyan">
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur={`${3 + (i % 4)}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
