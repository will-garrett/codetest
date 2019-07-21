import React from 'react'

export default class FactoidForm extends React.Component {
  render() {
    return (
      <div style={{ padding: "10px" }} className="container">
        <form>
          <p>
            <label htmlFor="factoid">Add Your Factoid: </label>
            <textarea
              placeholder='Example: People would generally describe me as no nonsense, brief, and "to the point", but bad at writing titles.'
              name="factoid"
            />
          </p>
          <button>Create New Interest</button>
        </form>
      </div>
    );
  }
}
