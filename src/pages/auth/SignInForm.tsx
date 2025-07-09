import { Button, TextField } from '@mui/material';
import { type FC, useState } from 'react';
import axios from 'axios';
import { setTokenInApp } from '../../providers/auth/auth.ts';

export interface ISignInFormProps {
    toggleSignIn: () => void;
}

export const SignInForm: FC<ISignInFormProps> = (props) => {
    const { toggleSignIn } = props;

    const [Data, setData] = useState({
        username: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const newData = { ...Data, [name]: value };
        setData(newData);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        setIsLoading(true);
        axios
            .post('http://localhost:8080/api/auth/login', Data)
            .then((response) => {
                setTokenInApp(response.data.token);
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <form className="flex flex-col gap-4 rounded shadow-xl p-8 w-full max-w-xl">
            <h1 className="text-center font-bold text-2xl">Sign in</h1>
            <TextField
                label="Username"
                name="username"
                variant="outlined"
                required
                onChange={handleChange}
                disabled={isLoading}
            />
            <TextField
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                required
                disabled={isLoading}
                onChange={handleChange}
            />
            <Button
                variant="contained"
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                onClick={handleSubmit}
            >
                Submit
            </Button>
            <div className="text-center">
                <p className="text-gray-600">Already have an account?</p>
                <p className="text-blue-800 cursor-pointer" onClick={toggleSignIn}>
                    Register
                </p>
            </div>
        </form>
    );
};
