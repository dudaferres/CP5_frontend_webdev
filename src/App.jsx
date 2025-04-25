import { Icon } from "@iconify/react";
import FakeUser from "./FakeUser";

function App() {

  return (
    <>
      <div className="flex items-center gap-2 text-xl m-2 p-2 bg-gray-300 rounded w-120">
        <Icon icon="gridicons:multiple-users" className="text-2xl text-gray-600"/>
        <span className="text-lg font-bold">CP5</span>
      </div>
      <div className="border p-3 rounded m-2 w-120">
        <div className="font-bold">
          Fake users list
        </div>
        <hr className="my-4" />
        {
          [...Array(5).keys()].map((e, idx) => <FakeUser key={idx} />)
        }
      </div>
    </>
  )
}

export default App
