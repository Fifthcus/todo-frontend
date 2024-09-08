import LogInSignUp from "./components/pages/LogInSignUp"
const App = () => {
  return (
    <>
      <section className="relative bg-pastel-purple h-screen overflow-hidden">
        <section className="absolute w-full flex justify-center items-center mt-32">
          <p className="text-3xl text-neutral-50">To Do</p>
        </section>
        <LogInSignUp />
      </section>
    </>
  )
}

export default App