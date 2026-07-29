type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export function Container({ children, className = "", wide = false }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${wide ? "max-w-360" : "max-w-7xl"} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
