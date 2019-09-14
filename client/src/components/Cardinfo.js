import React from 'react';

function getUrl(theName,country) {
    
    console.log(theName);

    let url = "http://www.google.com/search?q=placeHolder"  
   
    theName = theName.replace(" ", "+");
    theName = theName.replace(" ", "+");
    theName = theName.replace(" ", "+");
    theName = theName + "+women's+world+cup+2019+" + country;
    url = url.replace("placeHolder", theName)
    console.log(url);
    
    return url;
    
}

function Cardinfo(props) {
 
return (
        <>

        

        {props.data.map(soccerPlayer =>  (
            
            <div key={soccerPlayer.id} className='playerCard'>
                <div>
                    <h3><a target="_blank" href={getUrl(soccerPlayer.name,soccerPlayer.country)} alt="#" rel="noopener noreferrer">{soccerPlayer.name}</a></h3>

                    <p>Country: {soccerPlayer.country}</p>
                    
                    <p>searches: {soccerPlayer.searches}</p>
                    
                    
                    
                    </div>
                    
                    </div>
       ))}


       </>
)
}

export default Cardinfo;