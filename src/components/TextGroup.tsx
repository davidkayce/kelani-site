interface TextGroupProps {
  title: string;
  paragraphs: string[];
  themeColor: string;
}

const TextGroup = ({ title, paragraphs, themeColor }: TextGroupProps) => {
  return (
    <div className="flex flex-col py-[23px] lg:pt-[40px] lg:pb-[23px] pl-[12px] lg:pl-[70px]">
      <h2 className="text-[26px] leading-[39px] relative">
        {title}
        <span
          style={{ backgroundColor: themeColor }}
          className="w-[8px] h-[8px] rounded-full inline-block absolute -left-[16px] top-[calc(50%-4px)]"
        ></span>
      </h2>
      <div className="flex flex-col space-y-[10px]">
        {paragraphs?.map((paragraph) => (
          <p className="text-[17.28px] leading-[26px]">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default TextGroup;
