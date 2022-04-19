import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            // Value will show whatever is his value,in this case,is ""
                            value={this.state.term}
                            // Every time that the user type smh,the onChange will get what is being written
                            onChange={(e) => {
                                this.setState({ term: e.target.value });
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
