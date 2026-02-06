import { Layout } from "@/shared/components";
import { AppRouter } from "./AppRouter";

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
