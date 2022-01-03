import Breadcrumb from '../../components/Breadcrumb'
import { ProseWide } from '../../components/Universal'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="Advisory Council" />

      <div className="container flex flex-wrap justify-center px-5 py-20 mx-auto">
        <Member
          color="red"
          name="Mr. Kanwaljit Singh"
          title="Vice-Chairman"
          more="Sri Sukhmani Group of Institutes"
        />

        <span className="w-full" />

        <Member
          color="blue"
          name="Ms. Joyeeta Kumar"
          title="VP-Head Buying & Merchandising"
          more="Reliance Retail"
        />

        <Member
          color="blue"
          name="Mr. Kumar Ashish"
          title="President"
          more="Bandhan Bank"
        />

        <Member
          color="blue"
          name="Mr. Sanjeet Joher"
          title="Head – South Asia"
          more="VFS Global"
        />

        <span className="w-full" />

        <Member color="green" name="Ms. Sanjana Kalra" title="Educationist" />

        <Member color="green" name="Dr. Sujata Kaul" title="Educationist" />

        <Member color="green" name="Mr. Sushant Sinha" title="Educationist" />

        {/* 
        <h3>Ms. Joyeeta Kumar</h3>
        <p className="">VP-Head Buying & Merchandising, Reliance Retail</p>

        <h3>Mr. Kumar Ashish</h3>
        <p className="">President, Bandhan Bank</p>

        <h3>Mr. Sanjeet Joher</h3>
        <p className="">Head – South Asia, VFS Global</p>

         */}
      </div>
    </>
  )
}

const Member = (props) => {
  return (
    <>
      <div className={`px-5 py-10 w-[300px] ${props.className}`}>
        <div className={`flex flex-col border-t-8 border-gray-300 pt-5`}>
          <h3
            className={`text-lg font-semibold text-${
              props.color || 'blue'
            }-500`}
          >
            {props.name}
          </h3>
          <p className="text-base font-semibold">{props.title}</p>
          <p className="text-sm">{props.more}</p>
        </div>
      </div>
    </>
  )
}

export default rename_later
