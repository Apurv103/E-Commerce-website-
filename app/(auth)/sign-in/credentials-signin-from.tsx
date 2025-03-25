'use client';

import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { signInDefaultValues } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CredentialsSignInForm = () => {
    return <form>
        <div className="space-y-6">
            <div>
                <label htmlFor='email'>Email</label>
                <Input id ='email' name='email' type='email' required autoComplete="email"  defaultValue={signInDefaultValues.email}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <Input id ='password' name='password' type='password' required autoComplete="password" defaultValue={signInDefaultValues.password}/>
            </div>   
            <div>
                <Button className="w-full" variant='default'>
                    Sign In
                </Button>
            </div>
            <div className="text-sm text-center text-muted-foreground">
                Don&apos;t have an account? {' '}
                <Link href='/sign-up' target="_self" className='link' style={{ textDecoration: 'underline' }}>
                Sign Up</Link>
            </div>
        </div>
    </form>;
}
 
export default CredentialsSignInForm;