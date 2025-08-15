import "./StarBorder.css";

const StarBorder = ({
  as: Component = "div",
  children,
  className = "",
  color = "#8400ff",
  speed = "5s",
  ...rest
}) => {
  return (
    <Component
      className={`star-border ${className}`}
      style={{
        "--star-color": color,
        "--star-speed": speed
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default StarBorder;
