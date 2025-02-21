'use client';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { SignInPage } from '@toolpad/core/SignInPage';
import { Navigate, useNavigate } from 'react-router';
import { useSession, type Session } from '../SessionContext';
import { signInWithGoogle, signInWithCredentials } from '../firebase/auth';

function Info() {
  return (
      <Alert severity="info">
        This is a demo of the ISPH Swimming Portal.
        Use the following credentials to sign in:
        <br/>
        <br/>
        Email: &nbsp;
        <strong>quangngo.nz@gmail.com</strong>
        <br/>
        Password: &nbsp;
        <strong>Isph2025</strong>
        <br/>

      </Alert>
  );
}

export default function SignIn() {
  const { session, setSession, loading } = useSession();
  const navigate = useNavigate();

  if (loading) {
    return <LinearProgress />;
  }

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <SignInPage
      providers={[
        { id: 'google', name: 'Google' },
        { id: 'credentials', name: 'Credentials' },
      ]}
      signIn={async (provider, formData, callbackUrl) => {
        let result;

        const remember = formData?.get('remember') as boolean;
        localStorage.setItem('persistence', remember ? 'true' : 'false');

        try {
          if (provider.id === 'google') {
            result = await signInWithGoogle();
          }
          if (provider.id === 'credentials') {
            const email = formData?.get('email') as string;
            const password = formData?.get('password') as string;

            if (!email || !password) {
              return { error: 'Email and password are required' };
            }

            result = await signInWithCredentials(email, password);
          }

          if (result?.success && result?.user) {
            // Convert Firebase user to Session format
            const userSession: Session = {
              user: {
                name: result.user.displayName || '',
                email: result.user.email || '',
                image: result.user.photoURL || '',
              },
            };
            setSession(userSession);
            navigate(callbackUrl || '/', { replace: true });
            return {};
          }
          return { error: result?.error || 'Failed to sign in' };
        } catch (error) {
          return { error: error instanceof Error ? error.message : 'An error occurred' };
        }
      }}
      slots={{ subtitle: Info }}
      slotProps={{
        emailField: {
          defaultValue: 'quangngo.nz@gmail.com',
        },
        passwordField: {
          defaultValue: 'Isph2025',
        },
      }}
    />
  );
}
