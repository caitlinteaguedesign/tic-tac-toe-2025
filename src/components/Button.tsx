import classNames from "classnames";
import ArrowRight from "../assets/icons/arrow-right-secondary.svg";
import ArrowCw from "../assets/icons/arrow-cw-primary.svg";
import ArrowCcw from "../assets/icons/arrow-ccw-primary.svg";

type ButtonProps = {
  label: string;
  style: "primary" | "secondary";
  disabled?: boolean;
  arrow?: "none" | "right" | "cw" | "ccw";
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
  let iconSrc;

  switch (arrow) {
    case "right":
      iconSrc = ArrowRight;
      break;
    case "cw":
      iconSrc = ArrowCw;
      break;
    case "ccw":
      iconSrc = ArrowCcw;
      break;
    default:
    // do nothing
  }

  return (
    <button type="button" disabled={disabled} className={btnClasses}>
      <div className="flex items-center gap-1">
        {label}
        {arrow !== "none" ? <img height={18} width={18} src={iconSrc} /> : null}
      </div>
    </button>
  );
}

export default Button;
