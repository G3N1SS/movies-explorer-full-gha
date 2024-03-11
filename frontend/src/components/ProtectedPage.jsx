import Header from "./Header";
import IntroPage from "./IntroPage";
import Footer from "./Footer";

export default function ProtectedHome({ ...props }) {
  return (
    <>
      <Header/>
      <IntroPage {...props} />
      <Footer />
    </>
  )
}