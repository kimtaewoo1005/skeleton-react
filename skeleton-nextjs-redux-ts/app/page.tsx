import { Number } from "./components/Number/Number";
import { Word } from "./components/Word/Word";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {" "}
        <Number />
      </div>
      <div>
        {" "}
        <Word />{" "}
      </div>
    </main>
  );
}
