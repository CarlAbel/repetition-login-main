import ClassesForYou from "../components/ClassesForYou"
import PopularClass from "../components/PopularClass"

export default function Home() {
  return (
    <div className="Home">
      <h1 className="text-center text-[28px] mb-8">Popular Class</h1>
      <PopularClass />
      <h1 className="text-[28px] mb-4">Classes for you</h1>
      <ClassesForYou />
    </div>
  )
}
