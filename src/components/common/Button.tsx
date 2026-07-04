type ButtonProps = {
  title: string;
  onClick?: () => void;
};

function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-slate-900
        to-slate-700
        py-4
        text-lg
        font-semibold
        text-white
        shadow-lg
        hover:shadow-xl
        hover:scale-[1.01]
        transition-all
        duration-300
      "
    >
      {title}
    </button>
  );
}

export default Button;