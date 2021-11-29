import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    console.log(json);

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    const { name, animal, breed, city, state, description } = this.state;

    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
