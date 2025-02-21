interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={className + " px-[16px] md:px-[24px] lg:px-[32px] max-w-[1560px] mx-auto "}>
      {children}
    </div>
  );
};

export default Container;
