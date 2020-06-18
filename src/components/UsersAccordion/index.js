import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepositories } from '../../actions/index';

import Loader from '../Loader';
import UserItem from './UserItem';

const initialActiveItemsState = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
}

class UserAccordion extends Component {

    state = {
        activeItems: initialActiveItemsState
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.selectedUsers) !== JSON.stringify(this.props.selectedUsers)) {
            this.setState({ activeItems: initialActiveItemsState });
        }
    }

    onClickHandler = (index, login) => {
        const { fetchRepositories, repositories } = this.props;

        if (this.state.activeItems[index]) {
            this.setState({ activeItems: initialActiveItemsState });
            return;
        }

        this.setState({ activeItems: { ...initialActiveItemsState, [index]: true } });
        if (repositories[login]) return;

        fetchRepositories(login);
    }

    renderUsers = () => {
        const { isFetchingRepositories, repositories, selectedUsers } = this.props;

        return selectedUsers.users.items.map(({ login }, index) =>
            <UserItem key={index} login={login} isFetchingRepositories={isFetchingRepositories} repositories={repositories[login]} isActive={this.state.activeItems[index]} onClick={() => this.onClickHandler(index, login)} />
        );
    }

    render() {
        const { isFetchingUsers, selectedUsers } = this.props;

        if (isFetchingUsers) return <Loader />;
        if (!selectedUsers) return null;

        return (
            <div>
                {this.renderUsers()}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    isFetchingRepositories: state.users.isFetchingRepositories,
    isFetchingUsers: state.users.isFetchingUsers,
    repositories: state.users.repositories,
    selectedUsers: state.users.selectedUsers
});

export default connect(mapStateToProps, { fetchRepositories })(UserAccordion);