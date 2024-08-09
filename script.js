const { Button, TextField, Typography, Container, Box } = MaterialUI;

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = () => {
        if (username === '' || password === '') {
            setError('Both fields are required!');
        } else {
            setError('');
            alert(`Welcome, ${username}!`);
        }
    };

    return (
        <Container className="login-container">
            <Typography variant="h4">Login</Typography>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
            />
            {error && <Typography color="error">{error}</Typography>}
            <Box mt={2}>
                <Button variant="contained" fullWidth onClick={handleLogin}>
                    Login
                </Button>
            </Box>
        </Container>
    );
}

ReactDOM.render(<Login />, document.getElementById('root'));

