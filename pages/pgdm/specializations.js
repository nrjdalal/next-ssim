import Breadcrumb from '../../components/Breadcrumb'
import { ProseWide } from '../../components/Universal'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="specializations" />
      <ProseWide className="py-24">
        {/* Enter as h1 h2 h3 p p p p p blockquotes etc */}
        <h3>Dual Specialization Offered</h3>
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Marketing</li>

        <h3>General Management Subjects (Ist - IIIrd Trimester)</h3>
        <li>Operations Management I</li>
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Marketing</li>
      </ProseWide>
    </>
  )
}

export default rename_later
