import { Logo150 } from '../../components/Universal'
import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="Our Recruiters" />
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center">
            <Logo150 />
            <Logo150 src="https://picsum.photos/100/150" />
            <Logo150 src="https://picsum.photos/150/50" />
          </div>
        </div>
      </div>
    </>
  )
}

export default rename_later
