type ProseProps = {
  children: React.ReactNode;
};

export const Prose = ({ children }: ProseProps) => {
  return (
    <div className="prose prose-base hover:prose-a:text-accent-400 prose-pre:bg-[#011627] prose-img:rounded-md dark:prose-invert">
      {children}
    </div>
  );
};
