import React from 'react';

export default class Radio extends React.Component {
    
    constructor(props) {
        super(props)

    }


    render() {

        return (
            <>
            <span>{this.props.header}</span>
            <div>
            {this.props.options.map((str,i) => {
    
                let id = `${this.props.name}-${str}`
                return <div>
                    <input name={this.props.name} id={id} type="radio" value={str} defaultChecked={(this.props.default === str)} onInput={(ev) => {
                        this.props.callback(ev)
                    }}/>
                    <label htmlFor={id}>{str}</label>
                </div>
            })}
            </div>
            </>
            )
    }
}