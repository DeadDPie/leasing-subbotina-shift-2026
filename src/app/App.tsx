import { Layout } from "@/shared/components";
import { AppRouter } from "@/shared/providers";

const App = () => {
	return (
		<div className="app">
			<Layout>
				<AppRouter />
			</Layout>
		</div>
	);
};

export default App;
