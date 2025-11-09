import type { MouseEventHandler } from "react";
import classNames from "classnames";
import ArrowRight from "@icons/arrow-right-secondary.svg";
import ArrowCwPrimary from "@icons/arrow-cw-primary.svg";
import ArrowCcwPrimary from "@icons/arrow-ccw-primary.svg";
import ArrowCwDisabled from "@icons/arrow-cw-disabled.svg";
import ArrowCcwDisabled from "@icons/arrow-ccw-disabled.svg";

type ButtonProps = {
  label: string;
  style: "primary" | "secondary";
  disabled?: boolean;
  arrow?: "none" | "right" | "cw" | "ccw";
  full?: boolean;
  onButtonClick?: MouseEventHandler;
};

const Button = ({
  label,
  style,
  disabled = false,
  arrow = "none",
  full = false,
  onButtonClick,
}: ButtonProps) => {
  const btnClasses = classNames("button", `button--${style}`, {
    "button--disabled": disabled,
    "button--full": full,
  });
  let iconSrc;

  switch (arrow) {
    case "right":
      iconSrc = ArrowRight;
      break;
    case "cw":
      iconSrc = disabled ? ArrowCwDisabled : ArrowCwPrimary;
      break;
    case "ccw":
      iconSrc = disabled ? ArrowCcwDisabled : ArrowCcwPrimary;
      break;
    default:
      // do nothing
      break;
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={btnClasses}
      onClick={onButtonClick}
    >
      <div className="flex items-center justify-center gap-1">
        {label}
        {arrow !== "none" ? <img height={18} width={18} src={iconSrc} /> : null}
      </div>
    </button>
  );
};

export default Button;
