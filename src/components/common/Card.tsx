type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div
  className="
  w-full
  max-w-3xl
  rounded-3xl
  bg-white/90
  backdrop-blur-md
  border
  border-slate-200
  shadow-2xl
  p-10
  "
>
      {children}
    </div>
  );
}

export default Card;