import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img
          src="https://th.bing.com/th/id/R.69f90ad5d78474992e3772219f3bb32a?rik=VGzo45bFQ1q%2fqg&riu=http%3a%2f%2fwww.thagomizer.com%2fimg%2fkubernetes-logo.png&ehk=DPQlhZMbU37ry5cONpZfEIcP8zLMGN7lywpqaNeJ63s%3d&risl=&pid=ImgRaw&r=0"
          alt="Kubernetes"
          className="w-32 h-32 mb-4"
        />
        <h1 className="font-bold text-4xl text-center">
          Hey! Ankit, <br /> Your Application Deployed Successfully Using
          Kubernetes
        </h1>
      </div>
    </>
  );
}
