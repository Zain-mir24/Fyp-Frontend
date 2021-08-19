import React from 'react'

function Campaign() {
    const mainDiv={
        border:"1px solid black",
        width:"100%"
        
    }
    const bodyDivImg={
        border:"1px solid black"
    }
    function Header(){
        const styleHeader={
            backgroundColor:"#CCFFCC",
            fontSize    :"20px",
        textAlign:"left"     }
return(
    <div style={styleHeader}>
    My head
    </div>
)
    }
    function Subject(){
        const subjectDiv={
            
            textAlign:"left" 
        }
        return(
            <div style={subjectDiv}>
                This is the subject
            </div>
      
        )
    }
    function Paragraph(){
        return(
  <div style={bodyDivImg}>
      This is the body:
  </div>
        )

    }
    function Image(){
        return(
            <div>
                This is for the image
            </div>


        )

    }
    return (
        <div style={mainDiv}>
            <Header />
            <Subject />
            <Paragraph />
            <Image />
            
        </div>
    )
}

export default Campaign
