// import PersonScore from "./PersonScore";
import Todo from "./components/Todo";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* <PersonScore /> */}
      <Todo />
    </div>
  );
}
