

import { Button, buttonVariants } from '@/shared/components/common/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/components/common/ui/card';
import { Input } from '@/shared/components/common/ui/input';
import { Label } from '@/shared/components/common/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/common/ui/tabs';
import BlankLayout from '@/shared/components/layouts/BlankLayout';
import { cn } from '@/shared/utils/tailwind/functions';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    return (
        <>
            <div className="relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    href="#"
                    className={cn(
                        buttonVariants({ variant: 'outline' }),
                        'absolute right-4 top-4 md:right-8 md:top-8'
                    )}
                >
                    Request to create an account
                </Link>
                <div className="relative md:h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900 login-background" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Image src="/logo_single.svg" width={48} height={48} alt="Logo" />
                        &nbsp; X
                    </div>
                    <div className="relative z-20 mt-auto">
                        <h1 className="text-4xl font-semibold tracking-tight">
                            Give your business everything it need to grow
                        </h1>
                        <p className="mt-4 text-lg">
                            Give it an extra sales channel with ZERO listing costs.
                        </p>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">Copyright &copy; X  2023</p>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">

                        <Tabs defaultValue="merchant" className="w-[350px] mx-auto mt-4">
                            {/* <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="admin">Admin</TabsTrigger>
                            </TabsList> */}

                            {/* Merchant Login */}
                            <TabsContent value="merchant">
                                <Card className="w-[350px]">
                                    <CardHeader>
                                        <CardTitle>Sign in as Admin</CardTitle>
                                        <CardDescription>
                                            Enter your email & password to continue.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form>
                                            <div className="grid w-full items-center gap-4">
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input id="email" type="text" />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="password">Password</Label>
                                                    <Input id="password" type="password" />
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <Button variant="link" className="p-0 h-auto">
                                                        Forgot Password?
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Link href="/dashboard" className="w-full">
                                            <Button className="w-full">Sign In</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </TabsContent>

                            {/* Admin Login */}
                            <TabsContent value="admin">
                                <Card className="w-[350px]">
                                    <CardHeader>
                                        <CardTitle>Sign in as Admin</CardTitle>
                                        <CardDescription>
                                            Enter your username & password to continue.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form>
                                            <div className="grid w-full items-center gap-4">
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="username">Username</Label>
                                                    <Input id="username" type="text" />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="password">Password</Label>
                                                    <Input id="password" type="password" />
                                                </div>

                                            </div>
                                        </form>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Link href="/dashboard" className="w-full">
                                            <Button className="w-full">Sign In</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                        <p className="px-8 text-center text-sm text-muted-foreground pb-6">
                            By logging in, you agree to our <br />
                            <Link
                                href="#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                                href="#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
};

Login.getLayout = (children: React.ReactNode) => <BlankLayout>{children}</BlankLayout>


export default Login;
