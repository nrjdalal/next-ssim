import { ProseWide } from '../../components/Universal.js'
import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="FAQ's" />
      <div className="container mx-auto px-6 py-24">
        <Question question="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...">
          There is no one who loves pain itself, who seeks after it and wants to
          have it, simply because it is pain...
        </Question>
      </div>
    </>
  )
}

const Question = (props) => {
  return (
    <>
      <button className="group text-left mt-6 w-full">
        <div className="bg-gray-200 p-3 flex justify-between items-center rounded-2xl">
          <h3 className="font-semibold w-11/12">{props.question}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3 w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <p className="hidden group-focus:block px-3 mt-4">{props.children}</p>
      </button>
    </>
  )
}

export default rename_later
