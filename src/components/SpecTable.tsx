import FadeUpAnimation from "./FadeUpAnimation";

interface SpecTableProps {
  columns: string[];
  rows: string[][];
}

const SpecTable = ({ columns, rows }: SpecTableProps) => (
  <FadeUpAnimation delay={0.15} y={30}>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-kelani-teal">
            {columns.map((col) => (
              <th
                key={col}
                className="eyebrow-label text-kelani-teal/50 py-[14px] pr-[24px] font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-kelani-teal/15">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-[18px] pr-[24px] align-top ${
                    j === 0
                      ? "space-grotesk-semibold text-[15.5px] text-kelani-teal"
                      : "museo-sans text-[14px] leading-[1.6] text-kelani-teal/70"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </FadeUpAnimation>
);

export default SpecTable;
