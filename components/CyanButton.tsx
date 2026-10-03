type Props = {
  className?: string;
  labelId: string;
  label: string;
};

export function CyanButton({ className = "btn", labelId, label }: Props) {
  return (
    <a href="#" className={className}>
      <span id={labelId}>{label}</span>
    </a>
  );
}
