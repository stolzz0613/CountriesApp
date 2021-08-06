import React from 'react';
import SkyLight from 'react-skylight';


class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bordersContent: (
                <></>
            ),
            bordersInfo:({})
        };
      }
    
    async _getBorders(borders){
        if (borders.length > 0){
            let res = "";
            const fetchData = async (borders) => {
                const response = await fetch("https://restcountries.eu/rest/v2/alpha?codes=" + borders);
                const data = await response.json();
                this.setState({bordersInfo: data});
            }

            const stringRegion = (
                borders.map(b => {
                    res = res + b + ";"
                })
            )

            await fetchData(res);

            const content = (
                <>
                    <h1>Borders</h1>
                    <div className="Countries-borders">
                        {this.state.bordersInfo.map(border => (
                           <img src={border.flag} alt={border.name} />
                        ))}
                    </div>
                </>
            )
            this.setState({bordersContent: content})
        }
    };

    render() {
      
    var styles = {
        backgroundColor: '#1A1A1E'
    }

    return (
      <div>
        <section>
          <button onClick={() => {this.dialogWithCallBacks.show(); this._getBorders(this.props.data.borders)}}>More Info</button>
        </section>
        <SkyLight
            hideOnOverlayClicked
            ref={ref => this.dialogWithCallBacks = ref} 
            title={this.props.data.title}
            dialogStyles={styles}
        >
            <div className = "Countries-item">
                <img src={this.props.data.flag} alt={this.props.data.name} />
                <div className="Countries-item-info">
                    <h2>{this.props.data.name}</h2>
                    <h2><span>Capital: </span>({this.props.data.capital})</h2> 
                    <h2><span>Population: </span> {this.props.data.population} </h2>
                    {
                        this.state.bordersContent
                    }
                </div>
            </div>
        </SkyLight>
      </div>
    )
  }
}

export default Modal;