import React from 'react'

function Campaign() {
    function Header(){
        const styleHeader={
            backgroundColor:"green"
        }
return(
    <div style={styleHeader}>
    My head
    </div>
)
    }
    function Subject(){
        return(
            <div>
                This is the subject
            </div>
      
        )
    }
    function Paragraph(){
        return(
  <div>
      This is the body
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
        <div>
            <Header />
            <Subject />
            <Paragraph />
            <Image />
            
        </div>
    )
}

export default Campaign
