import AppMockup from "./components/AppMockup";
import Article from "./components/Article";
import BackgroundMockup from "./components/BackgroundMockup";

function App() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-16 overflow-hidden bg-white py-16 font-rubik lg:flex-row">
      <AppMockup />
      <Article />
      <BackgroundMockup />
    </main>
  );
}

export default App;
