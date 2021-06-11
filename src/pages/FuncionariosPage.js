import React, { useState } from "react";

<<<<<<< HEAD
class ConveniosPage extends React.Component {
    render() {
      return (
       <div>
           
       </div>
      );
    }
}


export default ConveniosPage;
=======
function adminPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default adminPage;
>>>>>>> e8c355de8f38f8a0a31d568eea598a87fd5192df
