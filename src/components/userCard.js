import React from 'react';


class UserCard extends React.Component {
    state = {
        users: [],
    };

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data
                })
            )
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { users } = this.state;
        return (
            users.map(user => {
                const { id, name, username, email, address, phone, website, company } = user;
                return (
                        <div key={id} className="user-card">
                            <div className="user-card__header">
                                <h5 className="user-card__header__username">{name}</h5>
                                <span className="user-card__header__fullname">{username}</span>
                                <span className="user-card__header__email">{email}</span>
                            </div>
                            <div className="user-card__body">
                                <span className="user-card__body__address"><strong>Address: </strong>{address.street}, {address.suite}</span>
                                <span className="user-card__body__address"><strong>City: </strong>{address.city}</span>
                                <span className="user-card__body__address"><strong>Zip Code: </strong>{address.zipcode}</span>
                                <span className="separator"></span>
                                <span className="user-card__body__company"><strong>Company: </strong>{company.name}</span>
                                <span className="user-card__body__website"><strong>Website: </strong>{website}</span>
                                <span className="user-card__body__phone"><strong>Phone: </strong>{phone}</span>
                            </div>
                            <div className="user-card__footer">
                            </div>
                        </div>
                )
            })
        );
    }
}

export default UserCard
