import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
const MyAccordion = () => {
  const [show, setshow] = useState(false)
  const [show1, setshow1] = useState(false)
  const [show2, setshow2] = useState(false)
  const accordionData = {
    title: 'What is Lorem Ipsum?',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    title1: 'Where does it come from?',
    content1: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
      Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
      This book is a treatise on the theory of ethics, very popular during the Renaissance.`,
    title2: 'Why do we use it?',
    content2: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
      `
  };

  const { title, content, title1, content1, title2, content2 } = accordionData;
  return (
    <div>
      <React.Fragment>
            <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
             </div>
        <p style={{ fontSize: '32px' }}>Accordian</p>
        <div className="accordion" onClick={() => setshow(!show)} style={{ height: '28px', width: '50%', marginLeft: '16%' }}>
          <div className="accordion-item">
            <div className="accordion-title" style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{fontWeight:'bold'}}>{title}</div>

            </div>
            {show &&
              <div className="accordion-content" style={{marginTop:'1%'}}>{content}</div>
            }

          </div>
        </div>
        <div className="accordion" onClick={() => setshow1(!show1)} style={{ height: '28px', width: '50%', marginLeft: '16%',marginTop:'11%' }}>
          <div className="accordion-item">
            <div className="accordion-title" style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{fontWeight:'bold'}}>{title1}</div>

            </div>
            {show1 &&
              <div className="accordion-content" style={{marginTop:'1%'}}>{content1}</div>
            }
          </div>
        </div>
        <div className="accordion" onClick={() => setshow2(!show2)} style={{ height: '28px', width: '50%', marginLeft: '16%',marginTop:'20%' }}>
          <div className="accordion-item">
            <div className="accordion-title" style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{fontWeight:'bold'}}>{title2}</div>

            </div>
            {show2 &&
              <div className="accordion-content" style={{marginTop:'1%'}}>{content2}</div>
            }
          </div>
        </div>
      </React.Fragment>



    </div>
  )
}

export default MyAccordion;