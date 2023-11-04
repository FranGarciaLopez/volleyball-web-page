import React from "react";
import Image from "next/image";

const Blog = () => {
          return (
                    <article className="max-w-full rounded overflow-hidden shadow-lg bg-white">
                              <section className="flex flex-col md:flex-row">
                                        <figure className="card-image w-full md:w-1/2">
                                                  <Image
                                                            className="responsive-img"
                                                            src={require("../public/sunset.jpg")} // Replace with your image source
                                                            alt="Sunset in the mountains"
                                                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                                  />
                                        </figure>

                                        <div className="w-full md:w-1/2 px-4 py-2 md:px-8 py-6">
                                                  <header className="card-title font-bold text-lg md:text-2xl text-gray-700">
                                                           <h2>The Coldest Sunset</h2>
                                                  </header>
                                                  <p className="card-text text-gray-700 text-sm md:text-md">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar eros non justo congue.
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar eros non justo congue.
                                                  </p>
                                        </div>
                              </section>
                    </article>


          );
}

export default Blog;