import React from 'react';

class ThemedDecorations extends React.Component {
    render() {
       let decoratedChildren = React.Children.map(this.props.children, child => {
           return React.cloneElement(child, {
               className: this.props.theme
           })
       })

       return (
           <div>
               { decoratedChildren }
           </div>
       )

    }
}

export default ThemedDecorations;