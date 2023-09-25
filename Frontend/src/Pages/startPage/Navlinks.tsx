import React from 'react';

const Navlinks = () => {
    const links = [
        {name:'Solutions'},
        {name:'Plans'},
        {name:'Resources'}
    ]
    return<>
        {
            links.map(link=>(
                <div>
                    <div>
                        <h1>{link.name}</h1>
                    </div>
                </div>
            ))
        }
    </>
};

export default Navlinks;