import React from 'react';

class Entry extends React.Component {

    render(){
        const { entry } = this.props;
        return(
            <div>
                <div>
                    {entry.page}<br/>
                    <img alt='' src={entry.image}></img>
                </div>
            </div>
        );
    }
}

export default Entry;