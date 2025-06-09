"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'

import { Berkshire_Swash } from 'next/font/google'
import React from "react"
  

const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};


function Contact() {
  const form = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, 
    {
      user_name: data.user_name,
      user_email: data.user_email,
      message: data.message
    }, {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
    }).then(
      () => console.log('SUCCESS!'),
    ).catch((error) => {
      console.error("FAILED with catch:", error); 
    });
  };

    return (
      <div className="flex flex-col w-screen">
      <div className={bs.className}><h1 className="flex flex-row h-fit justify-center text-4xl p-10">Contact</h1></div>
      <div className="flex flex-col md:flex-row justify-evenly w-full items-center">
        <div className="flex flex-col justify-evenly w-fit m-4">
          <Card className="bg-orange-200 dark:bg-cyan-700 w-full mb-4">
              <CardHeader>
                  <CardTitle className="flex justify-center">Address</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <div>19204 Windmill Ln</div>
                <div>Dallas, TX 75252</div>
              </CardContent>
          </Card>
          <Card className="bg-orange-200 dark:bg-cyan-700 w-full mb-4">
              <CardHeader>
                  <CardTitle className="flex justify-center">Phone</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <div>469-226-4949</div>
                <div>972-839-3566</div>
              </CardContent>
          </Card>
          <Card className="bg-orange-200 dark:bg-cyan-700 w-full">
              <CardHeader>
                  <CardTitle className="flex justify-center">Email</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <div>agapebrethrenassembly@gmail.com</div>
              </CardContent>
          </Card>
        </div>
        <div className="hidden md:flex flex-col justify-evenly min-w-fit w-[50vw]">       
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto">
              <FormField
                control={form.control}
                name="user_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="user_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Send</Button>
            </form>
          </Form>
        </div> 
      </div>
      </div>
    )
  }
  
  export default Contact