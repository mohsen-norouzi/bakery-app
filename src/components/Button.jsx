import { Link } from "react-router-dom";

const VARIANTS = {
	solid: "bg-brown text-cream hover:bg-brown/90",
	outline: "border border-brown/40 text-brown hover:bg-brown/5",
};

function Button({ children, variant = "solid", className = "", to, ...props }) {
	const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-xs font-medium tracking-[0.15em] transition-colors ${VARIANTS[variant]} ${className}`;

	if (to) {
		return (
			<Link to={to} className={classes} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	);
}

export default Button;
