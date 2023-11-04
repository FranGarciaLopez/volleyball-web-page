import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

const FullScreenImage = () => {
          return (
                    <article className="relative w-full h-screen">
                              <div className="absolute top-0 left-0 w-full h-full">
                                        <Image
                                                  src="/beach-volley-2.webp" 
                                                  alt="Beach Volleyball"
                                                  layout="fill" 
                                                  objectFit="cover" 
                                                  quality={100}
                                                  priority={true}
                                        />
                              </div>

                              <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

                              <section className="absolute inset-0 flex items-center justify-center gap-4 p-8">
                                        <div className="z-10 mb-4 ml-8">
                                                  <header className="flex items-center gap-2">
                                                            <h1 className="text-blue-400 text-4xl font-bold">Beach Volley</h1>
                                                            <h1 className="text-yellow-500 text-4xl font-bold pr-2">Arena</h1>
                                                  </header>
                                                  <p className="text-xl text-white font-bold">
                                                            The best place to play beach volleyball
                                                  </p>

                                                  <div className="mt-4 flex justify-center">
                                                            <NextLink href="/about" passHref>
                                                                      <Button className="hover:bg-secondary-700" color="secondary" variant="shadow">
                                                                                Meet us
                                                                      </Button>
                                                            </NextLink>
                                                  </div>
                                        </div>
                              </section>
                    </article>
          );
};

export default FullScreenImage;
