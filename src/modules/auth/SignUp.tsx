import { useForm } from 'react-hook-form'
import { RegisterInputs } from '../../types'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaRegister } from '../../schemas/schema'
import { Box, Container, Stack, Typography } from '@mui/material'
import { CustomTextField } from '../../components/CustomTextField'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton'


const SignUp = () => {
    const { handleSubmit, control, reset } = useForm<RegisterInputs>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        },
        resolver: yupResolver(schemaRegister)
    })

    const onSubmit = (data: RegisterInputs) => {
        
        // dispatch(signupUser(data))
        reset()
    }

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
                    <Typography variant='h3' textAlign='center' my='2rem'>Signup Form</Typography>
                    <CustomTextField
                        name="username"
                        control={control}
                        label="Username"
                        type="text"
                        placeholder="Enter a username..."
                    />
                    <CustomTextField
                        name="email"
                        control={control}
                        label="Email"
                        type="email"
                        placeholder="Enter your email..."
                    />
                    <CustomTextField
                        name="password"
                        control={control}
                        label="Password"
                        type="password"
                        placeholder="Enter your password..."
                    />
                    <CustomButton text="Sign Up With Email" />
                </Box>

                <Box mt="10px" textAlign="start">
                    <Typography
                        component="p"
                        sx={{
                            color: "rgba(0,0,0,0.88)",
                            fontSize: "13px",
                            lineHeight: 1.2,
                        }}
                    >
                        By continuing with Google, Apple, or Email, you agree to Todoist’s{" "}
                        <Link to="#terms" className="link-color">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="#terms" className="link-color">
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
                    >
                        Already signed up?{" "}
                        <Link to="/login" className="link-color">
                            Go to login
                        </Link>
                    </Typography>
                </Box>
                <Box />
            </Stack>
        </Container>
    )
}

export default SignUp
