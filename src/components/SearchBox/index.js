import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';

import Button from '../Button';
import Input from '../Input';

class Searchbox extends Component {

    state = {
        query: ''
    }

    myRef = React.createRef();

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isFetchingUsers !== this.props.isFetchingUsers ||
            nextState.query !== this.state.query
    }

    onChangeHandler = ({ target: { value } }) => this.setState({ query: value });

    onClickHandler = () => {
        const { query } = this.state;
        const { isFetchingUsers } = this.props;
        const hasQueryChanged = this.myRef.current !== query;

        if (isFetchingUsers || !hasQueryChanged || !query) return;
        this.myRef.current = query;
        this.props.fetchUsers(query);
    }

    render() {
        return (
            <>
                <Input
                    name='Username'
                    onChange={this.onChangeHandler}
                    placeholder='Enter username'
                    value={this.state.query}
                />
                <Button text='Search' onClick={this.onClickHandler} />
            </>
        );
    }
}

const mapStateToProps = state => ({
    isFetchingUsers: state.users.isFetchingUsers
});

export default connect(mapStateToProps, { fetchUsers })(Searchbox);