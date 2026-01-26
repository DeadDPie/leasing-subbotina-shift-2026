import { Suspense } from "react";
import { AppRouter } from "@/shared/providers";

function App() {
	return (
		<div className="app">
			<Suspense fallback={<div>loading...</div>}>
				<AppRouter />
			</Suspense>
		</div>
	);
}

export default App;
