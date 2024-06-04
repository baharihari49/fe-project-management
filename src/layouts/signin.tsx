import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NavLink, useNavigate } from "react-router-dom"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { postDataFormApi } from "@/function/api"
import { Dispatch,SetStateAction, useState } from "react"
import Cookies from "js-cookie";
import { AxiosError } from 'axios';
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"



const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters."
    })
})

interface SigninProps {
    setAuth: Dispatch<SetStateAction<boolean>>;
  }

export const Signin: React.FC<SigninProps> = ({ setAuth }) => {

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await postDataFormApi({endpoint: 'users/login', data: values})
            if(response?.status === 200) {
                Cookies.set("jwt-token", response.access_token)
                setAuth(true)
                navigate('/')
            }
        } catch (error) {
            if (isAxiosError(error)) {
                const errorMessage = (error.response?.data as { error: string })?.error;
                if (errorMessage) {
                  setErrorMessage(errorMessage)
                } else {
                  setErrorMessage("An error occurred, but no message was provided");
                }
              } else if (error instanceof Error) {
                setErrorMessage(error.message);
              } else {
                setErrorMessage("An unknown error occurred");
              }
        }
    }

          // Type guard to check if an error is an Axios error
          function isAxiosError(error: unknown): error is AxiosError {
            return (error as AxiosError).isAxiosError === true;
          }

   return (
    <>
        <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <h1 className="text-center mb-5 text-2xl font-semibold">Your logo</h1>
                <div className="border shadow-md rounded-md p-5 space-y-5 w-80">
                    {errorMessage && (
                        <Alert variant="destructive">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            {errorMessage}
                        </AlertDescription>
                        </Alert>            
                    )}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button className="w-full" type="submit">Sign in</Button>
                        </form>
                    </Form>
                    <div>
                        <p className="text-sm text-slate-500">Don't have an account yet ? <NavLink to={'/signup'} className="text-black">Sign up</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}