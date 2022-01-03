import Breadcrumb from "../../components/Breadcrumb";
import { ProseWide } from "../../components/Universal";

const chairmans_message = () => {
  return (
    <>
      <Breadcrumb title="Chairman's Message" />
      <ProseWide className="container mx-auto prose my-12 px-5">
        <div className="flex justify-center">
          <img
            className="rounded-3xl w-[250px] object-cover object-center"
            src="/images/other/chairman.jpg"
            alt="chairman"
          />
        </div>
        <blockquote>
          I wish to thank you for showing interest in Sri Sukhmani Institute of
          Management, New Delhi. We have been providing quality education in
          Management over the decade and over thousand students have graduated
          from SSIM since its inception in 2009.
          <br />
          <br />
          At SSIM, students are expected to have an enriching and life turning
          experience which will enable them to reach new heights in their
          professional as well as personal life. We foster sharpening of skills
          and enhancement of knowledge base in our students through various
          extra-curricular, co-curricular and curricular activities through
          faculty who not only keep themselves at par with the current
          developments but also contribute to the expansion of the body of
          knowledge in their field of expertise. To facilitate this, we have
          centers of excellence to enhance domain specific research and training
          among members of faculty and Entrepreneurship among students with vary
          congenial and Professional environment. Our faculty makes substantial
          contribution to the academia through quality teaching, publications,
          seminars, conferences etc. The Faculty contribution has received
          recognition by way of various collaboration. We have with our partner
          Institutions in India and Abroad, and the excellent goodwill we enjoy
          with the corporate World, who generously contribute to our various
          academic processes. Corporate interactions including corporate
          supported projects undertaken by our students under Faculty
          supervisions considered unique and distinct, in the sense that it
          gives a close practical exposure to our students as part of
          Curriculum.
          <br />
          <br />
          As a prospective students, you are welcome to explore alternatives
          that may be available to you in our various Academic Programs and
          please do not hesitate to contact us for any information.
          <br />
          <br />
          As a parent of student, we assure you of a very enriching and fruitful
          time that your ward will be spending with us.
        </blockquote>
        <p className="text-right">
          Dr. Ajay Sharma
          <br />
          Chairman
        </p>
      </ProseWide>
    </>
  );
};

export default chairmans_message;
