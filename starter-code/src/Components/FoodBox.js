import React from 'react';

class FoodBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      testing:"hello"
    }
  }


  render(){
    return(

      <div className="box">

          <article className="media">

              <div className="media-left">
                <figure className="image is-64x64">
                  <img alt="food" src={ this.props.theImage } />
                </figure>
              </div>

              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{ this.props.theName }</strong> <br />
                    <small>{ this.props.theCalories }</small>
                  </p>
                </div>
              </div>

              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number" 
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={()=>{this.props.sendToday(this)}}>
                      +
                    </button>
                  </div>
                </div>
              </div>

          </article>

      </div>

    )
  }

}


export default FoodBox;