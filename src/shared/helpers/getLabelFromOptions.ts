type Option = {
	value: string;
	label: string;
};

export function getLabelFromOptions(
	options: readonly Option[],
	value?: string,
	fallback = "—",
) {
	return options.find((o) => o.value === value)?.label ?? value ?? fallback;
}
