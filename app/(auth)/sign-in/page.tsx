import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import CredentialsSignInForm from "./credentials-signin-from";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
    title: 'Sign In'
};


const signInPage = async () => {
     // Check session
     const session = await auth();

     if (session) {
         // Redirect to home if the user is already signed in
         redirect('/');
     }
    // const session = await auth();

    // if (session){
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false,
    //         },
    //     };
    // }
    return (
        <div className="w-full max-w-md mx-auto">
            <Card>
                <CardHeader className="space-y-4">
                    <Link href='/' className='flex-center'>
                        <Image src='/images/logo.svg' width={100} height={100} alt={`${APP_NAME} logo`} priority= {true}/>
                    </Link>
                    <CardTitle className = "text-center">
                        Sign In
                    </CardTitle>
                    <CardDescription className = 'text-center'>
                        Sign In to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    < CredentialsSignInForm/>
                </CardContent>
            </Card>
        </div>
    );
};
 
export default signInPage;