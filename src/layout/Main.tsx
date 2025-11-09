import Header from "@/layout/Header";
import Game from "@/layout/Game";

const Main = () => {
  return (
    <main className="p-10 pb-14 grow shrink-0 flex flex-col gap-10 items-center justify-center">
      <Header />
      <Game />
    </main>
  );
};

export default Main;
