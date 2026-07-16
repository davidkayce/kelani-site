export type LineIconName =
  | "droplet"
  | "filter"
  | "borehole"
  | "package"
  | "snowflake"
  | "flame"
  | "mill"
  | "pellet"
  | "extrude"
  | "mould"
  | "recycle"
  | "clipboard"
  | "leaf"
  | "fuel"
  | "gas"
  | "wrench"
  | "truck"
  | "shield"
  | "spark"
  | "chart"
  | "layers"
  | "factory"
  | "handshake"
  | "coin"
  | "loop";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<LineIconName, JSX.Element> = {
  droplet: (
    <path
      d="M20 6c5 6.5 8 10.9 8 14.5A8 8 0 1 1 12 20.5C12 16.9 15 12.5 20 6Z"
      {...strokeProps}
    />
  ),
  filter: (
    <path
      d="M8 8h24l-8.5 11v9l-7 3v-12L8 8Z"
      {...strokeProps}
    />
  ),
  borehole: (
    <>
      <path d="M20 5v10" {...strokeProps} />
      <circle cx="20" cy="19" r="4" {...strokeProps} />
      <path d="M14 35c0-6 3-11 6-11s6 5 6 11" {...strokeProps} />
      <path d="M9 35h22" {...strokeProps} />
    </>
  ),
  package: (
    <>
      <path d="M6 13 20 6l14 7-14 7-14-7Z" {...strokeProps} />
      <path d="M6 13v14l14 7 14-7V13" {...strokeProps} />
      <path d="M20 20v14" {...strokeProps} />
    </>
  ),
  snowflake: (
    <>
      <path d="M20 6v28M8 13l24 14M32 13 8 27" {...strokeProps} />
    </>
  ),
  flame: (
    <path
      d="M20 6c1 5-6 7-6 13a6 6 0 0 0 12 0c0-2-1-3-1.5-4.5C26 18 27 21 27 24a7 7 0 1 1-14 0c0-8 5-9 7-18Z"
      {...strokeProps}
    />
  ),
  mill: (
    <>
      <circle cx="20" cy="20" r="5" {...strokeProps} />
      <path
        d="M20 15V7M20 25v8M25 20h8M7 20h8M23.5 16.5l5.5-5.5M11 29l5.5-5.5M23.5 23.5 29 29M11 11l5.5 5.5"
        {...strokeProps}
      />
    </>
  ),
  pellet: (
    <>
      <circle cx="13" cy="15" r="3.2" {...strokeProps} />
      <circle cx="24" cy="12" r="3.2" {...strokeProps} />
      <circle cx="27" cy="24" r="3.2" {...strokeProps} />
      <circle cx="14" cy="27" r="3.2" {...strokeProps} />
    </>
  ),
  extrude: (
    <>
      <rect x="6" y="16" width="10" height="8" rx="1" {...strokeProps} />
      <path d="M16 20h18" {...strokeProps} />
      <path d="M28 14v12" {...strokeProps} />
    </>
  ),
  mould: (
    <>
      <path d="M8 12h24v16H8z" {...strokeProps} />
      <path d="M15 12v16M25 12v16" {...strokeProps} />
    </>
  ),
  recycle: (
    <path
      d="M18 8h4l3 5-3 2M28 15l3 5-3 5h-6M25 30l-3 3-3-3M12 25l-3-5 3-5h6M23 8l3 5"
      {...strokeProps}
    />
  ),
  clipboard: (
    <>
      <rect x="10" y="8" width="20" height="26" rx="2" {...strokeProps} />
      <rect x="15" y="5" width="10" height="6" rx="1.5" {...strokeProps} />
      <path d="M14 18h12M14 24h12M14 30h8" {...strokeProps} />
    </>
  ),
  leaf: (
    <path
      d="M9 31C9 15 22 8 32 8c0 12-6 23-23 23-2 0 0-9 6-13"
      {...strokeProps}
    />
  ),
  fuel: (
    <>
      <path d="M10 34V14l7-6h6l7 6v20" {...strokeProps} />
      <path d="M10 34h20M17 8v9h6V8" {...strokeProps} />
      <path d="M23 20h4a3 3 0 0 1 3 3v3a2 2 0 0 0 2 2" {...strokeProps} />
    </>
  ),
  gas: (
    <>
      <circle cx="20" cy="21" r="10" {...strokeProps} />
      <path d="M20 15v6l4 3" {...strokeProps} />
    </>
  ),
  wrench: (
    <path
      d="M27 8a7 7 0 0 0-9.5 7.9L7 26.4l3.6 3.6L21 19.5A7 7 0 0 0 29 10l-5 5-3-3 5-5Z"
      {...strokeProps}
    />
  ),
  truck: (
    <>
      <path d="M5 13h17v14H5z" {...strokeProps} />
      <path d="M22 18h6l4 4v5h-10z" {...strokeProps} />
      <circle cx="12" cy="29" r="2.5" {...strokeProps} />
      <circle cx="27" cy="29" r="2.5" {...strokeProps} />
    </>
  ),
  shield: (
    <path
      d="M20 6l12 4v9c0 8-5 13.5-12 15-7-1.5-12-7-12-15v-9l12-4Z"
      {...strokeProps}
    />
  ),
  spark: (
    <path
      d="M21 5 11 22h7l-2 13 12-18h-7l0-12Z"
      {...strokeProps}
    />
  ),
  chart: (
    <>
      <path d="M8 32V8" {...strokeProps} />
      <path d="M8 32h24" {...strokeProps} />
      <path d="M13 27v-6M20 27V15M27 27v-10" {...strokeProps} />
    </>
  ),
  layers: (
    <>
      <path d="M20 6 34 13 20 20 6 13 20 6Z" {...strokeProps} />
      <path d="M6 20l14 7 14-7" {...strokeProps} />
      <path d="M6 27l14 7 14-7" {...strokeProps} />
    </>
  ),
  factory: (
    <>
      <path d="M6 33V17l9 5v-5l9 5v-5l10 5v11H6Z" {...strokeProps} />
      <path d="M10 17V8h5v9" {...strokeProps} />
      <path d="M12 27h3M20 27h3M28 27h3" {...strokeProps} />
    </>
  ),
  handshake: (
    <>
      <path d="M4 14h6l6 12 4 2 4-2 6-12h6" {...strokeProps} />
      <path d="M20 12l-6 6 3 3 3-3 3 3 3-3-6-6Z" {...strokeProps} />
    </>
  ),
  coin: (
    <>
      <circle cx="20" cy="20" r="12" {...strokeProps} />
      <path d="M20 13v14M24.5 16.5c-1-1.5-2.7-2-4.5-2-2.2 0-4 1.1-4 3s2 2.6 4 3 4 1 4 3-1.8 3-4 3c-1.8 0-3.5-.5-4.5-2" {...strokeProps} />
    </>
  ),
  loop: (
    <>
      <path d="M10 24a10 10 0 0 1 18.5-6" {...strokeProps} />
      <path d="M30 16a10 10 0 0 1-18.5 6" {...strokeProps} />
      <path d="M28 9v7h-7M12 31v-7h7" {...strokeProps} />
    </>
  ),
};

const LineIcon = ({
  name,
  className = "w-8 h-8",
}: {
  name: LineIconName;
  className?: string;
}) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    {paths[name]}
  </svg>
);

export default LineIcon;
