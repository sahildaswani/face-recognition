import React from 'react'

class Rank extends React.Component {
    render(){
        const { name, entries } = this.props
        return(
            <div>
                <div className="white f3">
                    {`${name}, your current entry count is...`}
                </div>
                <div className="white f1">
                    {entries}
                </div>
            </div>
        );
    }
}

export default Rank