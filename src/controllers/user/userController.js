function getUsers(req, res) {
    res.send('Get all users');
}
function getUserById(req, res) {
    res.send('Get user by id');
}
function createUser(req, res) {
    res.send('Create user');
}
function updateUser(req, res) {
    res.send('Update user');
}
function deleteUser(req, res) {
    res.send('Delete user');
}
export { getUsers, getUserById, createUser, updateUser, deleteUser };