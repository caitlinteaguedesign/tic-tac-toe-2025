import classNames from "classnames";

type ButtonProps = {
  label: string;
  style: "primary" | "secondary";
  disabled?: boolean;
  arrow?: "none" | "right" | "clockwise" | "counter-clockwise";
};

function Button({
  label,
  style,
  disabled = false,
  arrow = "none",
}: ButtonProps) {
  const btnClasses = classNames("button", `button--${style}`, {
    "button--interactive": !disabled,
    "button--disabled": disabled,
  });

  return (
    <button type="button" disabled={disabled} className={btnClasses}>
      <div className="flex items-center gap-1">
        {label}
        {arrow !== "none" ? (
          <svg width="20" height="20">
            <circle cx="10" cy="10" r="10" fill="white" />
          </svg>
        ) : null}
      </div>
    </button>
  );
}

export default Button;
