import React from 'react';

function Cardinfo(props) {
     
  
return (
        <>


        {props.data.map(soccerPlayer =>  (
            
            <div key={soccerPlayer.id} className='playerCard'>
                <div>
                    <h3>Name: {soccerPlayer.name}</h3>

                    <p>Country: {soccerPlayer.country}</p>
                    
                    <p>searches: {soccerPlayer.searches}</p>
                    
                    
                    
                    </div>
                    
                    </div>
       ))}


       </>
)
}

export default Cardinfo;