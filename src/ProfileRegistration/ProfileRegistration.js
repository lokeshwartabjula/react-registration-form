
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import './profile-registration.css';

function ProfileRegistration(props) {

    const [firstName, setFirstName] = useState('');
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [lastName, setLastName] = useState('');
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});

    const navigate = useNavigate();

    const handlefNameUpdate = (e) => {
        const re = /^[A-Za-z]+$/;
        e.preventDefault();
        setFirstName(e.target.value);
        if(e.target.value.length > 0 && re.test(firstName))
            setIsFirstNameValid(true);
        else
            setIsFirstNameValid(false);

        console.log('isFirstNameValid boolean is ',isFirstNameValid);

    }

    const handlelNameUpdate = (e) => {
        const re = /^[A-Za-z]+$/i;
        e.preventDefault();
        setLastName(e.target.value);
        if(e.target.value.length > 0 && re.test(e.target.value))
            setIsLastNameValid(true);
        else
            setIsLastNameValid(false);
    }

    const handleEmailUpdate = (e) => {
        // const re = /^\S+@\S+$/i;
        const email = e.target.value;

        e.preventDefault();
        setEmail(e.target.value);
        if(e.target.value.length > 0 && validator.isEmail(email))
            setIsEmailValid(true);
        else
            setIsEmailValid(false);
    }

    const handlePasswordUpdate = (e) => {
        const re = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;\"'<>,.?\/\\|~-]*$/i;
        e.preventDefault();
        setPassword(e.target.value);
        if(e.target.value.length > 0 && re.test(e.target.value) && e.target.value.length >= 8)
            setIsPasswordValid(true);
        else
            setIsPasswordValid(false);
    }

    const handleConfirmPasswordUpdate = (e) => {
        const re = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;\"'<>,.?\/\\|~-]*$/i;
        e.preventDefault();
        setConfirmPassword(e.target.value);
        if(e.target.value.length > 0 && re.test(e.target.value) && e.target.value === password && e.target.value.length >= 8)
            setIsConfirmPasswordValid(true);
        else
            setIsConfirmPasswordValid(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0)
            alert('Please fill all the fields');
        props.setUser({...user, firstName: firstName, lastName: lastName, email: email, password: password, confirmPassword: confirmPassword});
        console.log(props.user);

        navigate('/profile');
    }




    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     props.setUser({...props.user, [e.target.name]: e.target.value});
    // }

  return (
    <div className='content-style'>
      <Heading>Profile Registration Page</Heading>
        <Box bg={'green.50'} w='50%' p={4} color='black' alignContent={'center'} alignItems={'center'} alignSelf={'center'}>

        <FormControl isInvalid={!isFirstNameValid}>
            <FormLabel>First Name</FormLabel>
                <Input type='text' value={firstName} onChange={handlefNameUpdate} />
                {isFirstNameValid ? (
                <FormHelperText>
                    Enter your First Name
                </FormHelperText>
                ) : (
                <FormErrorMessage>First Name is required and should contain only alphabets.</FormErrorMessage>
            )}
        </FormControl>   

        <FormControl isInvalid={!isLastNameValid}>
            <FormLabel>Last Name</FormLabel>
                <Input type='text' value={lastName} onChange={handlelNameUpdate} />
                {isLastNameValid ? (
                <FormHelperText>
                    Enter your Last Name
                </FormHelperText>
                ) : (
                <FormErrorMessage>Last Name is required and should contain only alphabets.</FormErrorMessage>
            )}
        </FormControl>  

        <FormControl isInvalid={!isEmailValid}>
            <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={handleEmailUpdate} />
                {isEmailValid ? (
                <FormHelperText>
                    Enter your Email
                </FormHelperText>
                ) : (
                <FormErrorMessage>Email is required and should be in a valid email format.</FormErrorMessage>
            )}
        </FormControl>  

        <FormControl isInvalid={!isPasswordValid}>
            <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={handlePasswordUpdate} />
                {isPasswordValid ? (
                <FormHelperText>
                    Enter your Password
                </FormHelperText>
                ) : (
                <FormErrorMessage>Password is required and should have minimum 8 characters.</FormErrorMessage>
            )}
        </FormControl>

        <FormControl isInvalid={!isConfirmPasswordValid}>
            <FormLabel>Confirm Password</FormLabel>
                <Input type='password' value={confirmPassword} onChange={handleConfirmPasswordUpdate} />
                {isConfirmPasswordValid ? (
                <FormHelperText>
                    Enter your Password again
                </FormHelperText>
                ) : (
                <FormErrorMessage>Confirm Password is required and should be same as Password.</FormErrorMessage>
            )}
        </FormControl>

        <Button colorScheme='teal' onClick={handleSubmit} disabled={!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid}>Submit</Button>


        </Box>
    </div>
  );
}

export default ProfileRegistration;