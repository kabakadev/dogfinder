function Home() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-200">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Explore a variety of Dog Breeds!
        </h1>
        <p className="text-lg text-gray-500">
          Have a look at the wide selection of the most popular dog breeds. Feel
          free to also add your own Dog breed here.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Editor's Pick{" "}
          </h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <img
              src="https://images.unsplash.com/photo-1513284999445-edcb3221417c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="featured dog"
              className="w-full md:w-1/2 object-cover "
            />
          </div>
        </section>
      </section>
    </div>
  );
}
export default Home;
