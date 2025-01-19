import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function CollapsedImagem({chuva}) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className='d-flex m-5 containerCollaped' style={{position: "absolute", right: "0", }} >
    
      <Button
        variant='warning'
        style={{height:"30vh", marginTop: "4rem"}}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {open ?  <i class="bi bi-caret-right"></i> :  <i class="bi bi-caret-left"></i>}
       
      </Button>
      <div style={{ minHeight: '150px', marginTop: "4rem" }}>
        <Collapse  in={open} dimension="width">
          <div id="example-collapse-text">
            {chuva <= 50 ?  (
            
            <Card body style={{ width: '280px', height:"30vh", backgroundImage: "url(ceuAzul.avif)", backgroundSize: "400px", backgroundRepeat: "no-repeat"} }>
                
            </Card>

            )
         : (
            
             <Card body style={{ width: '280px', height:"30vh", backgroundImage: "url(chuva.jpg)", backgroundSize: "400px", backgroundRepeat: "no-repeat"} }>
                
             </Card>
            
         )}
          </div>
        </Collapse>
        </div>
    </div>
        
    </>
  );
}

export default CollapsedImagem;