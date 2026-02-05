export const getErrorMessage = (error: unknown) => {
	if (!error) return "Произошла ошибка";
	if ("data" in (error as any) && (error as any).data?.message) {
		return (error as any).data.message;
	}
	return String(error);
};
