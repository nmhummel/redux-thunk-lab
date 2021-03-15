import React from 'react';

class CatList extends React.Component {

    listOfCats =() => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}/>)
        // per console warning: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
    } 

    render() {
        return(
        <div>
            {this.listOfCats()}
        </div>
        )
    }
}

export default CatList; 