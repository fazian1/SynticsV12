import axios from 'axios';
import bcrypt from 'bcryptjs';

export const UserRegistration = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    data["password"] = hash;

    return axios.post('https://syntics.co/registration/register', data)
        .then(res => res.status);
};

export const UsernameValidation = data => (
    axios.post('https://syntics.co/registration/validateUsername', data)
    .then(exist => exist.status)
)