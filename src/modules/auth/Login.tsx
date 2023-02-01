import { useForm } from 'react-hook-form'
import { LoginInputs } from '../../types'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLogin } from '../../schemas/schema'
import { Box, Container, Stack, Typography } from '@mui/material'
import { CustomTextField } from '../../components/CustomTextField'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton'
import { useAppDispatch } from '../../hooks/hook'
import { loginUser } from '../../features/auth/authSlice'

const Login = () => {
    const dispatch = useAppDispatch()
    const { handleSubmit, control } = useForm<LoginInputs>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: yupResolver(schemaLogin)
    })

    // const [user, setUser] = useState<SetStateAction<LoginInputs | any>>()

    const onSubmit = (data: LoginInputs) => {
        dispatch(loginUser(data))
        // reset()
    }

    // const response = loginUser({
    //     email,
    //     password 323
    // });

    // console.log('response', response)

    // if ('accessToken' in response) {

    //     localStorage.setItem('accessToken', response['accessToken']);
    //     localStorage.setItem('user', JSON.stringify(response['user']));
    //     navigate("/profile")
    //     reset()
    // };

    // useEffect(() => {
    //     if (isError) {
    //         toast.error(errorMessage);
    //         dispatch(clearState());
    //     }

    //     if (isSuccess) {
    //         dispatch(clearState());
    //         navigate('/');
    //     }
    // }, [isError, isSuccess]);

    return (
        <Container maxWidth='xs'>
            <Stack
                spacing={2}
                direction="column"
                sx={{
                    maxWidth: {
                        xs: "400px",
                        md: "100%",
                    },
                }}
            >
                <Box onSubmit={handleSubmit(onSubmit)} component="form">
                    <Typography variant='h3' textAlign='center' my='2rem'>Login Form</Typography>
                    <CustomTextField
                        name="username"
                        control={control}
                        label="username"
                        type="text"
                        placeholder="Enter your username..."
                    />
                    <CustomTextField
                        name="password"
                        control={control}
                        label="Password"
                        type="password"
                        placeholder="Enter your password..."
                    />
                    <CustomButton text="Sign In With Username" />
                </Box>

                <Box mt="10px" textAlign="start">
                    <Typography component="p" sx={{
                        color: "rgba(0,0,0,0.88)",
                        fontSize: "13px",
                        lineHeight: 1.2,
                        textAlign: "center",
                    }} mt="10px">
                        By continuing with  Email, you agree to StoreApp’s{" "}
                        <Link
                            to="https://doist.com/terms-of-service"
                            className="link-color"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="https://doist.com/privacy" className="link-color">
                            Privacy Policy.
                        </Link>
                    </Typography>
                </Box>
                <Box component="hr" sx={{ my: "10px", color: "#fff" }} />
                <Box mt="10px">
                    <Typography
                        component="p"
                        sx={{
                            color: "rgba(0,0,0,0.88)",
                            fontSize: "13px",
                            lineHeight: 1.2,
                            textAlign: "center",
                        }}
                        textAlign="center"
                    >
                        Don't have an account?{"  "}
                        <Link to="/signup" className="link-color">
                            Go to Signup
                        </Link>
                    </Typography>
                </Box>
            </Stack>
        </Container>
    )
}

export default Login
