interface ButtonProps {
  text: string;
  className: string;
  onClick?: () => void;
  icon?: string;
}

export default function Button({
  text,
  className,
  onClick,
  icon,
}: ButtonProps) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {text} {icon}
    </button>
  );
}
