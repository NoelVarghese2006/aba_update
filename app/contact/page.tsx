"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string()
})


function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        message: ""
      },
    })
 
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }


    return (
      <div className="flex flex-col w-screen">
      <h1 className="flex flex-row h-fit justify-center">Contact</h1>
      <div className="flex flex-col md:flex-row justify-evenly w-full items-center">
        <div className="flex flex-col justify-evenly w-fit m-4">
          <Card className="bg-amber-200 w-full mb-4">
              <CardHeader>
                  <CardTitle className="flex justify-center">Address</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <div>19204 Windmill Ln</div>
                <div>Dallas, TX 75252</div>
              </CardContent>
          </Card>
          <Card className="bg-amber-200 w-full mb-4">
              <CardHeader>
                  <CardTitle className="flex justify-center">Phone</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <div>469-226-4949</div>
                <div>972-839-3566</div>
              </CardContent>
          </Card>
          <Card className="bg-amber-200 w-full">
              <CardHeader>
                  <CardTitle className="flex justify-center">Email</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <div>agapebrethrenassembly@gmail.com</div>
              </CardContent>
          </Card>
        </div>
        <div className="flex flex-col justify-evenly min-w-fit w-[50vw]">       
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
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
                      <Textarea placeholder="Enter your message."/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>  
        </div> 
      </div>
      </div>
    )
  }
  
  export default Contact