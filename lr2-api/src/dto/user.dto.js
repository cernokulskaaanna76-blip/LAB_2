function toUserResponse(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}

function toUsersResponse(users) {
    return users.map(toUserResponse);
}

module.exports = {
    toUserResponse,
    toUsersResponse
};